"use client";
import Link from "next/link";
import Image from "next/image";
import TechStackMarquee from "@/components/TechStackMarquee";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import {
  FaSearch,
  FaClipboardList,
  FaCode,
  FaBug,
  FaRocket,
} from "react-icons/fa";
import {
  FaLaptopCode,
  FaMobileAlt,
  FaBullhorn,
  FaServer,
} from "react-icons/fa";
import {
  FaReact,
  FaNodeJs,
  FaDocker,
  FaAws,
  FaPhp,
  FaPython,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiLaravel,
  SiMysql,
  SiFlutter,
  SiDotnet,
} from "react-icons/si";
import React from "react";
export default function HomeClient() {
  const headlines = [
    "Transforming Ideas into Scalable SaaS & Digital Solutions",
    "Where passion meets reliable technology",
    "Reliable tech. Real business impact.",
  ];

  const [index, setIndex] = useState(0);

  type Client = {
    id: number;
    logo: string;
  };
  const [clients, setClients] = useState<Client[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % headlines.length);
    }, 3500);

    fetch("https://admin.techstrota.com/api/clients")
      .then((res) => res.json())
      .then((data) => setClients(data))
      .catch((err) => console.error(err));

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="bg-[#020617] text-white">
      {/* Schema Markup for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareCompany",
            name: "TechStrota",
            url: "https://www.techstrota.com",
            logo: "https://www.techstrota.com/logo.png",
            description:
              "TechStrota is a software development company specializing in SaaS platforms, web development and mobile app development.",
          }),
        }}
      />
      {/* HERO SECTION */}
      <section className="pt-10 pb-20 bg-[#020617] text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          {/* Brand Title */}
          <motion.h1
            className="mb-5 text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight"
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-[#FFC933]">Tech</span>
            <span className="text-[#2AB4F4]">strota</span>
          </motion.h1>

          {/* Rotating Headline */}
          <div className="h-[120px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.h1
                key={index}
                className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -40 }}
                transition={{ duration: 0.6 }}
              >
                {headlines[index]}
              </motion.h1>
            </AnimatePresence>
          </div>

          {/* Subtitle */}
          <motion.p
            className="mt-6 text-gray-400 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 1 }}
          >
            TechStrota helps startups and enterprises build powerful web, mobile
            and SaaS platforms.
          </motion.p>

          {/* Buttons */}
          <motion.div
            className="mt-8 flex flex-col sm:flex-row justify-center gap-4"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
              {/* Contact Page */}
              <Link
                href="/contact"
                className="bg-blue-600 px-6 py-3 rounded-xl hover:bg-blue-700 transition text-white text-center"
              >
                Get Free Consultation
              </Link>

              {/* Portfolio External Link */}
              <a
                href="https://portfolio.techstrota.com"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-gray-400 px-6 py-3 rounded-xl hover:border-blue-400 transition text-center"
              >
                View Portfolio
              </a>
            </div>
          </motion.div>

          {/* Video */}
          <motion.div
            className="mt-10 flex justify-center"
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 1 }}
          >
            <div className="relative w-full max-w-4xl p-[2px] rounded-3xl bg-gradient-to-r from-blue-500/40 via-transparent to-blue-500/40">
              <div className="bg-[#020617]/70 backdrop-blur-md rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-auto"
                >
                  <source src="/videos/hero.mp4" type="video/mp4" />
                </video>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Tech Stack Marquee */}
      <section className="py-20 bg-[#020617] text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Technologies We Use
          </h2>

          <p className="text-gray-400 max-w-3xl mx-auto">
            TechStrota uses modern technologies like React, Next.js, Node.js,
            Laravel, Python and Flutter to build scalable web applications, SaaS
            platforms and enterprise software solutions.
          </p>
        </div>
      </section>
      <section className="mb-24 overflow-hidden">
        <h2 className="text-4xl font-bold mb-12 text-center">
          Our Technology Stack
        </h2>

        <div className="relative">
          {/* fade edges */}
          <div className="absolute left-0 top-0 h-full w-40 bg-gradient-to-r from-[#020617] to-transparent z-10"></div>
          <div className="absolute right-0 top-0 h-full w-40 bg-gradient-to-l from-[#020617] to-transparent z-10"></div>

          <div className="flex gap-10 animate-marquee whitespace-nowrap py-4">
            {[...Array(2)].map((_, i) => (
              <React.Fragment key={i}>
                <div className="tech-card">
                  <FaReact className="text-[#61DBFB] tech-icon" />
                  <p>React</p>
                </div>

                <div className="tech-card">
                  <SiNextdotjs className="text-white tech-icon" />
                  <p>Next.js</p>
                </div>

                <div className="tech-card">
                  <SiLaravel className="text-[#FF2D20] tech-icon" />
                  <p>Laravel</p>
                </div>

                <div className="tech-card">
                  <FaNodeJs className="text-[#3C873A] tech-icon" />
                  <p>Node.js</p>
                </div>

                <div className="tech-card">
                  <SiMysql className="text-[#00758F] tech-icon" />
                  <p>MySQL</p>
                </div>

                <div className="tech-card">
                  <FaAws className="text-[#FF9900] tech-icon" />
                  <p>AWS</p>
                </div>

                <div className="tech-card">
                  <FaPhp className="text-[#777BB4] tech-icon" />
                  <p>PHP</p>
                </div>

                <div className="tech-card">
                  <FaPython className="text-[#3776AB] tech-icon" />
                  <p>Python</p>
                </div>

                <div className="tech-card">
                  <SiFlutter className="text-[#02569B] tech-icon" />
                  <p>Flutter</p>
                </div>

                <div className="tech-card h-14">
                  <SiDotnet className="text-[#512BD4] tech-icon" />
                  <p>.NET</p>
                </div>

                <div className="tech-card">
                  <FaDocker className="text-[#2496ED] tech-icon" />
                  <p>Docker</p>
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>
      {/* SERVICES */}
      <section className="py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Our Development Services
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* Card 1 */}
            <div className="bg-[#0F172A] rounded-2xl border border-blue-900 hover:border-blue-500 transition overflow-hidden">
              <div className="relative h-48 w-full">
                <Image
                  src="/1.png"
                  alt="Web Development"
                  fill
                  className="object-contain p-6"
                />
              </div>

              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold mb-3 text-blue-400">
                  Web Development
                </h3>

                <p className="text-gray-400 text-sm md:text-base">
                  SEO optimized websites built using React, Next.js and modern
                  frameworks for fast performance and scalability.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-[#0F172A] rounded-2xl border border-blue-900 hover:border-blue-500 transition overflow-hidden">
              <div className="relative h-48 w-full">
                <Image
                  src="/2.png"
                  alt="Mobile App Development"
                  fill
                  className="object-contain p-6"
                />
              </div>

              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold mb-3 text-blue-400">
                  Mobile App Development
                </h3>

                <p className="text-gray-400 text-sm md:text-base">
                  Android and iOS mobile apps built using React Native with
                  powerful backend APIs and cloud infrastructure.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-[#0F172A] rounded-2xl border border-blue-900 hover:border-blue-500 transition overflow-hidden">
              <div className="relative h-48 w-full">
                <Image
                  src="/3.png"
                  alt="SaaS Development"
                  fill
                  className="object-contain p-6"
                />
              </div>

              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold mb-3 text-blue-400">
                  SaaS & Custom Software
                </h3>

                <p className="text-gray-400 text-sm md:text-base">
                  Enterprise SaaS platforms, CRM systems and automation tools
                  designed for business growth.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* OUR CLIENTS */}
      <section className="py-20 bg-[#020617] text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
            Trusted by Our Clients
          </h2>

          <p className="text-gray-400 text-center max-w-2xl mx-auto mb-12">
            TechStrota partners with startups and businesses to build reliable
            web applications, SaaS platforms and mobile apps that drive growth.
          </p>
        </div>

        {/* Marquee Wrapper */}
        <div className="relative w-full flex overflow-hidden group">
          <style>{`
      @keyframes infinite-scroll {
        0% { transform: translateX(0); }
        100% { transform: translateX(-50%); }
      }
      .animate-infinite-scroll {
        animation: infinite-scroll 25s linear infinite;
        width: max-content;
      }
      .group:hover .animate-infinite-scroll {
        animation-play-state: paused;
      }
    `}</style>

          <div className="flex animate-infinite-scroll py-4">
            {[...clients, ...clients].map((client, index) => (
              <div
                key={`${client.id}-${index}`}
                // INCREASED CARD SIZE: Changed w-48 to w-56, and h-24 to h-28. Added p-4.
                className="mx-4 flex-shrink-0 flex items-center justify-center w-56 h-28 p-4 bg-white rounded-xl border border-gray-200 hover:border-blue-500 hover:shadow-lg transition-all duration-300 cursor-pointer"
              >
                <Image
                  src={client.logo}
                  alt="client logo"
                  // INCREASED IMAGE BASE RESOLUTION
                  width={180}
                  height={90}
                  // CHANGED: Let the image take up full width/height of the padded container
                  className="object-contain w-full h-full"
                  unoptimized
                />
              </div>
            ))}
          </div>

          {/* Gradient fades */}
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#020617] to-transparent pointer-events-none"></div>
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#020617] to-transparent pointer-events-none"></div>
        </div>
      </section>
      {/* SaaS AUTHORITY */}
      <section className="py-20 md:py-24 bg-[#0F172A]">
        <div className="max-w-5xl mx-auto text-center px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Trusted SaaS Development Partner
          </h2>

          <p className="text-gray-400 text-base md:text-lg">
            TechStrota built <b>ScanVault</b>, a logistics photo management SaaS
            platform managing over <b>120,000+ operational images</b> securely
            using Laravel, MySQL and cloud storage.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-24 text-center bg-gradient-to-r from-blue-600 to-blue-500">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold">
            Ready to Build Your Next Software Product?
          </h2>

          <p className="mt-4 text-blue-100 text-base md:text-lg">
            Partner with TechStrota for web applications, mobile apps and SaaS
            platforms.
          </p>

          <Link
            href="/contact"
            className="inline-block mt-8 bg-white text-blue-600 px-8 py-3 rounded-xl font-semibold hover:bg-gray-200 transition"
          >
            Contact Us Today
          </Link>
        </div>
      </section>
    </main>
  );
}
