import PhilosphySection from "@/components/PhilosphySection";
import FeaturedProducts from "@/components/FeaturedProducts";
import WhyChooseSection from "@/components/WhyChooseSection";
import IngredientsSection from "@/components/IngredientsSection";
import Testimonials from "@/components/Testimonials";
import FounderSection from "@/components/FounderSection";
import BlogSection from "@/components/BlogSection";
import CTASection from "@/components/CTASection";
import HeroSection from "./HeroSection";
import Initiatives from "./Initiatives";

export default function Hero() {
  return (
    <div className="pt-32">
      {/* <HeroSection /> */}
      <Initiatives />
      <PhilosphySection />
      <FeaturedProducts />
      <WhyChooseSection />
      <IngredientsSection />
      <Testimonials />
      <FounderSection />
      <BlogSection />
      <CTASection />
    </div>
  );
}
