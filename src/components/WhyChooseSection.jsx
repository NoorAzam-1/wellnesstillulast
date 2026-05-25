const items = [
  "Eco Friendly",
  "Green Technology",
  "Sustainable Future",
  "Clean Environment",
];

export default function WhyChooseSection() {
  return (
    <section className="py-28 px-6 lg:px-20">
      <div className="text-center">
        <span className="section-tag">
          Why Choose Us
        </span>

        <h2 className="section-title mt-5">
          Together We Build a Greener World
        </h2>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-20">
        {items.map((item, index) => (
          <div
            key={index}
            className="glass-card p-10 rounded-[30px] text-center hover:-translate-y-3 transition-all duration-500"
          >
            <div className="text-6xl">
              🌿
            </div>

            <h3 className="text-2xl font-bold text-dark mt-6">
              {item}
            </h3>

            <p className="text-gray-600 mt-5 leading-8">
              Building sustainable solutions through
              innovation and environmental care.
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}