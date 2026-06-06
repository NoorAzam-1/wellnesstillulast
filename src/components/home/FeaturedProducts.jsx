"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Leaf, Sparkles, Droplets, ShieldCheck, Activity, Heart } from "lucide-react";

const CATEGORIES_DATA = [
  {
    id: "wellness",
    title: "Ayurvedic Daily Wellness",
    tag: "Shudh Poshan",
    icon: Heart,
    image: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=800&q=80",
    desc: "Premium organic supplements tulsi aur ashwagandha ke gunon ke sath, jo aapki daily lifestyle ko balance aur energize kare.",
    featuredProduct: "Ashwagandha Gold Capsules",
    price: "₹599"
  },
  {
    id: "skin-care",
    title: "Natural Skin Care",
    tag: "Chemical Free Glow",
    icon: Sparkles,
    image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=800&q=80",
    desc: "Asli neem, haldi aur santre ke chhilkon se bana ayurvedic face wash jo skin ko andar se clean aur radiant banata hai.",
    featuredProduct: "Turmgel Neem Face Wash",
    price: "₹240"
  },
  {
    id: "oil",
    title: "Pure Herbal Oils",
    tag: "Cold-Pressed Extracts",
    icon: Droplets,
    image: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=800&q=80",
    desc: "Traditional steam-distillation process se nikala gaya shudh herbal oil jo deep nourishment aur therapeutic relief deta hai.",
    featuredProduct: "Pure Tulsi Ark Oil",
    price: "₹320"
  },
  {
    id: "medical-herb",
    title: "Sanjiwani Medical Herbs",
    tag: "100% Pure Extracts",
    icon: Leaf,
    image: "https://images.unsplash.com/photo-1564277287253-934c868e54ea?auto=format&fit=crop&w=800&q=80",
    desc: "High-curcumin extracts aur natural jadi-bootiyon ka ark jo badi bimariyon se ladne aur body detox me madad kare.",
    featuredProduct: "Lauki Sanjeevani Juice",
    price: "₹450"
  },
  {
    id: "joint-pain",
    title: "Vat-Shanti Joint Relief",
    tag: "Fast Acting Formula",
    icon: Activity,
    image: "/joint-relief.png",
    desc: "Purane jodon ke dard, muscle strain aur gathiya (arthritis) ke jhatpat aaram ke liye ek vishesh prachin ayurvedic tel.",
    featuredProduct: "Ortho Wellness Pain Oil",
    price: "₹280"
  },
  {
    id: "immunity",
    title: "Rasayana Immunity",
    tag: "Rog Pratirodhak",
    icon: ShieldCheck,
    // Bright sunlight hitting lush green tulsi/ayurvedic leaves
    image: "https://images.unsplash.com/photo-1514733670139-4d87a1941d55?auto=format&fit=crop&w=800&q=80",
    desc: "Kacchi Amla, Giloy aur Neem ka shudh mishran jo aapki body ke natural defense system aur immunity ko majboot banata hai.",
    featuredProduct: "Amla Giloy Plus Juice",
    price: "₹399"
  }
];

export default function FeaturedProducts() {
  const [items, setItems] = useState(CATEGORIES_DATA);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      handleRotate();
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const handleRotate = () => {
    setItems((prevItems) => {
      const [first, ...rest] = prevItems;
      return [...rest, first];
    });
  };

  const handleCardClick = (clickedId) => {
    setItems((prevItems) => {
      const targetIndex = prevItems.findIndex((item) => item.id === clickedId);
      if (targetIndex === 0) return prevItems;
      const before = prevItems.slice(0, targetIndex);
      const after = prevItems.slice(targetIndex);
      return [...after, ...before];
    });
  };

  return (
    <section className="py-10 md:py-16 lg:py-20 max-w-7xl mx-auto px-4 md:px-6 bg-[#f9faf6] overflow-hidden">
      <div className="text-center mb-8 md:mb-12 lg:mb-16">
        <span className="text-[#1f7d2d] font-semibold tracking-wider uppercase block mb-2 text-xs md:text-sm">
          The Wellness Category
        </span>
        <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-[#102414] leading-tight font-serif">
          Potent Herbal Solutions
        </h2>
        <p className="text-xs md:text-sm lg:text-base text-gray-600 leading-relaxed max-w-2xl mx-auto mt-2">
          Explore our organically farmed and scientifically validated product ecosystems tailored for your well-being.
        </p>
      </div>

      <motion.div 
        layout={isDesktop}
        className="grid grid-cols-1 lg:grid-cols-12 gap-4 md:gap-5 lg:gap-6"
      >
        {items.slice(0, 3).map((item, index) => {
          const IconComponent = item.icon;
          const isBig = index === 0;

          return (
            <motion.div
              key={item.id}
              layout={isDesktop}
              initial={!isDesktop ? { opacity: 0, scale: 0.97 } : false}
              animate={!isDesktop ? { opacity: 1, scale: 1 } : false}
              exit={!isDesktop ? { opacity: 0 } : false}
              transition={
                isDesktop 
                  ? { type: "spring", stiffness: 100, damping: 17, mass: 0.8 }
                  : { duration: 0.35, ease: "easeInOut" }
              }
              whileHover={isDesktop ? { y: -4 } : { scale: 1.01 }}
              onClick={() => handleCardClick(item.id)}
              className={`${
                isBig 
                  ? "lg:col-span-7 lg:row-span-2 min-h-[300px] md:min-h-[370px] lg:min-h-[414px] p-5 md:p-8 lg:p-10 rounded-[20px] md:rounded-[28px]" 
                  : "lg:col-span-5 h-[140px] md:h-[175px] lg:h-[195px] p-4 md:p-6 rounded-[16px] md:rounded-3xl"
              } relative overflow-hidden flex flex-col justify-end group cursor-pointer shadow-md lg:shadow-lg border border-gray-200/60`}
            >
              <motion.div 
                layout={isDesktop}
                className="absolute inset-0 z-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: `url(${item.image})` }}
              />
              
              <motion.div 
                layout={isDesktop}
                className="absolute inset-0 z-10 bg-linear-to-t from-black/85 via-black/40 to-transparent"
              />

              <div className={`absolute top-4 ${isBig ? "left-4" : "right-4"} z-20 ${isBig ? "bg-black/50 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10" : "w-8 h-8 md:w-10 md:h-10 rounded-full bg-black/40 backdrop-blur-md border border-white/10"} flex items-center justify-center text-white`}>
                <IconComponent className={`${isBig ? "w-3.5 h-3.5 text-[#b6ff7a] mr-1.5 inline" : "w-4 h-4"}`} />
                {isBig && (
                  <span className="text-[10px] md:text-xs uppercase tracking-wider font-semibold text-white">{item.tag}</span>
                )}
              </div>

              <div className={`relative z-20 ${isBig ? "space-y-3 max-w-xl" : "max-w-xs space-y-0.5 md:space-y-1"}`}>
                {!isBig && (
                  <span className="text-[#b6ff7a] text-[10px] md:text-xs font-semibold tracking-wider uppercase block">
                    {item.tag}
                  </span>
                )}
                
                <h3 className={`${isBig ? "text-xl md:text-3xl lg:text-4xl" : "text-base md:text-lg lg:text-xl"} font-bold text-white tracking-tight leading-tight`}>
                  {item.title}
                </h3>

                {isBig ? (
                  <p className="text-gray-200 text-xs md:text-sm leading-relaxed line-clamp-2 md:line-clamp-none">
                    {item.desc}
                  </p>
                ) : (
                  <p className="text-gray-300/90 text-[10px] md:text-xs line-clamp-1 group-hover:text-white transition-colors">
                    Next Up: {item.featuredProduct}
                  </p>
                )}

                {isBig && (
                  <div className="pt-1.5 md:pt-3 flex flex-wrap items-center gap-2.5 md:gap-3">
                    <div className="bg-black/40 backdrop-blur-md px-3.5 py-1.5 md:py-2 rounded-xl border border-white/10 text-white">
                      <span className="text-[9px] md:text-[10px] block text-gray-400">Featured Item</span>
                      <span className="font-semibold text-xs md:text-sm text-[#b6ff7a]">{item.featuredProduct}</span>
                    </div>
                    <button className="px-4 md:px-5 py-2.5 md:py-3 rounded-full bg-[#1f7d2d] hover:bg-green-600 text-white text-xs font-semibold flex items-center gap-2 shadow-lg transition-all duration-300 hover:scale-105">
                      Shop Range • {item.price}
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                )}
              </div>
            </motion.div>
          );
        })}
      </motion.div>

      <div className="flex justify-center gap-2 mt-6 md:mt-8">
        {CATEGORIES_DATA.map((cat) => (
          <div 
            key={cat.id} 
            className={`h-1.5 rounded-full transition-all duration-500 ${items[0].id === cat.id ? "w-6 bg-[#1f7d2d]" : "w-1.5 bg-gray-300"}`}
          />
        ))}
      </div>
    </section>
  );
}