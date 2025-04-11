'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

const backgrounds = [
  '/solarBackground.jpg',
  '/controlPanelBackground.png',
  '/installationBackground.png',
];

export default function BannerSection() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIndex((prev) => (prev + 1) % backgrounds.length);
    }, 10000); // 10 seconds stay

    return () => clearTimeout(timer);
  }, [index]); // ✅ Consistently use [index] from the start
  // Determine background position
  const getBgPosition = () => {
    return backgrounds[index] === '/solarBackground.jpg' ? 'center bottom' : 'center center';
  };
  return (
    <section id="banner" className="relative h-screen overflow-hidden ">
      {/* Animated background */}
      <AnimatePresence mode="wait">
        <motion.div
          key={backgrounds[index]}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2 }}
          className="absolute inset-0 bg-cover"
          style={{
            backgroundImage: `url(${backgrounds[index]})`,
            backgroundPosition: getBgPosition(),
          }}
        >
          {/* Overlay */}
          <div className="md:hidden absolute inset-0 z-10 pointer-events-none">
            <div
              className="absolute inset-0"
              style={{
                background: 'linear-gradient(to top, transparent, rgba(0,0,0,0.7) 20%, rgba(0,0,0,0.4) 80%, transparent)',
              }}
            />
          </div>
          {/* Overlay */}
          <div className="hidden md:block absolute inset-0 bg-gradient-to-r from-black/80 to-transparent" />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center md:justify-start justify-center">
        <div className="container mx-auto px-4 md:px-12 text-center md:text-left">
          <h1 className="font-poppins text-5xl sm:text-5xl md:text-6xl lg:text-7xl 2xl:text-8xl font-bold mb-8 uppercase text-white drop-shadow-md">
            Eternal <br /> Electrical
          </h1>
          <p className="font-inria text-base sm:text-lg md:text-xl font-semibold text-white mb-8 max-w-2xl mx-auto md:mx-0 drop-shadow">
            At Eternal Electrical, we specialize in smart electrical consultancy,
            solar installations, control panels, and automation that enhance
            safety, save energy, and future-proof your power systems.
          </p>
          <a
            className="text-lg bg-[#6d6d6db6]  text-[#b9b9b9] px-4 py-2 rounded-md font-poppins font-semibold inline-block hover:bg-white hover:text-black transition"
            href="#contact"
          >
            Contact us
          </a>
        </div>
      </div>
    </section>
  );
}
