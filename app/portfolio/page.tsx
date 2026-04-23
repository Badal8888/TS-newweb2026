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
    <main className="min-h-screen pt-20 pb-24 px-4 sm:px-6 font-sans text-white relative">
      {/* 1. HEADER SECTION */}
      <div className="max-w-5xl mx-auto mb-10 relative z-10 flex flex-col items-center text-center">
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

      {/* 2. STICKY PROJECT REVEAL SECTION */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
        {projects.map((project, i) => (
          <div
            key={i}
            style={{ zIndex: i + 1 }} // Ensures each new project sits on top of the last
            className="sticky top-0 h-screen flex items-center justify-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ margin: "-5%", once: false }}
              transition={{ duration: 0.6, ease: "circOut" }}
              /* FIX: Using a solid hex background (#040A15) instead of 80% opacity 
           to stop the 'behind' project from showing through.
        */
              className={`relative w-full max-w-6xl h-[85vh] flex flex-col ${
                i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              } items-center gap-10 lg:gap-16 bg-[#040A15] border border-amber-400/40 rounded-[2.5rem] p-8 md:p-12 shadow-2xl`}
            >
              {/* Visual Side */}
              <div className="flex-1 w-full h-full flex items-center justify-center relative group">
                {/* Inner Glow */}
                <div className="absolute -inset-2 bg-blue-500/10 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="relative w-full aspect-video overflow-hidden rounded-2xl border border-white/5">
                  <img
                    src={storageUrl(project.image)}
                    alt={project.title}
                    className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              </div>

              {/* Content Side */}
              <div className="flex-1 space-y-4">
                <span className="text-amber-400 font-mono text-lg font-bold tracking-widest">
                  0{i + 1}
                </span>
                <h3 className="text-3xl md:text-5xl font-bold text-white">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-base md:text-lg leading-relaxed line-clamp-4">
                  {project.description}
                </p>

                <div className="pt-6">
                  {project.link || project.url ? (
                    <a
                      href={project.link || project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-3 px-8 py-3.5 rounded-full bg-amber-400 text-black font-bold hover:bg-amber-300 transition-colors"
                    >
                      Explore Case Study <FiArrowRight />
                    </a>
                  ) : (
                    <button
                      onClick={() =>
                        openGallery(project.gallery || [], project.title)
                      }
                      className="inline-flex items-center gap-3 px-8 py-3.5 rounded-full border border-white/20 text-white font-bold hover:bg-white/10 transition-all"
                    >
                      View Screenshots <FiImage />
                    </button>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
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
