document.addEventListener('DOMContentLoaded', () => {
    // --- Проверка авторизации ---
    function checkAuth() {
        try {
            const userFromTemplate = window.currentUser || null;
            console.log("User from template:", userFromTemplate);

            let currentUser = JSON.parse(localStorage.getItem('currentUser')) || null;
            console.log('Current user from localStorage:', currentUser);

            if (!currentUser || !currentUser.name) {
                alert('Please log in to access this page.');
                window.location.href = '/login';
                return false;
            }

            return true;
        } catch (err) {
            console.error("Ошибка получения user из window или localStorage:", err);
            return false;
        }
    }

    if (!checkAuth()) return;

    // --- Translations ---
    const translations = {
        "ru": {
            "envelope-title": "FinGuru – Ваши цели",
            "goals-title": "Ваши финансовые цели",
            "search-placeholder": "Поиск по целям",
            "clear-search": "Очистить поиск",
            "goal-name-placeholder": "Название цели",
            "goal-amount-placeholder": "Сумма цели (KGS)",
            "current-amount-placeholder": "Текущая сумма (KGS)",
            "add-goal": "Добавить цель",
            "edit-goal": "Сохранить изменения",
            "sort-name": "Сортировать по названию",
            "sort-amount": "Сортировать по сумме",
            "sort-progress": "Сортировать по прогрессу",
            "nav-home": "Главная",
            "nav-features": "Возможности",
            "feature-analytics-menu": "Аналитика",
            "feature-budget-menu": "Бюджет",
            "feature-dashboard-menu": "Панель управления",
            "feature-goals-menu": "Цели",
            "feature-forecast-menu": "Прогноз",
            "feature-reminders-menu": "Напоминания",
            "feature-tips-menu": "Советы",
            "feature-security-menu": "Безопасность",
            "features-all-menu": "Все возможности",
            "nav-banks": "Банки",
            "banks-connected": "Подключённые",
            "banks-add": "Добавить",
            "banks-settings": "Настройки",
            "banks-faq": "FAQ",
            "nav-analytics": "Аналитика",
            "nav-faq": "FAQ",
            "login": "Войти",
            "register": "Регистрация",
            "logout": "Выход",
            "footer-about-title": "О FinGuru",
            "footer-about-text": "FinGuru - это ваш персональный финансовый помощник, разработанный, чтобы помочь вам легко управлять своими деньгами, отслеживать расходы и достигать финансовых целей.",
            "quick-links": "Быстрые ссылки",
            "contacts": "Контакты",
            "phone": "Телефон: +7 (123) 456-78-90",
            "social-telegram": "Telegram",
            "social-vk": "VK",
            "subscribe": "Подписка",
            "subscribe-text": "Получайте финансовые советы на почту",
            "email-placeholder": "Ваш email",
            "subscribe-btn": "Подписаться",
            "footer-privacy": "Политика конфиденциальности",
            "footer-terms": "Условия использования",
            "footer-copyright": "© 2025 FinGuru. Все права защищены.",
            "privacy-policy": "Политика конфиденциальности",
            "terms-of-use": "Условия использования",
            "no-goals": "Цели пока не добавлены."
        },
        "en": {
            "envelope-title": "FinGuru – Your Goals",
            "goals-title": "Your Financial Goals",
            "search-placeholder": "Search goals",
            "clear-search": "Clear search",
            "goal-name-placeholder": "Goal Name",
            "goal-amount-placeholder": "Goal Amount (KGS)",
            "current-amount-placeholder": "Current Amount (KGS)",
            "add-goal": "Add Goal",
            "edit-goal": "Save Changes",
            "sort-name": "Sort by name",
            "sort-amount": "Sort by amount",
            "sort-progress": "Sort by progress",
            "nav-home": "Home",
            "nav-features": "Features",
            "feature-analytics-menu": "Analytics",
            "feature-budget-menu": "Budget",
            "feature-dashboard-menu": "Dashboard",
            "feature-goals-menu": "Goals",
            "feature-forecast-menu": "Forecast",
            "feature-reminders-menu": "Reminders",
            "feature-tips-menu": "Tips",
            "feature-security-menu": "Security",
            "features-all-menu": "All Features",
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
            "footer-about-title": "About FinGuru",
            "footer-about-text": "FinGuru is your personal finance assistant, designed to help you manage your money, track expenses, and achieve your financial goals with ease.",
            "quick-links": "Quick Links",
            "contacts": "Contacts",
            "phone": "Phone: +1 (123) 456-78-90",
            "social-telegram": "Telegram",
            "social-vk": "VK",
            "subscribe": "Subscribe",
            "subscribe-text": "Get financial tips by email",
            "email-placeholder": "Your email",
            "subscribe-btn": "Subscribe",
            "footer-privacy": "Privacy Policy",
            "footer-terms": "Terms of Service",
            "footer-copyright": "© 2025 FinGuru. All rights reserved.",
            "privacy-policy": "Privacy Policy",
            "terms-of-use": "Terms of Use",
            "no-goals": "No goals added yet."
        },
        "ky": {
            "envelope-title": "FinGuru – Сиздин максаттар",
            "goals-title": "Сиздин финансылык максаттарыңыз",
            "search-placeholder": "Максаттарды издөө",
            "clear-search": "Издөөнү тазалоо",
            "goal-name-placeholder": "Максаттын аты",
            "goal-amount-placeholder": "Максаттын суммасы (KGS)",
            "current-amount-placeholder": "Учурдагы сумма (KGS)",
            "add-goal": "Максат кошуу",
            "edit-goal": "Өзгөртүүлөрдү сактоо",
            "sort-name": "Ат боюнча сорттоо",
            "sort-amount": "Сумма боюнча сорттоо",
            "sort-progress": "Прогресс боюнча сорттоо",
            "nav-home": "Башкы бет",
            "nav-features": "Мүмкүнчүлүктөр",
            "feature-analytics-menu": "Аналитика",
            "feature-budget-menu": "Бюджет",
            "feature-dashboard-menu": "Башкаруу панели",
            "feature-goals-menu": "Максаттар",
            "feature-forecast-menu": "Болжолдоо",
            "feature-reminders-menu": "Эскертмелер",
            "feature-tips-menu": "Кеңештер",
            "feature-security-menu": "Коопсуздук",
            "features-all-menu": "Бардык мүмкүнчүлүктөр",
            "nav-banks": "Банктар",
            "banks-connected": "Туташкан банктар",
            "banks-add": "Банк кошуу",
            "banks-settings": "Жөндөөлөр",
            "banks-faq": "FAQ",
            "nav-analytics": "Аналитика",
            "nav-faq": "Суроолор",
            "login": "Кирүү",
            "register": "Каттоо",
            "logout": "Чыгуу",
            "footer-about-title": "FinGuru жөнүндө",
            "footer-about-text": "FinGuru - бул сиздин жеке финансылык жардамчыңыз, ал сизге акчаңызды оңой башкарууга, чыгымдарды көзөмөлдөөгө жана финансылык максаттарыңызга жетүүгө жардам берет.",
            "quick-links": "Тез шилтемелер",
            "contacts": "Байланыштар",
            "phone": "Телефон: +7 (123) 456-78-90",
            "social-telegram": "Telegram",
            "social-vk": "VK",
            "subscribe": "Жазылуу",
            "subscribe-text": "Каржылык кеңештерди электрондук почта аркылуу алыңыз",
            "email-placeholder": "Сиздин email",
            "subscribe-btn": "Жазылуу",
            "footer-privacy": "Купуялык саясаты",
            "footer-terms": "Колдонуу шарттары",
            "footer-copyright": "© 2025 FinGuru. Бардык укуктар корголгон.",
            "privacy-policy": "Купуялык саясаты",
            "terms-of-use": "Колдонуу шарттары",
            "no-goals": "Максаттар азырынча жок."
        }
    };

    // --- Язык ---
    let currentLang = localStorage.getItem('language') || 'ru';
    const langButtons = document.querySelectorAll('.lang-btn');

    const updateLanguageAndTheme = () => {
        document.title = translations[currentLang]['envelope-title'] || 'FinGuru – Goals';
        document.querySelectorAll('[data-lang-key]').forEach(el => {
            const key = el.dataset.langKey;
            if (translations[currentLang][key]) el.innerHTML = translations[currentLang][key];
        });
        document.querySelectorAll('[data-lang-key-placeholder]').forEach(el => {
            const key = el.dataset.langKeyPlaceholder;
            if (translations[currentLang][key]) el.placeholder = translations[currentLang][key];
        });
        document.documentElement.lang = currentLang;
        updateTheme();
        renderUserProfile();
    };

    langButtons.forEach(btn => {
        if (btn.dataset.lang === currentLang) btn.classList.add('active');
        btn.addEventListener('click', () => {
            currentLang = btn.dataset.lang;
            localStorage.setItem('language', currentLang);
            langButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            updateLanguageAndTheme();
            renderGoals(searchInput.value, sortOption);
        });
    });

    // --- Тема ---
    const updateTheme = () => {
        const themeToggle = document.getElementById("themeToggle");
        const body = document.body;
        if (themeToggle) {
            const savedTheme = localStorage.getItem('theme') || 'light';
            body.classList.toggle('dark-theme', savedTheme === 'dark');
        }
    };

    const themeToggle = document.getElementById("themeToggle");
    if (themeToggle) {
        themeToggle.addEventListener("click", () => {
            const body = document.body;
            body.classList.toggle("dark-theme");
            const currentTheme = body.classList.contains("dark-theme") ? "dark" : "light";
            localStorage.setItem("theme", currentTheme);
            updateTheme();
        });
    }

    // --- Профиль пользователя ---
    const userProfileDiv = document.getElementById('user-profile');
    const renderUserProfile = () => {
        const currentUser = JSON.parse(localStorage.getItem('currentUser')) || null;
        userProfileDiv.innerHTML = '';

        if (currentUser && currentUser.name) {
            const avatar = document.createElement('div');
            avatar.className = 'user-avatar';
            avatar.textContent = currentUser.name.charAt(0).toUpperCase();

            const nameSpan = document.createElement('span');
            nameSpan.className = 'user-name';
            nameSpan.textContent = currentUser.name;

            const logoutBtn = document.createElement('a');
            logoutBtn.href = '#';
            logoutBtn.className = 'btn-logout';
            logoutBtn.setAttribute('data-lang-key', 'logout');
            logoutBtn.textContent = translations[currentLang]['logout'];
            logoutBtn.addEventListener('click', (e) => {
                e.preventDefault();
                localStorage.removeItem('currentUser');
                window.location.href = '/logout';
            });

            userProfileDiv.appendChild(avatar);
            userProfileDiv.appendChild(nameSpan);
            userProfileDiv.appendChild(logoutBtn);
        } else {
            const loginBtn = document.createElement('a');
            loginBtn.href = '/login';
            loginBtn.className = 'btn-login';
            loginBtn.setAttribute('data-lang-key', 'login');
            loginBtn.textContent = translations[currentLang]['login'];

            const registerBtn = document.createElement('a');
            registerBtn.href = '/register';
            registerBtn.className = 'btn-login';
            registerBtn.setAttribute('data-lang-key', 'register');
            registerBtn.textContent = translations[currentLang]['register'];

            userProfileDiv.appendChild(loginBtn);
            userProfileDiv.appendChild(registerBtn);
        }
    };

    // --- Управление целями ---
    const goalForm = document.querySelector('.goal-form');
    const goalNameInput = document.getElementById('goal-name');
    const goalAmountInput = document.getElementById('goal-amount');
    const currentAmountInput = document.getElementById('current-amount');
    const addGoalBtn = document.getElementById('add-goal-btn');
    const goalsList = document.getElementById('goals-list');
    const searchInput = document.getElementById('goal-search');
    const sortSelect = document.getElementById('sort-select');
    const clearSearchBtn = document.getElementById('clear-search-btn');

    let goals = JSON.parse(localStorage.getItem('goals')) || [];
    let editingGoalId = null;
    let sortOption = 'none';

    const saveGoals = () => localStorage.setItem('goals', JSON.stringify(goals));

    const sortGoals = (option) => {
        switch (option) {
            case 'name':
                goals.sort((a, b) => a.name.localeCompare(b.name));
                break;
            case 'amount':
                goals.sort((a, b) => b.targetAmount - a.targetAmount);
                break;
            case 'progress':
                goals.sort((a, b) => (b.currentAmount / b.targetAmount) - (a.currentAmount / a.targetAmount));
                break;
            default:
                break;
        }
    };

    const renderGoals = (filter = '', sort = sortOption) => {
        goalsList.innerHTML = '';
        let filteredGoals = [...goals].filter(goal => goal.name.toLowerCase().includes(filter.toLowerCase()));
        sortGoals(sort);
        if (filteredGoals.length === 0) {
            const emptyMsg = document.createElement('p');
            emptyMsg.textContent = translations[currentLang]['no-goals'];
            goalsList.appendChild(emptyMsg);
        } else {
            filteredGoals.forEach(goal => {
                const progress = Math.min((goal.currentAmount / goal.targetAmount) * 100, 100);
                const goalItem = document.createElement('div');
                goalItem.className = 'goal-item';
                goalItem.innerHTML = `
                    <div class="goal-details">
                        <h3>${goal.name}</h3>
                        <p>${goal.currentAmount} KGS / ${goal.targetAmount} KGS</p>
                        <div class="progress-bar">
                            <div class="progress" style="width: ${progress}%;"></div>
                        </div>
                    </div>
                    <div class="goal-actions">
                        <button class="edit-btn" data-id="${goal.id}" data-lang-key="edit-goal">${translations[currentLang]['edit-goal']}</button>
                        <button class="delete-btn" data-id="${goal.id}"><i class="fas fa-trash-alt"></i></button>
                    </div>
                `;
                goalsList.appendChild(goalItem);
            });
        }
    };

    const addOrUpdateGoal = () => {
        const name = goalNameInput.value.trim();
        const targetAmount = parseFloat(goalAmountInput.value);
        const currentAmount = parseFloat(currentAmountInput.value) || 0;

        if (!name || isNaN(targetAmount) || targetAmount <= 0) {
            alert('Введите корректные данные.');
            return;
        }
        if (currentAmount > targetAmount) {
            alert('Текущая сумма не может превышать целевую сумму.');
            return;
        }

        if (editingGoalId) {
            goals = goals.map(goal => goal.id === editingGoalId
                ? { ...goal, name, targetAmount, currentAmount }
                : goal);
            editingGoalId = null;
            addGoalBtn.textContent = translations[currentLang]['add-goal'];
        } else {
            const newGoal = {
                id: Date.now(),
                name,
                targetAmount,
                currentAmount,
            };
            goals.push(newGoal);
        }

        saveGoals();
        renderGoals(searchInput.value, sortOption);
        goalForm.reset();
    };

    addGoalBtn.addEventListener('click', addOrUpdateGoal);

    goalsList.addEventListener('click', (e) => {
        const id = parseInt(e.target.dataset.id) || parseInt(e.target.parentElement.dataset.id);
        if (e.target.classList.contains('edit-btn') || e.target.parentElement.classList.contains('edit-btn')) {
            const goal = goals.find(g => g.id === id);
            if (goal) {
                goalNameInput.value = goal.name;
                goalAmountInput.value = goal.targetAmount;
                currentAmountInput.value = goal.currentAmount;
                editingGoalId = id;
                addGoalBtn.textContent = translations[currentLang]['edit-goal'];
            }
        } else if (e.target.classList.contains('delete-btn') || e.target.parentElement.classList.contains('delete-btn')) {
            goals = goals.filter(g => g.id !== id);
            saveGoals();
            renderGoals(searchInput.value, sortOption);
        }
    });

    searchInput.addEventListener('input', (e) => {
        renderGoals(e.target.value, sortOption);
    });

    clearSearchBtn.addEventListener('click', () => {
        searchInput.value = '';
        renderGoals('', sortOption);
    });

    sortSelect.addEventListener('change', (e) => {
        sortOption = e.target.value;
        renderGoals(searchInput.value, sortOption);
    });

    // --- Обработчик для выпадающих меню ---
    document.querySelectorAll('.dropdown-toggle').forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();

            const menu = button.nextElementSibling;
            const isExpanded = button.getAttribute('aria-expanded') === 'true';

            document.querySelectorAll('.dropdown-menu.show').forEach(openMenu => {
                if (openMenu !== menu) {
                    openMenu.classList.remove('show');
                    openMenu.previousElementSibling.setAttribute('aria-expanded', 'false');
                }
            });

            menu.classList.toggle('show', !isExpanded);
            button.setAttribute('aria-expanded', !isExpanded);

            if (menu.classList.contains('show')) {
                const rect = menu.getBoundingClientRect();
                if (rect.right > window.innerWidth - 10) {
                    menu.style.left = 'unset';
                    menu.style.right = '0';
                } else if (rect.left < 10) {
                    menu.style.left = '0';
                    menu.style.right = 'unset';
                } else {
                    menu.style.left = '0';
                    menu.style.right = 'unset';
                }
            }
        });
    });

    document.addEventListener('click', (e) => {
        const isDropdownClick = e.target.closest('.dropdown');
        if (!isDropdownClick) {
            document.querySelectorAll('.dropdown-menu.show').forEach(menu => {
                menu.classList.remove('show');
                menu.previousElementSibling.setAttribute('aria-expanded', 'false');
            });
        }
    });

    // --- Инициализация ---
    renderGoals();
    updateLanguageAndTheme();
    renderUserProfile();
});