export default function PhilosphySection() {
  return (
    <section className="bg-[#fbebdc] py-28">
      <div className="max-w-7xl mx-auto px-8 grid lg:grid-cols-2 gap-20 items-center">
        <div>
          <span className="uppercase tracking-[4px] text-sm text-[#7b5900]">
            Our Ethos
          </span>

          <h2 className="text-5xl font-bold mt-6 text-[#012317]">
            Rooted in 5,000 Years of Wisdom.
          </h2>

          <p className="mt-8 text-lg text-gray-600 leading-8">
            Ayurveda is not merely a system of medicine; it is a philosophy of
            life.
          </p>
        </div>

        <div className="bg-white rounded-[40px] h-[500px]" />
      </div>
    </section>
  );
}