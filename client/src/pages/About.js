import React from 'react';

const About = () => {
    return (
        <div className="min-h-screen bg-dark-bg text-white pt-32 pb-24 px-6 relative overflow-hidden">
            {/* Ambient Background */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-[400px] bg-primary/20 blur-[120px] rounded-full pointer-events-none -z-10"></div>
            
            <div className="max-w-4xl mx-auto">
                <h1 className="text-5xl font-display font-black text-center mb-16 tracking-tight">About <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Us</span></h1>

            <div className="bg-dark-surface/50 backdrop-blur-sm border border-dark-border p-8 rounded-3xl mb-8 hover:bg-dark-surface transition-colors">
                <h2 className="text-2xl font-bold text-primary mb-4">Our Mission</h2>
                <p className="text-slate-400 leading-relaxed text-lg">
                    Freelancing is hard. Tracking time shouldn't be. <br /><br />
                    We built <strong className="text-white">FreelanceTracker</strong> to give developers, designers, and consultants a powerful, distraction-free tool to manage their businesses.
                    Our goal is to help you stop worrying about admin work and focus on what you do best: <strong className="text-white">Creating.</strong>
                </p>
            </div>

            <div className="bg-dark-surface/50 backdrop-blur-sm border border-dark-border p-8 rounded-3xl hover:bg-dark-surface transition-colors">
                <h2 className="text-2xl font-bold text-secondary mb-4">Who We Are</h2>
                <p className="text-slate-400 leading-relaxed text-lg">
                    We are a team of passionate MERN stack developers dedicated to building high-quality, scalable web applications.
                    This project was born out of a need for a simple, yet robust time tracking solution that didn't feel like a corporate spreadsheet.
                </p>
            </div>
            </div>
        </div>
    );
};

export default About;
