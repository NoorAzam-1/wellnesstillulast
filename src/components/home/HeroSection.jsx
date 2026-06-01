"use client";
import React, { useState, useMemo } from "react";
import {
  Leaf,
  Droplet,
  Trash2,
  Users,
  ArrowRight,
  Sparkles,
  ShieldCheck,
  Sprout,
  Globe,
} from "lucide-react";
import Link from "next/link";

const INITIATIVES_DATA = [
  {
    id: "carbon-garden",
    title: "Carbon Garden",
    category: "Land & Forests",
    shortDesc:
      "Creating green spaces that absorb carbon and combat climate change naturally.",
    longDesc:
      "Our Carbon Garden projects leverage high-sequestration plant species curated specifically to maximize natural CO2 absorption. By utilizing organic composting, urban soil optimization, and native flora, we turn unused urban plots into highly efficient carbon-capturing micro-ecosystems.",
    icon: "CO2",
    iconBg: "bg-emerald-50 text-emerald-700 border-emerald-100",
    image:
      "https://images.unsplash.com/photo-1582407947304-fd86f028f716?auto=format&fit=crop&q=80&w=800",
    stats: { primary: "12.4 Tons", label: "CO2 Sequestrated / Yr" },
    keyBenefit:
      "Utilizes multi-layered canopy structures to maximize vertical carbon absorption density by 4x.",
  },
  {
    id: "miyawaki-forest",
    title: "Miyawaki Forest",
    category: "Land & Forests",
    shortDesc:
      "Creating dense, native forests using the Miyawaki method to restore biodiversity.",
    longDesc:
      "The Miyawaki method replicates natural ecosystem dynamics by planting dozens of native species close together. This creates self-sustaining, multi-tiered forests that grow up to 10 times faster, are 30 times denser, and house 100 times more biodiversity than conventional plantations.",
    icon: "Sprout",
    iconBg: "bg-green-50 text-green-700 border-green-100",
    image:
      "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&q=80&w=800",
    stats: { primary: "10x Faster", label: "Growth Rates" },
    keyBenefit:
      "Restores local bird, insect, and soil microbial life while serving as excellent localized air filtration blocks.",
  },
  {
    id: "stp-sewage",
    title: "STP Sewage Treatment",
    category: "Water Solutions",
    shortDesc:
      "Advanced sewage treatment plants ensuring clean water is returned to nature safely.",
    longDesc:
      "Our modern Sewage Treatment Plants (STP) implement biological purification paired with advanced multi-tier filtration. By omitting toxic chemicals, we cycle graywater back into local ground reservoirs and agricultural channels completely pathogen-free and nutrient-rich.",
    icon: "Shield",
    iconBg: "bg-blue-50 text-blue-700 border-blue-100",
    image:
      "https://images.unsplash.com/photo-1541535881962-e668f2244a26?auto=format&fit=crop&q=80&w=800",
    stats: { primary: "4.5M Liters", label: "Daily Recycled Water" },
    keyBenefit:
      "Decentralized modular setups that operate under 35% lower energy profiles compared to municipal baselines.",
  },
  {
    id: "water-conservation",
    title: "Water Conservation",
    category: "Water Solutions",
    shortDesc:
      "Conserving every drop through innovative solutions, rainwater harvesting, and usage tracking.",
    longDesc:
      "Water Conservation tackles modern dry seasons through localized smart catchments, groundwater recharge wells, and low-waste flow systems. We build resilient local rain reservoirs that prevent water table depletion and minimize surface runoff erosion.",
    icon: "Droplet",
    iconBg: "bg-cyan-50 text-cyan-700 border-cyan-100",
    image:
      "https://images.unsplash.com/photo-1508962914676-134849a727f0?auto=format&fit=crop&q=80&w=800",
    stats: { primary: "85% Saved", label: "Storm Runoff Caught" },
    keyBenefit:
      "Implements gravel-charcoal aquifer filters that pre-treat collected rainfall back to drinkable standard safely.",
  },
  {
    id: "microgreen-farming",
    title: "Microgreen Farming",
    category: "Sustainable Food",
    shortDesc:
      "Promoting healthy living through sustainable microgreen farming and urban agriculture.",
    longDesc:
      "Microgreens contain up to 40 times higher nutrient densities than their fully mature counterparts. We cultivate organic superfoods inside compact vertical systems using 90% less land and water than traditional agriculture, bringing fresh nutrition directly to urban communities.",
    icon: "Leaf",
    iconBg: "bg-lime-50 text-lime-700 border-lime-100",
    image:
      "https://images.unsplash.com/photo-1530595467537-0b5996c41f2d?auto=format&fit=crop&q=80&w=800",
    stats: { primary: "90% Less", label: "Water Consumption" },
    keyBenefit:
      "Zero pesticides or chemical runoff, utilizing nutrient-rich organic compost bases from carbon gardens.",
  },
  {
    id: "herbal-nursery",
    title: "Herbal Nursery",
    category: "Sustainable Food",
    shortDesc:
      "Growing a wide variety of medicinal and aromatic plants for a healthier tomorrow.",
    longDesc:
      "Our Herbal Nursery preserves, propagates, and distributes vital therapeutic and culinary plants. We empower communities to reduce dependency on industrial pharmaceuticals by providing access to homegrown remedies, native plants, and botanical wellness guidance.",
    icon: "Pot",
    iconBg: "bg-amber-50 text-amber-700 border-amber-100",
    image:
      "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&q=80&w=800",
    stats: { primary: "150+ Species", label: "Protected Varieties" },
    keyBenefit:
      "Protects and re-introduces highly endangered local herbal flora into residential and suburban parks.",
  },
];

const CATEGORIES = [
  "All",
  "Land & Forests",
  "Water Solutions",
  "Sustainable Food",
];

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
            Explore our key initiatives that contribute to environmental
            conservation, resource management, and a sustainable,
            climate-resilient future.
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
          {filteredInitiatives.map((item, index) => (
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
                    {item.icon === "CO2" && (
                      <span className="font-extrabold text-xs">CO₂</span>
                    )}
                    {item.icon === "Sprout" && <Sprout className="w-6 h-6" />}
                    {item.icon === "Shield" && (
                      <ShieldCheck className="w-6 h-6" />
                    )}
                    {item.icon === "Droplet" && <Droplet className="w-6 h-6" />}
                    {item.icon === "Leaf" && <Leaf className="w-6 h-6" />}
                    {item.icon === "Pot" && (
                      <Sprout className="w-6 h-6 rotate-45" />
                    )}
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
                </div>

                <div className="mt-8 pt-6 border-t border-dashed border-[#dde8d8] flex items-center justify-between">
                  {/* Micro metric display */}
                  <div className="text-left">
                    <p className="text-xs text-gray-400 font-medium tracking-wide uppercase">
                      Impact Indicator
                    </p>
                    <p className="text-sm font-bold text-[#1f7d2d] mt-0.5">
                      {item.stats.primary}
                    </p>
                  </div>

                  <Link
                    href={`initiatives/${item.id}`}
                    className="flex items-center gap-1.5 text-sm font-bold text-[#1f7d2d] group-hover:gap-3 transition-all duration-300 focus:outline-none hover:underline"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* SMALL ACTIONS, BIG IMPACT BANNER */}
        <section className="bg-linear-to-br from-[#102414] via-[#14361b] to-[#1f7d2d] rounded-[40px] text-white overflow-hidden shadow-2xl relative">
          {/* Subtle Decorative Pattern Background */}
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
                <button
                  onClick={() => setShowInvolvementModal(true)}
                  className="inline-flex items-center gap-3 bg-white text-[#102414] px-8 py-4.5 rounded-full font-bold text-base hover:bg-[#b6ff7a] hover:scale-105 active:scale-95 transition-all duration-300 shadow-xl group cursor-pointer"
                >
                  <span>Get Involved</span>
                  <span className="w-6 h-6 rounded-full bg-[#102414] text-white flex items-center justify-center group-hover:translate-x-1.5 transition-transform duration-300">
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </button>
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

          {/* Subtle bottom leaf vector background */}
          <div className="absolute right-0 bottom-0 pointer-events-none opacity-10 max-w-xs transform translate-x-12 translate-y-12">
            <Globe className="w-72 h-72 text-white" />
          </div>
        </section>
      </main>
    </div>
  );
}
