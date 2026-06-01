import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { INITIATIVES_DATA } from "@/data/initiatives";

export default async function InitiativeDetails({ params }) {
  const { slug } = await params;
  const initiative = INITIATIVES_DATA.find((item) => item.id === slug);

  if (!initiative) {
    notFound();
  }

  return (
    <section className="bg-light min-h-screen">
      <div className="relative h-[600px]">
        <img
          src={initiative.image}
          alt={initiative.title}
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/40" />

        <div className="absolute bottom-20 left-1/2 -translate-x-1/2 text-center text-white px-6">
          <p className="section-tag text-secondary">{initiative.category}</p>

          <h1 className="text-6xl font-bold mt-4">{initiative.title}</h1>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-20">
        <Link
          href="/"
          className="inline-flex items-center gap-2 mb-10 text-primary font-semibold"
        >
          <ArrowLeft size={18} />
          Back
        </Link>

        <div className="glass-card rounded-[35px] p-10">
          <h2 className="text-4xl font-bold mb-6">About This Initiative</h2>

          <p className="text-lg leading-9 text-gray-600">
            {initiative.longDesc}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mt-10">
          <div className="glass-card rounded-[35px] p-8">
            <h3 className="text-2xl font-bold mb-4">Impact Indicator</h3>

            <p className="text-5xl font-bold text-primary">
              {initiative.stats.primary}
            </p>

            <p className="mt-3 text-gray-600">{initiative.stats.label}</p>
          </div>

          <div className="glass-card rounded-[35px] p-8">
            <h3 className="text-2xl font-bold mb-4">Key Benefit</h3>

            <p className="text-gray-600 leading-8">{initiative.keyBenefit}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
