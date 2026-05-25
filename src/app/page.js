import AnnouncementBar from "@/components/AnnouncementBar";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import PhilosphySection from "@/components/PhilosphySection";
import FeaturedProducts from "@/components/FeaturedProducts";
import WhyChooseSection from "@/components/WhyChooseSection";
import IngredientsSection from "@/components/IngredientsSection";
import Testimonials from "@/components/Testimonials";
import FounderSection from "@/components/FounderSection";
import BlogSection from "@/components/BlogSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-[#fff8f4] text-[#221a11] overflow-hidden">
      <AnnouncementBar />
      <Header />

      <div className="pt-32">
        <HeroSection />
        <PhilosphySection />
        <FeaturedProducts />
        <WhyChooseSection />
        <IngredientsSection />
        <Testimonials />
        <FounderSection />
        <BlogSection />
        <CTASection />
      </div>

      <Footer />
    </main>
  );
}