"use client";

import {
  FaReact,
  FaNodeJs,
  FaBootstrap,
  FaGithub,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaPhp,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiLaravel,
  SiMysql,
  SiFirebase,
  SiPython,
  SiFlutter,
  SiC,
  SiCplusplus,
} from "react-icons/si";

const technologies = [
  {
    name: "React Development",
    icon: <FaReact />,
    color: "from-cyan-500 to-blue-700",
  },
  {
    name: "Next.js Development",
    icon: <SiNextdotjs />,
    color: "from-gray-700 to-black",
  },
  {
    name: "Laravel Development",
    icon: <SiLaravel />,
    color: "from-red-500 to-pink-600",
  },
  {
    name: "Node.js Backend",
    icon: <FaNodeJs />,
    color: "from-green-500 to-green-700",
  },

  {
    name: "PHP Development",
    icon: <FaPhp />,
    color: "from-indigo-500 to-purple-700",
  },
  {
    name: "Python Development",
    icon: <SiPython />,
    color: "from-blue-400 to-yellow-500",
  },
  {
    name: "HTML Web Design",
    icon: <FaHtml5 />,
    color: "from-orange-500 to-red-600",
  },
  {
    name: "CSS Styling",
    icon: <FaCss3Alt />,
    color: "from-blue-400 to-blue-700",
  },

  {
    name: "JavaScript Programming",
    icon: <FaJs />,
    color: "from-yellow-400 to-yellow-600",
  },
  { name: "C Programming", icon: <SiC />, color: "from-gray-500 to-gray-700" },
  {
    name: "C++ Programming",
    icon: <SiCplusplus />,
    color: "from-blue-600 to-blue-900",
  },
  {
    name: "Flutter Mobile Apps",
    icon: <SiFlutter />,
    color: "from-sky-400 to-blue-700",
  },

  {
    name: "MySQL Database",
    icon: <SiMysql />,
    color: "from-blue-500 to-indigo-700",
  },
  {
    name: "Firebase Backend",
    icon: <SiFirebase />,
    color: "from-yellow-400 to-orange-500",
  },
  {
    name: "Bootstrap UI",
    icon: <FaBootstrap />,
    color: "from-purple-600 to-indigo-700",
  },
  {
    name: "GitHub Version Control",
    icon: <FaGithub />,
    color: "from-gray-700 to-gray-900",
  },
];

export default function TechStackCards() {
  return (
    <section className="py-24 bg-[#0F172A] text-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* SEO Heading */}
        <h2 className="text-4xl font-bold mb-6 text-yellow-400">
          Technologies We Use for Web Development, SaaS & Mobile Apps
        </h2>

        {/* SEO Description */}
        <p className="text-gray-400 max-w-3xl mx-auto mb-16">
          TechStrota uses modern technologies like React, Next.js, Node.js,
          Laravel, Python, Flutter and MySQL to build scalable web applications,
          SaaS platforms and mobile applications for startups and enterprises.
        </p>

        {/* Technology Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-10 justify-items-center">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className={`group w-36 h-36 flex flex-col items-center justify-center rounded-3xl text-sm font-semibold bg-gradient-to-br ${tech.color}
              shadow-xl hover:scale-110 hover:shadow-2xl transition duration-300 cursor-pointer`}
            >
              {/* Icon */}
              <div className="text-4xl mb-3 group-hover:scale-125 transition">
                {tech.icon}
              </div>

              {/* Name */}
              <span className="text-center px-2">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
