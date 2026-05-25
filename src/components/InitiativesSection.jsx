import InitiativeCard from "./InitiativeCard";

const initiatives = [
  {
    title: "Carbon Garden",
    desc: "Creating green spaces that absorb carbon naturally.",
    image:
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=1200",
  },
  {
    title: "Miyawaki Forest",
    desc: "Dense forests restoring biodiversity and clean air.",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200",
  },
  {
    title: "Water Conservation",
    desc: "Smart water management for a sustainable tomorrow.",
    image:
      "https://images.unsplash.com/photo-1502741338009-cac2772e18bc?q=80&w=1200",
  },
];

export default function InitiativesSection() {
  return (
    <section className="py-28 px-6 lg:px-20">
      <div className="text-center max-w-4xl mx-auto">
        <span className="section-tag">
          Our Initiatives
        </span>

        <h2 className="section-title mt-5">
          Sustainable Solutions for a Better Planet
        </h2>

        <p className="section-description mt-6">
          Explore key environmental initiatives designed to
          protect nature and create a greener future.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mt-20">
        {initiatives.map((item, index) => (
          <InitiativeCard key={index} {...item} />
        ))}
      </div>
    </section>
  );
}