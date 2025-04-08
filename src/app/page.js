import AboutSection from "./components/sections/AboutSection";
import BannerSection from "./components/sections/BannerSection";
import BlogsSection from "./components/sections/BlogsSection";
import FAQSection from "./components/sections/FAQSection";
import Navbar from "./components/sections/Navbar";
import OurWorkSection from "./components/sections/OurWorkSection";
import ServiceSection from "./components/sections/ServiceSection";
import Testimonials from "./components/sections/TestimonialSection";

export default function Home() {
  return (
    <div className="">
      {/* <Navbar /> */}
      <BannerSection />
      <AboutSection />
      <ServiceSection />
      <OurWorkSection />
      <Testimonials />
      <BlogsSection />
      <FAQSection />

    </div>
  );
}
