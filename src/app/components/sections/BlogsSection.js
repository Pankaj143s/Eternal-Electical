// components/sections/BlogsSection.jsx
"use client";
import React from "react";
import { motion } from "framer-motion";
import ScrollFadeIn from "../utils/ScrollFadeIn";
import BlogsCard from "../cards/BlogsCard";

export default function BlogsSection({ blogs = [] }) {
    return (
        <section
            id="blogs"
            className="relative scroll-mt-16 bg-[#0C1013] py-8 md:py-12 lg:py-16"
        >
            <div className='absolute inset-0' style={{
                background: "linear-gradient(to bottom, #1A1A1A 0%, transparent 5%)",
            }}></div>
            <div className="container mx-auto px-4">

                <ScrollFadeIn>
                    <div className="flex flex-col items-center text-center mb-12">
                        <h1 className="font-poppins text-2xl sm:text-3xl md:text-4xl font-bold uppercase bg-[#B4B4B4] inline-block rounded-md px-6 py-2 my-12 text-black">
                            Our Latest Blogs
                        </h1>
                        <p className="font-inria text-base sm:text-lg md:text-xl text-white max-w-6xl mx-auto">
                            Stay informed with our expert articles, tips, and industry news on
                            electrical systems, solar energy, automation, and energy‑saving
                            innovations.
                        </p>
                    </div>
                </ScrollFadeIn>

                <div className="flex flex-wrap justify-center gap-4 md:gap-6">
                    {blogs.map((b, i) => {
                        const { fields: f } = b;
                        const img = f.blogImage?.fields?.file?.url;
                        const d = f.blogPostingDate && new Date(f.blogPostingDate);
                        const date = d
                            ? `${String(d.getDate()).padStart(2, "0")}-${d.toLocaleString("default", { month: "long" })}-${d.getFullYear()}`
                            : "Unknown date";

                        return (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                            >
                                <BlogsCard
                                    blogImage={img ? `https:${img}` : "/placeholder.png"}
                                    imageAlt={f.blogImageAlt || "Blog"}
                                    title={f.blogTitle}
                                    description={f.blogDescription}
                                    date={date}
                                />
                            </motion.div>
                        );
                    })}
                </div>

                <ScrollFadeIn delay={0.2}>
                    <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-12">
                        <a
                            href="https://www.linkedin.com/in/yourprofile"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 bg-[#3f3f3f] hover:bg-[#555] text-white font-semibold px-4 py-2 sm:px-5 sm:py-3 rounded-md"
                        >
                            <img src="/icons/linkedinColor.png" alt="" className="w-5 h-5" />
                            Connect on LinkedIn
                        </a>
                        <a
                            href="https://www.instagram.com/eternalelectrical/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 bg-[#3f3f3f] hover:bg-[#555] text-white font-semibold px-4 py-2 sm:px-5 sm:py-3 rounded-md"
                        >
                            <img src="/icons/instagramColor.png" alt="" className="w-5 h-5" />
                            Follow on Instagram
                        </a>
                    </div>
                </ScrollFadeIn>
            </div>
        </section>
    );
}
