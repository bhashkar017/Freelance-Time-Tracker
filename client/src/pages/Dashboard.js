import React, { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import api from '../api/axios';
import AuthContext from '../context/AuthContext';
import { motion } from 'framer-motion';
import { DollarSign, Clock, LayoutGrid, Users, Briefcase, FileText, ArrowRight, PlayCircle } from 'lucide-react';

const Dashboard = () => {
    const { user } = useContext(AuthContext);
    const [stats, setStats] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchStats = async () => {
            try {
                const { data } = await api.get('/api/reports/dashboard');
                setStats(data);
            } catch (error) {
                console.error('Error fetching stats', error);
            } finally {
                setLoading(false);
            }
        };

        fetchStats();
    }, []);

    const containerVariants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
    };

    if (loading) {
        return (
            <div className="min-h-screen bg-dark-bg flex items-center justify-center">
                <div className="w-16 h-16 border-4 border-primary/20 border-t-primary rounded-full animate-spin"></div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-dark-bg text-white pt-32 pb-12 px-6 relative overflow-hidden">
            {/* Ambient Background Glow */}
            <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none"></div>
            <div className="absolute top-1/2 left-[-10%] w-[400px] h-[400px] bg-secondary/10 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto relative z-10">
                <motion.div 
                    initial={{ opacity: 0, y: -20 }} 
                    animate={{ opacity: 1, y: 0 }} 
                    transition={{ duration: 0.6 }}
                    className="mb-10"
                >
                    <h1 className="text-4xl font-display font-bold mb-2">
                        Welcome back, <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">{user?.name || 'Freelancer'}</span>!
                    </h1>
                    <p className="text-slate-400 text-lg">Here's an overview of your freelance business.</p>
                </motion.div>

                <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    animate="show"
                    className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
                >
                    {/* Stat Card 1: Earnings */}
                    <motion.div variants={itemVariants} className="bg-dark-surface/80 backdrop-blur-xl border border-dark-border p-6 rounded-3xl relative overflow-hidden group shadow-glass-dark hover:border-emerald-500/30 transition-colors">
                        <div className="absolute -right-4 -top-4 p-8 bg-emerald-500/5 rounded-full group-hover:bg-emerald-500/10 transition-colors">
                            <DollarSign size={80} className="text-emerald-500/20" />
                        </div>
                        <div className="w-12 h-12 bg-emerald-500/20 text-emerald-400 rounded-2xl flex items-center justify-center mb-6 shadow-[0_0_15px_rgba(16,185,129,0.2)]">
                            <DollarSign size={24} />
                        </div>
                        <h3 className="text-slate-400 font-medium mb-1">Total Earnings</h3>
                        <p className="text-4xl font-display font-bold text-white shadow-sm">
                            ${stats?.financials?.totalEarnings || '0'}
                        </p>
                    </motion.div>

                    {/* Stat Card 2: Hours */}
                    <motion.div variants={itemVariants} className="bg-dark-surface/80 backdrop-blur-xl border border-dark-border p-6 rounded-3xl relative overflow-hidden group shadow-glass-dark hover:border-blue-500/30 transition-colors">
                        <div className="absolute -right-4 -top-4 p-8 bg-blue-500/5 rounded-full group-hover:bg-blue-500/10 transition-colors">
                            <Clock size={80} className="text-blue-500/20" />
                        </div>
                        <div className="w-12 h-12 bg-blue-500/20 text-blue-400 rounded-2xl flex items-center justify-center mb-6 shadow-[0_0_15px_rgba(59,130,246,0.2)]">
                            <Clock size={24} />
                        </div>
                        <h3 className="text-slate-400 font-medium mb-1">Total Hours Billed</h3>
                        <p className="text-4xl font-display font-bold text-white shadow-sm">
                            {stats?.time?.totalHours || '0'} <span className="text-xl text-slate-500">hrs</span>
                        </p>
                    </motion.div>

                    {/* Stat Card 3: Projects */}
                    <motion.div variants={itemVariants} className="bg-dark-surface/80 backdrop-blur-xl border border-dark-border p-6 rounded-3xl relative overflow-hidden group shadow-glass-dark hover:border-purple-500/30 transition-colors">
                        <div className="absolute -right-4 -top-4 p-8 bg-purple-500/5 rounded-full group-hover:bg-purple-500/10 transition-colors">
                            <LayoutGrid size={80} className="text-purple-500/20" />
                        </div>
                        <div className="w-12 h-12 bg-purple-500/20 text-purple-400 rounded-2xl flex items-center justify-center mb-6 shadow-[0_0_15px_rgba(168,85,247,0.2)]">
                            <LayoutGrid size={24} />
                        </div>
                        <h3 className="text-slate-400 font-medium mb-1">Active Projects</h3>
                        <p className="text-4xl font-display font-bold text-white shadow-sm">
                            {stats?.projects?.active || '0'} <span className="text-xl text-slate-500">/ {stats?.projects?.total || '0'}</span>
                        </p>
                    </motion.div>
                </motion.div>

                <motion.div 
                    initial={{ opacity: 0, y: 20 }} 
                    animate={{ opacity: 1, y: 0 }} 
                    transition={{ delay: 0.4, duration: 0.6 }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
                >
                    {/* Action Cards */}
                    <Link to="/clients" className="bg-dark-bg border border-dark-border p-6 rounded-2xl hover:border-primary/50 hover:bg-dark-surface/50 transition-all group relative overflow-hidden">
                        <Users className="w-8 h-8 text-slate-400 mb-4 group-hover:text-primary transition-colors" />
                        <h3 className="font-bold text-lg text-white mb-2">Clients</h3>
                        <p className="text-slate-400 text-sm mb-6">Manage your trusted client relationships.</p>
                        <div className="flex items-center text-primary font-medium text-sm">
                            View Clients <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                        </div>
                    </Link>

                    <Link to="/projects" className="bg-dark-bg border border-dark-border p-6 rounded-2xl hover:border-secondary/50 hover:bg-dark-surface/50 transition-all group relative overflow-hidden">
                        <Briefcase className="w-8 h-8 text-slate-400 mb-4 group-hover:text-secondary transition-colors" />
                        <h3 className="font-bold text-lg text-white mb-2">Projects</h3>
                        <p className="text-slate-400 text-sm mb-6">Track progress on your active projects.</p>
                        <div className="flex items-center text-secondary font-medium text-sm">
                            View Projects <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                        </div>
                    </Link>

                    <Link to="/log-time" className="bg-dark-bg border border-dark-border p-6 rounded-2xl hover:border-emerald-500/50 hover:bg-dark-surface/50 transition-all group relative overflow-hidden">
                        <PlayCircle className="w-8 h-8 text-slate-400 mb-4 group-hover:text-emerald-500 transition-colors" />
                        <h3 className="font-bold text-lg text-white mb-2">Time Tracker</h3>
                        <p className="text-slate-400 text-sm mb-6">Log hours and track your productivity.</p>
                        <div className="flex items-center text-emerald-500 font-medium text-sm">
                            Log Time <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                        </div>
                    </Link>

                    <Link to="/invoices" className="bg-dark-bg border border-dark-border p-6 rounded-2xl hover:border-orange-500/50 hover:bg-dark-surface/50 transition-all group relative overflow-hidden">
                        <FileText className="w-8 h-8 text-slate-400 mb-4 group-hover:text-orange-500 transition-colors" />
                        <h3 className="font-bold text-lg text-white mb-2">Invoices</h3>
                        <p className="text-slate-400 text-sm mb-6">Generate and track client billing.</p>
                        <div className="flex items-center text-orange-500 font-medium text-sm">
                            View Invoices <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                        </div>
                    </Link>
                </motion.div>
            </div>
        </div>
    );
};

export default Dashboard;
