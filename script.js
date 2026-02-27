document.addEventListener('DOMContentLoaded', () => {

    // ═══════════════════════════════════════════
    // TRANSLATIONS (RU, EN, KZ, ZH)
    // ═══════════════════════════════════════════
    const translations = {
        ru: {
            lang_label: 'RU',
            nav_about: 'Обо мне',
            nav_mission: 'Миссия',
            nav_benefits: 'Что вы получите',
            nav_company: 'Компания',
            nav_contact: 'Связаться',
            hero_badge: 'Предприниматель & Лидер 4Life',
            hero_name_html: 'Александра<br><span class="accent-text">Очирова</span>',
            hero_desc: 'Помогаю людям строить бизнес без рисков с нуля по готовой системе. Пассивный доход, здоровье и свобода с компанией 4Life.',
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
            mission_badge: 'Миссия команды',
            mission_text: 'Помогая людям через лидерство осуществить их мечты, мы создаем общество разумных, финансово-независимых и свободных людей.',
            values_badge: 'Ценности компании 4Life',
            value1_title: 'Наука',
            value1_desc: 'Инновационные продукты на основе передовых научных исследований и запатентованных технологий.',
            value2_title: 'Сервис',
            value2_desc: 'Высочайший уровень обслуживания и забота о каждом партнере и клиенте компании.',
            value3_title: 'Успех',
            value3_desc: 'Проверенный путь к финансовой свободе — план развития, стратегия и поддержка наставника.',
            value4_title: 'Удовлетворенность',
            value4_desc: 'Радость от результатов, здоровья и качества жизни, которые приносят наши продукты и бизнес.',
            benefits_badge: 'Работа со мной',
            benefits_title_html: 'Что вы <span class="accent-text">получаете</span>, работая со мной',
            ben1_title: 'Готовая система',
            ben1_desc: 'Полностью упакованная система работы под ключ. Вам не нужно изобретать — просто действуйте по плану.',
            ben2_title: 'Пошаговая стратегия',
            ben2_desc: 'Чёткий план выхода на доход — от первых шагов до масштабирования бизнеса по всему миру.',
            ben3_title: 'Инструменты',
            ben3_desc: 'Готовые инструменты продвижения и продаж. Шаблоны, скрипты и методики, которые работают.',
            ben4_title: 'Личное сопровождение',
            ben4_desc: 'Я лично поддерживаю каждого партнера на всех этапах — от старта до лидерства.',
            ben5_title: 'Пассивный доход',
            ben5_desc: 'Выстраивайте сеть один раз и получайте стабильный дивиденд от её оборота многие годы.',
            ben6_title: 'Здоровье и Anti-Age',
            ben6_desc: 'Доступ к передовым разработкам: умный иммунитет, омоложение организма и качественная долгая жизнь.',
            // Target Audience
            audience_title_html: 'Для кого <span class="accent-text">эта система</span>?',
            aud1_title: 'Мамы в декрете',
            aud1_desc: 'Для тех, кто хочет реализоваться и зарабатывать, не отрываясь от семьи и воспитания детей.',
            aud2_title: 'Предприниматели',
            aud2_desc: 'Для тех, кто ищет новые ниши с высокой маржинальностью и без рисков традиционного бизнеса.',
            aud3_title: 'Найм и фриланс',
            aud3_desc: 'Для тех, кто устал от потолка в доходах и хочет построить свой независимый источник прибыли.',
            // Timeline
            timeline_badge: 'Путь к результату',
            timeline_title_html: 'История <span class="accent-text">успеха</span>',
            tl1_text: 'Приход в компанию 4Life. Без опыта в сетевом бизнесе. 17 лет службы в МВД за плечами.',
            tl2_text: 'Первые 50 000 ₽ дохода за полгода работы. Создание команды и выход на стабильный заработок.',
            tl3_text: 'Расширение сети на несколько регионов и стран. Команда растет, пассивный доход увеличивается.',
            tl4_year: 'Сегодня',
            tl4_text: 'Более 250 партнеров в команде. Сеть работает в разных городах и странах. Пассивный доход и свобода.',
            // Quiz
            quiz_title: 'Тест: Подходит ли вам сетевой бизнес?',
            quiz_desc: 'Пройдите короткий тест и получите персональную стратегию.',
            quiz_btn: 'Начать тест',
            // Philosophy
            phil_badge: 'Философия результата',
            phil_text: 'Моя система построена на практике, цифрах и реальных кейсах. Вы не будете разбираться сами — вы получите конкретные действия и поддержку.',
            phil_sub: 'Настройтесь получить новую профессию, новые знания и сразу применять их на практике. Используя готовую систему, вы сможете выйти на стабильный доход.',
            phil_btn: 'Начать путь',
            antifit_title: '⛔ Кому это НЕ подходит',
            antifit_1: '❌ Тем, кто ищет «волшебную таблетку» и лёгкие деньги.',
            antifit_2: '❌ Тем, кто не готов учиться и менять мышление.',
            antifit_3: '❌ Тем, кто любит обвинять обстоятельства вместо действий.',
            antifit_footer: 'Если это про вас — пожалуйста, закройте этот сайт. Мы работаем только с теми, кто готов к результатам.',
            // Articles
            articles_badge: 'Полезное',
            articles_title: 'Полезные статьи',
            art1_tag: 'Мышление',
            art1_title: 'Как перестать бояться продаж?',
            art1_desc: '5 техник, которые перевернут ваше представление о бизнесе.',
            art2_tag: '4Life',
            art2_title: 'Топ-5 ошибок новичка',
            art2_desc: 'Почему 90% уходят в первый месяц и как попасть в те самые 10% успешных.',
            art3_tag: 'Система',
            art3_title: 'Секрет быстрого старта',
            art3_desc: 'Пошаговый план выхода на первые 50 000 ₽ за несколько месяцев.',
            art_read: 'Читать статью →',
            // FAQ
            faq_title: 'Частые вопросы',
            faq1_q: 'Это финансовая пирамида?',
            faq1_a: 'Нет, 4Life Research — официальная продуктовая компания с реальным физическим продуктом, сертификацией и прозрачной системой выплат. Пирамиды зарабатывают на взносах, мы — на товарообороте.',
            faq2_q: 'Нужно ли увольняться с работы?',
            faq2_a: 'Нет, на старте вы можете совмещать. Достаточно уделять бизнесу 2–3 часа в день. Когда доход превысит вашу зарплату, вы сами примете решение.',
            faq3_q: 'У меня нет опыта в продажах. Получится?',
            faq3_a: 'Конечно. Система обучения построена так, что даже новичок начинает получать результат в первые недели. Я даю скрипты, шаблоны и инструменты.',
            faq4_q: 'Сколько нужно времени, чтобы выйти на доход?',
            faq4_a: 'Всё индивидуально. В среднем мои партнёры выходят на первый ощутимый доход уже на 2–3 месяц активной работы по системе.',
            // Company & Contact
            company_badge: 'О Компании',
            company_title_html: 'Компания <span class="brand-text">4Life</span>',
            company_slogan: 'Иммунитет — фундамент вашего здоровья!',
            company_years: 'Я более 5 лет в одном проекте.',
            company_about_html: '<strong>4Life Research</strong> — The Immune System Company™ (Компания иммунной системы). Исследования для Жизни. Это инновационные продукты на основе трансфер факторов, которые обучают ваш иммунитет работать правильно.',
            company_join: 'Присоединяясь к моей команде, вы получаете не только бизнес-наставника, но и доступ к передовым продуктам для здоровья вашей семьи.',
            company_btn: 'Посмотреть магазин',
            contact_badge: 'Связь со мной',
            contact_title: 'Готовы начать свой путь?',
            contact_desc: 'Выберите удобный способ связи. Я всегда открыта к диалогу и готова ответить на ваши вопросы.',
            contact_max: 'Макс',
            contact_max_label: 'Написать в Макс',
            contact_email_label: 'Написать письмо',
            footer_brand: 'Александра Очирова — Предприниматель, Лидер 4Life',
            copyright: '© 2026 Александра Очирова. Независимый дистрибьютор 4Life (ID: 11197938).'
        },
        en: {
            lang_label: 'EN',
            nav_about: 'About',
            nav_mission: 'Mission',
            nav_benefits: 'Benefits',
            nav_company: 'Company',
            nav_contact: 'Contact',
            hero_badge: 'Entrepreneur & 4Life Leader',
            hero_name_html: 'Alexandra<br><span class="accent-text">Ochirova</span>',
            hero_desc: 'I help people build a risk-free business from scratch using a proven system. Passive income, health, and freedom with 4Life.',
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
            mission_badge: 'Our Mission',
            mission_text: 'By helping people realize their dreams through leadership, we create a society of wise, financially independent, and free people.',
            values_badge: '4Life Company Values',
            value1_title: 'Science',
            value1_desc: 'Innovative products based on cutting-edge scientific research and patented technologies.',
            value2_title: 'Service',
            value2_desc: 'The highest level of care and attention to every partner and client of the company.',
            value3_title: 'Success',
            value3_desc: 'A proven path to financial freedom — development plan, strategy, and mentor support.',
            value4_title: 'Satisfaction',
            value4_desc: 'Joy from the results, health, and quality of life that our products and business bring.',
            benefits_badge: 'Work with me',
            benefits_title_html: 'What you <span class="accent-text">get</span> working with me',
            ben1_title: 'Ready System',
            ben1_desc: 'A fully packaged turnkey business system. No need to invent — just follow the plan.',
            ben2_title: 'Step-by-Step Strategy',
            ben2_desc: 'A clear income plan — from first steps to scaling your business worldwide.',
            ben3_title: 'Tools',
            ben3_desc: 'Ready-made promotion and sales tools. Templates, scripts, and proven methods.',
            ben4_title: 'Personal Support',
            ben4_desc: 'I personally support every partner at all stages — from launch to leadership.',
            ben5_title: 'Passive Income',
            ben5_desc: 'Build your network once and receive stable dividends from its turnover for many years.',
            ben6_title: 'Health & Anti-Age',
            ben6_desc: 'Access to cutting-edge innovations: smart immunity, body rejuvenation, and quality longevity.',
            audience_title_html: 'Who is <span class="accent-text">this system</span> for?',
            aud1_title: 'Moms on maternity leave',
            aud1_desc: 'For those who want to grow and earn without leaving their family and children.',
            aud2_title: 'Entrepreneurs',
            aud2_desc: 'For those looking for new niches with high margins and no risks of traditional business.',
            aud3_title: 'Employees & Freelancers',
            aud3_desc: 'For those tired of income ceilings who want to build their own independent source of profit.',
            timeline_badge: 'Path to results',
            timeline_title_html: 'Success <span class="accent-text">story</span>',
            tl1_text: 'Joined 4Life. No experience in network business. 17 years of law enforcement behind.',
            tl2_text: 'First 50,000 ₽ income within six months. Building a team and achieving stable earnings.',
            tl3_text: 'Expanding the network across several regions and countries. The team grows, passive income increases.',
            tl4_year: 'Today',
            tl4_text: 'Over 250 partners in the team. The network operates in different cities and countries. Passive income and freedom.',
            quiz_title: 'Quiz: Is network business right for you?',
            quiz_desc: 'Take a short quiz and get a personalized strategy.',
            quiz_btn: 'Start quiz',
            phil_badge: 'Philosophy of results',
            phil_text: 'My system is built on practice, numbers, and real cases. You won\'t figure it out alone — you\'ll get specific actions and support.',
            phil_sub: 'Get ready to gain a new profession, new knowledge, and immediately apply them in practice. Using a proven system, you can achieve stable income.',
            phil_btn: 'Start your path',
            antifit_title: '⛔ Who this is NOT for',
            antifit_1: '❌ Those looking for a "magic pill" and easy money.',
            antifit_2: '❌ Those not ready to learn and change their mindset.',
            antifit_3: '❌ Those who prefer blaming circumstances instead of taking action.',
            antifit_footer: 'If this is you — please close this website. We only work with those ready for results.',
            articles_badge: 'Useful',
            articles_title: 'Useful articles',
            art1_tag: 'Mindset',
            art1_title: 'How to stop being afraid of sales?',
            art1_desc: '5 techniques that will transform your view of business.',
            art2_tag: '4Life',
            art2_title: 'Top 5 beginner mistakes',
            art2_desc: 'Why 90% leave in the first month and how to be in the successful 10%.',
            art3_tag: 'System',
            art3_title: 'The secret of a fast start',
            art3_desc: 'A step-by-step plan to reach your first 50,000 ₽ in a few months.',
            art_read: 'Read article →',
            faq_title: 'FAQ',
            faq1_q: 'Is this a pyramid scheme?',
            faq1_a: 'No, 4Life Research is an official product company with a real physical product, certification, and a transparent payout system. Pyramids earn from contributions; we earn from product turnover.',
            faq2_q: 'Do I need to quit my job?',
            faq2_a: 'No, you can combine at the start. Just dedicate 2-3 hours a day. When income exceeds your salary, you\'ll make the decision yourself.',
            faq3_q: 'I have no sales experience. Will it work?',
            faq3_a: 'Absolutely. The training system is built so that even beginners start seeing results within the first weeks. I provide scripts, templates, and tools.',
            faq4_q: 'How long does it take to start earning?',
            faq4_a: 'It\'s individual. On average, my partners reach their first noticeable income by the 2nd-3rd month of active work.',
            company_badge: 'About the Company',
            company_title_html: 'Company <span class="brand-text">4Life</span>',
            company_slogan: 'Immunity is the foundation of your health!',
            company_years: 'I\'ve been with this project for over 5 years.',
            company_about_html: '<strong>4Life Research</strong> — The Immune System Company™. Research for Life. Innovative products based on transfer factors that teach your immune system to work correctly.',
            company_join: 'By joining my team, you get not only a business mentor but also access to advanced health products for your family.',
            company_btn: 'Visit the shop',
            contact_badge: 'Get in Touch',
            contact_title: 'Ready to start your journey?',
            contact_desc: 'Choose a convenient way to connect. I\'m always open to dialogue and ready to answer your questions.',
            contact_max: 'Max',
            contact_max_label: 'Message in Max',
            contact_email_label: 'Send an email',
            footer_brand: 'Alexandra Ochirova — Entrepreneur, 4Life Leader',
            copyright: '© 2026 Alexandra Ochirova. Independent 4Life Distributor (ID: 11197938).'
        },
        kz: {
            lang_label: 'KZ',
            nav_about: 'Мен туралы',
            nav_mission: 'Миссия',
            nav_benefits: 'Не аласыз',
            nav_company: 'Компания',
            nav_contact: 'Байланыс',
            hero_badge: 'Кәсіпкер және 4Life көшбасшысы',
            hero_name_html: 'Александра<br><span class="accent-text">Очирова</span>',
            hero_desc: 'Адамдарға дайын жүйе арқылы нөлден тәуекелсіз бизнес құруға көмектесемін. 4Life компаниясымен пассивті табыс, денсаулық және еркіндік.',
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
            mission_badge: 'Команда миссиясы',
            mission_text: 'Көшбасшылық арқылы адамдардың арманын жүзеге асыруға көмектесе отырып, біз ақылды, қаржылық тәуелсіз және еркін адамдардың қоғамын құрамыз.',
            values_badge: '4Life компаниясының құндылықтары',
            value1_title: 'Ғылым',
            value1_desc: 'Озық ғылыми зерттеулер мен патенттелген технологияларға негізделген инновациялық өнімдер.',
            value2_title: 'Сервис',
            value2_desc: 'Компанияның әрбір серіктесі мен клиентіне жоғары деңгейдегі сервис пен қамқорлық.',
            value3_title: 'Табыс',
            value3_desc: 'Қаржылық еркіндікке жеткен жол — даму жоспары, стратегия және тәлімгер қолдауы.',
            value4_title: 'Қанағаттану',
            value4_desc: 'Біздің өнімдер мен бизнес әкелетін нәтижелер, денсаулық және өмір сапасынан қуаныш.',
            benefits_badge: 'Менімен жұмыс',
            benefits_title_html: 'Менімен жұмыс жасай отырып, <span class="accent-text">не аласыз</span>',
            ben1_title: 'Дайын жүйе',
            ben1_desc: 'Кілтке толығымен жабдықталған жұмыс жүйесі. Ойлап табудың қажеті жоқ — жоспар бойынша әрекет етіңіз.',
            ben2_title: 'Қадамдық стратегия',
            ben2_desc: 'Табысқа шығудың нақты жоспары — алғашқы қадамдардан бастап бизнесті масштабтауға дейін.',
            ben3_title: 'Құралдар',
            ben3_desc: 'Жылжыту мен сатудың дайын құралдары. Жұмыс істейтін шаблондар, сценарийлер мен әдістемелер.',
            ben4_title: 'Жеке қолдау',
            ben4_desc: 'Мен әрбір серіктесті барлық кезеңдерде — старттан көшбасшылыққа дейін жеке қолдаймын.',
            ben5_title: 'Пассивті табыс',
            ben5_desc: 'Желіңізді бір рет құрыңыз және оның айналымынан көп жылдар бойы тұрақты дивиденд алыңыз.',
            ben6_title: 'Денсаулық және Anti-Age',
            ben6_desc: 'Озық әзірлемелерге қол жеткізу: ақылды иммунитет, денені жасарту және сапалы ұзақ өмір.',
            audience_title_html: '<span class="accent-text">Бұл жүйе</span> кімге арналған?',
            aud1_title: 'Декреттегі аналар',
            aud1_desc: 'Отбасы мен бала тәрбиесінен қол үзбей табыс табу мен өзін-өзі жүзеге асыруды қалайтындар үшін.',
            aud2_title: 'Кәсіпкерлер',
            aud2_desc: 'Жоғары маржиналдылығы бар жаңа бизнес тауашаларды іздейтіндер үшін.',
            aud3_title: 'Жалдамалы жұмыс және фриланс',
            aud3_desc: 'Табыс шегінен шаршап, тәуелсіз пайда көзін құрғысы келетіндер үшін.',
            timeline_badge: 'Нәтижеге жол',
            timeline_title_html: 'Табыс <span class="accent-text">тарихы</span>',
            tl1_text: '4Life компаниясына келу. Желілік бизнесте тәжірибе жоқ. Артында ІІМ-де 17 жыл қызмет.',
            tl2_text: 'Жарты жылда алғашқы 50 000 ₽ табыс. Команда құру және тұрақты жалақыға шығу.',
            tl3_text: 'Желіні бірнеше аймақтар мен елдерге кеңейту. Команда өсуде, пассивті табыс артуда.',
            tl4_year: 'Бүгін',
            tl4_text: 'Командада 250-ден астам серіктес. Желі әртүрлі қалалар мен елдерде жұмыс істейді.',
            quiz_title: 'Тест: Желілік бизнес сізге сәйкес пе?',
            quiz_desc: 'Қысқа тест тапсырып, жеке стратегия алыңыз.',
            quiz_btn: 'Тестті бастау',
            phil_badge: 'Нәтиже философиясы',
            phil_text: 'Менің жүйем тәжірибеге, сандарға және нақты кейстерге негізделген. Сіз өзіңіз түсінбейсіз — нақты әрекеттер мен қолдау аласыз.',
            phil_sub: 'Жаңа мамандық, жаңа білім алуға және оны бірден тәжірибеде қолдануға дайын болыңыз.',
            phil_btn: 'Жолды бастау',
            antifit_title: '⛔ Бұл кімге СӘЙКЕС КЕЛМЕЙДІ',
            antifit_1: '❌ «Сиқырлы таблетка» мен оңай ақша іздейтіндерге.',
            antifit_2: '❌ Оқуға және ойлауды өзгертуге дайын емес адамдарға.',
            antifit_3: '❌ Әрекет етудің орнына жағдайларды кінәлауды ұнататындарға.',
            antifit_footer: 'Егер бұл сіз туралы болса — бұл сайтты жабыңыз. Біз тек нәтижеге дайын адамдармен жұмыс жасаймыз.',
            articles_badge: 'Пайдалы',
            articles_title: 'Пайдалы мақалалар',
            art1_tag: 'Ойлау',
            art1_title: 'Сатудан қорқуды қалай тоқтатуға болады?',
            art1_desc: 'Бизнес туралы көзқарасыңызды өзгертетін 5 техника.',
            art2_tag: '4Life',
            art2_title: 'Жаңадан бастағандардың топ-5 қателігі',
            art2_desc: '90% неліктен бірінші айда кетеді және сәтті 10%-ға қалай түсуге болады.',
            art3_tag: 'Жүйе',
            art3_title: 'Жылдам старттың құпиясы',
            art3_desc: 'Бірнеше ай ішінде алғашқы 50 000 ₽-ға шығудың қадамдық жоспары.',
            art_read: 'Мақаланы оқу →',
            faq_title: 'Жиі қойылатын сұрақтар',
            faq1_q: 'Бұл қаржылық пирамида ма?',
            faq1_a: 'Жоқ, 4Life Research — нақты физикалық өнімі, сертификаттауы және ашық төлем жүйесі бар ресми компания.',
            faq2_q: 'Жұмыстан кету керек пе?',
            faq2_a: 'Жоқ, бастапқыда қоса жасауға болады. Бизнеске күніне 2-3 сағат бөлсеңіз жеткілікті.',
            faq3_q: 'Менде сату тәжірибесі жоқ. Шығар ма?',
            faq3_a: 'Әрине. Оқыту жүйесі жаңадан бастағандар да алғашқы апталарда нәтиже алатындай құрылған.',
            faq4_q: 'Табысқа шығу үшін қанша уақыт керек?',
            faq4_a: 'Бәрі жеке. Орта есеппен серіктестерім 2-3 айда алғашқы табысқа шығады.',
            company_badge: 'Компания туралы',
            company_title_html: 'Компания <span class="brand-text">4Life</span>',
            company_slogan: 'Иммунитет — сіздің денсаулығыңыздың іргетасы!',
            company_years: 'Мен бір жобада 5 жылдан астам уақыт жүрмін.',
            company_about_html: '<strong>4Life Research</strong> — The Immune System Company™. Сіздің иммунитетіңізді дұрыс жұмыс істеуге үйрететін трансфер факторларына негізделген инновациялық өнімдер.',
            company_join: 'Менің командама қосылу арқылы сіз тек бизнес-тәлімгерді ғана емес, отбасыңыздың денсаулығына арналған озық өнімдерді де аласыз.',
            company_btn: 'Дүкенді көру',
            contact_badge: 'Менімен байланыс',
            contact_title: 'Жолыңызды бастауға дайынсыз ба?',
            contact_desc: 'Ыңғайлы байланыс әдісін таңдаңыз.',
            contact_max: 'Макс',
            contact_max_label: 'Макс-қа жазу',
            contact_email_label: 'Хат жазу',
            footer_brand: 'Александра Очирова — Кәсіпкер, 4Life Көшбасшысы',
            copyright: '© 2026 Александра Очирова. 4Life тәуелсіз дистрибьюторы (ID: 11197938).'
        },
        zh: {
            lang_label: 'ZH',
            nav_about: '关于我',
            nav_mission: '使命',
            nav_benefits: '您将获得',
            nav_company: '公司',
            nav_contact: '联系我',
            hero_badge: '企业家 & 4Life 领导人',
            hero_name_html: '亚历山德拉<br><span class="accent-text">奥奇罗娃</span>',
            hero_desc: '我帮助人们通过成熟的系统从零开始建立无风险的业务。与4Life一起实现被动收入、健康和自由。',
            hero_btn_write: '给我发消息',
            hero_btn_shop: '4Life 商店',
            fc_partners: '合作伙伴',
            fc_many: '许多',
            fc_countries: '国家和地区',
            about_badge: '我的故事',
            about_title_html: '我是如何开始<span class="accent-text">创业</span>的',
            about_lead: '我叫亚历山德拉，来自俄罗斯布里亚特，自2021年起从事网络业务。',
            about_p1: '在加入这个行业之前，我在执法机构工作了17年多。但是，我只用了六个月就从零开始实现了最初的50,000卢布在线收入。',
            about_p2: '有一天我邀请了3个人，从那以后，我的网络在许多地区、城市甚至国家不断发展。',
            about_p3_html: '今天，我的团队有<strong>超过250人</strong>。我只建立了一次网络，现在获得被动收入，给我未来的自由和信心。',
            stat_mvd: '执法工作年限',
            stat_year: '4Life 开始年份',
            stat_team: '团队成员',
            stat_passive: '被动',
            stat_income: '稳定增长收入',
            mission_badge: '团队使命',
            mission_text: '通过领导力帮助人们实现梦想，我们创建一个理性、财务独立和自由的人的社会。',
            values_badge: '4Life 公司价值观',
            value1_title: '科学',
            value1_desc: '基于前沿科学研究和专利技术的创新产品。',
            value2_title: '服务',
            value2_desc: '对公司每位合作伙伴和客户提供最高水平的服务和关怀。',
            value3_title: '成功',
            value3_desc: '通往财务自由的可靠道路 — 发展计划、战略和导师支持。',
            value4_title: '满意',
            value4_desc: '因我们的产品和业务带来的成果、健康和生活质量而感到喜悦。',
            benefits_badge: '与我合作',
            benefits_title_html: '与我合作，您将<span class="accent-text">获得</span>什么',
            ben1_title: '成熟系统',
            ben1_desc: '完全打包的交钥匙工作系统。无需发明 — 只需按照计划行动。',
            ben2_title: '逐步战略',
            ben2_desc: '明确的收入计划 — 从第一步到全球业务扩展。',
            ben3_title: '工具',
            ben3_desc: '现成的推广和销售工具。经过验证的模板、脚本和方法。',
            ben4_title: '个人指导',
            ben4_desc: '我亲自在所有阶段支持每位合作伙伴 — 从启动到成为领导者。',
            ben5_title: '被动收入',
            ben5_desc: '一次建立网络，多年来从其营业额中获得稳定的红利。',
            ben6_title: '健康与抗衰老',
            ben6_desc: '获得前沿创新：智能免疫力、身体年轻化和高质量的长寿。',
            audience_title_html: '<span class="accent-text">这个系统</span>适合谁？',
            aud1_title: '产假中的妈妈',
            aud1_desc: '适合想在不离开家庭和育儿的情况下实现自我和赚钱的人。',
            aud2_title: '企业家',
            aud2_desc: '适合寻找高利润率、无传统商业风险的新商机的人。',
            aud3_title: '上班族和自由职业者',
            aud3_desc: '适合厌倦了收入上限、想要建立独立收入来源的人。',
            timeline_badge: '通往成功之路',
            timeline_title_html: '成功<span class="accent-text">故事</span>',
            tl1_text: '加入4Life公司。没有网络业务经验。17年执法工作经验。',
            tl2_text: '半年内实现首笔50,000卢布收入。建立团队并实现稳定收入。',
            tl3_text: '将网络扩展到多个地区和国家。团队不断壮大，被动收入持续增长。',
            tl4_year: '今天',
            tl4_text: '团队中有超过250名合作伙伴。网络遍布不同城市和国家。被动收入和自由。',
            quiz_title: '测试：网络业务适合您吗？',
            quiz_desc: '参加简短测试，获得个性化策略。',
            quiz_btn: '开始测试',
            phil_badge: '结果哲学',
            phil_text: '我的系统建立在实践、数据和真实案例之上。您不必独自摸索 — 您将获得具体的行动方案和支持。',
            phil_sub: '准备好获取新的职业、新的知识，并立即在实践中应用。使用成熟的系统，您可以实现稳定的收入。',
            phil_btn: '开始旅程',
            antifit_title: '⛔ 这不适合谁',
            antifit_1: '❌ 寻找"灵丹妙药"和轻松赚钱的人。',
            antifit_2: '❌ 不愿学习和改变思维方式的人。',
            antifit_3: '❌ 喜欢抱怨环境而不采取行动的人。',
            antifit_footer: '如果这说的是您 — 请关闭此网站。我们只与准备好取得成果的人合作。',
            articles_badge: '有用的',
            articles_title: '有用的文章',
            art1_tag: '思维',
            art1_title: '如何不再害怕销售？',
            art1_desc: '5个技巧将彻底改变您对商业的看法。',
            art2_tag: '4Life',
            art2_title: '新手犯的5大错误',
            art2_desc: '为什么90%的人在第一个月就离开，以及如何成为成功的10%。',
            art3_tag: '系统',
            art3_title: '快速起步的秘密',
            art3_desc: '几个月内实现首笔50,000卢布收入的分步计划。',
            art_read: '阅读文章 →',
            faq_title: '常见问题',
            faq1_q: '这是金融传销吗？',
            faq1_a: '不是。4Life Research 是一家拥有真实产品、认证和透明支付体系的正规公司。传销靠会费盈利，而我们靠商品流通盈利。',
            faq2_q: '需要辞职吗？',
            faq2_a: '不需要，初期可以兼职。每天投入2-3小时即可。当收入超过工资时，您自己做决定。',
            faq3_q: '我没有销售经验。能成功吗？',
            faq3_a: '当然可以。培训系统的设计使得即使是新手也能在最初几周内看到成果。我会提供脚本、模板和工具。',
            faq4_q: '需要多长时间才能开始赚钱？',
            faq4_a: '因人而异。平均而言，我的合作伙伴在积极工作的第2-3个月就能获得第一笔可观收入。',
            company_badge: '关于公司',
            company_title_html: '<span class="brand-text">4Life</span> 公司',
            company_slogan: '免疫力是您健康的基础！',
            company_years: '我参与这个项目已经五年多了。',
            company_about_html: '<strong>4Life Research</strong> — The Immune System Company™。基于转移因子的创新产品，教导您的免疫系统正确工作。',
            company_join: '加入我的团队，您不仅能获得业务导师，还能为家人获取先进的健康产品。',
            company_btn: '参观商店',
            contact_badge: '联系我',
            contact_title: '准备好开启您的旅程了吗？',
            contact_desc: '选择方便的联系方式。我随时准备与您对话并回答您的问题。',
            contact_max: 'Max',
            contact_max_label: '在Max中发消息',
            contact_email_label: '发送电子邮件',
            footer_brand: '亚历山德拉·奥奇罗娃 — 企业家，4Life 领导人',
            copyright: '© 2026 亚历山德拉·奥奇罗娃. 独立 4Life 经销商 (ID: 11197938).'
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

        const langLabel = document.getElementById('langLabel');
        if (langLabel && dict.lang_label) {
            langLabel.textContent = dict.lang_label;
        }

        document.querySelectorAll('.lang-option').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.lang === lang);
        });
    }

    // ═══════════════════════════════════════════
    // DROPDOWN MENU
    // ═══════════════════════════════════════════
    const langToggleBtn = document.getElementById('langToggle');
    const langMenu = document.getElementById('langMenu');

    if (langToggleBtn && langMenu) {
        langToggleBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            langMenu.classList.toggle('show');
        });

        document.querySelectorAll('.lang-option').forEach(option => {
            option.addEventListener('click', (e) => {
                setLanguage(e.target.dataset.lang);
                langMenu.classList.remove('show');
            });
        });

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
        if (icon) icon.className = theme === 'dark' ? 'ph ph-sun' : 'ph ph-moon';
    }

    setTheme(currentTheme);
    setLanguage(currentLang);

    const themeToggle = document.getElementById('themeToggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            setTheme(currentTheme === 'dark' ? 'light' : 'dark');
        });
    }

    // ═══════════════════════════════════════════
    // CURSOR
    // ═══════════════════════════════════════════
    const cursor = document.querySelector('.cursor');
    if (cursor && window.matchMedia('(pointer: fine)').matches) {
        document.addEventListener('mousemove', (e) => {
            cursor.style.left = e.clientX + 'px';
            cursor.style.top = e.clientY + 'px';
        });
        document.querySelectorAll('a, button').forEach(elem => {
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
            if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
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
