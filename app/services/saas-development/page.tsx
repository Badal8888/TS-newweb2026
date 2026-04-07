"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function HeroSection() {
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

  return (
    <section className="min-h-[100dvh] lg:h-screen w-full pt-6 pb-12 px-4 sm:px-6 bg-[#040A15] flex items-start justify-center">
      <div className="w-full max-w-7xl flex flex-col lg:flex-row items-center justify-between gap-4">
        {/* LEFT CONTENT */}
        <motion.div
          className="flex-1 text-center lg:text-left"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Badge */}
          <motion.div variants={itemVariants} className="mb-4">
            <span className="inline-flex px-4 py-1.5 rounded-full border border-[#1374BB]/30 bg-[#1374BB]/5 text-[#1374BB] text-xs font-bold uppercase">
              Launch Your SaaS Platform
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-5 leading-[1.1]"
          >
            <span className="text-[#1374BB]">SaaS</span>
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
            Our SaaS development services empower businesses to build scalable,
            secure, and user-friendly software products. From idea to launch, we
            create custom SaaS solutions that drive growth and deliver seamless
            user experiences.
          </motion.p>

          {/* Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex gap-4 flex-col sm:flex-row"
          >
            <Link href="/contact">
              <button className="bg-[#1374BB] text-white font-bold py-3 px-8 rounded-xl">
                Inquire Now
              </button>
            </Link>

            <Link href="/portfolio">
              <button className="border-2 border-[#1374BB]/20 text-[#1374BB] font-bold py-3 px-8 rounded-xl">
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
        >
          <div className="rounded-2xl overflow-hidden border border-gray-800/60 bg-[#091122] aspect-video">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
            >
              <source src="/services/Saas.mp4" type="video/mp4" />
            </video>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
