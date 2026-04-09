# 💰 FinTrack — Personal Finance Dashboard

A full-stack personal finance tracker built with the **PERN Stack** (PostgreSQL, Express, React, Node.js). Track your income and expenses with a beautiful real-time dashboard.

## 🔗 Live Demo
👉 **[https://fintrack-bay-eight.vercel.app](https://fintrack-bay-eight.vercel.app)**

---

## ✨ Features
- 🔐 JWT Authentication — Secure Register & Login
- 💸 Add / Delete Income & Expenses
- 📊 Live Doughnut Chart — Income vs Expenses
- 💰 Real-time Balance, Income & Expense Summary
- 🔒 Protected Routes — Dashboard only accessible after login
- 📱 Clean Responsive UI

---

## 🛠️ Tech Stack

| Frontend | Backend |
|---|---|
| React, Vite | Node.js, Express.js |
| React Router DOM | PostgreSQL |
| Axios | JWT Authentication |
| Chart.js | bcryptjs |
| Context API | dotenv, cors |

---

## 🔌 API Endpoints

| Method | Endpoint | Description | Auth |
|---|---|---|---|
| POST | `/api/auth/register` | Register new user | ❌ |
| POST | `/api/auth/login` | Login user | ❌ |
| GET | `/api/transactions` | Get all transactions | ✅ |
| POST | `/api/transactions` | Add transaction | ✅ |
| DELETE | `/api/transactions/:id` | Delete transaction | ✅ |

---

## ⚙️ Run Locally

**1. Clone the repo**
```bash
git clone https://github.com/Nidhtec/fintrack.git
cd fintrack
```

**2. Setup Database**
```bash
psql -U postgres
```
```sql
CREATE DATABASE fintrack;
\c fintrack
CREATE TABLE users (id SERIAL PRIMARY KEY, name VARCHAR(100) NOT NULL, email VARCHAR(150) UNIQUE NOT NULL, password TEXT NOT NULL, created_at TIMESTAMP DEFAULT NOW());
CREATE TABLE transactions (id SERIAL PRIMARY KEY, user_id INTEGER REFERENCES users(id) ON DELETE CASCADE, title VARCHAR(200) NOT NULL, amount DECIMAL(10,2) NOT NULL, type VARCHAR(10) CHECK (type IN ('income','expense')) NOT NULL, category VARCHAR(100) NOT NULL, date DATE NOT NULL, created_at TIMESTAMP DEFAULT NOW());
```

**3. Backend**
```bash
cd server
npm install
npm run dev
```

Create `.env` in server folder:
```
DATABASE_URL=postgresql://postgres:yourpassword@localhost:5432/fintrack
JWT_SECRET=fintrack_super_secret_key_2024
```

**4. Frontend**
```bash
cd client
npm install
npm run dev
```

> App runs on `http://localhost:5173`

---

## 🙋‍♂️ Author
**Nidhi Vishwakarma**
- 🐙 GitHub: [Nidhtec](https://github.com/Nidhtec)
- 💼 LinkedIn: [vnidhi1](https://www.linkedin.com/in/vnidhi1)

