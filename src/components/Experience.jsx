import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
    return (
        <section id="experience" className="py-24 bg-transparent relative">
            <div className="container mx-auto px-6">
                <div className="flex flex-col items-center mb-24 text-center">
                    <span className="text-gold-400 font-sans tracking-widest text-sm font-bold uppercase mb-2">History</span>
                    <h2 className="text-4xl md:text-5xl font-serif text-white font-black">Professional & Academic Journey</h2>
                </div>

                <div className="max-w-4xl mx-auto border-l border-white/10 pl-10 ml-4 md:ml-0 space-y-16">
                    {/* Item 1: Selinox */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <span className="absolute -left-[49px] top-0 w-4 h-4 rounded-full bg-gold-400 shadow-[0_0_15px_rgba(245,158,11,0.5)] border-2 border-[#020617]"></span>
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6">
                            <h3 className="text-2xl font-serif font-bold text-white">MERN Stack Developer</h3>
                            <span className="text-xs font-sans font-black text-gold-400 uppercase tracking-widest bg-white/5 px-4 py-1.5 rounded-full border border-white/10 mt-2 sm:mt-0">2025 (6 Months)</span>
                        </div>
                        <h4 className="text-lg text-gray-400 mb-4 font-medium italic">Selinox</h4>
                        <p className="text-gray-500 leading-relaxed text-lg font-light">
                            Developed and maintained scalable web applications using the MERN stack (MongoDB, Express.js, React, Node.js). Implemented complex business logic and optimized frontend performance for better user experience.
                        </p>
                    </motion.div>

                    {/* Item 2: Aminsoftech */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <span className="absolute -left-[49px] top-0 w-4 h-4 rounded-full bg-white/20 border-2 border-[#020617]"></span>
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6">
                            <h3 className="text-2xl font-serif font-bold text-white">Python Backend Intern</h3>
                            <span className="text-xs font-sans font-black text-gold-400 uppercase tracking-widest bg-white/5 px-4 py-1.5 rounded-full border border-white/10 mt-2 sm:mt-0">2023 - 2024</span>
                        </div>
                        <h4 className="text-lg text-gray-400 mb-4 font-medium italic">Aminsoftech LLP</h4>
                        <p className="text-gray-500 leading-relaxed text-lg font-light">
                            Spearheaded eCommerce website backend development using Python/Django. Engineered secure auth flows and architected separate admin dashboard functionalities.
                        </p>
                    </motion.div>

                    {/* Item 3: MCA */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <span className="absolute -left-[49px] top-0 w-4 h-4 rounded-full bg-white/20 border-2 border-[#020617]"></span>
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6">
                            <h3 className="text-2xl font-serif font-bold text-white">Master of Computer Applications (MCA)</h3>
                            <span className="text-xs font-sans font-black text-gold-400 uppercase tracking-widest bg-white/5 px-4 py-1.5 rounded-full border border-white/10 mt-2 sm:mt-0">Completed</span>
                        </div>
                        <h4 className="text-lg text-gray-400 mb-4 font-medium italic">GLS University</h4>
                        <p className="text-gray-500 leading-relaxed text-lg font-light">
                            Advanced studies in Computer Applications, focusing on Software Engineering, Data Architecture, and Enterprise Systems.
                        </p>
                    </motion.div>

                    {/* Item 4: PGDCA */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <span className="absolute -left-[49px] top-0 w-4 h-4 rounded-full bg-white/20 border-2 border-[#020617]"></span>
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6">
                            <h3 className="text-2xl font-serif font-bold text-white">Post Graduate Diploma in Computer Applications</h3>
                            <span className="text-xs font-sans font-black text-gold-400 uppercase tracking-widest bg-white/5 px-4 py-1.5 rounded-full border border-white/10 mt-2 sm:mt-0">Completed</span>
                        </div>
                        <h4 className="text-lg text-gray-400 mb-4 font-medium italic">GLS University</h4>
                        <p className="text-gray-500 leading-relaxed text-lg font-light">
                            Acquired strong foundation in programming, database management, and computer fundamentals.
                        </p>
                    </motion.div>

                    {/* Item 5: B.Com */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <span className="absolute -left-[49px] top-0 w-4 h-4 rounded-full bg-white/20 border-2 border-[#020617]"></span>
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6">
                            <h3 className="text-2xl font-serif font-bold text-white">Bachelor of Commerce (B.Com)</h3>
                            <span className="text-xs font-sans font-black text-gold-400 uppercase tracking-widest bg-white/5 px-4 py-1.5 rounded-full border border-white/10 mt-2 sm:mt-0">Graduate</span>
                        </div>
                        <h4 className="text-lg text-gray-400 mb-4 font-medium italic">Gujarat University</h4>
                        <p className="text-gray-500 leading-relaxed text-lg font-light">
                            Developed analytical and commercial skills through comprehensive study of business and accounting.
                        </p>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default Experience;
