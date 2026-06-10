"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaArrowLeft, FaShieldAlt, FaCloud, FaUsersCog } from "react-icons/fa";
import { FaExternalLinkAlt } from "react-icons/fa";
import {
  SiNextdotjs,
  SiLaravel,
  SiMysql,
  SiFlutter,
  SiReact,
} from "react-icons/si";

interface Product {
  id: string;
  name: string;
  tagline: string;
  description: string;
  logoUrl: string;
  techStack: { name: string; icon: React.ReactNode; color: string }[];
  slug: string;
  domainUrl: string; // 🌟 ADDED: Live domain website link
}

const products: Product[] = [
  {
    id: "scanvault",
    name: "ScanVault",
    tagline: "Logistics Photo Management SaaS",
    description:
      "A premium, hybrid document logistics ecosystem combining a native multi-tenant mobile application with a secure enterprise-tier command dashboard...",
    logoUrl: "our-products/scanvault.png",
    techStack: [
      { name: "Laravel", icon: <SiLaravel />, color: "#FF2D20" },
      { name: "MySQL", icon: <SiMysql />, color: "#00758F" },
      { name: "Flutter", icon: <SiFlutter />, color: "#02569B" },
    ],
    slug: "/our-products/scanvault",
    domainUrl: "https://techstrota.cloud", // 🌟 ADDED: Live domain link
  },
  {
    id: "annsathi",
    name: "Annsathi",
    tagline: "QR-Based Smart Ordering Platform",
    description:
      "A digital-first platform transforming the retail and hospitality landscapes. Streamlines consumer transaction workflows through instantaneous...",
    logoUrl: "our-products/annsathi.jpeg",
    techStack: [
      { name: "React Native", icon: <SiReact />, color: "#61DBFB" },
      { name: "MySQL", icon: <SiMysql />, color: "#00758F" },
      { name: "Laravel", icon: <SiLaravel />, color: "#FF2D20" },
    ],
    slug: "/our-products/annsathi",
    domainUrl: "https://annsathi.com", // 🌟 ADDED: Live domain link
  },
  {
    id: "iapes",
    name: "IAPES",
    tagline: "Internship Administration & Performance Evaluation System",
    description:
      "A heavy-duty analytical software architecture engineered for modern educational institutes. Systematically visualizes historical student performance...",
    logoUrl: "our-products/iapes.png",
    techStack: [
      { name: "Next.js", icon: <SiNextdotjs />, color: "#FFFFFF" },
      { name: "Laravel", icon: <SiLaravel />, color: "#FF2D20" },
      { name: "MySQL", icon: <SiMysql />, color: "#00758F" },
    ],
    slug: "/our-products/iapes",
    domainUrl: "https://techstrota.tech", // 🌟 ADDED: Live domain link
  },
];

const globalStandards = [
  {
    icon: <FaShieldAlt className="text-2xl text-blue-400" />,
    title: "Enterprise Grade Security",
    desc: "Every product includes encrypted compliance structures, tokenized API authentication, and robust defense mechanics as default architecture.",
  },
  {
    icon: <FaCloud className="text-2xl text-[#2AB4F4]" />,
    title: "SaaS Multi-Tenancy & Scale",
    desc: "Engineered from day one to isolate database layer queries perfectly, ensuring lightning-fast load responses under concurrent massive scaling events.",
  },
  {
    icon: <FaUsersCog className="text-2xl text-[#FFC933]" />,
    title: "Granular Controls",
    desc: "Out-of-the-box support for nested role hierarchies, custom admin overrides, and deep system logging protocols across all frontends.",
  },
];

export default function OurProductsPage() {
  return (
    <main className="bg-[#020617] text-white min-h-screen relative overflow-hidden pt-12 pb-20">
      {/* Decorative Blur Ambient Background Elements */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-full h-[500px] bg-blue-600/10 blur-[130px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-blue-500/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* HERO SECTION CONTAINER */}
        <div className="text-center mb-16">
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-6"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Our Developed <span className="text-[#2AB4F4]">Products</span>
          </motion.h1>
          <motion.p
            className="text-gray-400 text-lg md:text-xl font-medium max-w-2xl mx-auto mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            We translate unique architectural concepts into industry-defining
            SaaS tools, smart applications, and robust analytics environments.
          </motion.p>

          {/* ECOSYSTEM OVERVIEW STAT GRID */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-0 max-w-4xl mx-auto rounded-2xl bg-white/[0.02] border border-blue-500/30 backdrop-blur-sm overflow-hidden shadow-[0_0_30px_rgba(38,132,244,0.05)]"
          >
            <div className="p-6 border-b sm:border-b md:border-b-0 md:border-r border-blue-500/20 last:border-0">
              <span className="block text-2xl md:text-3xl font-extrabold text-[#FFC933]">
                380K+
              </span>
              <span className="mt-1 block text-xs text-gray-500 uppercase font-bold tracking-wider">
                Images Cloud-Managed
              </span>
            </div>
            <div className="p-6 border-b sm:border-b-0 md:border-b-0 md:border-r border-blue-500/20 last:border-0">
              <span className="block text-2xl md:text-3xl font-extrabold text-[#2AB4F4]">
                Instant
              </span>
              <span className="mt-1 block text-xs text-gray-500 uppercase font-bold tracking-wider">
                QR Code Processing
              </span>
            </div>
            <div className="p-6 border-b md:border-b-0 md:border-r border-blue-500/20 last:border-0">
              <span className="block text-2xl md:text-3xl font-extrabold text-purple-400">
                Deep Data
              </span>
              <span className="mt-1 block text-xs text-gray-500 uppercase font-bold tracking-wider">
                Academic Insights
              </span>
            </div>
            <div className="p-6 last:border-0">
              <span className="block text-2xl md:text-3xl font-extrabold text-green-400">
                99.9%
              </span>
              <span className="mt-1 block text-xs text-gray-500 uppercase font-bold tracking-wider">
                Platform Uptime
              </span>
            </div>
          </motion.div>
        </div>

        {/* CUSTOM GLASSMORPHISM PRODUCT CARDS */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 items-stretch mb-28">
          {products.map((product, idx) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 * idx, duration: 0.6 }}
              className="relative group rounded-2xl overflow-hidden bg-white/[0.04] backdrop-blur-xl border border-amber-400/40 shadow-[0_10px_40px_rgba(0,0,0,0.6)] transition-all duration-500 hover:-translate-y-3 hover:scale-[1.01] hover:border-amber-300/60 hover:shadow-[0_20px_60px_rgba(251,191,36,0.15)] flex flex-col justify-between"
            >
              <div className="absolute left-0 top-0 h-full w-[2px] bg-gradient-to-b from-amber-400 to-transparent"></div>

              <div className="p-8">
                {/* UPDATED: Dynamic product logo integration box */}
                <div className="w-35 h-20 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 shadow-inner relative p-2 overflow-hidden">
                  <Image
                    src={product.logoUrl}
                    alt={`${product.name} Logo`}
                    fill
                    className="object-contain p-2"
                    unoptimized
                  />
                </div>

                {/* Product Header & Live Domain Link Placement */}
                <div>
                  <div className="flex items-center justify-between gap-4 mb-2">
                    <h2 className="text-2xl font-bold tracking-tight text-white">
                      {product.name}
                    </h2>

                    {/* 🌟 ADDED: Micro live-domain redirection badge */}
                    <a
                      href={product.domainUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-mono text-[#2AB4F4] hover:text-white flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#2AB4F4]/5 border border-[#2AB4F4]/20 transition-all hover:bg-blue-600/20"
                    >
                      Live Site <FaExternalLinkAlt className="text-[10px]" />
                    </a>
                  </div>

                  <p className="text-sm font-bold text-[#FFC933] mb-5 tracking-wide uppercase">
                    {product.tagline}
                  </p>
                </div>

                <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-8">
                  {product.description}
                </p>

                <div>
                  <h4 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-3">
                    Engineered With
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    {product.techStack.map((tech, techIdx) => (
                      <div
                        key={techIdx}
                        className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/[0.03] border border-white/10 text-xs font-medium text-gray-300 shadow-sm"
                      >
                        <span style={{ color: tech.color }} className="text-sm">
                          {tech.icon}
                        </span>
                        <span>{tech.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-8 pt-0">
                <Link
                  href={product.slug}
                  className="group/btn relative w-full flex justify-center items-center gap-2 bg-blue-600 font-bold px-6 py-3.5 rounded-xl hover:bg-blue-500 transition text-white text-center text-sm tracking-wide shadow-[0_4px_20px_rgba(37,99,235,0.2)]"
                >
                  Explore Features
                  <span className="transform transition-transform duration-300 group-hover/btn:translate-x-1">
                    &rarr;
                  </span>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CORE ENGINEERING PRINCIPLES SECTION */}
        <div className="border-t border-white/10 pt-20 mb-24">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold">
              The Core TechStrota Framework
            </h3>
            <p className="text-gray-400 mt-2 text-sm md:text-base">
              Every platform we deploy adheres to uncompromising production
              benchmarks.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {globalStandards.map((std, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * i, duration: 0.5 }}
                className="p-6 rounded-2xl bg-white/[0.02] border hover:border-white/5 border-blue-500/30 transition-all duration-300"
              >
                <div className="mb-4">{std.icon}</div>
                <h4 className="text-lg font-bold mb-2 text-white">
                  {std.title}
                </h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {std.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA SECTION */}
        <section className="relative z-10 py-10 mb-10">
          <div className="relative rounded-[2.5rem] bg-[#020617] border border-yellow-500/30 p-12 md:p-20 overflow-hidden text-center shadow-[0_0_50px_-12px_rgba(234,179,8,0.5)]">
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
        </section>

        {/* Global Bottom Box */}
        <div className="text-center pt-4">
          <div className="inline-flex items-center gap-2 text-gray-400 text-sm bg-white/[0.02] border border-white/10 px-4 py-2 rounded-full backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            Continuous integrations running flawlessly across
            micro-architectures
          </div>
        </div>
      </div>
    </main>
  );
}
