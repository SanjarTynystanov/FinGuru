document.addEventListener('DOMContentLoaded', () => {
    // --- Translations for Dashboard (if needed, or load from a global source) ---
    // Для простоты, я добавлю здесь базовые переводы, но в реальном проекте
    // их можно централизовать или загружать через API.
    const translations = {
        ru: {
            'dashboard-title': 'Ваш Дашборд',
            'sidebar-overview': 'Обзор',
            'sidebar-transactions': 'Транзакции',
            'sidebar-budget': 'Бюджет',
            'sidebar-analytics': 'Аналитика',
            'sidebar-accounts': 'Счета',
            'sidebar-reports': 'Отчеты',
            'sidebar-settings': 'Настройки',
            'sidebar-help': 'Помощь',
            'sidebar-logout': 'Выйти',
            'add-transaction': 'Добавить транзакцию',
            'total-balance': 'Общий баланс',
            'income-this-month': 'Доход за месяц',
            'expenses-this-month': 'Расходы за месяц',
            'savings-goal': 'Цель накоплений',
            'balance-chart-title': 'Динамика баланса',
            'expenses-chart-title': 'Распределение расходов',
            'recent-transactions-title': 'Последние транзакции',
            'view-all-transactions': 'Все транзакции'
            // ... добавьте другие ключи, если нужно
        },
        en: {
            'dashboard-title': 'Your Dashboard',
            'sidebar-overview': 'Overview',
            'sidebar-transactions': 'Transactions',
            'sidebar-budget': 'Budget',
            'sidebar-analytics': 'Analytics',
            'sidebar-accounts': 'Accounts',
            'sidebar-reports': 'Reports',
            'sidebar-settings': 'Settings',
            'sidebar-help': 'Help',
            'sidebar-logout': 'Logout',
            'add-transaction': 'Add Transaction',
            'total-balance': 'Total Balance',
            'income-this-month': 'Income This Month',
            'expenses-this-month': 'Expenses This Month',
            'savings-goal': 'Savings Goal',
            'balance-chart-title': 'Balance Dynamics',
            'expenses-chart-title': 'Expense Distribution',
            'recent-transactions-title': 'Recent Transactions',
            'view-all-transactions': 'View All Transactions'
        },
        ky: {
            'dashboard-title': 'Сиздин Дашборд',
            'sidebar-overview': 'Обзор',
            'sidebar-transactions': 'Транзакциялар',
            'sidebar-budget': 'Бюджет',
            'sidebar-analytics': 'Аналитика',
            'sidebar-accounts': 'Эсептер',
            'sidebar-reports': 'Отчеттор',
            'sidebar-settings': 'Орнотуулар',
            'sidebar-help': 'Жардам',
            'sidebar-logout': 'Чыгуу',
            'add-transaction': 'Транзакция кошуу',
            'total-balance': 'Жалпы баланс',
            'income-this-month': 'Айлык киреше',
            'expenses-this-month': 'Айлык чыгашалар',
            'savings-goal': 'Жыйым максаты',
            'balance-chart-title': 'Баланс динамикасы',
            'expenses-chart-title': 'Чыгашалардын бөлүштүрүлүшү',
            'recent-transactions-title': 'Акыркы транзакциялар',
            'view-all-transactions': 'Бардык транзакциялар'
        }
    };

    let currentLang = localStorage.getItem('language') || 'ru'; // Get language preference from localStorage

    const updateDashboardLanguage = () => {
        document.title = translations[currentLang]['dashboard-title'] || 'FinGuru Dashboard';
        // Update main dashboard title
        const mainDashboardTitle = document.querySelector('.main-content .dashboard-header h1');
        if (mainDashboardTitle) {
            mainDashboardTitle.textContent = translations[currentLang]['dashboard-title'];
        }

        // Update sidebar links
        document.querySelector('.sidebar-nav-link[data-key="sidebar-overview"] span').textContent = translations[currentLang]['sidebar-overview'];
        document.querySelector('.sidebar-nav-link[data-key="sidebar-transactions"] span').textContent = translations[currentLang]['sidebar-transactions'];
        // ... and so on for all sidebar links

        // Update dashboard stats and titles
        document.querySelector('.add-transaction-btn').textContent = translations[currentLang]['add-transaction'];
        document.querySelector('.stat-card:nth-child(1) h3').textContent = translations[currentLang]['total-balance'];
        document.querySelector('.stat-card:nth-child(2) h3').textContent = translations[currentLang]['income-this-month'];
        document.querySelector('.stat-card:nth-child(3) h3').textContent = translations[currentLang]['expenses-this-month'];
        document.querySelector('.stat-card:nth-child(4) h3').textContent = translations[currentLang]['savings-goal'];

        document.querySelector('.chart-card:nth-child(1) h3').textContent = translations[currentLang]['balance-chart-title'];
        document.querySelector('.chart-card:nth-child(2) h3').textContent = translations[currentLang]['expenses-chart-title'];

        document.querySelector('.recent-transactions h2').textContent = translations[currentLang]['recent-transactions-title'];
        document.querySelector('.view-all-btn').textContent = translations[currentLang]['view-all-transactions'];


        // Update logout button in sidebar
        const sidebarLogoutBtn = document.querySelector('.sidebar-nav-link.logout-btn span');
        if (sidebarLogoutBtn) {
            sidebarLogoutBtn.textContent = translations[currentLang]['sidebar-logout'];
        }

        document.documentElement.lang = currentLang;
    };

    // --- Logout for Dashboard ---
    const logoutBtn = document.querySelector('.sidebar-nav-link.logout-btn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', (e) => {
            e.preventDefault();
            localStorage.removeItem('currentUser');
            // Redirect to login page or home page
            window.location.href = 'index.html'; // Assuming index.html is your landing page
        });
    }

    // --- Sidebar Active Link ---
    const sidebarLinks = document.querySelectorAll('.sidebar-nav-link');
    sidebarLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            // e.preventDefault(); // Uncomment if you want to prevent default link behavior for SPA-like navigation

            sidebarLinks.forEach(item => item.classList.remove('active'));
            link.classList.add('active');
        });
    });

    // --- Initial Language Update for Dashboard ---
    updateDashboardLanguage();

    // You can add more dashboard-specific JS here, like:
    // - Chart rendering (e.g., using Chart.js)
    // - Data loading via AJAX
    // - Form submissions for adding transactions
    // - Interactive elements within the dashboard
});