"use client";
import { motion } from "framer-motion";
import { JSX, useEffect, useState } from "react";
import Image from "next/image";
import { FaReact, FaNodeJs, FaPython, FaLaravel, FaAws } from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiMysql,
  SiFlutter,
  SiPhp,
  SiMongodb,
  SiFirebase,
  SiDocker,
  SiRedis,
  SiPostgresql,
} from "react-icons/si";

interface Technology {
  name: string;
  icon: JSX.Element;
  top?: string;
  bottom?: string;
  left?: string;
  right?: string;
  escapeX: number;
  escapeY: number;
}

const technologies: Technology[] = [
  {
    name: "React",
    icon: <FaReact className="text-[#61DAFB]" />,
    top: "8%",
    right: "12%",
    escapeX: 150,
    escapeY: -150,
  },
  {
    name: "Next.js",
    icon: <SiNextdotjs className="text-white" />,
    bottom: "8%",
    right: "10%",
    escapeX: 150,
    escapeY: 150,
  },
  {
    name: "Laravel",
    icon: <FaLaravel className="text-[#FF2D20]" />,
    top: "38%",
    right: "2%",
    escapeX: 180,
    escapeY: 0,
  },
  {
    name: "Tailwind",
    icon: <SiTailwindcss className="text-[#06B6D4]" />,
    bottom: "30%",
    left: "48%",
    escapeX: 0,
    escapeY: 180,
  },
  {
    name: "Node.js",
    icon: <FaNodeJs className="text-[#339933]" />,
    top: "8%",
    left: "10%",
    escapeX: -150,
    escapeY: -150,
  },
  {
    name: "Python",
    icon: <FaPython className="text-[#3776AB]" />,
    bottom: "42%",
    left: "6%",
    escapeX: -180,
    escapeY: 0,
  },
  {
    name: "TypeScript",
    icon: <SiTypescript className="text-[#3178C6]" />,
    top: "4%",
    left: "42%",
    escapeX: 0,
    escapeY: -180,
  },
  {
    name: "SQL",
    icon: <SiMysql className="text-[#4479A1]" />,
    bottom: "6%",
    left: "14%",
    escapeX: -150,
    escapeY: 150,
  },
  {
    name: "AWS",
    icon: <FaAws className="text-[#FF9900]" />,
    top: "20%",
    left: "2%",
    escapeX: -200,
    escapeY: -100,
  },
  {
    name: "Flutter",
    icon: <SiFlutter className="text-[#02569B]" />,
    top: "52%",
    right: "2%",
    escapeX: 200,
    escapeY: 50,
  },
  {
    name: "PHP",
    icon: <SiPhp className="text-[#777BB4]" />,
    bottom: "18%",
    right: "32%",
    escapeX: 120,
    escapeY: 120,
  },
  {
    name: "MongoDB",
    icon: <SiMongodb className="text-[#47A248]" />,
    top: "62%",
    left: "2%",
    escapeX: -180,
    escapeY: 80,
  },
  {
    name: "Firebase",
    icon: <SiFirebase className="text-[#FFCA28]" />,
    top: "2%",
    right: "38%",
    escapeX: 0,
    escapeY: -200,
  },
  {
    name: "Docker",
    icon: <SiDocker className="text-[#2496ED]" />,
    bottom: "2%",
    right: "42%",
    escapeX: 0,
    escapeY: 180,
  },
  {
    name: "Redis",
    icon: <SiRedis className="text-[#DC382D]" />,
    bottom: "38%",
    left: "1%",
    escapeX: -150,
    escapeY: 50,
  },
  {
    name: "PostgreSQL",
    icon: <SiPostgresql className="text-[#336791]" />,
    top: "28%",
    left: "30%",
    escapeX: -80,
    escapeY: -120,
  },
];

const Loader = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => (prev < 100 ? prev + 1 : 100));
    }, 30);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-[#020617] overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(10,15,26,0)_0%,#020617_100%)]" />
      <div className="absolute w-[600px] h-[600px] bg-yellow-500/5 blur-[120px] rounded-full animate-pulse" />

      <div className="relative w-full h-full max-w-6xl flex items-center justify-center">
        {/* LOGO */}
        <motion.div
          initial={{ rotate: -8, scale: 0.9 }}
          animate={{ rotate: -8, scale: 1 }}
          className="relative z-30 w-44 h-44 bg-[#0a1222] rounded-full flex flex-col items-center justify-center border-[6px] border-[#FFC933] shadow-[0_0_50px_rgba(255,201,51,0.4)] p-8"
        >
          <div className="relative w-full h-full">
            <Image
              src="/logo2.png"
              alt="Logo"
              fill
              className="object-contain"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-full pointer-events-none" />
        </motion.div>

        {/* TECHNOLOGIES */}
        {technologies.map((tech, index) => (
          <motion.div
            key={tech.name}
            className="absolute z-10"
            style={{
              top: tech.top,
              bottom: tech.bottom,
              left: tech.left,
              right: tech.right,
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              damping: 15,
              delay: index * 0.1,
            }}
          >
            <motion.div
              animate={{
                y: [0, -12, 0],
                scale: [1, 1.05, 1],
                rotate: [0, 5, -5, 0],
              }}
              transition={{
                duration: 4 + index * 0.2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              whileHover={{
                scale: 1.15,
                y: -20,
                boxShadow: "0 20px 40px rgba(255,201,51,0.2)",
              }}
              className="flex items-center justify-center w-16 h-16 bg-[#0a1220] border border-white/10 rounded-2xl shadow-2xl cursor-pointer group relative overflow-hidden"
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/10 to-transparent opacity-0 group-hover:opacity-100 transition" />

              <div className="text-3xl transition-transform group-hover:scale-110">
                {tech.icon}
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Loader;
