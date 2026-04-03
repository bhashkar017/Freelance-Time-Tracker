import React, { useContext, useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AuthContext from '../context/AuthContext';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const { user, logout } = useContext(AuthContext);
    const navigate = useNavigate();
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleLogout = () => {
        logout();
        navigate('/');
    };

    return (
        <nav className={`fixed w-full top-0 z-[1000] transition-all duration-300 ${scrolled ? 'bg-dark-surface/80 backdrop-blur-xl py-4' : 'bg-transparent py-6'}`}>
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex items-center justify-between">

                    {/* Logo */}
                    <Link to="/" className="text-2xl font-display font-bold text-primary">
                        FreelanceTracker
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        <Link to="/" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">Home</Link>
                        <Link to="/about" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">About Us</Link>
                        <Link to="/contact" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">Contact</Link>
                        <Link to="/service" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">Service</Link>
                        <Link to="/developer" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">Developer Profile</Link>

                        {user ? (
                            <div className="flex items-center space-x-6 border-l border-dark-border pl-6">
                                <Link to="/dashboard" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">Dashboard</Link>
                                <button onClick={handleLogout} className="text-sm font-medium text-rose-400 hover:text-rose-300 transition-colors">Logout</button>
                            </div>
                        ) : (
                            <div className="flex items-center space-x-4 border-l border-dark-border pl-6">
                                <Link to="/login" className="text-sm font-medium text-white hover:text-primary transition-colors">Login</Link>
                                <Link to="/register" className="text-sm font-semibold bg-primary text-white px-5 py-2.5 rounded-full hover:shadow-glow-primary transition-all duration-300 transform hover:-translate-y-0.5">
                                    Sign Up
                                </Link>
                            </div>
                        )}
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button
                        className="md:hidden text-slate-300 hover:text-white"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            {mobileMenuOpen && (
                <div className="absolute top-full left-0 w-full bg-dark-surface border-b border-dark-border shadow-2xl md:hidden">
                    <div className="px-6 py-4 flex flex-col space-y-4">
                        <Link to="/" className="text-slate-300 hover:text-white" onClick={() => setMobileMenuOpen(false)}>Home</Link>
                        <Link to="/about" className="text-slate-300 hover:text-white" onClick={() => setMobileMenuOpen(false)}>About Us</Link>
                        <Link to="/contact" className="text-slate-300 hover:text-white" onClick={() => setMobileMenuOpen(false)}>Contact</Link>
                        <Link to="/service" className="text-slate-300 hover:text-white" onClick={() => setMobileMenuOpen(false)}>Service</Link>
                        <Link to="/developer" className="text-slate-300 hover:text-white" onClick={() => setMobileMenuOpen(false)}>Developer Profile</Link>
                        <hr className="border-dark-border" />
                        {user ? (
                            <>
                                <Link to="/dashboard" className="text-slate-300 hover:text-white" onClick={() => setMobileMenuOpen(false)}>Dashboard</Link>
                                <button onClick={() => { handleLogout(); setMobileMenuOpen(false); }} className="text-rose-400 text-left">Logout</button>
                            </>
                        ) : (
                            <>
                                <Link to="/login" className="text-slate-300 hover:text-white" onClick={() => setMobileMenuOpen(false)}>Login</Link>
                                <Link to="/register" className="text-primary font-semibold" onClick={() => setMobileMenuOpen(false)}>Sign Up</Link>
                            </>
                        )}
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
