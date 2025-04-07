
export default function ServiceCard({ icon, alt, title, description }) {
    return (
        <>

            <div className=" group bg-[#2A2A2A]  hover:bg-[#5e5e5e] hover:text-[#000000] transition-colors duration-300  max-w-xs rounded-md text-white   px-4 py-8  flex flex-col  items-center border-6 border-[#333333] hover:border-[#4d4d4d]">
                <div className="mb-4"> <img src={icon} alt={alt} className="w-16  invert-80  group-hover:invert-0 duration-300" ></img>  </div>
                <h2 className="text-3xl text-center font-bold mb-8 ">{title}</h2>
                <p className="text-base text-center leading-7 ">{description}</p>
            </div>
        </>
    )
}