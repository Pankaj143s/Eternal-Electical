import AboutSection from "./components/sections/AboutSection";
import BannerSection from "./components/sections/BannerSection";
import BlogsSection from "./components/sections/BlogsSection";
import CareerSection from "./components/sections/CareerSection";
import FAQSection from "./components/sections/FAQSection";
import OurWorkSection from "./components/sections/OurWorkSection";
import ServiceSection from "./components/sections/ServiceSection";
import Testimonials from "./components/sections/TestimonialSection";

export default function Home() {
  return (
    <div className="">
      <BannerSection />
      <AboutSection />
      <ServiceSection />
      <OurWorkSection />
      <Testimonials />
      <BlogsSection />
      <FAQSection />
      <CareerSection />


    </div>
  );
}
