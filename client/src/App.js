import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
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
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/clients" element={<ClientList />} />
          <Route path="/clients/add" element={<ClientForm />} />
          <Route path="/projects" element={<ProjectList />} />
          <Route path="/projects/add" element={<ProjectForm />} />
          <Route path="/log-time" element={<TimeTracker />} />
          <Route path="/invoices" element={<InvoiceView />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
