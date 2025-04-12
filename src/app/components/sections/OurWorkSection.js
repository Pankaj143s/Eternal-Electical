"use client";
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ScrollFadeIn from '../utils/ScrollFadeIn';

const images = [
    '/workGallery/PanelInstall.jpeg',
    '/workGallery/LayoutOne.jpeg',
    '/workGallery/SolarInstallTwo.jpeg',
    '/workGallery/LayOutTwo.jpeg',
    '/workGallery/LayOutThree.jpeg',
    '/workGallery/SolarInstallOne.jpeg',
];

export default function OurWorkSection() {
    const [selected, setSelected] = useState(null);

    return (
        <section id="gallery" className="scroll-mt-16 bg-[#242424] py-4 md:py-6 lg:py-8">
            {/* Overlay Gradient */}

            <div className="container mx-auto px-4">

                <ScrollFadeIn>
                    <div className="flex flex-col items-center text-center mb-12">
                        <h1 className="font-poppins text-2xl sm:text-3xl md:text-4xl font-bold uppercase bg-[#B4B4B4] inline-block rounded-md px-6 py-2 my-12 text-black">
                            Our Work in Action
                        </h1>
                        <p className="font-inria text-base sm:text-lg md:text-xl text-white max-w-6xl">
                            Explore some of the electrical, solar, and automation projects we've successfully completed across homes, businesses, and industries.
                        </p>
                    </div>
                </ScrollFadeIn>

                <div className="columns-1 sm:columns-2 md:columns-3 gap-2 space-y-4">
                    {images.map((src, i) => (
                        <motion.div
                            key={i}
                            className="relative rounded-lg overflow-hidden cursor-pointer group"
                            onClick={() => setSelected(src)}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                        >
                            <img src={src} alt={`Gallery ${i}`} className="w-full transition-transform duration-300 group-hover:scale-105" />
                            <div className="absolute inset-0 bg-black opacity-40 group-hover:opacity-50 transition-opacity" />
                        </motion.div>
                    ))}
                </div>

                {/* modal */}
                <AnimatePresence>
                    {selected && (
                        <motion.div
                            className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50"
                            onClick={() => setSelected(null)}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.4 }}
                        >
                            <motion.div
                                onClick={(e) => e.stopPropagation()}
                                className="relative max-w-3xl w-full p-4"
                                initial={{ scale: 0.7, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 0.7, opacity: 0 }}
                                transition={{ duration: 0.4 }}
                            >
                                <img src={selected} alt="Enlarged" className="rounded-lg w-full h-auto max-h-[90vh] object-contain" />
                                <button onClick={() => setSelected(null)} className="absolute top-2 right-2 text-white text-3xl font-bold">
                                    &times;
                                </button>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
}
