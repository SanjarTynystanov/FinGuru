document.addEventListener('DOMContentLoaded', () => {
    const translations = {
        ru: {
            'login-title': 'FinGuru – Вход', 'nav-home': 'Главная', 'nav-features': 'Возможности',
            'nav-banks': 'Банки', 'nav-analytics': 'Аналитика', 'nav-faq': 'FAQ', 'login': 'Войти',
            'register': 'Регистрация', 'login-heading': 'Войти в аккаунт',
            'email-label': 'Email', 'email-placeholder': 'Введите ваш email',
            'password-label': 'Пароль', 'password-placeholder': 'Введите пароль',
            'login-btn': 'Войти', 'no-account': 'Нет аккаунта?', 'register-link': 'Зарегистрироваться',
            'contacts': 'Контакты', 'phone': 'Телефон: +7 (123) 456-78-90', 'social-telegram': 'Telegram',
            'social-vk': 'VK', 'subscribe': 'Подписка', 'subscribe-text': 'Получайте финансовые советы на почту',
            'subscribe-btn': 'Подписаться', 'footer-copyright': '© 2023 FinGuru. Все права защищены.',
            'privacy-policy': 'Политика конфиденциальности', 'terms-of-use': 'Условия использования',
            'error-email': 'Введите корректный email', 'error-password': 'Пароль должен быть минимум 6 символов',
            'login-success': 'Вход выполнен!', 'login-error': 'Неверный email или пароль'
        },
        en: {
            'login-title': 'FinGuru – Login', 'nav-home': 'Home', 'nav-features': 'Features',
            'nav-banks': 'Banks', 'nav-analytics': 'Analytics', 'nav-faq': 'FAQ', 'login': 'Login',
            'register': 'Register', 'login-heading': 'Log in to your account',
            'email-label': 'Email', 'email-placeholder': 'Enter your email',
            'password-label': 'Password', 'password-placeholder': 'Enter your password',
            'login-btn': 'Log in', 'no-account': "Don't have an account?",
            'register-link': 'Register', 'contacts': 'Contacts', 'phone': 'Phone: +7 (123) 456-78-90',
            'social-telegram': 'Telegram', 'social-vk': 'VK', 'subscribe': 'Subscribe',
            'subscribe-text': 'Receive financial tips via email', 'subscribe-btn': 'Subscribe',
            'footer-copyright': '© 2023 FinGuru. All rights reserved.',
            'privacy-policy': 'Privacy Policy', 'terms-of-use': 'Terms of Use',
            'error-email': 'Enter a valid email', 'error-password': 'Password must be at least 6 characters',
            'login-success': 'Login successful!', 'login-error': 'Invalid email or password'
        },
        ky: {
            'login-title': 'FinGuru – Кирүү', 'nav-home': 'Башкы бет', 'nav-features': 'Мүмкүнчүлүктөр',
            'nav-banks': 'Банктар', 'nav-analytics': 'Аналитика', 'nav-faq': 'Суроолор', 'login': 'Кирүү',
            'register': 'Каттоо', 'login-heading': 'Аккаунтка кирүү',
            'email-label': 'Email', 'email-placeholder': 'Email киргизиңиз',
            'password-label': 'Сырсөз', 'password-placeholder': 'Сырсөздү киргизиңиз',
            'login-btn': 'Кирүү', 'no-account': 'Аккаунтуңуз жокпу?', 'register-link': 'Катталуу',
            'contacts': 'Байланыштар', 'phone': 'Телефон: +7 (123) 456-78-90', 'social-telegram': 'Telegram',
            'social-vk': 'VK', 'subscribe': 'Жазылуу', 'subscribe-text': 'Электрондук почта аркылуу финансылык кеңештерди алыңыз',
            'subscribe-btn': 'Жазылуу', 'footer-copyright': '© 2023 FinGuru. Бардык укуктар корголгон.',
            'privacy-policy': 'Купуялык саясаты', 'terms-of-use': 'Колдонуу шарттары',
            'error-email': 'Туура email киргизиңиз', 'error-password': 'Сырсөз минимум 6 белгиден турушу керек',
            'login-success': 'Кирүү ийгиликтүү!', 'login-error': 'Электрондук почта же сырсөз туура эмес'
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
        document.querySelector('title').textContent = translations[currentLang]['login-title'];
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

    body.classList.add(localStorage.getItem('theme') || 'light-theme');
    themeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-theme');
        const theme = body.classList.contains('dark-theme') ? 'dark-theme' : 'light-theme';
        localStorage.setItem('theme', theme);
    });

    const form = document.getElementById('loginForm');
    if (form) {
        const emailInput = document.getElementById('email');
        const passwordInput = document.getElementById('password');
        const emailError = document.getElementById('email-error');
        const passwordError = document.getElementById('password-error');

        const validateForm = () => {
            let isValid = true;
            emailError.textContent = '';
            passwordError.textContent = '';

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

          const response = await fetch('/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({ email: emailInput.value, password: passwordInput.value })
});
const result = await response.json();
if (response.ok) {
    localStorage.setItem('currentUser', JSON.stringify({ name: result.user.name })); // Предполагая, что сервер возвращает имя
    window.location.href = result.redirect || '/goals';
}
        });
    } else {
        console.error('Форма с id="loginForm" не найдена');
    }

    updateLanguage();
});
