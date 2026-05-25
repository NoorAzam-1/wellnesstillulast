export default function FeaturedProducts() {
  return (
    <section className="py-28 max-w-7xl mx-auto px-8">
      <div className="text-center mb-20">
        <span className="uppercase tracking-[4px] text-sm text-[#7b5900]">
          The Apothecary
        </span>

        <h2 className="text-5xl font-bold mt-5 text-[#012317]">
          Potent Formulations
        </h2>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-[#18392b] rounded-3xl h-[500px] p-10 text-white flex flex-col justify-end">
          <h3 className="text-4xl font-bold">
            Immunity Vitality Core
          </h3>

          <p className="mt-4 text-white/70">
            A powerful blend of Amla, Tulsi, and Giloy.
          </p>

          <button className="mt-8 bg-[#fcca66] text-black px-6 py-3 rounded-full w-fit">
            Shop Ritual — ₹3999
          </button>
        </div>

        <div className="grid gap-8">
          <div className="bg-[#5f1d01] rounded-3xl h-[240px]" />
          <div className="bg-[#755400] rounded-3xl h-[240px]" />
        </div>
      </div>
    </section>
  );
}