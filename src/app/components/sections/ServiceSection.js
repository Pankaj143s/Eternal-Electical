import ServiceCard from "../cards/ServiceCard";
import services from "@/app/data/servicesData";

export default function ServiceSection() {
    return (
        <section className="bg-[#1A1A1A]">
            <div className="flex flex-col items-center text-center mb-12 px-4">
                <h1 className="font-poppins text-2xl sm:text-3xl md:text-4xl font-bold uppercase bg-[#B4B4B4] inline-block rounded-md px-6 py-2 my-12 text-black">
                    Our Services
                </h1>
                <p className="font-inria text-base sm:text-lg md:text-xl text-white max-w-6xl">
                    At Eternal Electrical, we provide end-to-end electrical and solar
                    services for residential, commercial, and industrial needs. From smart
                    energy designs to powerful automation systems, our solutions are
                    tailored to maximize safety, performance, and efficiency.
                </p>
            </div>

            <div className="flex justify-center flex-wrap gap-4 mb-6 px-4">
                {services.map((service, index) => (
                    <ServiceCard
                        key={index}
                        icon={service.icon}
                        alt={service.alt}
                        title={service.title}
                        description={service.description}
                    />
                ))}
            </div>

            <div className="flex justify-center pb-12 px-4">
                <a
                    href="#"
                    className="font-poppins bg-[#9F9F9F] hover:bg-[#bfbfbf] text-base sm:text-lg md:text-xl font-semibold px-4 py-2 rounded-md flex gap-2 items-center justify-center transition-all duration-300 transform hover:scale-[1.03]"
                >
                    <img
                        src="/icons/PhoneIcon1.png"
                        className="w-8 h-auto transition-transform duration-300 group-hover:translate-x-1"
                        alt="Phone"
                    />
                    Need Help Choosing a Service? Let’s Talk
                </a>
            </div>
        </section>
    );
}
