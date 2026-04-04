# 🚀 Freelance Time Tracker: AI Premium Edition

[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/)
[![Express](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)
[![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com/)

> **A premium, high-performance MERN SaaS application** designed for modern freelancers. Featuring an **"Obsidian Glassmorphism"** aesthetic, AI-inspired animations, and enterprise-grade security.

---

## ✨ Key Features

### 💎 Premium User Experience
- **Obsidian Glassmorphism**: A stunning dark-mode UI with blur effects, neon accents, and high-end typography.
- **Micro-Animations**: Powered by **Framer Motion** for a smooth, "living" interface.
- **Unified Controls**: Custom-styled date and time pickers optimized for dark-mode visibility.

### 🔐 Advanced Authentication
- **Google SSO Integration**: One-Tap login and signup via Google OAuth for a frictionless user experience.
- **Secure JWT Flow**: Hybrid authentication using JSON Web Tokens and encrypted password storage.
- **Auto-Loading States**: Visual feedback with spinners and disabled buttons to prevent duplicate submissions.

### 🕒 Intelligent Time Tracking
- **Smart Activity Logger**: Real-time duration and billing calculations for all projects.
- **Client & Project CRM**: A professional portal to manage multiple relationships, hourly rates, and currencies.
- **SaaS Dashboard**: High-level visualizations of total earnings, performance status, and weekly activity.

### ⚡ Performance & Security
- **70% Gzip Compression**: Blazing-fast API responses using server-side compression.
- **Code Splitting (React.lazy)**: Optimized initial load time by only fetching code for the active page.
- **DDoS Protection**: Integrated rate limiting and secure headers (Helmet) for production stability.

---

## 📂 Project Architecture

```bash
📦 freelance-time-tracker
 ├── 📂 client                # React Frontend (SaaS Dashboard)
 │    ├── 📂 src/api/         # API Integration Layer
 │    ├── 📂 src/context/     # Auth & Modal Context Management
 │    ├── 📂 src/pages/       # Obsidian Glassmorphism Pages
 │    └── 📂 src/components/  # High-End UI Components
 └── 📂 server                # Node/Express Backend
      ├── 📂 controllers/     # Specialized API Logic (Lean Queries)
      ├── 📂 middleware/      # Auth & Security Layer
      └── 📂 models/          # MongoDB Atlas Schemas
```

---

## 🔧 Installation & Local Setup

### ⚙️ Backend Setup (Render Ready)
1. `cd server && npm install`
2. Create `server/.env`:
   ```env
   PORT=5000
   MONGO_URI=your_atlas_connection_string
   JWT_SECRET=your_super_secret_key
   NODE_ENV=development
   ```
3. `npm run dev`

### 🎨 Frontend Setup (Vercel Ready)
1. `cd client && npm install`
2. Create `client/.env`:
   ```env
   REACT_APP_GOOGLE_CLIENT_ID=your_google_id
   ```
3. `npm start`

---

## 🔮 Roadmap
- [ ] **PDF Invoicing Engine**: Professional invoices generated directly from time logs.
- [ ] **Multi-Currency Analytics**: Real-time exchange rate support for international clients.
- [ ] **Forgot Password Recovery**: Secure email-based reset flow.

---
*Developed for Excellence by Bhashkar Anand*
