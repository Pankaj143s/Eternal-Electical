import ServiceCard from "../cards/ServiceCard"
import services from "@/app/data/servicesData"

export default function ServiceSection() {
    return (

        <section className="bg-[#1A1A1A]" >

            <div className="flex flex-col  items-center  text-center mb-12">
                <h1 className="uppercase  text-4xl font-bold bg-[#B4B4B4]  inline-block rounded-md px-6 py-2 my-12">Our Services</h1>
                <p className="text-white text-xl max-w-6xl">At Eternal Electrical, we provide end-to-end electrical and solar services for residential, commercial, and industrial needs. From smart energy designs to powerful automation systems, our solutions are tailored to maximize safety, performance, and efficiency.</p>


            </div>
            <div>
                <div className="flex justify-center flex-wrap gap-4 mb-6 ">
                    {services.map((service, index) => (
                        <ServiceCard key={index} icon={service.icon} alt={service.alt} title={service.title} description={service.description} />
                    ))}

                </div>

            </div>

            <div className="flex justify-center pb-12 ">

                <a href="#" className="bg-[#9F9F9F] text-xl font-semibold px-4 py-1 rounded-md flex gap-2 items-center justify-center"><img src="/icons/PhoneIcon1.png" className="w-8 h-auto"></img> Need Help Choosing a Service? Let’s Talk</a>
            </div>



        </section>


    )
}