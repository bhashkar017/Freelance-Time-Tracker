import React, { useState, useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import AuthContext from '../context/AuthContext';
import { motion } from 'framer-motion';
import { Mail, Lock, ArrowRight, Chrome } from 'lucide-react';

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
        <div className="min-h-screen bg-dark-bg text-white relative overflow-hidden flex items-center justify-center pt-24 pb-12 px-6">
            {/* Ambient Background */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] pointer-events-none"></div>
            
            <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                className="w-full max-w-md relative z-10"
            >
                <div className="bg-dark-surface/80 backdrop-blur-xl border border-dark-border p-8 py-10 rounded-3xl shadow-glass-dark">
                    <div className="text-center mb-8">
                        <h2 className="text-3xl font-display font-bold mb-3 tracking-wide">Welcome Back</h2>
                        <p className="text-slate-400 text-sm">Enter your credentials to access your dashboard.</p>
                    </div>

                    {error && (
                        <div className="mb-6 p-4 bg-rose-500/10 border border-rose-500/20 rounded-xl text-rose-400 text-sm flex items-center gap-3">
                            <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>
                            {error}
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-5">
                        <div>
                            <label className="block text-sm font-medium text-slate-300 mb-2">Email Address</label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                    <Mail className="h-5 w-5 text-slate-500" />
                                </div>
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                    placeholder="name@company.com"
                                    className="block w-full pl-11 pr-4 py-3 bg-dark-bg border border-dark-border rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                                />
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between mb-2">
                                <label className="block text-sm font-medium text-slate-300">Password</label>
                                <Link to="/forgot-password" className="text-xs font-semibold text-primary hover:text-primary-hover transition-colors">Forgot Password?</Link>
                            </div>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                    <Lock className="h-5 w-5 text-slate-500" />
                                </div>
                                <input
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                    placeholder="••••••••"
                                    className="block w-full pl-11 pr-4 py-3 bg-dark-bg border border-dark-border rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                                />
                            </div>
                        </div>

                        <button type="submit" className="w-full flex items-center justify-center py-3.5 px-4 bg-gradient-to-r from-primary to-secondary text-white rounded-xl font-bold shadow-glow-primary hover:-translate-y-1 transition-all duration-300 group mt-2">
                            Sign In to Dashboard
                            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </form>

                    <div className="mt-8 relative">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-dark-border"></div>
                        </div>
                        <div className="relative flex justify-center text-sm">
                            <span className="px-3 bg-dark-surface text-slate-500">Or continue with</span>
                        </div>
                    </div>

                    <div className="mt-6">
                        <button type="button" className="w-full flex items-center justify-center py-3 px-4 bg-dark-bg border border-dark-border text-white rounded-xl font-semibold hover:bg-dark-surface/50 hover:border-slate-600 transition-all duration-300">
                            <Chrome className="w-5 h-5 mr-3 text-slate-300 border-none" />
                            Sign in with Google
                        </button>
                    </div>

                    <p className="mt-8 text-center text-sm text-slate-400">
                        Don't have an account yet? <Link to="/register" className="text-primary font-bold hover:text-primary-hover transition-colors ml-1">Create Account</Link>
                    </p>
                </div>
            </motion.div>
        </div>
    );
}

export default Login;
