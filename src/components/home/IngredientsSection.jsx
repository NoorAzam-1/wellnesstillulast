const items = ["Ashwagandha", "Tulsi", "Turmeric", "Neem"];

export default function IngredientsSection() {
  return (
    <section className="py-28 bg-[#012317] text-white">
      <div className="max-w-7xl mx-auto px-8">
        <h2 className="text-5xl font-bold text-center mb-20">
          Soul of the Earth
        </h2>

        <div className="flex flex-wrap justify-center gap-16">
          {items.map((item) => (
            <div key={item} className="text-center">
              <div className="w-40 h-40 rounded-full border-2 border-[#fcca66]" />

              <h3 className="mt-6 text-2xl">{item}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}