const items = [
  {
    title: "Eco Friendly",
    icon: "🌿",
  },
  {
    title: "Green Technology",
    icon: "♻️",
  },
  {
    title: "Sustainable Future",
    icon: "🌎",
  },
  {
    title: "Clean Environment",
    icon: "🍃",
  },
];

export default function WhyChooseSection() {
  return (
    <section className="py-18 px-6 lg:px-20 relative overflow-hidden">
      <div className="text-center w-full mx-auto">
        <span className="section-tag">Why Choose Us</span>

        <h2 className="section-title mt-5">
          Together We Build a{" "}
          <span className="bg-clip-text text-transparent bg-linear-to-r from-[#1f7d2d] via-emerald-600 to-[#102414]">
            Greener World
          </span>
        </h2>

        <p className="mt-3 text-[#5f6f63] leading-8">
          Creating long-term environmental impact through sustainable
          initiatives, innovative solutions and community-driven action.
        </p>

      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mt-8">
        {items.map((item, index) => (
          <div key={index} className="group text-center">
            <div className="w-24 h-24 mx-auto rounded-full bg-[#ddf1d4] flex items-center justify-center text-5xl transition-all duration-500 group-hover:-translate-y-3 group-hover:shadow-xl">
              {item.icon}
            </div>

            <h3 className="mt-4 text-xl font-bold text-[#102414] group-hover:text-[#1f7d2d] transition-colors">
              {item.title}
            </h3>

            <div className="w-0 h-[2px] bg-[#1f7d2d] mx-auto mt-3 transition-all duration-500 group-hover:w-20"></div>

            <p className="mt-3 text-[#5f6f63] leading-7 text-sm">
              Building sustainable solutions through innovation, environmental
              responsibility and community impact.
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}