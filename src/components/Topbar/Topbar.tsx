import { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import './index.css';

export const Topbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    // Animation pour la topbar
    const slideInAnimation = useSpring({
        from: { transform: 'translate3d(100%, 0, 0)' },
        transform: isOpen ? 'translate3d(0%, 0, 0)' : 'translate3d(100%, 0, 0)',
    });

    return (
        <div className="fixed top-0 left-0 w-full z-50 flex justify-between items-center">
            <span>Logo</span>
            <button onClick={() => setIsOpen(!isOpen)} className="z-50 md:text-5xl topbar-button">
                {isOpen ? '✖' : '☰'}
            </button>
            <animated.div style={slideInAnimation} className={`bg-black bg-opacity-20 w-screen fixed top-0 right-0 z-40  ${isOpen ? 'flex' : 'hidden'} md:flex flex-col md:flex-row items-start md:items-center justify-center p-10`}>
                {/* Contenu du menu */}
                <a href="#biography" className="text-white text-2xl hover:underline my-2 md:my-0 md:mx-2">Biography</a>
                <a href="#projects" className="text-white text-2xl hover:underline my-2 md:my-0 md:mx-2">Projects</a>
                <a href="#tools" className="text-white text-2xl hover:underline my-2 md:my-0 md:mx-2">Tools</a>
                <a href="#experiences" className="text-white text-2xl hover:underline my-2 md:my-0 md:mx-2">Experiences</a>
                <a href="#contact" className="text-white text-2xl hover:underline my-2 md:my-0 md:mx-2">Contact</a>
            </animated.div>
        </div>
    );
};
