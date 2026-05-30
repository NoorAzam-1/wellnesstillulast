"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { INITIATIVES_DATA } from "@/data/initiatives";

export default function Initiatives() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <h2 className="section-title">
            Sustainable Solutions
          </h2>

          <p className="section-description mt-6">
            Explore our key initiatives.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {INITIATIVES_DATA.map((item) => (
            <div
              key={item.id}
              className="initiative-card group"
            >
              <img
                src={item.image}
                alt={item.title}
                className="initiative-image"
              />

              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4">
                  {item.title}
                </h3>

                <p className="text-gray-600 mb-8">
                  {item.shortDesc}
                </p>

                <Link
                  href={`/initiatives/${item.id}`}
                  className="flex items-center gap-2 text-primary font-semibold"
                >
                  Learn More
                  <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}