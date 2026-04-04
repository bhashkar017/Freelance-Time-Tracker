import React from 'react';
import { Globe, Code2, Rocket, Heart, Mail, Phone } from 'lucide-react';
import developerPhoto from '../assets/Formalpic.jpg';

// Custom SVG Social Icons for a premium look
const LinkedInIcon = ({ className }) => (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
    </svg>
);

const GitHubIcon = ({ className }) => (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.041-1.412-4.041-1.412-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
    </svg>
);

const InstagramIcon = ({ className }) => (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
    </svg>
);

const SocialLink = ({ href, icon: Icon, label, colorClass }) => (
    <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`group flex items-center justify-center p-3 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-500/50 hover:bg-cyan-500/5 transition-all duration-300 shadow-lg hover:shadow-cyan-500/10 active:scale-95`}
        title={label}
    >
        <Icon className={`w-6 h-6 ${colorClass} group-hover:scale-110 transition-transform duration-300`} />
    </a>
);

const ContactItem = ({ icon: Icon, label, value, href }) => (
    <a 
        href={href}
        className="flex items-center gap-4 p-4 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-cyan-500/30 hover:bg-cyan-500/5 transition-all duration-300 group w-full"
    >
        <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400 group-hover:scale-110 transition-transform">
            <Icon className="w-5 h-5" />
        </div>
        <div className="flex flex-col text-left">
            <span className="text-[10px] uppercase tracking-widest text-slate-500 font-bold mb-0.5">{label}</span>
            <span className="text-sm text-slate-200 font-medium group-hover:text-white transition-colors">{value}</span>
        </div>
    </a>
);

const Developer = () => {
    const socialLinks = [
        {
            href: "https://www.linkedin.com/in/bhashkar017/",
            icon: LinkedInIcon,
            label: "LinkedIn",
            colorClass: "text-blue-400"
        },
        {
            href: "https://github.com/bhashkar017",
            icon: GitHubIcon,
            label: "GitHub",
            colorClass: "text-slate-100"
        },
        {
            href: "https://www.instagram.com/bhashkar017/",
            icon: InstagramIcon,
            label: "Instagram",
            colorClass: "text-pink-400"
        },
        {
            href: "https://bhashkar017.github.io/personal_portfolio/",
            icon: Globe,
            label: "Portfolio",
            colorClass: "text-cyan-400"
        }
    ];

    return (
        <div className="min-h-[90vh] flex items-center justify-center p-6 bg-[#0b0b14]">
            {/* Background decorative elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[120px] animate-pulse"></div>
                <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }}></div>
            </div>

            <div className="relative w-full max-w-2xl px-4 animate-slide-up">
                {/* Main Card with Obsidian Glass effect */}
                <div className="bg-[#131320]/80 backdrop-blur-3xl p-8 md:p-12 border border-white/5 rounded-[32px] relative overflow-hidden group shadow-2xl">
                    {/* Top Accent Line */}
                    <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"></div>

                    {/* Profile Section */}
                    <div className="flex flex-col items-center">
                        <div className="relative mb-10 group">
                            {/* Animated ring */}
                            <div className="absolute -inset-3 bg-gradient-to-tr from-cyan-500 to-blue-600 rounded-full opacity-20 group-hover:opacity-60 blur-xl transition-opacity duration-700"></div>
                            
                            <img 
                                src={developerPhoto} 
                                alt="Bhashkar" 
                                className="relative w-44 h-44 rounded-full object-cover border-4 border-white/10 shadow-2xl transition-all duration-700 group-hover:scale-[1.02] group-hover:border-cyan-500/30"
                            />
                            
                            <div className="absolute -bottom-1 -right-1 bg-cyan-500 p-2.5 rounded-full shadow-lg border-4 border-[#131320] group-hover:scale-110 transition-transform duration-500">
                                <Code2 className="w-5 h-5 text-white" />
                            </div>
                        </div>

                        <h1 className="text-5xl md:text-6xl font-black tracking-tight mb-3 text-white text-center">
                            Bhashkar
                        </h1>
                        <p className="text-cyan-400 font-bold tracking-[0.3em] text-xs uppercase mb-8 flex items-center gap-3">
                            <span className="w-2 h-[2px] bg-cyan-500/30"></span>
                            <Rocket className="w-4 h-4" />
                            Full Stack Developer
                            <span className="w-2 h-[2px] bg-cyan-500/30"></span>
                        </p>

                        <div className="max-w-md text-slate-400 text-center text-lg leading-relaxed mb-12 font-medium italic opacity-90">
                            "Passionate about building scalable solutions and crafting beautiful user experiences. 
                            Committed to continuous learning and innovation in the MERN stack."
                        </div>

                        {/* Social Buttons Container */}
                        <div className="flex gap-5 mb-10 text-center">
                            {socialLinks.map((link, index) => (
                                <a
                                    key={index}
                                    href={link.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group relative p-4 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-cyan-500/50 hover:bg-cyan-500/5 transition-all duration-500 shadow-xl"
                                    title={link.label}
                                >
                                    <link.icon className={`w-7 h-7 ${link.colorClass} group-hover:scale-110 transition-all duration-500 group-hover:drop-shadow-[0_0_8px_rgba(6,182,212,0.5)]`} />
                                </a>
                            ))}
                        </div>

                        {/* Contact Section */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full mb-12">
                            <ContactItem 
                                icon={Mail} 
                                label="Email" 
                                value="anandbhashkar2005@gmail.com" 
                                href="mailto:anandbhashkar2005@gmail.com"
                            />
                            <ContactItem 
                                icon={Phone} 
                                label="Phone" 
                                value="62992125502" 
                                href="tel:62992125502"
                            />
                        </div>

                        {/* Footer Section */}
                        <div className="w-full pt-10 border-t border-white/5 flex flex-col items-center">
                            <p className="font-['Brush_Script_MT'] text-5xl text-cyan-500 mb-4 opacity-80 select-none">
                                Bhashkar
                            </p>
                            <div className="flex items-center gap-3 text-slate-500 text-[11px] font-bold tracking-[0.2em] uppercase">
                                <span>Made with</span>
                                <Heart className="w-3.5 h-3.5 text-red-500/80 fill-red-500/20" />
                                <span>for modern web</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Brand Callout */}
                <div className="mt-10 text-center opacity-30 hover:opacity-60 transition-opacity duration-700 cursor-default">
                    <div className="flex items-center justify-center gap-4">
                        <span className="w-12 h-[1px] bg-gradient-to-r from-transparent to-slate-700"></span>
                        <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-slate-400">FreelanceTracker</span>
                        <span className="w-12 h-[1px] bg-gradient-to-l from-transparent to-slate-700"></span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Developer;

