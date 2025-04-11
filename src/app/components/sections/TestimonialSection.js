"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Scrollbar, A11y, Mousewheel } from "swiper/modules";
// import "swiper/css"; // Optional: ensure Swiper styles are imported globally
import testimonials from "@/app/data/testimonialsData";
import TestimonialCard from "../cards/TestimonialCard";
import ScrollFadeIn from "../utils/ScrollFadeIn";

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-[#1A1A1A] py-4 md:py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollFadeIn>
          <div className="flex flex-col items-center text-center mb-12">
            <h1 className="font-poppins text-2xl sm:text-3xl md:text-4xl font-bold uppercase bg-[#B4B4B4] inline-block rounded-md px-6 py-2 my-12 text-black">
              What our customers say
            </h1>
            <p className="font-inria text-base sm:text-lg md:text-xl text-white max-w-6xl">
              At Eternal Electrical, client satisfaction is at the core of
              everything we do. From homes and businesses to large-scale industrial
              projects, we've earned trust through consistent quality, timely
              execution, and innovative energy solutions. Here's what our customers
              have to say about their experience working with us.
            </p>
          </div>
        </ScrollFadeIn>

        <ScrollFadeIn delay={0.2}>
          <div className="relative">
            {/* Left Gradient Overlay */}
            <div className="absolute top-0 left-0 w-24 sm:w-48 h-full pointer-events-none bg-gradient-to-r from-[#1A1A1A] to-transparent z-10"></div>
            {/* Right Gradient Overlay */}
            <div className="absolute top-0 right-0 w-24 sm:w-48 h-full pointer-events-none bg-gradient-to-l from-[#1A1A1A] to-transparent z-10"></div>

            <Swiper
              className="testimonial-swiper"
              modules={[Pagination, Scrollbar, A11y, Mousewheel]}
              mousewheel={true}
              loop={true}
              pagination={{ clickable: true }}
              scrollbar={{ draggable: true }}
              spaceBetween={120}
              slidesPerGroup={1}
              breakpoints={{
                320: { slidesPerView: 1 },
                640: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
                1280: { slidesPerView: 4 },
              }}
            >
              {testimonials.map((item, index) => (
                <SwiperSlide key={index}>
                  <TestimonialCard
                    review={item.review}
                    name={item.name}
                    designation={item.designation}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </ScrollFadeIn>
      </div>
    </section>
  );
}
