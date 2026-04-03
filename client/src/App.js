import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import PrivateRoute from './components/PrivateRoute';
import Navbar from './components/Navbar';
import ConditionalFooter from './components/ConditionalFooter';

// Pages
import LandingPage from './pages/LandingPage';
import About from './pages/About';
import Contact from './pages/Contact';
import Service from './pages/Service';
import Developer from './pages/Developer';
import Login from './pages/Login';
import Register from './pages/Register';
import ForgotPassword from './pages/ForgotPassword';
import Dashboard from './pages/Dashboard';
import ClientList from './pages/ClientList';
import ClientForm from './pages/ClientForm';
import ProjectList from './pages/ProjectList';
import ProjectForm from './pages/ProjectForm';
import TimeTracker from './pages/TimeTracker';
import InvoiceView from './pages/InvoiceView';

import './index.css';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="App dark bg-dark-bg text-white min-h-screen flex flex-col">
          <Navbar />
          <div style={{ flex: 1 }}>
            <Routes>
              {/* Public Routes */}
              <Route path="/" element={<LandingPage />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/service" element={<Service />} />
              <Route path="/developer" element={<Developer />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/forgot-password" element={<ForgotPassword />} />

              {/* Protected Routes */}
              <Route element={<PrivateRoute />}>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/clients" element={<ClientList />} />
                <Route path="/clients/add" element={<ClientForm />} />
                <Route path="/projects" element={<ProjectList />} />
                <Route path="/projects/add" element={<ProjectForm />} />
                <Route path="/log-time" element={<TimeTracker />} />
                <Route path="/invoices" element={<InvoiceView />} />
              </Route>
            </Routes>
          </div>
          <ConditionalFooter />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
