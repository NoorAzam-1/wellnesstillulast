"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Leaf } from "lucide-react";

const navItems = [
  { title: "Home", href: "/" },
  {
    title: "About",
    children: [
      { title: "About Us", href: "/about" },
      { title: "Community Impact", href: "/community-impact" },
    ],
  },
  {
    title: "Wellness",
    children: [
      { title: "Ayurvedic Solutions", href: "/ayurvedic-solutions" },
      { title: "Wellness Programs", href: "/wellness-programs" },
    ],
  },
  {
    title: "Sustainability",
    children: [
      { title: "Carbon Garden", href: "/carbon-garden" },
      { title: "Miyawaki Forest", href: "/miyawaki-forest" },
      { title: "Water Conservation", href: "/water-conservation" },
    ],
  },
  { title: "Contact", href: "/contact" },
];

export default function Header() {
  const [activeMenu, setActiveMenu] = useState(null);

  return (
    <header className="fixed top-14 left-0 w-full z-50 px-4">
      <motion.div
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
        className="max-w-7xl mx-auto"
      >
        <div className="glass-card rounded-full px-5 lg:px-8 py-4 flex items-center justify-between relative overflow-visible">
          <div className="absolute -left-16 top-0 w-32 h-32 bg-green-300/20 blur-3xl rounded-full" />
          <div className="absolute -right-16 top-0 w-32 h-32 bg-lime-300/20 blur-3xl rounded-full" />

          <Link href="/" className="flex items-center gap-1 relative z-10">
            <div className="w-12 h-12 rounded-full bg-linear-to-br from-green-700 to-lime-400 flex items-center justify-center shadow-xl">
              <Leaf className="w-5 h-5 text-white" />
            </div>

            <div>
              <h2 className="font-bold text-xl text-dark -mb-2">
                Wellness
              </h2>
              <span className="text-xs tracking-[3px] uppercase text-primary">
                TillULast
              </span>
            </div>
          </Link>

          <nav className="hidden xl:flex items-center gap-1 relative z-10">
            {navItems.map((item) => (
              <div
                key={item.title}
                className="relative"
                onMouseEnter={() =>
                  item.children && setActiveMenu(item.title)
                }
                onMouseLeave={() =>
                  item.children && setActiveMenu(null)
                }
              >
                {item.children ? (
                  <>
                    <button className="flex items-center gap-1 px-5 py-3 rounded-full text-sm font-medium text-dark hover:bg-green-100 transition-all duration-300">
                      {item.title}
                      <ChevronDown size={16} />
                    </button>

                    <AnimatePresence>
                      {activeMenu === item.title && (
                        <motion.div
                          initial={{ opacity: 0, y: 15 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 15 }}
                          transition={{ duration: 0.25 }}
                          className="absolute top-[65px] left-1/2 -translate-x-1/2 min-w-[260px]"
                        >
                          <div className="glass-card rounded-3xl p-4 shadow-2xl">
                            {item.children.map((child) => (
                              <Link
                                key={child.title}
                                href={child.href}
                                className="flex items-center gap-3 px-4 py-3 rounded-2xl hover:bg-green-50 transition-all duration-300 group"
                              >
                                <Leaf
                                  size={16}
                                  className="text-green-600 group-hover:rotate-12 transition-all duration-300"
                                />
                                <span>{child.title}</span>
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className="px-5 py-3 rounded-full text-sm font-medium text-dark hover:bg-green-100 transition-all duration-300"
                  >
                    {item.title}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
            className="hidden md:flex items-center gap-2 px-7 py-3 rounded-full bg-primary text-white font-semibold shadow-xl relative z-10"
          >
            Join Initiative
          </motion.button>
        </div>
      </motion.div>
    </header>
  );
}