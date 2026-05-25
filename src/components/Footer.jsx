export default function Footer() {
  return (
    <footer className="bg-white border-t border-black/5 py-20">
      <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-4 gap-12">
        <div>
          <h3 className="text-3xl font-bold text-[#012317]">
            Wellnesstillulast
          </h3>

          <p className="mt-5 text-gray-600">
            Nurturing souls through the authentic science of life.
          </p>
        </div>

        <div>
          <h4 className="font-semibold mb-5">Discover</h4>

          <ul className="space-y-3 text-gray-600">
            <li>Shop All</li>
            <li>Rituals</li>
            <li>Wellness Quiz</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-5">Support</h4>

          <ul className="space-y-3 text-gray-600">
            <li>Privacy Policy</li>
            <li>Shipping & Returns</li>
            <li>Contact Us</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-5">Stay Connected</h4>

          <input
            type="email"
            placeholder="Email Address"
            className="border-b border-black/20 bg-transparent outline-none w-full py-3"
          />
        </div>
      </div>
    </footer>
  );
}