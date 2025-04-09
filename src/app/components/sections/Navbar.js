'use client';
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
    { label: "Home", target: "#banner" },
    { label: "About Us", target: "#about" },
    { label: "Services", target: "#services" },
    { label: "Gallery", target: "#gallery" },
    { label: "Testimonials", target: "#testimonials" },
    { label: "FAQ", target: "#faq" },
    { label: "Blogs", target: "#blogs" },
    { label: "Career", target: "#career" },
    { label: "Contact", target: "#contact" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen(!isOpen);

    const renderLink = ({ label, target }) => (
        <a
            href={target}
            key={label}
            className="group relative text-white uppercase font-medium transition-colors duration-300 hover:text-gray-300"
        >
            {label}
            <span className="absolute left-1/2 -bottom-1 h-[2px] w-full bg-white transform -translate-x-1/2 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center"></span>
        </a>
    );

    return (
        <nav className="fixed top-0 left-0 w-full z-50 bg-black/70 backdrop-blur-sm">
            <div className="max-w-7xl mx-auto px-4">
                {/* MOBILE VIEW */}
                <div className="flex items-center justify-between h-16 md:hidden">
                    <img src="/Eternal_logo.png" alt="Eternal Electrical" className="h-16 w-auto" />
                    <button onClick={toggleMenu} className="p-2 rounded-md focus:outline-none hover:bg-gray-700">
                        <span className="sr-only">Toggle Menu</span>
                        {!isOpen ? (
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

                {/* DESKTOP VIEW */}
                <div className="hidden md:flex h-16 items-center justify-center gap-8 xl:gap-10 text-sm xl:text-base">
                    {navLinks.slice(0, 4).map(renderLink)}
                    {/* Center Logo */}
                    <img src="/Eternal_logo.png" alt="Eternal Electrical" className="h-14 w-auto" />
                    {navLinks.slice(4).map(renderLink)}
                </div>
            </div>

            {/* MOBILE DROPDOWN MENU */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="md:hidden bg-black/90 px-4 py-2 flex flex-col space-y-2 text-center overflow-hidden"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                    >
                        {navLinks.map(renderLink)}
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
