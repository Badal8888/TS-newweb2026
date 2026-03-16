"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import {
  FaExternalLinkAlt,
  FaImages,
  FaTimes,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

const API_BASE = "https://admin.techstrota.com";

type GalleryItem =
  | string
  | {
      url: string;
      desc?: string;
    };

type Project = {
  title: string;
  description: string;
  image: string;
  link?: string;
  gallery?: GalleryItem[];
};

export default function PortfolioPage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [gallery, setGallery] = useState<GalleryItem[]>([]);
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

  const closeGallery = () => {
    setShowModal(false);
    setGallery([]);
  };

  const nextImg = () => {
    setCurrentImg(currentImg === gallery.length - 1 ? 0 : currentImg + 1);
  };

  const prevImg = () => {
    setCurrentImg(currentImg === 0 ? gallery.length - 1 : currentImg - 1);
  };

  const storageUrl = (img: GalleryItem) => {
    if (typeof img === "string") {
      return img.startsWith("http") ? img : `${API_BASE}/storage/${img}`;
    }
    return img.url.startsWith("http")
      ? img.url
      : `${API_BASE}/storage/${img.url}`;
  };

  return (
    <main className="bg-[#020b1f] min-h-screen py-20 px-6 text-white">
      {/* Title */}
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-cyan-400">
          Our Happy Clients
        </h1>
        <p className="text-gray-400 mt-8 text-lg">
          Join our growing list of satisfied clients
        </p>
      </div>

      {/* Portfolio Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((project, i) => (
          <div
            key={i}
            className="bg-[#1D1F28] rounded-xl overflow-hidden border border-white/10 shadow-xl flex flex-col h-full hover:scale-[1.03] transition duration-500"
          >
            {/* Image */}
            <img
              src={storageUrl(project.image)}
              alt={project.title}
              className="w-full h-52 object-cover"
            />

            {/* Content */}
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl font-semibold text-cyan-400 mb-2">
                {project.title}
              </h3>

              <p className="text-gray-300 text-sm mb-6 flex-grow">
                {project.description}
              </p>

              {project.link || project.url ? (
                <a
                  href={project.link || project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 rounded-full bg-gradient-to-r from-cyan-400 to-teal-400 text-black font-semibold flex items-center justify-center gap-2 hover:scale-105 transition"
                >
                  View Project →
                </a>
              ) : project.gallery && project.gallery.length > 0 ? (
                <button
                  onClick={() => openGallery(project.gallery!, project.title)}
                  className="w-full py-3 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-semibold flex items-center justify-center gap-2 hover:scale-105 transition"
                >
                  View Gallery
                </button>
              ) : null}
            </div>
          </div>
        ))}
      </div>

      {/* Gallery Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur flex items-center justify-center z-50 p-6">
          <div className="bg-[#1D1F28] rounded-xl p-6 max-w-3xl w-full relative">
            {/* Close */}
            <button
              onClick={closeGallery}
              className="absolute top-4 right-4 text-white"
            >
              <FaTimes size={24} />
            </button>

            <h3 className="text-2xl text-cyan-400 text-center mb-6">
              {galleryTitle}
            </h3>

            {/* Image */}
            <div className="flex items-center justify-center gap-4">
              <button onClick={prevImg}>
                <FaChevronLeft size={30} />
              </button>

              <img
                src={storageUrl(gallery[currentImg])}
                className="max-h-[400px] rounded-lg"
              />

              <button onClick={nextImg}>
                <FaChevronRight size={30} />
              </button>
            </div>

            {/* Thumbnails */}
            <div className="flex gap-3 mt-6 justify-center flex-wrap">
              {gallery.map((img, index) => (
                <img
                  key={index}
                  src={storageUrl(img)}
                  onClick={() => setCurrentImg(index)}
                  className={`w-16 h-12 object-cover rounded cursor-pointer border ${
                    index === currentImg ? "border-cyan-400" : "border-gray-600"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
