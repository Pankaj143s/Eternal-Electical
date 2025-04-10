// components/cards/ServiceCard.jsx
'use client';

export default function ServiceCard({ icon, alt, title, description }) {
    return (
        <div className="group bg-[#2A2A2A] hover:bg-[#5e5e5e] hover:text-[#000000] transition-colors duration-300 md:max-w-72 2xl:max-w-xs rounded-md text-white px-4 py-8 flex flex-col justify-between items-center border border-[#333333] hover:border-[#4d4d4d] min-h-[480px]">
            {/* Icon */}
            <div className="flex-shrink-0 mb-4">
                <img
                    src={icon}
                    alt={alt}
                    className="w-16 invert-80 group-hover:invert-0 transition duration-300"
                />
            </div>

            {/* Title */}
            <h2 className="font-poppins text-2xl text-center font-bold mb-4">
                {title}
            </h2>

            {/* Description */}
            <div className="flex-1 font-inria text-base text-center leading-7 min-h-[180px]">
                {description}
            </div>
        </div>
    );
}
