
import React from 'react';
import { motion } from 'framer-motion';

interface LogoProps {
    variant?: 'default' | 'light' | 'dark';
    size?: 'sm' | 'md' | 'lg';
}

export const Logo: React.FC<LogoProps> = ({ variant = 'default', size = 'md' }) => {

    const primaryColor = variant === 'light' ? '#1d4ed8' : variant === 'dark' ? '#000000' : '#1d4ed8';

    const fontSize = {
        sm: 'text-lg',
        md: 'text-xl',
        lg: 'text-2xl',
    }[size];


    const logoAnimation = {
        hidden: {
            opacity: 0,
            scale: 0.9,
            y: 10
        },
        visible: {
            opacity: 1,
            scale: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };

    return (
        <motion.div
            className="flex items-center"
            initial="hidden"
            animate="visible"
            variants={logoAnimation}
        >
            <div className={`font-sans font-bold tracking-tight ${fontSize}`}>
                <span className="text-freek-black dark:text-white">Freek</span>
                <span className='bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 animate-gradient shadow-xs'>Code</span>
            </div>
        </motion.div>
    );
};

