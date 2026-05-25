export default function CTASection() {
  return (
    <section className="py-28 px-8">
      <div className="max-w-7xl mx-auto bg-[#012317] rounded-[50px] p-20 text-center text-white">
        <h2 className="text-6xl font-bold leading-tight">
          Begin Your Ayurvedic
          <br />
          Wellness Journey Today
        </h2>

        <p className="mt-8 text-white/70 text-lg max-w-3xl mx-auto">
          Join over 50,000 seekers who transformed their lives.
        </p>

        <div className="flex justify-center gap-6 mt-12 flex-wrap">
          <button className="bg-[#fcca66] text-black px-10 py-4 rounded-full uppercase text-sm">
            Get Started
          </button>

          <button className="border border-white/20 px-10 py-4 rounded-full uppercase text-sm">
            Free Consultation
          </button>
        </div>
      </div>
    </section>
  );
}