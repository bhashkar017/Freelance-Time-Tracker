# 🚀 Freelance Time Tracker: AI Premium Edition

[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Three.js](https://img.shields.io/badge/Three.js-FFFFFF?style=for-the-badge&logo=threedotjs&logoColor=black)](https://threejs.org/)
[![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/)
[![Express](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)

> **A premium, high-performance MERN SaaS application** designed for modern freelancers. Featuring an **"Obsidian Glassmorphism"** aesthetic, **AI-driven Strategy Engine**, and interactive **Innovation Showcases**.

---

## ✨ Expo-Ready Features

### 🧠 Smart Engine Insights (AI Strategy Engine)
- **Heuristic Productivity Scoring**: Real-time analysis of work patterns to generate a dynamic 0-100 productivity score.
- **Peak Flow Window Identification**: Algorithmic detection of your most productive "Deep Work" windows (e.g., 10:00 AM - 1:00 PM).
- **Proactive Burnout Prevention**: Smart monitoring of work intensity vs. rest cycles to mitigate cognitive fatigue.
- **Dynamic Strategy Suggestions**: Context-aware AI advice for task prioritization and workflow optimization.
- **Predictive Revenue Forecasting**: Forward-looking financial projections based on active project pipeline and historical trends.

### 🎭 Interactive Exhibition Mode
- **Try Interactive Demo**: One-click "Guest Login" designed for expo judges to experience a fully populated dashboard without signing up.
- **Mock Data Injection**: Automated high-fidelity data population for Projects, Clients, and Time Logs during demo sessions.
- **Network Resilience**: Simulated successful operations in demo mode to ensure a 100% stable presentation experience.

### 🎨 Premium Visual Architecture
- **Innovation Gallery**: A high-impact, 6-slide animated carousel showcasing the platform's architectural pillars.
- **3D Hero Scene**: Interactive abstract 3D objects powered by **Three.js & React-Three-Fiber** for immediate visual engagement.
- **Glassmorphism UI**: High-contrast dark-mode interface with neon accents, blur effects, and smooth Framer Motion transitions.

### 🔐 Enterprise-Grade Core
- **Client & Project CRM**: Centralized hub with per-project hourly rates and automated billing calculations.
- **Google SSO & JWT**: Stateless secure authentication pipeline using JSON Web Tokens and Google OAuth.
- **Performance Optimized**: 70% Gzip compression, Code Splitting (React.lazy), and optimized REST controllers.

---

## 📂 Project Architecture

```bash
📦 freelance-time-tracker
 ├── 📂 client                # React Frontend (SaaS Dashboard)
 │    ├── 📂 src/components/  # AI Insight & Showcase components
 │    ├── 📂 src/context/     # Auth & Modal Context Management
 │    ├── 📂 src/pages/       # Obsidian Glassmorphism Pages
 │    └── 📂 src/utils/       # Exhibition Data & AI logic
 └── 📂 server                # Node/Express Backend
      ├── 📂 controllers/     # Specialized API Logic (Lean Queries)
      ├── 📂 middleware/      # Auth & Security Layer
      └── 📂 models/          # MongoDB Atlas Schemas
```

---

## 🔧 Local Setup

### ⚙️ Backend (Node/Express)
1. `cd server && npm install`
2. Create `server/.env`: `PORT=5000`, `MONGO_URI`, `JWT_SECRET`.
3. `npm run dev`

### 🎨 Frontend (React)
1. `cd client && npm install`
2. Create `client/.env`: `REACT_APP_GOOGLE_CLIENT_ID`.
3. `npm start`

---

## 🔮 Roadmap
- [ ] **PDF Invoicing Engine**: Automated professional invoices from logs.
- [ ] **Multi-Currency Analytics**: Real-time exchange rate support.
- [ ] **Biometric Unlock**: FaceID/TouchID support for mobile PWA.

---
*Developed for the Computing & AI Innovation Expo 2026 by Bhashkar Anand*
