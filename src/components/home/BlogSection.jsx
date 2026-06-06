"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function BlogSection() {
 const blogs = [
    {
      title: "Balancing the Doshas in Winter",
      excerpt: "Discover traditional Ayurvedic rituals, warming herbs, and dietary shifts to keep Vata in check during the cold, dry months.",
      category: "Wellness Rituals",
      date: "Nov 12, 2023",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1646825460599-7f300c1e8783?auto=format&fit=crop&w=800&q=80", 
    },
    {
      title: "The Golden Milk Mystery",
      excerpt: "Unlocking the true bioavailability of curcumin. Why pure Haldi needs the right carrier fats and black pepper to heal.",
      category: "Ingredient Spotlight",
      date: "Oct 28, 2023",
      readTime: "4 min read",
      image: "https://images.unsplash.com/photo-1615485925600-97237c4fc1ec?auto=format&fit=crop&w=800&q=80", 
    },
    {
      title: "Pranayama for Urban Minds",
      excerpt: "Simple, highly effective breathwork techniques from the classical texts to ground your nervous system in the middle of a busy city.",
      category: "Mindfulness",
      date: "Oct 15, 2023",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=800&q=80", 
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section className="py-28 bg-light relative overflow-hidden z-10">
      <div className="absolute top-0 right-20 w-72 h-72 bg-[#b6ff7a] rounded-full mix-blend-multiply filter blur-[100px] opacity-20 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="section-tag block mb-4">The Journal</span>
            <h2 className="section-title text-4xl md:text-5xl text-dark font-bold">
              Wisdom for <span className="text-primary italic font-serif">daily living.</span>
            </h2>
          </div>
          <button className="secondary-btn whitespace-nowrap">
            View All Articles
          </button>
        </div>

        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {blogs.map((blog, index) => (
            <motion.article
              key={index}
              variants={cardVariants}
              className="group bg-white rounded-[30px] overflow-hidden border border-border hover:-translate-y-2 transition-all duration-500 shadow-lg hover:shadow-2xl flex flex-col cursor-pointer"
            >
              {/* Image Container with Zoom Hover Effect */}
              <div className="relative h-56 overflow-hidden">
                <Image 
                  src={blog.image} 
                  alt={blog.title} 
                  height={600}
                  width={400}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                <div className="absolute top-4 left-6 bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-bold text-primary uppercase tracking-wider shadow-sm">
                  {blog.category}
                </div>
              </div>

              <div className="p-6 flex flex-col grow">
                <div className="flex items-center gap-4 text-xs font-semibold text-gray-500 uppercase tracking-widest mb-2">
                  <span>{blog.date}</span>
                  <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                  <span>{blog.readTime}</span>
                </div>

                <h3 className="text-xl font-semibold text-dark leading-tight mb-3 group-hover:text-primary transition-colors duration-300">
                  {blog.title}
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed mb-2 grow">
                  {blog.excerpt}
                </p>

                <div className="mt-auto flex items-center text-primary font-bold group/link">
                  Read Article
                  <svg 
                    className="w-5 h-5 ml-2 transform group-hover/link:translate-x-2 transition-transform duration-300" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}