import React, { useEffect, useState } from 'react';
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

    return (
        <nav
            className={`fixed w-full z-50 flex justify-center transition-all duration-500 ${scrolled ? 'pt-6' : 'pt-10'}`}
        >
            <div className={`
                relative flex justify-between items-center px-6 md:px-10 py-5 rounded-[2.5rem] transition-all duration-700
                ${scrolled
                    ? 'w-[90%] md:w-[70%] bg-white/5 backdrop-blur-3xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)]'
                    : 'w-[95%] bg-transparent border-transparent'}
            `}>

                {/* Logo */}
                <Link to="home" smooth={true} duration={500} className="text-2xl font-serif font-black tracking-tighter cursor-pointer text-white group">
                    AM<span className="text-gold-400 inline-block">.</span>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex gap-12 items-center">
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
                    <a
                        href="/resume.pdf"
                        download="Abdullah_Mansuri_Resume.pdf"
                        className="px-8 py-3 bg-white/5 border border-white/10 text-gold-400 rounded-2xl font-sans text-[10px] font-black uppercase tracking-[0.3em] transition-all duration-300 hover:bg-gold-400 hover:text-[#020617] hover:border-gold-400 hover:scale-105 flex items-center justify-center"
                    >
                        Resume
                    </a>
                </div>

                {/* Mobile Toggle */}
                <div className="md:hidden cursor-pointer text-white p-2 bg-white/5 rounded-xl border border-white/10" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X size={20} /> : <Menu size={20} />}
                </div>

                {/* Mobile Menu Dropdown */}
                {isOpen && (
                    <div
                        className="absolute top-full left-0 mt-6 w-full bg-[#020617]/95 backdrop-blur-3xl rounded-[2.5rem] border border-white/10 p-10 sm:p-12 shadow-3xl md:hidden z-[100]"
                    >
                        <div className="flex flex-col gap-8 items-center w-full">
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
                            <div className="w-full border-t border-white/10 pt-6 mt-2 flex justify-center">
                                <a
                                    href="/resume.pdf"
                                    download="Abdullah_Mansuri_Resume.pdf"
                                    className="w-full max-w-[250px] text-center px-6 py-4 bg-white/5 border border-white/10 text-gold-400 rounded-2xl font-sans text-xs font-black uppercase tracking-[0.2em] transition-all duration-300 hover:bg-gold-400 hover:text-[#020617] hover:border-gold-400"
                                >
                                    Download Resume
                                </a>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
