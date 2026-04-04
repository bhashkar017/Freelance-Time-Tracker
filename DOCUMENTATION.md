# Project Documentation: Freelance Time Tracker 🚀

## 1. Problem Statement
Many freelancers struggle to track their time, manage client details, and generate professional reports across multiple projects. This application provides a **centralized, premium AI-themed dashboard** to:
- Log activities in real-time.
- Manage client relationships.
- Monitor project status and hourly rates.
- Visualize performance with a high-end dark-mode interface.

## 2. Key Features
- **Smart Time Logging**: Quick-access form with auto-duration calculation and manual entry.
- **Client & Project Management**: Organize your work with a dedicated CRM-style interface.
- **Auth System**: Secure JWT-based login with integrated **Google One-Tap Signup**.
- **Contact Integration**: Direct communication portal for potential clients to reach out.
- **Performance Optimized**: Code-splitting and Gzip compression for a "snappy" experience.

## 3. Technology Stack
- **Frontend**: React.js, Tailwind CSS (for layout), Lucide-React (icons), Framer Motion (animations).
- **Backend**: Node.js, Express.js.
- **Database**: MongoDB Atlas.
- **Hosting**: Vercel (Frontend), Render (Backend).

## 4. Setup Instructions

### Prerequisites
- Node.js installed.
- MongoDB Atlas account.
- Google Cloud Console account (for Auth).

### Backend Setup
1. `cd server`
2. Create a `.env` file:
   ```env
   PORT=5000
   MONGO_URI=your_mongodb_uri
   JWT_SECRET=your_secret_key
   NODE_ENV=production
   ```
3. `npm install`
4. `npm start`

### Frontend Setup
1. `cd client`
2. Create a `.env` file:
   ```env
   REACT_APP_GOOGLE_CLIENT_ID=your_google_id
   ```
3. `npm install`
4. `npm start`

---
*Created with ❤️ for Freelancers.*
