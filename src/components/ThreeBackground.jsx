import React from 'react';
const ThreeBackground = () => {
    return (
        <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-[#020617]">
            {/* Background Image with Lower Opacity */}
            <div
                className="absolute inset-0 opacity-20 mix-blend-overlay scale-110"
                style={{
                    backgroundImage: 'url("/images/coding_bg_illuminated.png")',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    filter: 'grayscale(100%) brightness(0.5)'
                }}
            />

            {/* Premium Gradient Orbs */}
            <div
                className="absolute top-[-15%] left-[-10%] w-[600px] h-[600px] bg-blue-600/30 rounded-full blur-[120px]"
            />
            <div
                className="absolute bottom-[-15%] right-[-10%] w-[700px] h-[700px] bg-purple-600/20 rounded-full blur-[140px]"
            />
            <div
                className="absolute top-[30%] left-[25%] w-[400px] h-[400px] bg-pink-600/15 rounded-full blur-[100px]"
            />

            {/* Dynamic Grid Overlay */}
            <div 
                className="absolute inset-0 opacity-25 mix-blend-soft-light"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
                }}
            ></div>

            {/* Dark Linear Gradient for Depth */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#020617]/50 to-[#020617]"></div>
        </div>
    );
};

export default ThreeBackground;
