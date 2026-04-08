import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';

const features = [
    {
        title: "Heuristic Strategy Engine",
        desc: "Advanced logic processing for real-time productivity scoring and burnout forecasting.",
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1200", 
        tag: "Core AI"
    },
    {
        title: "Neural Financial Maps",
        desc: "Visualizing complex revenue streams with automated high-growth pattern recognition.",
        image: "https://images.unsplash.com/photo-1551288049-bbda38a5fbd7?auto=format&fit=crop&q=80&w=1200", 
        tag: "Analytics"
    },
    {
        title: "Quantum Security Shell",
        desc: "Stateless JWT authentication paired with salt-rounds Bcrypt for unbreakable sessions.",
        image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1200",
        tag: "Security"
    },
    {
        title: "Global Cloud Sync",
        desc: "Zero-latency data persistence across distributed MongoDB Atlas nodes worldwide.",
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1200",
        tag: "Infrastructure"
    },
    {
        title: "Obsidian Mobile Core",
        desc: "Fully responsive liquid layouts optimized for high-performance touch interaction.",
        image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=1200",
        tag: "Responsive"
    },
    {
        title: "Next-Gen Data Flow",
        desc: "Optimized REST API structures for sub-100ms response times and gzipped payloads.",
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc48?auto=format&fit=crop&q=80&w=1200",
        tag: "Performance"
    }
];

const FeatureCarousel = () => {
    const [index, setIndex] = useState(0);
    const [direction, setDirection] = useState(0);

    const nextStep = () => {
        setDirection(1);
        setIndex((prev) => (prev + 1) % features.length);
    };

    const prevStep = () => {
        setDirection(-1);
        setIndex((prev) => (prev - 1 + features.length) % features.length);
    };

    useEffect(() => {
        const timer = setInterval(nextStep, 6000);
        return () => clearInterval(timer);
    }, []);

    const variants = {
        enter: (direction) => ({
            x: direction > 0 ? 500 : -500,
            opacity: 0,
            scale: 0.95
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1,
            scale: 1,
            transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
        },
        exit: (direction) => ({
            zIndex: 0,
            x: direction < 0 ? 500 : -500,
            opacity: 0,
            scale: 0.95,
            transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
        })
    };

    return (
        <div className="relative w-full py-20">
            <div className="max-w-6xl mx-auto px-6 relative h-[600px] md:h-[750px]">
                <AnimatePresence initial={false} custom={direction} mode="wait">
                    <motion.div
                        key={index}
                        custom={direction}
                        variants={variants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        className="absolute inset-0 flex flex-col items-center justify-center"
                    >
                        {/* Text Content */}
                        <div className="text-center mb-12">
                            <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/20 border border-primary/30 rounded-full text-[10px] font-bold text-primary uppercase tracking-widest mb-4">
                                <Sparkles size={10} /> {features[index].tag}
                            </div>
                            <h4 className="text-4xl md:text-6xl font-display font-black text-white mb-4 tracking-tighter shadow-sm">
                                {features[index].title}
                            </h4>
                            <p className="text-slate-400 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto font-light italic">
                                "{features[index].desc}"
                            </p>
                        </div>

                        {/* Image Stage */}
                        <div className="relative w-full max-w-5xl aspect-[16/9] rounded-[40px] overflow-hidden border border-white/5 bg-dark-bg/40 backdrop-blur-3xl shadow-3xl">
                            <motion.img 
                                key={features[index].image}
                                src={features[index].image} 
                                alt={features[index].title}
                                className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-transparent to-transparent opacity-60"></div>
                            
                            {/* Animated Scanner Effect */}
                            <motion.div 
                                className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent w-1/2 h-full skew-x-12"
                                animate={{ x: ['-100%', '200%'] }}
                                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                            />
                        </div>
                    </motion.div>
                </AnimatePresence>

                {/* Permanent Manual Navigation */}
                <div className="absolute top-[65%] md:top-1/2 left-0 right-0 -translate-y-1/2 flex justify-between px-2 md:-px-16 z-20 pointer-events-none">
                    <button 
                        onClick={prevStep}
                        className="w-14 h-14 md:w-20 md:h-20 bg-dark-surface border border-white/10 text-white rounded-3xl flex items-center justify-center hover:bg-primary transition-all pointer-events-auto shadow-2xl active:scale-95"
                    >
                        <ChevronLeft size={32} />
                    </button>
                    <button 
                        onClick={nextStep}
                        className="w-14 h-14 md:w-20 md:h-20 bg-dark-surface border border-white/10 text-white rounded-3xl flex items-center justify-center hover:bg-primary transition-all pointer-events-auto shadow-2xl active:scale-95"
                    >
                        <ChevronRight size={32} />
                    </button>
                </div>

                {/* Dot Navigation */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-4 z-20">
                    {features.map((_, i) => (
                        <button 
                            key={i}
                            onClick={() => {
                                setDirection(i > index ? 1 : -1);
                                setIndex(i);
                            }}
                            className={`h-2.5 rounded-full transition-all duration-500 ${i === index ? 'w-12 bg-primary shadow-glow-primary' : 'w-2.5 bg-slate-800 hover:bg-slate-700'}`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FeatureCarousel;
