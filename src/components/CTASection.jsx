export default function CTASection() {
  return (
    <section className="px-6 lg:px-20 py-28">
      <div className="cta-bg rounded-[50px] p-20 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />

        <div className="relative z-10">
          <h2 className="text-5xl md:text-7xl font-bold text-white leading-tight">
            Join The Green Revolution
          </h2>

          <p className="text-white/80 text-xl max-w-3xl mx-auto mt-8 leading-9">
            Take a step towards sustainability and help
            protect our planet for future generations.
          </p>

          <button className="impact-btn mt-12">
            Start Today
          </button>
        </div>
      </div>
    </section>
  );
}