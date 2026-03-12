import React, { useEffect, useState } from 'react';

const Cursor = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [hovered, setHovered] = useState(false);

    useEffect(() => {
        const moveCursor = (e) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };

        const handleMouseOver = (e) => {
            if (e.target.tagName === 'A' || e.target.tagName === 'BUTTON' || e.target.closest('.cursor-hover')) {
                setHovered(true);
            } else {
                setHovered(false);
            }
        };

        window.addEventListener('mousemove', moveCursor);
        window.addEventListener('mouseover', handleMouseOver);

        return () => {
            window.removeEventListener('mousemove', moveCursor);
            window.removeEventListener('mouseover', handleMouseOver);
        };
    }, []);

    return (
        <div
            className={`flex fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference justify-center items-center rounded-full border transition-all duration-200 ease-out`}
            style={{
                transform: `translate(${position.x}px, ${position.y}px) translate(-50%, -50%)`,
                width: hovered ? '48px' : '16px',
                height: hovered ? '48px' : '16px',
                backgroundColor: hovered ? 'rgba(245, 158, 11, 0.2)' : 'rgba(245, 158, 11, 0)',
                borderColor: hovered ? 'rgba(245, 158, 11, 0.1)' : 'rgba(245, 158, 11, 0.8)'
            }}
        >
            <div className={`rounded-full bg-gold-400 transition-all duration-200 ${hovered ? 'w-2 h-2' : 'w-1.5 h-1.5'}`} />
        </div>
    );
};

export default Cursor;
