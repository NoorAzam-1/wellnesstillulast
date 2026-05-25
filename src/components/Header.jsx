import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-12 w-full z-50 bg-white/70 backdrop-blur-xl border-b border-black/5">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-5">
        <h1 className="text-2xl font-bold text-[#012317]">
          Wellnesstillulast
        </h1>

        <nav className="hidden md:flex gap-10 text-sm">
          <Link href="#">Philosophy</Link>
          <Link href="#">Rituals</Link>
          <Link href="#">Ingredients</Link>
          <Link href="#">Journal</Link>
        </nav>

        <button className="bg-[#012317] text-white px-6 py-3 rounded-full text-sm uppercase tracking-wider">
          Boutique
        </button>
      </div>
    </header>
  );
}