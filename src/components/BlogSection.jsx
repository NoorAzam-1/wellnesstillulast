const blogs = [
  "Balancing the Doshas in Winter",
  "The Golden Milk Mystery",
  "Pranayama for Urban Minds",
];

export default function BlogSection() {
  return (
    <section className="py-28 bg-[#fbebdc]">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <div
              key={blog}
              className="bg-white rounded-3xl overflow-hidden"
            >
              <div className="h-64 bg-gray-200" />

              <div className="p-8">
                <h3 className="text-2xl font-semibold text-[#012317]">
                  {blog}
                </h3>

                <p className="mt-4 text-gray-600">
                  Ayurvedic insights for holistic living.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}