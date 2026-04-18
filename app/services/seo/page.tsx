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
    <main className="bg-[#040A15] text-white w-full overflow-hidden">
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
              className="bg-[#0A1220] border border-yellow-500/30 rounded-2xl p-8 hover:border-yellow-400 shadow-[0_0_15px_rgba(250,204,21,0.2)] hover:bg-[#0d1729] hover:-translate-y-1 transition-all duration-300 flex flex-col"
            >
              <div className={`mb-6 ${module.color}`}>{module.icon}</div>
              <h3 className="text-lg font-bold text-white mb-3">
                {module.title}
              </h3>
              <p className="text-[#8B95A5] text-sm leading-relaxed">
                {module.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 2. THE MONOLITH WORKFLOW */}
      <section className="relative z-10 py-10 md:py-14 px-4 sm:px-6 w-full max-w-7xl mx-auto border-t border-white/5">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={scrollVariants}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight text-white">
            The <span className="text-[#1374BB]">Monolith</span> Workflow
          </h2>
          <p className="text-[#8B95A5] text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
            From fundamental auditing to sustained search dominance in 6
            surgical phases.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {monolithWorkflow.map((phase, idx) => (
            <motion.div
              key={idx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={itemVariants}
              className="relative bg-[#0C1527] border border-yellow-500/30 rounded-2xl hover:border-yellow-400 shadow-[0_0_15px_rgba(250,204,21,0.2)] p-8 md:p-10  transition-all duration-300 flex flex-col group"
            >
              {/* Content */}
              <div className="relative z-10 mt-4">
                <div className="mb-6 text-[#1374BB]">{phase.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3 tracking-tight">
                  {phase.title}
                </h3>
                <p className="text-[#8B95A5] text-sm leading-relaxed">
                  {phase.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 2.5 PROVEN PERFORMANCE (From Uploaded Image) */}
      <section className="relative z-10 py-10 md:py-14 px-4 sm:px-6 w-full max-w-7xl mx-auto border-t border-white/5">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
          {/* Left Side: Text Intro */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={scrollVariants}
            className="lg:w-[45%]"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
              Proven <span className="text-[#1374BB]">Performance</span>
            </h2>
            <p className="text-[#8B95A5] text-base md:text-lg mb-10 leading-relaxed">
              We don&apos;t just promise results; we document the evolution of
              search dominance. Our methods are built on mathematical certainty,
              not algorithmic guesswork.
            </p>

            {/* Stat Cards Stack */}
            <div className="space-y-4">
              {provenPerformance.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-[#0A1220] border border-yellow-500/30 hover:border-yellow-400 hover:shadow-[0_0_15px_rgba(250,204,21,0.15)] transition-all duration-300 rounded-2xl p-6 flex items-center gap-6"
                >
                  <span className={`text-4xl font-black ${item.statColor}`}>
                    {item.stat}
                  </span>
                  <div>
                    <h4 className="text-lg font-bold text-white mb-1">
                      {item.title}
                    </h4>
                    <p className="text-[#8B95A5] text-sm">{item.desc}</p>
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
            {/* --- BEFORE CARD --- */}
            <div className="flex-1 bg-[#101520] border border-yellow-500/30 hover:border-yellow-400 hover:shadow-[0_0_15px_rgba(250,204,21,0.15)] transition-all duration-300 rounded-[2rem] p-6 flex flex-col justify-between shadow-xl">
              {/* Header */}
              <div className="flex justify-between items-center mb-6">
                <span className="text-[#8B95A5] text-xs font-bold tracking-widest uppercase">
                  Organic Traffic
                </span>
                <span className="text-red-400 text-sm font-semibold">
                  Before
                </span>
              </div>

              {/* Inner Graph Container */}
              <div className="w-full bg-[#181E29]/50 rounded-xl p-4 relative mb-6 min-h-[160px] flex flex-col justify-end">
                {/* Y-Axis Lines */}
                <div className="absolute inset-0 flex flex-col justify-between py-4 pointer-events-none z-0">
                  {[80, 60, 40, 20].map((val) => (
                    <div key={val} className="w-full flex items-center gap-2">
                      <span className="text-[10px] text-white/20 w-4 text-right font-mono">
                        {val}
                      </span>
                      <div className="flex-1 h-[1px] bg-white/[0.03]"></div>
                    </div>
                  ))}
                </div>

                {/* Muted Grey Bars */}
                <div className="w-full flex items-end gap-[2px] relative z-10 pl-6 pt-8 h-full">
                  {[
                    15, 25, 20, 10, 15, 22, 28, 20, 25, 35, 30, 40, 45, 55, 50,
                    45, 65, 75, 70, 80, 95, 90, 100,
                  ].map((h, i) => (
                    <div
                      key={i}
                      className="flex-1 bg-[#8B95A5]/30 rounded-t-[1px]"
                      style={{ height: `${h}%` }}
                    ></div>
                  ))}

                  {/* Muted Trendline */}
                  <svg
                    className="absolute inset-0 w-full h-full pl-6"
                    preserveAspectRatio="none"
                    viewBox="0 0 100 100"
                  >
                    <path
                      d="M0,80 L15,70 L30,55 L45,60 L60,40 L75,30 L85,40 L100,10"
                      fill="none"
                      stroke="rgba(255,255,255,0.2)"
                      strokeWidth="1"
                      vectorEffect="non-scaling-stroke"
                    />
                  </svg>
                </div>
              </div>

              {/* Footer Stat */}
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-extrabold text-white tracking-tight">
                  1,200
                </span>
                <span className="text-[#8B95A5] text-sm font-medium">
                  monthly
                </span>
              </div>
            </div>

            {/* --- AFTER CARD --- */}
            <div className="flex-1 bg-[#0A1220] border border-yellow-500/50 hover:border-yellow-400 hover:shadow-[0_0_25px_rgba(250,204,21,0.2)] transition-all duration-300 rounded-[2rem] p-6 flex flex-col justify-between shadow-[0_10px_40px_rgba(250,204,21,0.1)]">
              {/* Header */}
              <div className="flex justify-between items-center mb-6">
                <span className="text-amber-500/90 text-xs font-bold tracking-widest uppercase">
                  Organic Traffic
                </span>
                <span className="text-amber-500 text-sm font-bold">
                  After 6 Months
                </span>
              </div>

              {/* Inner Graph Container (Darker background) */}
              <div className="w-full bg-[#040810] rounded-xl p-4 relative mb-6 min-h-[160px] flex flex-col justify-end overflow-hidden">
                {/* Very subtle glow inside the graph area */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-cyan-500/5 blur-2xl pointer-events-none z-0"></div>

                {/* Y-Axis Lines */}
                <div className="absolute inset-0 flex flex-col justify-between py-4 pointer-events-none z-0">
                  {[80, 60, 40, 20, 0].map((val) => (
                    <div key={val} className="w-full flex items-center gap-2">
                      <span className="text-[10px] text-white/30 w-4 text-right font-mono">
                        {val}
                      </span>
                      <div className="flex-1 h-[1px] bg-white/[0.04]"></div>
                    </div>
                  ))}
                </div>

                {/* Glowing Cyan Bars */}
                <div className="w-full flex items-end gap-[2px] relative z-10 pl-6 pt-4 h-full">
                  {[
                    5, 10, 15, 12, 18, 25, 20, 28, 35, 45, 40, 48, 55, 65, 60,
                    75, 85, 70, 80, 95, 100, 95, 100,
                  ].map((h, i) => (
                    <div
                      key={i}
                      className="flex-1 bg-gradient-to-t from-cyan-900/40 to-cyan-400/90 rounded-t-[1px] relative"
                      style={{ height: `${h}%` }}
                    >
                      {/* Top highlight on bar */}
                      <div className="absolute top-0 left-0 w-full h-[2px] bg-cyan-200 opacity-80 blur-[0.5px]"></div>
                    </div>
                  ))}

                  {/* Amber Glowing Trendline */}
                  <svg
                    className="absolute inset-0 w-full h-full pl-6"
                    preserveAspectRatio="none"
                    viewBox="0 0 100 100"
                  >
                    {/* Shadow/Glow layer */}
                    <path
                      d="M0,90 L18,75 L35,70 L50,45 L65,55 L85,20 L100,5"
                      fill="none"
                      stroke="rgba(251,191,36,0.6)"
                      strokeWidth="4"
                      vectorEffect="non-scaling-stroke"
                      className="blur-[3px]"
                    />
                    {/* Core crisp line */}
                    <path
                      d="M0,90 L18,75 L35,70 L50,45 L65,55 L85,20 L100,5"
                      fill="none"
                      stroke="#fbbf24"
                      strokeWidth="2"
                      vectorEffect="non-scaling-stroke"
                    />

                    {/* Data Nodes */}
                    <circle
                      cx="18"
                      cy="75"
                      r="2"
                      fill="#fff"
                      className="drop-shadow-[0_0_5px_#fbbf24]"
                    />
                    <circle
                      cx="35"
                      cy="70"
                      r="2"
                      fill="#fff"
                      className="drop-shadow-[0_0_5px_#fbbf24]"
                    />
                    <circle
                      cx="50"
                      cy="45"
                      r="2"
                      fill="#fff"
                      className="drop-shadow-[0_0_5px_#fbbf24]"
                    />
                    <circle
                      cx="65"
                      cy="55"
                      r="2"
                      fill="#fff"
                      className="drop-shadow-[0_0_5px_#fbbf24]"
                    />
                    <circle
                      cx="85"
                      cy="20"
                      r="2"
                      fill="#fff"
                      className="drop-shadow-[0_0_5px_#fbbf24]"
                    />
                  </svg>
                </div>
              </div>

              {/* Footer Stat */}
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-extrabold text-amber-500 tracking-tight">
                  48,900
                </span>
                <span className="text-amber-500/70 text-sm font-medium">
                  monthly
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
            className="lg:w-1/2 w-full bg-[#0A1220] border border-amber-400/15 shadow-[0_0_30px_rgba(251,191,36,0.1)] rounded-[2rem] p-8 relative overflow-hidden shadow-2xl min-h-[400px] flex flex-col justify-between group"
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
      <section className="w-full py-10 px-4 sm:px-6 border-t border-white/5">
        <motion.div
          className="max-w-5xl mx-auto bg-[#091122] rounded-[2rem] border border-amber-400/30 p-10 md:p-16 text-center relative overflow-hidden"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-[600px] bg-amber-400/10 rounded-full blur-[80px] pointer-events-none"></div>

          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight">
              Your website deserves{" "}
              <span className="text-[#1374BB]">1st rank on Google?</span>
            </h2>
            <Link href="/contact">
              <button className="bg-[#1374BB] hover:bg-[#0e5f99] text-white font-bold text-lg py-4 px-10 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-[0_0_20px_rgba(251,191,36,0.4)]">
                Contact Us
              </button>
            </Link>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
