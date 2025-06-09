document.addEventListener('DOMContentLoaded', () => {
    // --- Translations Object ---
    const translations = {
        ru: {
            'faq-title': 'FAQ — Часто задаваемые вопросы',
            'faq-q1': 'Как зарегистрироваться на сайте?',
            'faq-a1': 'Перейдите на страницу регистрации и заполните все поля. После этого вы сможете войти в систему.',
            'faq-q2': 'Что делать, если забыл пароль?',
            'faq-a2': 'Функция восстановления пароля пока не реализована. Обратитесь в поддержку или создайте новый аккаунт.',
            'faq-q3': 'Как работает аналитика расходов?',
            'faq-a3': 'В разделе аналитики вы можете ввести свои доходы и расходы, увидеть баланс, а также визуализацию данных.',
            'faq-q4': 'Как сменить язык или валюту?',
            'faq-a4': 'В шапке сайта доступны кнопки для смены языка. Валюта также настраивается в разделе настроек.',
            'faq-q5': 'Насколько безопасны мои данные?',
            'faq-a5': 'Все данные хранятся безопасно в базе данных. Мы не передаём информацию третьим лицам.',
            'nav-home': 'Главная',
            'nav-features': 'Возможности',
            'feature-analytics-menu': 'Автоматическая аналитика',
            'feature-budget-menu': 'Умный бюджет',
            'feature-security-menu': 'Безопасность',
            'features-all-menu': 'Все возможности',
            'nav-banks': 'Банки',
            'banks-connected': 'Подключенные банки',
            'banks-add': 'Добавить банк',
            'banks-settings': 'Настройки счетов',
            'banks-faq': 'Частые вопросы (банки)',
            'nav-analytics': 'Аналитика',
            'nav-faq': 'FAQ',
            'login': 'Войти',
            'register': 'Регистрация',
            'logout': 'Выйти',
            'contacts': 'Контакты',
            'phone': 'Телефон: +7 (123) 456-78-90',
            'social-telegram': 'Telegram',
            'social-vk': 'VK',
            'subscribe': 'Подписка',
            'subscribe-text': 'Получайте финансовые советы на почту',
            'email-placeholder': 'Ваш email',
            'subscribe-btn': 'Подписаться',
            'footer-copyright': '© 2025 FinGuru. Все права защищены.',
            'privacy-policy': 'Политика конфиденциальности',
            'terms-of-use': 'Условия использования',
            'email-contact': 'info@finguru.com',
            'address-contact': '123 Finance St, City, Country',
            'subscribe-info': 'Мы заботимся о ваших данных в нашей Политике конфиденциальности',
            'footer-about-title': 'О FinGuru',
            'footer-about-text': 'FinGuru - это ваш персональный финансовый помощник, разработанный, чтобы помочь вам легко управлять своими деньгами, отслеживать расходы и достигать финансовых целей.',
            'footer-quicklinks-title': 'Быстрые ссылки',
            'footer-how-it-works': 'Как это работает',
            'footer-testimonials': 'Отзывы',
            'footer-start': 'Начать'
        },
        en: {
            'faq-title': 'FAQ — Frequently Asked Questions',
            'faq-q1': 'How do I register on the site?',
            'faq-a1': 'Go to the registration page and fill out all the fields. After that, you can log into the system.',
            'faq-q2': 'What should I do if I forgot my password?',
            'faq-a2': 'Password recovery is not yet implemented. Please contact support or create a new account.',
            'faq-q3': 'How does expense analytics work?',
            'faq-a3': 'In the analytics section, you can input your income and expenses, view your balance, and see data visualizations.',
            'faq-q4': 'How do I change the language or currency?',
            'faq-a4': 'Language toggle buttons are available in the site header. Currency can also be adjusted in the settings section.',
            'faq-q5': 'How secure is my data?',
            'faq-a5': 'All data is securely stored in our database. We do not share information with third parties.',
            'nav-home': 'Home',
            'nav-features': 'Features',
            'feature-analytics-menu': 'Automatic Analytics',
            'feature-budget-menu': 'Smart Budget',
            'feature-security-menu': 'Security',
            'features-all-menu': 'All Features',
            'nav-banks': 'Banks',
            'banks-connected': 'Connected Banks',
            'banks-add': 'Add Bank',
            'banks-settings': 'Account Settings',
            'banks-faq': 'Banks FAQ',
            'nav-analytics': 'Analytics',
            'nav-faq': 'FAQ',
            'login': 'Login',
            'register': 'Register',
            'logout': 'Logout',
            'contacts': 'Contacts',
            'phone': 'Phone: +7 (123) 456-78-90',
            'social-telegram': 'Telegram',
            'social-vk': 'VK',
            'subscribe': 'Subscribe',
            'subscribe-text': 'Receive financial tips via email',
            'email-placeholder': 'Your email',
            'subscribe-btn': 'Subscribe',
            'footer-copyright': '© 2025 FinGuru. All rights reserved.',
            'privacy-policy': 'Privacy Policy',
            'terms-of-use': 'Terms of Use',
            'email-contact': 'info@finguru.com',
            'address-contact': '123 Finance St, City, Country',
            'subscribe-info': 'We care about your data in our Privacy Policy',
            'footer-about-title': 'About FinGuru',
            'footer-about-text': 'FinGuru is your personal finance assistant, designed to help you manage your money, track expenses, and achieve your financial goals with ease.',
            'footer-quicklinks-title': 'Quick Links',
            'footer-how-it-works': 'How It Works',
            'footer-testimonials': 'Testimonials',
            'footer-start': 'Get Started'
        },
        ky: {
            'faq-title': 'FAQ — Көп берилүүчү суроолор',
            'faq-q1': 'Сайтта кантип катталам?',
            'faq-a1': 'Катталуу баракчасына өтүп, бардык талааларды толтуруңуз. Андан кийин системага кире аласыз.',
            'faq-q2': 'Сырсөздү унутуп калсам эмне кылам?',
            'faq-a2': 'Сырсөздү калыбына келтирүү функциясы азырынча ишке ашырыла элек. Колдоо кызматына кайрылыңыз же жаңы аккаунт түзүңүз.',
            'faq-q3': 'Чыгымдар аналитикасы кантип иштейт?',
            'faq-a3': 'Аналитика бөлүмүндө кирешелериңизди жана чыгымдарыңызды киргизип, балансты көрүп, маалыматтарды визуализация түрүндө көрө аласыз.',
            'faq-q4': 'Тилди же валютаны кантип өзгөртөм?',
            'faq-a4': 'Сайттын башкы бөлүмүндө тилди өзгөртүү баскычтары бар. Валюта да жөндөөлөр бөлүмүндө өзгөртүлөт.',
            'faq-q5': 'Менин маалыматтарым канчалык коопсуз?',
            'faq-a5': 'Бардык маалыматтар базада коопсуз сакталат. Биз маалыматты үчүнчү тараптар менен бөлүшпөйбүз.',
            'nav-home': 'Башкы бет',
            'nav-features': 'Мүмкүнчүлүктөр',
            'feature-analytics-menu': 'Автоматтык аналитика',
            'feature-budget-menu': 'Акылдуу бюджет',
            'feature-security-menu': 'Коопсуздук',
            'features-all-menu': 'Бардык мүмкүнчүлүктөр',
            'nav-banks': 'Банктар',
            'banks-connected': 'Туташкан банктар',
            'banks-add': 'Банк кошуу',
            'banks-settings': 'Эсеп жөндөөлөрү',
            'banks-faq': 'Банктар боюнча суроолор',
            'nav-analytics': 'Аналитика',
            'nav-faq': 'Суроолор',
            'login': 'Кирүү',
            'register': 'Каттоо',
            'logout': 'Чыгуу',
            'contacts': 'Байланыштар',
            'phone': 'Телефон: +7 (123) 456-78-90',
            'social-telegram': 'Telegram',
            'social-vk': 'VK',
            'subscribe': 'Жазылуу',
            'subscribe-text': 'Электрондук почта аркылуу финансылык кеңештерди алыңыз',
            'email-placeholder': 'Сиздин email',
            'subscribe-btn': 'Жазылуу',
            'footer-copyright': '© 2025 FinGuru. Бардык укуктар корголгон.',
            'privacy-policy': 'Купуялык саясаты',
            'terms-of-use': 'Колдонуу шарттары',
            'email-contact': 'info@finguru.com',
            'address-contact': '123 Finance St, City, Country',
            'subscribe-info': 'Биз сиздин маалыматыңызга кам көрөбүз купуялык саясатта',
            'footer-about-title': 'FinGuru жөнүндө',
            'footer-about-text': 'FinGuru - бул сиздин жеке финансылык жардамчыңыз, ал сизге акчаңызды башкарууга, чыгымдарды көзөмөлдөөгө жана финансылык максаттарыңызга оңой жетүүгө жардам берүү үчүн иштелип чыккан.',
            'footer-quicklinks-title': 'Тез шилтемелер',
            'footer-how-it-works': 'Кантип иштейт',
            'footer-testimonials': 'Сын-пикирлер',
            'footer-start': 'Баштоо'
        }
    };

    // --- Language Management ---
    let currentLang = localStorage.getItem('language') || 'ru';
    const langButtons = document.querySelectorAll('.lang-btn');

    const updateLanguage = () => {
        document.title = translations[currentLang]['faq-title'] || 'FinGuru – FAQ';

        document.querySelectorAll('[data-lang-key]').forEach(element => {
            const key = element.getAttribute('data-lang-key');
            if (translations[currentLang][key] !== undefined) {
                element.innerHTML = translations[currentLang][key];
            }
        });

        const emailInput = document.querySelector('.subscribe-form input[type="email"]');
        if (emailInput && translations[currentLang]['email-placeholder'] !== undefined) {
            emailInput.placeholder = translations[currentLang]['email-placeholder'];
        }

        document.documentElement.lang = currentLang;
    };

    langButtons.forEach(btn => {
        if (btn.dataset.lang === currentLang) {
            btn.classList.add('active');
        }
        btn.addEventListener('click', () => {
            if (currentLang !== btn.dataset.lang) {
                langButtons.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                currentLang = btn.dataset.lang;
                localStorage.setItem('language', currentLang);
                updateLanguage();
            }
        });
    });

    // --- Theme Toggling ---
    const themeToggleBtn = document.getElementById('themeToggle');
    const body = document.body;
    const savedTheme = localStorage.getItem('theme') || 'light';

    if (savedTheme === 'dark') {
        body.classList.add('dark-theme');
    }

    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', () => {
            body.classList.toggle('dark-theme');
            const theme = body.classList.contains('dark-theme') ? 'dark' : 'light';
            localStorage.setItem('theme', theme);
        });
    }});

    // --- FAQ Toggle Functionality ---
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        const answer = item.querySelector('.faq-answer');

        question.addEventListener('click', () => {
            const isOpen = item.classList.contains('open');

            // Закрываем все открытые FAQ
            faqItems.forEach(i => {
                if (i !== item && i.classList.contains('open')) {
                    i.classList.remove('open');
                    i.querySelector('.faq-answer').style.maxHeight = '0';
                }
            });

            // Открываем/закрываем текущий FAQ
            item.classList.toggle('open', !isOpen);
            if (!isOpen) {
                answer.style.maxHeight = answer.scrollHeight + 'px';
            } else {
                answer.style.maxHeight = '0';
            }
        });
    });

    // --- Dropdown Functionality (for nav menu) ---
    const dropdownToggles = document.querySelectorAll('.dropdown-toggle');

    dropdownToggles.forEach(toggle => {
        toggle.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();

            const dropdown = toggle.closest('.dropdown');
            const menu = dropdown.querySelector('.dropdown-menu');
            const isExpanded = toggle.getAttribute('aria-expanded') === 'true';

            document.querySelectorAll('.dropdown-menu.show').forEach(openMenu => {
                if (openMenu !== menu) {
                    openMenu.classList.remove('show');
                    openMenu.closest('.dropdown').querySelector('.dropdown-toggle').setAttribute('aria-expanded', 'false');
                }
            });

            menu.classList.toggle('show', !isExpanded);
            toggle.setAttribute('aria-expanded', !isExpanded);

            if (menu.classList.contains('show')) {
                const rect = menu.getBoundingClientRect();
                if (rect.right > window.innerWidth - 20) {
                    menu.style.left = 'unset';
                    menu.style.right = '0';
                } else if (rect.left < 20) {
                    menu.style.left = '0';
                    menu.style.right = 'unset';
                } else {
                    menu.style.left = '0';
                    menu.style.right = 'unset';
                }
            }
        });
    });

    document.addEventListener('click', (event) => {
        if (!event.target.closest('.dropdown')) {
            document.querySelectorAll('.dropdown-menu.show').forEach(menu => {
                menu.classList.remove('show');
                menu.closest('.dropdown').querySelector('.dropdown-toggle').setAttribute('aria-expanded', 'false');
            });
        }
    });

    // --- Active Navigation Link Highlighting ---
    const navLinks = document.querySelectorAll('nav .nav-link, .dropdown-menu a');
    const sections = document.querySelectorAll('section[id]');

    const highlightNavLink = () => {
        let currentActiveSectionId = '';
        const headerHeight = document.querySelector('.header')?.offsetHeight || 70;

        sections.forEach(section => {
            const sectionTop = section.offsetTop - headerHeight - 10;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight) {
                currentActiveSectionId = section.id;
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');

            if (link.getAttribute('href') === `#${currentActiveSectionId}` && currentActiveSectionId !== '') {
                link.classList.add('active');
            }

            const parentDropdownToggle = link.closest('.dropdown')?.querySelector('.dropdown-toggle');
            if (parentDropdownToggle) {
                const hasActiveChild = Array.from(parentDropdownToggle.nextElementSibling.querySelectorAll('a'))
                    .some(a => a.classList.contains('active'));
                if (hasActiveChild) {
                    parentDropdownToggle.classList.add('active');
                } else {
                    parentDropdownToggle.classList.remove('active');
                }
            }
        });
    };

    window.addEventListener('scroll', highlightNavLink);
    highlightNavLink();

    // --- Smooth Scrolling for Anchor Links ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                const headerOffset = document.querySelector('.header')?.offsetHeight || 70;
                const elementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
                const offsetPosition = elementPosition - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });

                const parentDropdownMenu = this.closest('.dropdown-menu');
                if (parentDropdownMenu && parentDropdownMenu.classList.contains('show')) {
                    parentDropdownMenu.classList.remove('show');
                    parentDropdownMenu.closest('.dropdown').querySelector('.dropdown-toggle').setAttribute('aria-expanded', 'false');
                }
            }
        });
    });

    // --- Hamburger Menu Toggle ---
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.querySelector('.nav-menu');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });

        document.addEventListener('click', (e) => {
            if (!navMenu.contains(e.target) && !hamburger.contains(e.target)) {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            }
        });
    };

    // --- Initial Language Update on Load ---
    updateLanguage();
