// components/sections/AboutSection.jsx
import ScrollFadeIn from "../utils/ScrollFadeIn";

export default function AboutSection() {
    return (
        <section id="about" className="bg-[#1A1A1A]/80 py-16">
            <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
                <ScrollFadeIn>
                    <div className="text-center mb-12">
                        <h3 className="font-poppins text-2xl sm:text-3xl md:text-4xl font-semibold uppercase bg-[#B4B4B4] inline-block px-6 py-2 rounded-md text-black">
                            About Us
                        </h3>
                    </div>
                </ScrollFadeIn>

                <div className="flex flex-col xl:flex-row items-center justify-center gap-8 xl:gap-16">
                    <ScrollFadeIn delay={0.2}>
                        <img
                            src="/Eternal_logo.png"
                            alt="Eternal Electrical Logo"
                            className="w-48 sm:w-64 md:w-80 lg:w-[400px] xl:w-[500px] h-auto object-contain mx-auto xl:mx-0"
                        />
                    </ScrollFadeIn>

                    <ScrollFadeIn delay={0.4}>
                        <div className="max-w-3xl text-center xl:text-left">
                            <h2 className="font-poppins text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-8 leading-snug">
                                Your Trusted Partner in Electrical & Solar Solutions
                            </h2>
                            <p className="font-inria text-base sm:text-lg md:text-xl text-[#E0E0E0] leading-6 sm:leading-8 md:leading-9 text-justify xl:text-left">
                                Eternal Electrical is a professional electrical and solar service
                                provider founded by Electrical Engineer Sudhansh Bidkar. With a
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
                                into reality — with safety, performance, and long‑term reliability
                                at the core of everything we do.
                            </p>
                        </div>
                    </ScrollFadeIn>
                </div>
            </div>
        </section>
    );
}
