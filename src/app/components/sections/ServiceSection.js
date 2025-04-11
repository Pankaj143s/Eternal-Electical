'use client';
import { motion } from 'framer-motion';
import ServiceCard from '../cards/ServiceCard';
import services from '@/app/data/servicesData';

const containerVariants = { hidden: {}, visible: { transition: { staggerChildren: .2 } } };
const cardVariants = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: .5 } } };

export default function ServiceSection() {
    return (
        <section id="services" className="relative scroll-mt-16 bg-[#0C1013] py-8 md:py-12 lg:py-16">
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    background: "linear-gradient(to bottom, #242424 0%, transparent 5%)",
                }}
            />
            <div className="container mx-auto px-4">
                <div className="flex flex-col items-center text-center mb-12">
                    <h1 className="font-poppins text-2xl sm:text-3xl md:text-4xl font-bold uppercase bg-[#B4B4B4] inline-block rounded-md px-6 py-2 my-12 text-black">
                        Our Services
                    </h1>
                    <p className="font-inria text-base sm:text-lg md:text-xl text-white max-w-6xl">
                        At Eternal Electrical, we provide end‑to‑end electrical and solar services for residential, commercial, and industrial needs.
                    </p>
                </div>

                <motion.div
                    className="flex justify-center flex-wrap gap-4 mb-6"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                >
                    {services.map((s, i) => (
                        <motion.div key={i} variants={cardVariants}>
                            <ServiceCard {...s} />
                        </motion.div>
                    ))}
                </motion.div>

                <div className="flex justify-center pb-12">
                    <a
                        href="#contact"
                        className="font-poppins bg-[#9F9F9F] hover:bg-[#bfbfbf] text-xs sm:text-lg md:text-xl font-semibold px-4 py-2 rounded-md flex gap-2 items-center transition-all hover:scale-[1.03]"
                    >
                        <img src="/icons/PhoneIcon1.png" alt="Phone" className="w-8 h-auto" />
                        Need Help Choosing a Service? Let’s Talk
                    </a>
                </div>
            </div>
        </section>
    );
}
