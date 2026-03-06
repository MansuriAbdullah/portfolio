import React from 'react';
import { motion } from 'framer-motion';
import {
    Code2,
    Database,
    Globe,
    Layers,
    Layout,
    Cpu,
    Smartphone,
    GitBranch,
    Cloud,
    Terminal,
    Box,
    ShieldCheck,
    Hexagon
} from 'lucide-react';

const skills = [
    { name: 'React.js', icon: Code2, color: 'text-blue-400', level: '95%', desc: 'Advanced component architecture & hooks.', bgImage: '/images/skill_react.png' },
    { name: 'MERN Stack', icon: Layers, color: 'text-green-400', level: '90%', desc: 'Full-stack delivery with Node & MongoDB.', bgImage: '/images/skill_mern.png' },
    { name: 'Web3 / Solidity', icon: ShieldCheck, color: 'text-purple-400', level: '80%', desc: 'Smart contracts & Decentralized apps.', bgImage: '/images/skill_web3.png' },
    { name: 'Python', icon: Terminal, color: 'text-yellow-400', level: '85%', desc: 'Automation, data, and backend logic.', bgImage: '/images/skill_python.png' },
    { name: 'Django / Flask', icon: Box, color: 'text-red-400', level: '88%', desc: 'Robust backend frameworks and APIs.', bgImage: '/images/skill_db.png' },
    { name: 'MySQL / SQL', icon: Database, color: 'text-blue-500', level: '92%', desc: 'Relational database design & optimization.', bgImage: '/images/skill_db.png' },
    { name: 'MongoDB / NoSQL', icon: Database, color: 'text-green-500', level: '90%', desc: 'Scalable document-based data modeling.', bgImage: '/images/skill_db.png' },
    { name: 'REST APIs', icon: Globe, color: 'text-orange-400', level: '92%', desc: 'Scalable API architecture and integration.', bgImage: '/images/skill_db.png' },
    { name: 'HTML5 / CSS3', icon: Layout, color: 'text-pink-400', level: '98%', desc: 'Modern responsive design and styling.', bgImage: '/images/skill_react.png' },
    { name: 'Flutter', icon: Smartphone, color: 'text-blue-300', level: '85%', desc: 'Cross-platform mobile app development.', bgImage: '/images/skill_react.png' },
    { name: 'Postman', icon: Hexagon, color: 'text-orange-500', level: '95%', desc: 'Comprehensive API testing and docs.', bgImage: '/images/skill_db.png' },
    { name: 'Git / GitHub', icon: GitBranch, color: 'text-white', level: '94%', desc: 'Version control and team collaboration.', bgImage: '/images/skill_python.png' },
];

const Skills = () => {
    return (
        <section id="skills" className="py-24 relative overflow-hidden bg-transparent">
            {/* Dynamic background element */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-gold-400/5 rounded-full blur-[180px] -z-10"></div>

            <div className="container mx-auto px-6 relative z-10">

                <div className="flex flex-col items-center mb-24 text-center">
                    <span className="text-gold-400 font-sans tracking-[0.5em] text-xs font-black uppercase mb-4">Core Ecosystem</span>
                    <h2 className="text-4xl md:text-7xl font-serif text-white font-black mb-8 italic tracking-tighter">Technical Capabilities</h2>
                    <p className="text-gray-500 max-w-2xl text-lg font-light leading-relaxed">
                        A detailed breakdown of my technical arsenal, engineered for <br className="hidden md:block" />
                        <span className="text-white font-medium">performance, scalability, and impact</span>.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            whileHover={{ y: -10 }}
                            className="group relative p-8 bg-[#0a0f1e]/80 backdrop-blur-3xl border border-gold-400/20 rounded-[2.5rem] transition-all duration-500 cursor-pointer overflow-hidden shadow-2xl flex flex-col justify-between min-h-[400px]"
                        >
                            {/* AI Background Image with Overlay */}
                            <div
                                className="absolute inset-0 z-[-1] transition-transform duration-700 group-hover:scale-110"
                                style={{
                                    backgroundImage: skill.bgImage ? `url(${skill.bgImage})` : 'none',
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    opacity: 0.15
                                }}
                            />
                            <div className="absolute inset-0 bg-gradient-to-b from-[#0a0f1e]/80 to-[#0a0f1e] z-[-1] group-hover:opacity-60 transition-opacity duration-500" />

                            {/* Shiny Top Gradient */}
                            <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/5 to-transparent -z-10"></div>

                            {/* Dynamic Glow Background */}
                            <div className={`absolute -top-20 -right-20 w-40 h-40 opacity-0 group-hover:opacity-40 transition-opacity duration-700 blur-[80px] rounded-full bg-current ${skill.color}`}></div>

                            <div>
                                <div className="flex justify-between items-start mb-10 relative z-10">
                                    <div className={`p-5 rounded-[2rem] bg-black/40 backdrop-blur-md border border-white/10 shadow-inner ${skill.color}`}>
                                        <skill.icon size={42} strokeWidth={1} />
                                    </div>
                                    <div className="text-right">
                                        <p className="text-xs font-sans font-black text-gold-400 uppercase tracking-widest">{skill.level}</p>
                                        <div className="w-16 h-1 bg-white/10 rounded-full mt-2 overflow-hidden">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                whileInView={{ width: skill.level }}
                                                transition={{ duration: 1, delay: 0.5 }}
                                                className={`h-full bg-current ${skill.color}`}
                                            />
                                        </div>
                                    </div>
                                </div>

                                <h3 className="text-3xl font-serif font-black text-white mb-4 group-hover:text-gold-400 transition-colors relative z-10">
                                    {skill.name}
                                </h3>
                                <p className="text-sm font-sans font-medium text-gray-400 leading-relaxed mb-10 group-hover:text-white transition-colors italic relative z-10">
                                    &quot;{skill.desc}&quot;
                                </p>
                            </div>

                            <div className="mt-auto relative z-10">
                                <motion.button
                                    whileHover={{ scale: 1.02, backgroundColor: 'rgba(212, 175, 55, 0.1)' }}
                                    className="w-full py-4 border border-gold-400/30 rounded-2xl text-[10px] font-black text-gold-400 uppercase tracking-[0.3em] transition-all hover:border-gold-400 hover:shadow-[0_0_20px_rgba(245,158,11,0.3)] bg-black/20 backdrop-blur-sm"
                                >
                                    View Specifications
                                </motion.button>
                            </div>

                            {/* Decorative Edge Glow */}
                            <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-transparent via-gold-400 to-transparent opacity-30 group-hover:opacity-100 transition-opacity duration-500"></div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
