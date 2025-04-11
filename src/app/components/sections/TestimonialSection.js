"use client";
import React from 'react';
import ScrollFadeIn from '../utils/ScrollFadeIn';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Scrollbar, A11y, Mousewheel } from 'swiper/modules';
import testimonials from '@/app/data/testimonialsData';
import TestimonialCard from '../cards/TestimonialCard';

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative scroll-mt-16 bg-[#1A1A1A] py-8 md:py-12 lg:py-16">
      <div className='absolute inset-0' style={{
        background: "linear-gradient(to bottom, #242424 0%, transparent 5%)",
      }}></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollFadeIn>
          <div className="flex flex-col items-center text-center mb-12">
            <h1 className="font-poppins text-2xl sm:text-3xl md:text-4xl font-bold uppercase bg-[#B4B4B4] inline-block rounded-md px-6 py-2 my-12 text-black">
              What our customers say
            </h1>
            <p className="font-inria text-base sm:text-lg md:text-xl text-white max-w-6xl">
              At Eternal Electrical, client satisfaction is at the core of everything we do. From homes and businesses to large‑scale industrial projects, we've earned trust through consistent quality, timely execution, and innovative energy solutions.
            </p>
          </div>
        </ScrollFadeIn>

        <ScrollFadeIn delay={0.2}>
          <div className="relative">
            <div className="absolute top-0 left-0 w-24 sm:w-48 h-full pointer-events-none bg-gradient-to-r from-[#1A1A1A] to-transparent z-10" />
            <div className="absolute top-0 right-0 w-24 sm:w-48 h-full pointer-events-none bg-gradient-to-l from-[#1A1A1A] to-transparent z-10" />

            <Swiper
              className="testimonial-swiper"
              modules={[Pagination, Scrollbar, A11y, Mousewheel]}
              mousewheel
              loop
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
              {testimonials.map((t, i) => (
                <SwiperSlide key={i}>
                  <TestimonialCard {...t} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </ScrollFadeIn>
      </div>
    </section>
  );
}
