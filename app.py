from flask import Flask, render_template, request, jsonify, session, flash, redirect, url_for
from flask_sqlalchemy import SQLAlchemy
import os
from dotenv import load_dotenv
from flask_session import Session

load_dotenv()

app = Flask(__name__)
app.config['SECRET_KEY'] = os.getenv('SECRET_KEY', 'your-secret-key')
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///users.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SESSION_TYPE'] = 'filesystem'

db = SQLAlchemy(app)
Session(app)

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    email = db.Column(db.String(100), unique=True, nullable=False)
    password = db.Column(db.String(100), nullable=False)

with app.app_context():
    db.create_all()

@app.route('/')
def home():
    return render_template('index.html', user=session.get('user'))

@app.route('/register', methods=['GET', 'POST'])
def register():
    if request.method == 'POST':
        data = request.form
        name = data.get('name')
        email = data.get('email')
        password = data.get('password')

        if not name or not email or not password:
            return jsonify({'error': 'Все поля обязательны'}), 400

        if User.query.filter_by(email=email).first():
            return jsonify({'error': 'Пользователь с таким email уже существует'}), 400

        new_user = User(name=name, email=email, password=password)
        db.session.add(new_user)
        db.session.commit()

        # Автоматический вход после регистрации
        session['user'] = {'id': new_user.id, 'name': new_user.name, 'email': new_user.email}
        return jsonify({'message': 'Регистрация успешна!', 'redirect': '/goals'}), 200

    return render_template('register.html', user=session.get('user'))

@app.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        data = request.form
        email = data.get('email')
        password = data.get('password')

        if not email or not password:
            return jsonify({'error': 'Все поля обязательны'}), 400

        user = User.query.filter_by(email=email, password=password).first()
        if user:
            session['user'] = {'id': user.id, 'name': user.name, 'email': user.email}
            return jsonify({'message': 'Вход выполнен!', 'redirect': '/goals', 'user': {'name': user.name}}), 200
        return jsonify({'error': 'Неверный email или пароль'}), 400

    return render_template('login.html', user=session.get('user'))

@app.route('/dashboard')
def dashboard():
    return render_template('dashboard.html', user=session.get('user'))

@app.route('/budget')
def budget():
    return render_template('budget.html', user=session.get('user'))

@app.route('/privacy')
def privacy():
    return render_template('privacy.html', user=session.get('user'))

@app.route('/terms')
def terms():
    return render_template('terms.html', user=session.get('user'))

@app.route('/currency')
def currency():
    return render_template('currency.html', user=session.get('user'))

@app.route('/goals')
def goals():
    user = session.get('user')
    print(f"User from session: {user}")  # Отладочный вывод
    if user:
        if not isinstance(user, dict):
            user = {'id': getattr(user, 'id', None), 'name': getattr(user, 'name', None), 'email': getattr(user, 'email', None)}
    else:
        user = None
    print(f"Processed user for template: {user}")  # Отладочный вывод
    return render_template('goals.html', user=user)

@app.route('/reminders')
def reminders():
    return render_template('reminders.html', user=session.get('user'))

@app.route('/tips')
def tips():
    return render_template('tips.html', user=session.get('user'))

@app.route('/logout', methods=['POST'])
def logout():
    session.pop('user', None)
    return jsonify({'message': 'Выход выполнен!', 'redirect': '/login'})

@app.route('/clear_users', methods=['GET'])
def clear_users():
    db.session.query(User).delete()
    db.session.commit()
    return jsonify({'message': 'Пользователи очищены'}), 200

@app.route('/faq')
def faq():
    return render_template('faq.html', user=session.get('user'))

@app.route('/analytics')
def analytics():
    if not session.get('user'):
        if request.accept_mimetypes.accept_html:
            flash('Необходима авторизация для просмотра аналитики', 'danger')
            return redirect(url_for('login'))
        return jsonify({'error': 'Необходима авторизация', 'redirect': '/login'}), 401
    return render_template('analytics.html', user=session.get('user'))

@app.route('/api/calculate', methods=['POST'])
def calculate():
    if not session.get('user'):
        return jsonify({'error': 'Необходима авторизация'}), 401
    data = request.json
    if not data or 'income' not in data or 'expenses' not in data:
        return jsonify({'error': 'Income and expenses are required'}), 400
    try:
        income = float(data["income"])
        expenses = float(data["expenses"])
        balance = income - expenses
        return jsonify({"balance": balance})
    except (ValueError, TypeError):
        return jsonify({'error': 'Income and expenses must be numbers'}), 400

if __name__ == '__main__':
    port = int(os.environ.get("PORT", 5000))
    app.run(host="0.0.0.0", port=port)

