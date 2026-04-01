# Freelance Time Tracker (MERN Stack)

> **CV-Ready Description**: Developed a full-stack web application to help freelancers track project-wise working hours and earnings. Implemented JWT-based authentication, role-based access control, and secure REST APIs using Node.js and Express. Designed MongoDB schemas with user-project relationships and built real-time time tracking with automated billing calculations. Deployed the application on cloud platforms with MongoDB Atlas integration.

---

## 🚀 Features

*   **Secure Authentication**: User registration and login with JWT and bcrypt password hashing.
*   **Role-Based Data Access**: Each user has their own private dashboard, clients, projects, and time logs.
*   **Smart Time Tracking**: Real-time "Start/Stop" timer to automatically calculate duration and earnings.
*   **Project Management**: Manage clients and projects with custom hourly rates and currency support.
*   **Financial Reports**: Dashboard with total earnings, weekly activity, and project status (Active/Completed).
*   **Robust Security**: Implemented `Helmet` for secure headers, `express-rate-limit` for DDoS protection, and `Joi` for strict input validation.
*   **RESTful API**: Clean, documented API with centralized error handling and async middleware.

## 🛠️ Tech Stack

*   **Frontend**: React.js, React Router, Axios (Planned Integration)
*   **Backend**: Node.js, Express.js
*   **Database**: MongoDB, Mongoose
*   **Authentication**: JSON Web Tokens (JWT), Bcrypt.js
*   **Security**: Helmet, Rate Limiting, CORS, Dotenv
*   **Validation**: Joi
*   **Logging**: Morgan

## 📂 Project Structure

```
server/
 ├── config/         # Database connection
 ├── controllers/    # Route logic (Auth, Clients, Projects, Reports)
 ├── middleware/     # Auth check, Error handling, Validation
 ├── models/         # Mongoose Schemas (User, Client, Project, TimeEntry)
 ├── routes/         # API Routes
 ├── utils/          # Helper functions (Token generation, Async Handler)
 ├── validations/    # Joi Validation Schemas
 └── index.js        # App entry point
```

## 🔌 API Endpoints

### Authentication
*   `POST /api/users` - Register a new user
*   `POST /api/users/login` - Login user
*   `GET /api/users/profile` - Get user profile

### Dashboard & Reports
*   `GET /api/reports/dashboard` - Get earnings and stats
*   `GET /api/reports/weekly` - Get weekly activity

### Time Tracking
*   `POST /api/time-entries/start` - Start timer
*   `PUT /api/time-entries/stop/:id` - Stop timer
*   `POST /api/time-entries` - Add manual entry

## 🔧 Setup & Installation

**Prerequisites**: Node.js and MongoDB installed.

1.  **Clone the repository**:
    ```bash
    git clone https://github.com/yourusername/freelance-time-tracker.git
    cd freelance-time-tracker
    ```

2.  **Install Dependencies**:
    ```bash
    cd server
    npm install
    cd ../client
    npm install
    ```

3.  **Environment Variables**:
    Create a `.env` file in `server/`:
    ```env
    PORT=5000
    MONGO_URI=your_mongodb_uri
    JWT_SECRET=your_jwt_secret
    NODE_ENV=development
    ```

4.  **Run the App**:
    ```bash
    # From server directory
    npm run dev
    ```

## 🔮 Future Improvements

*   **PDF Invoicing**: Generate downloadable PDF invoices for clients.
*   **Payment Gateway**: Integrate Stripe/Razorpay for direct payments.
*   **Team Mode**: Allow multiple users to collaborate on the same project.

---
*Built with ❤️ by [Your Name]*
