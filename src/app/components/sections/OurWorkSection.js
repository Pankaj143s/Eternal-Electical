'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const images = [
    '/workGallery/PanelInstall.jpeg',
    '/workGallery/LayoutOne.jpeg',
    '/workGallery/SolarInstallTwo.jpeg',
    '/workGallery/LayOutTwo.jpeg',
    '/workGallery/LayOutThree.jpeg',
    '/workGallery/SolarInstallOne.jpeg',
];

export default function GallerySection() {
    const [selectedImage, setSelectedImage] = useState(null);

    return (
        <section className="bg-[#1A1A1A] py-8 sm:py-12 md:py-16 px-2 sm:px-4 md:px-8">
            <div className="flex flex-col  items-center  text-center mb-12">
                <h1 className="uppercase  text-4xl font-bold bg-[#B4B4B4]  inline-block rounded-md px-6 py-2 my-12">Our Work in Action</h1>
                <p className="text-white text-xl max-w-6xl">Explore some of the electrical, solar, and automation projects we've successfully completed across homes, businesses, and industries.</p>


            </div>

            {/* Masonry layout with minimal gap; 1 col on small, 2 col on medium, 3 col on large */}
            <div className="columns-1 sm:columns-2 md:columns-3 gap-2 space-y-2 px-72">
                {images.map((src, i) => (
                    <div
                        key={i}
                        className="relative rounded-lg overflow-hidden cursor-pointer group"
                        onClick={() => setSelectedImage(src)}
                    >
                        {/* Actual image */}
                        <img
                            src={src}
                            alt={`Gallery ${i}`}
                            className="w-full transition-transform duration-300 group-hover:scale-105"
                        />
                        {/* Dark overlay that fades in/out on hover */}
                        <div className="absolute inset-0 bg-black opacity-40 group-hover:opacity-50 transition-opacity duration-300"></div>
                    </div>
                ))}
            </div>

            {/* Modal for image preview using AnimatePresence */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50"
                        onClick={() => setSelectedImage(null)}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.4, ease: 'easeInOut' }}
                    >
                        <motion.div
                            className="relative max-w-3xl w-full p-4"
                            onClick={(e) => e.stopPropagation()} // prevent closing on image click
                            initial={{ scale: 0.7, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.7, opacity: 0 }}
                            transition={{ duration: 0.4, ease: 'easeInOut' }}
                        >
                            <img
                                src={selectedImage}
                                alt="Enlarged"
                                className="rounded-lg w-full h-auto max-h-[90vh] object-contain"
                            />
                            <button
                                onClick={() => setSelectedImage(null)}
                                className="absolute top-2 right-2 text-white text-3xl font-bold"
                            >
                                &times;
                            </button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
