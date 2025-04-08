export default function BlogsCard({ blogImage, imageAlt, title, description, date }) {
    return (
        <div className="group w-full max-w-sm bg-[#2A2A2A] hover:bg-[#1A1A1A] duration-500 text-center rounded-md shadow-md overflow-hidden flex flex-col">
            {/* Updated Image container with h-56 (about 20% taller than h-48) */}
            <div className="overflow-hidden">
                <img
                    src={blogImage}
                    alt={imageAlt}
                    className="w-full h-56 object-cover    transition-transform duration-500 group-hover:scale-105"
                />
            </div>

            {/* Text container */}
            <div className="px-4 py-4 flex flex-col flex-grow">
                <h3 className="text-[#C4C4C4] text-xl md:text-2xl font-bold mb-2">
                    {title}
                </h3>
                <p className="text-[#A6A6A6] text-sm md:text-md font-medium mb-4 flex-grow">
                    {description}
                </p>
                <p className="text-[#696969] text-right text-xs font-bold">
                    {date}
                </p>
            </div>
        </div>
    );
}
