"use client";

import { motion } from "framer-motion";
import CareerCard from "../cards/CareerCard";
import jobs from "@/app/data/careerData";

export default function CareerSection() {
    return (
        <section id="career" className="bg-[#1A1A1A] text-white py-16">
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
                        Careers at Eternal Electrical
                    </h1>
                    <p className="font-inria mt-6 text-lg sm:text-xl max-w-4xl mx-auto">
                        Join our team and power the future with cutting-edge electrical and
                        solar solutions. Explore our current openings and grow with us!
                    </p>
                </motion.div>

                {/* Animate the entire group of cards at once */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="flex flex-wrap justify-center gap-6"
                >
                    {jobs.map((job, index) => (
                        <CareerCard key={index} job={job} />
                    ))}
                </motion.div>

                {/* Application Form with animation */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="max-w-4xl mx-auto mt-16 bg-[#2A2A2A] p-6 rounded-lg shadow"
                >
                    <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-white">
                        Apply Now
                    </h2>
                    <form className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <input
                            type="text"
                            placeholder="Full Name"
                            className="p-3 rounded bg-[#1F1F1F] text-white placeholder:text-gray-400"
                            required
                        />
                        <input
                            type="email"
                            placeholder="Email"
                            className="p-3 rounded bg-[#1F1F1F] text-white placeholder:text-gray-400"
                            required
                        />
                        <input
                            type="tel"
                            placeholder="Phone"
                            className="p-3 rounded bg-[#1F1F1F] text-white placeholder:text-gray-400"
                            required
                        />
                        <input
                            type="text"
                            placeholder="Current Location"
                            className="p-3 rounded bg-[#1F1F1F] text-white placeholder:text-gray-400"
                            required
                        />
                        <div className="col-span-1 sm:col-span-2">
                            <label className="text-sm block mb-1">Upload CV (PDF/DOC)</label>
                            <input
                                type="file"
                                accept=".pdf,.doc,.docx"
                                className="w-full p-2 rounded bg-[#1F1F1F] text-white file:mr-3 file:py-2 file:px-4 file:rounded file:border-0 file:bg-[#4B4B4B] file:text-white"
                                required
                            />
                        </div>
                        <button
                            type="submit"
                            className="col-span-1 sm:col-span-2 mt-4 bg-[#B4B4B4] text-black font-semibold py-2 px-6 rounded hover:bg-white transition-colors"
                        >
                            Submit Application
                        </button>
                    </form>
                </motion.div>
            </div>
        </section>
    );
}
