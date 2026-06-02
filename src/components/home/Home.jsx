import FeaturedProducts from "@/components/home/FeaturedProducts";
import WhyChooseSection from "@/components/home/WhyChooseSection";
import IngredientsSection from "@/components/home/IngredientsSection";
import Testimonials from "@/components/home/Testimonials";
import FounderSection from "@/components/home/FounderSection";
import BlogSection from "@/components/home/BlogSection";
import CTASection from "@/components/home/CTASection";
import HeroSection from "./HeroSection";
import Bestseller from "./BestSeller";

export default function Home() {
  return (
    <div className="pt-32">
      <HeroSection />
      <FeaturedProducts />
      <Bestseller />
      <WhyChooseSection />
      <IngredientsSection />
      <Testimonials />
      <FounderSection />
      <BlogSection />
      <CTASection />
    </div>
  );
}
