document.addEventListener('DOMContentLoaded', () => {
    // --- Поддержка тем ---
    const themeToggle = document.getElementById('themeToggle');
    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-theme');
        localStorage.setItem('theme', document.body.classList.contains('dark-theme') ? 'dark' : 'light');
    });
    if (localStorage.getItem('theme') === 'dark') document.body.classList.add('dark-theme');

    // --- Мультиязычность ---
    const translations = {
        "en": {
            "envelope-title": "FinGuru – Currency Converter",
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
            "conversion-title": "1 thousand US dollars to Kyrgyz soms",
            "conversion-subtitle": "Convert USD to KGS at the real exchange rate",
            "amount": "Amount",
            "rate-info": "Average market rate at",
            "track-rate": "Track the exchange rate",
            "contacts": "Contacts",
            "phone": "Phone: +1 (123) 456-78-90",
            "social-telegram": "Telegram",
            "social-vk": "VK",
            "subscribe": "Subscribe",
            "subscribe-text": "Get financial tips by email",
            "email-placeholder": "Your email",
            "subscribe-btn": "Subscribe",
            "footer-about-title": "About FinGuru",
            "footer-about-text": "FinGuru is your personal finance assistant, designed to help you manage your money, track expenses, and achieve your financial goals with ease.",
            "quick-links": "Quick Links",
            "how-it-works": "How It Works",
            "testimonials": "Testimonials",
            "cta": "Start",
            "footer-privacy": "Privacy Policy",
            "footer-terms": "Terms of Service",
            "footer-copyright": "© 2025 FinGuru. All rights reserved.",
            "privacy-policy": "Privacy Policy",
            "terms-of-use": "Terms of Use"
        },
        "ru": {
            "envelope-title": "FinGuru – Конвертер валют",
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
            "conversion-title": "1 тысяча долларов США в киргизские сомы",
            "conversion-subtitle": "Сконвертируйте USD в KGS по реальному обменному курсу",
            "amount": "Сумма",
            "rate-info": "Среднерыночный курс в",
            "track-rate": "Отслеживайте обменный курс",
            "contacts": "Контакты",
            "phone": "Телефон: +7 (123) 456-78-90",
            "social-telegram": "Telegram",
            "social-vk": "VK",
            "subscribe": "Подписка",
            "subscribe-text": "Получайте финансовые советы на почту",
            "email-placeholder": "Ваш email",
            "subscribe-btn": "Подписаться",
            "footer-about-title": "О FinGuru",
            "footer-about-text": "FinGuru - это ваш персональный финансовый помощник, разработанный, чтобы помочь вам легко управлять своими деньгами, отслеживать расходы и достигать финансовых целей.",
            "quick-links": "Быстрые ссылки",
            "how-it-works": "Как это работает",
            "testimonials": "Отзывы",
            "cta": "Начать",
            "footer-privacy": "Политика конфиденциальности",
            "footer-terms": "Условия использования",
            "footer-copyright": "© 2025 FinGuru. Все права защищены.",
            "privacy-policy": "Политика конфиденциальности",
            "terms-of-use": "Условия использования"
        },
        ky: {
    'budget-title': 'FinGuru – Акылдуу бюджет',
    'budget-subtitle': 'Каржыңызды көзөмөлдөңүз жана максаттарыңызга оңой жетиңиз',
    'budget-info': 'Бул жерде сиз бюджетиңизди башкара аласыз: кирешеңизди киргизиңиз, чыгымдарды кол менен эсептеңиз же банктан жүктөңиз, каржы максаттарын коюңуз.',
    'budget-input-title': 'Сиздин каржыңыз',
    'income-label': 'Киреше (руб):',
    'manual-expenses-title': 'Чыгымдарды кол менен эсептөө',
    'expense-rent': 'Ижара:',
    'expense-food': 'Тамак-аш:',
    'expense-utilities': 'Коммуналдык кызматтар:',
    'expense-other': 'Башка:',
    'calculate-manual': 'Кол менен эсептөө',
    'bank-expenses-title': 'Банктан эсептөө',
    'fetch-expenses': 'Банктан жүктөө',
    'calculate-total': 'Жалпы балансты эсептөө',
    'balance-result': 'Калдык: {amount} руб.',
    'reset-data': 'Маалыматты тазалоо',
    'goal-title': 'Каржы максаттары',
    'goal-amount': 'Сумма (руб):',
    'goal-name': 'Максаттын аты:',
    'goal-period': 'Мөөнөт (айлар):',
    'goal-priority': 'Приоритет:',
    'set-goal': 'Максат коюу',
    'progress-text': 'Прогресс: {progress}%',
    'forecast-result': 'Максатка жетүү үчүн айына {amount} руб. топтоо керек.',
    'goal-tips-title': 'Максаттарга жетүү боюнча кеңештер',
    'goal-tip-1': 'Кирешеңиздин 10-20% ай сайын топтоңуз.',
    'goal-tip-2': 'Керексиз чыгымдарды кыскартыңыз.',
    'goal-tip-3': 'Сактык эсебине автоматтык которууларды колдонуңуз.',
    'chart-title': 'Бюджеттин обзору',
    'nav-home': 'Башкы бет',
    'nav-features': 'Мүмкүнчүлүктөр', // Исправлено: "Мъмкүндүклөр" заменено на корректное значение
    'nav-currency': 'Конвертер',
    'feature-budget-menu': 'Бюджет',
    'feature-dashboard-menu': 'Башкаруу панели',
    'feature-goals-menu': 'Максаттар',
    'feature-forecast-menu': 'Болжолдоо',
    'feature-reminders-menu': 'Эскертмелер',
    'feature-tips-menu': 'Кеңештер',
    'nav-banks': 'Банктар',
    'banks-connected': 'Туташкан',
    'banks-add': 'Кошуу',
    'banks-settings': 'Жөндөөлөр',
    'banks-faq': 'FAQ',
    'nav-analytics': 'Аналитика',
    'nav-faq': 'Сурактар',
    'login': 'Кирүү',
    'logout': 'Чыгуу',
    'register': 'Катталуу',
    'footer-about-title': 'FinGuru жөнүндө',
    'footer-about-text': 'FinGuru - бул сиздин жеке каржы жардамчыңыз, акчаңызды оңой башкаруу, чыгымдарды көзөмөлдөө жана каржы максаттарыңызга жетүү үчүн иштелип чыккан.',
    'quick-links': 'Тез шилтемелер',
    'how-it-works': 'Бул кантип иштейт',
    'testimonials': 'Пикирлер',
    'cta': 'Баштоо',
    'contacts': 'Байланыш',
    'phone': 'Телефон: +7 (123) 456-78-90',
    'social-telegram': 'Telegram',
    'social-vk': 'VK',
    'subscribe': 'Жазылуу',
    'subscribe-text': 'Акыркы жаңылыктарды жана жаңыртууларды алыңыз',
    'subscribe-btn': 'Жазылуу',
    'privacy-policy': 'Жеке маалымат саясаты',
    'terms-of-use': 'Колдонуу шарттары',
    'footer-copyright': '© 2025 FinGuru. Бардык укуктар корголгон.'
}
    };

    const langBtns = document.querySelectorAll('.lang-btn');
    langBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.getAttribute('data-lang');
            localStorage.setItem('lang', lang);
            setLanguage(lang);
            convert(); // Обновляем конвертацию после смены языка
            updateTitle();
        });
    });

    function setLanguage(lang) {
        document.querySelectorAll('[data-lang-key]').forEach(el => {
            const key = el.getAttribute('data-lang-key');
            if (translations[lang] && translations[lang][key]) {
                if (el.tagName === 'INPUT' && el.getAttribute('placeholder')) {
                    el.setAttribute('placeholder', translations[lang][key]);
                } else {
                    el.textContent = translations[lang][key];
                }
            }
        });
        document.title = translations[lang]['envelope-title'] || 'FinGuru – Currency Converter';
        document.documentElement.lang = lang;
    }

    if (localStorage.getItem('lang')) setLanguage(localStorage.getItem('lang'));

    // --- Конвертер валют ---
    const currencies = {
        USD: { name: "Доллар США", flag: "🇺🇸", symbol: "$", nameRu: "долларов США", nameEn: "US dollars", nameKy: "АКШ доллары" },
        KGS: { name: "Киргизский сом", flag: "🇰🇬", symbol: "Лв", nameRu: "киргизских сомов", nameEn: "Kyrgyz soms", nameKy: "кыргыз сом" },
        EUR: { name: "Евро", flag: "🇪🇺", symbol: "€", nameRu: "евро", nameEn: "euros", nameKy: "евро" },
        RUB: { name: "Российский рубль", flag: "🇷🇺", symbol: "₽", nameRu: "российских рублей", nameEn: "Russian rubles", nameKy: "орус рублу" },
        KZT: { name: "Казахстанский тенге", flag: "🇰🇿", symbol: "₸", nameRu: "казахстанских тенге", nameEn: "Kazakhstani tenges", nameKy: "казак тенгеси" },
        CNY: { name: "Китайский юань", flag: "🇨🇳", symbol: "¥", nameRu: "китайских юаней", nameEn: "Chinese yuan", nameKy: "кытай юаны" },
        TRY: { name: "Турецкая лира", flag: "🇹🇷", symbol: "₺", nameRu: "турецких лир", nameEn: "Turkish liras", nameKy: "түрк лирасы" },
        JPY: { name: "Японская иена", flag: "🇯🇵", symbol: "¥", nameRu: "японских иен", nameEn: "Japanese yen", nameKy: "жапон иенасы" }
    };

    const amountEl = document.getElementById('amount');
    const fromSelect = document.getElementById('from-currency');
    const toSelect = document.getElementById('to-currency');
    const resultEl = document.getElementById('converted');
    const rateInfo = document.getElementById('rate-info');
    const currentTimeEl = document.getElementById('current-time');
    const titleEl = document.getElementById('conversion-title');
    const subtitleEl = document.getElementById('conversion-subtitle');
    const swapBtn = document.getElementById('swap-currencies');

    // Время
    function updateCurrentTime() {
        const now = new Date();
        const hours = now.getHours().toString().padStart(2, '0');
        const minutes = now.getMinutes().toString().padStart(2, '0');
        currentTimeEl.textContent = `${hours}:${minutes}`;
    }
    updateCurrentTime();
    setInterval(updateCurrentTime, 60000);

    // Заполнение селектов
    Object.entries(currencies).forEach(([code, { name, flag }]) => {
        const option1 = new Option(`${flag} ${code}`, code);
        const option2 = new Option(`${flag} ${code}`, code);
        fromSelect.add(option1);
        toSelect.add(option2);
    });
    fromSelect.value = 'USD';
    toSelect.value = 'KGS';

    // Склонение "тысяча"
    function formatAmountText(amount, lang) {
        if (lang === 'ru') {
            if (amount === 1) return "1 тысяча";
            if (amount > 1 && amount < 5) return `${amount} тысячи`;
            return `${amount} тысяч`;
        } else if (lang === 'en') {
            if (amount === 1) return "1 thousand";
            return `${amount} thousand`;
        } else if (lang === 'ky') {
            return `${amount} миң`;
        }
        return amount;
    }

    // Обновление заголовка
    function updateTitle() {
        const from = fromSelect.value;
        const to = toSelect.value;
        const amount = parseFloat(amountEl.value) || 1000;
        const lang = localStorage.getItem('lang') || 'ru';
        let formattedAmount;
        if (amount >= 1000) {
            formattedAmount = formatAmountText(Math.floor(amount / 1000), lang);
        } else {
            formattedAmount = amount.toLocaleString(lang === 'en' ? 'en-US' : (lang === 'ky' ? 'kg-KG' : 'ru-RU'));
        }
        const fromName = currencies[from][`name${lang === 'en' ? 'En' : lang === 'ky' ? 'Ky' : 'Ru'}`];
        const toName = currencies[to][`name${lang === 'en' ? 'En' : lang === 'ky' ? 'Ky' : 'Ru'}`];
        titleEl.textContent = `${formattedAmount} ${fromName} в ${toName}`.replace('в', lang === 'en' ? 'to' : lang === 'ky' ? 'которуу' : 'в');
        if (lang === 'en') titleEl.textContent = `${formattedAmount} ${fromName} to ${toName}`;
        if (lang === 'ky') titleEl.textContent = `${formattedAmount} ${fromName} ${toName}га`;
    }

    amountEl.addEventListener('input', convert);
    fromSelect.addEventListener('change', convert);
    toSelect.addEventListener('change', convert);
    swapBtn.addEventListener('click', swapCurrencies);

    // Конвертация
    async function fetchRates() {
        const apiKey = '8b7241f5384e5c33f8cca742';
        const base = fromSelect.value;
        const url = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/${base}`;
        try {
            const res = await fetch(url);
            const data = await res.json();
            return data.conversion_rates;
        } catch (error) {
            console.error("Ошибка при получении курсов валют:", error);
            return null;
        }
    }

    async function convert() {
        const amount = parseFloat(amountEl.value);
        if (isNaN(amount) || amount < 0) {
            resultEl.innerHTML = `<span class="error">Введите корректную сумму</span> <span class="currency-code">${currencies[toSelect.value].symbol}</span>`;
            return;
        }
        const rates = await fetchRates();
        if (!rates) {
            resultEl.innerHTML = `<span class="error">Ошибка загрузки курса</span> <span class="currency-code">${currencies[toSelect.value].symbol}</span>`;
            rateInfo.textContent = '';
            return;
        }
        const from = fromSelect.value;
        const to = toSelect.value;
        const fromCurrency = currencies[from];
        const toCurrency = currencies[to];
        const rate = rates[to];
        const lang = localStorage.getItem('lang') || 'ru';
        const locale = lang === 'en' ? 'en-US' : lang === 'ky' ? 'kg-KG' : 'ru-RU';
        const formattedAmount = amount.toLocaleString(locale, { maximumFractionDigits: 2 });
        const converted = (amount * rate).toLocaleString(locale, { maximumFractionDigits: 2 });
        const formattedRate = rate.toLocaleString(locale, { maximumFractionDigits: 4 });
        rateInfo.innerHTML = `${fromCurrency.symbol}1 ${from} = ${toCurrency.symbol}${formattedRate} ${to}<br>${translations[lang]['rate-info']} <span id="current-time">${currentTimeEl.textContent}</span> 😊`;
        resultEl.innerHTML = `${converted} <span class="currency-code">${to}</span>`;
        updateTitle();
        resultEl.style.animation = 'none';
        setTimeout(() => { resultEl.style.animation = 'fadeIn 0.5s ease-out'; }, 10);
    }

    function swapCurrencies() {
        const temp = fromSelect.value;
        fromSelect.value = toSelect.value;
        toSelect.value = temp;
        convert();
    }

    // Обработчик для выпадающих меню
    document.querySelectorAll('.dropdown-toggle').forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();

            const menu = button.nextElementSibling;
            const isExpanded = button.getAttribute('aria-expanded') === 'true';

            // Закрываем другие открытые меню
            document.querySelectorAll('.dropdown-menu.show').forEach(openMenu => {
                if (openMenu !== menu) {
                    openMenu.classList.remove('show');
                    openMenu.previousElementSibling.setAttribute('aria-expanded', 'false');
                }
            });

            // Переключаем текущее меню
            menu.classList.toggle('show', !isExpanded);
            button.setAttribute('aria-expanded', !isExpanded);

            // Корректировка положения меню
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

    // Закрытие меню при клике вне его
    document.addEventListener('click', (e) => {
        const isDropdownClick = e.target.closest('.dropdown');
        if (!isDropdownClick) {
            document.querySelectorAll('.dropdown-menu.show').forEach(menu => {
                menu.classList.remove('show');
                menu.previousElementSibling.setAttribute('aria-expanded', 'false');
            });
        }
    });

    convert();
    updateTitle();
});