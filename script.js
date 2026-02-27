document.addEventListener('DOMContentLoaded', () => {

    // ═══════════════════════════════════════════
    // TRANSLATIONS
    // ═══════════════════════════════════════════
    const translations = {
        ru: {
            nav_about: 'Обо мне',
            nav_opportunities: 'Возможности',
            nav_company: 'Компания',
            nav_contact: 'Связаться',
            hero_badge: 'Бизнес-тренер & Лидер 4Life',
            hero_name_html: 'Александра<br><span class="accent-text">Очирова</span>',
            hero_desc: 'Строю бизнес без рисков с нуля до сети в разных странах. Инвестиции в умный иммунитет, здоровье и пассивный доход с компанией 4Life.',
            hero_btn_write: 'Написать мне',
            hero_btn_shop: 'Магазин 4Life',
            fc_partners: 'Партнеров',
            fc_many: 'Много',
            fc_countries: 'Стран и городов',
            about_badge: 'Моя история',
            about_title_html: 'Как я пришла в <span class="accent-text">бизнес</span>',
            about_lead: 'Меня зовут Александра, я из Бурятии, в сетевом бизнесе с 2021 года.',
            about_p1: 'До прихода в этот бизнес я работала в органах внутренних дел более 17 лет. Но на первые 50 000 рублей дохода в интернете я вышла с нуля всего за полгода.',
            about_p2: 'Однажды я пригласила 3 человек, и с тех пор моя сеть непрерывно растет во многих регионах, городах и даже странах.',
            about_p3_html: 'На сегодняшний день в моей команде <strong>более 250 человек</strong>. Я один раз выстроила сеть и получаю пассивный доход, который дает свободу и уверенность в будущем.',
            stat_mvd: 'Лет службы в МВД',
            stat_year: 'Год начала в 4Life',
            stat_team: 'Человек в команде',
            stat_passive: 'Пассивный',
            stat_income: 'Растущий доход',
            opp_badge: 'Сотрудничество',
            opp_title_html: 'Эта модель вам <span class="accent-text">точно подойдет</span>, если вы хотите:',
            card1_title: 'Бизнес без рисков',
            card1_desc: 'Начните свое дело с минимальными вложениями. Полная поддержка и готовая система.',
            card2_title: 'Первые большие деньги',
            card2_desc: 'Пошаговый алгоритм, как выйти на солидный доход без потолка в заработке.',
            card3_title: 'Пассивный доход',
            card3_desc: 'Выстраивайте сеть один раз и получайте стабильный дивиденд от ее оборота многие годы.',
            card4_title: 'Свобода и путешествия',
            card4_desc: 'Работайте онлайн из любой точки мира. Открывайте новые горизонты вместе с успешной командой.',
            card5_title: 'Личностный рост',
            card5_desc: 'Постоянное развитие, сильное окружение предпринимателей и раскрытие вашего потенциала.',
            card6_title: 'Здоровье и Anti-Age',
            card6_desc: 'Доступ к передовым разработкам: умный иммунитет, омоложение организма и качественная долгая жизнь.',
            company_badge: 'О Партнере',
            company_title_html: 'Компания <span class="brand-text">4Life</span>',
            company_slogan: 'Иммунитет — фундамент вашего здоровья!',
            company_years: 'Я более 5 лет в одном проекте.',
            company_about_html: '<strong>4Life Research</strong> — The Immune System Company™ (Компания иммунной системы). Исследования для Жизни. Это инновационные продукты на основе трансфер факторов, которые обучают ваш иммунитет работать правильно.',
            company_join: 'Присоединяясь к моей команде, вы получаете не только бизнес-наставника, но и доступ к передовым продуктам для здоровья вашей семьи.',
            company_btn: 'Посмотреть магазин',
            contact_badge: 'Связь со мной',
            contact_title: 'Готовы начать свой путь?',
            contact_desc: 'Выберите удобный способ связи. Я всегда открыта к диалогу и готова ответить на ваши вопросы.',
            contact_email_label: 'Написать письмо',
            footer_brand: 'Александра Очирова — Бизнес-тренер, Лидер 4Life',
            copyright: '© 2026 Александра Очирова. Независимый дистрибьютор 4Life (ID: 11197938).'
        },
        en: {
            nav_about: 'About',
            nav_opportunities: 'Opportunities',
            nav_company: 'Company',
            nav_contact: 'Contact',
            hero_badge: 'Business Coach & 4Life Leader',
            hero_name_html: 'Alexandra<br><span class="accent-text">Ochirova</span>',
            hero_desc: 'Building a risk-free business from scratch to a network across countries. Smart immunity, health, and passive income with 4Life.',
            hero_btn_write: 'Message me',
            hero_btn_shop: '4Life Shop',
            fc_partners: 'Partners',
            fc_many: 'Many',
            fc_countries: 'Countries & cities',
            about_badge: 'My Story',
            about_title_html: 'How I started my <span class="accent-text">business</span>',
            about_lead: 'My name is Alexandra, I\'m from Buryatia, Russia. I\'ve been in network business since 2021.',
            about_p1: 'Before joining this business, I served in law enforcement for over 17 years. But I reached my first 50,000 rubles of online income from scratch in just six months.',
            about_p2: 'One day I invited 3 people, and since then my network has been continuously growing across many regions, cities, and even countries.',
            about_p3_html: 'Today, my team has <strong>over 250 people</strong>. I built the network once and now receive passive income that gives me freedom and confidence in the future.',
            stat_mvd: 'Years in Law Enforcement',
            stat_year: 'Year started with 4Life',
            stat_team: 'Team Members',
            stat_passive: 'Passive',
            stat_income: 'Growing Income',
            opp_badge: 'Collaboration',
            opp_title_html: 'This model is <span class="accent-text">perfect for you</span> if you want to:',
            card1_title: 'Risk-Free Business',
            card1_desc: 'Start your own business with minimal investment. Full support and a ready-made system.',
            card2_title: 'First Big Money',
            card2_desc: 'A step-by-step algorithm to reach a solid income with no earnings ceiling.',
            card3_title: 'Passive Income',
            card3_desc: 'Build your network once and receive stable dividends from its turnover for many years.',
            card4_title: 'Freedom & Travel',
            card4_desc: 'Work online from anywhere in the world. Discover new horizons with a successful team.',
            card5_title: 'Personal Growth',
            card5_desc: 'Constant development, a strong circle of entrepreneurs, and unlocking your full potential.',
            card6_title: 'Health & Anti-Age',
            card6_desc: 'Access to cutting-edge innovations: smart immunity, body rejuvenation, and quality longevity.',
            company_badge: 'About the Partner',
            company_title_html: 'Company <span class="brand-text">4Life</span>',
            company_slogan: 'Immunity is the foundation of your health!',
            company_years: 'I\'ve been with this project for over 5 years.',
            company_about_html: '<strong>4Life Research</strong> — The Immune System Company™. Research for Life. Innovative products based on transfer factors that teach your immune system to work correctly.',
            company_join: 'By joining my team, you get not only a business mentor but also access to advanced health products for your family.',
            company_btn: 'Visit the shop',
            contact_badge: 'Get in Touch',
            contact_title: 'Ready to start your journey?',
            contact_desc: 'Choose a convenient way to connect. I\'m always open to dialogue and ready to answer your questions.',
            contact_email_label: 'Send an email',
            footer_brand: 'Alexandra Ochirova — Business Coach, 4Life Leader',
            copyright: '© 2026 Alexandra Ochirova. Independent 4Life Distributor (ID: 11197938).'
        }
    };

    let currentLang = localStorage.getItem('lang') || 'ru';

    function setLanguage(lang) {
        currentLang = lang;
        localStorage.setItem('lang', lang);
        document.documentElement.lang = lang;

        const dict = translations[lang];
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (dict[key]) {
                if (key.endsWith('_html')) {
                    el.innerHTML = dict[key];
                } else {
                    el.textContent = dict[key];
                }
            }
        });

        // Update lang toggle label
        const langLabel = document.getElementById('langLabel');
        if (langLabel) {
            langLabel.textContent = lang === 'ru' ? 'EN' : 'RU';
        }
    }

    // ═══════════════════════════════════════════
    // THEME TOGGLE
    // ═══════════════════════════════════════════
    let currentTheme = localStorage.getItem('theme') || 'dark';

    function setTheme(theme) {
        currentTheme = theme;
        localStorage.setItem('theme', theme);
        document.documentElement.setAttribute('data-theme', theme);

        const icon = document.getElementById('themeIcon');
        if (icon) {
            icon.className = theme === 'dark' ? 'ph ph-sun' : 'ph ph-moon';
        }
    }

    // Init on load
    setTheme(currentTheme);
    setLanguage(currentLang);

    // Theme toggle button
    const themeToggle = document.getElementById('themeToggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            setTheme(currentTheme === 'dark' ? 'light' : 'dark');
        });
    }

    // Language toggle button
    const langToggle = document.getElementById('langToggle');
    if (langToggle) {
        langToggle.addEventListener('click', () => {
            setLanguage(currentLang === 'ru' ? 'en' : 'ru');
        });
    }

    // ═══════════════════════════════════════════
    // CURSOR (Desktop)
    // ═══════════════════════════════════════════
    const cursor = document.querySelector('.cursor');
    if (cursor && window.matchMedia('(pointer: fine)').matches) {
        document.addEventListener('mousemove', (e) => {
            cursor.style.left = e.clientX + 'px';
            cursor.style.top = e.clientY + 'px';
        });

        const hoverables = document.querySelectorAll('a, button');
        hoverables.forEach(elem => {
            elem.addEventListener('mouseenter', () => {
                cursor.style.transform = 'translate(-50%, -50%) scale(1.5)';
                cursor.style.backgroundColor = 'rgba(0, 203, 169, 0.2)';
            });
            elem.addEventListener('mouseleave', () => {
                cursor.style.transform = 'translate(-50%, -50%) scale(1)';
                cursor.style.backgroundColor = 'transparent';
            });
        });
    }

    // ═══════════════════════════════════════════
    // NAVBAR SCROLL
    // ═══════════════════════════════════════════
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        navbar.classList.toggle('scrolled', window.scrollY > 50);
    });

    // ═══════════════════════════════════════════
    // MOBILE MENU
    // ═══════════════════════════════════════════
    const menuOpen = document.getElementById('menuOpen');
    const menuClose = document.getElementById('menuClose');
    const mobileMenu = document.getElementById('mobileMenu');

    if (menuOpen && mobileMenu) {
        menuOpen.addEventListener('click', () => {
            mobileMenu.classList.add('open');
            document.body.style.overflow = 'hidden';
        });

        menuClose.addEventListener('click', () => {
            mobileMenu.classList.remove('open');
            document.body.style.overflow = '';
        });

        mobileMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.remove('open');
                document.body.style.overflow = '';
            });
        });
    }

    // ═══════════════════════════════════════════
    // REVEAL ANIMATIONS
    // ═══════════════════════════════════════════
    const revealElements = document.querySelectorAll('.reveal, .reveal-right');
    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const delay = entry.target.style.getPropertyValue('--d');
                if (delay) entry.target.style.transitionDelay = delay;
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -30px 0px' });
    revealElements.forEach(el => revealObserver.observe(el));

    // ═══════════════════════════════════════════
    // SMOOTH SCROLL
    // ═══════════════════════════════════════════
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

    // ═══════════════════════════════════════════
    // HERO IMAGE
    // ═══════════════════════════════════════════
    const heroImg = document.getElementById('hero-image');
    if (heroImg) {
        if (heroImg.complete && heroImg.naturalHeight > 0) {
            heroImg.style.opacity = '1';
        } else {
            heroImg.addEventListener('load', () => { heroImg.style.opacity = '1'; });
            heroImg.addEventListener('error', () => { heroImg.style.opacity = '0'; });
        }
    }

    // ═══════════════════════════════════════════
    // STAT COUNTERS
    // ═══════════════════════════════════════════
    const animateCounter = (el, target, suffix) => {
        let current = 0;
        const increment = target / 30;
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                el.textContent = target + suffix;
                clearInterval(timer);
            } else {
                el.textContent = Math.floor(current) + suffix;
            }
        }, 30);
    };

    const statValues = document.querySelectorAll('.stat-value');
    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const text = entry.target.textContent.trim();
                const match = text.match(/^(\d+)(\+?)$/);
                if (match) {
                    const num = parseInt(match[1]);
                    const suffix = match[2] || '';
                    if (num > 0 && num < 1000) {
                        animateCounter(entry.target, num, suffix);
                    }
                }
                statsObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    statValues.forEach(el => statsObserver.observe(el));

});
