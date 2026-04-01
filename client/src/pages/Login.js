import React, { useState, useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import AuthContext from '../context/AuthContext';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const { login } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await login(email, password);
            navigate('/dashboard');
        } catch (err) {
            setError(err.response?.data?.message || 'Login failed! Please check your credentials.');
        }
    };

    return (
        <div style={{ minHeight: '90vh', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden' }}>
            {/* Ambient Background */}
            <div style={{ position: 'absolute', top: '10%', left: '20%', width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(79, 70, 229, 0.15) 0%, transparent 70%)', filter: 'blur(40px)', zIndex: -1 }}></div>
            <div style={{ position: 'absolute', bottom: '10%', right: '20%', width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(217, 70, 239, 0.15) 0%, transparent 70%)', filter: 'blur(40px)', zIndex: -1 }}></div>
            
            <div className="animate-slide-up" style={{ width: '100%', maxWidth: '440px', zIndex: 1 }}>
                <div className="glass-panel" style={{ padding: '50px 40px' }}>
                    <div style={{ textAlign: 'center', marginBottom: '35px' }}>
                        <h2 style={{ fontSize: '2.5rem', marginBottom: '10px' }}>Welcome Back</h2>
                        <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem' }}>Enter your credentials to access your dashboard.</p>
                    </div>

                    {error && (
                        <div style={{ background: 'rgba(239, 68, 68, 0.1)', color: '#ef4444', padding: '12px 16px', borderRadius: '12px', marginBottom: '20px', border: '1px solid rgba(239, 68, 68, 0.2)', fontSize: '0.95rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>
                            {error}
                        </div>
                    )}

                    <form onSubmit={handleSubmit}>
                        <div style={{ marginBottom: '20px' }}>
                            <label>Email Address</label>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                placeholder="name@company.com"
                                style={{ background: 'rgba(255,255,255,0.7)', backdropFilter: 'blur(4px)' }}
                            />
                        </div>
                        <div style={{ marginBottom: '30px' }}>
                            <label style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                                <span>Password</span>
                                <span style={{ color: 'var(--primary-color)', fontSize: '0.85rem', cursor: 'pointer', fontWeight: 600 }}>Forgot?</span>
                            </label>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                placeholder="••••••••"
                                style={{ background: 'rgba(255,255,255,0.7)', backdropFilter: 'blur(4px)' }}
                            />
                        </div>
                        <button type="submit" className="btn-neon" style={{ width: '100%', padding: '16px', fontSize: '1.1rem' }}>
                            Sign In to Dashboard
                        </button>
                    </form>

                    <p style={{ marginTop: '35px', textAlign: 'center', color: 'var(--text-muted)' }}>
                        Don't have an account yet? <Link to="/register" style={{ color: 'var(--primary-color)', fontWeight: '600', textDecoration: 'none' }}>Create Account</Link>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Login;
