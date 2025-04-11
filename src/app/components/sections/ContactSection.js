'use client';
import { motion } from 'framer-motion';

export default function ContactSection() {
    return (
        <section
            id="contact"
            className="relative scroll-mt-16 bg-[#0C1013] text-white py-8 md:py-12 lg:py-16"
        >
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    background: "linear-gradient(to bottom, #1A1A1A 0%, transparent 5%)",
                }}
            />
            <div className="container mx-auto px-4">

                {/* Header with animation */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <h1 className="font-poppins text-3xl sm:text-4xl md:text-5xl font-bold uppercase bg-[#B4B4B4] text-black inline-block px-6 py-3 rounded-md">
                        Contact Us
                    </h1>
                    <p className="font-inria mt-6 text-lg sm:text-xl max-w-4xl mx-auto">
                        For inquiries or collaborations, please get in touch using the information or the form below.
                    </p>
                </motion.div>

                {/* Main Content */}
                <div className="flex flex-col lg:flex-row gap-8 items-stretch">
                    {/* Left Column – Contact Info & Form */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="lg:w-1/2 flex flex-col h-full"
                    >
                        <div className="flex flex-col justify-between h-full">
                            {/* Contact Details */}
                            <div className="space-y-4 font-inria text-lg">
                                <p>
                                    <strong>Email:</strong>{" "}
                                    <a
                                        href="mailto:officialeternalelectrical@gmail.com"
                                        className="hover:underline"
                                    >
                                        officialeternalelectrical@gmail.com
                                    </a>
                                </p>
                                <p>
                                    <strong>Phone:</strong>{" "}
                                    <a
                                        href="tel:+919561650909"
                                        className="hover:underline"
                                    >
                                        +91 9561650909
                                    </a>
                                </p>
                                <p>
                                    <strong>Location:</strong>{" "}
                                    <a
                                        href="https://maps.google.com/maps?q=16.767818,74.558886"
                                        target="_blank"
                                        rel="noreferrer"
                                        className="hover:underline"
                                    >
                                        Jaysingpur, Maharashtra
                                    </a>
                                </p>

                                {/* WhatsApp Link */}
                                <a
                                    href="https://wa.me/919561650909?text=Hi%2C%20I%E2%80%99m%20interested%20in%20your%20services%20from%20Eternal%20Electrical."
                                    target="_blank"
                                    rel="noreferrer"
                                    className="inline-flex items-center gap-2 text-green-400 hover:text-green-300 transition"
                                >
                                    <img src="/icons/whatsappColor.png" alt="WhatsApp" className="w-7 h-7" />
                                    Chat with us on WhatsApp
                                </a>
                            </div>

                            {/* Contact Form */}
                            <form
                                action="https://script.google.com/macros/s/AKfycbxB0DFRRuSJm1TkfQcf2bQJpmw5ZOlYwNdL7yUGOeOsKhPu3sOJFWZWacZp2mjvooq-pg/exec"
                                method="POST"
                                className="grid grid-cols-1 gap-4 mt-6"
                            >
                                <input type="hidden" name="type" value="contact" />
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Your Name"
                                    defaultValue=""
                                    className="p-3 rounded bg-[#1F1F1F] text-white placeholder:text-gray-400"
                                    required
                                />
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Your Email"
                                    defaultValue=""
                                    className="p-3 rounded bg-[#1F1F1F] text-white placeholder:text-gray-400"
                                    required
                                />
                                <input
                                    type="tel"
                                    name="phone"
                                    placeholder="Your Phone"
                                    defaultValue=""
                                    className="p-3 rounded bg-[#1F1F1F] text-white placeholder:text-gray-400"
                                    required
                                />
                                <textarea
                                    name="message"
                                    placeholder="Your Message"
                                    defaultValue=""
                                    className="p-3 rounded bg-[#1F1F1F] text-white placeholder:text-gray-400"
                                    rows="4"
                                    required
                                />
                                <button
                                    type="submit"
                                    className="mt-4 bg-[#B4B4B4] text-black font-semibold py-2 px-6 rounded hover:bg-white transition-colors"
                                >
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </motion.div>

                    {/* Right Column – Embedded Map */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="lg:w-1/2"
                    >
                        <div className="w-full h-full">
                            <iframe
                                src="https://maps.google.com/maps?q=16.767818,74.558886&z=15&output=embed"
                                className="w-full h-full border-0 rounded-md"
                                allowFullScreen=""

                            ></iframe>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
