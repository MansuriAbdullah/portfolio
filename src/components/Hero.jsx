import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Github, Linkedin, Mail, Zap, Layers } from 'lucide-react';

const Hero = () => {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-transparent pt-32 pb-20">
            <div className="container mx-auto px-6 relative z-10">
                {/* Main Bento Grid Collage */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[minmax(180px,auto)]">

                    {/* Big Intro Card (Main) */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="md:col-span-8 md:row-span-2 bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[3rem] p-12 flex flex-col justify-center relative overflow-hidden group shadow-2xl"
                    >
                        <div className="absolute top-0 right-0 w-64 h-64 bg-gold-400/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>

                        <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-gold-400/10 border border-gold-400/20 rounded-full mb-8 w-fit">
                            <span className="w-2 h-2 rounded-full bg-gold-400 animate-pulse"></span>
                            <span className="text-gold-400 font-bold text-xs uppercase tracking-widest">Available for hire</span>
                        </div>

                        <h1 className="text-6xl md:text-8xl font-serif font-black text-white leading-[1] mb-8 tracking-tighter">
                            Building <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 via-gold-500 to-gold-600">Digital Art.</span>
                        </h1>

                        <p className="text-xl md:text-2xl text-gray-400 font-light leading-relaxed max-w-xl mb-10">
                            Crafting pixel-perfect <span className="text-white font-medium">Full-stack Experiences</span> and decentralized solutions with a focus on aesthetics.
                        </p>

                        <div className="flex flex-wrap gap-4 mb-10">
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="px-10 py-5 bg-gold-500 text-[#020617] rounded-2xl font-black text-sm uppercase tracking-widest shadow-xl shadow-gold-500/20 flex items-center gap-3 transition-all"
                                onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                            >
                                Hire Me <ArrowRight size={18} />
                            </motion.button>
                            <div className="flex gap-4">
                                <motion.a
                                    href="mailto:mansuri7573@gmail.com"
                                    whileHover={{ scale: 1.1, backgroundColor: 'rgba(255,255,255,0.05)' }}
                                    className="p-5 border border-white/10 rounded-2xl text-white backdrop-blur-md flex items-center justify-center"
                                    title="Email Me"
                                >
                                    <Mail size={20} />
                                </motion.a>
                                <motion.a
                                    href="https://www.linkedin.com/in/abdullah-mansuri-b8a9681a0?utm_source=share_via&utm_content=profile&utm_medium=member_android"
                                    target="_blank"
                                    whileHover={{ scale: 1.1, backgroundColor: 'rgba(255,255,255,0.05)' }}
                                    className="p-5 border border-white/10 rounded-2xl text-white backdrop-blur-md flex items-center justify-center"
                                    title="LinkedIn Profile"
                                >
                                    <Linkedin size={20} />
                                </motion.a>
                                <motion.a
                                    href="/resume.pdf"
                                    download="Abdullah_Mansuri_Resume.pdf"
                                    whileHover={{ scale: 1.1, backgroundColor: 'rgba(255,255,255,0.05)' }}
                                    className="p-5 border border-white/10 rounded-2xl text-gold-400 backdrop-blur-md flex items-center justify-center gap-3 px-8"
                                    title="Download Resume"
                                >
                                    <Download size={20} />
                                    <span className="text-[10px] font-black uppercase tracking-widest hidden lg:inline">Resume</span>
                                </motion.a>
                            </div>
                        </div>
                    </motion.div>

                    {/* Profile Visual Card */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="md:col-span-4 md:row-span-2 relative group"
                    >
                        <div className="absolute inset-0 bg-gold-500/20 rounded-[3rem] blur-2xl group-hover:blur-3xl transition-all duration-500 -z-10"></div>
                        <div className="w-full h-full rounded-[3rem] border border-white/10 overflow-hidden relative shadow-2xl">
                            <img
                                src="/images/profile.jpg"
                                alt="Profile"
                                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent opacity-60"></div>
                            <div className="absolute bottom-8 left-8 right-8 text-white">
                                <p className="text-xs uppercase tracking-[0.3em] font-black text-gold-400 mb-1">Based in India</p>
                                <h3 className="text-3xl font-serif font-bold">Abdullah Mansuri</h3>
                            </div>
                        </div>
                    </motion.div>

                    {/* Quick Stats Cards */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="md:col-span-3 bg-white/5 backdrop-blur-xl border border-white/5 rounded-[2.5rem] p-8 flex flex-col justify-between hover:bg-white/10 transition-colors cursor-default group"
                    >
                        <div className="w-12 h-12 rounded-2xl bg-brand-blue/10 flex items-center justify-center text-brand-blue mb-6 group-hover:scale-110 transition-transform">
                            <Zap size={24} />
                        </div>
                        <div>
                            <p className="text-4xl font-serif font-black text-white mb-1">10+</p>
                            <p className="text-xs uppercase tracking-widest text-gray-500 font-bold">Projects Delivered</p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="md:col-span-3 bg-white/5 backdrop-blur-xl border border-white/5 rounded-[2.5rem] p-8 flex flex-col justify-between hover:bg-white/10 transition-colors cursor-default group"
                    >
                        <div className="w-12 h-12 rounded-2xl bg-brand-purple/10 flex items-center justify-center text-brand-purple mb-6 group-hover:scale-110 transition-transform">
                            <Layers size={24} />
                        </div>
                        <div>
                            <p className="text-4xl font-serif font-black text-white mb-1">4+</p>
                            <p className="text-xs uppercase tracking-widest text-gray-500 font-bold">Tech Stacks</p>
                        </div>
                    </motion.div>

                    {/* Tech Floating List Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        className="md:col-span-6 bg-[#0a0f1e]/50 backdrop-blur-3xl border border-white/5 rounded-[2.5rem] p-10 flex flex-col justify-center shadow-2xl overflow-hidden relative"
                    >
                        <div className="flex flex-wrap gap-4 relative z-10">
                            {['React', 'MERN', 'Web3', 'Python', 'Next.js', 'Tailwind'].map((tech) => (
                                <span key={tech} className="px-6 py-3 bg-white/5 border border-white/10 rounded-2xl text-xs font-bold text-gray-300 uppercase tracking-widest hover:border-gold-400/50 hover:text-gold-400 transition-all cursor-default">
                                    {tech}
                                </span>
                            ))}
                        </div>
                        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-brand-blue/10 rounded-full blur-[60px]"></div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default Hero;
