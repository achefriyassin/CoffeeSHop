/* ========================================================================
   O'Clock Zone — Reservation Manager
   Client-side reservation engine with localStorage persistence.
   ======================================================================== */

const ReservationManager = {
    STORAGE_KEY: 'goc-reservations',
    CAPACITY: { pc: 15, console: 5 },

    // Pricing tiers in Dirhams
    PRICING: {
        pc:      { 1: 30, 2: 55, 4: 99 },
        console: { 1: 30, 2: 55, 4: 99 }
    },

    /* ------------------------------------------------------------------
       CRUD Operations
       ------------------------------------------------------------------ */

    /** Generate a unique reservation code like GOC-A3F2 */
    _generateCode() {
        const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
        let code = '';
        for (let i = 0; i < 4; i++) {
            code += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        // Make sure it's unique
        const existing = this.getAllReservations();
        const fullCode = 'GOC-' + code;
        if (existing.some(r => r.code === fullCode)) {
            return this._generateCode();
        }
        return fullCode;
    },

    /** Get all reservations from storage */
    getAllReservations() {
        try {
            const data = localStorage.getItem(this.STORAGE_KEY);
            return data ? JSON.parse(data) : [];
        } catch (e) {
            console.error('ReservationManager: Failed to read storage', e);
            return [];
        }
    },

    /** Save all reservations to storage */
    _save(reservations) {
        try {
            localStorage.setItem(this.STORAGE_KEY, JSON.stringify(reservations));
        } catch (e) {
            console.error('ReservationManager: Failed to save', e);
        }
    },

    /** Create a new reservation */
    createReservation(data) {
        const errors = this._validate(data);
        if (errors.length > 0) {
            return { success: false, errors };
        }

        const reservation = {
            code: this._generateCode(),
            name: data.name.trim(),
            email: data.email.trim(),
            phone: data.phone.trim(),
            date: data.date,
            time: data.time,
            station: data.station,      // 'pc' or 'console'
            duration: parseInt(data.duration) || 1,
            party: parseInt(data.party) || 1,
            status: 'pending',          // pending, confirmed, completed, cancelled
            cost: this.calculateCost(data.station, parseInt(data.duration) || 1),
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString()
        };

        const all = this.getAllReservations();
        all.push(reservation);
        this._save(all);

        return { success: true, reservation };
    },

    /** Get a single reservation by code */
    getReservation(code) {
        const all = this.getAllReservations();
        return all.find(r => r.code === code.toUpperCase()) || null;
    },

    /** Find reservations by email */
    findByEmail(email) {
        const all = this.getAllReservations();
        return all.filter(r => r.email.toLowerCase() === email.toLowerCase());
    },

    /** Update reservation status */
    updateStatus(code, status) {
        const validStatuses = ['pending', 'confirmed', 'completed', 'cancelled'];
        if (!validStatuses.includes(status)) {
            return { success: false, error: 'Invalid status' };
        }

        const all = this.getAllReservations();
        const idx = all.findIndex(r => r.code === code.toUpperCase());
        if (idx === -1) {
            return { success: false, error: 'Reservation not found' };
        }

        all[idx].status = status;
        all[idx].updatedAt = new Date().toISOString();
        this._save(all);

        return { success: true, reservation: all[idx] };
    },

    /** Delete a reservation */
    deleteReservation(code) {
        const all = this.getAllReservations();
        const filtered = all.filter(r => r.code !== code.toUpperCase());
        if (filtered.length === all.length) {
            return { success: false, error: 'Reservation not found' };
        }
        this._save(filtered);
        return { success: true };
    },

    /* ------------------------------------------------------------------
       Availability & Pricing
       ------------------------------------------------------------------ */

    /** Calculate cost in Dirhams */
    calculateCost(station, duration) {
        const pricing = this.PRICING[station] || this.PRICING.pc;
        return pricing[duration] || (duration * pricing[1]);
    },

    /** Get slot availability for a given date and station type */
    getAvailableSlots(date, stationType) {
        const all = this.getAllReservations();
        const capacity = this.CAPACITY[stationType] || this.CAPACITY.pc;

        // Build a map of time -> booked count for the given date
        const bookedMap = {};
        all.forEach(r => {
            if (r.date === date && r.station === stationType && r.status !== 'cancelled') {
                const dur = r.duration || 1;
                const startHour = parseInt(r.time.split(':')[0]);
                for (let h = 0; h < dur; h++) {
                    const hourKey = String(startHour + h).padStart(2, '0') + ':00';
                    bookedMap[hourKey] = (bookedMap[hourKey] || 0) + (r.party || 1);
                }
            }
        });

        // Generate slot info for each hour
        const slots = [];
        for (let h = 8; h <= 22; h++) {
            const timeKey = String(h).padStart(2, '0') + ':00';
            const booked = bookedMap[timeKey] || 0;
            const remaining = Math.max(0, capacity - booked);
            let availability = 'available';
            if (remaining === 0) availability = 'full';
            else if (remaining <= Math.ceil(capacity * 0.3)) availability = 'limited';

            slots.push({ time: timeKey, booked, remaining, capacity, availability });
        }

        return slots;
    },

    /** Check if a specific slot is available */
    isSlotAvailable(date, time, stationType, partySize) {
        const slots = this.getAvailableSlots(date, stationType);
        const slot = slots.find(s => s.time === time);
        if (!slot) return false;
        return slot.remaining >= (partySize || 1);
    },

    /* ------------------------------------------------------------------
       Stats (for Admin)
       ------------------------------------------------------------------ */

    getStats() {
        const all = this.getAllReservations();
        const today = new Date().toISOString().split('T')[0];

        const todayReservations = all.filter(r => r.date === today && r.status !== 'cancelled');
        const pending = all.filter(r => r.status === 'pending');
        const confirmed = all.filter(r => r.status === 'confirmed');
        const totalRevenue = all
            .filter(r => r.status !== 'cancelled')
            .reduce((sum, r) => sum + (r.cost || 0), 0);

        return {
            total: all.length,
            today: todayReservations.length,
            pending: pending.length,
            confirmed: confirmed.length,
            totalRevenue
        };
    },

    /* ------------------------------------------------------------------
       Export
       ------------------------------------------------------------------ */

    exportCSV(reservations) {
        const headers = ['Code', 'Name', 'Email', 'Phone', 'Date', 'Time', 'Station', 'Duration', 'Party', 'Status', 'Cost (DH)', 'Created'];
        const rows = reservations.map(r => [
            r.code, r.name, r.email, r.phone, r.date, r.time,
            r.station === 'pc' ? 'Pro PC Rig' : 'Console Co-op',
            r.duration + 'h', r.party, r.status, r.cost, r.createdAt
        ]);

        let csv = headers.join(',') + '\n';
        rows.forEach(row => {
            csv += row.map(cell => '"' + String(cell).replace(/"/g, '""') + '"').join(',') + '\n';
        });

        const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = 'oclockzone-reservations-' + new Date().toISOString().split('T')[0] + '.csv';
        link.click();
        URL.revokeObjectURL(url);
    },

    /* ------------------------------------------------------------------
       Validation
       ------------------------------------------------------------------ */

    _validate(data) {
        const errors = [];
        if (!data.name || data.name.trim().length < 2) errors.push('Name is required');
        if (!data.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) errors.push('Valid email is required');
        if (!data.phone || data.phone.trim().length < 6) errors.push('Phone number is required');
        if (!data.date) errors.push('Date is required');
        if (!data.time) errors.push('Time is required');
        if (!data.station) errors.push('Station type is required');

        // Check date is not in the past
        const today = new Date().toISOString().split('T')[0];
        if (data.date && data.date < today) errors.push('Date cannot be in the past');

        return errors;
    }
};
