'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Scrollbar, A11y, Mousewheel } from 'swiper/modules';
import testimonials from '@/app/data/testimonialsData';
import TestimonialCard from '../cards/TestimonialCard';

export default function Testimonials() {
    return (
        <section className="bg-[#1A1A1A] py-16">
            <div className="flex flex-col items-center text-center mb-12">
                <h1 className="uppercase text-4xl font-bold bg-[#B4B4B4] inline-block rounded-md px-6 py-2 my-12">
                    What our customers say
                </h1>
                <p className="text-white text-xl max-w-6xl">
                    At Eternal Electrical, client satisfaction is at the core of everything we do. From homes and businesses to large-scale industrial projects, we've earned trust through consistent quality, timely execution, and innovative energy solutions. Here's what our customers have to say about their experience working with us.
                </p>
            </div>

            <div className="max-w-7xl mx-auto relative">
                {/* Left Gradient Overlay */}
                <div className="absolute top-0 left-0 w-36 sm:w-64 h-full pointer-events-none bg-gradient-to-r from-[#1A1A1A] to-transparent z-10"></div>
                {/* Right Gradient Overlay */}
                <div className="absolute top-0 right-0 w-36 sm:w-64 h-full pointer-events-none bg-gradient-to-l from-[#1A1A1A] to-transparent z-10"></div>

                <Swiper
                    className="testimonial-swiper"
                    modules={[Pagination, Scrollbar, A11y, Mousewheel]}
                    mousewheel={true}
                    navigation
                    loop={true}
                    pagination={{ clickable: true }}
                    scrollbar={{ draggable: true }}
                    spaceBetween={70}
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
        </section>
    );
}
