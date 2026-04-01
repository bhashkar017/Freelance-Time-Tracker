import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AuthContext from '../context/AuthContext';

const Navbar = () => {
    const { user, logout } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/');
    };

    const navStyle = {
        background: 'rgba(255, 255, 255, 0.95)',
        padding: '1rem 2rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        backdropFilter: 'blur(10px)'
    };

    const logoStyle = {
        fontSize: '1.5rem',
        fontWeight: '800',
        background: 'var(--gradient-text)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        textDecoration: 'none'
    };

    const linkStyle = {
        marginLeft: '2rem',
        fontWeight: '500',
        color: 'var(--text-main)',
        textDecoration: 'none',
        cursor: 'pointer',
        background: 'none',
        border: 'none',
        fontSize: '0.95rem',
        transition: 'color 0.2s ease'
    };

    return (
        <nav style={navStyle}>
            <Link to="/" style={logoStyle}>FreelanceTracker</Link>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <Link to="/about" style={linkStyle}>About</Link>
                {user ? (
                    <>
                        <Link to="/dashboard" style={linkStyle}>Dashboard</Link>
                        <Link to="/clients" style={linkStyle}>Clients</Link>
                        <Link to="/projects" style={linkStyle}>Projects</Link>
                        <button onClick={handleLogout} style={{ ...linkStyle, color: '#dc3545', fontWeight: '600' }}>Logout</button>
                    </>
                ) : (
                    <>
                        <Link to="/developer" style={linkStyle}>Dev Corner</Link>
                        <Link to="/login" style={linkStyle}>Login</Link>
                        <Link to="/register" style={{
                            marginLeft: '2rem',
                            padding: '8px 20px',
                            background: 'var(--gradient-primary)',
                            color: 'white',
                            borderRadius: '50px',
                            textDecoration: 'none',
                            fontWeight: '600',
                            boxShadow: '0 4px 10px rgba(0,123,255,0.3)'
                        }}>Get Started</Link>
                    </>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
