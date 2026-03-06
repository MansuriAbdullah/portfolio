import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navVariants = {
        hidden: { y: -100, opacity: 0 },
        visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } }
    };

    return (
        <motion.nav
            variants={navVariants}
            initial="hidden"
            animate="visible"
            className={`fixed w-full z-50 flex justify-center transition-all duration-500 ${scrolled ? 'pt-6' : 'pt-10'}`}
        >
            <div className={`
                relative flex justify-between items-center px-10 py-5 rounded-[2.5rem] transition-all duration-700
                ${scrolled
                    ? 'w-[90%] md:w-[70%] bg-white/5 backdrop-blur-3xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)]'
                    : 'w-[95%] bg-transparent border-transparent'}
            `}>

                {/* Logo */}
                <Link to="home" smooth={true} duration={500} className="text-2xl font-serif font-black tracking-tighter cursor-pointer text-white group">
                    AM<span className="text-gold-400 group-hover:animate-ping inline-block">.</span>
                </Link>

                {/* Desktop Menu */}
                <motion.div className="hidden md:flex gap-12 items-center">
                    {['Home', 'Skills', 'Experience', 'Projects', 'Contact'].map((item) => (
                        <Link
                            key={item}
                            to={item.toLowerCase()}
                            smooth={true}
                            duration={500}
                            className="text-[10px] font-sans font-black uppercase tracking-[0.3em] transition-all cursor-pointer relative group text-gray-500 hover:text-white"
                        >
                            {item}
                            <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-1 bg-gold-400 rounded-full transition-all group-hover:w-1"></span>
                        </Link>
                    ))}
                    <motion.a
                        href="/resume.pdf"
                        download="Abdullah_Mansuri_Resume.pdf"
                        whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(245, 158, 11, 0.3)' }}
                        whileTap={{ scale: 0.95 }}
                        className="px-8 py-3 bg-white/5 border border-white/10 text-gold-400 rounded-2xl font-sans text-[10px] font-black uppercase tracking-[0.3em] transition-all duration-300 hover:bg-gold-400 hover:text-[#020617] hover:border-gold-400 flex items-center justify-center"
                    >
                        Resume
                    </motion.a>
                </motion.div>

                {/* Mobile Toggle */}
                <div className="md:hidden cursor-pointer text-white p-2 bg-white/5 rounded-xl border border-white/10" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X size={20} /> : <Menu size={20} />}
                </div>

                {/* Mobile Menu Dropdown */}
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        className="absolute top-full left-0 mt-6 w-full bg-[#020617]/90 backdrop-blur-3xl rounded-[2.5rem] border border-white/10 p-12 shadow-3xl md:hidden"
                    >
                        <div className="flex flex-col gap-10 items-center">
                            {['Home', 'Skills', 'Experience', 'Projects', 'Contact'].map((item) => (
                                <Link
                                    key={item}
                                    to={item.toLowerCase()}
                                    smooth={true}
                                    duration={500}
                                    onClick={() => setIsOpen(false)}
                                    className="text-gray-400 hover:text-gold-400 font-serif text-3xl font-black cursor-pointer transition-colors"
                                >
                                    {item}
                                </Link>
                            ))}
                        </div>
                    </motion.div>
                )}
            </div>
        </motion.nav>
    );
};

export default Navbar;
