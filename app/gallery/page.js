"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function GalleryPage() {
  const [galleries, setGalleries] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://admin.techstrota.com/api/galleries")
      .then((res) => res.json())
      .then((data) => {
        setGalleries(data);
        setLoading(false);
      });
  }, []);

  return (
    <section className="min-h-screen bg-[#020617] text-white py-24 relative overflow-hidden selection:bg-blue-500/30">
      {/* Background Aurora Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] max-w-4xl h-[400px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 pb-2 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-white to-white/70">
            TechStrota Gallery
          </h1>
          <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto font-light leading-relaxed">
            Explore our moments, events, achievements, and behind-the-scenes
            snapshots.
          </p>
        </div>

        {/* Loading Spinner */}
        {loading ? (
          <div className="flex justify-center items-center py-20">
            <div className="w-12 h-12 border-4 border-white/10 border-t-blue-500 rounded-full animate-spin"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Gallery Grid Comment Moved Inside Here */}
            {galleries.map((gallery) => (
              <Link key={gallery.id} href={`/gallery/${gallery.id}`}>
                <div className="group flex flex-col rounded-2xl border border-white/10 bg-white/5 overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl hover:border-white/20 hover:-translate-y-1 hover:bg-white/10 transition-all duration-300">
                  {/* Image Container */}
                  <div className="relative aspect-[4/3] w-full overflow-hidden">
                    {/* Subtle bottom shadow to make text pop if it overlaps */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10 opacity-50"></div>

                    <Image
                      src={gallery.main_image}
                      alt={gallery.title}
                      fill
                      className="object-contain transition-transform duration-700 group-hover:scale-110"
                      unoptimized
                    />

                    {/* Glassmorphic "View Gallery" Hover Badge */}
                    <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-[2px] bg-black/20">
                      <span className="text-white/90 text-sm font-semibold tracking-widest uppercase border border-white/30 px-6 py-3 rounded-full bg-white/10 shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                        View Gallery
                      </span>
                    </div>
                  </div>

                  {/* Title Container */}
                  <div className="p-6 text-center bg-transparent z-20 relative">
                    <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300 tracking-wide">
                      {gallery.title}
                    </h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
