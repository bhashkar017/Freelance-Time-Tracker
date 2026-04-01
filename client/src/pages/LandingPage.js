import React from 'react';
import { Link } from 'react-router-dom';
import HeroImage from '../assets/hero.png';
import TimeIcon from '../assets/time.png';
import AnalyticsIcon from '../assets/analytics.png';
import SecurityIcon from '../assets/security.png';

const LandingPage = () => {
    return (
        <div style={{ paddingBottom: '50px' }}>
            {/* Hero Section */}
            <div style={{
                minHeight: '90vh',
                display: 'flex',
                alignItems: 'center',
                background: 'linear-gradient(180deg, #f8f9fa 0%, #e9ecef 100%)',
                position: 'relative',
                overflow: 'hidden',
                padding: '0 20px'
            }}>
                <div className="container" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', gap: '50px' }}>
                    {/* Text Content */}
                    <div style={{ flex: 1, zIndex: 2 }}>
                        <div className="animate-slide-up">
                            <h1 style={{ fontSize: '4rem', marginBottom: '20px', fontWeight: '800', lineHeight: '1.1' }} className="gradient-text">
                                Master Your<br />Freelance Time
                            </h1>
                        </div>

                        <p className="animate-fade-in" style={{ fontSize: '1.25rem', marginBottom: '30px', color: '#6c757d', fontWeight: '500', lineHeight: '1.6', animationDelay: '0.2s', maxWidth: '500px' }}>
                            Track project hours, calculate earnings, and generate reports — all in one secure platform designed for modern professionals.
                        </p>

                        <div className="animate-fade-in" style={{ display: 'flex', gap: '20px', animationDelay: '0.4s' }}>
                            <Link to="/register" className="btn-neon">Get Started Free</Link>
                            <Link to="/login" className="btn-neon btn-purple" style={{ background: 'white', color: '#6610f2', border: '2px solid #6610f2' }}>Login</Link>
                        </div>
                    </div>

                    {/* AI Generated Hero Image */}
                    <div style={{ flex: 1, display: 'flex', justifyContent: 'center', zIndex: 2 }} className="animate-slide-up">
                        <img src={HeroImage} alt="Dashboard Illustration" style={{ maxWidth: '100%', height: 'auto', dropShadow: '0 20px 50px rgba(0,0,0,0.1)' }} />
                    </div>
                </div>

                {/* Decorative Background Elements */}
                <div style={{ position: 'absolute', top: '-10%', right: '-10%', width: '500px', height: '500px', background: 'radial-gradient(circle, rgba(0,123,255,0.1) 0%, rgba(255,255,255,0) 70%)', borderRadius: '50%' }}></div>
                <div style={{ position: 'absolute', bottom: '-10%', left: '-10%', width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(102,16,242,0.1) 0%, rgba(255,255,255,0) 70%)', borderRadius: '50%' }}></div>
            </div>

            {/* How It Works Section */}
            <div className="container" style={{ margin: '80px auto' }}>
                <h2 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '50px' }}>How It Works</h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '40px', textAlign: 'center' }}>
                    <div className="card animate-slide-up" style={{ animationDelay: '0.2s', padding: '40px 20px' }}>
                        <div style={{ width: '120px', height: '120px', margin: '0 auto 20px' }}>
                            <img src={TimeIcon} alt="Time" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                        </div>
                        <h3>1. Track Time</h3>
                        <p style={{ color: '#666' }}>One-click smart timer to log your work hours instantly.</p>
                    </div>
                    <div className="card animate-slide-up" style={{ animationDelay: '0.4s', padding: '40px 20px' }}>
                        <div style={{ width: '120px', height: '120px', margin: '0 auto 20px' }}>
                            <img src={AnalyticsIcon} alt="Analytics" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                        </div>
                        <h3>2. Analyze Data</h3>
                        <p style={{ color: '#666' }}>View real-time earnings and project performance graphs.</p>
                    </div>
                    <div className="card animate-slide-up" style={{ animationDelay: '0.6s', padding: '40px 20px' }}>
                        <div style={{ width: '120px', height: '120px', margin: '0 auto 20px' }}>
                            <img src={SecurityIcon} alt="Security" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                        </div>
                        <h3>3. Stay Secure</h3>
                        <p style={{ color: '#666' }}>Your data is encrypted with bank-grade security protocols.</p>
                    </div>
                </div>
            </div>

            {/* Tech Stack Section */}
            <div style={{ background: '#f8f9fa', padding: '80px 0' }}>
                <div className="container">
                    <h2 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '50px' }}>Built With Modern Tech</h2>
                    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px' }}>
                        <span className="card" style={{ padding: '15px 30px', fontWeight: '600', color: '#61dafb' }}>React.js</span>
                        <span className="card" style={{ padding: '15px 30px', fontWeight: '600', color: '#3c873a' }}>Node.js & Express</span>
                        <span className="card" style={{ padding: '15px 30px', fontWeight: '600', color: '#47a248' }}>MongoDB</span>
                        <span className="card" style={{ padding: '15px 30px', fontWeight: '600', color: '#dc3545' }}>JWT Auth</span>
                        <span className="card" style={{ padding: '15px 30px', fontWeight: '600', color: '#007bff' }}>Cloud Deployed</span>
                    </div>
                </div>
            </div>

            {/* Security Section */}
            <div className="container" style={{ margin: '80px auto' }}>
                <div className="card" style={{ borderLeft: '5px solid #007bff', display: 'flex', flexDirection: 'column', md: { flexDirection: 'row' }, alignItems: 'center', gap: '30px', padding: '50px' }}>
                    <div style={{ flex: 1 }}>
                        <h2 style={{ marginBottom: '20px', color: '#2c3e50' }}>Enterprise-Grade Security</h2>
                        <ul style={{ listStyle: 'none', padding: 0 }}>
                            <li style={{ padding: '10px 0', borderBottom: '1px solid #eee' }}>✅ <strong>JWT Authentication</strong> for stateless, secure sessions</li>
                            <li style={{ padding: '10px 0', borderBottom: '1px solid #eee' }}>✅ <strong>Bcrypt Hashing</strong> to protect user passwords</li>
                            <li style={{ padding: '10px 0', borderBottom: '1px solid #eee' }}>✅ <strong>Protected APIs</strong> ensuring user data isolation</li>
                            <li style={{ padding: '10px 0' }}>✅ <strong>HTTPS & Secure Headers</strong> via Helmet</li>
                        </ul>
                    </div>
                    <div style={{ flex: 1, textAlign: 'center' }}>
                        <div style={{ fontSize: '5rem' }}>🛡️</div>
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <div className="container" style={{ textAlign: 'center', marginBottom: '50px' }}>
                <div className="card animate-slide-up" style={{ padding: '60px', background: 'var(--gradient-primary)', color: 'white' }}>
                    <h2 style={{ color: 'white', marginBottom: '15px' }}>Ready to optimize your workflow?</h2>
                    <p style={{ marginBottom: '30px', opacity: 0.9, fontSize: '1.2rem' }}>Join the platform designed for professional freelancers.</p>
                    <Link to="/register" style={{ background: 'white', color: '#007bff', padding: '15px 40px', borderRadius: '50px', fontWeight: 'bold', fontSize: '1.1rem', boxShadow: '0 4px 15px rgba(0,0,0,0.2)' }}>Create Free Account</Link>
                </div>
            </div>
        </div>
    );
};

export default LandingPage;
