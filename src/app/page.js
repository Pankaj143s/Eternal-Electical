import TestimonialCard from "./components/cards/TestimonialCard";
import AboutSection from "./components/sections/AboutSection";
import BannerSection from "./components/sections/BannerSection";
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
    </div>
  );
}
