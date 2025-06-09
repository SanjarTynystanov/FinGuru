document.addEventListener('DOMContentLoaded', () => {
    const translations = {
        "en": {
            "envelope-title": "FinGuru – Your Financial Assistant",
            "nav-home": "Home",
            "nav-features": "Features",
            "nav-currency": "Converter",
            "feature-budget-menu": "Budget",
            "feature-dashboard-menu": "Dashboard",
            "feature-goals-menu": "Goals",
            "feature-forecast-menu": "Forecast",
            "feature-reminders-menu": "Reminders",
            "feature-tips-menu": "Tips",
            "nav-banks": "Banks",
            "banks-connected": "Connected Banks",
            "banks-add": "Add Bank",
            "banks-settings": "Account Settings",
            "banks-faq": "Banks FAQ",
            "nav-analytics": "Analytics",
            "nav-faq": "FAQ",
            "login": "Login",
            "register": "Register",
            "logout": "Logout",
            "home-hero-title": "FinGuru – Your Financial Assistant",
            "home-hero-subtitle": "Manage your finances effortlessly",
            "get-started": "Get Started",
            "demo-tour": "Demo Tour",
            "features-title": "Our Features",
            "feature-analytics": "Analytics",
            "feature-analytics-desc": "Get in-depth real-time insights",
            "feature-budget": "Budget",
            "feature-budget-desc": "Plan and control your expenses",
            "feature-security": "Security",
            "feature-security-desc": "Your data is 100% secure",
            "how-it-works-title": "How It Works",
            "step-1-title": "Register",
            "step-1-desc": "Create an account in minutes",
            "step-1-tooltip": "Quick and easy",
            "step-2-title": "Connect",
            "step-2-desc": "Link your bank accounts",
            "step-3-title": "Manage",
            "step-3-desc": "Start managing your finances",
            "testimonials-title": "What Our Users Say",
            "testimonial-1-text": "\"FinGuru completely changed my approach to finances. Now I see all my expenses and income!\"",
            "testimonial-1-author": "- Anna S., Entrepreneur",
            "testimonial-2-text": "\"Very convenient app, I especially like the automatic analytics and recommendations.\"",
            "testimonial-2-author": "- Maxim V., Freelancer",
            "testimonial-3-text": "\"Finally, I started saving money for a dream. Thanks, FinGuru!\"",
            "testimonial-3-author": "- Elena K., Designer",
            "cta-title": "Start Today",
            "cta-button": "Start Now",
            "footer-about-title": "About FinGuru",
            "footer-about-text": "FinGuru is your personal finance assistant, designed to help you manage your money, track expenses, and achieve your financial goals with ease.",
            "quick-links": "Quick Links",
            "how-it-works": "How It Works",
            "testimonials": "Testimonials",
            "cta": "Start",
            "contacts": "Contacts",
            "phone": "+1 (123) 456-78-90",
            "social-telegram": "Telegram",
            "social-vk": "VK",
            "subscribe": "Subscribe",
            "subscribe-text": "Get the latest news and updates",
            "subscribe-btn": "Subscribe",
            "email-placeholder": "Your email address",
            "subscribe-info": "We care about your data in our Privacy Policy",
            "footer-copyright": "© 2025 FinGuru. All rights reserved.",
            "privacy-policy": "Privacy Policy",
            "terms-of": "Features"
        },
        "ru": {
            "envelope-title": "FinGuru – Ваш финансовый помощник",
            "nav-home": "Главная",
            "nav-features": "Возможности",
            "nav-currency": "Конвертер",
            "feature-budget-menu": "Бюджет",
            "feature-dashboard-menu": "Панель управления",
            "feature-goals-menu": "Цели",
            "feature-forecast-menu": "Прогноз",
            "feature-reminders-menu": "Напоминания",
            "feature-tips-menu": "Советы",
            "nav-banks": "Банки",
            "banks-connected": "Подключённые",
            "banks-add": "Добавить",
            "banks-settings": "Настройки",
            "banks-faq": "FAQ",
            "nav-analytics": "Аналитика",
            "nav-faq": "FAQ",
            "login": "Войти",
            "register": "Регистрация",
            "logout": "Выйти",
            "home-hero-title": "FinGuru – Ваш финансовый помощник",
            "home-hero-subtitle": "Управляйте финансами легко и уверенно",
            "get-started": "Начать",
            "demo-tour": "Демо-тур",
            "features-title": "Наши возможности",
            "feature-analytics": "Аналитика",
            "feature-analytics-desc": "Получайте глубокую аналитику в реальном времени",
            "feature-budget": "Бюджет",
            "feature-budget-desc": "Планируйте и контролируйте свои расходы",
            "feature-security": "Безопасность",
            "feature-security-desc": "Ваши данные защищены на 100%",
            "how-it-works-title": "Как это работает",
            "step-1-title": "Регистрация",
            "step-1-desc": "Создайте аккаунт за пару минут",
            "step-1-tooltip": "Быстро и просто",
            "step-2-title": "Подключение",
            "step-2-desc": "Подключите свои банковские счета",
            "step-3-title": "Управление",
            "step-3-desc": "Начните управлять финансами",
            "testimonials-title": "Что говорят наши пользователи",
            "testimonial-1-text": "\"FinGuru полностью изменил мой подход к финансам. Теперь я вижу все свои расходы и доходы!\"",
            "testimonial-1-author": "- Анна С., Предприниматель",
            "testimonial-2-text": "\"Очень удобное приложение, особенно нравится автоматическая аналитика и рекомендации.\"",
            "testimonial-2-author": "- Максим В., Фрилансер",
            "testimonial-3-text": "\"Наконец-то я начал откладывать деньги на мечту. Спасибо, FinGuru!\"",
            "testimonial-3-author": "- Елена К., Дизайнер",
            "cta-title": "Начните сегодня",
            "cta-button": "Начать сейчас",
            "footer-about-title": "О FinGuru",
            "footer-about-text": "FinGuru - это ваш персональный финансовый помощник, разработанный, чтобы помочь вам легко управлять своими деньгами, отслеживать расходы и достигать финансовых целей.",
            "quick-links": "Быстрые ссылки",
            "how-it-works": "Как это работает",
            "testimonials": "Отзывы",
            "cta": "Начать",
            "contacts": "Контакты",
            "phone": "+7 (123) 456-78-90",
            "social-telegram": "Telegram",
            "social-vk": "VK",
            "subscribe": "Подписка",
            "subscribe-text": "Получайте последние новости и обновления",
            "subscribe-btn": "Подписаться",
            "email-placeholder": "Ваш email",
            "subscribe-info": "Мы заботимся о ваших данных в нашей Политике конфиденциальности",
            "footer-copyright": "© 2025 FinGuru. Все права защищены.",
            "privacy-policy": "Политика конфиденциальности",
            "terms-of": "Условия использования"
        },
        "ky": {
            "envelope-title": "FinGuru – Сиздин финансылык жардамчыңыз",
            "nav-home": "Башкы бет",
            "nav-features": "Мүмкүнчүлүктөр",
            "nav-currency": "Конвертер",
            "feature-budget-menu": "Бюджет",
            "feature-dashboard-menu": "Башкаруу панели",
            "feature-goals-menu": "Максаттар",
            "feature-forecast-menu": "Болжолдоо",
            "feature-reminders-menu": "Эскертмелер",
            "feature-tips-menu": "Кеңештер",
            "nav-banks": "Банктар",
            "banks-connected": "Туташкан банктар",
            "banks-add": "Банк кошуу",
            "banks-settings": "Жөндөөлөр",
            "banks-faq": "FAQ",
            "nav-analytics": "Аналитика",
            "nav-faq": "Суроолор",
            "login": "Кирүү",
            "register": "Катталуу",
            "logout": "Чыгуу",
            "home-hero-title": "FinGuru – Сиздин финансылык жардамчыңыз",
            "home-hero-subtitle": "Финансыңызды оңой жана ишенимдүү башкарыңыз",
            "get-started": "Баштоо",
            "demo-tour": "Демо-тур",
            "features-title": "Биздин мүмкүнчүлүктөр",
            "feature-analytics": "Аналитика",
            "feature-analytics-desc": "Реалдуу убакытта терең аналитика алыңыз",
            "feature-budget": "Бюджет",
            "feature-budget-desc": "Чыгымдарыңызды пландаштырыңыз жана көзөмөлдөңүз",
            "feature-security": "Коопсуздук",
            "feature-security-desc": "Сиздин маалыматыңыз 100% корголгон",
            "how-it-works-title": "Бул кантип иштейт",
            "step-1-title": "Катталуу",
            "step-1-desc": "Эки мүнөттө аккаунт түзүңүз",
            "step-1-tooltip": "Тез жана жөнөкөй",
            "step-2-title": "Туташуу",
            "step-2-desc": "Банк эсептериңизди туташтырыңыз",
            "step-3-title": "Башкаруу",
            "step-3-desc": "Финансыңызды башкарууну баштаңыз",
            "testimonials-title": "Колдонуучуларыбыз эмне дейт",
            "testimonial-1-text": "\"FinGuru менин финансыга болгон мамилемди толугу менен өзгөрттү. Эми мен бардык чыгымдарымды жана кирешелеримди көрө алам!\"",
            "testimonial-1-author": "- Анна С., Ишкер",
            "testimonial-2-text": "\"Абдан ыңгайлуу тиркеме, айрыкча автоматтык аналитика жана сунуштар жагат.\"",
            "testimonial-2-author": "- Максим В., Фрилансер",
            "testimonial-3-text": "\"Акыры мен кыялым үчүн акча топтой баштадым. Рахмат, FinGuru!\"",
            "testimonial-3-author": "- Елена К., Дизайнер",
            "cta-title": "Бүгүн баштаңыз",
            "cta-button": "Азыр баштоо",
            "footer-about-title": "FinGuru жөнүндө",
            "footer-about-text": "FinGuru - бул сиздин жеке финансылык жардамчыңыз, ал сизге акчаңызды оңой башкарууга, чыгымдарды көзөмөлдөөгө жана финансылык максаттарыңызга жетүүгө жардам берет.",
            "quick-links": "Тез шилтемелер",
            "how-it-works": "Кантип иштейт",
            "testimonials": "Сын-пикирлер",
            "cta": "Баштоо",
            "contacts": "Байланыштар",
            "phone": "+7 (123) 456-78-90",
            "social-telegram": "Telegram",
            "social-vk": "VK",
            "subscribe": "Жазылуу",
            "subscribe-text": "Акыркы жаңылыктарды жана жаңыртууларды алыңыз",
            "subscribe-btn": "Жазылуу",
            "email-placeholder": "Сиздин email",
            "subscribe-info": "Биз сиздин маалыматыңызга купуялык саясатыбызда кам көрөбүз",
            "footer-copyright": "© 2025 FinGuru. Бардык укуктар корголгон.",
            "privacy-policy": "Купуялык саясаты",
            "terms-of": "Колдонуу шарттары"
        }
    };

    // --- Language Management ---
    let currentLang = localStorage.getItem('language') || 'ru';
    const langButtons = document.querySelectorAll('.lang-btn');

    const updateLanguage = () => {
        document.title = translations[currentLang]['envelope-title'] || 'FinGuru';

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

    // --- User Authentication Management ---
    const headerActions = document.querySelector('.header-actions');

    const renderAuthButtons = () => {
        const currentUser = JSON.parse(localStorage.getItem('currentUser') || 'null');

        let authElements = document.querySelectorAll('.btn-login, .btn-outline, .btn-logout, .user-profile');
        authElements.forEach(el => el.remove());

        console.log('Rendering auth buttons with currentUser:', currentUser); // Отладка

        if (currentUser && typeof currentUser === 'object' && currentUser.name) {
            const userProfileDiv = document.createElement('div');
            userProfileDiv.className = 'user-profile';

            const userAvatar = document.createElement('div');
            userAvatar.className = 'user-avatar';
            userAvatar.textContent = (currentUser.name ? currentUser.name.charAt(0).toUpperCase() : (currentUser.email ? currentUser.email.charAt(0).toUpperCase() : ''));

            const userNameSpan = document.createElement('span');
            userNameSpan.className = 'user-name';
            userNameSpan.textContent = currentUser.name || 'User';

            const logoutBtn = document.createElement('a');
            logoutBtn.href = '#';
            logoutBtn.className = 'btn-logout';
            logoutBtn.setAttribute('data-lang-key', 'logout');
            logoutBtn.textContent = translations[currentLang]['logout'];
            logoutBtn.addEventListener('click', (e) => {
                e.preventDefault();
                logoutUser();
            });

            userProfileDiv.appendChild(userAvatar);
            userProfileDiv.appendChild(userNameSpan);
            userProfileDiv.appendChild(logoutBtn);
            headerActions.appendChild(userProfileDiv);
        } else {
            const newLoginBtn = document.createElement('a');
            newLoginBtn.href = '/login';
            newLoginBtn.className = 'btn-login active';
            newLoginBtn.setAttribute('data-lang-key', 'login');
            newLoginBtn.textContent = translations[currentLang]['login'];
            headerActions.appendChild(newLoginBtn);

            const newRegisterBtn = document.createElement('a');
            newRegisterBtn.href = '/register';
            newRegisterBtn.className = 'btn-login';
            newRegisterBtn.setAttribute('data-lang-key', 'register');
            newRegisterBtn.textContent = translations[currentLang]['register'];
            headerActions.appendChild(newRegisterBtn);
        }
    };

    // Функция для выхода
    function logoutUser() {
        localStorage.removeItem('currentUser');
        renderAuthButtons();
        updateLanguage();
        window.location.href = '/login'; // Перенаправление на страницу логина
    }

    renderAuthButtons();

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

    // --- Parallax Effect for Hero Image ---
    const heroImage = document.querySelector('.hero-dashboard-img');
    if (heroImage) {
        let parallaxTimeout;
        document.addEventListener('mousemove', (e) => {
            clearTimeout(parallaxTimeout);
            parallaxTimeout = setTimeout(() => {
                const x = (e.clientX / window.innerWidth - 0.5) * 10;
                const y = (e.clientY / window.innerHeight - 0.5) * 10;
                heroImage.style.transform = `translate(${x}px, ${y}px)`;
            }, 10);
        });

        const heroSection = document.querySelector('.hero');
        if (heroSection) {
            heroSection.addEventListener('mouseleave', () => {
                heroImage.style.transform = `translate(0, 0)`;
            });
        }
    }

    // --- Dropdown Functionality ---
    const dropdownToggles = document.querySelectorAll('.dropdown-toggle');

    dropdownToggles.forEach(toggle => {
        toggle.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();

            const dropdown = toggle.closest('.dropdown');
            if (!dropdown) return;

            const menu = dropdown.querySelector('.dropdown-menu');
            if (!menu) return;

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
        const isDropdownClick = event.target.closest('.dropdown');
        if (!isDropdownClick) {
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

    // --- Step Navigation ---
    let currentStep = 1;
    const steps = document.querySelectorAll('.step');
    const prevBtn = document.querySelector('.step-prev');
    const nextBtn = document.querySelector('.step-next');

    const updateSteps = () => {
        steps.forEach((step, index) => {
            step.style.display = index + 1 === currentStep ? 'flex' : 'none';
        });
        prevBtn.disabled = currentStep === 1;
        nextBtn.disabled = currentStep === steps.length;
    };

    if (prevBtn && nextBtn) {
        prevBtn.addEventListener('click', () => {
            if (currentStep > 1) currentStep--;
            updateSteps();
        });

        nextBtn.addEventListener('click', () => {
            if (currentStep < steps.length) currentStep++;
            updateSteps();
        });

        updateSteps();
    }

    // --- Initial Language Update on Load ---
    updateLanguage();

    // --- Sync currentUser ---
    if (window.currentUser) {
        localStorage.setItem('currentUser', JSON.stringify(window.currentUser));
    } else if (!localStorage.getItem('currentUser')) {
        localStorage.removeItem('currentUser');
    }
});