export default function Navbar() {
    return (
        <nav className="fixed top-0 left-0 w-full z-50 bg-black/70 backdrop-blur-sm overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 ">
                <div className="h-16 flex items-center justify-center gap-12">
                    {/* Nav Link Items */}
                    <a href="#" className="text-white uppercase font-medium hover:text-gray-300">
                        Home
                    </a>
                    <a href="#" className="text-white uppercase font-medium hover:text-gray-300">
                        About Us
                    </a>
                    <a href="#" className="text-white uppercase font-medium hover:text-gray-300">
                        Services
                    </a>
                    {/* Logo in the center */}
                    <img
                        src="/Eternal_logo.png"
                        alt="Eternal Electrical"
                        className="h-16 scale-105 w-auto"
                    />
                    <a href="#" className="text-white uppercase font-medium hover:text-gray-300">
                        Gallery
                    </a>
                    <a href="#" className="text-white uppercase font-medium hover:text-gray-300">
                        Testimonials
                    </a>
                    <a href="#" className="text-white uppercase font-medium hover:text-gray-300">
                        Contact
                    </a>
                </div>
            </div>
        </nav>
    );
}
