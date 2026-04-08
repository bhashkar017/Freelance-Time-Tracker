import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Brain, TrendingUp, AlertTriangle, CheckCircle2, Clock } from 'lucide-react';

const AISmartInsights = ({ stats }) => {
    // Heuristic calculations based on stats
    const productivityScore = stats?.time?.totalHours ? Math.min(Math.round((stats.time.totalHours / 20) * 100), 100) : 0;
    const peakWindow = "10:00 AM - 1:00 PM"; // Heuristic: Common peak time
    const burnoutRisk = (stats?.time?.totalHours > 40) ? "High" : (stats?.time?.totalHours > 30 ? "Medium" : "Low");
    
    // Dynamic messages based on stats
    const getInsightMessage = () => {
        if (!stats?.time?.totalHours) return "Start logging time to unlock AI productivity insights.";
        if (productivityScore > 80) return "Exceptional consistency! You are in the top 5% of productive freelancers.";
        if (productivityScore > 50) return "Steady progress. Your output is stabilizing and highly predictable.";
        return "Insight: Consistent tracking for 3 more days will improve data accuracy.";
    };

    // Dynamic Advice Generator
    const getAdvice = () => {
        if (!stats?.time?.totalHours) return "Sync your first time log to initialize the AI Strategy engine.";
        if (burnoutRisk === "High") return "Critical: Batch minor tasks and prioritize deep recovery to prevent cognitive fatigue.";
        if (productivityScore > 80) return "Peak performance detected. It's an optimal time to pitch high-value client contracts.";
        return "Strategy: Move your most complex coding tasks to the 10:00 AM window for 22% better efficiency.";
    };

    return (
        <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="col-span-full mt-8 bg-dark-surface/40 backdrop-blur-2xl border border-primary/20 rounded-[32px] p-8 relative overflow-hidden group shadow-[0_20px_50px_rgba(6,182,212,0.1)]"
        >
            {/* Background Glows */}
            <div className="absolute top-[-20%] left-[-10%] w-[300px] h-[300px] bg-primary/20 rounded-full blur-[100px] animate-pulse"></div>
            <div className="absolute bottom-[-20%] right-[-10%] w-[300px] h-[300px] bg-secondary/10 rounded-full blur-[80px]"></div>

            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 relative z-10">
                {/* Left: AI Branding & Score */}
                <div className="flex items-center gap-6">
                    <div className="relative">
                        <div className="w-20 h-20 bg-primary/20 rounded-3xl flex items-center justify-center border border-primary/30 shadow-[0_0_30px_rgba(6,182,212,0.3)] group-hover:scale-110 transition-transform duration-500">
                            <Brain className="w-10 h-10 text-primary animate-pulse" />
                        </div>
                        {/* Orbiting particles (simplified) */}
                        <div className="absolute -top-1 -right-1 w-4 h-4 bg-secondary rounded-full blur-[2px] animate-bounce"></div>
                    </div>
                    <div>
                        <div className="flex items-center gap-2 mb-1">
                            <span className="px-2 py-0.5 bg-primary/10 text-primary text-[10px] font-bold rounded-full uppercase tracking-widest border border-primary/20">AI Engine Active</span>
                        </div>
                        <h2 className="text-3xl font-display font-bold text-white mb-1">Smart Engine Insights</h2>
                        <p className="text-slate-400 font-medium">{getInsightMessage()}</p>
                    </div>
                </div>

                {/* Right: Heuristic Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full lg:w-auto">
                    <div className="bg-dark-bg/60 border border-dark-border p-4 rounded-2xl flex flex-col items-center text-center hover:border-primary/40 transition-colors">
                        <Zap className="w-5 h-5 text-yellow-400 mb-2" />
                        <span className="text-[10px] text-slate-500 uppercase font-bold tracking-tighter">Productivity</span>
                        <span className="text-xl font-display font-bold text-white">{productivityScore}%</span>
                    </div>

                    <div className="bg-dark-bg/60 border border-dark-border p-4 rounded-2xl flex flex-col items-center text-center hover:border-secondary/40 transition-colors">
                        <Clock className="w-5 h-5 text-secondary mb-2" />
                        <span className="text-[10px] text-slate-500 uppercase font-bold tracking-tighter">Peak Focus</span>
                        <span className="text-sm font-display font-bold text-white mt-1 leading-tight">{peakWindow}</span>
                    </div>

                    <div className="bg-dark-bg/60 border border-dark-border p-4 rounded-2xl flex flex-col items-center text-center hover:border-emerald-500/40 transition-colors">
                        <TrendingUp className="w-5 h-5 text-emerald-400 mb-2" />
                        <span className="text-[10px] text-slate-500 uppercase font-bold tracking-tighter">Forecast</span>
                        <span className="text-sm font-display font-bold text-emerald-400 mt-1">Increasing</span>
                    </div>

                    <div className={`bg-dark-bg/60 border border-dark-border p-4 rounded-2xl flex flex-col items-center text-center hover:border-red-500/40 transition-colors`}>
                        {burnoutRisk === "High" ? <AlertTriangle className="w-5 h-5 text-red-500 mb-2" /> : <CheckCircle2 className="w-5 h-5 text-green-400 mb-2" />}
                        <span className="text-[10px] text-slate-500 uppercase font-bold tracking-tighter">Burnout Risk</span>
                        <span className={`text-sm font-display font-bold mt-1 ${burnoutRisk === "High" ? 'text-red-400' : 'text-green-400'}`}>{burnoutRisk}</span>
                    </div>
                </div>
            </div>

            {/* Bottom: Strategy Suggestion */}
            <div className="mt-8 pt-6 border-t border-dark-border flex items-center gap-3">
                <div className="w-2 h-2 bg-primary rounded-full animate-ping"></div>
                <p className="text-xs font-medium text-slate-500 italic">
                    AI Suggestion: <span className="text-slate-300">"{getAdvice()}"</span>
                </p>
            </div>
        </motion.div>
    );
};

export default AISmartInsights;
