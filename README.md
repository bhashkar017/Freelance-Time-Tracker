# Freelance Time Tracker Project

This project is a full-stack MERN application (MongoDB, Express, React, Node.js) for tracking freelance time and projects.

## Project Structure

- **client/**: The React frontend application.
- **server/**: The Express backend application.

## Prerequisites

Before running this project, ensure you have the following installed:

1.  **Node.js**: [Download and Install Node.js](https://nodejs.org/)
2.  **MongoDB**: Ensure MongoDB is installed and running locally on your machine.
    - Default URI: `mongodb://127.0.0.1:27017/freelance-time-tracker`
    - You can change this in `server/.env` if needed.

## Setup Instructions

1.  **Unzip the project** folder.
2.  Open a terminal/command prompt in the project root folder.

### 1. Install Server Dependencies

Navigate to the server directory and install dependencies:

```bash
cd server
npm install
```

### 2. Install Client Dependencies

Navigate to the client directory and install dependencies:

```bash
cd ../client
npm install
```

(Or commonly: `npm install` inside both `server` and `client` folders separately).

## How to Run

You can run the full project (client and server) from the `server` directory using a single command.

1.  Open your terminal in the `server` directory.
2.  Run the development command:

```bash
npm run dev
```

This command will start both the:
-   **Backend Server** on [http://localhost:5000](http://localhost:5000)
-   **Frontend Client** on [http://localhost:3000](http://localhost:3000)

Your browser should automatically open the application at `http://localhost:3000`.

## Configuration

The backend configuration is located in `server/.env`.
-   `PORT`: The port the server runs on (default 5000).
-   `MONGO_URI`: The connection string for your MongoDB database.

## Troubleshooting

-   **Database Connection Error**: Ensure your local MongoDB service is running. Use MongoDB Compass to verify connection to `mongodb://127.0.0.1:27017`.
-   **Port Conflicts**: If port 3000 or 5000 is in use, you may need to kill the process using that port or change the port in `.env` (for server) or package.json (for client).

---
Generated for delivery.
