# Technical Reference: "Which Part Does What?" 🏗️

Welcome to your technical guide! Use this to quickly find where each feature is implemented.

## 🔑 Authentication System
- **Context Layer**: `client/src/context/AuthContext.js`
  - *Logic*: Handles login, signup, logout, and persistent session management.
- **Frontend Pages**: `Login.js`, `Register.js`
  - *Logic*: User interface with loading states and Google signup.
- **Backend**: `server/controllers/userController.js`
  - *Logic*: JWT token generation, password hashing (bcrypt), and Google OAuth profile fetching.

## 🕒 Time Tracking & Dashboard
- **Frontend Page**: `client/src/pages/TimeTracker.js`
  - *Logic*: Activity logging form, custom date/time pickers, and live timer logic.
- **Dashboard View**: `client/src/pages/Dashboard.js`
  - *Logic*: Summary stats and daily performance visualization.
- **Backend API**: `server/routes/timeEntries.js` & `server/controllers/timeEntryController.js`
  - *Logic*: CRUD operations for time logs with **Optimized Lean Queries**.

## 🤝 Client & Project CRM
- **Client Management**: `client/src/pages/ClientList.js`, `ClientForm.js`
  - *Logic*: Manage client details, contact info, and default billing rates.
- **Project Tracking**: `client/src/pages/ProjectList.js`, `ProjectForm.js`
  - *Logic*: Track active projects, link them to clients, and set project-specific rates.
- **Backend Models**: `server/models/Client.js`, `Project.js`

## 📧 Contact & Support
- **Frontend**: `client/src/pages/Contact.js`
  - *Logic*: Re-styled glassmorphism form with Lucide icons.
- **Backend API**: `server/routes/contactRoutes.js`
  - *Logic*: Saves messages to the `Message` model and optionally links to the logged-in user.

## ⚡️ Performance Core
- **Code Splitting**: `client/src/App.js`
  - *Logic*: Uses `React.lazy` and `Suspense` for on-demand page loading.
- **API Compression**: `server/index.js`
  - *Logic*: Gzip/Brotli compression for faster data transfers.
- **Global Styles**: `client/src/index.css`
  - *Logic*: The single source of truth for your app's "AI Dark Theme" aesthetic.

---
*If you need to change a button color, start in `index.css`. If you want to change an API URL, look in `AuthContext.js`!*
