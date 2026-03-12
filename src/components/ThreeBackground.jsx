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
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-30 mix-blend-soft-light"></div>

            {/* Dark Linear Gradient for Depth */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#020617]/50 to-[#020617]"></div>
        </div>
    );
};

export default ThreeBackground;
