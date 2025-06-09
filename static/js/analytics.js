document.addEventListener('DOMContentLoaded', () => {
    // --- Translations Object ---
    const translations = {
        ru: {
            'analytics-title': 'Финансовая аналитика',
            'analytics-subtitle': 'Анализируйте доходы, расходы и тренды',
            'period': 'Период',
            'week': 'Неделя',
            'month': 'Месяц',
            'year': 'Год',
            'income-expense': 'Доходы и расходы',
            'categories': 'Категории трат',
            'trends': 'Тренды',
            'export-report': 'Экспорт отчёта'
        },
        en: {
            'analytics-title': 'Financial Analytics',
            'analytics-subtitle': 'Analyze income, expenses, and trends',
            'period': 'Period',
            'week': 'Week',
            'month': 'Month',
            'year': 'Year',
            'income-expense': 'Income and Expenses',
            'categories': 'Spending Categories',
            'trends': 'Trends',
            'export-report': 'Export Report'
        },
        ky: {
            'analytics-title': 'Финансылык аналитика',
            'analytics-subtitle': 'Кирешелерди, чыгымдарды жана тренддерди талдоо',
            'period': 'Мезгил',
            'week': 'Апта',
            'month': 'Ай',
            'year': 'Жыл',
            'income-expense': 'Кирешелер жана чыгымдар',
            'categories': 'Чыгымдар категориялары',
            'trends': 'Тренддер',
            'export-report': 'Эсепти экспорттоо'
        }
    };

    // --- Language Management ---
    let currentLang = localStorage.getItem('language') || 'ru';
    const langButtons = document.querySelectorAll('.lang-btn');

    const updateLanguage = () => {
        document.title = translations[currentLang]['analytics-title'] || 'FinGuru – Аналитика';
        document.querySelectorAll('[data-lang-key]').forEach(element => {
            const key = element.getAttribute('data-lang-key');
            if (translations[currentLang][key]) element.textContent = translations[currentLang][key];
        });
    };

    langButtons.forEach(btn => {
        if (btn.dataset.lang === currentLang) btn.classList.add('active');
        btn.addEventListener('click', () => {
            if (currentLang !== btn.dataset.lang) {
                langButtons.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                currentLang = btn.dataset.lang;
                localStorage.setItem('language', currentLang);
                updateLanguage();
                updateCharts(); // Обновляем графики при смене языка
            }
        });
    });

    // --- Theme Toggling ---
    const themeToggleBtn = document.getElementById('themeToggle');
    const body = document.body;
    if (themeToggleBtn) {
        const savedTheme = localStorage.getItem('theme') || 'light';
        if (savedTheme === 'dark') body.classList.add('dark-theme');
        themeToggleBtn.addEventListener('click', () => {
            body.classList.toggle('dark-theme');
            localStorage.setItem('theme', body.classList.contains('dark-theme') ? 'dark' : 'light');
        });
    }

    // --- Chart Data ---
    const chartData = {
        week: {
            incomeExpense: { labels: ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'], income: [500, 600, 450, 700, 800, 650, 550], expense: [300, 400, 350, 500, 600, 450, 400] },
            categories: { labels: ['Еда', 'Транспорт', 'Развлечения'], data: [3000, 1500, 1000] },
            trends: { labels: ['Неделя 1', 'Неделя 2', 'Неделя 3'], data: [2000, 2500, 2000] }
        },
        month: {
            incomeExpense: { labels: ['1', '2', '3', '4'], income: [2000, 2500, 2200, 2800], expense: [1500, 1800, 1600, 2000] },
            categories: { labels: ['Еда', 'Транспорт', 'Развлечения', 'Прочее'], data: [5000, 2500, 2000, 1000] },
            trends: { labels: ['Нед 1', 'Нед 2', 'Нед 3', 'Нед 4'], data: [2000, 2500, 2300, 2800] }
        },
        year: {
            incomeExpense: { labels: ['Янв', 'Фев', 'Мар', 'Апр'], income: [5000, 6000, 4500, 7000], expense: [3000, 3500, 2500, 4000] },
            categories: { labels: ['Еда', 'Транспорт', 'Развлечения', 'Прочее', 'ЖКХ'], data: [8000, 4000, 3000, 2000, 1000] },
            trends: { labels: ['Q1', 'Q2', 'Q3', 'Q4'], data: [5000, 6000, 5500, 7000] }
        }
    };

    // --- Chart Initialization ---
    let incomeExpenseChart, categoryChart, trendChart;

    const createCharts = (period) => {
        const data = chartData[period];

        // Доходы и расходы
        if (incomeExpenseChart) incomeExpenseChart.destroy();
        incomeExpenseChart = new Chart(document.getElementById('incomeExpenseChart'), {
            type: 'bar',
            data: {
                labels: data.incomeExpense.labels,
                datasets: [
                    { label: translations[currentLang]['income-expense'] + ' (Доходы)', data: data.incomeExpense.income, backgroundColor: 'rgba(74, 144, 226, 0.7)', borderColor: 'rgba(74, 144, 226, 1)', borderWidth: 1 },
                    { label: translations[currentLang]['income-expense'] + ' (Расходы)', data: data.incomeExpense.expense, backgroundColor: 'rgba(255, 99, 132, 0.7)', borderColor: 'rgba(255, 99, 132, 1)', borderWidth: 1 }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: { y: { beginAtZero: true } },
                plugins: { legend: { position: 'top' } }
            }
        });

        // Категории трат
        if (categoryChart) categoryChart.destroy();
        categoryChart = new Chart(document.getElementById('categoryChart'), {
            type: 'pie',
            data: {
                labels: data.categories.labels,
                datasets: [{
                    data: data.categories.data,
                    backgroundColor: ['#ff6384', '#36a2eb', '#ffcd56', '#4bc0c0', '#9966ff']
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: { legend: { position: 'right' } }
            }
        });

        // Тренды
        if (trendChart) trendChart.destroy();
        trendChart = new Chart(document.getElementById('trendChart'), {
            type: 'line',
            data: {
                labels: data.trends.labels,
                datasets: [{
                    label: translations[currentLang]['trends'],
                    data: data.trends.data,
                    fill: false,
                    borderColor: '#ff6384',
                    tension: 0.1
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: { y: { beginAtZero: true } },
                plugins: { legend: { position: 'top' } }
            }
        });
    };

    // --- Filter Functionality ---
    const filterButtons = document.querySelectorAll('.filter-btn');
    let currentPeriod = 'week';

    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentPeriod = btn.getAttribute('data-period');
            createCharts(currentPeriod);
        });
    });

    // --- Initial Chart Load ---
    createCharts(currentPeriod);

    // --- Navigation and Other Functionality ---
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.querySelector('.nav-menu');
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }

    updateLanguage();
});