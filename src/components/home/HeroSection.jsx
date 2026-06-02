"use client";
import React, { useState, useMemo } from "react";
import {
  Leaf,
  Droplet,
  Trash2,
  Users,
  ArrowRight,
  Sparkles,
  Sprout,
  Globe,
  Trees,
  Droplets,
  Waves,
  Flower,
} from "lucide-react";
import Link from "next/link";
import { INITIATIVES_DATA } from "@/data/initiatives";

const CATEGORIES = [
  "All",
  "Land & Forests",
  "Water Solutions",
  "Sustainable Food",
];

const iconMap = {
  Sprout: Sprout,
  Trees: Trees,
  Droplets: Droplets,
  Waves: Waves,
  Leaf: Leaf,
  Flower: Flower,
};

export default function HeroSection() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredInitiatives = useMemo(() => {
    if (selectedCategory === "All") return INITIATIVES_DATA;
    return INITIATIVES_DATA.filter(
      (item) => item.category === selectedCategory,
    );
  }, [selectedCategory]);

  return (
    <div className="min-h-screen bg-[#f7faf5] text-[#102414] font-sans overflow-x-hidden selection:bg-[#b6ff7a] selection:text-[#102414]">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-16">
        <header className="text-center mb-8 relative">
          <div className="inline-flex items-center gap-3 bg-[#e8f2e3] px-5 py-2 rounded-full text-sm font-semibold text-[#1f7d2d] tracking-wide mb-6">
            <Leaf className="w-4 h-4 text-[#1f7d2d] animate-bounce" />
            <span>Our Initiatives</span>
            <Leaf className="w-4 h-4 text-[#1f7d2d] scale-x-[-1]" />
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#102414] tracking-tight max-w-6xl mx-auto leading-[1.15]">
            Sustainable Solutions
            <span className="text-transparent ml-3 bg-clip-text bg-linear-to-r from-[#1f7d2d] via-emerald-600 to-[#102414]">
              for a Better Planet
            </span>
          </h1>

          <p className="mt-6 text-base sm:text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Together we are restoring biodiversity, conserving water, promoting
            sustainable agriculture, reducing carbon emissions, and creating
            resilient ecosystems for future generations.
          </p>
        </header>

        {/* CATEGORY SELECTOR TABS */}
        <div className="flex flex-wrap justify-center items-center gap-2 mb-6 max-w-2xl mx-auto">
          {CATEGORIES.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 transform active:scale-95 ${
                selectedCategory === category
                  ? "bg-[#1f7d2d] text-white shadow-lg shadow-[#1f7d2d]/20 scale-105"
                  : "bg-white text-gray-600 hover:text-[#102414] hover:bg-[#dde8d8]/40 border border-[#dde8d8]"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* INITIATIVES GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:mb-14">
          {filteredInitiatives.map((item, index) => {
            // Dynamic Icon Component fetch kar rahe hain
            const IconComponent = iconMap[item.icon] || Sprout;

            return (
              <article
                key={item.id}
                className="group bg-white rounded-[32px] overflow-hidden border border-[#dde8d8] shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 flex flex-col h-full relative"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Card Image Block */}
                <div className="relative h-64 overflow-visible bg-emerald-50">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                    onError={(e) => {
                      e.target.src =
                        "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?q=80&w=800";
                    }}
                  />

                  {/* Category Tag on Image top right */}
                  <span className="absolute top-4 right-4 bg-white/90 backdrop-blur-md text-[#1f7d2d] px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wide shadow-sm uppercase">
                    {item.category}
                  </span>

                  <div className="absolute -bottom-8 left-8 w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-xl border border-[#dde8d8] z-10">
                    <div className="w-12 h-12 rounded-full bg-[#f1f8ee] flex items-center justify-center text-[#1f7d2d]">
                      {/* Dynamic Icon directly rendered here */}
                      <IconComponent className="w-6 h-6" />
                    </div>
                  </div>
                </div>

                {/* Card Body */}
                <div className="px-8 pt-10 pb-8 flex-grow flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-bold text-[#102414] group-hover:text-[#1f7d2d] transition-colors duration-300">
                      {item.title}
                    </h3>

                    <p className="mt-4 text-[#526456] leading-relaxed text-[15px] line-clamp-3">
                      {item.shortDesc}
                    </p>

                    <div className="flex flex-wrap gap-2 mt-5">
                      {item.benefits?.slice(0, 3).map((benefit) => (
                        <span
                          key={benefit}
                          className="px-3 py-1 bg-[#f1f8ee] text-[#1f7d2d] text-xs font-semibold rounded-full"
                        >
                          {benefit}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-dashed border-[#dde8d8] flex items-center justify-between">
                    <div className="grid grid-cols-3 gap-3 flex-1">
                      <div>
                        <p className="text-[10px] text-gray-400 uppercase tracking-wider">
                          Impact
                        </p>
                        <p className="text-sm font-bold text-[#1f7d2d] mt-0.5 truncate">
                          {item.stats.primary}
                        </p>
                      </div>

                      <div>
                        <p className="text-[10px] text-gray-400 uppercase tracking-wider">
                          Trees
                        </p>
                        <p className="text-sm font-bold text-[#1f7d2d] mt-0.5">
                          {item.stats.trees}
                        </p>
                      </div>

                      <div>
                        <p className="text-[10px] text-gray-400 uppercase tracking-wider">
                          People
                        </p>
                        <p className="text-sm font-bold text-[#1f7d2d] mt-0.5">
                          {item.stats.communities}
                        </p>
                      </div>
                    </div>

                    <Link
                      href={`/initiatives/${item.id}`}
                      className="flex items-center gap-1.5 text-sm font-bold text-[#1f7d2d] ml-4 shrink-0"
                    >
                      <span className="relative inline-block after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-[#1f7d2d] after:transition-all after:duration-300 hover:after:w-full">
                        Learn More
                      </span>

                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* SMALL ACTIONS, BIG IMPACT BANNER */}
        <section className="bg-linear-to-br from-[#102414] via-[#14361b] to-[#1f7d2d] rounded-[40px] text-white overflow-hidden shadow-2xl relative">
          <div className="absolute inset-0 opacity-15 mix-blend-overlay bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]"></div>

          <div className="relative z-10 px-6 sm:px-12 py-16 lg:py-20 flex flex-col lg:flex-row items-center justify-between gap-12">
            {/* Left Content Column */}
            <div className="w-full lg:w-[45%] text-left">
              <div className="inline-flex items-center gap-2 bg-emerald-500/20 text-[#b6ff7a] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-6">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Our Philosophy</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
                Small Actions, <br className="hidden sm:inline" />
                <span className="text-[#b6ff7a]">Big Impact</span>
              </h2>

              <p className="mt-4 text-emerald-100/90 text-sm sm:text-base leading-relaxed max-w-md">
                Be a part of the initiative. Every single plant placed, drop
                saved, or community inspired today builds a stable ecosystem for
                a better tomorrow.
              </p>

              <div className="mt-8">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-3 bg-white text-[#102414] px-8 py-4 rounded-full font-bold text-base hover:bg-[#b6ff7a] hover:scale-105 transition-all duration-300 shadow-xl group"
                >
                  <span>Get Involved</span>
                  <span className="w-6 h-6 rounded-full bg-[#102414] text-white flex items-center justify-center">
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </Link>
              </div>
            </div>

            {/* Right Pillars Container */}
            <div className="w-full lg:w-[55%] grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
              {/* Pillar 1: Plant Trees */}
              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-5 text-center flex flex-col items-center hover:bg-white/10 transition-colors duration-300">
                <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-[#b6ff7a] flex items-center justify-center mb-4 border border-emerald-400/30">
                  <Sprout className="w-6 h-6" />
                </div>
                <h4 className="font-bold text-sm text-[#b6ff7a] uppercase tracking-wider">
                  Plant Trees
                </h4>
                <div className="w-6 h-0.5 bg-[#b6ff7a]/40 my-2"></div>
                <p className="text-xs text-emerald-200/80 leading-relaxed">
                  Grow greenery, restore nature.
                </p>
              </div>

              {/* Pillar 2: Save Water */}
              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-5 text-center flex flex-col items-center hover:bg-white/10 transition-colors duration-300">
                <div className="w-12 h-12 rounded-full bg-cyan-500/20 text-[#b6ff7a] flex items-center justify-center mb-4 border border-cyan-400/30">
                  <Droplet className="w-6 h-6" />
                </div>
                <h4 className="font-bold text-sm text-[#b6ff7a] uppercase tracking-wider">
                  Save Water
                </h4>
                <div className="w-6 h-0.5 bg-[#b6ff7a]/40 my-2"></div>
                <p className="text-xs text-emerald-200/80 leading-relaxed">
                  Conserve water, secure future.
                </p>
              </div>

              {/* Pillar 3: Reduce Waste */}
              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-5 text-center flex flex-col items-center hover:bg-white/10 transition-colors duration-300">
                <div className="w-12 h-12 rounded-full bg-teal-500/20 text-[#b6ff7a] flex items-center justify-center mb-4 border border-teal-400/30">
                  <Trash2 className="w-6 h-6" />
                </div>
                <h4 className="font-bold text-sm text-[#b6ff7a] uppercase tracking-wider">
                  Reduce Waste
                </h4>
                <div className="w-6 h-0.5 bg-[#b6ff7a]/40 my-2"></div>
                <p className="text-xs text-emerald-200/80 leading-relaxed">
                  Reduce, Reuse, Recycle.
                </p>
              </div>

              {/* Pillar 4: Inspire Others */}
              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-5 text-center flex flex-col items-center hover:bg-white/10 transition-colors duration-300">
                <div className="w-12 h-12 rounded-full bg-[#b6ff7a]/20 text-[#b6ff7a] flex items-center justify-center mb-4 border border-[#b6ff7a]/30">
                  <Users className="w-6 h-6" />
                </div>
                <h4 className="font-bold text-sm text-[#b6ff7a] uppercase tracking-wider">
                  Inspire
                </h4>
                <div className="w-6 h-0.5 bg-[#b6ff7a]/40 my-2"></div>
                <p className="text-xs text-emerald-200/80 leading-relaxed">
                  Small actions inspire change.
                </p>
              </div>
            </div>
          </div>

          <div className="absolute right-0 bottom-0 pointer-events-none opacity-10 max-w-xs transform translate-x-12 translate-y-12">
            <Globe className="w-72 h-72 text-white" />
          </div>
        </section>
      </main>
    </div>
  );
}
