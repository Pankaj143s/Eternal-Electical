export default function AboutSection() {
    return (
        <section className="bg-[#1A1A1A]/80 py-16">
            {/* Section Title */}
            <div className="text-center mb-12">
                <h3 className="bg-[#B4B4B4] inline-block px-6 py-2 rounded-md text-base md:text-2xl font-semibold uppercase">
                    About Us
                </h3>
            </div>

            {/* Layout Container */}
            <div className="flex flex-col xl:flex-row items-center justify-center gap-x-16 px-4">

                {/* Image */}
                <div className="mb-8 lg:mb-0">
                    <img
                        src="/Eternal_logo.png"
                        alt="Eternal Electrical Logo"
                        className="w-48 sm:w-64 md:w-80 lg:w-[400px] xl:w-[500px] h-auto object-contain"
                    />
                </div>

                {/* Text */}
                <div className="max-w-3xl text-center lg:text-left">
                    <h2 className="text-[#ffffff] text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-8 leading-snug lg:leading-[3.5rem]">
                        Your Trusted Partner in Electrical & Solar Solutions
                    </h2>
                    <p className="text-[#E0E0E0] text-base sm:text-lg lg:text-xl leading-6 sm:leading-8 lg:leading-9 text-justify lg:text-left">
                        Eternal Electrical is a professional electrical and solar service provider founded by Electrical Engineer Sudhansh Bidkar. With a strong focus on innovation, efficiency, and sustainability, we deliver custom-designed solutions for industrial, commercial, and residential projects. Our expertise spans across electrical consultancy, solar energy systems, control panels, smart wiring, and automation solutions. What sets us apart is our hands-on approach, deep technical knowledge, and commitment to high-quality, cost-effective services.
                        <br /><br />
                        Whether you’re looking to optimize your energy usage, switch to solar, or upgrade your electrical systems, we’re here to power your ideas into reality — with safety, performance, and long-term reliability at the core of everything we do.
                    </p>
                </div>
            </div>
        </section>
    );
}
