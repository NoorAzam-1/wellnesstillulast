import AnnouncementBar from "@/components/AnnouncementBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className="bg-[#fff8f4] text-[#221a11] overflow-hidden">
      <AnnouncementBar />
      <Header />   
      <Hero />  
      <Footer />
    </main>
  );
}