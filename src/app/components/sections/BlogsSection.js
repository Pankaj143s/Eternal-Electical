import BlogsCard from "../cards/BlogsCard";
import { fetchBlogs } from "@/lib/contentful";

export default async function BlogsSection() {
    const blogs = await fetchBlogs(); // Already fetched on server

    return (
        <section id="blogs" className="bg-[#0C1013] py-12 px-4">
            <div className="flex flex-col items-center text-center mb-12">
                <h1 className="font-poppins text-2xl sm:text-3xl md:text-4xl font-bold uppercase bg-[#B4B4B4] inline-block rounded-md px-6 py-2 my-12 text-black">
                    Our Latest Blogs
                </h1>
                <p className="font-inria text-base sm:text-lg md:text-xl text-white max-w-6xl">
                    Stay informed with our expert articles, tips, and industry news on
                    electrical systems, solar energy, automation, and energy-saving
                    innovations.
                </p>
            </div>

            <div className="container mx-auto flex flex-wrap justify-center gap-6">
                {blogs.map((blog, index) => {
                    const { fields } = blog;
                    const imageUrl = fields.blogImage?.fields?.file?.url;

                    // Format the date to "DD-Month-YYYY"
                    let formattedDate = "Unknown date";
                    if (fields.blogPostingDate) {
                        const dateObj = new Date(fields.blogPostingDate);
                        const day = dateObj.getDate().toString().padStart(2, "0");
                        const month = dateObj.toLocaleString("default", { month: "long" });
                        const year = dateObj.getFullYear();
                        formattedDate = `${day}-${month}-${year}`;
                    }

                    return (
                        <BlogsCard
                            key={index}
                            blogImage={imageUrl ? `https:${imageUrl}` : "/placeholder.png"}
                            imageAlt={fields.blogImageAlt || "Blog Image"}
                            title={fields.blogTitle}
                            description={fields.blogDescription}
                            date={formattedDate}
                        />
                    );
                })}
            </div>

            {/* Social Buttons Section */}
            <div className="flex justify-center gap-6 mt-12">
                {/* LinkedIn Button */}
                <a
                    href="https://www.linkedin.com/in/yourprofile" // Replace with your actual LinkedIn URL
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-[#3f3f3f] hover:opacity-90 text-white font-semibold px-5 py-3 rounded-md transition-colors duration-300"
                >
                    <img
                        src="/icons/linkedin.png"
                        alt="LinkedIn Icon"
                        className="w-5 h-5"
                    />
                    Connect on LinkedIn
                </a>
                {/* Instagram Button */}
                <a
                    href="https://www.instagram.com/yourprofile" // Replace with your actual Instagram URL
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-[#3f3f3f] hover:opacity-90 text-white font-semibold px-5 py-3 rounded-md transition-colors duration-300"
                >
                    <img
                        src="/icons/instagram.png"
                        alt="Instagram Icon"
                        className="w-5 h-5"
                    />
                    Follow on Instagram
                </a>
            </div>
        </section>
    );
}
