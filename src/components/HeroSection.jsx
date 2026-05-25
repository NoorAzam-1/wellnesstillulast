import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center max-w-7xl mx-auto px-8 py-20">
      <div className="grid lg:grid-cols-2 gap-20 items-center">
        <div>
          <h1 className="text-6xl font-bold leading-tight text-[#012317]">
            Ancient Ayurveda.
            <br />
            Modern Healing.
          </h1>

          <p className="mt-8 text-lg text-gray-600 max-w-xl">
            Discover the transformative power of authentic Ayurvedic wellness,
            meticulously crafted with botanical purity for modern lifestyles.
          </p>

          <div className="flex gap-5 mt-10 flex-wrap">
            <button className="bg-[#012317] text-white px-8 py-4 rounded-full uppercase text-sm">
              Explore Products
            </button>

            <button className="border border-[#7b5900] px-8 py-4 rounded-full uppercase text-sm">
              Book Consultation
            </button>
          </div>
        </div>

        <div className="relative h-[600px] rounded-3xl overflow-hidden shadow-2xl">
          <Image
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAVH_BqnkqwmqjjEmPiNM3Z814nx5-z5cl5YrTH3LbV6u7JtNj0JoFDPDRPt6VlIdjj9ImT-ppuZ8s-zT3kKAnyg4JwFHozliqdOQwcYSsqVHCBBVD9riHnO7l7KU1I_6zqqFZd18yozR-H68-F--8_uKgy5co6tJ7rfgq905nR82JQs0T0S4p9z4st956ltCn1oSN6NbZF4h4ATJR3SD3z0fJ17ouoto2KWqtFxr2_2puRAOk1sX2MEZFvZa20ixUvAgra63ig77o"
            alt="Ayurveda"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}