import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

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
        <motion.div
            className={`flex fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference justify-center items-center rounded-full border border-gold-400/50 transition-all duration-300 ease-out`}
            animate={{
                x: position.x - (hovered ? 24 : 8),
                y: position.y - (hovered ? 24 : 8),
                width: hovered ? 48 : 16,
                height: hovered ? 48 : 16,
                backgroundColor: hovered ? 'rgba(245, 158, 11, 0.2)' : 'rgba(245, 158, 11, 0)',
                borderColor: hovered ? 'rgba(245, 158, 11, 0.1)' : 'rgba(245, 158, 11, 0.8)'
            }}
            transition={{
                type: "tween",
                ease: "backOut",
                duration: 0.2
            }}
        >
            <div className={`rounded-full bg-gold-400 transition-all duration-300 ${hovered ? 'w-2 h-2' : 'w-1.5 h-1.5'}`} />
        </motion.div>
    );
};

export default Cursor;
