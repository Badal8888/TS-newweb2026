"use client";
import Link from "next/link";
import Image from "next/image";
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
    <main className="bg-transparent text-white">
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
      <section className="relative z-10 pt-10 pb-20 text-white">
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
            className="mt-6 text-gray-400 text-xl font-bold max-w-2xl mx-auto"
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
                className="bg-blue-600 font-bold px-6 py-3 rounded-xl hover:bg-blue-700 transition text-white text-center"
              >
                Get Free Consultation
              </Link>

              {/* Portfolio External Link */}
              <Link
                href="/portfolio"
                className="border border-gray-400 font-bold px-6 py-3 rounded-xl hover:border-blue-400 transition text-center"
              >
                View Portfolio
              </Link>
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
      <section className="relative z-10 py-20 text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Technologies We Use
          </h2>

          <p className="text-gray-400 text-xl max-w-4xl mx-auto">
            TechStrota uses modern technologies like React, Next.js, Node.js,
            Laravel, Python and Flutter to build scalable web applications, SaaS
            platforms and enterprise software solutions.
          </p>
        </div>
      </section>
      <section className="relative z-10 py-10 overflow-hidden">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
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
      <section className="relative z-10 py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-white">
            Our Development Services
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* --- Glass Card Template (Apply to all 3) --- */}
            <div
              className="relative group rounded-2xl overflow-hidden
              bg-white/[0.05] backdrop-blur-xl
              border border-amber-400/50
              shadow-[0_10px_40px_rgba(0,0,0,0.5)]
              transition-all duration-500
              hover:-translate-y-3 hover:scale-[1.02]
              hover:border-amber-300/60
              hover:shadow-[0_20px_60px_rgba(251,191,36,0.25)]"
            >
              {/* Subtle Inner Glow for extra glass effect */}
              <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-amber-400 to-transparent"></div>

              <div className="relative h-48 w-full">
                <Image
                  src="/services/web-development.png"
                  alt="Web Development"
                  fill
                  className="object-contain p-6 drop-shadow-2xl group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              <div className="p-6 text-center relative z-10">
                <h3 className="text-xl font-semibold mb-3 text-blue-400">
                  Web Development
                </h3>
                <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                  SEO optimized websites built using React, Next.js and modern
                  frameworks for fast performance and scalability.
                </p>
              </div>
            </div>

            <div
              className="relative group rounded-2xl overflow-hidden
              bg-white/[0.05] backdrop-blur-xl
              border border-amber-400/50
              shadow-[0_10px_40px_rgba(0,0,0,0.5)]
              transition-all duration-500
              hover:-translate-y-3 hover:scale-[1.02]
              hover:border-amber-300/60
              hover:shadow-[0_20px_60px_rgba(251,191,36,0.25)]"
            >
              {/* Subtle Inner Glow for extra glass effect */}
              <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-amber-400 to-transparent opacity-70"></div>

              <div className="relative h-48 w-full">
                <Image
                  src="/services/mobile-application.png"
                  alt="Mobile App Development"
                  fill
                  className="object-contain p-6 drop-shadow-2xl group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              <div className="p-6 text-center relative z-10">
                <h3 className="text-xl font-semibold mb-3 text-blue-400">
                  Mobile App Development
                </h3>
                <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                  Android and iOS mobile apps built using React Native with
                  powerful backend APIs and cloud infrastructure.
                </p>
              </div>
            </div>

            <div
              className="relative group rounded-2xl overflow-hidden
              bg-white/[0.05] backdrop-blur-xl
              border border-amber-400/50
              shadow-[0_10px_40px_rgba(0,0,0,0.5)]
              transition-all duration-500
              hover:-translate-y-3 hover:scale-[1.02]
              hover:border-amber-300/60
              hover:shadow-[0_20px_60px_rgba(251,191,36,0.25)]"
            >
              {/* Subtle Inner Glow for extra glass effect */}
              <div className="absolute right-0 top-0 h-full w-1 bg-gradient-to-b from-amber-400 to-transparent"></div>

              <div className="relative h-48 w-full">
                <Image
                  src="/services/saas-development.png"
                  alt="SaaS & Custom Software"
                  fill
                  className="object-contain p-6 drop-shadow-2xl group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              <div className="p-6 text-center relative z-10">
                <h3 className="text-xl font-semibold mb-3 text-blue-400">
                  SaaS & Custom Software
                </h3>
                <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                  Enterprise SaaS platforms, CRM systems and automation tools
                  designed for business growth.
                </p>
              </div>
            </div>

            {/* Repeat the above structure for Mobile App and SaaS cards */}
            {/* Just change the Image src and text content */}
          </div>
        </div>
      </section>

      {/* OUR CLIENTS */}
      <section className="py-10 bg-[#020617] text-white overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
            Trusted by Our Clients
          </h2>

          <p className="text-gray-400 text-center text-lg font-bold max-w-2xl mx-auto mb-12">
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
        animation: infinite-scroll 22s linear infinite;
        width: max-content;
        will-change: transform;
      }

      .group:hover .animate-infinite-scroll {
        animation-play-state: paused;
      }
    `}</style>

          {/* Duplicate clients for seamless loop */}
          {(() => {
            const loopClients = [...clients, ...clients];

            return (
              <div className="flex animate-infinite-scroll py-4">
                {loopClients.map((client, index) => (
                  <div
                    key={`${client.id}-${index}`}
                    className="mx-4 flex-shrink-0 flex items-center justify-center w-56 h-28 p-4 bg-white rounded-xl border border-gray-200 hover:border-blue-500 hover:shadow-lg transition-all duration-300 cursor-pointer"
                  >
                    <Image
                      src={client.logo}
                      alt="client logo"
                      width={180}
                      height={90}
                      className="object-contain w-full h-full"
                      unoptimized
                    />
                  </div>
                ))}
              </div>
            );
          })()}

          {/* Gradient fades */}
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#020617] to-transparent pointer-events-none"></div>
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#020617] to-transparent pointer-events-none"></div>
        </div>
      </section>

      {/* SaaS AUTHORITY - REDESIGNED */}
      <section className="relative z-10 py-14 overflow-hidden">
        {/* Decorative Background Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-blue-600/10 blur-[120px] rounded-full pointer-events-none"></div>

        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative p-8 md:p-12 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md overflow-hidden"
          >
            {/* Animated Border/Glow effect */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-yellow-500 to-transparent"></div>

            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-1 text-center md:text-left">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-white">
                  Trusted SaaS Development Partner
                </h2>
                <p className="text-gray-400 text-lg font-bold leading-relaxed">
                  TechStrota built{" "}
                  <span className="text-[#FFC933] font-bold">ScanVault</span>, a
                  logistics photo management SaaS platform managing over{" "}
                  <span className="text-white font-bold">
                    380,000+ operational images
                  </span>{" "}
                  securely using Laravel, MySQL and cloud storage.
                </p>
              </div>

              {/* Stats/Visual element for uniqueness */}
              <div className="flex-shrink-0 grid grid-cols-1 gap-4">
                <div className="bg-blue-500/10 border border-blue-500/20 p-4 rounded-2xl backdrop-blur-sm">
                  <span className="block text-2xl font-bold text-[#FFC933]">
                    380K+
                  </span>
                  <span className="text-xs text-gray-400 font-bold uppercase tracking-widest">
                    Images Managed
                  </span>
                </div>
                <div className="bg-white/5 border border-white/10 p-4 rounded-2xl backdrop-blur-sm">
                  <span className="block text-2xl font-bold text-white">
                    99.9%
                  </span>
                  <span className="text-xs text-gray-400 font-bold uppercase tracking-widest">
                    Uptime for ScanVault
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA SECTION - REDESIGNED */}
      <section className="relative z-10 py-14">
        <div className="max-w-6xl mx-auto px-6">
          <div className="relative rounded-[2.5rem] bg-[#020617] border border-yellow-500/30 p-12 md:p-20 overflow-hidden text-center shadow-[0_0_50px_-12px_rgba(234,179,8,0.5)]">
            {/* Background pattern for the CTA card */}
            <div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage: `radial-gradient(#3b82f6 1px, transparent 1px)`,
                backgroundSize: "30px 30px",
              }}
            ></div>
            <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-blue-600/20 blur-[80px] rounded-full"></div>
            <div className="absolute -top-24 -left-24 w-64 h-64 bg-blue-400/10 blur-[80px] rounded-full"></div>

            <div className="relative z-10">
              <h2 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">
                Ready to Build Your <br />
                <span className="text-blue-500">Next Software Product?</span>
              </h2>

              <p className="max-w-2xl mx-auto mt-6 text-gray-400 text-lg md:text-xl font-medium">
                Partner with TechStrota for web applications, mobile apps and
                SaaS platforms.
              </p>

              <div className="mt-12 flex flex-col sm:flex-row justify-center items-center gap-6">
                <Link
                  href="/contact"
                  className="group relative px-8 py-4 bg-blue-600 rounded-2xl font-bold text-white transition-all hover:bg-blue-500 hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(37,99,235,0.4)]"
                >
                  Available for new projects
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
