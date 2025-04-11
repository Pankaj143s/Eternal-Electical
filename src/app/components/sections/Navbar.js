// components/Navbar.jsx
'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
    { label: 'Home', target: '#banner' },
    { label: 'About Us', target: '#about' },
    { label: 'Services', target: '#services' },
    { label: 'Gallery', target: '#gallery' },
    { label: 'Testimonials', target: '#testimonials' },
    { label: 'Blogs', target: '#blogs' },
    { label: 'FAQ', target: '#faq' },
    { label: 'Career', target: '#career' },
    { label: 'Contact', target: '#contact' },
];

const DLink = ({ label, target }) => (
    <a
        href={target}
        className="group relative text-white uppercase font-medium hover:text-gray-300"
    >
        {label}
        <span className="absolute left-1/2 -bottom-1 h-[2px] w-full bg-white -translate-x-1/2 scale-x-0 group-hover:scale-x-100 transition-transform origin-center" />
    </a>
);

const MLink = ({ label, target, close }) => (
    <a
        href={target}
        onClick={close}
        className="group relative block text-white uppercase font-medium hover:text-gray-300"
    >
        {label}
        <span className="absolute left-1/2 -bottom-1 h-[2px] w-full bg-white -translate-x-1/2 scale-x-0 group-hover:scale-x-100 transition-transform origin-center" />
    </a>
);

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const toggle = () => setOpen(!open);
    const close = () => setOpen(false);

    return (
        <nav className="fixed inset-x-0 top-0 z-50 bg-black/70 backdrop-blur-sm">
            <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* MOBILE BAR */}
                <div className="flex items-center justify-between h-16 md:hidden">
                    <img src="/Eternal_logo.png" alt="Eternal Electrical" className="h-16 w-auto" />
                    <button onClick={toggle} className="p-2 rounded-md hover:bg-gray-700">
                        {!open ? (
                            <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        ) : (
                            <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        )}
                    </button>
                </div>

                {/* DESKTOP / TABLET MENU */}
                <div className="hidden md:flex h-16 items-center justify-center gap-4 md:gap-6 lg:gap-8 xl:gap-10 text-xs xl:text-base">
                    {navLinks.slice(0, 4).map(link => (
                        <DLink key={link.label} {...link} />
                    ))}

                    {/* Center Logo – won’t shrink on tablet */}
                    <a href="#banner" className="shrink-0">
                        <img src="/Eternal_logo.png" alt="Eternal Electrical" className="h-14 w-auto" />
                    </a>

                    {navLinks.slice(4).map(link => (
                        <DLink key={link.label} {...link} />
                    ))}
                </div>
            </div>

            {/* MOBILE DROPDOWN */}
            <AnimatePresence>
                {open && (
                    <motion.div
                        className="md:hidden bg-black/90 px-4 py-2 flex flex-col space-y-2 text-center"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                    >
                        {navLinks.map(link => (
                            <MLink key={link.label} {...link} close={close} />
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
