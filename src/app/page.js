// app/page.js

import AboutSection from "./components/sections/AboutSection";
import BannerSection from "./components/sections/BannerSection";
import BlogsSection from "./components/sections/BlogsSection";
import CareerSection from "./components/sections/CareerSection";
import ContactSection from "./components/sections/ContactSection";
import FAQSection from "./components/sections/FAQSection";
import OurWorkSection from "./components/sections/OurWorkSection";
import ServiceSection from "./components/sections/ServiceSection";
import Testimonials from "./components/sections/TestimonialSection";
import { fetchBlogs } from "@/lib/contentful";

export default async function Home() {
  const blogs = await fetchBlogs();

  return (
    <div className="">
      <BannerSection />
      <AboutSection />
      <ServiceSection />
      <OurWorkSection />
      <Testimonials />
      <BlogsSection blogs={blogs} />
      <FAQSection />
      <CareerSection />
      <ContactSection />
    </div>
  );
}
