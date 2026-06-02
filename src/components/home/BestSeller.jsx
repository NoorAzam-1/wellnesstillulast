"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Heart, Star, Plus } from "lucide-react";

const PRODUCTS_DATA = [
  { id: 1, title: "Ashwagandha Gold", price: 599, badge: "Best Seller", subtitle: "Daily Wellness", description: "Premium organic capsules for vitality.", image: "/ashwagandhaGold.png", rating: 4.8 },
  { id: 2, title: "Turmgel Neem Wash", price: 240, badge: "New Arrival", subtitle: "Skin Care", description: "Neem and haldi for radiant skin.", image: "https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?auto=format&fit=crop&w=500&q=80", rating: 4.9 },
  { id: 3, title: "Pure Tulsi Ark", price: 320, badge: "Pure Extract", subtitle: "Herbal Oils", description: "Traditional distilled tulsi ark.", image: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=500&q=80", rating: 4.7 },
  { id: 4, title: "Ortho Pain Oil", price: 280, badge: "Most Loved", subtitle: "Joint Relief", description: "Fast acting relief for joints.", image: "/orthoPainOil.png", rating: 4.9 },
  { id: 5, title: "Amla Giloy Juice", price: 399, badge: "Immunity", subtitle: "Immunity Booster", description: "Amla and Giloy for defense.", image: "https://images.unsplash.com/photo-1584017911766-d451b3d0e843?auto=format&fit=crop&w=500&q=80", rating: 4.8 },
  { id: 6, title: "Sanjeevani Juice", price: 450, badge: "Detox", subtitle: "Medical Herbs", description: "Curcumin extracts for detox.", image: "/sanjivaniJuice.png", rating: 4.7 },
];

export default function MostLovedProducts() {
  const [liked, setLiked] = useState({});

  return (
    <section className="max-w-7xl mx-auto px-6 bg-[#FDFBF7]">
      
      <div className="mb-10 text-left">
        <span className="text-[10px] tracking-[0.2em] text-[#1f7d2d] font-bold uppercase block mb-1">Tested & Trusted</span>
        <h2 className="text-3xl font-bold text-[#102414]">Most Loved by Families</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {PRODUCTS_DATA.map((product) => (
          <motion.div
            key={product.id}
            className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm hover:shadow-lg transition-all duration-300 relative group"
          >
            <button 
              onClick={() => setLiked(prev => ({ ...prev, [product.id]: !prev[product.id] }))}
              className="absolute top-6 right-6 p-2 rounded-full bg-gray-50 text-gray-400 hover:text-red-500 z-10 cursor-pointer"
            >
              <Heart className={`w-4 h-4 ${liked[product.id] ? 'fill-red-500 text-red-500' : ''}`} />
            </button>

            <div className="w-full aspect-[4/3] rounded-xl mb-4 overflow-hidden bg-gray-100 relative">
              <img src={product.image} alt={product.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <span className="absolute top-3 left-3 bg-white/90 backdrop-blur px-2 py-0.5 rounded-full text-[9px] font-bold text-[#1f7d2d] uppercase">
                {product.badge}
              </span>
            </div>

            <div className="space-y-0.5 mb-3 text-left">
              <span className="text-[9px] font-bold text-[#1f7d2d] uppercase tracking-wider">{product.subtitle}</span>
              <h3 className="text-md font-bold text-[#102414]">{product.title}</h3>
              <p className="text-xs text-gray-500 line-clamp-1">{product.description}</p>
            </div>

            <div className="flex items-center space-x-1 mb-4">
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-3 h-3 fill-current" />)}
              </div>
              <span className="text-[10px] font-bold text-gray-700">{product.rating}</span>
            </div>

            <div className="flex items-center justify-between pt-3 border-t border-gray-100">
              <span className="text-md font-bold text-[#102414]">₹{product.price}</span>
              <button className="px-4 py-1.5 rounded-full bg-[#102414] text-white text-[10px] font-bold uppercase tracking-widest flex items-center gap-1.5 hover:bg-[#1f7d2d] cursor-pointer transition-colors">
                Buy Now <Plus className="w-3 h-3" />
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}