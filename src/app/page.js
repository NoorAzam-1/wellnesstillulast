import AnnouncementBar from "@/components/common/AnnouncementBar";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import Home from "@/components/home/Home";

export default function page() {
  return (
    <main className="bg-[#fff8f4] text-[#221a11] overflow-hidden">
      <AnnouncementBar />
      <Header />   
      <Home />  
      <Footer />
    </main>
  );
}