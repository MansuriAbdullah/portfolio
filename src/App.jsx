import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Cursor from './components/Cursor';
import ThreeBackground from './components/ThreeBackground';

function App() {
  return (
    <div className="bg-[#020617] min-h-screen relative selection:bg-gold-500 selection:text-white text-gray-300">
      <Cursor />
      <ThreeBackground />

      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <Skills />
          <Experience />
          <Projects />
          <Contact />
        </main>

        <footer className="bg-[#111827] text-white py-16 relative overflow-hidden">
          {/* Decorative Elements */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-blue via-brand-purple to-brand-pink"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-blue/5 rounded-full blur-[100px]"></div>

          <div className="container mx-auto px-6 relative z-10 flex flex-col items-center justify-center text-center">
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">Let's Build Something Amazing Together</h2>
            <p className="text-gray-400 max-w-lg mb-8 text-lg">
              Always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>

            <div className="flex gap-6 mb-12">
              {['Github', 'LinkedIn', 'Twitter', 'Email'].map((social, i) => (
                <a key={i} href="#" className="text-gray-400 hover:text-brand-blue transition-colors text-sm font-bold uppercase tracking-widest">
                  {social}
                </a>
              ))}
            </div>

            <div className="border-t border-gray-800 w-full pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 font-sans tracking-wide">
              <p>© {new Date().getFullYear()} Abdullah Mansuri. All rights reserved.</p>
              <p>Designed & Built with ❤️ using React</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
