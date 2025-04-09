export default function TestimonialCard({ review, name, designation }) {
    return (
        <div className="p-4">
            <div className="bg-[#2A2A2A] w-72 sm:w-80 h-[26rem] rounded-md px-4 py-8 flex flex-col justify-between text-center shadow-md hover:bg-[#3A3A3A] transition-colors duration-300 mx-auto">
                {/* Top - Icon + Review */}
                <div>
                    <img
                        src="/icons/testimonial.png"
                        alt="Testimonial Icon"
                        className="w-12 mx-auto saturate-0 mb-4"
                    />
                    <p className="font-inria text-sm sm:text-base md:text-lg text-[#DDDDDD] leading-7 text-center">
                        {review}
                    </p>
                </div>

                {/* Bottom - Name + Role */}
                <div className="mt-6">
                    <h3 className="font-poppins text-lg sm:text-xl md:text-2xl text-white font-bold">
                        {name}
                    </h3>
                    <p className="font-inria text-xs sm:text-sm text-[#999999]">
                        {designation}
                    </p>
                </div>
            </div>
        </div>
    );
}
