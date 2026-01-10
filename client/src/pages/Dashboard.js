import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div className="container">
            <h1>Dashboard</h1>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
                <div className="card">
                    <h3>Clients</h3>
                    <p>Manage your client base</p>
                    <Link to="/clients" className="btn">View Clients</Link>
                </div>
                <div className="card">
                    <h3>Projects</h3>
                    <p>Track your active projects</p>
                    <Link to="/projects" className="btn">View Projects</Link>
                </div>
                <div className="card">
                    <h3>Time Tracker</h3>
                    <p>Log your hours</p>
                    <Link to="/log-time" className="btn">Log Time</Link>
                </div>
                <div className="card">
                    <h3>Invoices</h3>
                    <p>Generate bills</p>
                    <Link to="/invoices" className="btn">View Invoices</Link>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
