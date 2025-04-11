'use client';
import { motion } from 'framer-motion';

const columnVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (custom) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: custom * 0.1 },
  }),
};

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-[#2D2D2D] text-[#E0E0E0] text-sm"
    >
      <div className="container mx-auto px-4 md:py-8">
        {/* Grid layout */}
        <div className="grid grid-cols-2 md:grid-cols-[1.2fr_1fr_1fr_1.3fr] gap-6">
          {/* Column 1 – Logo + About */}
          <motion.div
            custom={0}
            variants={columnVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="col-span-2 md:col-span-1 flex flex-col gap-4"
          >
            <div className="flex items-center gap-2">
              <img
                src="/Eternal_logo.png"
                alt="Eternal Electrical Logo"
                className="h-12 lg:h-20 w-auto object-contain"
              />
              <h2 className="font-poppins text-xl sm:text-2xl lg:text-3xl font-bold">
                Eternal Electrical
              </h2>
            </div>
            <p className="font-inria text-sm sm:text-base leading-relaxed">
              Powering innovation with safe, efficient, and sustainable electrical
              solutions for homes, businesses, and industries.
            </p>
          </motion.div>

          {/* Column 2 – Our Services */}
          <motion.div
            custom={1}
            variants={columnVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="col-span-1 md:col-span-1"
          >
            <h3 className="font-poppins text-base sm:text-lg font-semibold mb-2">
              Our Services
            </h3>
            {["Electrical Design", "Solar Energy Solutions", "Automation & Control Panels", "Maintenance & Repairs"].map((item, i) => (
              <a
                key={i}
                href="#"
                className="block font-inria text-sm sm:text-base hover:text-white mb-1"
              >
                {item}
              </a>
            ))}
          </motion.div>

          {/* Column 3 – Quick Links */}
          <motion.div
            custom={2}
            variants={columnVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="col-span-1 md:col-span-1"
          >
            <h3 className="font-poppins text-base sm:text-lg font-semibold mb-2">
              Quick Links
            </h3>
            {["Home", "Gallery", "Blogs", "Career", "Contact Us"].map((link, i) => (
              <a
                key={i}
                href="#"
                className="block font-inria text-sm sm:text-base hover:text-white mb-1"
              >
                {link}
              </a>
            ))}
          </motion.div>

          {/* Column 4 – Contact Info */}
          <motion.div
            custom={3}
            variants={columnVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="col-span-2 md:col-span-1 pr-2"
          >
            <h3 className="font-poppins text-base sm:text-lg font-semibold mb-2">
              Contact Info
            </h3>
            <div className="flex items-start gap-2 mb-2">
              <img
                src="/icons/emailIconFooter.png"
                alt="Email Icon"
                className="h-5 w-5 object-contain"
              />
              <a
                href="mailto:officialeternalelectrical@gmail.com"
                className="font-inria text-sm sm:text-base break-words hover:text-white"
              >
                officialeternalelectrical@gmail.com
              </a>
            </div>
            <div className="flex items-start gap-2 mb-2">
              <img
                src="/icons/PhoneIconFooter.png"
                alt="Phone Icon"
                className="h-5 w-5 object-contain"
              />
              <a
                href="tel:+919561650909"
                className="font-inria text-sm sm:text-base hover:text-white"
              >
                +91 9561650909
              </a>
            </div>
            <div className="flex items-start gap-2 mb-2">
              <img
                src="/icons/locationIconFooter.png"
                alt="Location Icon"
                className="h-5 w-5 object-contain"
              />
              <a
                href="https://maps.google.com/maps?q=16.767818,74.558886"
                target="_blank"
                rel="noreferrer"
                className="font-inria text-sm sm:text-base break-words hover:text-white"
              >
                Jaysingpur, Maharashtra
              </a>
            </div>
            <div className="flex items-center gap-3 mt-3">
              <a
                href="https://www.instagram.com/eternalelectrical/"
                target="_blank"
                rel="noreferrer"
                className="hover:opacity-80 transition-opacity"
              >
                <img
                  src="/icons/instagram.png"
                  alt="Instagram Icon"
                  className="h-5 w-5 object-contain"
                />
              </a>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="hover:opacity-80 transition-opacity"
              >
                <img
                  src="/icons/linkedin.png"
                  alt="LinkedIn Icon"
                  className="h-5 w-5 object-contain"
                />
              </a>
              <a
                href="https://wa.me/919561650909?text=Hi%2C%20I%E2%80%99m%20interested%20in%20your%20services%20from%20Eternal%20Electrical."
                target="_blank"
                rel="noreferrer"
                className="hover:opacity-80 transition-opacity"
              >
                <img
                  src="/icons/whatsapp.png"
                  alt="WhatsApp Icon"
                  className="h-5 w-5 object-contain"
                />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Bottom – Copyright */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-8 border-t border-gray-600 pt-4 text-xs sm:text-sm text-gray-400"
        >
          © 2025 Eternal Electrical. All rights reserved. <br />
          Founded by Sudhansh Bidkar
        </motion.div>
      </div>
    </motion.footer>
  );
}
