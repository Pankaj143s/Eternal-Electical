'use client';

import { motion } from "framer-motion";
import ServiceCard from "../cards/ServiceCard";
import services from "@/app/data/servicesData";

// Animation variants
const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.2,
        },
    },
};

const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function ServiceSection() {
    return (
        <section id="services" className="bg-[#1A1A1A]">
            <div className="container mx-auto px-4">
                {/* Title & Description */}
                <div className="flex flex-col items-center text-center mb-12">
                    <h1 className="font-poppins text-2xl sm:text-3xl md:text-4xl font-bold uppercase bg-[#B4B4B4] inline-block rounded-md px-6 py-2 my-12 text-black">
                        Our Services
                    </h1>
                    <p className="font-inria text-base sm:text-lg md:text-xl text-white max-w-6xl">
                        At Eternal Electrical, we provide end-to-end electrical and solar
                        services for residential, commercial, and industrial needs. From smart
                        energy designs to powerful automation systems, our solutions are
                        tailored to maximize safety, performance, and efficiency.
                    </p>
                </div>

                {/* Staggered Service Cards */}
                <motion.div
                    className="flex justify-center flex-wrap gap-4 mb-6"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    {services.map((service, index) => (
                        <motion.div key={index} variants={cardVariants}>
                            <ServiceCard
                                icon={service.icon}
                                alt={service.alt}
                                title={service.title}
                                description={service.description}
                            />
                        </motion.div>
                    ))}
                </motion.div>

                {/* CTA Button */}
                <div className="flex justify-center pb-12">
                    <a
                        href="#contact"
                        className="font-poppins bg-[#9F9F9F] hover:bg-[#bfbfbf] text-base sm:text-lg md:text-xl font-semibold px-4 py-2 rounded-md flex gap-2 items-center justify-center transition-all duration-300 transform hover:scale-[1.03]"
                    >
                        <img
                            src="/icons/PhoneIcon1.png"
                            className="w-8 h-auto transition-transform duration-300 group-hover:translate-x-1"
                            alt="Phone"
                        />
                        Need Help Choosing a Service? Let’s Talk
                    </a>
                </div>
            </div>
        </section>
    );
}
