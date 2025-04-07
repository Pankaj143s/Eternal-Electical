export default function TestimonialCard({ review, name, designation }) {
    return (
        <div className="p-4">
            <div className="bg-[#2A2A2A] w-80 h-96 rounded-md px-4 py-8 flex flex-col justify-between text-center shadow-md hover:bg-[#3A3A3A] transition-colors duration-300">
                {/* Top - Icon + Review */}
                <div>
                    <img src="/icons/testimonial.png" alt="Testimonial Icon" className="w-12 mx-auto saturate-0 mb-4" />
                    <p className="text-[#DDDDDD] text-md leading-7 text-center">{review}</p>
                </div>

                {/* Bottom - Name + Role */}
                <div>
                    <h3 className="text-white text-2xl font-bold mt-6">{name}</h3>
                    <p className="text-[#999999] text-sm">{designation}</p>
                </div>
            </div>
        </div>
    );
}
