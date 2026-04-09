"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { FiExternalLink, FiImage, FiArrowRight } from "react-icons/fi";

const API_BASE = "https://admin.techstrota.com";

type GalleryItem = string | { url: string };

type Project = {
  title: string;
  description: string;
  image: string;
  link?: string;
  url?: string;
  gallery?: GalleryItem[];
};

export default function PortfolioPage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [gallery, setGallery] = useState<GalleryItem[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [galleryTitle, setGalleryTitle] = useState("");
  const [currentImg, setCurrentImg] = useState(0);

  useEffect(() => {
    fetch(`${API_BASE}/api/portfolios`)
      .then((res) => res.json())
      .then((data) => setProjects(data))
      .catch((err) => console.error("Failed to load portfolios", err));
  }, []);

  const openGallery = (images: GalleryItem[], title: string) => {
    setGallery(images);
    setGalleryTitle(title);
    setCurrentImg(0);
    setShowModal(true);
  };

  const storageUrl = (img: GalleryItem) => {
    if (!img) return "";
    const path = typeof img === "string" ? img : img.url;
    return path.startsWith("http") ? path : `${API_BASE}/storage/${path}`;
  };

  return (
    <main className="bg-[#040A15] min-h-screen pt-20 pb-24 px-4 sm:px-6 font-sans text-white relative">
      {/* 1. HEADER SECTION */}
      <div className="max-w-5xl mx-auto mb-20 relative z-10 flex flex-col items-center text-center">
        {/* Centered Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center justify-center gap-4 mb-8"
        >
          <div className="h-[2px] w-8 bg-amber-400" />
          <span className="text-xs font-bold tracking-[0.3em] text-amber-400 uppercase">
            Success Stories
          </span>
          <div className="h-[2px] w-8 bg-amber-400" />
        </motion.div>

        {/* Centered Heading Content */}
        <div className="max-w-6xl mx-auto text-center mb-6">
          <h1 className="text-4xl md:text-5xl font-bold text-[#1374BB]">
            Our Happy Clients
          </h1>
          <p className="text-gray-400 mt-8 text-lg">
            Join our growing list of satisfied clients
          </p>
        </div>
      </div>

      {/* 2. ALTERNATING PROJECT ROWS (No more 3-in-a-row grid) */}
      <div className="max-w-7xl mx-auto space-y-20 md:space-y-24">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className={`flex flex-col ${
              i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
            } items-center gap-12 lg:gap-20`}
          >
            {/* Visual Side */}
            <div className="flex-1 w-full group relative">
              {/* The Main Glowing Aura - Tight Blue Light (Permanent) */}
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/20 via-blue-500/30 to-cyan-500/20 rounded-[2.1rem] blur-md transition-opacity duration-500" />

              {/* Secondary Deep Glow - Expansive Blue Mist (Permanent) */}
              <div className="absolute -inset-4 bg-blue-600/10 rounded-[2.5rem] blur-2xl transition-opacity duration-700" />

              <div className="relative aspect-[16/10] overflow-hidden rounded-[2rem] border border-cyan-500/20 shadow-2xl bg-[#040A15]">
                {/* Permanent Inner Ring Glow */}
                <div className="absolute inset-0 z-20 pointer-events-none rounded-[2rem] ring-1 ring-cyan-400/20 transition-all duration-500" />

                <img
                  src={storageUrl(project.image)}
                  alt={project.title}
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />

                {/* Subtle Blue Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#040A15]/90 via-transparent to-blue-500/5 opacity-60 z-10" />
              </div>
            </div>

            {/* Content Side */}
            <div className="flex-1 space-y-6">
              <span className="text-amber-400/50 text-xl font-bold">
                0{i + 1}
              </span>
              <h3 className="text-4xl md:text-5xl font-bold tracking-tight group-hover:text-amber-200 transition-colors">
                {project.title}
              </h3>
              <p className="text-gray-400 text-lg leading-relaxed max-w-lg">
                {project.description}
              </p>

              <div className="pt-8">
                {project.link || project.url ? (
                  <a
                    href={project.link || project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-4 px-8 py-4 rounded-full border border-amber-400/20 text-amber-400 font-bold hover:bg-amber-400 hover:text-black transition-all group"
                  >
                    Explore Project{" "}
                    <FiArrowRight className="group-hover:translate-x-2 transition-transform" />
                  </a>
                ) : project.gallery && project.gallery.length > 0 ? (
                  <button
                    onClick={() =>
                      openGallery(project.gallery || [], project.title)
                    }
                    className="inline-flex items-center gap-4 px-8 py-4 rounded-full border border-white/20 text-white font-bold hover:bg-white hover:text-black transition-all group"
                  >
                    View Case Study Gallery{" "}
                    <FiImage className="group-hover:scale-110 transition-transform" />
                  </button>
                ) : null}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* 3. GALLERY MODAL (Keep original logic) */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 backdrop-blur-md flex items-center justify-center z-[100] p-4 sm:p-10"
          >
            {/* ... Same modal logic as before ... */}
            <div className="max-w-6xl w-full flex flex-col items-center">
              <button
                onClick={() => setShowModal(false)}
                className="absolute top-8 right-8 p-3 text-gray-500 hover:text-white transition-colors"
              >
                <FaTimes size={24} />
              </button>
              <h3 className="text-xl font-bold tracking-tight text-white mb-10">
                {galleryTitle}
              </h3>
              <div className="relative w-full flex items-center justify-center h-[55vh] md:h-[70vh]">
                <button
                  onClick={() =>
                    setCurrentImg((prev) =>
                      prev === 0 ? gallery.length - 1 : prev - 1,
                    )
                  }
                  className="absolute left-0 p-4 text-gray-600 hover:text-amber-300"
                >
                  <FaChevronLeft size={32} />
                </button>
                <motion.img
                  key={currentImg}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  src={storageUrl(gallery[currentImg])}
                  className="max-h-full max-w-full rounded-2xl object-contain shadow-2xl"
                />
                <button
                  onClick={() =>
                    setCurrentImg((prev) =>
                      prev === gallery.length - 1 ? 0 : prev + 1,
                    )
                  }
                  className="absolute right-0 p-4 text-gray-600 hover:text-amber-300"
                >
                  <FaChevronRight size={32} />
                </button>
              </div>
              <div className="flex gap-4 mt-12 overflow-x-auto pb-4 max-w-full px-10 no-scrollbar">
                {gallery.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImg(index)}
                    className={`flex-shrink-0 w-24 h-16 rounded-lg overflow-hidden border-2 transition-all ${index === currentImg ? "border-amber-300 scale-105" : "border-gray-800 opacity-50"}`}
                  >
                    <img
                      src={storageUrl(img)}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
