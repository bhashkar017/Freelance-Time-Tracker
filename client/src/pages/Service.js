import React from 'react';
import { Database, Layout, Shield, Server, Zap, Cpu } from 'lucide-react';
import { motion } from 'framer-motion';

const Service = () => {
    const services = [
        { icon: Layout, title: 'Frontend Architecture', desc: 'Sleek, responsive React interfaces powered by Framer Motion, Tailwind CSS, and Context API.' },
        { icon: Server, title: 'Backend APIs', desc: 'Scalable Node.js & Express RESTful APIs with organized controllers and route segregation.' },
        { icon: Database, title: 'Database Design', desc: 'Optimized MongoDB schemas, efficient indexing, and complex aggregations through Mongoose ORM.' },
        { icon: Shield, title: 'Authentication & Security', desc: 'JWT-based stateless sessions, bcrypt hashing, and Helmet-secured endpoints.' },
        { icon: Zap, title: 'Performance Optimization', desc: 'Lazy loading, minimal re-renders, and fast TTFB targeting high Lighthouse scores.' },
        { icon: Cpu, title: 'Cloud Deployment', desc: 'End-to-end CI/CD workflows utilizing Vercel for frontend edges and Render for containerized Node environments.' }
    ];

    return (
        <div className="min-h-screen bg-dark-bg text-white pt-32 pb-24 px-6 relative overflow-hidden">
            {/* Ambient Background */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[600px] bg-primary/10 blur-[150px] rounded-full pointer-events-none -z-10"></div>
            
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-5xl md:text-6xl font-display font-black mb-6 tracking-tight">Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Services</span></motion.h1>
                    <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-xl text-slate-400 max-w-2xl mx-auto">
                        We specialize in full-stack engineering, delivering enterprise-ready solutions built entirely on the MERN architecture.
                    </motion.p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((svc, i) => (
                        <motion.div 
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="bg-dark-surface/50 border border-dark-border p-8 rounded-3xl hover:bg-dark-surface hover:border-slate-700 transition-all group"
                        >
                            <div className="w-14 h-14 rounded-2xl bg-dark-bg border border-dark-border flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                                <svc.icon size={26} />
                            </div>
                            <h3 className="text-2xl font-bold mb-3">{svc.title}</h3>
                            <p className="text-slate-400 leading-relaxed text-sm">{svc.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Service;
