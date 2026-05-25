export default function FounderSection() {
  return (
    <section className="py-28 max-w-7xl mx-auto px-8">
      <div className="grid lg:grid-cols-2 gap-20 items-center">
        <div className="bg-[#fbebdc] rounded-3xl h-[600px]" />

        <div>
          <span className="uppercase tracking-[4px] text-sm text-[#7b5900]">
            Our Founder
          </span>

          <h2 className="text-5xl font-bold mt-6 text-[#012317]">
            A Legacy of Healing.
          </h2>

          <p className="mt-8 text-lg text-gray-600 leading-8">
            Born into a lineage of practitioners, our founder spent her
            childhood in the hills of Kerala.
          </p>

          <div className="mt-10 border-t pt-8">
            <h4 className="text-3xl font-bold text-[#012317]">
              Dr. Anjali Verma
            </h4>

            <p className="uppercase tracking-[4px] text-sm text-[#7b5900] mt-2">
              Chief Vaidya & Visionary
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}