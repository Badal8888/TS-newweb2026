"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function WebAppServices() {
  // Hero section animation variants
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

  // Scroll animation variants for lower sections
  const scrollContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const scrollItem = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <main className="bg-transparent min-h-screen w-full font-sans text-white overflow-hidden">
      {/* 1. HERO SECTION */}
      <section className="min-h-[100dvh] lg:h-screen w-full pt-6 pb-12 px-4 sm:px-6 bg-transparent flex items-center justify-center">
        <div className="relative z-10 w-full max-w-7xl flex flex-col lg:flex-row items-center justify-between gap-4">
          {/* LEFT CONTENT */}
          <motion.div
            className="flex-1 text-center lg:text-left"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Badge - Accent borders and bg changed to Amber, Text remains Blue */}
            <motion.div variants={itemVariants} className="mb-4">
              <span className="inline-flex px-4 py-1.5 rounded-full border border-blue-400/30 bg-amber-400/5 text-[#1374BB] text-xs font-bold uppercase">
                Build Powerful Web Apps
              </span>
            </motion.div>

            {/* Heading - Text remains Blue */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-5 leading-[1.1]"
            >
              <span className="text-[#1374BB]">Web Application</span>
              <br />
              Development
              <br />
              Services
            </motion.h1>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-[#8B95A5] text-base lg:text-lg max-w-xl mb-8"
            >
              Our web application development services deliver powerful,
              scalable, and user-friendly solutions tailored to your business
              needs. We specialize in creating custom web applications that
              enhance user experiences and drive business growth. From
              responsive design to robust backend development, we ensure your
              web application stands out in the digital landscape.
            </motion.p>

            {/* Buttons - Background and text remains Blue, adding subtle accent shadow */}
            <motion.div
              variants={itemVariants}
              className="flex gap-4 flex-col sm:flex-row justify-center lg:justify-start"
            >
              <Link href="/contact">
                <button className="bg-[#1374BB] hover:bg-[#0e5f99] text-white font-bold py-3 px-8 rounded-xl transition-colors w-full sm:w-auto shadow-[0_0_15px_rgba(19,116,187,0.2)]">
                  Inquire Now
                </button>
              </Link>

              <Link href="/portfolio">
                <button className="border-2 border-[#1374BB]/20 hover:border-[#1374BB] text-[#1374BB] font-bold py-3 px-8 rounded-xl transition-colors w-full sm:w-auto">
                  View Portfolio
                </button>
              </Link>
            </motion.div>
          </motion.div>

          {/* RIGHT VIDEO */}
          <motion.div
            className="flex-1 w-full mt-8 lg:mt-0"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="rounded-2xl overflow-hidden border border-gray-800/60 shadow-2xl bg-[#091122] aspect-video">
              <video
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity"
              >
                <source src="/services/web_application.mp4" type="video/mp4" />
              </video>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. WHY CHOOSE US (Yellow Borders & Icon Backgrounds) */}
      <section className="relative z-10 w-full py-20 px-4 sm:px-6">
        <motion.div
          className="max-w-7xl mx-auto"
          variants={scrollContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div variants={scrollItem} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose Our Web Expertise
            </h2>
            <p className="text-[#8B95A5] text-lg max-w-2xl mx-auto">
              We engineer web applications that don&apos;t just look great, but
              perform flawlessly under heavy loads and complex workflows.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Full-Stack Mastery",
                desc: "Expertise in modern frontend frameworks and robust backend architectures.",
                icon: (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                  />
                ),
              },
              {
                title: "Responsive by Default",
                desc: "Fluid layouts that provide perfect user experiences on any device or screen size.",
                icon: (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                ),
              },
              {
                title: "Cloud-Native Scaling",
                desc: "Deployed on modern cloud infrastructure (AWS/GCP) to handle unlimited traffic.",
                icon: (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
                  />
                ),
              },
              {
                title: "API-First Approach",
                desc: "Seamlessly integrate with third-party services and your existing enterprise software.",
                icon: (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
                  />
                ),
              },
            ].map((feature, idx) => (
              <motion.div
                key={idx}
                variants={scrollItem}
                // MODIFIED: bg-white/[0.03], backdrop-blur-md, and updated border for glass look
                className="bg-white/[0.03] backdrop-blur-md border border-white/10 hover:border-amber-400/50 transition-all duration-500 p-8 rounded-2xl flex flex-col items-start group shadow-xl"
              >
                {/* Icon Container with subtle glass effect */}
                <div className="w-12 h-12 bg-amber-400/10 rounded-xl flex items-center justify-center text-amber-400 mb-6 group-hover:scale-110 transition-transform duration-300 shadow-inner">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    {feature.icon}
                  </svg>
                </div>

                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>

                <p className="text-[#8B95A5] text-md leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* 3. PROCESS (Yellow Glow on Steps, Blue connecting line, Amber-gold borders) */}
      <section className="w-full py-10 px-4 sm:px-6 bg-[#091122]/50 border-y border-gray-800/40">
        <motion.div
          className="max-w-7xl mx-auto"
          variants={scrollContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div variants={scrollItem} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              How We Build
            </h2>
            <p className="text-[#8B95A5] text-xl max-w-2xl mx-auto">
              A structured, transparent methodology to take your web app from a
              rough idea to a deployed reality.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            {/* Desktop connecting line - Changed color to subtle Amber */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full -translate-y-1/2 z-0"></div>

            {[
              {
                step: "01",
                title: "Discovery & Arch",
                desc: "Mapping user journeys, database schemas, and selecting the right tech stack.",
              },
              {
                step: "02",
                title: "UI/UX Prototyping",
                desc: "Designing wireframes and interactive prototypes for early feedback.",
              },
              {
                step: "03",
                title: "Agile Development",
                desc: "Writing clean code in sprints, keeping you updated with weekly demos.",
              },
              {
                step: "04",
                title: "QA & Deployment",
                desc: "Security testing, performance optimization, and going live on the web.",
              },
            ].map((process, idx) => (
              <motion.div
                key={idx}
                variants={scrollItem}
                className="relative z-10 flex flex-col items-center text-center"
              >
                {/* UPDATED: Step number circle bg, border, text (Amber) and glow shadow */}
                <div className="w-16 h-16 rounded-full bg-[#040A15] border-2 border-amber-400 text-amber-400 flex items-center justify-center text-xl font-black mb-6 shadow-[0_0_20px_rgba(251,191,36,0.2)]">
                  {process.step}
                </div>
                <h3 className="text-xl font-bold mb-3">{process.title}</h3>
                <p className="text-[#8B95A5] text-md leading-relaxed">
                  {process.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* 4. BENEFITS / RESULTS (Abstract Visual with Yellow gradient and borders, Yellow checkmarks) */}
      <section className="relative z-10 w-full py-20 px-4 sm:px-6 bg-transparent">
        <motion.div
          className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12"
          variants={scrollContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Left: 4-Card Staggered Layout */}
          <motion.div
            variants={scrollItem}
            className="flex-1 w-full relative flex items-center justify-center"
          >
            <div className="relative w-full max-w-sm">
              {/* Inner background glow kept behind the floating cards */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-amber-400/10 rounded-full blur-[100px] pointer-events-none"></div>

              {/* Staggered 2-Column Layout */}
              <div className="relative z-10 flex w-full">
                {/* LEFT COLUMN */}
                <div className="flex flex-col w-1/2">
                  {/* Top Left: Page Load Speed */}
                  <div
                    className="aspect-square rounded-[2rem] flex flex-col items-center justify-center p-4 text-center transition-all duration-500 relative z-10
              /* GLASS EFFECT */
              bg-white/[0.03] backdrop-blur-md border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)]
              hover:bg-white/[0.08] hover:border-amber-400/40 hover:shadow-amber-400/10"
                  >
                    <span className="text-3xl sm:text-4xl font-black text-white mb-2">
                      &lt; 1s
                    </span>
                    <span className="text-xs sm:text-sm text-[#8B95A5]">
                      Page Load Speed
                    </span>
                  </div>

                  {/* Bottom Left: Shield Icon */}
                  <div
                    className="aspect-square rounded-[2rem] flex items-center justify-center p-4 transition-all duration-500 relative z-10
              /* GLASS EFFECT */
              bg-white/[0.03] backdrop-blur-md border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)]
              hover:bg-white/[0.08] hover:border-amber-400/40 hover:shadow-amber-400/10"
                  >
                    <svg
                      className="w-12 h-12 sm:w-16 sm:h-16 text-amber-400 drop-shadow-[0_0_8px_rgba(251,191,36,0.4)]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10zm-3-10 2 2 4-4"
                      />
                    </svg>
                  </div>
                </div>

                {/* RIGHT COLUMN (Staggered down) */}
                <div className="flex flex-col w-1/2 pt-12 sm:pt-16">
                  {/* Top Right: Globe Icon */}
                  <div
                    className="aspect-square rounded-[2rem] flex items-center justify-center p-4 transition-all duration-500 relative z-0
              /* GLASS EFFECT */
              bg-white/[0.03] backdrop-blur-md border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)]
              hover:bg-white/[0.08] hover:border-amber-400/40 hover:shadow-amber-400/10"
                  >
                    <svg
                      className="w-12 h-12 sm:w-16 sm:h-16 text-amber-400 drop-shadow-[0_0_8px_rgba(251,191,36,0.4)]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm0 0c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 0 1 18 0M3 12h18"
                      />
                    </svg>
                  </div>

                  {/* Bottom Right: Data Security */}
                  <div
                    className="aspect-square rounded-[2rem] flex flex-col items-center justify-center p-4 text-center transition-all duration-500 relative z-0
              /* GLASS EFFECT */
              bg-white/[0.03] backdrop-blur-md border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)]
              hover:bg-white/[0.08] hover:border-amber-400/40 hover:shadow-amber-400/10"
                  >
                    <span className="text-3xl sm:text-4xl font-black text-white mb-2">
                      100%
                    </span>
                    <span className="text-xs sm:text-sm text-[#8B95A5]">
                      Data Security
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Benefits List with UPDATED: Yellow checkmark bg and text */}
          <motion.div variants={scrollContainer} className="flex-1">
            <motion.h2
              variants={scrollItem}
              className="text-3xl md:text-4xl font-bold mb-6"
            >
              Web Solutions Engineered for{" "}
              <span className="text-[#1374BB]">Impact</span>
            </motion.h2>
            <motion.p
              variants={scrollItem}
              className="text-[#8B95A5] mb-8 text-lg"
            >
              We don&apos;t just build websites; we build complex web
              applications that automate workflows, engage users, and generate
              revenue.
            </motion.p>

            <div className="space-y-6">
              {[
                {
                  title: "Lightning Fast Performance",
                  desc: "Optimized asset delivery and server-side rendering for immediate interactivity.",
                },
                {
                  title: "SEO & Accessibility Standard",
                  desc: "Built to rank high on search engines and be accessible to all users.",
                },
                {
                  title: "Enterprise-Grade Security",
                  desc: "Data encryption, secure authentication, and protection against web vulnerabilities.",
                },
                {
                  title: "Future-Proof Architecture",
                  desc: "Modular codebases that allow you to easily add new features as your business grows.",
                },
              ].map((benefit, idx) => (
                <motion.div
                  key={idx}
                  variants={scrollItem}
                  className="flex items-start gap-4"
                >
                  {/* UPDATED: Checkmark bg and color (Amber) */}
                  <div className="mt-1 bg-amber-400/20 p-1.5 rounded-full text-amber-400">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="3"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white mb-1">
                      {benefit.title}
                    </h4>
                    <p className="text-[#8B95A5] text-sm">{benefit.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* 5. FINAL CTA (Yellow Card Border & Background Glow, Yellow Button Shadow) */}
      <section className="w-full py-12 md:py-20 px-4 sm:px-6 relative overflow-hidden">
        {/* Optional: Extra background decorative glow for depth */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-amber-400/5 blur-[120px] pointer-events-none"></div>

        <motion.div
          className="max-w-5xl mx-auto p-10 md:p-16 text-center relative overflow-hidden rounded-[2.5rem]
      /* GLASS EFFECT START */
      bg-white/[0.03] backdrop-blur-xl border border-white/10 
      shadow-[0_20px_50px_rgba(0,0,0,0.3)]
      /* GLASS EFFECT END */"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
        >
          {/* Amber Internal Glow - Softened for glass look */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-[600px] bg-amber-400/[0.07] rounded-full blur-[100px] pointer-events-none"></div>

          <div className="relative z-10">
            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-extrabold mb-6 tracking-tight leading-tight">
              Ready to build{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-400">
                your Web app?
              </span>
            </h2>

            <p className="text-[#8B95A5] text-base md:text-xl mb-10 max-w-2xl mx-auto font-medium leading-relaxed">
              Whether you need a{" "}
              <span className="text-white">SaaS platform</span>, a{" "}
              <span className="text-white">custom CRM</span>, or an interactive
              portal, our team is ready to bring your vision to life.
            </p>

            <Link href="/contact">
              <button className="relative group overflow-hidden bg-[#1374BB] text-white font-bold text-lg py-4 px-10 rounded-xl transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-[0_10px_30px_-10px_rgba(19,116,187,0.5)]">
                {/* Subtle button shine effect */}
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></span>
                Start Your Project
              </button>
            </Link>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
