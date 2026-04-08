import React, { Suspense, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Float, Sparkles, PerspectiveCamera } from '@react-three/drei';
import AuthContext from '../context/AuthContext';
import FeatureCarousel from '../components/FeatureCarousel';
import { 
    CheckCircle2, ArrowRight, Zap,
    Lock, Code2, Terminal, Cpu, Sparkle, Brain, TrendingUp
} from 'lucide-react';

const fadeIn = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: "easeOut" }
};

const staggerContainer = {
    animate: {
        transition: {
            staggerChildren: 0.15
        }
    }
};

// 3D Object Component
const FloatingAbstract = () => {
    return (
        <Float speed={2} rotationIntensity={1.5} floatIntensity={2}>
            <mesh scale={1.2}>
                <torusKnotGeometry args={[1, 0.3, 128, 32]} />
                <meshStandardMaterial 
                    color="#06b6d4" 
                    emissive="#10b981"
                    emissiveIntensity={0.5}
                    roughness={0.2}
                    metalness={0.8}
                    wireframe={true}
                />
            </mesh>
        </Float>
    );
};


const LandingPage = () => {
    const { loginAsGuest } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleExhibitionClick = () => {
        loginAsGuest();
        navigate('/dashboard');
    };

    return (
        <div className="bg-dark-bg text-white overflow-hidden font-sans min-h-screen">
            
            {/* Ambient Animated Background Grid */}
            <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#06b6d411_1px,transparent_1px),linear-gradient(to_bottom,#06b6d411_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none"></div>

            {/* HERO SECTION */}
            <section className="relative w-full min-h-screen flex items-center pt-24 pb-32 z-10">
                <div className="max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-12 items-center">
                    
                    {/* Left Column: Copy & Actions */}
                    <motion.div 
                        initial="initial" animate="animate" variants={staggerContainer}
                        className="relative z-20"
                    >
                        <motion.div variants={fadeIn} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-dark-surface border border-dark-border mb-8 shadow-glow-primary">
                            <span className="flex h-2 w-2 rounded-full bg-secondary animate-pulse"></span>
                            <span className="text-sm font-semibold text-slate-300 uppercase tracking-[0.2em]">Freelance Ecosystem 3.0</span>
                        </motion.div>
                        
                        <motion.h1 variants={fadeIn} className="text-6xl lg:text-8xl font-display font-black leading-[1.05] tracking-tight mb-8">
                            Master your <br/>
                            <span className="text-primary">
                                freelance time.
                            </span>
                        </motion.h1>
                        
                        <motion.p variants={fadeIn} className="text-xl text-slate-400 mb-10 leading-relaxed max-w-xl font-light">
                            Experience a premium, high-performance MERN application designed for the modern freelancer. Featuring bank-level security and intelligent time management.
                        </motion.p>
                        
                        <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-5">
                            <Link to="/register" className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-white rounded-xl font-bold text-lg shadow-glow-primary hover:shadow-[0_0_40px_rgba(6,182,212,0.3)] hover:-translate-y-1 transition-all duration-300">
                                Start Building Free
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <button 
                                onClick={handleExhibitionClick}
                                className="inline-flex items-center justify-center px-8 py-4 bg-dark-surface/50 backdrop-blur-md text-white border border-dark-border rounded-xl font-bold text-lg hover:border-slate-500 transition-all duration-300 group"
                            >
                                <Sparkle className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform text-primary" />
                                Try Interactive Demo
                            </button>
                        </motion.div>
                        
                        <motion.div variants={fadeIn} className="mt-12 flex flex-wrap items-center gap-8 text-sm text-slate-400 font-medium">
                            <div className="flex items-center gap-2">
                                <CheckCircle2 className="w-5 h-5 text-emerald-400" /> No credit card required
                            </div>
                            <div className="flex items-center gap-2">
                                <CheckCircle2 className="w-5 h-5 text-emerald-400" /> Open Source Ready
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Right Column: 3D Canvas */}
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1.5, delay: 0.5 }}
                        className="relative z-10 h-[500px] lg:h-[700px] w-full"
                    >
                        <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full pointer-events-none"></div>
                        <Canvas className="w-full h-full">
                            <PerspectiveCamera makeDefault position={[0, 0, 5]} fov={50} />
                            <ambientLight intensity={0.5} />
                            <directionalLight position={[10, 10, 5]} intensity={1} color="#f8fafc" />
                            <pointLight position={[-10, -10, -5]} intensity={2} color="#10b981" />
                            
                            <Suspense fallback={null}>
                                <FloatingAbstract />
                                <Sparkles count={200} scale={10} size={2} speed={0.4} color="#06b6d4" opacity={0.5} />
                            </Suspense>
                            <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
                        </Canvas>
                    </motion.div>
                </div>
            </section>

            {/* AI STRATEGY ENGINE HIGHLIGHT */}
            <section className="py-32 relative overflow-hidden bg-dark-bg z-10 border-t border-dark-border">
                {/* Background AI Glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] opacity-50 pointer-events-none"></div>
                
                <div className="max-w-7xl mx-auto px-6 relative">
                    <div className="text-center mb-20">
                        <motion.div 
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6"
                        >
                            <Brain size={16} className="text-primary animate-pulse" />
                            <span className="text-sm font-bold text-primary tracking-widest uppercase">Intelligent Systems</span>
                        </motion.div>
                        <h3 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">Driven by the Strategy Engine</h3>
                        <p className="text-lg text-slate-400 max-w-2xl mx-auto">
                            Go beyond simple tracking. Our built-in intelligence analyzes your work patterns to optimize your freelance growth and prevent burnout.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-3 gap-8">
                        <motion.div 
                            whileHover={{ y: -10 }}
                            className="bg-dark-surface/40 backdrop-blur-xl border border-primary/20 p-10 rounded-[32px] relative group overflow-hidden"
                        >
                            <div className="absolute -right-4 -top-4 w-32 h-32 bg-primary/10 rounded-full blur-3xl group-hover:bg-primary/20 transition-colors"></div>
                            <Zap className="w-12 h-12 text-primary mb-8" />
                            <h4 className="text-2xl font-bold text-white mb-4">Peak Flow Analysis</h4>
                            <p className="text-slate-400 leading-relaxed mb-6">Identify your most productive "Deep Work" hours based on historical consistency and output quality.</p>
                            <div className="text-primary font-bold text-sm tracking-tighter uppercase">+22% Efficiency Gain</div>
                        </motion.div>

                        <motion.div 
                            whileHover={{ y: -10 }}
                            className="bg-dark-surface/40 backdrop-blur-xl border border-emerald-500/20 p-10 rounded-[32px] relative group overflow-hidden"
                        >
                            <div className="absolute -right-4 -top-4 w-32 h-32 bg-emerald-500/10 rounded-full blur-3xl group-hover:bg-emerald-500/20 transition-colors"></div>
                            <TrendingUp className="w-12 h-12 text-emerald-400 mb-8" />
                            <h4 className="text-2xl font-bold text-white mb-4">Revenue Forecasting</h4>
                            <p className="text-slate-400 leading-relaxed mb-6">Predict monthly earnings using algorithmic linear projections mapped against your active pipeline.</p>
                            <div className="text-emerald-400 font-bold text-sm tracking-tighter uppercase">Predictive Analysis</div>
                        </motion.div>

                        <motion.div 
                            whileHover={{ y: -10 }}
                            className="bg-dark-surface/40 backdrop-blur-xl border border-rose-500/20 p-10 rounded-[32px] relative group overflow-hidden"
                        >
                            <div className="absolute -right-4 -top-4 w-32 h-32 bg-rose-500/10 rounded-full blur-3xl group-hover:bg-rose-500/20 transition-colors"></div>
                            <CheckCircle2 className="w-12 h-12 text-rose-400 mb-8" />
                            <h4 className="text-2xl font-bold text-white mb-4">Burnout Prevention</h4>
                            <p className="text-slate-400 leading-relaxed mb-6">Proactive monitoring of cognitive fatigue by tracking intensity and mandatory rest window analysis.</p>
                            <div className="text-rose-400 font-bold text-sm tracking-tighter uppercase">Smart Safety Shield</div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* PLATFORM VISUALS (STATIC SECTION) */}
            <section className="py-24 relative overflow-hidden bg-dark-bg z-10 border-t border-dark-border">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-24">
                        <h2 className="text-sm font-bold text-primary tracking-widest uppercase mb-4">Core Functionality</h2>
                        <h3 className="text-4xl md:text-5xl font-display font-bold text-white">The standard in freelance management.</h3>
                    </div>

                    {/* Time Tracking mockup */}
                    <div className="grid lg:grid-cols-2 gap-16 items-center mb-32 group">
                        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                            <h3 className="text-3xl font-display font-bold mb-4">Precision Time Tracking</h3>
                            <p className="text-slate-400 leading-relaxed text-lg mb-6 font-light">Stop guessing your billable hours. Our tracker runs seamlessly in the background, logging your sessions per-project with zero-friction.</p>
                            <ul className="space-y-3 mb-8">
                                <li className="flex items-center gap-3 text-slate-300 font-medium"><CheckCircle2 className="w-5 h-5 text-emerald-400" /> Granular project assignment</li>
                                <li className="flex items-center gap-3 text-slate-300 font-medium"><CheckCircle2 className="w-5 h-5 text-emerald-400" /> One-click billing export</li>
                            </ul>
                        </motion.div>
                        <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative">
                            <div className="absolute inset-0 bg-blue-500/10 blur-[80px] -z-10 rounded-full group-hover:bg-blue-500/20 transition-all duration-700"></div>
                            <img src="/images/dashboard-mockup.png" alt="Time Tracking Dashboard" className="rounded-3xl border border-white/5 shadow-3xl w-full" />
                        </motion.div>
                    </div>

                    {/* Analytics mockup */}
                    <div className="grid lg:grid-cols-2 gap-16 items-center mb-32 group">
                        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="order-2 lg:order-1 relative">
                            <div className="absolute inset-0 bg-fuchsia-500/10 blur-[80px] -z-10 rounded-full group-hover:bg-fuchsia-500/20 transition-all duration-700"></div>
                            <img src="/images/analytics-mockup.png" alt="Analytics Charts" className="rounded-3xl border border-white/5 shadow-3xl w-full" />
                        </motion.div>
                        <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="order-1 lg:order-2">
                            <h3 className="text-3xl font-display font-bold mb-4">Dynamic Revenue Analytics</h3>
                            <p className="text-slate-400 leading-relaxed text-lg mb-6 font-light">Visualize your growth instantly. Our analytics engine maps tracked time directly to your billable rates for crystal clear financial insights.</p>
                        </motion.div>
                    </div>

                    {/* Client Management mockup */}
                    <div className="grid lg:grid-cols-2 gap-16 items-center group">
                        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                            <h3 className="text-3xl font-display font-bold mb-4">Seamless Client Hub</h3>
                            <p className="text-slate-400 leading-relaxed text-lg mb-6 font-light">Keep your business organized. A centralized hub for all your client contracts, projects, and overall profitability.</p>
                        </motion.div>
                        <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative">
                            <div className="absolute inset-0 bg-emerald-500/10 blur-[80px] -z-10 rounded-full group-hover:bg-emerald-500/20 transition-all duration-700"></div>
                            <img src="/images/client-mockup.png" alt="Client Management" className="rounded-3xl border border-white/5 shadow-3xl w-full" />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* INNOVATION SHOWCASE (ANIMATED CAROUSEL) */}
            <section className="py-32 relative overflow-hidden bg-dark-surface/10 z-10 border-t border-dark-border">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <motion.div 
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6"
                        >
                            <Sparkle size={16} className="text-primary" />
                            <span className="text-sm font-bold text-primary tracking-widest uppercase">Innovation Gallery</span>
                        </motion.div>
                        <motion.h3 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-7xl font-display font-black text-white"
                        >
                            Visionary <span className="text-primary tracking-tighter italic">Engineering</span>
                        </motion.h3>
                        <motion.p 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-slate-400 text-xl mt-4 max-w-2xl mx-auto font-light"
                        >
                            Take a deep dive into the high-performance architectural pillars that power our intelligent systems.
                        </motion.p>
                    </div>

                    <div className="relative">
                        <FeatureCarousel />
                    </div>
                </div>
            </section>


            {/* MERN ARCHITECTURE / TECH STACK */}
            <section className="py-32 relative overflow-hidden bg-dark-bg z-10">
                <div className="absolute -left-40 top-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-secondary/10 rounded-full blur-[100px] pointer-events-none"></div>
                <div className="max-w-7xl mx-auto px-6 relative">
                    <div className="grid lg:grid-cols-2 gap-20 items-center">
                        <div>
                            <h2 className="text-sm font-bold text-secondary tracking-widest uppercase mb-4 flex items-center gap-2"><Cpu size={16}/> Architecture</h2>
                            <h3 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">Modern Full-Stack Engineering</h3>
                            <p className="text-lg text-slate-400 mb-10 leading-relaxed">
                                Built from the ground up using the industry-standard MERN stack. Our architecture separates concerns efficiently, providing a robust backend API and a highly reactive frontend UI.
                            </p>
                            
                            <ul className="space-y-8">
                                {[
                                    { icon: Code2, title: 'React Frontend', desc: 'Functional components, Context API, and global Tailwind dark mode.' },
                                    { icon: Server, title: 'Node.js & Express REST API', desc: 'Modular route controllers, middleware error handling, and scalable architecture.' },
                                    { icon: Database, title: 'MongoDB Atlas', desc: 'NoSQL document storage securely hosted in the cloud with Mongoose ORM.' },
                                    { icon: Lock, title: 'Authentication Pipeline', desc: 'Stateless secure JSON Web Tokens standardizing cross-origin requests.' }
                                ].map((item, i) => (
                                    <li key={i} className="flex gap-5 group">
                                        <div className="w-14 h-14 shrink-0 rounded-2xl bg-dark-surface border border-dark-border flex items-center justify-center mt-1 group-hover:border-primary transition-colors">
                                            <item.icon className="w-6 h-6 text-primary" />
                                        </div>
                                        <div>
                                            <h4 className="text-lg font-bold text-white mb-2">{item.title}</h4>
                                            <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        
                        {/* Terminal Mockup */}
                        <div className="relative">
                            <div className="absolute -inset-1 bg-primary rounded-3xl opacity-20 blur-xl"></div>
                            <div className="bg-[#0c0c16] rounded-3xl p-8 border border-dark-border shadow-2xl relative">
                                <div className="flex items-center justify-between border-b border-dark-border/50 pb-4 mb-6">
                                    <div className="flex gap-2">
                                        <div className="w-3 h-3 rounded-full bg-rose-500/80"></div>
                                        <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
                                        <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
                                    </div>
                                    <div className="text-xs text-slate-500 font-mono flex items-center gap-2">
                                        <Terminal size={14}/> server.js
                                    </div>
                                </div>
                                
                                <pre className="font-mono text-sm overflow-x-auto leading-loose">
                                    <code className="text-slate-300">
                                        <span className="text-fuchsia-400">const</span> <span className="text-blue-400">router</span> = express.<span className="text-emerald-300">Router</span>();<br/>
                                        <span className="text-slate-500">{"// Protected API Routes"}</span><br/>
                                        router.<span className="text-blue-400">get</span>(<span className="text-amber-300">'/api/v1/projects'</span>, protect, <span className="text-fuchsia-400">async</span> (req, res) =&gt; {'{'}<br/>
                                        &nbsp;&nbsp;<span className="text-fuchsia-400">const</span> projects = <span className="text-fuchsia-400">await</span> Project.<span className="text-blue-400">find</span>({'{'} user: req.user._id {'}'});<br/>
                                        &nbsp;&nbsp;res.<span className="text-emerald-300">status</span>(200).<span className="text-blue-400">json</span>(projects);<br/>
                                        {'}'});<br/><br/>
                                        <span className="text-slate-500">{"// Database Connection"}</span><br/>
                                        <span className="text-fuchsia-400">await</span> mongoose.<span className="text-blue-400">connect</span>(process.env.<span className="text-amber-300">MONGO_URI</span>);<br/>
                                        console.<span className="text-emerald-300">log</span>(<span className="text-amber-300">'MongoDB connected'</span>);
                                    </code>
                                </pre>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA FOOTER */}
            <section className="py-32 relative overflow-hidden z-10">
                <div className="max-w-4xl mx-auto px-6 text-center relative z-20">
                    <h2 className="text-5xl md:text-6xl font-display font-black mb-8 leading-tight tracking-tight">
                        Take control of your <br/>
                        <span className="text-primary">freelance business.</span>
                    </h2>
                    <p className="text-xl text-slate-400 mb-12 font-light max-w-2xl mx-auto">Stop guessing your hourly rate. Start measuring your success precisely and growing your revenue.</p>
                    
                    <div className="flex flex-center justify-center gap-6">
                        <Link to="/register" className="inline-flex items-center justify-center px-10 py-5 bg-primary text-white rounded-xl font-bold text-lg shadow-[0_0_30px_rgba(6,182,212,0.4)] hover:shadow-[0_0_50px_rgba(6,182,212,0.6)] transition-all hover:-translate-y-1">
                            Get Started Now
                        </Link>
                        <a href="https://github.com/bhashkar017/Freelance-Time-Tracker" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-dark-surface border border-dark-border text-white rounded-xl font-bold text-lg hover:border-slate-500 hover:bg-dark-surface/50 transition-all">
                            <Code2 className="w-6 h-6 text-slate-400" /> View on GitHub
                        </a>
                    </div>
                </div>
                
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl max-h-[400px] bg-primary/20 rounded-full blur-[150px] -z-10 pointer-events-none"></div>
            </section>
            
        </div>
    );
};

export default LandingPage;
