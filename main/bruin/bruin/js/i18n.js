/* ========================================================================
   Game O'Clock — Internationalization (i18n) Module
   Supports: English, Français, العربية (Darija)
   ======================================================================== */

const i18n = {
    currentLang: 'en',

    translations: {
        en: {
            // Nav
            nav_home: 'Home',
            nav_about: 'About',
            nav_services: 'Services',
            nav_pricing: 'Pricing',
            nav_book: 'Book',
            nav_contact: 'Contact',
            nav_book_rig: 'Book Your Rig',

            // Hero
            hero_badge: 'Premium Gaming Lounge & Coffee Bar',
            hero_title_1: 'Game',
            hero_title_2: "O'Clock",
            hero_tagline: 'Your Game Your Break',
            hero_cta_book: 'Book Your Rig',
            hero_cta_menu: 'Explore Menu',
            hero_scroll: 'Scroll Down',

            // About
            about_subtitle: 'About Us',
            about_title: 'Where Gaming Meets Coffee Culture',
            about_p1: 'Game O\'Clock is the ultimate hybrid destination — a high-end PC & console gaming arena fused with a specialty coffee sanctuary. Whether you\'re grinding ranked matches on our pro-spec rigs or chilling on a co-op couch with your squad, we\'ve got the setup, the drinks, and the energy to keep you locked in.',
            about_p2: 'Our baristas craft signature espresso brews and gaming mocktails while you play. No elitism, no gatekeeping — just an open lobby where everyone\'s welcome.',
            about_stat1_num: '20+',
            about_stat1_label: 'Pro Gaming Rigs',
            about_stat2_num: '30+',
            about_stat2_label: 'Craft Beverages',
            about_stat3_num: '24/7',
            about_stat3_label: 'Support',

            // Services
            services_subtitle: 'What We Offer',
            services_title: 'Level Up Your Experience',
            svc1_title: 'Console Co-op Booths',
            svc1_desc: 'Squad up on our premium PS5 gaming booths with 4K displays, surround sound, and comfy seating for up to 6 players. Perfect for co-op sessions and local tournaments.',
            svc2_title: 'Specialty Coffee & Drinks',
            svc2_desc: 'Fuel your sessions with barista-crafted espresso brews, signature gaming mocktails, and premium energy drinks. From flat whites to our legendary "Respawn Latte".',
            svc3_title: 'Tournaments & LAN Parties',
            svc3_desc: 'Join our weekly squad tournaments and LAN party events. Compete for prizes, climb the leaderboard, and become a Game O\'Clock champion.',

            // Pricing
            pricing_subtitle: 'Pricing & Passes',
            pricing_title: 'Choose Your Play Style',
            tier1_name: 'Quick Play',
            tier1_price: '30',
            tier1_period: 'Dirhams / hour',
            tier1_f1: 'Pro rig access',
            tier1_f2: 'Standard drip coffee',
            tier1_f3: 'High-speed WiFi',
            tier1_f4: 'Casual & ranked play',
            tier2_name: 'Half-Day Fuel Pass',
            tier2_badge: 'Most Popular',
            tier2_price: '99',
            tier2_period: 'Dirhams / 4 hours',
            tier2_f1: 'Pro rig access (4 hrs)',
            tier2_f2: 'Any craft barista beverage',
            tier2_f3: 'Snack included',
            tier2_f4: 'Priority seating',
            tier2_f5: 'Save 12% vs hourly',
            tier3_name: 'Monthly Squad',
            tier3_price: '499',
            tier3_period: 'Dirhams / month',
            tier3_f1: 'Unlimited off-peak play',
            tier3_f2: '20% off all cafe items',
            tier3_f3: 'Priority tournament entry',
            tier3_f4: 'Exclusive member events',
            tier3_f5: 'Guest pass (1/month)',
            pricing_cta: 'Get Started',

            // Booking
            booking_subtitle: 'Reserve Your Station',
            booking_title: 'Lock In Your Session',
            booking_name: 'Full Name',
            booking_email: 'Email Address',
            booking_phone: 'Phone Number',
            booking_date: 'Date',
            booking_time: 'Time',
            booking_station: 'Station Type',
            booking_station_pc: 'Pro PC Rig',
            booking_station_console: 'Console Co-op Couch',
            booking_party: 'Party Size',
            booking_party_1: '1 Player',
            booking_party_2: '2 Players',
            booking_party_3: '3 Players',
            booking_party_4: '4 Players',
            booking_party_5: '5 Players',
            booking_party_6: '6+ Players',
            booking_submit: 'Lock In Station',
            booking_submitted: 'Station Locked In! ✓',
            booking_name_ph: 'Enter your full name',
            booking_email_ph: 'your@email.com',
            booking_phone_ph: '+212 6XX XXX XXX',

            // Footer
            footer_tagline: 'Your game, your break. The ultimate gaming lounge & coffee experience in Morocco.',
            footer_hours_title: 'Opening Hours',
            footer_hours_daily: 'Daily',
            footer_hours_time: '8:00 AM – 11:00 PM',
            footer_location_title: 'Find Us',
            footer_copyright: '© 2026 Game O\'Clock. All rights reserved.',
            footer_rights: 'Your Game Your Break.',
        },

        fr: {
            // Nav
            nav_home: 'Accueil',
            nav_about: 'À propos',
            nav_services: 'Services',
            nav_pricing: 'Tarifs',
            nav_book: 'Réserver',
            nav_contact: 'Contact',
            nav_book_rig: 'Réserver',

            // Hero
            hero_badge: 'Salon de Gaming Premium & Coffee Bar',
            hero_title_1: 'Game',
            hero_title_2: "O'Clock",
            hero_tagline: 'Ton Jeu, Ta Pause',
            hero_cta_book: 'Réserver Ton Poste',
            hero_cta_menu: 'Voir Le Menu',
            hero_scroll: 'Défiler',

            // About
            about_subtitle: 'À Propos',
            about_title: 'Là Où Le Gaming Rencontre Le Café',
            about_p1: 'Game O\'Clock est la destination hybride ultime — une arène de gaming PC & console haut de gamme fusionnée avec un sanctuaire de café de spécialité. Que vous grimpiez les rangs sur nos PC pro ou que vous relaxiez en co-op avec votre squad, on a le setup, les boissons et l\'énergie pour vous garder à fond.',
            about_p2: 'Nos baristas préparent des espressos signature et des mocktails gaming pendant que vous jouez. Pas d\'élitisme, pas de gatekeeping — juste un lobby ouvert où tout le monde est le bienvenu.',
            about_stat1_num: '20+',
            about_stat1_label: 'Gaming Pro',
            about_stat2_num: '30+',
            about_stat2_label: 'Boissons Craft',
            about_stat3_num: '24/7',
            about_stat3_label: 'Support',

            // Services
            services_subtitle: 'Nos Services',
            services_title: 'Monte en Niveau',
            svc1_title: 'Booths Console Co-op',
            svc1_desc: 'Formez votre squad sur nos booths PS5 premium avec écrans 4K, son surround et sièges confortables pour jusqu\'à 6 joueurs. Parfait pour les sessions co-op et les tournois locaux.',
            svc2_title: 'Café de Spécialité & Boissons',
            svc2_desc: 'Alimentez vos sessions avec des espressos artisanaux, des mocktails gaming signature et des boissons énergisantes premium. Du flat white à notre légendaire "Respawn Latte".',
            svc3_title: 'Tournois & LAN Parties',
            svc3_desc: 'Rejoignez nos tournois hebdomadaires et nos événements LAN. Compétissez pour des prix, grimpez le classement et devenez champion Game O\'Clock.',

            // Pricing
            pricing_subtitle: 'Tarifs & Pass',
            pricing_title: 'Choisis Ton Style de Jeu',
            tier1_name: 'Quick Play',
            tier1_price: '30',
            tier1_period: 'Dirhams / heure',
            tier1_f1: 'Accès PC pro',
            tier1_f2: 'Café filtre standard',
            tier1_f3: 'WiFi haut débit',
            tier1_f4: 'Jeu casual & ranked',
            tier2_name: 'Pass Demi-Journée',
            tier2_badge: 'Le Plus Populaire',
            tier2_price: '99',
            tier2_period: 'Dirhams / 4 heures',
            tier2_f1: 'Accès PC pro (4h)',
            tier2_f2: 'Boisson barista au choix',
            tier2_f3: 'Snack inclus',
            tier2_f4: 'Siège prioritaire',
            tier2_f5: 'Économisez 12%',
            tier3_name: 'Abonnement Squad',
            tier3_price: '499',
            tier3_period: 'Dirhams / mois',
            tier3_f1: 'Jeu illimité hors pointe',
            tier3_f2: '-20% sur tout le café',
            tier3_f3: 'Entrée tournoi prioritaire',
            tier3_f4: 'Événements membres exclusifs',
            tier3_f5: 'Pass invité (1/mois)',
            pricing_cta: 'Commencer',

            // Booking
            booking_subtitle: 'Réservez Votre Poste',
            booking_title: 'Réservez Votre Session',
            booking_name: 'Nom Complet',
            booking_email: 'Adresse Email',
            booking_phone: 'Numéro de Téléphone',
            booking_date: 'Date',
            booking_time: 'Heure',
            booking_station: 'Type de Poste',
            booking_station_pc: 'PC Pro',
            booking_station_console: 'Canapé Console Co-op',
            booking_party: 'Nombre de Joueurs',
            booking_party_1: '1 Joueur',
            booking_party_2: '2 Joueurs',
            booking_party_3: '3 Joueurs',
            booking_party_4: '4 Joueurs',
            booking_party_5: '5 Joueurs',
            booking_party_6: '6+ Joueurs',
            booking_submit: 'Réserver Le Poste',
            booking_submitted: 'Poste Réservé! ✓',
            booking_name_ph: 'Entrez votre nom complet',
            booking_email_ph: 'votre@email.com',
            booking_phone_ph: '+212 6XX XXX XXX',

            // Footer
            footer_tagline: 'Ton jeu, ta pause. L\'expérience ultime de gaming & café au Maroc.',
            footer_hours_title: 'Horaires d\'Ouverture',
            footer_hours_daily: 'Tous les jours',
            footer_hours_time: '8h00 – 23h00',
            footer_location_title: 'Nous Trouver',
            footer_copyright: '© 2026 Game O\'Clock. Tous droits réservés.',
            footer_rights: 'Ton Jeu, Ta Pause.',
        },

        ar: {
            // Navigation
            nav_home: 'الرئيسية',
            nav_about: 'من نحن',
            nav_services: 'الخدمات',
            nav_pricing: 'الأسعار',
            nav_book: 'الحجز',
            nav_contact: 'اتصل بنا',
            nav_book_rig: 'احجز مقعدك',

            // Hero
            hero_badge: 'صالة ألعاب ومقهى فاخر',
            hero_title_1: 'Game',
            hero_title_2: "O'Clock",
            hero_tagline: 'لعبك، استراحتك',
            hero_cta_book: 'احجز مقعدك',
            hero_cta_menu: 'اطلع على القائمة',
            hero_scroll: 'مرر للأسفل',

            // About
            about_subtitle: 'من نحن',
            about_title: 'حيث يلتقي اللعب بالقهوة',
            about_p1: 'Game O\'Clock هي وجهتك المثالية لعشاق الألعاب، حيث نوفر أجهزة ألعاب احترافية للحاسوب وأجهزة الكونسول، بالإضافة إلى ركن للقهوة المختصة. سواء كنت تلعب مباريات تنافسية أو تستمتع مع أصدقائك، ستجد لدينا أفضل التجهيزات والمشروبات والأجواء.',
            about_p2: 'يُحضّر خبراء القهوة لدينا مشروبات الإسبريسو المميزة والموكتيلات الخاصة بالألعاب أثناء استمتاعك باللعب. الجميع مرحب به، سواء كنت لاعبًا محترفًا أو هاويًا.',
            about_stat1_num: '+20',
            about_stat1_label: 'منصة ألعاب',
            about_stat2_num: '+30',
            about_stat2_label: 'مشروب مميز',
            about_stat3_num: '24/7',
            about_stat3_label: 'الدعم',

            // Services
            services_subtitle: 'خدماتنا',
            services_title: 'ارتقِ بتجربة اللعب',
            svc1_title: 'منطقة ألعاب الكونسول الجماعية',
            svc1_desc: 'استمتع باللعب مع أصدقائك على أجهزة PS5 بشاشات 4K، وصوت محيطي، ومقاعد مريحة تتسع حتى 6 لاعبين. مثالية للعب الجماعي والبطولات.',
            svc2_title: 'قهوة مختصة ومشروبات',
            svc2_desc: 'زد من حماسك مع قهوة الإسبريسو المختصة، والموكتيلات المميزة، ومشروبات الطاقة. من الفلات وايت إلى مشروب "Respawn Latte" الشهير.',
            svc3_title: 'بطولات وحفلات LAN',
            svc3_desc: 'شارك في البطولات الأسبوعية وفعاليات LAN، وتنافس للفوز بالجوائز، وتسلق لوحة المتصدرين، وكن بطل Game O\'Clock.',

            // Pricing
            pricing_subtitle: 'الأسعار والباقات',
            pricing_title: 'اختر طريقة لعبك',
            tier1_name: 'اللعب السريع',
            tier1_price: '30',
            tier1_period: 'درهم / الساعة',
            tier1_f1: 'استخدام منصة الألعاب',
            tier1_f2: 'قهوة عادية',
            tier1_f3: 'إنترنت فائق السرعة',
            tier1_f4: 'لعب ترفيهي أو تنافسي',

            tier2_name: 'باقة نصف يوم',
            tier2_badge: 'الأكثر شعبية',
            tier2_price: '99',
            tier2_period: 'درهم / 4 ساعات',
            tier2_f1: 'استخدام منصة الألعاب لمدة 4 ساعات',
            tier2_f2: 'أي مشروب من الباريستا',
            tier2_f3: 'وجبة خفيفة',
            tier2_f4: 'أولوية في الحجز',
            tier2_f5: 'وفّر 12%',

            tier3_name: 'الاشتراك الشهري',
            tier3_price: '499',
            tier3_period: 'درهم / الشهر',
            tier3_f1: 'لعب غير محدود (خلال الأوقات الهادئة)',
            tier3_f2: 'خصم 20% على المشروبات',
            tier3_f3: 'أولوية المشاركة في البطولات',
            tier3_f4: 'فعاليات حصرية للأعضاء',
            tier3_f5: 'دعوة مجانية لصديق (مرة شهريًا)',

            pricing_cta: 'ابدأ الآن',

            // Booking
            booking_subtitle: 'الحجز',
            booking_title: 'احجز جلستك',
            booking_name: 'الاسم الكامل',
            booking_email: 'البريد الإلكتروني',
            booking_phone: 'رقم الهاتف',
            booking_date: 'التاريخ',
            booking_time: 'الوقت',
            booking_station: 'نوع المحطة',
            booking_station_pc: 'حاسوب احترافي',
            booking_station_console: 'منطقة كونسول جماعية',
            booking_party: 'عدد اللاعبين',
            booking_party_1: 'لاعب واحد',
            booking_party_2: 'لاعبان',
            booking_party_3: '3 لاعبين',
            booking_party_4: '4 لاعبين',
            booking_party_5: '5 لاعبين',
            booking_party_6: '6 لاعبين أو أكثر',
            booking_submit: 'تأكيد الحجز',
            booking_submitted: '✓ تم الحجز بنجاح!',
            booking_name_ph: 'أدخل اسمك الكامل',
            booking_email_ph: 'example@email.com',
            booking_phone_ph: '+212 6XX XXX XXX',

            // Footer
            footer_tagline: 'لعبك، استراحتك. أفضل تجربة ألعاب وقهوة في المغرب.',
            footer_hours_title: 'ساعات العمل',
            footer_hours_daily: 'يوميًا',
            footer_hours_time: '08:00 صباحًا - 11:00 مساءً',
            footer_location_title: 'الموقع',
            footer_copyright: '© 2026 Game O\'Clock. جميع الحقوق محفوظة.',
            footer_rights: 'لعبك، استراحتك.',
        }
    },

    init() {
        const saved = localStorage.getItem('goc-lang');
        if (saved && this.translations[saved]) {
            this.currentLang = saved;
        }
        this.applyLanguage(this.currentLang);
        this.setupSwitcher();
    },

    applyLanguage(lang) {
        this.currentLang = lang;
        localStorage.setItem('goc-lang', lang);

        const dict = this.translations[lang];
        if (!dict) return;

        // Set document direction
        if (lang === 'ar') {
            document.documentElement.setAttribute('dir', 'rtl');
            document.documentElement.setAttribute('lang', 'ar');
        } else {
            document.documentElement.setAttribute('dir', 'ltr');
            document.documentElement.setAttribute('lang', lang);
        }

        // Translate all elements with data-i18n attribute
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (dict[key]) {
                el.textContent = dict[key];
            }
        });

        // Translate placeholders
        document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
            const key = el.getAttribute('data-i18n-placeholder');
            if (dict[key]) {
                el.setAttribute('placeholder', dict[key]);
            }
        });

        // Update active language indicator
        document.querySelectorAll('.lang-option').forEach(opt => {
            opt.classList.toggle('active', opt.dataset.lang === lang);
        });

        // Update language button text
        const langBtn = document.querySelector('.lang-btn-text');
        if (langBtn) {
            const labels = { en: 'EN', fr: 'FR', ar: 'عربية' };
            langBtn.textContent = labels[lang] || lang.toUpperCase();
        }
    },

    setupSwitcher() {
        const btn = document.querySelector('.lang-btn');
        const dropdown = document.querySelector('.lang-dropdown');

        if (btn && dropdown) {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                dropdown.classList.toggle('open');
            });

            document.addEventListener('click', () => {
                dropdown.classList.remove('open');
            });

            dropdown.addEventListener('click', (e) => {
                e.stopPropagation();
            });
        }

        document.querySelectorAll('.lang-option').forEach(opt => {
            opt.addEventListener('click', () => {
                const lang = opt.dataset.lang;
                this.applyLanguage(lang);
                if (dropdown) dropdown.classList.remove('open');
            });
        });
    }
};

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    i18n.init();
});
