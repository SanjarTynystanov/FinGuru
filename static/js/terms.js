document.addEventListener('DOMContentLoaded', () => {
    // --- Translations Object ---
    const translations = {
        ru: {
            'terms-title': 'Условия использования',
            'terms-intro': 'Добро пожаловать на сайт FinGuru! Используя наш сервис, вы соглашаетесь с приведёнными ниже условиями. Пожалуйста, внимательно прочитайте их.',
            'terms-section1-title': '1. Общие положения',
            'terms-section1-content': 'Используя этот сайт, вы соглашаетесь с настоящими условиями. Если вы не согласны, пожалуйста, прекратите использование сайта.',
            'terms-section2-title': '2. Ответственность',
            'terms-section2-content': 'Мы не несем ответственность за возможные убытки, вызванные использованием сайта, включая потерю данных или финансовые убытки.',
            'terms-section3-title': '3. Интеллектуальная собственность',
            'terms-section3-content': 'Все материалы сайта, включая текст, изображения и код, защищены авторским правом и принадлежат FinGuru. Их использование без разрешения запрещено.',
            'terms-section4-title': '4. Контакты',
            'terms-section4-content': 'По вопросам условий использования свяжитесь с нами по адресу: support@finguru.ru.',
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
            'terms-title': 'Terms of Use',
            'terms-intro': 'Welcome to FinGuru! By using our service, you agree to the terms outlined below. Please read them carefully.',
            'terms-section1-title': '1. General Provisions',
            'terms-section1-content': 'By using this site, you agree to these terms. If you do not agree, please discontinue using the site.',
            'terms-section2-title': '2. Liability',
            'terms-section2-content': 'We are not liable for any losses caused by the use of the site, including data loss or financial damages.',
            'terms-section3-title': '3. Intellectual Property',
            'terms-section3-content': 'All materials on the site, including text, images, and code, are protected by copyright and belong to FinGuru. Use without permission is prohibited.',
            'terms-section4-title': '4. Contact Information',
            'terms-section4-content': 'For questions regarding the terms of use, please contact us at: support@finguru.ru.',
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
            'terms-title': 'Колдонуу шарттары',
            'terms-intro': 'FinGuru сайтына кош келиңиз! Биздин кызматты колдонуу менен, сиз төмөндө келтирилген шарттарга макул болосуз. Сураныч, аларды кылдат окуп чыгыңыз.',
            'terms-section1-title': '1. Жалпы жоболор',
            'terms-section1-content': 'Бул сайтты колдонуу менен сиз ушул шарттарга макул болосуз. Эгер макул болбосоңуз, сайтты колдонууну токтотуңуз.',
            'terms-section2-title': '2. Жоопкерчилик',
            'terms-section2-content': 'Биз сайтты колдонуудан келип чыккан жоготуулар үчүн, анын ичинде маалыматтарды жоготуу же финансылык зыяндар үчүн жоопкерчилик тартпайбыз.',
            'terms-section3-title': '3. Интеллектуалдык менчик',
            'terms-section3-content': 'Сайттагы бардык материалдар, анын ичинде текст, сүрөттөр жана код, автордук укук менен корголгон жана FinGuruга таандык. Уруксатсыз колдонууга тыюу салынат.',
            'terms-section4-title': '4. Байланыш маалыматы',
            'terms-section4-content': 'Колдонуу шарттары боюнча суроолор үчүн биз менен байланышыңыз: support@finguru.ru.',
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
        document.title = translations[currentLang]['terms-title'] || 'FinGuru – Terms of Use';

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
    }

    // --- Intersection Observer for Animations ---
    const animateObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
                animateObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.2,
        rootMargin: '0px 0px -50px 0px'
    });

    document.querySelectorAll('[data-animate]').forEach(el => {
        animateObserver.observe(el);
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

        // Закрытие меню при клике на ссылку
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });

        // Закрытие меню при клике вне его
        document.addEventListener('click', (e) => {
            if (!navMenu.contains(e.target) && !hamburger.contains(e.target)) {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            }
        });
    }

    // --- Initial Language Update on Load ---
    updateLanguage();
});