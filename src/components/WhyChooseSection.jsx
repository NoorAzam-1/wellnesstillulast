const features = [
  "Pure Ingredients",
  "Certified Safe",
  "Expert Curated",
  "Modern Science",
];

export default function WhyChooseSection() {
  return (
    <section className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-4 gap-8">
        {features.map((item) => (
          <div
            key={item}
            className="border border-black/5 rounded-3xl p-10 hover:border-[#7b5900] transition"
          >
            <h3 className="text-2xl font-semibold text-[#012317]">
              {item}
            </h3>

            <p className="mt-4 text-gray-600">
              Premium Ayurvedic wellness crafted with purity and science.
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}