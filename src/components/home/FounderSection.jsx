"use client";
import React, { useState, useEffect, useCallback, useRef } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from "framer-motion";

export default function LeadershipSlider() {
  const visionaries = [
    {
      name: "Keshav Garg",
      role: "Founder & Chief Executive",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1600",
      experience: "12+",
      expText: "Years in Digital Retail",
      quote:
        "We are not just curating products; we are delivering centuries of biological wisdom directly to the modern doorstep.",
      bio1: "Driven by a profound respect for her heritage, Kesha founded this platform to bridge the gap between authentic Ayurvedic apothecaries and global accessibility.",
      bio2: "Her vision ensures that every botanical formulation remains unadulterated, ethically priced, and easily accessible through a seamless e-commerce experience.",
    },
    {
      name: "Dr. Maya Swaminathan",
      role: "Lead Formulation Vaidya",
      image:
        "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=1600",
      experience: "20+",
      expText: "Years of Practice",
      quote:
        "True wellness is the harmonious dance between our biology and nature's untouched rhythms.",
      bio1: "Born into a revered lineage of traditional practitioners, Dr. Maya spent her childhood foraging for rare botanicals in the lush hills of Kerala.",
      bio2: "She strictly oversees every formulation in our catalog, ensuring our modern e-commerce offerings maintain the exact therapeutic potency dictated by classical Ayurvedic texts.",
    },
    {
      name: "Raghav Desai",
      role: "Head of Ethical Sourcing",
      image:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1600",
      experience: "15+",
      expText: "Years in Supply Chain",
      quote:
        "Purity begins at the root. If we do not respect the soil, the herb cannot truly heal.",
      bio1: "Raghav spends months traveling across the Himalayas and the Western Ghats to partner directly with local farmers and traditional wild-crafters.",
      bio2: "He ensures that our e-commerce supply chain is completely transparent, sustainable, and financially empowering for the rural communities that harvest our ingredients.",
    },
  ];

  const [active, setActive] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const AUTOPLAY_TIME = 6000;

  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const backgroundY1 = useTransform(scrollYProgress, [0, 1], ["-30%", "30%"]);
  const backgroundY2 = useTransform(scrollYProgress, [0, 1], ["30%", "-30%"]);

  const nextSlide = useCallback(() => {
    setActive((prev) => (prev === visionaries.length - 1 ? 0 : prev + 1));
  }, [visionaries.length]);

  const prevSlide = () => {
    setActive((prev) => (prev === 0 ? visionaries.length - 1 : prev - 1));
  };

  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      nextSlide();
    }, AUTOPLAY_TIME);

    return () => clearInterval(timer);
  }, [isPaused, nextSlide]);

  const currentPerson = visionaries[active];

  const imageVariants = {
    initial: { opacity: 0, scale: 1.05 },
    animate: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
    exit: {
      opacity: 0,
      scale: 0.95,
      transition: { duration: 0.4, ease: "easeIn" },
    },
  };

  const containerVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 },
    },
    exit: { opacity: 0, transition: { duration: 0.2 } },
  };

  const itemVariants = {
    initial: { opacity: 0, y: 20 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
    exit: { opacity: 0, y: -10, transition: { duration: 0.2 } },
  };

  return (
    <section
      ref={sectionRef}
      className="py-8 bg-light relative overflow-hidden z-10"
    >
      <motion.div
        style={{ y: backgroundY1 }}
        className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#b6ff7a] rounded-full mix-blend-multiply filter blur-[120px] opacity-20 pointer-events-none"
      />
      <motion.div
        style={{ y: backgroundY2 }}
        className="absolute bottom-0 left-10 w-80 h-80 bg-[#1f7d2d] rounded-full mix-blend-multiply filter blur-[100px] opacity-10 pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        <div
          className="grid lg:grid-cols-2 gap-8 md:gap-14 items-center"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="relative w-full h-[450px] group">
            <div className="w-full h-full rounded-[40px] overflow-hidden border border-border shadow-2xl relative bg-white">
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentPerson.image}
                  src={currentPerson.image}
                  alt={currentPerson.name}
                  variants={imageVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  className="w-full h-full object-cover absolute inset-0"
                />
              </AnimatePresence>
              <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent z-10 pointer-events-none"></div>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={`badge-${currentPerson.experience}`}
                initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                exit={{ opacity: 0, scale: 0.8, transition: { duration: 0.2 } }}
                transition={{ type: "spring", stiffness: 100, delay: 0.3 }}
                className="absolute -bottom-6 -right-6 glass-card p-3 rounded-3xl shadow-xl hidden md:flex items-center gap-3 border border-border z-20"
              >
                <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center text-lg font-bold">
                  {currentPerson.experience}
                </div>
                <div>
                  <p className="text-dark font-bold text-md leading-tight">
                    {currentPerson.expText}
                  </p>
                  <p className="text-primary font-semibold text-sm uppercase">
                    Expertise
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex flex-col justify-center min-h-[300px]">
            <div className="flex items-center justify-between">
              <span className="section-tag block">Our Leadership</span>

              <div className="flex gap-2">
                {visionaries.map((_, index) => (
                  <div
                    key={index}
                    className={`h-1.5 rounded-full overflow-hidden transition-all duration-300 cursor-pointer ${active === index ? "w-12 bg-gray-200" : "w-4 bg-gray-300 hover:bg-gray-400"}`}
                    onClick={() => {
                      setActive(index);
                      setIsPaused(true);
                      setTimeout(() => setIsPaused(false), 100); 
                    }}
                  >
                    {active === index && (
                      <motion.div
                        initial={{ width: "0%" }}
                        animate={{ width: isPaused ? "100%" : "100%" }}
                        transition={{
                          duration: isPaused ? 0 : AUTOPLAY_TIME / 1000,
                          ease: "linear",
                        }}
                        className="h-full bg-primary"
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={currentPerson.name}
                variants={containerVariants}
                initial="initial"
                animate="animate"
                exit="exit"
              >
                <motion.h2
                  variants={itemVariants}
                  className="section-title text-4xl md:text-3xl lg:text-6xl text-dark font-bold"
                >
                  <span className="text-primary italic font-serif mb-3">
                    {currentPerson.name}
                  </span>
                </motion.h2>

                <motion.div
                  variants={itemVariants}
                  className="space-y-1 text-gray-600 text-md leading-relaxed"
                >
                  <p>{currentPerson.bio1}</p>
                  <p>{currentPerson.bio2}</p>
                </motion.div>

                <motion.blockquote
                  variants={itemVariants}
                  className="pl-6 border-l-4 border-primary italic text-dark font-medium text-lg my-2 relative"
                >
                  &quot;{currentPerson.quote}&quot;
                </motion.blockquote>

                <motion.div
                  variants={itemVariants}
                  className="mt-5 pt-4 border-t border-border flex flex-col sm:flex-row sm:items-center justify-between gap-6"
                >
                  <div>
                    <h4 className="text-2xl font-bold text-dark">
                      {currentPerson.name}
                    </h4>
                    <p className="section-tag text-xs mt-2">
                      {currentPerson.role}
                    </p>
                  </div>

                  <div className="flex items-center gap-4">
                    <button
                      onClick={prevSlide}
                      className="w-12 h-12 rounded-full border border-primary text-primary flex items-center justify-center hover:bg-primary hover:text-white transition-colors duration-300 group"
                      aria-label="Previous person"
                    >
                      <svg
                        className="w-6 h-6 transform group-hover:-translate-x-1 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M15 19l-7-7 7-7"
                        />
                      </svg>
                    </button>
                    <button
                      onClick={nextSlide}
                      className="w-12 h-12 rounded-full border border-primary text-primary flex items-center justify-center hover:bg-primary hover:text-white transition-colors duration-300 group"
                      aria-label="Next person"
                    >
                      <svg
                        className="w-6 h-6 transform group-hover:translate-x-1 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </button>
                  </div>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
