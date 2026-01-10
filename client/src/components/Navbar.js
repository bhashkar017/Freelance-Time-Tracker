import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const navStyle = {
        background: 'var(--white)',
        padding: '1rem 2rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        boxShadow: 'var(--shadow)',
        marginBottom: '2rem'
    };

    const logoStyle = {
        fontSize: '1.5rem',
        fontWeight: 'bold',
        color: 'var(--primary-color)'
    };

    const linkStyle = {
        marginLeft: '1.5rem',
        fontWeight: '500',
        color: '#4b5563'
    };

    return (
        <nav style={navStyle}>
            <Link to="/" style={{ ...logoStyle, textDecoration: 'none' }}>FreelanceTracker</Link>
            <div>
                <Link to="/" style={linkStyle}>Dashboard</Link>
                <Link to="/clients" style={linkStyle}>Clients</Link>
                <Link to="/projects" style={linkStyle}>Projects</Link>
                <Link to="/log-time" style={linkStyle}>Time Tracker</Link>
                <Link to="/invoices" style={linkStyle}>Invoices</Link>
            </div>
        </nav>
    );
};

export default Navbar;
