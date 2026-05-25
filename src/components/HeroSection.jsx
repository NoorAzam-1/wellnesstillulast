import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center px-6 lg:px-20 py-32 overflow-hidden">
      {/* Background Blur */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-primary/20 blur-3xl rounded-full" />

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center relative z-10">
        {/* Left */}
        <div>
          <span className="text-primary font-semibold tracking-[5px] uppercase">
            Sustainable Future
          </span>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight text-dark mt-6">
            Sustainable Solutions
            <span className="text-primary block">
              For A Better Planet
            </span>
          </h1>

          <p className="text-lg text-gray-600 mt-8 max-w-xl leading-8">
            Explore innovative environmental initiatives focused on
            conservation, sustainability, and creating a greener future.
          </p>

          <div className="flex flex-wrap gap-5 mt-10">
            <button className="primary-btn">
              Explore Initiatives
            </button>

            <button className="secondary-btn">
              Learn More
            </button>
          </div>
        </div>

        {/* Right */}
        <div className="relative">
          <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full scale-125" />

          <div className="glass-card p-5 rounded-[40px] relative">
            <Image
              src="https://images.unsplash.com/photo-1511497584788-876760111969?q=80&w=1200&auto=format&fit=crop"
              alt="Nature"
              width={700}
              height={700}
              className="rounded-[30px] object-cover h-[650px]"
            />

            {/* Floating Card */}
            <div className="absolute -bottom-10 -left-10 bg-white rounded-3xl shadow-2xl px-8 py-6 border border-border">
              <h3 className="text-4xl font-bold text-primary">
                250K+
              </h3>
              <p className="text-gray-600 mt-2">
                Trees Planted Worldwide
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Leaves */}
      <div className="absolute top-10 left-10 opacity-30">
        🍃
      </div>

      <div className="absolute bottom-10 right-10 opacity-30">
        🌿
      </div>
    </section>
  );
}