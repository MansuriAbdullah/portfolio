import React from 'react';
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
    { name: 'React.js', icon: Code2, color: 'text-blue-400', level: '95%', desc: 'Advanced component architecture & hooks.', bgImage: '/images/frontend_tech.png' },
    { name: 'Node.js', icon: Layers, color: 'text-green-400', level: '90%', desc: 'Full-stack delivery with Node & MongoDB.', bgImage: '/images/node_custom.png' },
    { name: 'Web3 / Solidity', icon: ShieldCheck, color: 'text-purple-400', level: '80%', desc: 'Smart contracts & Decentralized apps.', bgImage: '/images/web3_tech.png' },
    { name: 'Python', icon: Terminal, color: 'text-yellow-400', level: '85%', desc: 'Automation, data, and backend logic.', bgImage: '/images/python_custom.png' },
    { name: 'Django / Flask', icon: Box, color: 'text-red-400', level: '88%', desc: 'Robust backend frameworks and APIs.', bgImage: '/images/django_custom.png' },
    { name: 'MySQL / SQL', icon: Database, color: 'text-blue-500', level: '92%', desc: 'Relational database design & optimization.', bgImage: '/images/database_tech.png' },
    { name: 'MongoDB', icon: Database, color: 'text-green-500', level: '90%', desc: 'Scalable document-based data modeling.', bgImage: '/images/database_tech.png' },
    { name: 'REST APIs', icon: Globe, color: 'text-orange-400', level: '92%', desc: 'Scalable API architecture and integration.', bgImage: '/images/api_custom.png' },
    { name: 'HTML5 / CSS3', icon: Layout, color: 'text-pink-400', level: '98%', desc: 'Modern responsive design and styling.', bgImage: '/images/html_custom.png' },
    { name: 'Flutter', icon: Smartphone, color: 'text-blue-300', level: '85%', desc: 'Cross-platform mobile app development.', bgImage: '/images/mobile_tech.png' },
    { name: 'Postman', icon: Hexagon, color: 'text-orange-500', level: '95%', desc: 'Comprehensive API testing and docs.', bgImage: '/images/api_custom.png' },
    { name: 'Git / GitHub', icon: GitBranch, color: 'text-white', level: '94%', desc: 'Version control and team collaboration.', bgImage: '/images/github_custom.png' },
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

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-y-16 gap-x-8">
                    {skills.map((skill, index) => (
                        <div
                            key={index}
                            className="group flex flex-col items-center justify-center relative"
                        >
                            {/* The Floating Orb */}
                            <div className="relative w-28 h-28 sm:w-36 sm:h-36 mb-6">
                                {/* Rotating Glow Ring */}
                                <div className={`absolute inset-[-8px] rounded-full border-2 border-dashed border-current opacity-20 group-hover:opacity-100 group-hover:rotate-180 transition-all duration-[3000ms] ${skill.color}`}></div>
                                
                                {/* Inner Glass Orb */}
                                <div className="absolute inset-0 rounded-full overflow-hidden border border-white/10 shadow-[0_0_30px_rgba(255,255,255,0.05)] bg-[#0a0f1e]/40 backdrop-blur-xl group-hover:scale-110 transition-transform duration-500">
                                    <div 
                                        className="absolute inset-0 w-full h-full bg-cover bg-center opacity-60 group-hover:opacity-100 transition-opacity duration-500"
                                        style={{ backgroundImage: `url(${skill.bgImage})` }}
                                    ></div>
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                                    
                                    {/* Icon */}
                                    <skill.icon size={32} strokeWidth={1.5} className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ${skill.color} drop-shadow-[0_0_10px_currentColor] group-hover:scale-125 transition-transform duration-500`} />
                                </div>
                                
                                {/* Level Badge floating on orb */}
                                <div className="absolute -top-1 -right-1 bg-black/60 backdrop-blur-md border border-white/10 px-2 py-1 rounded-lg z-10">
                                    <span className="text-[9px] font-black text-gold-400 tracking-tighter">{skill.level}</span>
                                </div>
                            </div>

                            {/* Label & Info */}
                            <div className="text-center">
                                <h3 className="text-sm sm:text-base font-serif font-black text-white group-hover:text-gold-400 transition-colors uppercase tracking-[0.2em] mb-2">
                                    {skill.name}
                                </h3>
                                
                                <div className="w-12 h-0.5 bg-white/10 mx-auto rounded-full overflow-hidden mb-3 relative">
                                    <div style={{ width: skill.level }} className={`absolute top-0 left-0 h-full bg-current ${skill.color} drop-shadow-[0_0_5px_currentColor]`} />
                                </div>
                                
                                <p className="text-[10px] font-sans text-gray-400 font-medium leading-tight max-w-[120px] mx-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    {skill.desc}
                                </p>
                            </div>

                            {/* Decorative Radial Background */}
                            <div className={`absolute inset-0 w-48 h-48 opacity-0 group-hover:opacity-10 transition-opacity duration-700 blur-[60px] rounded-full bg-current ${skill.color} -z-10`}></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
