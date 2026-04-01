import React, { useState, useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import AuthContext from '../context/AuthContext';

function Register() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const { register } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            return setError('Passwords do not match');
        }
        try {
            await register(name, email, password);
            navigate('/dashboard');
        } catch (err) {
            setError(err.response?.data?.message || 'Registration failed');
        }
    };

    return (
        <div style={{ minHeight: '90vh', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden', padding: '40px 0' }}>
            {/* Ambient Background */}
            <div style={{ position: 'absolute', top: '10%', right: '10%', width: '500px', height: '500px', background: 'radial-gradient(circle, rgba(217, 70, 239, 0.15) 0%, transparent 70%)', filter: 'blur(50px)', zIndex: -1 }}></div>
            <div style={{ position: 'absolute', bottom: '0', left: '10%', width: '600px', height: '600px', background: 'radial-gradient(circle, rgba(79, 70, 229, 0.15) 0%, transparent 70%)', filter: 'blur(50px)', zIndex: -1 }}></div>
            
            <div className="animate-slide-up" style={{ width: '100%', maxWidth: '480px', zIndex: 1 }}>
                <div className="glass-panel" style={{ padding: '40px 50px' }}>
                    <div style={{ textAlign: 'center', marginBottom: '30px' }}>
                        <h2 style={{ fontSize: '2.5rem', marginBottom: '10px' }}>Join Us</h2>
                        <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem' }}>Start tracking your freelance career today.</p>
                    </div>

                    {error && (
                        <div style={{ background: 'rgba(239, 68, 68, 0.1)', color: '#ef4444', padding: '12px 16px', borderRadius: '12px', marginBottom: '20px', border: '1px solid rgba(239, 68, 68, 0.2)', fontSize: '0.95rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>
                            {error}
                        </div>
                    )}

                    <form onSubmit={handleSubmit}>
                        <div style={{ marginBottom: '16px' }}>
                            <label>Full Name</label>
                            <input
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                                placeholder="John Doe"
                                style={{ background: 'rgba(255,255,255,0.7)', backdropFilter: 'blur(4px)' }}
                            />
                        </div>
                        <div style={{ marginBottom: '16px' }}>
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
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '25px' }}>
                            <div>
                                <label>Password</label>
                                <input
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                    placeholder="••••••••"
                                    style={{ background: 'rgba(255,255,255,0.7)', backdropFilter: 'blur(4px)' }}
                                />
                            </div>
                            <div>
                                <label>Confirm</label>
                                <input
                                    type="password"
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                    required
                                    placeholder="••••••••"
                                    style={{ background: 'rgba(255,255,255,0.7)', backdropFilter: 'blur(4px)' }}
                                />
                            </div>
                        </div>
                        <button type="submit" className="btn-neon" style={{ width: '100%', padding: '16px', fontSize: '1.1rem' }}>
                            Create Account
                        </button>
                    </form>

                    <p style={{ marginTop: '35px', textAlign: 'center', color: 'var(--text-muted)' }}>
                        Already have an account? <Link to="/login" style={{ color: 'var(--primary-color)', fontWeight: '600', textDecoration: 'none' }}>Sign In</Link>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Register;
