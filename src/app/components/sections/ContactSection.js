// components/sections/ContactSection.jsx
'use client';

export default function ContactSection() {
    return (
        <section
            id="contact"
            className="bg-[#1A1A1A] text-white py-16 px-4 sm:px-6 lg:px-12"
        >
            {/* Header */}
            <div className="text-center mb-12">
                <h1 className="font-poppins text-3xl sm:text-4xl md:text-5xl font-bold uppercase bg-[#B4B4B4] text-black inline-block px-6 py-3 rounded-md">
                    Contact Us
                </h1>
                <p className="font-inria mt-6 text-lg sm:text-xl max-w-4xl mx-auto">
                    For inquiries or collaborations, please get in touch using the
                    information or the form below.
                </p>
            </div>

            {/* Main Content – Flex layout: stacked on mobile, side-by-side on lg */}
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8">
                {/* Left Column – Contact Details & Form */}
                <div className="lg:w-1/2 flex flex-col gap-8">
                    {/* Contact Details */}
                    <div className="space-y-4">
                        <p className="font-inria text-lg">
                            <strong>Email:</strong> officialeternalelectrical@gmail.com
                        </p>
                        <p className="font-inria text-lg">
                            <strong>Phone:</strong> +91 9561650909
                        </p>
                        <p className="font-inria text-lg">
                            <strong>Location:</strong> Jaiyingpur, Maharashtra
                        </p>
                    </div>

                    {/* Contact Form */}
                    <form className="grid grid-cols-1 gap-4">
                        <input
                            type="text"
                            placeholder="Your Name"
                            className="p-3 rounded bg-[#1F1F1F] text-white placeholder:text-gray-400"
                            required
                        />
                        <input
                            type="email"
                            placeholder="Your Email"
                            className="p-3 rounded bg-[#1F1F1F] text-white placeholder:text-gray-400"
                            required
                        />
                        <input
                            type="tel"
                            placeholder="Your Phone"
                            className="p-3 rounded bg-[#1F1F1F] text-white placeholder:text-gray-400"
                            required
                        />
                        <textarea
                            placeholder="Your Message"
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

                {/* Right Column – Embedded Map */}
                <div className="lg:w-1/2">
                    {/* On mobile: height set to 70vh; on lg: minimum height of 400px */}
                    <div className="w-full h-[40vh] lg:min-h-[400px]">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.238604557185!2d72.81656991481105!3d19.072758687092398!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b6570db324d1%3A0xf66ca45876dde6b6!2sMumbai%20%2C%20Maharashtra%2C%20India!5e0!3m2!1sen!2sus!4v1687281234567!5m2!1sen!2sus"
                            className="w-full h-full border-0 rounded-md"
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>
            </div>
        </section>
    );
}
