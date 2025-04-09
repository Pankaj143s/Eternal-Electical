export default function BannerSection() {
  return (
    <section
      id="banner"
      className="h-screen bg-cover bg-center flex items-center md:justify-start justify-center relative"
      style={{ backgroundImage: "url(/solarBackground.jpg)" }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center md:text-left">
        <h1 className="font-poppins text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-8 uppercase text-white">
          Eternal <br /> Electrical
        </h1>
        <p className="font-inria text-base sm:text-lg md:text-xl text-white mb-8 max-w-2xl mx-auto md:mx-0">
          At Eternal Electrical, we specialize in smart electrical consultancy,
          solar installations, control panels, and automation that enhance
          safety, save energy, and future-proof your power systems.
        </p>
        <a
          className="text-lg bg-[#121212] text-[#FFFFFF] px-4 py-2 rounded-md font-poppins font-semibold cursor-pointer inline-block"
          href="#"
        >
          Contact us
        </a>
      </div>
    </section>
  );
}
