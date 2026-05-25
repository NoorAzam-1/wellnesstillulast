export default function ImpactSection() {
  return (
    <section className="px-6 lg:px-20 py-20">
      <div className="impact-bg rounded-[40px] p-14 overflow-hidden relative">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left */}
          <div>
            <h2 className="text-5xl md:text-6xl font-bold text-white leading-tight">
              Small Actions,
              <span className="text-secondary block">
                Big Impact
              </span>
            </h2>

            <p className="text-white/80 mt-8 text-lg leading-8">
              Be a part of the initiative and contribute
              towards a greener future.
            </p>

            <button className="impact-btn mt-10">
              Get Involved →
            </button>
          </div>

          {/* Right */}
          <div className="grid grid-cols-2 gap-8">
            {[
              "Plant Trees",
              "Save Water",
              "Reduce Waste",
              "Inspire Others",
            ].map((item, index) => (
              <div
                key={index}
                className="glass-dark p-8 rounded-3xl"
              >
                <div className="text-5xl">
                  🌍
                </div>

                <h3 className="text-white text-2xl font-semibold mt-6">
                  {item}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}