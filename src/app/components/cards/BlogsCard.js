export default function BlogsCard({ blogImage, imageAlt, title, description, date }) {
    return (
        <div className="group w-full max-w-sm bg-[#2A2A2A] hover:bg-[#1A1A1A] transition-colors duration-500 text-center rounded-md shadow-md overflow-hidden flex flex-col">
            {/* Image container */}
            <div className="overflow-hidden">
                <img
                    src={blogImage}
                    alt={imageAlt}
                    className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105"
                />
            </div>

            {/* Text container */}
            <div className="px-4 py-4 flex flex-col flex-grow">
                <h3 className="font-poppins text-base sm:text-lg md:text-xl text-[#C4C4C4] font-bold mb-2">
                    {title}
                </h3>
                <p className="font-inria text-xs sm:text-sm md:text-base text-[#A6A6A6] font-medium mb-4 flex-grow">
                    {description}
                </p>
                <p className="font-poppins text-xs sm:text-sm text-[#696969] text-right font-bold">
                    {date}
                </p>
            </div>
        </div>
    );
}
