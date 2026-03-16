"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useParams } from "next/navigation";

// Helper function to cycle through fun, cartoony styles for the grid
const getCartoonyStyle = (index) => {
  const styles = [
    "rotate-[-4deg] border-pink-500 shadow-[8px_8px_0px_#ec4899]",
    "rotate-[3deg] border-yellow-400 shadow-[8px_8px_0px_#facc15]",
    "rotate-[-2deg] border-blue-500 shadow-[8px_8px_0px_#3b82f6]",
    "rotate-[5deg] border-green-500 shadow-[8px_8px_0px_#22c55e]",
    "rotate-[2deg] border-purple-500 shadow-[8px_8px_0px_#a855f7]",
    "rotate-[-5deg] border-orange-500 shadow-[8px_8px_0px_#f97316]",
  ];
  return styles[index % styles.length];
};

export default function GalleryDetails() {
  const params = useParams();
  const id = params.id;

  const [gallery, setGallery] = useState(null);

  useEffect(() => {
    if (!id) return;

    fetch(`https://admin.techstrota.com/api/galleries/${id}`)
      .then((res) => res.json())
      .then((data) => setGallery(data));
  }, [id]);

  if (!gallery)
    return (
      <div className="min-h-screen bg-[#020617] flex items-center justify-center">
        <p className="text-3xl font-black text-yellow-400 animate-bounce">
          Loading...
        </p>
      </div>
    );

  return (
    <section className="py-24 bg-[#020617] text-white min-h-screen overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Cartoony Title */}
        <h1 className="text-5xl md:text-7xl font-black mb-12 text-center uppercase tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-pink-500 to-blue-500 drop-shadow-[4px_4px_0px_rgba(255,255,255,0.9)] hover:scale-105 transition-transform duration-300 cursor-default">
          {gallery.title}
        </h1>

        {/* Main Hero Image - Comic Panel Effect */}
        <div className="mb-16 flex justify-center">
          <div className="relative p-4 bg-white rounded-2xl border-4 border-black shadow-[12px_12px_0px_#facc15] rotate-[-1deg] hover:rotate-1 hover:scale-[1.02] transition-all duration-300">
            <Image
              src={gallery.main_image}
              alt={gallery.title}
              width={900}
              height={500}
              className="rounded-xl object-contain max-h-[500px] border-4 border-black"
              unoptimized
            />
          </div>
        </div>

        {/* Description - Text Bubble Effect */}
        {gallery.description && (
          <div className="mb-20 max-w-3xl mx-auto">
            <p className="text-lg md:text-xl font-bold text-black bg-white p-6 rounded-3xl border-4 border-blue-500 shadow-[8px_8px_0px_#3b82f6] rotate-[1deg] leading-relaxed text-center">
              {gallery.description}
            </p>
          </div>
        )}

        {/* Scattered Gallery - Now using a Masonry Layout */}
        <div className="columns-1 sm:columns-2 md:columns-3 gap-12 md:gap-16 pt-8 pb-16 space-y-12 md:space-y-16">
          {gallery.gallery_images?.map((img, i) => (
            <div
              key={i}
              // Note: `break-inside-avoid` is critical to prevent cards from splitting across columns
              className={`p-3 bg-white border-4 rounded-xl transition-all duration-300 hover:scale-110 hover:z-50 hover:rotate-0 cursor-pointer break-inside-avoid ${getCartoonyStyle(i)}`}
            >
              {/* Use h-auto and w-full to let the image define its own height */}
              <Image
                src={img}
                alt={`gallery image ${i + 1}`}
                width={400}
                height={500} // This is a hint, but h-auto allows it to be flexible
                className="rounded-lg w-full h-auto border-2 border-black" //w-full and h-auto are key
                unoptimized
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
