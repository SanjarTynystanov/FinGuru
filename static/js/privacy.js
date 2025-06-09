document.addEventListener('DOMContentLoaded', () => {
    // --- Translations Object ---
    const translations = {
        ru: {
            'privacy-title': 'Политика конфиденциальности',
            'privacy-intro': 'Мы ценим вашу конфиденциальность и стремимся защитить ваши персональные данные. В этой политике описано, как мы собираем, используем и защищаем вашу информацию.',
            'privacy-section1-title': 'Сбор данных',
            'privacy-section1-content': 'Мы собираем информацию, которую вы предоставляете при регистрации, использовании наших услуг или взаимодействии с нами, включая персональные данные, такие как имя, email и финансовые данные.',
            'privacy-section2-title': 'Использование данных',
            'privacy-section2-content': 'Ваши данные используются для предоставления услуг, аналитики, персонализации рекомендаций и улучшения нашего сервиса. Мы не передаём ваши данные третьим лицам без вашего согласия, за исключением случаев, предусмотренных законом.',
            'privacy-section3-title': 'Защита данных',
            'privacy-section3-content': 'Мы используем банковский уровень шифрования и современные технологии безопасности для защиты ваших данных от несанкционированного доступа.',
            'privacy-section4-title': 'Ваши права',
            'privacy-section4-content': 'Вы имеете право запросить доступ к своим данным, их исправление или удаление. Свяжитесь с нами по адресу support@finguru.ru для реализации этих прав.',
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
            'privacy-title': 'Privacy Policy',
            'privacy-intro': 'We value your privacy and are committed to protecting your personal data. This policy describes how we collect, use, and safeguard your information.',
            'privacy-section1-title': 'Data Collection',
            'privacy-section1-content': 'We collect information you provide during registration, use of our services, or interaction with us, including personal data such as your name, email, and financial information.',
            'privacy-section2-title': 'Data Usage',
            'privacy-section2-content': 'Your data is used to provide services, analytics, personalized recommendations, and to improve our platform. We do not share your data with third parties without your consent, except as required by law.',
            'privacy-section3-title': 'Data Protection',
            'privacy-section3-content': 'We use bank-level encryption and modern security technologies to protect your data from unauthorized access.',
            'privacy-section4-title': 'Your Rights',
            'privacy-section4-content': 'You have the right to request access to your data, correct it, or delete it. Contact us at support@finguru.ru to exercise these rights.',
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
            'privacy-title': 'Купуялык саясаты',
            'privacy-intro': 'Биз сиздин купуялыгыңызды баалайбыз жана жеке маалыматыңызды коргоого умтулабыз. Бул саясатта биз маалыматыңызды кантип чогултабыз, колдонобуз жана коргойбуз.',
            'privacy-section1-title': 'Маалымат чогултуу',
            'privacy-section1-content': 'Биз сиз катталууда, биздин кызматтарды колдонууда же биз менен байланышканда берген маалыматыңызды чогултабыз, анын ичинде атыңыз, email жана финансылык маалыматтар сыяктуу жеке маалыматтар.',
            'privacy-section2-title': 'Маалыматты колдонуу',
            'privacy-section2-content': 'Сиздин маалыматыңыз кызматтарды көрсөтүү, аналитика, жеке сунуштарды берүү жана платформаны жакшыртуу үчүн колдонулат. Биз сиздин уруксатыңызсыз маалыматыңызды үчүнчү тараптарга бербейбиз, мыйзамда каралган учурлардан тышкары.',
            'privacy-section3-title': 'Маалыматты коргоо',
            'privacy-section3-content': 'Биз сиздин маалыматыңызды уруксатсыз кирүүдөн коргоо үчүн банк деңгээлиндеги шифрлөө жана заманбап коопсуздук технологияларын колдонобуз.',
            'privacy-section4-title': 'Сиздин укуктарыңыз',
            'privacy-section4-content': 'Сиз маалыматыңызга жетүүнү, аны оңдоону же жок кылууну суранууга укугуңуз бар. Бул укуктарды ишке ашыруу үчүн support@finguru.ru дарегине кайрылыңыз.',
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
        document.title = translations[currentLang]['privacy-title'] || 'FinGuru – Privacy Policy';

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