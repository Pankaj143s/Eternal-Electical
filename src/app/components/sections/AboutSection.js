// components/sections/AboutSection.jsx
import ScrollFadeIn from "../utils/ScrollFadeIn";

export default function AboutSection() {
    return (
        <section
            id="about"
            className="scroll-mt-16 bg-[#242424] py-4 md:py-6 lg:py-8"
        >
            <div className="container mx-auto px-4">
                {/* Heading */}
                <ScrollFadeIn>
                    <div className="text-center mb-12">
                        <h3 className="font-poppins text-2xl sm:text-3xl md:text-4xl font-semibold uppercase bg-[#B4B4B4] inline-block px-6 py-2 rounded-md text-black">
                            About Us
                        </h3>
                    </div>
                </ScrollFadeIn>

                {/* Image + Copy */}
                <div className="flex flex-col xl:flex-row items-center justify-center gap-8 xl:gap-16">
                    {/* Logo + Slogan */}
                    <ScrollFadeIn delay={0.2}>
                        <div className="flex flex-col items-center">
                            <img
                                src="/Eternal_logo.png"
                                alt="Eternal Electrical Logo"
                                className="w-48 sm:w-64 md:w-80 lg:w-[400px] xl:w-[500px] h-auto object-contain"
                            />

                            {/* Slogan */}
                            <span className="mt-4 bg-black/30 opacity-70  text-white font-poppins text-lg sm:text-xl px-4 py-2 rounded-md text-center">
                                Enlighten&nbsp;Yourself...
                            </span>
                        </div>
                    </ScrollFadeIn>

                    {/* Description */}
                    <ScrollFadeIn delay={0.4}>
                        <div className="max-w-3xl text-center xl:text-left break-words">
                            <h2 className="font-poppins text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-8 leading-snug">
                                Your Trusted Partner in Electrical & Solar Solutions
                            </h2>

                            <p className="font-inria text-base sm:text-lg md:text-xl text-[#E0E0E0] leading-6 sm:leading-8 md:leading-9 text-center xl:text-left">
                                Eternal Electrical is a professional electrical and solar service
                                provider founded by Electrical Engineer Sudhansh Bidkar. With a
                                strong focus on innovation, efficiency, and sustainability, we
                                deliver custom‑designed solutions for industrial, commercial, and
                                residential projects. Our expertise spans electrical consultancy,
                                solar energy systems, control panels, smart wiring, and automation
                                solutions. What sets us apart is our hands‑on approach, deep
                                technical knowledge, and commitment to high‑quality, cost‑effective
                                services.
                                <br /><br />
                                Whether you’re looking to optimize energy usage, switch to solar,
                                or upgrade your electrical systems, we’re here to power your ideas
                                into reality — with safety, performance, and long‑term reliability
                                at the core of everything we do.
                            </p>
                        </div>
                    </ScrollFadeIn>
                </div>
            </div>
        </section>
    );
}
