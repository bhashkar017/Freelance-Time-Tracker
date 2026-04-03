import React, { Suspense } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Float, Sparkles, PerspectiveCamera } from '@react-three/drei';
import { 
    Clock, BarChart3, Shield, Layout, Server, Database,
    CheckCircle2, ArrowRight, Zap, Target, Lock,
    Code2, Terminal, Cpu
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
                    color="#4f46e5" 
                    emissive="#d946ef"
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
    return (
        <div className="bg-dark-bg text-white overflow-hidden font-sans min-h-screen">
            
            {/* Ambient Animated Background Grid */}
            <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#4f46e511_1px,transparent_1px),linear-gradient(to_bottom,#4f46e511_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none"></div>

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
                            <span className="text-sm font-semibold text-slate-300 tracking-wider">MERN 3.0 ARCHITECTURE</span>
                        </motion.div>
                        
                        <motion.h1 variants={fadeIn} className="text-6xl lg:text-8xl font-display font-black leading-[1.05] tracking-tight mb-8">
                            Master your <br/>
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-purple-400">
                                freelance time.
                            </span>
                        </motion.h1>
                        
                        <motion.p variants={fadeIn} className="text-xl text-slate-400 mb-10 leading-relaxed max-w-xl font-light">
                            The enterprise-grade platform for modern developers. Track hours effortlessly, generate dynamic reports, and scale your revenue with bank-level security.
                        </motion.p>
                        
                        <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-5">
                            <Link to="/register" className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white rounded-xl font-bold text-lg shadow-glow-primary hover:shadow-[0_0_40px_rgba(217,70,239,0.5)] hover:-translate-y-1 transition-all duration-300">
                                Start Building Free
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <Link to="/login" className="inline-flex items-center justify-center px-8 py-4 bg-dark-surface/50 backdrop-blur-md text-white border border-dark-border rounded-xl font-bold text-lg hover:border-slate-500 transition-all duration-300">
                                Sign In
                            </Link>
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
                            <pointLight position={[-10, -10, -5]} intensity={2} color="#d946ef" />
                            
                            <Suspense fallback={null}>
                                <FloatingAbstract />
                                <Sparkles count={200} scale={10} size={2} speed={0.4} color="#ec4899" opacity={0.5} />
                            </Suspense>
                            <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
                        </Canvas>
                    </motion.div>
                </div>
            </section>

            {/* PLATFORM FEATURES */}
            <section className="py-32 relative z-10 border-t border-dark-border bg-dark-surface/30">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-20">
                        <h2 className="text-sm font-bold text-primary tracking-widest uppercase mb-4">Core Platform</h2>
                        <h3 className="text-4xl md:text-5xl font-display font-bold text-white">Engineered for performance</h3>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            { icon: Clock, color: 'text-blue-400', bg: 'bg-blue-500/10', border: 'border-blue-500/20', title: 'Smart Time Tracking', desc: 'Frictionless stopwatch interface. Assign hours directly to specific clients and projects.' },
                            { icon: BarChart3, color: 'text-fuchsia-400', bg: 'bg-fuchsia-500/10', border: 'border-fuchsia-500/20', title: 'Earnings Analytics', desc: 'Real-time calculation of your billable rates mapped against tracked time. Beautiful charts.' },
                            { icon: Shield, color: 'text-emerald-400', bg: 'bg-emerald-500/10', border: 'border-emerald-500/20', title: 'Data Security', desc: 'JWT sessions and Bcrypt hashed credentials ensure your business data is absolutely secure.' },
                            { icon: Layout, color: 'text-amber-400', bg: 'bg-amber-500/10', border: 'border-amber-500/20', title: 'Client Management', desc: 'Maintain an organized database of clients and associated projects within a unified dashboard.' },
                            { icon: Zap, color: 'text-primary', bg: 'bg-primary/10', border: 'border-primary/20', title: 'Lightning Fast', desc: 'Built on a modern React 19 architecture. Page transitions and updates happen in milliseconds.' },
                            { icon: Target, color: 'text-rose-400', bg: 'bg-rose-500/10', border: 'border-rose-500/20', title: 'Goal Tracking', desc: 'Set and monitor your monthly freelance revenue targets against your actual tracked billables.' }
                        ].map((feature, i) => (
                            <motion.div 
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1, duration: 0.5 }}
                                className={`bg-dark-bg/60 backdrop-blur-sm p-8 rounded-3xl border ${feature.border} hover:bg-dark-surface transition-all group`}
                            >
                                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${feature.bg} ${feature.color} group-hover:scale-110 transition-transform duration-300`}>
                                    <feature.icon className="w-7 h-7" />
                                </div>
                                <h4 className="text-xl font-bold mb-3 font-display text-slate-100">{feature.title}</h4>
                                <p className="text-slate-400 leading-relaxed text-sm">{feature.desc}</p>
                            </motion.div>
                        ))}
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
                            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-3xl opacity-20 blur-xl"></div>
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
                                        console.<span className="text-emerald-300">log</span>(<span className="text-amber-300">'MongoDB connected to cluster'</span>);
                                    </code>
                                </pre>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* DEPLOYMENT */}
            <section className="py-24 bg-gradient-to-b from-dark-surface to-dark-bg relative z-10 border-t border-dark-border">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-sm font-bold text-primary tracking-widest uppercase mb-3">Deployment</h2>
                        <h3 className="text-3xl font-display font-bold">Cloud Infrastructure</h3>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            { title: 'MongoDB Atlas', desc: 'Global cloud database clustering.', icon: Database },
                            { title: 'Vercel Edge', desc: 'Global CDN for React frontend.', icon: Zap },
                            { title: 'Render', desc: 'Containerized Node.js API.', icon: Server }
                        ].map((item, i) => (
                            <div key={i} className="bg-dark-bg border border-dark-border p-6 rounded-2xl flex items-center gap-4">
                                <div className="w-12 h-12 rounded-xl bg-dark-surface flex items-center justify-center text-primary">
                                    <item.icon size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-white mb-1">{item.title}</h4>
                                    <p className="text-xs text-slate-400">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA FOOTER */}
            <section className="py-32 relative overflow-hidden z-10">
                <div className="max-w-4xl mx-auto px-6 text-center relative z-20">
                    <h2 className="text-5xl md:text-6xl font-display font-black mb-8 leading-tight tracking-tight">
                        Take control of your <br/>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">freelance business.</span>
                    </h2>
                    <p className="text-xl text-slate-400 mb-12 font-light max-w-2xl mx-auto">Stop guessing your hourly rate. Start measuring your success precisely and growing your revenue.</p>
                    
                    <div className="flex flex-col sm:flex-row justify-center gap-6">
                        <Link to="/register" className="inline-flex items-center justify-center px-10 py-5 bg-gradient-to-r from-primary to-secondary text-white rounded-xl font-bold text-lg shadow-[0_0_30px_rgba(79,70,229,0.4)] hover:shadow-[0_0_50px_rgba(217,70,239,0.6)] transition-all hover:-translate-y-1">
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
