import React, { useState, useContext } from 'react';
import { Mail, MapPin, Send, Loader2, CheckCircle2, AlertCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import AuthContext from '../context/AuthContext';
import axios from 'axios';

const Contact = () => {
    const { token } = useContext(AuthContext);
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        message: ''
    });
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState({ type: '', message: '' });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setStatus({ type: '', message: '' });

        try {
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                    ...(token && { Authorization: `Bearer ${token}` })
                }
            };

            const res = await axios.post('/api/contact', formData, config);
            if (res.data.success) {
                setStatus({ type: 'success', message: 'Thank you! Your message has been sent successfully.' });
                setFormData({ firstName: '', lastName: '', email: '', message: '' });
            }
        } catch (err) {
            setStatus({ 
                type: 'error', 
                message: err.response?.data?.message || 'Something went wrong. Please try again later.' 
            });
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-dark-bg text-white pt-32 pb-24 px-6 relative overflow-hidden">
            {/* Ambient Background */}
            <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-secondary/10 blur-[100px] rounded-full pointer-events-none -z-10"></div>

            <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-start">
                {/* Left Side: Info */}
                <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
                    <h1 className="text-5xl font-display font-black mb-6 tracking-tight">Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Connect</span></h1>
                    <p className="text-slate-400 text-lg leading-relaxed mb-10">
                        Have a project in mind, need support, or just want to chat about the full stack MERN architecture? Get in touch with us using the form.
                    </p>

                    <div className="space-y-8 mb-12">
                        <div className="flex items-center gap-5">
                            <div className="w-12 h-12 bg-dark-surface border border-dark-border rounded-xl flex items-center justify-center text-primary">
                                <Mail size={24} />
                            </div>
                            <div>
                                <h4 className="text-lg font-bold">Email Us</h4>
                                <p className="text-slate-400 text-sm">anandbhashkar2005@gmail.com</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-5">
                            <div className="w-12 h-12 bg-dark-surface border border-dark-border rounded-xl flex items-center justify-center text-secondary">
                                <MapPin size={24} />
                            </div>
                            <div>
                                <h4 className="text-lg font-bold">Location</h4>
                                <p className="text-slate-400 text-sm">Phagwara,Punjab India</p>
                            </div>
                        </div>
                    </div>

                    <div className="border-t border-dark-border pt-8">
                        <h4 className="text-sm font-bold text-slate-300 uppercase tracking-widest mb-4">Follow the Developer</h4>
                        <div className="flex gap-4">
                            <a href="https://github.com/bhashkar017" target="_blank" rel="noreferrer" className="w-12 h-12 bg-dark-surface border border-dark-border rounded-full flex items-center justify-center text-slate-300 hover:text-white hover:border-slate-500 transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-github"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg>
                            </a>
                            <a href="https://www.linkedin.com/in/bhashkar017/" target="_blank" rel="noreferrer" className="w-12 h-12 bg-dark-surface border border-dark-border rounded-full flex items-center justify-center text-slate-300 hover:text-white hover:border-slate-500 transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
                            </a>
                        </div>
                    </div>
                </motion.div>

                {/* Right Side: Form */}
                <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
                    <div className="bg-dark-surface/80 backdrop-blur-xl border border-dark-border p-8 rounded-3xl shadow-2xl">
                        <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
                        
                        <AnimatePresence mode="wait">
                            {status.message && (
                                <motion.div 
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: 'auto' }}
                                    exit={{ opacity: 0, height: 0 }}
                                    className={`mb-6 p-4 rounded-xl flex items-center gap-3 text-sm font-medium ${
                                        status.type === 'success' ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' : 'bg-rose-500/10 text-rose-400 border border-rose-500/20'
                                    }`}
                                >
                                    {status.type === 'success' ? <CheckCircle2 className="w-5 h-5 shrink-0" /> : <AlertCircle className="w-5 h-5 shrink-0" />}
                                    {status.message}
                                </motion.div>
                            )}
                        </AnimatePresence>

                        <form className="space-y-6" onSubmit={handleSubmit}>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-slate-400 mb-2">First Name</label>
                                    <input 
                                        type="text" 
                                        name="firstName"
                                        value={formData.firstName}
                                        onChange={handleChange}
                                        required
                                        placeholder="Enter Your First Name" 
                                        className="w-full bg-dark-bg border border-dark-border rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors hover:border-slate-700" 
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-400 mb-2">Last Name</label>
                                    <input 
                                        type="text" 
                                        name="lastName"
                                        value={formData.lastName}
                                        onChange={handleChange}
                                        required
                                        placeholder="Enter Your Last Name" 
                                        className="w-full bg-dark-bg border border-dark-border rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors hover:border-slate-700" 
                                    />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-slate-400 mb-2">Email Address</label>
                                <input 
                                    type="email" 
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    placeholder="Enter Your Email Address" 
                                    className="w-full bg-dark-bg border border-dark-border rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors hover:border-slate-700" 
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-slate-400 mb-2">Message</label>
                                <textarea 
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows="5" 
                                    placeholder="Enter Your Message" 
                                    className="w-full bg-dark-bg border border-dark-border rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors hover:border-slate-700"
                                ></textarea>
                            </div>
                            <button 
                                type="submit" 
                                disabled={loading}
                                className="w-full py-4 bg-gradient-to-r from-primary to-secondary text-white font-bold rounded-xl hover:opacity-90 transition-all active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                            >
                                {loading ? (
                                    <>
                                        <Loader2 className="w-5 h-5 animate-spin" />
                                        Sending...
                                    </>
                                ) : (
                                    <>
                                        <Send className="w-5 h-5" />
                                        Send Message
                                    </>
                                )}
                            </button>
                        </form>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Contact;
