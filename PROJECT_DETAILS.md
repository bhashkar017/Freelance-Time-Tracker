# Project Overview: Freelance Time Tracker

Hello! Yeh aapke project ka detailed document hai. Aapka project **Freelance Time Tracker** ek full-stack web application hai jo freelancers ko apne clients, projects aur kaam ke samay (time tracking) ko manage karne mein madad karta hai.

Is document mein project ki saari details, tech stack, features aur kaam karne ka tareeka bataya gaya hai.

---

## 1. Project Kya Hai? (What is this project?)
Yeh ek **MERN Stack** application hai. Iska use karke aap:
- Apne **Clients** ko save kar sakte hain.
- Unke liye **Projects** bana sakte hain.
- Har project par kitna kaam kiya, uska **Time Log** rakh sakte hain.
- **Invoices** generate/view kar sakte hain taaki client se payment le sakein.

---

## 2. Tech Stack used (Kya Technologies use hui hain?)
Is project mein neeche di gayi technologies use ki gayi hain:

### Frontend (Client Side) - `client/` folder
- **React.js**: User Interface (UI) banane ke liye.
- **React Router Dom**: Alag-aglag pages (Routes) par jaane ke liye (jaise Dashboard, Client List, etc.).
- **Axios**: Backend server se data lene aur bhejne ke liye.
- **CSS**: Styling ke liye (`index.css`).

### Backend (Server Side) - `server/` folder
- **Node.js**: Server environment.
- **Express.js**: API routes aur server logic banane ke liye.
- **MongoDB & Mongoose**: Saara data (clients, time entries) database mein store karne ke liye.
- **Dotenv**: Passwords aur URL jaise secret keys ko `.env` file mein rakhne ke liye.
- **Cors**: Frontend aur Backend ko aapas mein connect karne ke liye.

---

## 3. Project Structure (Folder Kaise Bane Hain?)
Aapke project ke folders is tarah divided hain:

- **`client/`**: Isme saara React ka code hai.
    - `src/pages/`: Yahan saare main pages hain (Dashboard, ClientList, TimeTracker).
    - `src/components/`: Chote UI parts (jaise Navbar).
- **`server/`**: Isme saara Backend API ka code hai.
    - `models/`: Database ka design (Schema) yahan hai (Client.js, Project.js).
    - `routes/`: API endpoints yahan hain (data kaise aayega/jayega).
- **`package.json`**: Root folder mein bhi ek file hai jo client aur server dono ko ek saath start karne mein madad karti hai.

---

## 4. Features & Pages (Project mein kya kya hai?)
Files (`App.js` aur Models) dekhne ke baad, yeh features confirm huye hain:

1.  **Dashboard (`/`)**: 
    - Main page jahan sh shayad overview dikhta hoga.
2.  **Clients Management**:
    - **Client List (`/clients`)**: Saare added clients ki list dekhna.
    - **Add Client (`/clients/add`)**: Naya client add karna (Naam, Email, Address, Hourly Rate).
3.  **Project Management**:
    - **Project List (`/projects`)**: Saare projects ki list.
    - **Add Project (`/projects/add`)**: Naya project banana.
4.  **Time Tracking (`/log-time`)**:
    - Yahan aap select kar sakte hain ki kis client aur project ke liye kaam kiya aur kitne ghante kaam kiya.
5.  **Invoices (`/invoices`)**:
    - Kaam ke hisaab se bane huye bills/invoices dekhna.

---

## 5. Kaise Kaam Karta Hai (How it works?)
1.  Frontend (React) par user **Forms** bharta hai (jaise "Add Client").
2.  Yeh data **Axios** ke through **Express Server** (`localhost:5000`) par jaata hai.
3.  Server is data ko **MongoDB Database** mein save kar deta hai.
4.  Jab aap List page kholte hain, toh Server database se data wapas bhejta hai aur React usse screen par dikhata hai.

## 6. Project Ko Run Kaise Karein?
Terminal mein `server` folder mein ya root folder mein (agar script set hai) jakar yeh command lagayein:

```bash
npm run dev
```

Yeh command Backend (Port 5000) aur Frontend (Port 3000) dono ko ek saath start kar deti hai.

---
*Created by Antigravity*
