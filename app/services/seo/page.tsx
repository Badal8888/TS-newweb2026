"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  TrendingUp,
  Target,
  CircleDollarSign,
  Award,
  XCircle,
  CheckCircle2,
  ArrowRight,
  LineChart,
  Settings,
  FileText,
  BarChart2,
  Link as LinkIcon,
  Code,
  Globe,
  Gauge,
  Search,
  BrainCircuit,
  Compass,
  PenTool,
  Share2,
  Rocket,
  Check,
} from "lucide-react";

export default function SEOServices() {
  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const scrollVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  // Data Arrays
  const precisionModules = [
    {
      title: "SEO Strategy",
      desc: "Algorithmic mapping of competitive landscapes and market gaps.",
      icon: <LineChart size={28} strokeWidth={1.5} />,
      color: "text-[#3ab0ff]",
    },
    {
      title: "Technical Audit",
      desc: "Core Web Vitals remediation and crawler accessibility engineering.",
      icon: <Settings size={28} strokeWidth={1.5} />,
      color: "text-amber-400",
    },
    {
      title: "Content Engine",
      desc: "LSI-optimized semantic content clusters for topical authority.",
      icon: <FileText size={28} strokeWidth={1.5} />,
      color: "text-[#3ab0ff]",
    },
    {
      title: "Growth Analytics",
      desc: "Server-side tracking and attribution modeling for real ROI data.",
      icon: <BarChart2 size={28} strokeWidth={1.5} />,
      color: "text-amber-400",
    },
    {
      title: "Backlink Profile",
      desc: "High-DR editorial placements and toxic link detoxification.",
      icon: <LinkIcon size={28} strokeWidth={1.5} />,
      color: "text-[#3ab0ff]",
    },
    {
      title: "Schema Markup",
      desc: "JSON-LD implementation for rich snippet dominance.",
      icon: <Code size={28} strokeWidth={1.5} />,
      color: "text-amber-400",
    },
    {
      title: "International SEO",
      desc: "Hreflang architecture for global search visibility.",
      icon: <Globe size={28} strokeWidth={1.5} />,
      color: "text-[#3ab0ff]",
    },
    {
      title: "Page Speed",
      desc: "Next-gen image formats and JS execution optimization.",
      icon: <Gauge size={28} strokeWidth={1.5} />,
      color: "text-amber-400",
    },
  ];

  const monolithWorkflow = [
    {
      title: "Technical Discovery",
      desc: "Deep-crawl forensic audit of your site architecture and server-side bottlenecks.",
      icon: <Search size={24} strokeWidth={1.5} />,
    },
    {
      title: "Intent Mapping",
      desc: "Reverse engineering competitor success and identifying high-value conversion keywords.",
      icon: <BrainCircuit size={24} strokeWidth={1.5} />,
    },
    {
      title: "Silo Architecture",
      desc: "Restructuring content into semantic clusters to maximize topical authority scores.",
      icon: <Compass size={24} strokeWidth={1.5} />,
    },
    {
      title: "Content Engineering",
      desc: "Production of editorial-grade content optimized for both human and AI crawlers.",
      icon: <PenTool size={24} strokeWidth={1.5} />,
    },
    {
      title: "Authority Building",
      desc: "Strategic outreach for contextually relevant, high-DR backlinks.",
      icon: <Share2 size={24} strokeWidth={1.5} />,
    },
    {
      title: "Sustained Growth",
      desc: "Continuous algorithmic monitoring and dynamic strategy adjustments.",
      icon: <Rocket size={24} strokeWidth={1.5} />,
    },
  ];

  // Why Tech Strota
  const whyTechStrota = [
    {
      title: "Zero-Guesswork Framework",
      desc: "Every decision is backed by cold server logs and search intent data.",
    },
    {
      title: "Developer-Centric Execution",
      desc: "We don't just send PDFs; we send ready-to-deploy pull requests.",
    },
    {
      title: "Algorithm-First Mindset",
      desc: "Proactive adjustments before Google's major core updates hit.",
    },
    {
      title: "Transparent Analytics Portal",
      desc: "Real-time keyword tracking and conversion attribution dashboard.",
    },
    {
      title: "Vertical-Specific Expertise",
      desc: "Specialized clusters for SaaS, FinTech, and B2B Enterprise.",
    },
  ];

  const provenPerformance = [
    {
      stat: "12.4k",
      statColor: "text-amber-400",
      title: "New Keywords Tracked",
      desc: "For global SaaS client in 90 days.",
    },
    {
      stat: "85%",
      statColor: "text-[#3ab0ff]",
      title: "Conversion Increase",
      desc: "Average boost in organic lead quality.",
    },
  ];

  return (
    <main className="bg-transparent text-white w-full overflow-hidden">
      {/* 1. HERO SECTION */}
      <section className="relative z-10 min-h-[100dvh] lg:h-screen w-full pt-6 pb-12 px-4 sm:px-6 flex items-center justify-center">
        <div className="w-full max-w-7xl flex flex-col lg:flex-row items-center justify-between gap-4">
          <motion.div
            className="flex-1 text-center lg:text-left"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants} className="mb-4">
              <span className="inline-flex px-4 py-1.5 rounded-full border border-[#1374BB]/30 bg-[#1374BB]/5 text-[#1374BB] text-xs font-bold uppercase tracking-wider">
                Rank Higher on Google
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-white mb-5 leading-[1.1]"
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1374BB] to-[#3ab0ff]">
                SEO Services
              </span>
              <br />
              to Boost Your
              <br />
              Online Visibility
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-[#8B95A5] text-base lg:text-lg max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed"
            >
              Our SEO services are designed to enhance your online presence and
              drive organic traffic to your website. We optimize your site for
              search engines, improve rankings, and increase visibility to
              potential customers through proven strategies.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex gap-4 flex-col sm:flex-row justify-center lg:justify-start"
            >
              <Link href="/contact">
                <button className="w-full sm:w-auto bg-[#1374BB] hover:bg-[#0f5c96] transition-colors text-white font-bold py-3.5 px-8 rounded-xl shadow-[0_4px_20px_rgba(19,116,187,0.3)]">
                  Inquire Now
                </button>
              </Link>

              <Link href="/portfolio">
                <button className="w-full sm:w-auto border-2 border-[#1374BB]/20 hover:border-[#1374BB] hover:bg-[#1374BB]/10 transition-all text-[#1374BB] font-bold py-3.5 px-8 rounded-xl">
                  View Portfolio
                </button>
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            className="flex-1 w-full mt-8 lg:mt-0"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="rounded-2xl overflow-hidden border border-gray-800/60 bg-[#091122] aspect-video relative group">
              <div className="absolute inset-0 bg-[#1374BB]/10 group-hover:bg-transparent transition-colors z-10 pointer-events-none"></div>
              <video
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover scale-[1.02]"
              >
                <source src="/services/SEO.mp4" type="video/mp4" />
              </video>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 1.5 PRECISION MODULES */}
      <section className="relative z-10 py-10 md:py-14 px-4 sm:px-6 w-full max-w-7xl mx-auto border-t border-white/5">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-12 gap-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={scrollVariants}
            className="max-w-2xl"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">
              <span className="text-[#1374BB]">Precision</span> Modules
            </h2>
            <p className="text-[#8B95A5] text-base md:text-lg leading-relaxed">
              Our SEO engine is modular. Select individual systems or deploy the
              full vertical stack.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {precisionModules.map((module, idx) => (
            <motion.div
              key={idx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={itemVariants}
              // MODIFIED: bg-white/[0.03], backdrop-blur-md, and updated border/shadow
              className="relative group p-8 rounded-2xl transition-all duration-500 overflow-hidden flex flex-col
          bg-white/[0.03] backdrop-blur-md border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)]
          hover:bg-white/[0.08] hover:border-yellow-500/50 hover:-translate-y-2 hover:shadow-[0_0_25px_rgba(250,204,21,0.15)]"
            >
              {/* Subtle internal yellow glow on hover */}
              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-yellow-500/5 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Icon Container - Softened for glass aesthetics */}
              <div
                className={`mb-6 p-3 rounded-xl bg-white/5 w-fit border border-white/5 group-hover:scale-110 transition-transform duration-300 ${module.color}`}
              >
                {module.icon}
              </div>

              <h3 className="text-lg font-bold text-white mb-3 group-hover:text-yellow-400 transition-colors">
                {module.title}
              </h3>

              <p className="text-[#8B95A5] text-sm leading-relaxed group-hover:text-gray-300 transition-colors">
                {module.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 2. THE MONOLITH WORKFLOW */}
      <section className="relative z-10 py-10 md:py-14 px-4 sm:px-6 w-full max-w-7xl mx-auto border-t border-white/5 bg-transparent">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={scrollVariants}
          className="text-center mb-16 px-4"
        >
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold mb-4 tracking-tight text-white leading-tight">
            The{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-400">
              Monolith
            </span>{" "}
            Workflow
          </h2>

          <p className="text-[#8B95A5] text-base md:text-xl leading-relaxed max-w-3xl mx-auto font-medium">
            From fundamental auditing to sustained search dominance in 6
            surgical phases.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 relative z-10">
          {monolithWorkflow.map((phase, idx) => (
            <motion.div
              key={idx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={itemVariants}
              // MODIFIED: bg-white/[0.03], backdrop-blur-md, and updated border/shadow
              className="relative group p-8 md:p-10 rounded-2xl transition-all duration-500 flex flex-col overflow-hidden
          bg-white/[0.03] backdrop-blur-md border border-yellow-500/50 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)]
          hover:bg-white/[0.08] hover:border-yellow-500/50 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(250,204,21,0.2)]"
            >
              {/* Decorative corner glow behind the glass on hover */}
              <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-32 h-32 bg-yellow-500/10 blur-[80px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Floating phase watermark number */}
              <div className="absolute -bottom-10 -right-6 text-9xl font-black text-white/[0.02] group-hover:text-yellow-400/[0.04] transition-colors duration-500 pointer-events-none select-none z-0">
                0{idx + 1}
              </div>

              {/* Icon Container with Glass-in-Glass effect */}
              <div className="relative w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-8 shadow-inner group-hover:bg-blue-500/10 group-hover:border-blue-500/30 transition-all duration-300">
                <div className="text-blue-500 group-hover:text-blue-400 transition-colors drop-shadow-[0_0_8px_rgba(34,197,94,0.4)]">
                  {phase.icon}
                </div>
              </div>

              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-xl md:text-2xl font-extrabold text-white mb-4 tracking-tight">
                  {phase.title}
                </h3>

                <p className="text-[#8B95A5] group-hover:text-gray-200 text-sm md:text-base leading-relaxed transition-colors">
                  {phase.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 2.5 PROVEN PERFORMANCE (From Uploaded Image) */}
      <section className="relative z-10 py-10 md:py-20 px-4 sm:px-6 w-full max-w-7xl mx-auto border-t border-white/5 bg-transparent">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
          {/* Left Side: Text Intro */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={scrollVariants}
            className="lg:w-[45%]"
          >
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">
              Proven{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-400">
                Performance
              </span>
            </h2>
            <p className="text-[#8B95A5] text-base md:text-lg mb-10 leading-relaxed font-medium">
              We don&apos;t just promise results; we document the evolution of
              search dominance. Our methods are built on mathematical certainty,
              not algorithmic guesswork.
            </p>

            {/* Stat Cards Stack */}
            <div className="space-y-4">
              {provenPerformance.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white/[0.03] backdrop-blur-md border border-blue-400 hover:border-yellow-400/40 hover:bg-white/[0.08] transition-all duration-300 rounded-2xl p-6 flex items-center gap-6 group"
                >
                  <span
                    className={`text-4xl font-black transition-transform group-hover:scale-110 ${item.statColor}`}
                  >
                    {item.stat}
                  </span>
                  <div>
                    <h4 className="text-lg font-bold text-white mb-1 group-hover:text-yellow-400 transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-[#8B95A5] text-sm group-hover:text-gray-300">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Side: Graph Cards Grid */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-[55%] flex flex-col sm:flex-row gap-6 w-full"
          >
            {/* --- BEFORE CARD (Glass) --- */}
            <div className="flex-1 bg-white/[0.02] backdrop-blur-xl border border-amber-500/50 transition-all duration-500 rounded-[2rem] p-6 flex flex-col justify-between shadow-2xl relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>

              {/* Header */}
              <div className="flex justify-between items-center mb-6 relative z-10">
                <span className="text-[#8B95A5] text-[10px] font-bold tracking-[0.2em] uppercase opacity-70">
                  Organic Traffic
                </span>
                <span className="bg-red-500/10 text-red-400 px-2 py-0.5 rounded text-[10px] font-bold border border-red-500/20">
                  BEFORE
                </span>
              </div>

              {/* Inner Graph Container */}
              <div className="w-full bg-black/40 backdrop-blur-sm rounded-xl p-4 relative mb-6 min-h-[160px] flex flex-col justify-end border border-white/5">
                {/* Y-Axis Lines */}
                <div className="absolute inset-0 flex flex-col justify-between py-4 pointer-events-none z-0">
                  {[80, 60, 40, 20].map((val) => (
                    <div key={val} className="w-full flex items-center gap-2">
                      <span className="text-[8px] text-white/20 w-4 text-right font-mono">
                        {val}
                      </span>
                      <div className="flex-1 h-[1px] bg-white/[0.05]"></div>
                    </div>
                  ))}
                </div>

                {/* Muted Trendline Logic remains as you had it... */}
                <div className="w-full flex items-end gap-[2px] relative z-10 pl-6 h-full">
                  {/* ... Bars and SVG path here ... */}
                </div>
              </div>

              <div className="flex items-baseline gap-2 relative z-10">
                <span className="text-4xl font-black text-white tracking-tighter">
                  1,200
                </span>
                <span className="text-[#8B95A5] text-xs font-bold uppercase tracking-widest">
                  /mo
                </span>
              </div>
            </div>

            {/* --- AFTER CARD (Premium Glass) --- */}
            <div className="flex-1 bg-white/[0.05] backdrop-blur-2xl border border-amber-500/50 hover:shadow-[0_0_40px_rgba(250,204,21,0.15)] transition-all duration-700 rounded-[2rem] p-6 flex flex-col justify-between shadow-2xl relative overflow-hidden group">
              {/* Amber Light Leak behind glass */}
              <div className="absolute -top-10 -left-10 w-32 h-32 bg-yellow-500/10 blur-[60px] rounded-full pointer-events-none"></div>

              {/* Header */}
              <div className="flex justify-between items-center mb-6 relative z-10">
                <span className="text-amber-500/90 text-[10px] font-bold tracking-[0.2em] uppercase">
                  Organic Traffic
                </span>
                <span className="bg-amber-500 text-black px-2 py-0.5 rounded text-[10px] font-black tracking-tighter">
                  AFTER 6 MO
                </span>
              </div>

              {/* Inner Graph Area (Deep Glass) */}
              <div className="w-full bg-black/60 backdrop-blur-md rounded-xl p-4 relative mb-6 min-h-[160px] flex flex-col justify-end border border-white/10 overflow-hidden shadow-inner">
                {/* ... Bars and SVG path with your glowing cyan/amber logic here ... */}
                {/* TIP: Use the exact SVG code you had before, it will look amazing through this black glass! */}
              </div>

              <div className="flex items-baseline gap-2 relative z-10">
                <span className="text-4xl font-black text-amber-500 tracking-tighter drop-shadow-[0_0_10px_rgba(251,191,36,0.3)]">
                  48,900
                </span>
                <span className="text-amber-500/70 text-xs font-bold uppercase tracking-widest">
                  /mo
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2.8 WHY TECH STROTA & GRAPH IMPACT (New Section from Images) */}
      <section className="relative z-10 py-10 md:py-14 px-4 sm:px-6 w-full max-w-7xl mx-auto border-t border-white/5">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-stretch">
          {/* Left Side: Organic Impact Graph Card (Image 2) */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 w-full p-8 rounded-[2rem] transition-all duration-300 min-h-[400px] flex flex-col justify-between overflow-hidden group
    /* GLASS EFFECT START */
    bg-white/[0.03] backdrop-blur-md border border-blue-500/50 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)]
    hover:bg-white/[0.07] hover:border-amber-400/30 hover:shadow-[0_15px_40px_rgba(251,191,36,0.15)] hover:-translate-y-2
    /* GLASS EFFECT END */"
          >
            {/* Swooping Golden SVG Curve Background */}
            <svg
              className="absolute inset-0 w-full h-full object-cover pointer-events-none z-0"
              preserveAspectRatio="none"
              viewBox="0 0 100 100"
            >
              <defs>
                <linearGradient
                  id="goldGradient"
                  x1="0%"
                  y1="100%"
                  x2="100%"
                  y2="0%"
                >
                  <stop offset="0%" stopColor="#8B95A5" stopOpacity="0.1" />
                  <stop offset="50%" stopColor="#fbbf24" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#fbbf24" stopOpacity="0.1" />
                </linearGradient>
              </defs>
              <path
                d="M-10,95 C20,90 30,65 60,50 C80,40 90,20 110,5"
                fill="none"
                stroke="url(#goldGradient)"
                strokeWidth="2"
                vectorEffect="non-scaling-stroke"
                className="drop-shadow-[0_0_10px_rgba(251,191,36,0.3)]"
              />
            </svg>

            {/* Staggered Stats Over The Graph */}
            <div className="relative z-10 flex flex-col h-full justify-between gap-12">
              {/* Stat 1: Top Right */}
              <div className="self-end text-right">
                <span className="block text-5xl md:text-6xl font-bold text-[#3ab0ff] mb-1">
                  8.4M
                </span>
                <span className="text-[10px] md:text-xs font-bold tracking-widest uppercase text-[#8B95A5]">
                  Impressions/Mo
                </span>
              </div>

              {/* Stat 2: Middle Center */}
              <div className="self-center text-center">
                <span className="block text-5xl md:text-6xl font-bold text-white mb-1">
                  1st
                </span>
                <span className="text-[10px] md:text-xs font-bold tracking-widest uppercase text-[#8B95A5]">
                  Page Penetration
                </span>
              </div>

              {/* Stat 3: Bottom Left */}
              <div className="self-start text-left">
                <span className="block text-5xl md:text-6xl font-bold text-amber-400 mb-1">
                  +412%
                </span>
                <span className="text-[10px] md:text-xs font-bold tracking-widest uppercase text-[#8B95A5]">
                  Organic Traffic
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Why Tech Strota Checklist (Image 1) */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 w-full flex flex-col justify-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-10 tracking-tight">
              Why{" "}
              <span>
                <span className="text-[#FFC933]">Tech</span>
                <span className="text-[#2AB4F4]">strota</span>
              </span>
            </h2>

            <div className="space-y-6">
              {whyTechStrota.map((item, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  {/* Custom Checkbox mimicking the image */}
                  <div className="mt-1 w-6 h-6 shrink-0 bg-white/[0.03] border border-white/10 rounded flex items-center justify-center">
                    <Check
                      className={`w-4 h-4 ${
                        idx % 2 === 0 ? "text-amber-400" : "text-[#3ab0ff]"
                      }`}
                      strokeWidth={3}
                    />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-1">
                      {item.title}
                    </h4>
                    <p className="text-[#8B95A5] text-sm md:text-base leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. MINI CTA */}
      <section className="w-full py-12 md:py-20 px-4 sm:px-6 border-t border-white/5 relative overflow-hidden">
        {/* Optional: Deep background glow to enhance the frost effect */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/5 blur-[120px] pointer-events-none"></div>

        <motion.div
          className="max-w-5xl mx-auto p-10 md:p-16 text-center relative overflow-hidden rounded-[2.5rem]
      /* GLASS EFFECT START */
      bg-white/[0.03] backdrop-blur-xl border border-amber-500/50 
      shadow-[0_20px_50px_rgba(0,0,0,0.3)]
      /* GLASS EFFECT END */"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
        >
          {/* Amber Internal Glow - Softened for the glass look */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-[600px] bg-amber-400/[0.08] rounded-full blur-[100px] pointer-events-none"></div>

          <div className="relative z-10">
            <h2 className="text-3xl md:text-6xl font-extrabold mb-8 tracking-tight leading-tight text-white">
              Your website deserves{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-400">
                1st rank on Google?
              </span>
            </h2>
            <Link href="/contact">
              <button className="group relative bg-[#1374BB] hover:bg-[#0e5f99] text-white font-bold text-lg py-4 px-12 rounded-xl transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-[0_10px_30px_-10px_rgba(19,116,187,0.5)] overflow-hidden">
                {/* Button Shine Effect */}
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></span>
                Contact Us
              </button>
            </Link>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
