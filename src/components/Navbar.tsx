// src/components/Navbar.tsx
import React, { useRef, useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
    const location = useLocation();
    const links = [
        { path: '/', label: 'index' },
        { path: '/radio', label: 'radio' },
        { path: '/gigs', label: 'gigs' },
        { path: '/music-projects', label: 'music projects' },
        { path: '/about-me', label: 'about me' },
    ];

    const [highlightPosition, setHighlightPosition] = useState(0);
    const [highlightWidth, setHighlightWidth] = useState(0);
    const linkRefs = useRef<(HTMLAnchorElement | null)[]>([]);

    useEffect(() => {
        const activeIndex = links.findIndex(link => link.path === location.pathname);
        if (linkRefs.current[activeIndex]) {
            const { offsetLeft, offsetWidth } = linkRefs.current[activeIndex];
            setHighlightPosition(offsetLeft + offsetWidth); // Position at the end of the active link
            setHighlightWidth(1); // Fixed width for the highlight
        }
    }, [location.pathname, links]);

    return (
        <div className="flex flex-col">
            <nav className="fixed top-1 left-0 w-full bg-black text-green-500 p-4 flex justify-center z-10">
                <div className="relative flex items-center">
                    <span
                        className="absolute transition-all duration-300 bg-green-500 opacity-100 h-6"
                        style={{
                            left: `${highlightPosition}px`,
                            width: `${highlightWidth}px`,
                            borderRadius: '5px',
                        }}
                    />
                    {links.map((link, index) => (
                        <NavLink
                            key={link.path}
                            to={link.path}
                            ref={el => (linkRefs.current[index] = el)}
                            className={({ isActive }) =>
                                `transition-colors duration-300 hover:text-white flex items-center mx-4 ${isActive ? 'text-green-500 font-bold' : ''}`
                            }
                        >
                            {link.label}
                            <span className={`blinking-highlight ${location.pathname === link.path ? 'active' : ''}`}>
                                &nbsp;
                            </span>
                        </NavLink>
                    ))}
                </div>
            </nav>


            <div className="fixed top-[60px] left-0 w-full h-0.5 bg-green-900 z-10" />
        </div>
    );
};

export default Navbar;
