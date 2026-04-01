import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../api/axios';

const Dashboard = () => {
    const [stats, setStats] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchStats = async () => {
            try {
                const { data } = await api.get('/api/reports/dashboard');
                setStats(data);
            } catch (error) {
                console.error('Error fetching stats', error);
            } finally {
                setLoading(false);
            }
        };

        fetchStats();
    }, []);

    if (loading) return <div className="container">Loading Dashboard...</div>;

    return (
        <div className="container">
            <h1>Dashboard</h1>

            {stats && (
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', marginBottom: '40px' }}>
                    <div className="card" style={{ background: '#e0f2fe', border: '1px solid #bae6fd' }}>
                        <h3>Earnings</h3>
                        <p style={{ fontSize: '2rem', fontWeight: 'bold' }}>
                            ${stats.financials.totalEarnings}
                        </p>
                    </div>
                    <div className="card" style={{ background: '#dcfce7', border: '1px solid #bbf7d0' }}>
                        <h3>Total Hours</h3>
                        <p style={{ fontSize: '2rem', fontWeight: 'bold' }}>
                            {stats.time.totalHours} hrs
                        </p>
                    </div>
                    <div className="card" style={{ background: '#fce7f3', border: '1px solid #fbcfe8' }}>
                        <h3>Active Projects</h3>
                        <p style={{ fontSize: '2rem', fontWeight: 'bold' }}>
                            {stats.projects.active} / {stats.projects.total}
                        </p>
                    </div>
                </div>
            )}

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
                <div className="card" style={{ background: 'white', borderTop: '4px solid #007bff', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
                    <h3 style={{ color: '#2c3e50' }}>Clients</h3>
                    <p style={{ color: '#6c757d' }}>Manage your client base</p>
                    <Link to="/clients" className="btn" style={{ background: 'transparent', border: '2px solid #007bff', color: '#007bff', marginTop: '10px', display: 'inline-block' }}>View Clients</Link>
                </div>
                <div className="card" style={{ background: 'white', borderTop: '4px solid #28a745', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
                    <h3 style={{ color: '#2c3e50' }}>Projects</h3>
                    <p style={{ color: '#6c757d' }}>Track your active projects</p>
                    <Link to="/projects" className="btn" style={{ background: 'transparent', border: '2px solid #28a745', color: '#28a745', marginTop: '10px', display: 'inline-block' }}>View Projects</Link>
                </div>
                <div className="card" style={{ background: 'white', borderTop: '4px solid #6f42c1', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
                    <h3 style={{ color: '#2c3e50' }}>Time Tracker</h3>
                    <p style={{ color: '#6c757d' }}>Log your hours</p>
                    <Link to="/log-time" className="btn" style={{ background: 'transparent', border: '2px solid #6f42c1', color: '#6f42c1', marginTop: '10px', display: 'inline-block' }}>Log Time</Link>
                </div>
                <div className="card" style={{ background: 'white', borderTop: '4px solid #fd7e14', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
                    <h3 style={{ color: '#2c3e50' }}>Invoices</h3>
                    <p style={{ color: '#6c757d' }}>Generate bills</p>
                    <Link to="/invoices" className="btn" style={{ background: 'transparent', border: '2px solid #fd7e14', color: '#fd7e14', marginTop: '10px', display: 'inline-block' }}>View Invoices</Link>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
