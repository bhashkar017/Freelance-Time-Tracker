import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { ModalProvider } from './context/ModalContext';
import PrivateRoute from './components/PrivateRoute';
import Navbar from './components/Navbar';
import ConditionalFooter from './components/ConditionalFooter';
import LoadingSpinner from './components/LoadingSpinner';

// Pages - Lazy Loaded
const LandingPage = lazy(() => import('./pages/LandingPage'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const Service = lazy(() => import('./pages/Service'));
const Developer = lazy(() => import('./pages/Developer'));
const Login = lazy(() => import('./pages/Login'));
const Register = lazy(() => import('./pages/Register'));
const ForgotPassword = lazy(() => import('./pages/ForgotPassword'));
const Dashboard = lazy(() => import('./pages/Dashboard'));
const ClientList = lazy(() => import('./pages/ClientList'));
const ClientForm = lazy(() => import('./pages/ClientForm'));
const ProjectList = lazy(() => import('./pages/ProjectList'));
const ProjectForm = lazy(() => import('./pages/ProjectForm'));
const TimeTracker = lazy(() => import('./pages/TimeTracker'));
const InvoiceView = lazy(() => import('./pages/InvoiceView'));

import './index.css';

function App() {
  return (
    <AuthProvider>
      <ModalProvider>
        <Router>
          <div className="App dark bg-dark-bg text-white min-h-screen flex flex-col">
            <Navbar />
            <div style={{ flex: 1 }}>
              <Suspense fallback={<LoadingSpinner />}>
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
              </Suspense>
            </div>
            <ConditionalFooter />
          </div>
        </Router>
      </ModalProvider>
    </AuthProvider>
  );
}

export default App;
