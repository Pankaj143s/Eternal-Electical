"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import CareerCard from "../cards/CareerCard";
import jobs from "@/app/data/careerData";

export default function CareerSection() {
    const formRef = useRef(null);
    const [fadeOutForm, setFadeOutForm] = useState(false);
    const [showAlert, setShowAlert] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = formRef.current;
        if (!form) return;

        const formData = new FormData(form);
        // Submit form data silently using no-cors
        fetch(form.action, {
            method: "POST",
            body: formData,
            mode: "no-cors",
        });

        // Show the success alert and initiate form fade out animation
        setShowAlert(true);
        setFadeOutForm(true);

        // Reset form after a short delay with fade-out effect
        setTimeout(() => {
            formRef.current?.reset();
            setFadeOutForm(false);
        }, 600);

        // Start fade-out of the alert after 5 seconds and then hide it completely
        setTimeout(() => {
            const alertElement = document.querySelector("#success-alert");
            if (alertElement) {
                alertElement.classList.remove("animate-fade-in-up");
                alertElement.classList.add("animate-fade-out-down");
            }
            setTimeout(() => {
                setShowAlert(false);
            }, 500);
        }, 5000);
    };

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

                {/* Animate Job Cards */}
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
                    className={`max-w-4xl mx-auto mt-16 bg-[#2A2A2A] p-6 rounded-lg shadow transition-all duration-500 ${fadeOutForm ? "opacity-0 scale-95" : "opacity-100 scale-100"
                        }`}
                >
                    <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-white">Apply Now</h2>

                    <form
                        ref={formRef}
                        onSubmit={handleSubmit}
                        action="https://docs.google.com/forms/d/e/1FAIpQLSe235xCbzSIQJ3tKgKc5UI8ekMlxvMM8LN8uUJ4lOdLpdj4Pg/formResponse"
                        method="POST"
                        className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                        target="hidden_iframe"
                    >
                        {/* Required Google Form Hidden Fields */}
                        <input type="hidden" name="fvv" value="1" />
                        <input type="hidden" name="fbzx" value="6230891351610396747" />
                        <input type="hidden" name="pageHistory" value="0" />

                        {/* Dropdown to select Position */}
                        <select
                            name="entry.574353619"
                            defaultValue=""
                            required
                            className="p-3 rounded bg-[#1F1F1F] text-white placeholder:text-gray-400 col-span-1 sm:col-span-2"
                        >
                            <option value="" disabled>
                                Select Position
                            </option>
                            <option value="Electrical Engineer">Electrical Engineer</option>
                            <option value="Solar Technician">Solar Technician</option>
                            <option value="Electrical Site Supervisor">Electrical Site Supervisor</option>
                            <option value="Control Panel Technician">Control Panel Technician</option>
                            <option value="Electrician (Industrial & Commercial)">
                                Electrician (Industrial & Commercial)
                            </option>
                        </select>

                        <input
                            type="text"
                            name="entry.208592901"
                            placeholder="Full Name"
                            defaultValue=""
                            className="p-3 rounded bg-[#1F1F1F] text-white placeholder:text-gray-400"
                            required
                        />
                        <input
                            type="email"
                            name="entry.1144475333"
                            placeholder="Email"
                            defaultValue=""
                            className="p-3 rounded bg-[#1F1F1F] text-white placeholder:text-gray-400"
                            required
                        />
                        <input
                            type="tel"
                            name="entry.894200060"
                            placeholder="Phone"
                            defaultValue=""
                            className="p-3 rounded bg-[#1F1F1F] text-white placeholder:text-gray-400"
                            required
                        />
                        <input
                            type="text"
                            name="entry.1114349761"
                            placeholder="Your Current Location"
                            defaultValue=""
                            className="p-3 rounded bg-[#1F1F1F] text-white placeholder:text-gray-400"
                            required
                        />

                        <div className="col-span-1 sm:col-span-2">
                            <p className="text-sm text-gray-400 mb-1">
                                📎 Please upload your CV to <strong>Google Drive</strong> or{" "}
                                <strong>Dropbox</strong>, then paste the shareable link below.
                            </p>
                            <input
                                type="text"
                                name="entry.277202557"
                                placeholder="Paste the link to your uploaded CV"
                                defaultValue=""
                                className="w-full p-3 rounded bg-[#1F1F1F] text-white placeholder:text-gray-400"
                                required
                            />
                        </div>

                        <button
                            type="submit"
                            className="col-span-1 sm:col-span-2 mt-4 bg-[#B4B4B4] text-black font-semibold py-2 px-6 rounded hover:bg-white transition-colors"
                        >
                            Submit Application
                        </button>

                        {/* Success Alert */}
                        {showAlert && (
                            <div
                                id="success-alert"
                                className="col-span-1 sm:col-span-2 mt-4 bg-green-600 text-white px-6 py-3 rounded shadow text-center animate-fade-in-up"
                            >
                                ✅ Your application has been submitted successfully!
                            </div>
                        )}
                    </form>

                    {/* Hidden Iframe for Silent Submission */}
                    <iframe name="hidden_iframe" style={{ display: "none" }}></iframe>
                </motion.div>
            </div>
        </section>
    );
}
