"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function MobileAppServices() {
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const scrollContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };

  const scrollItem = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <main className="bg-[#040A15] min-h-screen w-full font-sans text-white overflow-hidden">
      {/* 1. HERO SECTION (Untouched) */}
      <section className="relative z-10 min-h-[100dvh] w-full pt-16 pb-20 px-4 sm:px-6 flex items-center justify-center font-sans overflow-hidden relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(19,116,187,0.1)_0%,transparent_70%)] pointer-events-none" />
        <div className="w-full max-w-4xl flex flex-col items-center text-center z-10">
          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            className="mb-8"
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#1374BB]/30 bg-[#1374BB]/5 text-[#1374BB] text-xs font-bold tracking-wider uppercase">
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
                <line x1="12" y1="18" x2="12.01" y2="18"></line>
              </svg>
              Premium App Solutions
            </span>
          </motion.div>
          <motion.h1
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.1] mb-6 tracking-tight"
          >
            <span className="text-[#1374BB]">Mobile App</span>
            <br />
            Development Services
          </motion.h1>
          <motion.p
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            className="text-[#9ca2aa] font-bold text-md md:text-lg max-w-5xl mb-10"
          >
            Mobile app development is the process of creating software
            applications that run on mobile devices, such as smartphones and
            tablets. It involves designing, coding, testing, and deploying apps
            for various platforms like iOS and Android. Mobile app development
            can be done using native languages (Swift for iOS, Java/Kotlin for
            Android) or cross-platform frameworks (React Native, Flutter) to
            create engaging and functional applications that meet user needs.
          </motion.p>
          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col sm:flex-row items-center gap-4 mb-16"
          >
            <Link href="/contact" className="w-full sm:w-auto">
              <button className="bg-[#1374BB] hover:bg-[#0e5f99] text-white font-bold py-4 px-10 rounded-xl transition-all shadow-lg shadow-[#1374BB]/20">
                Inquire Now
              </button>
            </Link>
            <Link href="/portfolio" className="w-full sm:w-auto">
              <button className="border-2 border-[#1374BB]/20 hover:border-[#1374BB] text-[#1374BB] font-bold py-4 px-10 rounded-xl transition-all">
                View Portfolio
              </button>
            </Link>
          </motion.div>
          <div className="w-full flex justify-center">
            <motion.div
              className="relative w-[300px] h-[533px] rounded-[3rem] border-[10px] border-[#1e293b] bg-black shadow-[0_0_60px_rgba(19,116,187,0.25)] overflow-hidden"
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <video
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover opacity-90"
              >
                <source src="/services/mobile-app.mp4" type="video/mp4" />
              </video>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. WHY CHOOSE US (Yellow Borders & Icon Backgrounds) */}
      <section className="relative z-10 w-full py-6 px-4 sm:px-6">
        <motion.div
          className="max-w-7xl mx-auto"
          variants={scrollContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div variants={scrollItem} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose <span className="text-[#1374BB]">Us</span>
            </h2>
            <p className="text-[#9ca2aa] text-lg max-w-2xl mx-auto">
              Industry expertise meets cutting-edge tech.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Fast Delivery", icon: "M13 10V3L4 14h7v7l9-11h-7z" },
              {
                title: "Experienced Devs",
                icon: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4",
              },
              {
                title: "Scalable Solutions",
                icon: "M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7",
              },
              {
                title: "Dedicated Support",
                icon: "M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
              },
            ].map((feature, idx) => (
              <motion.div
                key={idx}
                variants={scrollItem}
                className="bg-[#0D182E] border border-amber-400/30 hover:border-amber-400 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(251,191,36,0.1)] transition-all duration-300 p-8 rounded-2xl flex flex-col items-start shadow-[0_10px_40px_rgba(0,0,0,0.6)]"
              >
                <div className="w-12 h-12 bg-amber-400/10 rounded-xl flex items-center justify-center text-amber-400 mb-6">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d={feature.icon}
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-[#8B95A5] text-sm leading-relaxed">
                  Tailored strategies for rapid growth.
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* 3. PROCESS (Yellow Glow on Steps, Blue Text) */}
      <section className="relative z-10 w-full py-14 px-4 sm:px-6">
        <motion.div
          className="max-w-7xl mx-auto text-center"
          variants={scrollContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2
            variants={scrollItem}
            className="text-3xl md:text-4xl font-bold mb-16"
          >
            Our <span className="text-[#1374BB]">Development Process</span>
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            <div className="hidden md:block absolute top-8 left-0 w-full h-[1px] bg-amber-400/20 z-0"></div>
            {["01", "02", "03", "04"].map((step, idx) => (
              <motion.div
                key={idx}
                variants={scrollItem}
                className="relative z-10 flex flex-col items-center"
              >
                <div className="w-16 h-16 rounded-full bg-[#040A15] border-2 border-amber-400 text-amber-400 flex items-center justify-center text-xl font-black mb-6 shadow-[0_0_15px_rgba(251,191,36,0.2)]">
                  {step}
                </div>
                <h3 className="text-xl font-bold mb-3">Phase {step}</h3>
                <p className="text-[#8B95A5] text-sm">
                  Strategic execution and launch.
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* 4. BENEFITS (Option 2: Business & Trust Focus) */}
      <section className="relative z-10 w-full py-24 px-4 sm:px-6">
        <motion.div
          className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-16"
          variants={scrollContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Left: Stat Cards Container */}
          <motion.div
            variants={scrollItem}
            className="flex-1 w-full flex justify-center"
          >
            <div className="relative p-1 bg-gradient-to-br from-amber-400/30 via-transparent to-amber-400/10 rounded-[2.5rem]">
              <div className="bg-[#091122] rounded-[2.3rem] p-6 sm:p-10 flex flex-row gap-4 sm:gap-6 shadow-2xl relative overflow-hidden">
                {/* Subtle Background Radial */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(251,191,36,0.08),transparent)] pointer-events-none" />

                {/* Engagement Card */}
                <div className="flex-1 flex flex-col items-center justify-center py-12 px-4 rounded-3xl bg-[#0d172d] border border-white/5 hover:border-amber-400/30 transition-colors duration-500 group text-center">
                  <span className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-2 group-hover:scale-110 transition-transform duration-500">
                    High
                  </span>
                  <span className="text-xs uppercase tracking-[0.2em] text-amber-400/80 font-semibold">
                    Engagement
                  </span>
                </div>

                {/* Security Card */}
                <div className="flex-1 flex flex-col items-center justify-center py-12 px-4 rounded-3xl bg-[#0d172d] border border-white/5 hover:border-amber-400/30 transition-colors duration-500 group text-center">
                  <span className="text-2xl sm:text-3xl lg:text-4xl font-black text-white mb-2 group-hover:scale-110 transition-transform duration-500 uppercase">
                    Top Rated
                  </span>
                  <span className="text-xs uppercase tracking-[0.2em] text-amber-400/80 font-semibold">
                    User Reviews
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Content List */}
          <motion.div variants={scrollContainer} className="flex-1 lg:pl-10">
            <motion.h2
              variants={scrollItem}
              className="text-4xl md:text-5xl font-extrabold mb-8 leading-tight"
            >
              Built for <span className="text-[#1374BB]">Measurable</span>{" "}
              Business Impact
            </motion.h2>

            <div className="space-y-8">
              {[
                {
                  title: "Maximized User Retention",
                  desc: "Strategies built into the UI to keep users active and reduce churn rates.",
                },
                {
                  title: "Enterprise-Grade Reliability",
                  desc: "Secure architectures designed to handle sensitive data and high-traffic volume.",
                },
                {
                  title: "Proven Market Success",
                  desc: "Delivering mobile solutions that directly contribute to your brand's growth and ROI.",
                },
              ].map((benefit, idx) => (
                <motion.div
                  key={idx}
                  variants={scrollItem}
                  className="group flex items-start gap-5"
                >
                  <div className="mt-1 flex-shrink-0 w-10 h-10 bg-amber-400/10 rounded-full flex items-center justify-center text-amber-400 border border-amber-400/20 group-hover:bg-amber-400 group-hover:text-black transition-all duration-300">
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
                    <h4 className="text-xl font-bold text-white mb-2 group-hover:text-amber-400 transition-colors">
                      {benefit.title}
                    </h4>
                    <p className="text-[#8B95A5] leading-relaxed">
                      {benefit.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* 5. FINAL CTA (Yellow Card Border, Blue Button) */}
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
              Ready to build <span className="text-[#1374BB]">your App?</span>
            </h2>
            <Link href="/contact">
              {/* UPDATED: Button shadow color changed to Yellow/Amber, Text remains White */}
              <button className="bg-[#1374BB] hover:bg-[#0e5f99] text-white font-bold text-lg py-4 px-10 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-[0_0_20px_rgba(251,191,36,0.4)]">
                Contact Us Today
              </button>
            </Link>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
