"use client";

import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="py-5 px-6 bg-[#020b1f] flex justify-center">
      <div className="w-full max-w-6xl">
        {/* Video Container */}
        <div className="relative rounded-2xl overflow-hidden border border-blue-600/60 shadow-2xl">
          <video
            autoPlay
            loop
            playsInline
            controls
            className="w-full h-auto object-cover"
          >
            <source src="/services/SEO.mp4" type="video/mp4" />
          </video>

          {/* Desktop Overlay Text */}
          <div className="hidden md:flex absolute inset-0 bg-black/40 items-center justify-center text-center px-6">
            <div className="max-w-3xl">
              <motion.h1
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-5xl font-bold text-white mb-4"
              >
                SEO Services to Boost Your Online Visibility
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
                className="text-gray-200 text-lg"
              >
                Our SEO services are designed to enhance your online presence
                and drive organic traffic to your website. We specialize in
                optimizing your site for search engines, improving your
                rankings, and increasing your visibility to potential customers.
                From keyword research to on-page optimization and link building,
                we provide comprehensive SEO strategies that deliver measurable
                results. Let us help you achieve higher search engine rankings
                and grow your business online.
              </motion.p>
            </div>
          </div>
        </div>

        {/* Mobile Text Below Video */}
        <div className="md:hidden text-center mt-6 px-4">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-2xl font-bold text-white mb-3"
          >
            Social Media Marketing Services
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-gray-300 text-sm"
          >
            Grow your brand with powerful social media strategies on Facebook,
            Instagram, LinkedIn and Twitter.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
