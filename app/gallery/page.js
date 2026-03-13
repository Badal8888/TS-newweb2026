import Image from "next/image";

const images = [
  "/gallery/1.png",
  "/gallery/2.png",
  "/gallery/3.png",
  "/gallery/1.png",
  "/gallery/2.png",
  "/gallery/3.png",
];

export default function Gallery() {
  return (
    <section className="py-24 bg-[#020617] text-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Title */}
        <h1 className="text-4xl font-bold text-center mb-16">
          TechStrota Gallery
        </h1>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {images.map((src, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-xl border border-gray-800"
            >
              <Image
                src={src}
                alt={`Gallery ${index}`}
                width={500}
                height={350}
                className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                <p className="text-lg font-semibold text-white">
                  TechStrota Project
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
