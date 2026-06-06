export default function Testimonials() {
  const testimonials = [
    {
      name: "Noorazam",
      role: "Holistic Practitioner",
      text: "The quality of the Shilajit resin is absolutely pristine. My energy levels are stable throughout the day, and the traditional purification process really shows in the results.",
    },
    {
      name: "Aman",
      role: "Ayurvedic Esthetician",
      text: "I've finally found a Kumkumadi Tailam that feels authentic. It has completely transformed my clients' skin texture, leaving a radiant, natural glow.",
    },
    {
      name: "Elena V.",
      role: "Holistic Nutritionist",
      text: "The purity of their Ashwagandha is unmatched. My clients report deeper sleep and sustained energy without the crash. A true return to traditional potency.",
    },
    {
      name: "Noorazam.",
      role: "Fitness & Wellness Coach",
      text: "The Safed Musli and Ashwagandha blend is the best natural recovery aid I've used. No synthetic fillers, just pure biological balance and strength.",
    },
    {
      name: "Sarah K.",
      role: "Ayurvedic Chef",
      text: "Finding genuine, cold-pressed oils is incredibly rare. Their Sesame and Almond oils are an absolute revelation for my daily Abhyanga practice.",
    },
    {
      name: "Ananya M.",
      role: "Spiritual Guide",
      text: "Taking their Ojas capsules brings such a calm, centered clarity to my daily sadhana. It provides pristine metabolic vitality that lasts all day long.",
    },
    {
      name: "Khushbu K.",
      role: "Yoga Practitioner",
      text: "Authentic, potent, and ethically sourced. The Brahmi extract has become a non-negotiable staple in my daily and morning meditation routine.",
    },
    {
      name: "Vikram D.",
      role: "Integrative Doctor",
      text: "Their commitment to sourcing wild-harvested herbs is commendable. The traditional formulations work beautifully and predictably in my clinical practice.",
    },
    {
      name: "Marcus T.",
      role: "Wellness Coach",
      text: "I recommend their Triphala to everyone. It's gentle, effective, and clearly crafted with deep reverence for ancient Ayurvedic formulation methods.",
    },
    {
      name: "Aisha K.",
      role: "Wellness Content Creator",
      text: "The Amla powder is so fresh and vibrant. I use it every morning in my routine, and the difference in my immunity and hair health is truly visible.",
    },
  ];

  return (
    <section
      id="testimonials"
      className="py-10 md:py-16 bg-light relative overflow-hidden z-10"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 text-center mb-6 relative z-10">
        <span className="section-tag block mb-4">Community Voices</span>
        <h2 className="section-title max-w-5xl mx-auto">
          Healing rooted in ancient wisdom.
        </h2>
        <p className="section-description mt-3">
          Hear from practitioners and seekers who have transformed their daily
          rituals with our pure botanical offerings.
        </p>
      </div>

      <div className="w-full relative py-6">
        <div className="absolute inset-y-0 left-0 w-24 md:w-40 bg-linear-to-r from-(--light)to-transparent z-10 pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-24 md:w-40 bg-linear-to-l from-(--light)to-transparent z-10 pointer-events-none"></div>

        <div className="animate-marquee gap-8 px-4 flex items-center hover:[animation-play-state:paused]">
          {testimonials.map((test, i) => (
            <div
              key={i}
              className="w-[320px] md:w-[400px] min-h-96 shrink-0 glass-card rounded-[30px] p-8 md:p-10 text-left hover:-translate-y-2 transition-transform duration-500 cursor-grab"
            >
              <div className="flex text-[#f59e0b] mb-6 gap-1">
                {[1, 2, 3, 4, 5].map((s) => (
                  <svg
                    key={s}
                    className="w-5 h-5 fill-current"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <p className="text-gray-700 text-lg leading-relaxed mb-8 italic">
                &quot;{test.text}&quot;
              </p>

              <div className="flex items-center border-t border-border pt-6">
                <div className="w-12 h-12 rounded-full bg-black/10 flex items-center justify-center text-primary text-xl font-bold mr-4">
                  {test.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-dark text-lg">{test.name}</h4>
                  <span className="text-sm text-primary font-semibold tracking-wide uppercase">
                    {test.role}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
