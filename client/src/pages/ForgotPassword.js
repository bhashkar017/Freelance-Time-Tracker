import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Mail, ArrowRight, ArrowLeft } from 'lucide-react';

const ForgotPassword = () => {
    const [email, setEmail] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Since this is UI only for now, we just simulate sending the email.
        setSubmitted(true);
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
                    
                    <Link to="/login" className="inline-flex items-center text-sm font-medium text-slate-400 hover:text-white mb-8 transition-colors">
                        <ArrowLeft className="w-4 h-4 mr-2" /> Back to login
                    </Link>

                    <h2 className="text-3xl font-display font-bold mb-3 tracking-wide">Reset Password</h2>
                    <p className="text-slate-400 text-sm mb-8 leading-relaxed">
                        Enter the email associated with your account and we'll send an email with instructions to reset your password.
                    </p>

                    {!submitted ? (
                        <form onSubmit={handleSubmit} className="space-y-6">
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
                                        className="block w-full pl-11 pr-4 py-3 bg-dark-bg border border-dark-border rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                                        placeholder="you@example.com"
                                        required 
                                    />
                                </div>
                            </div>
                            
                            <button 
                                type="submit"
                                className="w-full flex items-center justify-center py-3.5 px-4 bg-gradient-to-r from-primary to-secondary text-white rounded-xl font-bold shadow-glow-primary hover:-translate-y-1 transition-all duration-300 group"
                            >
                                Send Reset Link
                                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </form>
                    ) : (
                        <motion.div 
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="text-center py-6"
                        >
                            <div className="w-16 h-16 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto mb-6">
                                <Mail className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-bold mb-2">Check your inbox</h3>
                            <p className="text-slate-400 text-sm mb-6">
                                We've sent a password reset link to <br/>
                                <span className="text-white font-medium">{email}</span>
                            </p>
                            <button 
                                onClick={() => setSubmitted(false)}
                                className="text-primary text-sm font-medium hover:text-white transition-colors"
                            >
                                Did not receive the email? Click to resend
                            </button>
                        </motion.div>
                    )}
                </div>
            </motion.div>
        </div>
    );
};

export default ForgotPassword;
