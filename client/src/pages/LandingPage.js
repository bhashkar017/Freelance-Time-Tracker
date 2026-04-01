import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
    Clock, BarChart3, Shield, Layout, Server, Database,
    CheckCircle2, ArrowRight, Zap, Target, Lock, Activity,
    Code2, Sparkles, Map, Terminal
} from 'lucide-react';
import HeroImage from '../assets/hero.png';

const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
};

const staggerContainer = {
    animate: {
        transition: {
            staggerChildren: 0.15
        }
    }
};

const LandingPage = () => {
    return (
        <div className="bg-slate-50 text-slate-900 overflow-hidden font-sans pt-16">
            
            {/* Ambient Backgrounds */}
            <div className="absolute top-[-10%] left-[-10%] w-[800px] h-[800px] bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute top-[20%] right-[-10%] w-[600px] h-[600px] bg-fuchsia-500/10 rounded-full blur-3xl pointer-events-none" />
            
            {/* HERO SECTION */}
            <section className="relative w-full max-w-7xl mx-auto px-6 pt-24 pb-32">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <motion.div 
                        initial="initial" animate="animate" variants={staggerContainer}
                        className="relative z-10"
                    >
                        <motion.div variants={fadeIn} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 border border-indigo-100 backdrop-blur-md mb-8 shadow-sm">
                            <Sparkles className="w-4 h-4 text-indigo-500" />
                            <span className="text-sm font-semibold text-indigo-700 uppercase tracking-wider">Freelance Operating System</span>
                        </motion.div>
                        
                        <motion.h1 variants={fadeIn} className="text-5xl lg:text-7xl font-display font-bold leading-[1.1] mb-6 tracking-tight">
                            Track Time. <br/>
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-fuchsia-500">
                                Scale Revenue.
                            </span>
                        </motion.h1>
                        
                        <motion.p variants={fadeIn} className="text-lg text-slate-600 mb-10 leading-relaxed max-w-lg">
                            The enterprise-grade platform for modern freelancers. Seamlessly track hours, instantly calculate earnings, and generate professional reports with bank-level security.
                        </motion.p>
                        
                        <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-4">
                            <Link to="/register" className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-indigo-600 to-fuchsia-600 text-white rounded-2xl font-semibold text-lg hover:shadow-glow hover:-translate-y-1 transition-all duration-300">
                                Start Building Free
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <Link to="/login" className="inline-flex items-center justify-center px-8 py-4 bg-white text-slate-700 border border-slate-200 rounded-2xl font-semibold text-lg hover:border-indigo-200 hover:bg-slate-50 transition-all duration-300">
                                Sign In
                            </Link>
                        </motion.div>
                        
                        <motion.div variants={fadeIn} className="mt-12 flex items-center gap-6 text-sm text-slate-500 font-medium">
                            <div className="flex items-center gap-2">
                                <CheckCircle2 className="w-5 h-5 text-emerald-500" /> No credit card required
                            </div>
                            <div className="flex items-center gap-2">
                                <CheckCircle2 className="w-5 h-5 text-emerald-500" /> Open Source MERN
                            </div>
                        </motion.div>
                    </motion.div>

                    <motion.div 
                        initial={{ opacity: 0, scale: 0.95, rotateY: 10 }}
                        animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="relative z-10 perspective-1000"
                    >
                        <div className="relative rounded-3xl bg-white/40 p-4 border border-white/60 backdrop-blur-xl shadow-glass transform hover:scale-[1.02] transition-transform duration-500">
                            <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-fuchsia-500 rounded-3xl opacity-20 blur-xl"></div>
                            {HeroImage ? (
                                <img src={HeroImage} alt="Dashboard Preview" className="relative rounded-2xl border border-white shadow-sm w-full object-cover" />
                            ) : (
                                <div className="relative rounded-2xl bg-white h-[400px] border border-slate-100 flex items-center justify-center">
                                    <BarChart3 className="w-16 h-16 text-slate-300" />
                                </div>
                            )}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* FEATURES GRID */}
            <section className="py-24 bg-white/50 backdrop-blur-sm border-y border-slate-100 relative">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-sm font-bold text-indigo-600 tracking-widest uppercase mb-3">Core Platform</h2>
                        <h3 className="text-4xl font-display font-bold text-slate-900">Engineered for performance</h3>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { icon: Clock, color: 'text-blue-500', bg: 'bg-blue-50', title: 'Smart Time Tracking', desc: 'Frictionless stopwatch interface. Assign hours directly to specific clients and projects with zero lag.' },
                            { icon: BarChart3, color: 'text-fuchsia-500', bg: 'bg-fuchsia-50', title: 'Earnings Analytics', desc: 'Real-time calculation of your billable rates mapped against tracked time. Beautiful charts to visualize workflow.' },
                            { icon: Shield, color: 'text-emerald-500', bg: 'bg-emerald-50', title: 'Data Security', desc: 'JWT sessions and Bcrypt hashed credentials ensure your business data is absolutely immune to unauthorized access.' },
                            { icon: Layout, color: 'text-amber-500', bg: 'bg-amber-50', title: 'Client Management', desc: 'Maintain an organized database of clients and associated projects within a unified, interactive dashboard.' },
                            { icon: Zap, color: 'text-indigo-500', bg: 'bg-indigo-50', title: 'Lightning Fast', desc: 'Built on a modern React SPA architecture. Page transitions and state updates happen in milliseconds.' },
                            { icon: Target, color: 'text-rose-500', bg: 'bg-rose-50', title: 'Goal Tracking', desc: 'Set and monitor your monthly freelance revenue targets against your actual tracked billables.' }
                        ].map((feature, i) => (
                            <motion.div 
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="bg-white p-8 rounded-3xl border border-slate-100 hover:border-indigo-100 shadow-sm hover:shadow-md transition-all group"
                            >
                                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 \${feature.bg} \${feature.color} group-hover:scale-110 transition-transform duration-300`}>
                                    <feature.icon className="w-7 h-7" />
                                </div>
                                <h4 className="text-xl font-bold mb-3 font-display">{feature.title}</h4>
                                <p className="text-slate-500 leading-relaxed">{feature.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* MERN ARCHITECTURE / TECH STACK */}
            <section className="py-24 relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-sm font-bold text-fuchsia-600 tracking-widest uppercase mb-3">Architecture</h2>
                            <h3 className="text-4xl font-display font-bold text-slate-900 mb-6">Modern Full-Stack Engineering</h3>
                            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                                Built from the ground up using the industry-standard MERN stack. Our architecture separates concerns efficiently, providing a robust backend API and a highly reactive frontend UI.
                            </p>
                            
                            <ul className="space-y-6">
                                {[
                                    { icon: Code2, title: 'React 19 Frontend', desc: 'Functional components, Context API state management, and Framer Motion animations.' },
                                    { icon: Server, title: 'Node.js & Express REST API', desc: 'Modular route controllers, middleware error handling, and scalable request architecture.' },
                                    { icon: Database, title: 'MongoDB Atlas', desc: 'NoSQL document storage securely hosted in the cloud with Mongoose ORM models.' },
                                    { icon: Lock, title: 'Authentication Pipeline', desc: 'Stateless JSON Web Tokens standardizing cross-origin request verification.' }
                                ].map((item, i) => (
                                    <li key={i} className="flex gap-4">
                                        <div className="w-12 h-12 shrink-0 rounded-xl bg-slate-100 flex items-center justify-center mt-1">
                                            <item.icon className="w-6 h-6 text-slate-700" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-slate-900 mb-1">{item.title}</h4>
                                            <p className="text-slate-500">{item.desc}</p>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        
                        <div className="bg-slate-900 rounded-3xl p-8 border border-slate-800 shadow-2xl relative">
                            {/* Decorative terminal dots */}
                            <div className="flex gap-2 mb-6">
                                <div className="w-3 h-3 rounded-full bg-rose-500"></div>
                                <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                                <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                            </div>
                            
                            <pre className="font-mono text-sm text-slate-300 overflow-x-auto">
                                <code className="block mb-2"><span className="text-fuchsia-400">const</span> <span className="text-blue-400">router</span> = express.<span className="text-emerald-300">Router</span>();</code>
                                <code className="block mb-2 opacity-50">// Protected API Routes</code>
                                <code className="block mb-2">router.<span className="text-blue-400">get</span>(<span className="text-amber-300">'/projects'</span>, protect, <span className="text-fuchsia-400">async</span> (req, res) =&gt; {'{'}</code>
                                <code className="block mb-2 ml-4"><span className="text-fuchsia-400">const</span> projects = <span className="text-fuchsia-400">await</span> Project.<span className="text-blue-400">find</span>({'{'} user: req.user._id {'}'});</code>
                                <code className="block mb-2 ml-4">res.<span className="text-blue-400">json</span>(projects);</code>
                                <code className="block mb-2">{'}'});</code>
                                <code className="block mb-2 mt-4 opacity-50">// Client Side Request</code>
                                <code className="block mb-2"><span className="text-fuchsia-400">const</span> fetchProjects = <span className="text-fuchsia-400">async</span> () =&gt; {'{'}</code>
                                <code className="block mb-2 ml-4"><span className="text-fuchsia-400">const</span> {'{'} data {'}'} = <span className="text-fuchsia-400">await</span> api.<span className="text-blue-400">get</span>(<span className="text-amber-300">'/api/projects'</span>);</code>
                                <code className="block mb-2 ml-4"><span className="text-blue-400">setProjects</span>(data);</code>
                                <code className="block mb-2">{'}'};</code>
                            </pre>
                            
                            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-indigo-500/30 rounded-full blur-2xl"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ROADMAP / DEPLOYMENT */}
            <section className="py-24 bg-slate-900 text-white relative">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-20">
                        <h2 className="text-sm font-bold text-indigo-400 tracking-widest uppercase mb-3">Roadmap & Deployment</h2>
                        <h3 className="text-4xl font-display font-bold">From Localhost to the Cloud</h3>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-sm">
                        {[
                            { step: 'Phase 1', title: 'Local Development', desc: 'Monorepo setup with Express server running alongside React dev server.', status: 'Completed', icon: Terminal },
                            { step: 'Phase 2', title: 'MongoDB Atlas', desc: 'Migrating from local DB to global cloud cluster with automated backups.', status: 'Completed', icon: Database },
                            { step: 'Phase 3', title: 'Vercel / Render', desc: 'Continuous integration and deployment pipelines pushing to live domains.', status: 'In Progress', icon: Activity },
                            { step: 'Phase 4', title: 'Advanced Reporting', desc: 'Exporting PDF invoices and integrations with third-party payment gateways.', status: 'Upcoming', icon: Map }
                        ].map((item, i) => (
                            <div key={i} className="bg-slate-800/50 border border-slate-700 p-6 rounded-2xl relative group hover:bg-slate-800 transition-colors">
                                <div className="text-indigo-400 font-mono text-xs mb-4">{item.step}</div>
                                <h4 className="text-lg font-bold mb-2 flex items-center gap-2">
                                    <item.icon className="w-5 h-5" /> {item.title}
                                </h4>
                                <p className="text-slate-400 mb-6">{item.desc}</p>
                                <div className={`inline-block px-3 py-1 rounded-full text-xs font-semibold \${item.status === 'Completed' ? 'bg-emerald-500/20 text-emerald-400' : item.status === 'In Progress' ? 'bg-amber-500/20 text-amber-400' : 'bg-slate-700 text-slate-300'}`}>
                                    {item.status}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA FOOTER */}
            <section className="py-24 relative overflow-hidden">
                <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
                    <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">Take control of your freelance business.</h2>
                    <p className="text-xl text-slate-600 mb-10">Stop guessing your hourly rate. Start measuring your success.</p>
                    
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Link to="/register" className="inline-flex items-center justify-center px-10 py-5 bg-indigo-600 text-white rounded-2xl font-bold text-lg hover:bg-indigo-700 shadow-glow transition-all hover:-translate-y-1">
                            Get Started
                        </Link>
                        <a href="https://github.com/bhashkar017/Freelance-Time-Tracker" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 px-10 py-5 bg-white text-slate-900 border border-slate-200 rounded-2xl font-bold text-lg hover:border-slate-300 hover:bg-slate-50 transition-all">
                            <Terminal className="w-5 h-5" /> View Project Code
                        </a>
                    </div>
                </div>
                
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-100 rounded-full blur-3xl -z-10 opacity-50"></div>
            </section>
            
        </div>
    );
};

export default LandingPage;
