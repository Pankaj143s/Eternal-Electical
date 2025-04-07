export default function BannerSection() {
    return (

        <section className="h-screen bg-cover bg-center flex items-center md:justify-start justify-center relative " style={{ backgroundImage: "url(/solarBackground.jpg)" }}>

            {/* Gradient Overlay */}
            <div className="absolute inset-0  bg-black/30"></div>
            {/* Content */}
            <div className="relative z-10  max-w-5xl  text-center md:text-left mx-0  md:mx-12  lg:mx-24">
                <h1 className="text-5xl sm:text-6xl md:text-7xl  lg:text-8xl font-bold mb-8 uppercase">Eternal <br></br> Electrical</h1>
                <p className="  sm:text-xl md:text-2xl mb-8">At Eternal Electrical, we specialize in smart electrical consultancy, solar installations, control panels, and automation that enhance safety, save energy, and future-proof your power systems.</p>
                <a className="text-lg bg-[#121212] text-[#FFFFFF]  px-4 py-2 rounded-md">Contact us</a>
            </div>
        </section>



    )
}