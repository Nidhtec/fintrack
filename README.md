# 💰 FinTrack — Personal Finance Dashboard

A full-stack personal finance tracker built with the **PERN Stack** (PostgreSQL, Express, React, Node.js).

![Stack](https://img.shields.io/badge/Stack-PERN-6366f1?style=for-the-badge)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

---

## ✨ Features
- 🔐 JWT Authentication (Register & Login)
- 💸 Add / Delete Income & Expenses
- 📊 Live Doughnut Chart (Income vs Expenses)
- 💰 Real-time Balance Summary
- 🔒 Protected Routes

## 🛠️ Tech Stack
| Frontend | Backend |
|---|---|
| React, Vite | Node.js, Express |
| Axios, Chart.js | PostgreSQL, JWT |
| React Router DOM | bcryptjs, dotenv |

## ⚙️ Setup

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
# create .env file
npm run dev
```

**.env**
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

## 🙋‍♂️ Author
**Nidhi Vishwakarma** — [GitHub](https://github.com/Nidhtec) | [LinkedIn](https://www.linkedin.com/in/vnidhi1)
