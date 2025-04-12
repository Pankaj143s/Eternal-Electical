"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";

export default function ContactSection() {
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

        // Show success alert and initiate form fade out animation
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
        <section
            id="contact"
            className="scroll-mt-16 bg-[#1A1A1A] text-white py-4 md:py-6 lg:py-8"
        >
            <div className="container mx-auto px-4">
                {/* Header */}
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
                        Reach out to us with your queries or feedback.
                    </p>
                </motion.div>

                {/* Contact Form */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className={`max-w-4xl mx-auto mt-16 bg-[#2A2A2A] p-6 rounded-lg shadow transition-all duration-500 ${fadeOutForm ? "opacity-0 scale-95" : "opacity-100 scale-100"
                        }`}
                >
                    <h2 className="text-2xl sm:text-3xl font-bold mb-4">Get in Touch</h2>

                    <form
                        ref={formRef}
                        onSubmit={handleSubmit}
                        action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSd2QdynIPLql-bgW3REc37QPa0AAnfHb6N3gHyTUSY9LAaLrA/formResponse"

                        method="POST"
                        className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                        target="hidden_iframe"
                    >
                        <input
                            type="text"
                            name="entry.22353938"
                            placeholder="Name"
                            required
                            className="p-3 rounded bg-[#1F1F1F] text-white placeholder:text-gray-400"
                        />

                        <input
                            type="email"
                            name="entry.58283468"

                            placeholder="Email"
                            required
                            className="p-3 rounded bg-[#1F1F1F] text-white placeholder:text-gray-400"
                        />

                        <input
                            type="tel"
                            name="entry.1540487856"

                            placeholder="Phone"
                            required
                            className="p-3 rounded bg-[#1F1F1F] text-white placeholder:text-gray-400"
                        />

                        <textarea
                            name="entry.264420133"

                            placeholder="Message"
                            required
                            className="col-span-1 sm:col-span-2 p-3 rounded bg-[#1F1F1F] text-white placeholder:text-gray-400"
                        ></textarea>

                        <button
                            type="submit"
                            className="col-span-1 sm:col-span-2 mt-4 bg-[#B4B4B4] text-black font-semibold py-2 px-6 rounded hover:bg-white transition-colors"
                        >
                            Submit
                        </button>

                        {showAlert && (
                            <div
                                id="success-alert"
                                className="col-span-1 sm:col-span-2 mt-4 bg-green-600 text-white px-6 py-3 rounded shadow text-center animate-fade-in-up"
                            >
                                ✅ Your message has been sent successfully!
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
