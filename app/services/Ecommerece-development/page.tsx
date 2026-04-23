"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function HeroSection() {
  const processSteps = [
    {
      title: "Requirement Gathering",
      description:
        "We understand your business model, products, and goals to build the right eCommerce solution.",
    },
    {
      title: "UI/UX Planning",
      description:
        "We design a smooth and user-friendly shopping experience for better conversions.",
    },
    {
      title: "Development",
      description:
        "We develop fast, secure, and scalable eCommerce websites using modern technologies.",
    },
    {
      title: "Payment Integration",
      description:
        "We integrate Razorpay, Stripe, PayPal and other secure payment gateways.",
    },
    {
      title: "Testing",
      description:
        "We test performance, responsiveness, and checkout flow before launch.",
    },
    {
      title: "Launch & Support",
      description:
        "We launch your website and provide ongoing support and maintenance.",
    },
  ];

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const features = [
    "Custom eCommerce design",
    "Mobile responsive store",
    "SEO-friendly pages",
    "Shopping cart & checkout",
    "Secure payment gateways",
    "Inventory management",
    "Shipping setup",
    "Admin dashboard",
  ];

  return (
    <main className="bg-transparent text-white overflow-x-hidden">
      {/* --- HERO SECTION --- */}
      <section className="py-6 md:py-10 px-4 sm:px-6 flex justify-center">
        <div className="w-full max-w-6xl flex flex-col-reverse md:flex-row items-center gap-8">
          {/* LEFT SIDE - CONTENT */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-5xl font-extrabold text-white mb-4 leading-tight tracking-tight">
              Best IT Company in Vadodara for <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                E-commerce Development
              </span>
            </h1>

            <p className="hidden sm:block text-gray-300 text-base md:text-lg max-w-xl md:max-w-none">
              TechStrota provides professional eCommerce website development
              services in Vadodara, Gujarat.
            </p>

            {/* Mobile-only subtext */}
            <p className="sm:hidden text-gray-400 mt-4 text-sm">
              TechStrota provides professional eCommerce website development
              services in Vadodara, Gujarat.
            </p>
            <motion.div
              variants={itemVariants}
              className="flex gap-4 flex-col sm:flex-row md:justify-start justify-center items-center mt-5"
            >
              <Link href="/contact" className="w-full sm:w-auto">
                <button className="bg-[#1374BB] hover:bg-[#0e5f99] text-white font-bold py-3 px-8 rounded-xl transition-colors w-full sm:w-auto shadow-[0_0_15px_rgba(19,116,187,0.2)]">
                  Inquire Now
                </button>
              </Link>

              <Link href="/portfolio" className="w-full sm:w-auto">
                <button className="border-2 border-[#1374BB]/20 hover:border-[#1374BB] text-[#1374BB] font-bold py-3 px-8 rounded-xl transition-colors w-full sm:w-auto">
                  View Portfolio
                </button>
              </Link>
            </motion.div>
          </div>

          {/* RIGHT SIDE - VIDEO */}
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
                <source src="/services/E-commerce.mp4" type="video/mp4" />
              </video>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- PROCESS SECTION --- */}
      <section className="px-4 sm:px-6 py-12 md:py-20 flex justify-center">
        <div className="max-w-6xl w-full">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Our Development Process
            </h2>
            <div className="h-1.5 w-20 bg-blue-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {processSteps.map((step, i) => (
              <div
                key={i}
                className="group relative rounded-2xl p-6 md:p-8 transition-all duration-500 bg-white/[0.03] backdrop-blur-md border border-white/10 hover:-translate-y-2 hover:bg-white/[0.07] hover:border-blue-500/40"
              >
                <div className="absolute inset-0 rounded-2xl bg-blue-500/5 opacity-0 group-hover:opacity-100 blur-xl transition duration-500" />
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-blue-600/20 border border-blue-500/30 text-blue-400 flex items-center justify-center font-bold mb-5 transition-transform group-hover:scale-110">
                    {i + 1}
                  </div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-blue-400 transition-colors uppercase tracking-wide">
                    {step.title}
                  </h3>
                  <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- FEATURES & WHY US --- */}
      <section className="px-4 sm:px-6 py-12 md:py-20 flex justify-center">
        <div className="max-w-6xl w-full grid lg:grid-cols-2 gap-8 md:gap-12">
          {/* FEATURES */}
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.02] backdrop-blur-xl p-6 md:p-10 shadow-2xl">
            <h2 className="text-2xl md:text-4xl font-bold mb-8 flex items-center gap-3">
              <span className="w-2 h-8 bg-blue-500 rounded-full"></span>
              eCommerce Features
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
              {features.map((item, i) => (
                <div
                  key={i}
                  className="px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-gray-300 text-sm md:text-base transition-all duration-300 hover:border-blue-400/50 hover:bg-blue-500/5 hover:translate-x-2"
                >
                  <span className="text-blue-400 mr-2">✦</span> {item}
                </div>
              ))}
            </div>
          </div>

          {/* WHY TECHSTROTA */}
          <div className="group relative rounded-[2rem] border border-white/10 bg-white/[0.02] backdrop-blur-xl p-6 md:p-10 shadow-2xl transition-all duration-500 overflow-hidden">
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-blue-500/10 blur-[80px] rounded-full"></div>

            <div className="relative z-10 text-center lg:text-left">
              <div className="flex justify-center lg:justify-start mb-8">
                <Image
                  src="/logo.png"
                  alt="TechStrota Vadodara IT Company"
                  width={200}
                  height={80}
                  className="w-auto h-12 md:h-16 drop-shadow-[0_0_10px_rgba(59,130,246,0.3)]"
                />
              </div>

              <h2 className="text-2xl md:text-4xl font-bold mb-6">
                Why Choose TechStrota
              </h2>

              <div className="space-y-4 text-gray-300 text-base md:text-lg leading-relaxed mb-10">
                <p>
                  TechStrota is a premier{" "}
                  <Link
                    href="/"
                    className="text-blue-400 hover:underline decoration-blue-400/30"
                  >
                    IT company in Vadodara
                  </Link>{" "}
                  setting new standards in digital commerce.
                </p>
                <p>
                  We focus on high-conversion{" "}
                  <Link
                    href="/services/ecommerce"
                    className="text-blue-400 hover:underline"
                  >
                    eCommerce development
                  </Link>{" "}
                  and scalable{" "}
                  <Link
                    href="/services/web-development"
                    className="text-blue-400 hover:underline"
                  >
                    web architecture
                  </Link>
                  .
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link
                  href="/contact"
                  className="px-8 py-3 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl transition-all active:scale-95 text-center shadow-lg shadow-blue-600/20"
                >
                  Get Started
                </Link>
                <Link
                  href="/portfolio"
                  className="px-8 py-3 border border-white/10 bg-white/5 hover:bg-white/10 rounded-xl text-white font-bold transition-all text-center backdrop-blur-md"
                >
                  Our Work
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- FINAL CTA / FOOTER INFO --- */}
      <section className="px-4 sm:px-6 pb-20 flex justify-center">
        <div className="max-w-5xl w-full relative">
          <div className="bg-gradient-to-b from-white/[0.05] to-transparent backdrop-blur-2xl border border-white/10 rounded-[2rem] md:rounded-[3rem] p-8 md:p-16 text-center shadow-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] mb-6">
              <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
              Gujarat&apos;s Leading Tech Partner
            </div>

            <h2 className="text-2xl md:text-5xl font-extrabold mb-6 leading-tight">
              Ready to scale your <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                Digital Storefront?
              </span>
            </h2>

            <p className="text-gray-400 text-sm md:text-xl leading-relaxed max-w-2xl mx-auto mb-12">
              From <span className="text-white">UI/UX</span> to{" "}
              <span className="text-white">Secure Payments</span>, we handle the
              tech so you can focus on the business.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 pt-8 border-t border-white/5">
              {[
                { val: "100%", lab: "Secure" },
                { val: "24/7", lab: "Support" },
                { val: "Fast", lab: "Optimized" },
                { val: "SEO", lab: "Ready" },
              ].map((stat, s) => (
                <div key={s} className="group">
                  <div className="text-white font-bold text-lg md:text-2xl group-hover:text-blue-400 transition-colors">
                    {stat.val}
                  </div>
                  <div className="text-gray-500 text-[10px] md:text-xs uppercase tracking-widest mt-1">
                    {stat.lab}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
