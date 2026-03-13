"use client";

import Image from "next/image";
import TechStackMarquee from "@/components/TechStackMarquee";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function HomeClient() {
  const headlines = [
    "Transforming Ideas into Scalable SaaS & Digital Solutions",
    "Where passion meets reliable technology",
    "Reliable tech. Real business impact.",
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % headlines.length);
    }, 3500);

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
            <button className="bg-blue-600 px-6 py-3 rounded-xl hover:bg-blue-700 transition">
              Get Free Consultation
            </button>

            <button className="border border-gray-400 px-6 py-3 rounded-xl hover:border-blue-400 transition">
              View Portfolio
            </button>
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
      <TechStackMarquee />

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
      <section className="py-20 bg-[#020617] text-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
            Trusted by Our Clients
          </h2>

          <p className="text-gray-400 text-center max-w-2xl mx-auto mb-12">
            TechStrota partners with startups and businesses to build reliable
            web applications, SaaS platforms and mobile apps that drive growth.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center">
            {/* Client 1 */}
            <div className="flex justify-center opacity-70 hover:opacity-100 transition">
              <Image
                src="/clients/client1.png"
                alt="Client company using TechStrota software development services"
                width={120}
                height={60}
              />
            </div>

            {/* Client 2 */}
            <div className="flex justify-center opacity-70 hover:opacity-100 transition">
              <Image
                src="/clients/client2.png"
                alt="Client SaaS platform developed by TechStrota"
                width={120}
                height={60}
              />
            </div>

            {/* Client 3 */}
            <div className="flex justify-center opacity-70 hover:opacity-100 transition">
              <Image
                src="/clients/client3.png"
                alt="Business using TechStrota web development solutions"
                width={120}
                height={60}
              />
            </div>

            {/* Client 4 */}
            <div className="flex justify-center opacity-70 hover:opacity-100 transition">
              <Image
                src="/clients/client1.png"
                alt="Enterprise client of TechStrota software company"
                width={120}
                height={60}
              />
            </div>

            {/* Client 5 */}
            <div className="flex justify-center opacity-70 hover:opacity-100 transition">
              <Image
                src="/clients/client2.png"
                alt="Startup using TechStrota SaaS development services"
                width={120}
                height={60}
              />
            </div>

            {/* Client 6 */}
            <div className="flex justify-center opacity-70 hover:opacity-100 transition">
              <Image
                src="/clients/client3.png"
                alt="Mobile app development client of TechStrota"
                width={120}
                height={60}
              />
            </div>
          </div>
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

          <button className="mt-8 bg-white text-blue-600 px-8 py-3 rounded-xl font-semibold hover:bg-gray-200 transition">
            Contact Us Today
          </button>
        </div>
      </section>
    </main>
  );
}
