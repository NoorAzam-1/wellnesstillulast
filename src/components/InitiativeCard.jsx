import Image from "next/image";


export default function InitiativeCard({
  title,
  desc,
  image,
}) {
  return (
    <div className="initiative-card group">
      <div className="relative overflow-hidden">
        <Image
          src={image}
          alt={title}
          width={500}
          height={500}
          className="initiative-image"
        />

        <div className="floating-icon">
          🌱
        </div>
      </div>

      <div className="p-8">
        <h3 className="text-3xl font-bold text-dark">
          {title}
        </h3>

        <p className="text-gray-600 mt-5 leading-8">
          {desc}
        </p>

        <button className="learn-btn">
          Learn More →
        </button>
      </div>
    </div>
  );
}