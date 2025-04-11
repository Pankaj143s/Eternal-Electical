// app/components/sections/BlogsSection.js

'use client';

import React from "react";
import BlogsCard from "../cards/BlogsCard";
import ScrollFadeIn from "../utils/ScrollFadeIn";
import { motion } from "framer-motion";

export default function BlogsSection({ blogs = [] }) {
    return (
        <section id="blogs" className="bg-[#0C1013] py-8">
            <div className="container mx-auto px-4">
                <ScrollFadeIn>
                    <div className="flex flex-col items-center text-center mb-12">
                        <h1 className="font-poppins text-2xl sm:text-3xl md:text-4xl font-bold uppercase bg-[#B4B4B4] inline-block rounded-md px-6 py-2 my-12 text-black">
                            Our Latest Blogs
                        </h1>
                        <p className="font-inria text-base sm:text-lg md:text-xl text-white max-w-6xl mx-auto">
                            Stay informed with our expert articles, tips, and industry news on
                            electrical systems, solar energy, automation, and energy-saving
                            innovations.
                        </p>
                    </div>
                </ScrollFadeIn>

                <div className="flex flex-wrap justify-center gap-2 md:gap-6">
                    {blogs.map((blog, index) => {
                        const { fields } = blog;
                        const imageUrl = fields.blogImage?.fields?.file?.url;

                        let formattedDate = "Unknown date";
                        if (fields.blogPostingDate) {
                            const dateObj = new Date(fields.blogPostingDate);
                            const day = dateObj.getDate().toString().padStart(2, "0");
                            const month = dateObj.toLocaleString("default", { month: "long" });
                            const year = dateObj.getFullYear();
                            formattedDate = `${day}-${month}-${year}`;
                        }

                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <BlogsCard
                                    blogImage={imageUrl ? `https:${imageUrl}` : "/placeholder.png"}
                                    imageAlt={fields.blogImageAlt || "Blog Image"}
                                    title={fields.blogTitle}
                                    description={fields.blogDescription}
                                    date={formattedDate}
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
                            className="w-fit flex items-center gap-2 bg-[#3f3f3f] hover:bg-[#555555] hover:shadow-lg transition-shadow duration-300 text-white font-semibold px-4 py-2 sm:px-5 sm:py-3 rounded-md"
                        >
                            <img src="/icons/linkedin.png" alt="LinkedIn Icon" className="w-5 h-5" />
                            Connect on LinkedIn
                        </a>
                        <a
                            href="https://www.instagram.com/eternalelectrical/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-fit flex items-center gap-2 bg-[#3f3f3f] hover:bg-[#555555] hover:shadow-lg transition-shadow duration-300 text-white font-semibold px-4 py-2 sm:px-5 sm:py-3 rounded-md"
                        >
                            <img src="/icons/instagram.png" alt="Instagram Icon" className="w-5 h-5" />
                            Follow on Instagram
                        </a>
                    </div>
                </ScrollFadeIn>
            </div>
        </section>
    );
}
