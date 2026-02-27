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
            copyright: '© 2026 Александра Очирова. Независимый дистрибьютор 4Life (ID: 11197938).',
            lang_label: 'RU'
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
            stat_mvd: 'Years in Law',
            stat_year: 'Start in 4Life',
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
            copyright: '© 2026 Alexandra Ochirova. Independent 4Life Distributor (ID: 11197938).',
            lang_label: 'EN'
        },
        kz: {
            nav_about: 'Мен туралы',
            nav_opportunities: 'Мүмкіндіктер',
            nav_company: 'Компания',
            nav_contact: 'Байланыс',
            hero_badge: 'Бизнес-жаттықтырушы және 4Life көшбасшысы',
            hero_name_html: 'Александра<br><span class="accent-text">Очирова</span>',
            hero_desc: 'Түрлі елдердегі желіге дейін нөлден тәуекелсіз бизнес құрамын. 4Life компаниясымен ақылды иммунитетке, денсаулыққа және пассивті табысқа инвестициялар.',
            hero_btn_write: 'Маған жазу',
            hero_btn_shop: '4Life Дүкені',
            fc_partners: 'Серіктестер',
            fc_many: 'Көптеген',
            fc_countries: 'Елдер мен қалалар',
            about_badge: 'Менің тарихым',
            about_title_html: 'Мен <span class="accent-text">бизнеске</span> қалай келдім',
            about_lead: 'Менің атым Александра, мен Бурятияданмын, 2021 жылдан бері желілік бизнестемін.',
            about_p1: 'Бұл бизнеске келмес бұрын мен ішкі істер органдарында 17 жылдан астам жұмыс істедім. Бірақ мен нөлден алғашқы 50 000 рубль табысқа жарты жылда шықтым.',
            about_p2: 'Бірде мен 3 адамды шақырдым, содан бері менің желім көптеген аймақтарда, қалаларда, тіпті елдерде үздіксіз өсіп келеді.',
            about_p3_html: 'Бүгінгі таңда менің командамда <strong>250-ден астам адам</strong> бар. Мен желіні бір рет құрдым және болашаққа еркіндік пен сенімділік беретін пассивті табыс аламын.',
            stat_mvd: 'ІІМ қызмет жылдары',
            stat_year: '4Life-те басталған жыл',
            stat_team: 'Командадағы адамдар',
            stat_passive: 'Пассивті',
            stat_income: 'Өсіп келе жатқан табыс',
            opp_badge: 'Ынтымақтастық',
            opp_title_html: 'Бұл модель сізге <span class="accent-text">дәл келеді</span>, егер сіз қаласаңыз:',
            card1_title: 'Тәуекелсіз бизнес',
            card1_desc: 'Өз бизнесіңізді ең аз инвестициямен бастаңыз. Толық қолдау және дайын жүйе.',
            card2_title: 'Алғашқы үлкен ақша',
            card2_desc: 'Табыстың шегінсіз қатты кіріске қалай жетуге болатындығы туралы қадамдық алгоритм.',
            card3_title: 'Пассивті табыс',
            card3_desc: 'Желіңізді бір рет құрыңыз және оның айналымынан көп жылдар бойы тұрақты дивиденд алыңыз.',
            card4_title: 'Еркіндік және саяхат',
            card4_desc: 'Әлемнің кез келген нүктесінен онлайн жұмыс жасаңыз. Табысты командамен бірге жаңа көкжиектерді ашыңыз.',
            card5_title: 'Тұлғалық өсу',
            card5_desc: 'Үнемі даму, кәсіпкерлердің мықты ортасы және әлеуетіңізді ашу.',
            card6_title: 'Денсаулық және Anti-Age',
            card6_desc: 'Озық әзірлемелерге қол жеткізу: ақылды иммунитет, денені жасарту және сапалы ұзақ өмір.',
            company_badge: 'Серіктес туралы',
            company_title_html: 'Компания <span class="brand-text">4Life</span>',
            company_slogan: 'Иммунитет — сіздің денсаулығыңыздың іргетасы!',
            company_years: 'Мен бір жобада 5 жылдан астам уақыт жүрмін.',
            company_about_html: '<strong>4Life Research</strong> — The Immune System Company™ (Иммундық жүйе компаниясы). Өмір үшін зерттеу. Бұл сіздің иммунитетіңізді дұрыс жұмыс істеуге үйрететін трансфер факторларына негізделген инновациялық өнімдер.',
            company_join: 'Менің командама қосылу арқылы сіз тек бизнес-тәлімгерді ғана емес, сонымен қатар отбасыңыздың денсаулығына арналған озық өнімдерге қол жеткізесіз.',
            company_btn: 'Дүкенді көру',
            contact_badge: 'Менімен байланыс',
            contact_title: 'Сапарыңызды бастауға дайынсыз ба?',
            contact_desc: 'Сөйлесудің ыңғайлы әдісін таңдаңыз. Мен әрқашан диалогқа ашықпын және сұрақтарыңызға жауап беруге дайынмын.',
            contact_email_label: 'Хат жазу',
            footer_brand: 'Александра Очирова — Бизнес-жаттықтырушы, 4Life Көшбасшысы',
            copyright: '© 2026 Александра Очирова. 4Life тәуелсіз дистрибьюторы (ID: 11197938).',
            lang_label: 'KZ'
        },
        zh: {
            nav_about: '关于我',
            nav_opportunities: '机会',
            nav_company: '公司',
            nav_contact: '联系我',
            hero_badge: '商业教练 & 4Life 领导人',
            hero_name_html: '亚历山德拉<br><span class="accent-text">奥奇罗娃 (Alexandra)</span>',
            hero_desc: '从零开始建立跨国网络的无风险业务。与4Life一起投资于智能免疫力、健康和被动收入。',
            hero_btn_write: '给我发消息',
            hero_btn_shop: '4Life 商店',
            fc_partners: '合作伙伴',
            fc_many: '许多',
            fc_countries: '国家和地区',
            about_badge: '我的故事',
            about_title_html: '我是如何开始<span class="accent-text">创业</span>的',
            about_lead: '我叫亚历山德拉，来自俄罗斯布里亚特，自2021年起从事网络业务。',
            about_p1: '在加入这个行业之前，我在执法机构工作了17年多。但是，我只用了六个月的时间就从零开始实现了最初的 50,000 卢布在线收入。',
            about_p2: '有一天我邀请了3个人，从那以后，我的网络在许多地区、城市甚至国家不断发展。',
            about_p3_html: '今天，我的团队有<strong>超过250人</strong>。我只建立了一次网络，现在却获得了被动收入，这给了我对未来的自由和信心。',
            stat_mvd: '执法部门工作年限',
            stat_year: '4Life 开始年份',
            stat_team: '团队成员',
            stat_passive: '被动',
            stat_income: '稳定增长收入',
            opp_badge: '合作机会',
            opp_title_html: '如果您想实现以下目标，此模式<span class="accent-text">非常适合您</span>：',
            card1_title: '无风险业务',
            card1_desc: '以最小的投资开启您的事业。提供全面支持和成熟的系统。',
            card2_title: '第一桶金',
            card2_desc: '循序渐进的算法，助您获得可观的收入，且没有收入上限。',
            card3_title: '被动收入',
            card3_desc: '一次建立网络，多年来从其营业额中获得稳定的红利。',
            card4_title: '自由与旅行',
            card4_desc: '在世界任何地方在线工作。与成功的团队一起开拓新视野。',
            card5_title: '个人成长',
            card5_desc: '不断发展，融入强大的企业家圈子，释放您的潜力。',
            card6_title: '健康与抗衰老',
            card6_desc: '获得前沿创新成果：智能免疫力、身体年轻化和高质量的长寿。',
            company_badge: '关于合作伙伴',
            company_title_html: '<span class="brand-text">4Life</span> 公司',
            company_slogan: '免疫力是您健康的基础！',
            company_years: '我参与这个项目已经五年多了。',
            company_about_html: '<strong>4Life Research</strong> — The Immune System Company™。为生活而研究。基于转移因子的创新产品，教导您的免疫系统正确工作。',
            company_join: '加入我的团队，您不仅能获得一位业务导师，还能为您的家人获取先进的健康产品。',
            company_btn: '参观商店',
            contact_badge: '联系我',
            contact_title: '准备好开启您的旅程了吗？',
            contact_desc: '选择一种方便的联系方式。我随时准备进行对话并回答您的问题。',
            contact_email_label: '发送电子邮件',
            footer_brand: '亚历山德拉·奥奇罗娃 — 商业教练，4Life 领导人',
            copyright: '© 2026 亚历山德拉·奥奇罗娃 (Alexandra Ochirova). 独立 4Life 经销商 (ID: 11197938).',
            lang_label: 'ZH'
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
        if (langLabel && dict.lang_label) {
            langLabel.textContent = dict.lang_label;
        }

        // Update active class in dropdown menu
        document.querySelectorAll('.lang-option').forEach(btn => {
            if (btn.dataset.lang === lang) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });
    }

    // ═══════════════════════════════════════════
    // DROPDOWN MENU LOGIC
    // ═══════════════════════════════════════════
    const langToggleBtn = document.getElementById('langToggle');
    const langMenu = document.getElementById('langMenu');

    if (langToggleBtn && langMenu) {
        // Toggle menu on click
        langToggleBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            langMenu.classList.toggle('show');
        });

        // Handle option click
        document.querySelectorAll('.lang-option').forEach(option => {
            option.addEventListener('click', (e) => {
                const selectedLang = e.target.dataset.lang;
                setLanguage(selectedLang);
                langMenu.classList.remove('show');
            });
        });

        // Close when clicking outside
        document.addEventListener('click', (e) => {
            if (!langToggleBtn.contains(e.target) && !langMenu.contains(e.target)) {
                langMenu.classList.remove('show');
            }
        });
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
