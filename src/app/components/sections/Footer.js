export default function Footer() {
    return (
        <footer className="bg-[#2D2D2D] text-[#E0E0E0] text-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* 
            Grid layout:
            • For mobile: 2 columns 
               - Row 1: Column 1: Logo+About (span 2)
               - Row 2: Column 2: Our Services (span 1) & Quick Links (span 1)
               - Row 3: Column 3: Contact Info (span 2)
            • For md+ : 4 columns (each column gets equal width)
          */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {/* Column 1 – Logo + About (Mobile: span 2, md: span 1) */}
                    <div className="col-span-2 md:col-span-1 flex flex-col gap-4">
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
                    </div>

                    {/* Column 2 – Our Services (Mobile: span 1, md: span 1) */}
                    <div className="col-span-1 md:col-span-1">
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
                    </div>

                    {/* Column 3 – Quick Links (Mobile: span 1, md: span 1) */}
                    <div className="col-span-1 md:col-span-1">
                        <h3 className="font-poppins text-base sm:text-lg font-semibold mb-2">
                            Quick Links
                        </h3>
                        {[
                            "Home",
                            "About Us",
                            "Testimonials",
                            "FAQ",
                            "Gallery",
                            "Blogs",
                            "Career",
                            "Contact Us",
                        ].map((link, i) => (
                            <a
                                key={i}
                                href="#"
                                className="block font-inria text-sm sm:text-base hover:text-white mb-1"
                            >
                                {link}
                            </a>
                        ))}
                    </div>

                    {/* Column 4 – Contact Info (Mobile: span 2, md: span 1) */}
                    <div className="col-span-2 md:col-span-1">
                        <h3 className="font-poppins text-base sm:text-lg font-semibold mb-2">
                            Contact Info
                        </h3>
                        <div className="flex items-start gap-2 mb-2">
                            <img
                                src="/icons/emailIconFooter.png"
                                alt="Email Icon"
                                className="h-5 w-5 object-contain"
                            />
                            <span className="font-inria text-sm sm:text-base">
                                officialeternalelectrical@gmail.com
                            </span>
                        </div>
                        <div className="flex items-start gap-2 mb-2">
                            <img
                                src="/icons/PhoneIconFooter.png"
                                alt="Phone Icon"
                                className="h-5 w-5 object-contain"
                            />
                            <span className="font-inria text-sm sm:text-base">
                                +91 9561650909
                            </span>
                        </div>
                        <div className="flex items-start gap-2 mb-2">
                            <img
                                src="/icons/locationIconFooter.png"
                                alt="Location Icon"
                                className="h-5 w-5 object-contain"
                            />
                            <span className="font-inria text-sm sm:text-base">
                                Jaiyingpur, Maharashtra
                            </span>
                        </div>
                        <div className="flex items-center gap-3 mt-3">
                            <a
                                href="https://instagram.com"
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
                        </div>
                    </div>
                </div>

                {/* Bottom – Copyright */}
                <div className="text-center mt-8 border-t border-gray-600 pt-4 text-xs sm:text-sm text-gray-400">
                    © 2025 Eternal Electrical. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
