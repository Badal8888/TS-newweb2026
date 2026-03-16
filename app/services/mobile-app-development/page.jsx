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
            muted
            playsInline
            className="w-full h-auto object-cover"
          >
            <source src="/services/mobileapp.mp4" type="video/mp4" />
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
                Mobile-app Development Services
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
                className="text-gray-200 text-lg"
              >
                Mobile app development is the process of creating software
                applications that run on mobile devices, such as smartphones and
                tablets. It involves designing, coding, testing, and deploying
                apps for various platforms like iOS and Android. Mobile app
                development can be done using native languages (Swift for iOS,
                Java/Kotlin for Android) or cross-platform frameworks (React
                Native, Flutter) to create engaging and functional applications
                that meet user needs.
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
