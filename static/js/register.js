document.addEventListener('DOMContentLoaded', () => {
    const translations = {
        ru: {
            'register-title': 'FinGuru – Регистрация',
            'nav-home': 'Главная',
            'nav-features': 'Возможности',
            'nav-banks': 'Банки',
            'nav-analytics': 'Аналитика',
            'nav-faq': 'FAQ',
            'login': 'Войти',
            'register': 'Регистрация',
            'register-heading': 'Создать аккаунт',
            'name-label': 'Имя',
            'name-placeholder': 'Введите ваше имя',
            'email-label': 'Email',
            'email-placeholder': 'Введите ваш email',
            'password-label': 'Пароль',
            'password-placeholder': 'Введите пароль',
            'register-btn': 'Зарегистрироваться',
            'already-have-account': 'Уже есть аккаунт?',
            'login-link': 'Войти',
            'contacts': 'Контакты',
            'phone': 'Телефон: +7 (123) 456-78-90',
            'social-telegram': 'Telegram',
            'social-vk': 'VK',
            'subscribe': 'Подписка',
            'subscribe-text': 'Получайте финансовые советы на почту',
            'subscribe-btn': 'Подписаться',
            'footer-copyright': '© 2023 FinGuru. Все права защищены.',
            'privacy-policy': 'Политика конфиденциальности',
            'terms-of-use': 'Условия использования',
            'error-name': 'Имя должно быть заполнено',
            'error-email': 'Введите корректный email',
            'error-password': 'Пароль должен быть минимум 6 символов',
            'register-success': 'Регистрация успешна!',
            'register-error': 'Ошибка регистрации!'
        },
        en: {
            'register-title': 'FinGuru – Registration',
            'nav-home': 'Home',
            'nav-features': 'Features',
            'nav-banks': 'Banks',
            'nav-analytics': 'Analytics',
            'nav-faq': 'FAQ',
            'login': 'Login',
            'register': 'Register',
            'register-heading': 'Create an Account',
            'name-label': 'Name',
            'name-placeholder': 'Enter your name',
            'email-label': 'Email',
            'email-placeholder': 'Enter your email',
            'password-label': 'Password',
            'password-placeholder': 'Enter your password',
            'register-btn': 'Register',
            'already-have-account': 'Already have an account?',
            'login-link': 'Login',
            'contacts': 'Contacts',
            'phone': 'Phone: +7 (123) 456-78-90',
            'social-telegram': 'Telegram',
            'social-vk': 'VK',
            'subscribe': 'Subscribe',
            'subscribe-text': 'Receive financial tips via email',
            'subscribe-btn': 'Subscribe',
            'footer-copyright': '© 2023 FinGuru. All rights reserved.',
            'privacy-policy': 'Privacy Policy',
            'terms-of-use': 'Terms of Use',
            'error-name': 'Name is required',
            'error-email': 'Enter a valid email',
            'error-password': 'Password must be at least 6 characters',
            'register-success': 'Registration successful!',
            'register-error': 'Registration error!'
        },
        ky: {
            'register-title': 'FinGuru – Каттоо',
            'nav-home': 'Башкы бет',
            'nav-features': 'Мүмкүнчүлүктөр',
            'nav-banks': 'Банктар',
            'nav-analytics': 'Аналитика',
            'nav-faq': 'Суроолор',
            'login': 'Кирүү',
            'register': 'Каттоо',
            'register-heading': 'Аккаунт түзүү',
            'name-label': 'Аты',
            'name-placeholder': 'Атыңызды киргизиңиз',
            'email-label': 'Email',
            'email-placeholder': 'Email киргизиңиз',
            'password-label': 'Сырсөз',
            'password-placeholder': 'Сырсөздү киргизиңиз',
            'register-btn': 'Катталуу',
            'already-have-account': 'Аккаунтуңуз барбы?',
            'login-link': 'Кирүү',
            'contacts': 'Байланыштар',
            'phone': 'Телефон: +7 (123) 456-78-90',
            'social-telegram': 'Telegram',
            'social-vk': 'VK',
            'subscribe': 'Жазылуу',
            'subscribe-text': 'Электрондук почта аркылуу финансылык кеңештерди алыңыз',
            'subscribe-btn': 'Жазылуу',
            'footer-copyright': '© 2023 FinGuru. Бардык укуктар корголгон.',
            'privacy-policy': 'Купуялык саясаты',
            'terms-of-use': 'Колдонуу шарттары',
            'error-name': 'Атыңызды толтуруп коюңуз',
            'error-email': 'Туура email киргизиңиз',
            'error-password': 'Сырсөз минимум 6 белгиден турушу керек',
            'register-success': 'Каттоо ийгиликтүү!',
            'register-error': 'Каттоо катасы!'
        }
    };

    let currentLang = localStorage.getItem('language') || 'ru';
    const langButtons = document.querySelectorAll('.lang-btn');
    const themeToggle = document.getElementById('themeToggle');
    const body = document.body;

    langButtons.forEach(btn => {
        if (btn.dataset.lang === currentLang) btn.classList.add('active');
    });

    const updateLanguage = () => {
        document.querySelector('title').textContent = translations[currentLang]['register-title'];
        document.querySelectorAll('[data-lang-key]').forEach(el => {
            const key = el.getAttribute('data-lang-key');
            if (translations[currentLang][key]) el.textContent = translations[currentLang][key];
            if (el.tagName === 'INPUT') el.placeholder = translations[currentLang][key];
        });
        document.documentElement.lang = currentLang;
    };

    langButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            langButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentLang = btn.dataset.lang;
            localStorage.setItem('language', currentLang);
            updateLanguage();
        });
    });

    const updateTheme = () => {
        const savedTheme = localStorage.getItem('theme') || 'light-theme';
        body.classList.toggle('dark-theme', savedTheme === 'dark-theme');
        if (themeToggle) {
            const lightIcon = themeToggle.querySelector('.light-icon');
            const darkIcon = themeToggle.querySelector('.dark-icon');
            if (body.classList.contains('dark-theme')) {
                lightIcon.style.display = 'none';
                darkIcon.style.display = 'inline';
            } else {
                lightIcon.style.display = 'inline';
                darkIcon.style.display = 'none';
            }
        }
    };

    updateTheme();

    themeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-theme');
        const theme = body.classList.contains('dark-theme') ? 'dark-theme' : 'light-theme';
        localStorage.setItem('theme', theme);
        updateTheme();
    });

    const form = document.getElementById('registerForm');
    if (form) {
        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');
        const passwordInput = document.getElementById('password');
        const nameError = document.getElementById('name-error');
        const emailError = document.getElementById('email-error');
        const passwordError = document.getElementById('password-error');

        const validateForm = () => {
            let isValid = true;
            nameError.textContent = '';
            emailError.textContent = '';
            passwordError.textContent = '';

            if (!nameInput.value.trim()) {
                nameError.textContent = translations[currentLang]['error-name'];
                isValid = false;
            }
            if (!emailInput.value.match(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/)) {
                emailError.textContent = translations[currentLang]['error-email'];
                isValid = false;
            }
            if (passwordInput.value.length < 6) {
                passwordError.textContent = translations[currentLang]['error-password'];
                isValid = false;
            }
            return isValid;
        };

        form.addEventListener('submit', async (e) => {
            e.preventDefault();
            if (!validateForm()) return;

            const response = await fetch('/register', {
                method: 'POST',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                body: new URLSearchParams({
                    name: nameInput.value,
                    email: emailInput.value,
                    password: passwordInput.value
                })
            });

            const result = await response.json();
            if (response.ok) {
                // Сохранение пользователя в localStorage
                localStorage.setItem('currentUser', JSON.stringify({ name: nameInput.value }));
                alert(translations[currentLang]['register-success']);
                window.location.href = result.redirect || '/goals';
            } else {
                alert(result.error || translations[currentLang]['register-error']);
            }
        });
    } else {
        console.error('Форма с id="registerForm" не найдена');
    }

    updateLanguage();
});
