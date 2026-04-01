import React from 'react';
import { Link } from 'react-router-dom';
import HeroImage from '../assets/hero.png';
import TimeIcon from '../assets/time.png';
import AnalyticsIcon from '../assets/analytics.png';
import SecurityIcon from '../assets/security.png';

const LandingPage = () => {
    return (
        <div style={{ paddingBottom: '80px', overflow: 'hidden' }}>
            {/* Ambient Background Orbs */}
            <div style={{ position: 'absolute', top: '-10%', right: '-5%', width: '600px', height: '600px', background: 'radial-gradient(circle, rgba(79, 70, 229, 0.15) 0%, transparent 70%)', borderRadius: '50%', zIndex: -1, filter: 'blur(40px)' }}></div>
            <div style={{ position: 'absolute', top: '20%', left: '-10%', width: '500px', height: '500px', background: 'radial-gradient(circle, rgba(217, 70, 239, 0.15) 0%, transparent 70%)', borderRadius: '50%', zIndex: -1, filter: 'blur(40px)' }}></div>

            {/* Hero Section */}
            <div style={{ minHeight: '92vh', display: 'flex', alignItems: 'center', position: 'relative', marginTop: '-60px' }}>
                <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', alignItems: 'center', gap: '60px', paddingTop: '80px' }}>
                    
                    {/* Text Content */}
                    <div style={{ zIndex: 2, paddingRight: '20px' }}>
                        <div className="animate-slide-up">
                            <h1 style={{ fontSize: '4.5rem', marginBottom: '24px', lineHeight: '1.05' }}>
                                Master Your <br/>
                                <span className="gradient-text">Freelance Time</span>
                            </h1>
                        </div>

                        <p className="animate-fade-in" style={{ fontSize: '1.25rem', marginBottom: '40px', color: 'var(--text-muted)', lineHeight: '1.7', animationDelay: '0.2s', maxWidth: '540px' }}>
                            The ultimate platform to track project hours, calculate earnings, and generate professional reports. Designed for modern freelancers.
                        </p>

                        <div className="animate-slide-up" style={{ display: 'flex', gap: '20px', animationDelay: '0.4s' }}>
                            <Link to="/register" className="btn btn-neon" style={{ padding: '16px 36px', fontSize: '1.1rem' }}>
                                Start For Free
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: '8px' }}><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                            </Link>
                            <Link to="/login" className="btn btn-outline" style={{ padding: '16px 36px', fontSize: '1.1rem' }}>
                                Sign In
                            </Link>
                        </div>
                        
                        {/* Trust Metrics */}
                        <div className="animate-fade-in" style={{ marginTop: '50px', display: 'flex', gap: '40px', animationDelay: '0.6s' }}>
                            <div>
                                <h3 style={{ fontSize: '2.5rem', color: 'var(--text-main)', margin: '0 0 5px 0' }}>10k+</h3>
                                <p style={{ color: 'var(--text-muted)', fontSize: '1rem', margin: 0, fontWeight: 500 }}>Active Users</p>
                            </div>
                            <div style={{ width: '2px', background: 'var(--border-color)' }}></div>
                            <div>
                                <h3 style={{ fontSize: '2.5rem', color: 'var(--text-main)', margin: '0 0 5px 0' }}>99%</h3>
                                <p style={{ color: 'var(--text-muted)', fontSize: '1rem', margin: 0, fontWeight: 500 }}>Client Satisfaction</p>
                            </div>
                        </div>
                    </div>

                    {/* Dashboard Preview / Image */}
                    <div className="animate-float" style={{ zIndex: 2, perspective: '1000px' }}>
                        <div className="glass-panel" style={{ padding: '15px', transform: 'rotateY(-10deg) rotateX(5deg)', boxShadow: '0 30px 60px -10px rgba(0,0,0,0.15)' }}>
                            <img src={HeroImage} alt="Dashboard Illustration" style={{ width: '100%', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.4)', display: 'block' }} />
                        </div>
                    </div>
                </div>
            </div>

            {/* Features Section */}
            <div className="container" style={{ marginTop: '100px' }}>
                <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                    <h5 style={{ color: 'var(--primary-color)', fontWeight: '700', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '15px' }}>Workflow</h5>
                    <h2 style={{ fontSize: '3.5rem' }}>Everything you need to scale</h2>
                </div>
                
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '40px' }}>
                    <div className="card glass-panel animate-slide-up" style={{ textAlign: 'center', padding: '50px 30px', animationDelay: '0.2s' }}>
                        <div style={{ width: '80px', height: '80px', margin: '0 auto 30px', background: 'rgba(79, 70, 229, 0.1)', borderRadius: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <img src={TimeIcon} alt="Time" style={{ width: '40px', height: '40px' }} />
                        </div>
                        <h3 style={{ fontSize: '1.75rem', marginBottom: '15px' }}>Smart Timer</h3>
                        <p style={{ color: 'var(--text-muted)', lineHeight: '1.6', fontSize: '1.05rem' }}>Log hours instantly with our minimal friction timer. Group by client or specific project.</p>
                    </div>

                    <div className="card glass-panel animate-slide-up" style={{ textAlign: 'center', padding: '50px 30px', transform: 'translateY(-20px)', animationDelay: '0.4s' }}>
                        <div style={{ width: '80px', height: '80px', margin: '0 auto 30px', background: 'rgba(217, 70, 239, 0.1)', borderRadius: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <img src={AnalyticsIcon} alt="Analytics" style={{ width: '40px', height: '40px' }} />
                        </div>
                        <h3 style={{ fontSize: '1.75rem', marginBottom: '15px' }}>Deep Analytics</h3>
                        <p style={{ color: 'var(--text-muted)', lineHeight: '1.6', fontSize: '1.05rem' }}>Visualize your earnings, track billable hours, and identify your most profitable clients.</p>
                    </div>

                    <div className="card glass-panel animate-slide-up" style={{ textAlign: 'center', padding: '50px 30px', animationDelay: '0.6s' }}>
                        <div style={{ width: '80px', height: '80px', margin: '0 auto 30px', background: 'rgba(16, 185, 129, 0.1)', borderRadius: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <img src={SecurityIcon} alt="Security" style={{ width: '40px', height: '40px' }} />
                        </div>
                        <h3 style={{ fontSize: '1.75rem', marginBottom: '15px' }}>Bank-grade Security</h3>
                        <p style={{ color: 'var(--text-muted)', lineHeight: '1.6', fontSize: '1.05rem' }}>Your financial data is encrypted and secure. Complete isolation and top-tier privacy.</p>
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <div className="container" style={{ marginTop: '140px', marginBottom: '60px' }}>
                <div className="glass-panel" style={{ padding: '80px', textAlign: 'center', background: 'var(--gradient-primary)', position: 'relative', overflow: 'hidden' }}>
                    <div style={{ position: 'relative', zIndex: 2 }}>
                        <h2 style={{ color: 'white', fontSize: '4rem', marginBottom: '20px' }}>Ready to optimize your workflow?</h2>
                        <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '1.25rem', marginBottom: '40px', maxWidth: '600px', margin: '0 auto 40px' }}>Join thousands of professionals taking control of their time and income.</p>
                        <Link to="/register" className="btn" style={{ background: 'white', color: 'var(--primary-color)', padding: '20px 50px', fontSize: '1.3rem', borderRadius: '16px', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}>
                            Create Free Account
                        </Link>
                    </div>
                    {/* Decorative Background Elements */}
                    <div style={{ position: 'absolute', top: '-50%', left: '-10%', width: '400px', height: '400px', background: 'rgba(255,255,255,0.15)', borderRadius: '50%', filter: 'blur(30px)' }}></div>
                    <div style={{ position: 'absolute', bottom: '-50%', right: '-10%', width: '300px', height: '300px', background: 'rgba(255,255,255,0.15)', borderRadius: '50%', filter: 'blur(30px)' }}></div>
                </div>
            </div>
        </div>
    );
};

export default LandingPage;
