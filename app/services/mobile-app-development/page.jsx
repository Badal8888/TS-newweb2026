"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function MobileAppServices() {
  // Staggered animation variants for hero
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  // Scroll animation variants for new sections
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
    <main className="bg-[#040A15] min-h-screen w-full font-sans text-white overflow-hidden">
      {/* 1. HERO SECTION (Kept exactly as requested) */}
      <section className="min-h-[100dvh] w-full pt-16 pb-20 px-4 sm:px-6 bg-[#040A15] flex items-center justify-center font-sans overflow-hidden relative">
        {/* Background Radial Glow - Recreates the subtle blue lighting from the image */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(19,116,187,0.1)_0%,transparent_70%)] pointer-events-none" />

        <div className="w-full max-w-4xl flex flex-col items-center text-center z-10">
          {/* Badge */}
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
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
                <line x1="12" y1="18" x2="12.01" y2="18"></line>
              </svg>
              Premium App Solutions
            </span>
          </motion.div>

          {/* Heading - Now centered and larger to match the image impact */}
          <motion.h1
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.1] mb-6 tracking-tight"
          >
            {" "}
            <span className="text-[#1374BB]">Mobile App</span>
            <br />
            Development Services
          </motion.h1>

          {/* Description - Centered with controlled width for readability */}
          <motion.p
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            className="text-[#8B95A5] text-md md:text-lg max-w-3xl mb-10 leading-relaxed"
          >
            Mobile app development is the process of creating software
            applications that run on mobile devices, such as smartphones and
            tablets. It involves designing, coding, testing, and deploying apps
            for various platforms like iOS and Android. Mobile app development
            can be done using native languages (Swift for iOS, Java/Kotlin for
            Android) or cross-platform frameworks (React Native, Flutter) to
            create engaging and functional applications that meet user needs.
          </motion.p>

          {/* Buttons - Centered below the text */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col sm:flex-row items-center gap-4 mb-16"
          >
            <Link href="/contact" className="w-full sm:w-auto">
              <button className="bg-[#1374BB] hover:bg-[#0e5f99] text-white font-bold py-4 px-10 rounded-xl transition-all duration-300 w-full sm:w-auto shadow-lg shadow-[#1374BB]/20">
                Inquire Now
              </button>
            </Link>

            <Link href="/portfolio" className="w-full sm:w-auto">
              <button className="border-2 border-[#1374BB]/20 hover:border-[#1374BB] text-[#1374BB] font-bold py-4 px-10 rounded-xl transition-all duration-300 w-full sm:w-auto">
                View Portfolio
              </button>
            </Link>
          </motion.div>

          {/* Video/Mockup - Positioned at the bottom like the reference image */}
          <div className="w-full flex justify-center">
            <motion.div
              className="relative w-[300px] h-[533px] rounded-[3rem] border-[10px] border-[#1e293b] bg-black shadow-[0_0_60px_rgba(19,116,187,0.25)] overflow-hidden"
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <div className="absolute inset-0 bg-black">
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover opacity-90"
                >
                  <source src="/services/mobile-app.mp4" type="video/mp4" />
                </video>
              </div>
              {/* Decorative "Interactive UI" circle from image */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-28 h-28 rounded-full border border-dashed border-white/10 flex items-center justify-center">
                  <span className="text-[10px] text-white/20 uppercase tracking-[0.2em] font-medium">
                    Interactive UI
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. WHY CHOOSE US (Trust Builder) */}
      <section className="w-full py-24 px-4 sm:px-6 bg-[#040A15]">
        <motion.div
          className="max-w-7xl mx-auto"
          variants={scrollContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div variants={scrollItem} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose Us
            </h2>
            <p className="text-[#8B95A5] max-w-2xl mx-auto">
              We combine industry expertise with cutting-edge technology to
              build apps that stand out in the crowded market.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Fast Delivery",
                desc: "Agile methodologies ensure rapid deployment without compromising on quality.",
                icon: (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                ),
              },
              {
                title: "Experienced Devs",
                desc: "Our team consists of vetted experts in modern mobile architectures.",
                icon: (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                  />
                ),
              },
              {
                title: "Scalable Solutions",
                desc: "Built to grow. We engineer architectures that handle millions of users.",
                icon: (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
                  />
                ),
              },
              {
                title: "Dedicated Support",
                desc: "24/7 maintenance and monitoring to keep your app running flawlessly.",
                icon: (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                ),
              },
            ].map((feature, idx) => (
              <motion.div
                key={idx}
                variants={scrollItem}
                className="bg-[#091122] border border-gray-800/60 hover:border-[#1374BB]/50 transition-colors duration-300 p-8 rounded-2xl flex flex-col items-start"
              >
                <div className="w-12 h-12 bg-[#1374BB]/10 rounded-xl flex items-center justify-center text-[#1374BB] mb-6">
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
                <p className="text-[#8B95A5] text-sm leading-relaxed">
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* 3. PROCESS (Very Important) */}
      <section className="w-full py-24 px-4 sm:px-6 bg-[#091122]/50 border-y border-gray-800/40">
        <motion.div
          className="max-w-7xl mx-auto"
          variants={scrollContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div variants={scrollItem} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Development Process
            </h2>
            <p className="text-[#8B95A5] max-w-2xl mx-auto">
              A transparent, step-by-step approach ensuring your vision
              translates perfectly into reality.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            {/* Desktop connecting line */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-[1px] bg-gray-800/60 -translate-y-1/2 z-0"></div>

            {[
              {
                step: "01",
                title: "Strategy & Planning",
                desc: "Defining goals, user personas, and core technical requirements.",
              },
              {
                step: "02",
                title: "Design & Development",
                desc: "Crafting intuitive UIs and writing clean, scalable code.",
              },
              {
                step: "03",
                title: "Testing & Launch",
                desc: "Rigorous QA testing followed by a seamless app store deployment.",
              },
              {
                step: "04",
                title: "Support & Scaling",
                desc: "Continuous monitoring, updates, and scaling infrastructure.",
              },
            ].map((process, idx) => (
              <motion.div
                key={idx}
                variants={scrollItem}
                className="relative z-10 flex flex-col items-center text-center"
              >
                <div className="w-16 h-16 rounded-full bg-[#040A15] border-2 border-[#1374BB] text-[#1374BB] flex items-center justify-center text-xl font-black mb-6 shadow-[0_0_20px_rgba(19,116,187,0.2)]">
                  {process.step}
                </div>
                <h3 className="text-xl font-bold mb-3">{process.title}</h3>
                <p className="text-[#8B95A5] text-sm leading-relaxed">
                  {process.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* 4. BENEFITS / RESULTS SECTION */}
      <section className="w-full py-20 px-4 sm:px-6 bg-[#040A15]">
        <motion.div
          className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12"
          variants={scrollContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Left: Graphic/Image placeholder or abstract visual */}
          <motion.div variants={scrollItem} className="flex-1 w-full relative">
            <div className="aspect-square w-full max-w-md mx-auto rounded-3xl bg-gradient-to-br from-[#1374BB]/20 to-transparent border border-[#1374BB]/30 flex items-center justify-center p-8 relative overflow-hidden">
              {/* Abstract decorative circles */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#1374BB]/20 rounded-full blur-3xl"></div>
              <div className="relative z-10 grid grid-cols-2 gap-4 w-full h-full">
                <div className="bg-[#091122] rounded-2xl border border-gray-800/60 shadow-xl flex items-center justify-center flex-col p-4">
                  <span className="text-3xl font-black text-white">200%</span>
                  <span className="text-xs text-[#8B95A5] mt-1 text-center">
                    Engagement Growth
                  </span>
                </div>
                <div className="bg-[#091122] rounded-2xl border border-gray-800/60 shadow-xl flex items-center justify-center mt-8 mb-[-2rem]">
                  <svg
                    className="w-12 h-12 text-[#1374BB]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                    />
                  </svg>
                </div>
                <div className="bg-[#091122] rounded-2xl border border-gray-800/60 shadow-xl flex items-center justify-center mt-[-2rem] mb-8">
                  <svg
                    className="w-12 h-12 text-[#1374BB]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    />
                  </svg>
                </div>
                <div className="bg-[#091122] rounded-2xl border border-gray-800/60 shadow-xl flex items-center justify-center flex-col p-4">
                  <span className="text-3xl font-black text-white">99.9%</span>
                  <span className="text-xs text-[#8B95A5] mt-1 text-center">
                    Uptime SLA
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Benefits List */}
          <motion.div variants={scrollContainer} className="flex-1">
            <motion.h2
              variants={scrollItem}
              className="text-3xl md:text-4xl font-bold mb-6"
            >
              Apps Built for{" "}
              <span className="text-[#1374BB]">Bottom-Line Results</span>
            </motion.h2>
            <motion.p
              variants={scrollItem}
              className="text-[#8B95A5] mb-8 text-lg"
            >
              We don&apos;t just write code; we solve business problems. Our
              mobile solutions are engineered to deliver measurable impact.
            </motion.p>

            <div className="space-y-6">
              {[
                {
                  title: "Increase User Engagement",
                  desc: "Intuitive UX/UI design that keeps users coming back.",
                },
                {
                  title: "Faster Performance",
                  desc: "Optimized codebases for lightning-fast load times.",
                },
                {
                  title: "Secure & Scalable",
                  desc: "Enterprise-grade security protocols and cloud infrastructure.",
                },
                {
                  title: "Better ROI",
                  desc: "Cost-effective development cycles without quality trade-offs.",
                },
              ].map((benefit, idx) => (
                <motion.div
                  key={idx}
                  variants={scrollItem}
                  className="flex items-start gap-4"
                >
                  <div className="mt-1 bg-[#1374BB]/20 p-1.5 rounded-full text-[#1374BB]">
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

      {/* 5. FINAL CTA SECTION */}
      <section className="w-full py-24 px-4 sm:px-6">
        <motion.div
          className="max-w-5xl mx-auto bg-[#091122] rounded-[2rem] border border-[#1374BB]/30 p-10 md:p-16 text-center relative overflow-hidden"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
        >
          {/* Background Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-[600px] bg-[#1374BB]/10 rounded-full blur-[80px] pointer-events-none"></div>

          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight">
              Ready to build your app?
            </h2>
            <p className="text-[#8B95A5] text-lg mb-10 max-w-2xl mx-auto">
              Let&apos;s discuss your project requirements and see how we can
              turn your vision into a high-performing mobile application.
            </p>
            <Link href="/contact">
              <button className="bg-[#1374BB] hover:bg-[#0e5f99] text-white font-bold text-lg py-4 px-10 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-[0_0_20px_rgba(19,116,187,0.4)]">
                Contact Us Today
              </button>
            </Link>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
