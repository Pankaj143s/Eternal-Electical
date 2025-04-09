"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function FAQSection() {
    const [openIndex, setOpenIndex] = useState(null);

    const faqs = [
        {
            question: "1) What is Eternal Electrical?",
            answer:
                "Eternal Electrical is a professional electrical consultancy and service provider specializing in electrical design, solar solutions, control panels, and industrial wiring.",
        },
        {
            question: "2) What services do you offer?",
            answer:
                "We provide electrical consultancy, solar power solutions, control panels, industrial/commercial wiring, energy audits, and home automation.",
        },
        {
            question: "3) What types of solar systems do you install?",
            answer:
                "We install grid-connected, off-grid, and hybrid solar systems with battery backups tailored to your energy requirements.",
        },
        {
            question: "4) Do you help with government electrical approvals?",
            answer:
                "Yes, we assist businesses and individuals in obtaining necessary electrical safety and compliance certifications.",
        },
        {
            question: "5) Do you offer backup power solutions?",
            answer:
                "Yes, we provide generators, UPS systems, and solar backups to ensure uninterrupted power supply for homes and businesses.",
        },
        {
            question: "6) What industries do you serve?",
            answer:
                "We serve industries including manufacturing, IT offices, real estate, retail, healthcare, and education.",
        },
        {
            question: "7) Do you install home automation systems?",
            answer:
                "Yes, we offer smart home automation solutions including smart switches, remote lighting control, and security integration.",
        },
        {
            question: "8) What are the benefits of energy audits?",
            answer:
                "Energy audits help identify power wastage, optimize consumption, and reduce electricity bills by 20-30%.",
        },
        {
            question: "9) What types of control panels do you provide?",
            answer:
                "We design and supply MCC, PCC, PLC, APFC, and custom panels for industrial and commercial applications.",
        },
        {
            question: "10) How can I get in touch with Eternal Electrical?",
            answer:
                "You can contact us via +91 9561650909, email at officialeternalelectrical@gmail.com, or visit www.eternalelectrical.com.",
        },
    ];

    const toggleFAQ = (index) => {
        // If the clicked FAQ is already open, close it; otherwise open the new one
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="bg-[#131417] py-12">
            {/* Responsive Image Banner */}
            <div className="relative w-full overflow-hidden max-h-[500px]">
                <img
                    src="/FAQ.png"
                    alt="FAQ Banner"
                    className="w-full h-auto object-cover"
                />
                <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                        background: "linear-gradient(to bottom, #131417 0%, transparent 50%)",
                    }}
                />
            </div>

            {/* FAQ Text Section */}
            <div className="container mx-auto px-4 flex flex-col items-center text-center mb-12">
                <h1 className="font-poppins text-2xl sm:text-3xl md:text-4xl font-bold uppercase bg-[#B4B4B4] text-black inline-block rounded-md px-6 py-2 mt-8 mb-6">
                    Frequently Asked Questions
                </h1>
                <p className="font-inria text-base sm:text-lg md:text-xl text-white max-w-5xl mb-8">
                    Have questions about our services, solar installations, or automation
                    solutions? We've answered some of the most common queries to help you
                    make informed decisions.
                </p>

                {/* Dropdown FAQ Section */}
                <div className="w-full max-w-4xl space-y-2">
                    {faqs.map((item, index) => (
                        <div key={index}>
                            <button
                                onClick={() => toggleFAQ(index)}
                                className={`w-full text-left px-4 py-3 font-poppins text-base sm:text-lg font-bold rounded-t-md transition-all duration-300 ${openIndex === index
                                        ? "bg-[#383838] text-white"
                                        : "bg-[#515151] text-[#C7C7C7] rounded-b-md"
                                    }`}
                            >
                                {item.question}
                            </button>

                            <AnimatePresence initial={false}>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: "auto" }}
                                        exit={{ opacity: 0, height: 0 }}
                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                        className="overflow-hidden"
                                    >
                                        <div className="font-inria text-sm sm:text-base text-[#C7C7C7] font-medium px-4 py-3 bg-[#383838] rounded-b-md text-left">
                                            {item.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
