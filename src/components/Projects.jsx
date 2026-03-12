import React, { useRef } from 'react';
import { ExternalLink, Zap, Layers } from 'lucide-react';

const projects = [
    {
        title: "IVAMAX",
        category: "Web3 / Crypto",
        description: "A comprehensive Web3 platform built for decentralized finance, featuring MERN stack architecture integrated with Solidity smart contracts for secure blockchain interactions.",
        techStack: ["MERN Stack", "Solidity", "Web3.js", "Tailwind"],
        image: "/images/ivamax_bg.png",
        link: "https://ivamax-omega.vercel.app/"
    },
    {
        title: "REXTOKEN",
        category: "Web3 / Crypto",
        description: "A specialized cryptocurrency ecosystem focusing on tokenomics and decentralized exchange capabilities, powered by MERN stack and secure Solidity contracts.",
        techStack: ["MERN", "Solidity", "Smart Contracts", "Ethers.js"],
        image: "/images/rextoken_bg.png",
        link: "https://www.rextoken.in/"
    },
    {
        title: "Dhanik Coin",
        category: "Crypto / Fullstack",
        description: "A modern cryptocurrency web application featuring a clean UI, real-time crypto-style visuals, and responsive design focused on performance.",
        techStack: ["React", "MERN", "APIs", "Modern UI"],
        image: "/images/coding_bg_illuminated.png", // Placeholder
        link: "https://dhanik-coin.vercel.app/"
    },
    {
        title: "Shagun Lac Jewellery",
        category: "E-Commerce",
        description: "Premium imitation jewellery e-commerce website with elegant UI, product listings, and smooth navigation.",
        techStack: ["MERN Stack", "Responsive UI", "Animations"],
        image: "/images/shagun_lac_bg.png",
        link: "https://shagun-lac.vercel.app/"
    },
    {
        title: "Sana Fabrics",
        category: "Fabric / Textile",
        description: "High-end fabric and textile e-commerce platform featuring premium silk and cotton collections with a luxury boutique UI.",
        techStack: ["MERN", "Fabric Boutique UI", "Responsive"],
        image: "/images/sana_fabrics_bg.png",
        link: "https://sana-fabrics.vercel.app/"
    },
    {
        title: "Sona Dresses",
        category: "Fashion / E-Commerce",
        description: "Stylish fashion website for dresses and dupattas featuring clean design, smooth animations, and responsive layouts.",
        techStack: ["MERN", "CSS Animations", "Responsive"],
        image: "/images/sona_dresses_bg.png",
        link: "https://sona-dresses.vercel.app/"
    },
    {
        title: "Smart Seller",
        category: "Software / Dashboard",
        description: "Smart Seller management platform designed to help sellers manage products and workflows with a modern dashboard-style UI.",
        techStack: ["MERN", "Dashboard UI", "Full-Stack Logic"],
        image: "/images/smart_seller_bg.png",
        link: "https://smartseller.vercel.app/"
    },
    {
        title: "Baba Perfume",
        category: "Luxury E-Commerce",
        description: "Premium perfume e-commerce website featuring elegant UI, product showcases, and smooth user interactions.",
        techStack: ["MERN", "Full-Stack", "UI/UX"],
        image: "/images/baba_perfume_bg.png",
        link: "https://baba-perfumes.vercel.app/"
    }
];

const ProjectCard = ({ project, index }) => {
    const ref = useRef(null);

    return (
        <div
            ref={ref}
            className="group relative w-full rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl overflow-hidden hover:border-gold-400/30 transition-all duration-500 transform-gpu"
        >
            {/* Live Badge */}
            <div className="absolute top-4 right-4 z-30">
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-3 py-1 bg-black/50 backdrop-blur-md border border-white/10 rounded-full text-white text-[10px] font-bold shadow-sm hover:scale-105 transition-transform">
                    <span className="relative flex h-2 w-2">
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                    </span>
                    LIVE
                </a>
            </div>

            <div className="relative h-60 overflow-hidden rounded-t-3xl bg-[#020617]/50">
                {/* Scrolling Image Effect */}
                <div
                    className="w-full h-full bg-cover bg-top transition-[background-position] duration-[4000ms] ease-linear group-hover:bg-bottom"
                    style={{ backgroundImage: `url(${project.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent opacity-60" />
            </div>

            <div className="p-8 relative z-20 h-full">
                <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-bold text-gold-400 uppercase tracking-[0.2em] flex items-center gap-1.5">
                        <Zap size={10} className="text-gold-400" /> {project.category}
                    </span>
                    <a
                        href={project.link}
                        target="_blank"
                        className="p-2 bg-white/5 rounded-full border border-white/10 text-white hover:text-gold-400 hover:border-gold-400 transition-colors"
                    >
                        <ExternalLink size={16} />
                    </a>
                </div>

                <h3 className="text-2xl font-serif font-bold text-white mb-3 group-hover:text-gold-400 transition-colors">
                    {project.title}
                </h3>

                <p className="text-sm text-gray-400 leading-relaxed mb-6 line-clamp-3 min-h-[60px]">
                    {project.description}
                </p>

                <div className="space-y-6">
                    <div className="flex flex-wrap gap-2">
                        {project.techStack.map((tech, i) => (
                            <span
                                key={i}
                                className="px-2 py-1 bg-white/5 border border-white/10 text-gray-300 text-[9px] font-bold uppercase tracking-wider rounded-md"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>

                    <a
                        href={project.link}
                        target="_blank"
                        rel="noreferrer"
                        className="block w-full text-center py-4 rounded-2xl bg-gradient-to-r from-gold-500 to-gold-600 text-[#020617] font-bold text-sm shadow-xl shadow-gold-500/10 hover:shadow-gold-500/20 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
                    >
                        Explore Project
                    </a>
                </div>
            </div>
        </div>
    );
};

const Projects = () => {
    return (
        <section id="projects" className="py-32 relative overflow-hidden bg-transparent">
            {/* Background elements */}
            <div className="absolute -top-1/4 -right-1/4 w-[600px] h-[600px] bg-brand-blue/5 rounded-full blur-[150px] -z-10"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col items-center mb-24 text-center">
                    <div
                        className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full mb-6"
                    >
                        <Layers size={14} className="text-gold-400" />
                        <span className="text-gold-400 font-bold text-xs uppercase tracking-[0.2em]">Crafted Experience</span>
                    </div>

                    <h2
                        className="text-4xl md:text-7xl font-serif font-black text-white mb-8 tracking-tight"
                    >
                        Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 via-gold-500 to-gold-600">Creations</span>
                    </h2>

                    <p
                        className="text-gray-400 max-w-2xl text-lg md:text-xl font-light leading-relaxed mx-auto italic"
                    >
                        "Turning complex ideas into interactive, scalable digital reality."
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-14 perspective-2000">
                    {projects.map((project, index) => (
                        <ProjectCard key={index} project={project} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
