"use client";
import { motion } from "framer-motion";

const languages = [
  "React",
  "Next.js",
  "Laravel",
  "Tailwind",
  "Node.js",
  "Python",
  "TypeScript",
  "SQL",
];

const Loader = () => {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-[#0a0f1a] overflow-hidden">
      {/* The "Solar System" Container */}
      <div className="relative w-[300px] h-[300px] flex items-center justify-center">
        {/* 1. The Center "Sun" (TS Logo) */}
        <motion.div
          animate={{
            boxShadow: [
              "0 0 20px #1F6FEB",
              "0 0 40px #1F6FEB",
              "0 0 20px #1F6FEB",
            ],
          }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="z-50 w-24 h-24 bg-[#1F6FEB] rounded-2xl flex items-center justify-center border border-white/20 shadow-lg"
        >
          <span className="text-white font-black text-4xl tracking-tighter">
            TS
          </span>
        </motion.div>

        {/* 2. The Orbiting Ring */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
          className="absolute inset-0 border border-dashed border-blue-500/20 rounded-full"
        >
          {languages.map((lang, index) => {
            // Position icons around the circle
            const angle = (index / languages.length) * 360;
            return (
              <div
                key={lang}
                className="absolute top-1/2 left-1/2 -ml-8 -mt-4 w-16 text-center"
                style={{
                  transform: `rotate(${angle}deg) translate(150px) rotate(-${angle}deg)`,
                }}
              >
                {/* 3. The Language Label */}
                <motion.div
                  animate={{ rotate: -360 }} // Keeps text upright while ring rotates
                  transition={{
                    repeat: Infinity,
                    duration: 15,
                    ease: "linear",
                  }}
                  className="bg-[#0a0f1a]/80 backdrop-blur-md px-2 py-1 rounded-md border border-blue-500/30 text-[10px] font-bold text-blue-400 uppercase tracking-widest"
                >
                  {lang}
                </motion.div>
              </div>
            );
          })}
        </motion.div>

        {/* 4. Decorative Atmosphere Rings */}
        <div className="absolute w-[400px] h-[400px] border border-blue-500/5 rounded-full animate-pulse" />
      </div>
    </div>
  );
};

export default Loader;
