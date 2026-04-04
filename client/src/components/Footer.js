import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer style={{
            background: 'white',
            padding: '60px 20px',
            borderTop: '1px solid #f0f0f0',
            marginTop: 'auto',
            color: '#6c757d'
        }}>
            <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '40px' }}>
                {/* Brand */}
                <div style={{ textAlign: 'left' }}>
                    <h2 style={{
                        margin: '0 0 15px 0',
                        background: 'var(--gradient-text)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        fontWeight: '800'
                    }}>
                        FreelanceTracker
                    </h2>
                    <p style={{ fontSize: '0.9rem', lineHeight: '1.6' }}>
                        Empowering freelancers to track time, manage projects, and analyze earnings with a secure, modern platform.
                    </p>
                </div>

                {/* Quick Links */}
                <div style={{ textAlign: 'left' }}>
                    <h4 style={{ color: '#2c3e50', marginBottom: '20px' }}>Quick Links</h4>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                        <Link to="/" style={{ color: '#6c757d' }}>Home</Link>
                        <Link to="/about" style={{ color: '#6c757d' }}>About Us</Link>
                        <Link to="/developer" style={{ color: '#6c757d' }}>Developer Profile</Link>
                    </div>
                </div>

                {/* Connect */}
                <div style={{ textAlign: 'left' }}>
                    <h4 style={{ color: '#2c3e50', marginBottom: '20px' }}>Connect & Code</h4>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                        <a href="https://github.com/bhashkar017" target="_blank" rel="noopener noreferrer" style={{ color: '#6c757d', display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <i className="fab fa-github"></i> GitHub Repo
                        </a>
                        <a href="https://www.linkedin.com/in/bhashkar017/" target="_blank" rel="noopener noreferrer" style={{ color: '#6c757d', display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <i className="fab fa-linkedin"></i> LinkedIn
                        </a>
                        <a href="mailto:anandbhashkar2005@gmail.com" style={{ color: '#6c757d', display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <i className="fas fa-envelope"></i> Contact Dev
                        </a>
                    </div>
                </div>
            </div>

            <div style={{ borderTop: '1px solid #eee', marginTop: '40px', paddingTop: '20px', textAlign: 'center', fontSize: '0.85rem' }}>
                &copy; {new Date().getFullYear()} FreelanceTracker | Deployed Version v1.0.0
            </div>
        </footer>
    );
};

export default Footer;
