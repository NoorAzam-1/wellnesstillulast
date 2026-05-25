export default function AnnouncementBar() {
  return (
    <div className="h-12 bg-[#012317] text-[#ffdea4] flex items-center overflow-hidden fixed top-0 w-full z-50 border-b border-white/10">
      <div className="animate-marquee whitespace-nowrap flex gap-20 uppercase text-xs tracking-[4px] px-10">
        <span>Free Ayurvedic Consultation</span>
        <span>20% Off Wellness Essentials</span>
        <span>Trusted Holistic Care</span>
        <span>Ancient Wisdom for Modern Living</span>
        <span>Free Ayurvedic Consultation</span>
        <span>20% Off Wellness Essentials</span>
        <span>Trusted Holistic Care</span>
        <span>Ancient Wisdom for Modern Living</span>
      </div>
    </div>
  );
}