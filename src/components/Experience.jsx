import React from 'react';
import { Briefcase, GraduationCap, Calendar, MapPin, Building2 } from 'lucide-react';

const journeyData = [
    {
        title: "MERN Stack Developer",
        company: "Selinox",
        period: "2025 (6 Months)",
        type: "work",
        desc: "Developed and maintained scalable web applications using the MERN stack (MongoDB, Express.js, React, Node.js). Implemented complex business logic and optimized frontend performance for better user experience.",
        icon: Briefcase,
        color: "from-blue-500 to-cyan-500"
    },
    {
        title: "Python Backend Intern",
        company: "Aminsoftech LLP",
        period: "2023 - 2024",
        type: "work",
        desc: "Spearheaded eCommerce website backend development using Python/Django. Engineered secure auth flows and architected separate admin dashboard functionalities.",
        icon: Briefcase,
        color: "from-green-500 to-emerald-500"
    },
    {
        title: "Master of Computer Applications (MCA)",
        company: "GLS University",
        period: "Completed",
        type: "edu",
        desc: "Advanced studies in Computer Applications, focusing on Software Engineering, Data Architecture, and Enterprise Systems.",
        icon: GraduationCap,
        color: "from-purple-500 to-pink-500"
    },
    {
        title: "Post Graduate Diploma (PGDCA)",
        company: "GLS University",
        period: "Completed",
        type: "edu",
        desc: "Acquired strong foundation in programming, database management, and computer fundamentals.",
        icon: GraduationCap,
        color: "from-gold-500 to-orange-500"
    },
    {
        title: "Bachelor of Commerce (B.Com)",
        company: "Gujarat University",
        period: "Graduate",
        type: "edu",
        desc: "Developed analytical and commercial skills through comprehensive study of business and accounting.",
        icon: GraduationCap,
        color: "from-red-500 to-orange-500"
    }
];

const Experience = () => {
    return (
        <section id="experience" className="py-32 bg-transparent relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-full h-full opacity-[0.03] pointer-events-none -z-10 bg-cover bg-center" style={{ backgroundImage: 'url("/images/journey_bg.png")' }}></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold-400/5 rounded-full blur-[150px] -z-10"></div>
            
            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col items-center mb-32 text-center">
                    <div className="px-4 py-1.5 bg-gold-400/10 border border-gold-400/20 rounded-full mb-6">
                        <span className="text-gold-400 font-sans tracking-[0.3em] text-[10px] font-black uppercase">Professional Path</span>
                    </div>
                    <h2 className="text-4xl md:text-7xl font-serif text-white font-black tracking-tighter mb-8 italic">
                        Academic & <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 via-gold-500 to-gold-600">Experience</span>
                    </h2>
                    <p className="text-gray-500 max-w-xl text-lg font-light leading-relaxed font-sans italic">
                        &quot;A chronological evolution of my technical expertise and academic foundation.&quot;
                    </p>
                </div>

                <div className="max-w-5xl mx-auto relative">
                    {/* Center Line (hidden on small) */}
                    <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-white/10 hidden md:block"></div>

                    <div className="space-y-24">
                        {journeyData.map((item, index) => (
                            <div key={index} className={`relative flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                                {/* Connector Dot */}
                                <div className="absolute left-1/2 -translate-x-1/2 top-0 md:top-12 w-10 h-10 rounded-full bg-black border-2 border-white/10 z-20 hidden md:flex items-center justify-center">
                                    <div className={`w-3 h-3 rounded-full bg-gradient-to-br ${item.color} shadow-[0_0_15px_currentColor]`}></div>
                                </div>

                                {/* Content Card */}
                                <div className={`w-full md:w-[45%] group ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12 md:text-left'}`}>
                                    <div className="relative p-8 rounded-[2.5rem] bg-white/5 backdrop-blur-3xl border border-white/10 transition-all duration-500 hover:bg-white/10 hover:border-gold-400/30 group-hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)] cursor-default">
                                        <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${item.color} text-white mb-6 shadow-xl`}>
                                            <item.icon size={24} />
                                        </div>
                                        
                                        <div className={`flex flex-col mb-4 ${index % 2 === 0 ? 'md:items-end' : 'md:items-start'}`}>
                                            <span className="text-gold-400 text-[10px] font-black uppercase tracking-[0.3em] mb-2">{item.period}</span>
                                            <h3 className="text-2xl md:text-3xl font-serif font-black text-white leading-tight">{item.title}</h3>
                                        </div>

                                        <div className={`flex items-center gap-2 mb-6 text-gray-400 ${index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'}`}>
                                            <Building2 size={14} className="text-gold-400" />
                                            <h4 className="text-sm font-sans font-bold uppercase tracking-widest">{item.company}</h4>
                                        </div>

                                        <p className="text-gray-500 text-sm md:text-base leading-relaxed font-light font-sans group-hover:text-gray-300 transition-colors">
                                            {item.desc}
                                        </p>

                                        {/* Corner Decoration */}
                                        <div className={`absolute top-0 ${index % 2 === 0 ? 'right-0' : 'left-0'} p-4 opacity-5 pointer-events-none`}>
                                            <item.icon size={80} />
                                        </div>
                                    </div>
                                </div>
                                
                                {/* Spacer for the other side on desktop */}
                                <div className="hidden md:block md:w-[45%]"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
