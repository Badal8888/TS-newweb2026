"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  MonitorSmartphone,
  Smartphone,
  Database,
  PenTool,
  Network,
  Zap,
  BrainCircuit,
  ShieldCheck,
  MessageSquare,
  Rocket,
} from "lucide-react";

export default function DedicatedDevelopers() {
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
  const services = [
    {
      title: "Web Development",
      tools: "React, Next.js",
      icon: <MonitorSmartphone size={24} />,
    },
    {
      title: "Mobile Application",
      tools: "React Native, Flutter",
      icon: <Smartphone size={24} />,
    },
    {
      title: "SaaS Development",
      tools: "Scalable web platforms",
      icon: <Database size={24} />,
    },
    {
      title: "Product Re-engineering",
      tools: "Improve old systems",
      icon: <PenTool size={24} />,
    },
    {
      title: "Custom Software",
      tools: "Tailored business solutions",
      icon: <Network size={24} />,
    },
  ];

  const workflow = [
    {
      step: "01",
      title: "Share Requirement",
      desc: "Tell us about your project goals and technical needs.",
    },
    {
      step: "02",
      title: "Get Developer Match",
      desc: "We align you with top-tier talent suited for your stack.",
    },
    {
      step: "03",
      title: "Start Development",
      desc: "Onboarding is seamless. Code begins shipping rapidly.",
    },
    {
      step: "04",
      title: "Daily Updates & Delivery",
      desc: "Stay in the loop with daily commits and transparent progress.",
    },
  ];

  const benefits = [
    {
      title: "Fast Delivery",
      desc: "Rapid deployment without compromising quality.",
      icon: <Zap size={24} />,
    },
    {
      title: "Skilled Developers",
      desc: "Vetted experts with proven track records.",
      icon: <BrainCircuit size={24} />,
    },
    {
      title: "NDA & Security",
      desc: "Your IP is fully protected and secured.",
      icon: <ShieldCheck size={24} />,
    },
    {
      title: "Direct Communication",
      desc: "No middle-men. Talk directly to your team.",
      icon: <MessageSquare size={24} />,
    },
    {
      title: "Scalable Solutions",
      desc: "Built to grow alongside your business.",
      icon: <Rocket size={24} />,
    },
  ];

  return (
    <main className="bg-[#040A15] text-white w-full overflow-hidden">
      {/* 1. HERO SECTION */}
      <section className="min-h-[100dvh] lg:h-screen w-full pt-14 pb-12 px-4 sm:px-6 flex items-center justify-center">
        <div className="w-full max-w-7xl flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-4">
          {/* LEFT CONTENT */}
          <motion.div
            className="flex-1 text-center lg:text-left"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* UPDATED: Badge - Yellow/Amber border, glow, and bg. Text remains Blue */}
            <motion.div variants={itemVariants} className="mb-4">
              <span className="inline-flex px-4 py-1.5 rounded-full border border-blue-400/30 bg-amber-400/5 text-[#1374BB] text-xs font-bold uppercase tracking-wider shadow-[0_0_15px_rgba(251,191,36,0.2)]">
                Expert Development Team
              </span>
            </motion.div>

            {/* Heading remains Blue gradient */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-white mb-6 leading-[1.1]"
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1374BB] to-[#3ab0ff]">
                Dedicated
              </span>
              <br />
              Developers for
              <br />
              Your Projects
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-[#8B95A5] text-base lg:text-lg max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed"
            >
              Hire dedicated developers to accelerate your project development
              with expertise in web, mobile, and software solutions. Our
              dedicated developers work exclusively on your projects, ensuring
              seamless integration and high-quality deliverables.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex gap-4 flex-col sm:flex-row justify-center lg:justify-start"
            >
              <Link href="/contact">
                <button className="w-full sm:w-auto bg-[#1374BB] hover:bg-[#0f5c96] transition-colors text-white font-bold py-3.5 px-8 rounded-xl shadow-[0_4px_20px_rgba(19,116,187,0.3)] hover:shadow-[0_4px_25px_rgba(19,116,187,0.5)]">
                  Inquire Now
                </button>
              </Link>

              <Link href="/portfolio">
                <button className="w-full sm:w-auto border-2 border-[#1374BB]/30 hover:border-[#1374BB] hover:bg-[#1374BB]/10 transition-all text-[#1374BB] font-bold py-3.5 px-8 rounded-xl">
                  View Portfolio
                </button>
              </Link>
            </motion.div>
          </motion.div>

          {/* RIGHT VIDEO */}
          <motion.div
            className="flex-1 w-full"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* UPDATED: Video container border and overlay changed to Amber */}
            <div className="rounded-2xl overflow-hidden border border-blue-400/30 bg-[#091122] aspect-video relative group ">
              <div className="absolute inset-0 group-hover:bg-transparent transition-colors z-10 pointer-events-none"></div>
              <video
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover scale-[1.02]"
              >
                <source src="/services/dedicated_dev.mp4" type="video/mp4" />
              </video>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. SERVICES & TECH STACK */}
      <section className="relative py-20 px-4 sm:px-6 w-full max-w-7xl mx-auto overflow-hidden">
        {/* Subtle ambient glow - pushed to the top and toned down so it doesn't wash out the cards */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#1374BB]/5 blur-[120px] rounded-full pointer-events-none -z-10"></div>

        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={scrollVariants}
          className="text-center mb-16 relative z-10"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight text-white">
            Expertise &{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1374BB] to-[#3ab0ff]">
              Tech Stack
            </span>
          </h2>
          <p className="text-[#8B95A5] text-lg max-w-2xl mx-auto leading-relaxed">
            We build scalable, high-performance solutions using industry-leading
            technologies tailored to your specific needs.
          </p>
        </motion.div>

        {/* Services Grid - Unique Flex Layout to center the 5 items perfectly */}
        <div className="flex flex-wrap justify-center gap-6 relative z-10">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={itemVariants}
              // Sleek, solid dark background with a very subtle border that glows amber on hover
              className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] group relative p-6 md:p-8 rounded-[2rem] bg-[#0A1220] border hover:border-white/5 border-amber-400/40 transition-all duration-300 hover:shadow-[0_10px_40px_-10px_rgba(251,191,36,0.15)] hover:-translate-y-1"
            >
              {/* Icon Container - Scaled down to match the image, with a permanent tight amber glow */}
              <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-[#040A15] border border-amber-400/20 shadow-[0_0_15px_rgba(251,191,36,0.1)] group-hover:bg-amber-400/10 group-hover:scale-110 transition-all duration-300">
                <div className="text-amber-400 scale-90">{service.icon}</div>
              </div>

              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-xl font-bold mb-2 text-white tracking-tight">
                  {service.title}
                </h3>
                <div className="flex items-center gap-2.5">
                  {/* Small bullet point matching the image */}
                  <span className="h-1.5 w-1.5 rounded-full bg-amber-400"></span>
                  <p className="text-[#8B95A5] text-sm font-medium">
                    {service.tools}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 3. WHY CHOOSE US (Trust Builder) */}
      <section className="py-10 px-4 sm:px-6 w-full max-w-7xl mx-auto">
        {/* UPDATED: Lighter background color, amber border, and deep shadow to separate it from the main background */}
        <div className="bg-[#0c1527] rounded-[2.5rem] border border-amber-400/20 shadow-[0_20px_60px_rgba(0,0,0,0.6)] p-8 md:p-16 relative overflow-hidden">
          {/* Abstract background glow */}
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-amber-400/10 rounded-full blur-[100px] pointer-events-none"></div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={scrollVariants}
            className="mb-14"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Partner <span className="text-[#1374BB]">With Us?</span>
            </h2>
            <p className="text-[#8B95A5] max-w-2xl text-lg">
              We don&apos;t just write code; we build extensions of your own
              team. Here is why companies trust us with their critical projects.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex items-start gap-4"
              >
                {/* Benefit Icon */}
                <div className="mt-1 text-amber-400 bg-amber-400/10 p-3 rounded-lg border border-amber-400/20">
                  {benefit.icon}
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white/90 mb-1">
                    {benefit.title}
                  </h4>
                  <p className="text-[#8B95A5] text-sm leading-relaxed">
                    {benefit.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. HOW IT WORKS */}
      <section className="py-10 px-4 sm:px-6 w-full max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={scrollVariants}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            How It <span className="text-[#1374BB]">Works</span>
          </h2>
          <p className="text-[#8B95A5] max-w-2xl mx-auto">
            A transparent, frictionless process designed to get your project
            moving from day one.
          </p>
        </motion.div>

        <div className="relative flex flex-col md:flex-row justify-between gap-12 md:gap-4">
          {/* UPDATED: Connecting Line changed to Amber gradient */}
          <div className="hidden md:block absolute top-8 left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-amber-400/10 via-amber-400/40 to-amber-400/10 z-0"></div>

          {workflow.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="relative z-10 flex-1 flex flex-col items-center text-center group"
            >
              {/* UPDATED: Step shapes (circles) border, color, hover bg, and shadow changed to Amber */}
              <div className="w-16 h-16 rounded-2xl bg-[#040A15] border-2 border-amber-400 flex items-center justify-center text-xl font-black text-amber-400 mb-6 group-hover:bg-amber-400 group-hover:text-[#040A15] group-hover:shadow-[0_0_20px_rgba(251,191,36,0.4)] transition-all duration-300">
                {item.step}
              </div>
              <h3 className="text-xl font-bold mb-3 text-white/90">
                {item.title}
              </h3>
              <p className="text-[#8B95A5] text-sm max-w-[250px]">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 5. FINAL CTA */}
      <section className="w-full py-10 px-4 sm:px-6">
        {/* UPDATED: Card border changed to Amber */}
        <motion.div
          className="max-w-5xl mx-auto bg-[#091122] rounded-[2rem] border border-amber-400/30 p-10 md:p-16 text-center relative overflow-hidden"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
        >
          {/* Background Glow - UPDATED to Amber */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-[600px] bg-amber-400/10 rounded-full blur-[80px] pointer-events-none"></div>

          <div className="relative z-10">
            {/* Heading - Text remains Blue */}
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight">
              Ready to build{" "}
              <span className="text-[#1374BB]">your project?</span>
            </h2>
            <p className="text-[#8B95A5] text-lg mb-10 max-w-2xl mx-auto">
              Stop delaying your product roadmap. Get matched with expert
              developers today and turn your vision into reality.
            </p>
            <Link href="/contact">
              {/* UPDATED: Button shadow color changed to Yellow/Amber, Text remains White */}
              <button className="bg-[#1374BB] hover:bg-[#0e5f99] text-white font-bold text-lg py-4 px-10 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-[0_0_20px_rgba(251,191,36,0.4)]">
                Let&apos;s Talk About Your Project
              </button>
            </Link>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
