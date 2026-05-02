import TechStackCards from "@/components/TechStackMarquee";
import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";
import {
  FaSearch,
  FaClipboardList,
  FaCode,
  FaBug,
  FaRocket,
} from "react-icons/fa";
import {
  FaLaptopCode,
  FaMobileAlt,
  FaBullhorn,
  FaServer,
} from "react-icons/fa";
import {
  FaReact,
  FaNodeJs,
  FaDocker,
  FaAws,
  FaPhp,
  FaPython,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiLaravel,
  SiMysql,
  SiFlutter,
  SiDotnet,
} from "react-icons/si";

export const metadata = {
  title: "About TechStrota | Software Development Company in Vadodara India",
  description:
    "TechStrota is a software development company in Vadodara, India specializing in SaaS development, web development, mobile apps and enterprise software solutions.",
  keywords: [
    "TechStrota",
    "software development company in Vadodara",
    "IT company in Vadodara",
    "SaaS development company",
    "web development company India",
    "mobile app development company",
    "React development company",
    "Next.js development company",
    "custom software development India",
  ],
};

export default function About() {
  return (
    <main className="bg-transparent text-white overflow-hidden selection:bg-cyan-500/30 font-sans">
      {/* --- HERO SECTION (High-Tech Mesh Glow) --- */}
      <section className="relative pt-10 pb-10 md:pt-14 md:pb-14 px-4 sm:px-6 flex flex-col items-center justify-center text-center border-b border-white/10 min-h-[80vh] overflow-hidden">
        {/* Background Dynamic Glows (Light effects ko /20 se /10 kar diya hai taaki video par zyada asar na ho) */}
        <div className="absolute top-0 left-1/4 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-fuchsia-600/10 blur-[100px] md:blur-[150px] rounded-full pointer-events-none z-10"></div>
        <div className="absolute bottom-0 right-1/4 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-cyan-600/10 blur-[100px] md:blur-[150px] rounded-full pointer-events-none z-10"></div>

        {/* Main Content (z-20 rakha hai taaki video ke upar rahe) */}
        <div className="relative z-20 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-cyan-400 text-xs md:text-sm font-semibold uppercase tracking-widest mb-8 backdrop-blur-md shadow-[0_0_20px_rgba(34,211,238,0.1)]">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
            About TechStrota
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-8xl font-extrabold tracking-tight mb-8">
            Empowering <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-blue-400 to-yellow-400 filter drop-shadow-lg">
              Tomorrow
            </span>
          </h1>

          <p className="text-lg font-bold md:text-2xl text-gray-200 leading-relaxed mb-6">
            Through Technology. We transform ideas into scalable digital
            solutions. We&apos;re more than just a tech company — we’re your
            innovation partner.
          </p>

          <p className="text-base md:text-lg text-gray-400 font-bold leading-relaxed max-w-3xl mx-auto bg-white/5 p-6 rounded-3xl border border-white/5 backdrop-blur-sm">
            <strong className="text-white">TechStrota</strong> is a modern
            <strong className="text-[#2AB4F4]">
              {" "}
              software development company in Vadodara, India{" "}
            </strong>
            helping startups and enterprises build scalable digital systems. Our
            expertise includes SaaS development, web development, mobile
            applications and enterprise software solutions using technologies
            like React, Next.js, Laravel and cloud platforms.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* --- WHO WE ARE (Modern Staggered Grid) --- */}
        <section className="relative z-10 py-10 md:py-14">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            <div className="lg:col-span-5 text-center lg:text-left">
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
                Who <span className="text-[#2AB4F4]">We Are</span>
              </h2>
              <p className="text-gray-400 leading-relaxed text-base md:text-lg mb-8">
                Founded with a vision to innovate and simplify technology,
                <span className="text-white font-semibold"> TechStrota </span>
                is a modern software development company based in Vadodara,
                Gujarat. We partner with startups and businesses to build
                scalable, secure and future-ready digital products that drive
                real growth.
              </p>
            </div>

            <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4 md:gap-6">
              {[
                {
                  icon: "🚀",
                  title: "Established",
                  desc: "Proudly building innovative digital solutions since 2021.",
                  glow: "group-hover:shadow-[0_0_30px_-5px_rgba(59,130,246,0.4)]",
                },
                {
                  icon: "🎯",
                  title: "Our Mission",
                  desc: "Simplifying complex digital challenges with smart technology.",
                  glow: "group-hover:shadow-[0_0_30px_-5px_rgba(168,85,247,0.4)]",
                },
                {
                  icon: "📈",
                  title: "Growth Journey",
                  desc: "From freelance beginnings to a trusted full-stack digital agency.",
                  glow: "group-hover:shadow-[0_0_30px_-5px_rgba(34,197,94,0.4)]",
                },
                {
                  icon: "❤️",
                  title: "Our Values",
                  desc: "Innovation, transparency and user-first product design.",
                  glow: "group-hover:shadow-[0_0_30px_-5px_rgba(236,72,153,0.4)]",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className={`group relative overflow-hidden p-6 rounded-3xl transition-all duration-500 
                    bg-white/[0.03] backdrop-blur-xl border border-amber-500/40 shadow-2xl
                    hover:bg-white/[0.07] hover:border-amber-500/60 hover:-translate-y-2
                    ${item.glow} ${idx % 2 !== 0 ? "sm:mt-12" : ""}`}
                >
                  <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center text-2xl mb-6 shadow-inner">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 text-md font-bold leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- MISSION & VISION SECTION (New Section) --- */}
        <section className="relative z-10 py-10 md:py-14 border-t border-white/10">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            {/* Mission Card */}
            <div className="group relative p-8 md:p-10 rounded-3xl bg-white/[0.03] backdrop-blur-xl border border-blue-400 hover:border-blue-500/60 transition-all duration-500 hover:-translate-y-2 shadow-2xl">
              <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                <FaRocket className="text-6xl text-blue-400" />
              </div>
              <h2 className="text-blue-400 text-sm font-bold uppercase tracking-[0.2em] mb-4">
                Our Mission
              </h2>
              <p className="text-2xl md:text-3xl font-bold text-white leading-tight italic">
                “To bridge ideas and technology through innovative, ethical, and
                user-centric solutions.”
              </p>
              <div className="mt-6 w-12 h-1 bg-gradient-to-r from-blue-500 to-transparent rounded-full"></div>
            </div>

            {/* Vision Card */}
            <div className="group relative p-8 md:p-10 rounded-3xl bg-white/[0.03] backdrop-blur-xl border border-blue-400 hover:border-blue-500/60 transition-all duration-500 hover:-translate-y-2 shadow-2xl">
              <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                <FaSearch className="text-6xl text-cyan-400" />
              </div>
              <h2 className="text-cyan-400 text-sm font-bold uppercase tracking-[0.2em] mb-4">
                Our Vision
              </h2>
              <p className="text-2xl md:text-3xl font-bold text-white leading-tight italic">
                “To become a global leader in providing smart, impactful, and
                sustainable tech services.”
              </p>
              <div className="mt-6 w-12 h-1 bg-gradient-to-r from-cyan-400 to-transparent rounded-full"></div>
            </div>
          </div>
        </section>

        {/* --- WHAT WE DO (Neon Border Cards) --- */}
        <section className="relative z-10 py-10 md:py-14 border-t border-white/10">
          <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">What We Do</h2>
            <p className="text-gray-400 text-lg md:text-lg">
              TechStrota provides modern technology services that help
              businesses build scalable digital platforms, increase online
              presence and improve operational efficiency.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: FaLaptopCode,
                color: "text-blue-400",
                borderColor: "border-blue-400/50",
                title: "Web Development",
                desc: "From simple websites to powerful digital platforms built with modern frameworks like React and Next.js.",
                colSpan: "",
              },
              {
                icon: FaCode,
                color: "text-fuchsia-400",
                borderColor: "border-fuchsia-400/50",
                title: "Software Development",
                desc: "Custom software solutions designed to automate workflows and improve business efficiency.",
                colSpan: "",
              },
              {
                icon: FaSearch,
                color: "text-cyan-400",
                borderColor: "border-cyan-400/50",
                title: "SEO Optimization",
                desc: "Improve search rankings, drive organic traffic and increase online visibility.",
                colSpan: "",
              },
              {
                icon: FaMobileAlt,
                color: "text-orange-400",
                borderColor: "border-orange-400/50",
                title: "Android Development",
                desc: "Scalable and high-performance mobile applications built for modern Android devices.",
                colSpan: "",
              },
              {
                icon: FaBullhorn,
                color: "text-pink-400",
                borderColor: "border-pink-400/50",
                title: "Social Media Marketing",
                desc: "Grow your brand and reach new audiences across social media platforms.",
                colSpan: "",
              },
              {
                icon: FaServer,
                color: "text-emerald-400",
                borderColor: "border-emerald-400/50",
                title: "Web Hosting",
                desc: "Fast, secure and reliable hosting solutions for modern websites and applications.",
                colSpan: "",
              },
            ].map((service, idx) => (
              <div
                key={idx}
                className={`p-6 md:p-8 rounded-3xl border transition-all duration-300 backdrop-blur-md
                bg-white/[0.02] border-yellow-500/30 shadow-[0_0_15px_3px_rgba(234,179,8,0.1)] 
                hover:bg-white/[0.06] hover:border-yellow-400/70 hover:shadow-[0_0_25px_5px_rgba(234,179,8,0.25)]
                ${service.colSpan || ""}`}
              >
                {/* Top hover line effect yaha se hata diya gaya hai */}

                <div
                  className={`w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <service.icon className={`${service.color} text-3xl`} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-400 text-md leading-relaxed">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </section>
        {/* --- OUR TEAM (Frosted Glass ID Cards) --- */}
        <section className="relative z-10 py-10 md:py-14 border-t border-white/10">
          <div className="text-center mb-16 md:mb-20">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Our Team</h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-base font-bold md:text-lg">
              The talented professionals behind TechStrota building scalable
              SaaS platforms, web applications and innovative digital solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {[
              {
                name: "Chirag Kanani",
                role: "Founder & CEO",
                edu: "B.Tech Computer Engineering",
                exp: "5+ Years Experience",
                skills: "SaaS, Web Apps, Logistics Systems",
                initials: "CK",
              },
              {
                name: "Badal Jamod",
                role: "Founder & CTO",
                edu: "B.Tech Computer Engineering",
                exp: "5+ Years Experience",
                skills: "SaaS, Web Apps, Logistics Systems",
                initials: "BJ",
              },
              {
                name: "Himanshu Dangar",
                role: "Manager",
                edu: "B.Tech Computer Engineering",
                exp: "5+ Years Experience",
                skills: "SaaS, Web Apps, Logistics Systems",
                initials: "HD",
              },
              {
                name: "Vidhi Patel",
                role: "Senior Full Stack Developer",
                edu: "M.Sc IT",
                exp: "2+ Years Experience",
                skills: "React, Laravel, Node.js",
                initials: "VP",
              },
              {
                name: "Krishna Patel",
                role: "Social Media Manager",
                edu: "BCA",
                exp: "2+ Years Experience",
                skills: "Instagram, LinkedIn, Content Creation",
                initials: "KP",
              },
              {
                name: "Dinesh Shah",
                role: "Fund Manager",
                edu: "BCA",
                exp: "2+ Years Experience",
                skills: "Financial Planning, Investment Analysis",
                initials: "DS",
              },
            ].map((member, idx) => (
              <div key={idx} className="relative mt-8">
                <div className="bg-white/5 backdrop-blur-lg border border-blue-400 rounded-3xl p-8 pt-12 text-center hover:bg-white/10 transition-colors duration-300">
                  {/* Floating Avatar */}
                  <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-20 h-20 bg-gradient-to-br from-cyan-500 to-blue-600 p-1 rounded-full shadow-xl">
                    <div className="w-full h-full bg-[#030712] rounded-full flex items-center justify-center border-2 border-[#030712]">
                      <span className="text-xl font-bold text-white">
                        {member.initials}
                      </span>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-1">
                    {member.name}
                  </h3>
                  <p className="text-cyan-400 text-sm font-semibold mb-6 tracking-wide uppercase">
                    {member.role}
                  </p>

                  <div className="space-y-2 text-md text-gray-400 mb-8 bg-black/20 p-4 rounded-2xl">
                    <p>🎓 {member.edu}</p>
                    <p>💼 {member.exp}</p>
                    <p className="truncate">⚙️ {member.skills}</p>
                  </div>

                  <div className="flex justify-center gap-4">
                    <a
                      href="https://linkedin.com"
                      target="_blank"
                      rel="noreferrer"
                      className="p-2 bg-white/5 rounded-full hover:bg-blue-500 hover:text-white text-gray-400 transition-all"
                    >
                      <FaLinkedin size={18} />
                    </a>
                    <a
                      href="https://instagram.com"
                      target="_blank"
                      rel="noreferrer"
                      className="p-2 bg-white/5 rounded-full hover:bg-pink-500 hover:text-white text-gray-400 transition-all"
                    >
                      <FaInstagram size={18} />
                    </a>
                    <a
                      href="https://github.com"
                      target="_blank"
                      rel="noreferrer"
                      className="p-2 bg-white/5 rounded-full hover:bg-white hover:text-black text-gray-400 transition-all"
                    >
                      <FaGithub size={18} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* --- WHY CHOOSE US (Masonry/Bento Variation) --- */}

        <section className="relative z-10 py-10 md:py-14 border-t border-white/10">
          <h2 className="text-3xl md:text-5xl font-bold mb-12 md:mb-16 text-center">
            Why Choose TechStrota
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {[
              {
                title: "Expert Developers",

                desc: "Our experienced team specializes in modern technologies like React, Next.js and Laravel to build scalable and secure digital platforms.",
              },

              {
                title: "Transparent Communication",

                desc: "We believe that great products are built through clear collaboration. Our team maintains open communication, regular updates, and transparent workflows, ensuring you stay informed and involved throughout the development process.",

                colSpan: "lg:col-span-2",
              },

              {
                title: "Responsive Design",

                desc: "We create digital experiences that look and perform great on all devices, ensuring your users have a seamless experience whether they’re on desktop, tablet or mobile.",
              },

              {
                title: "Custom Solutions",

                desc: "We don’t believe in one-size-fits-all solutions. Every project we take on is custom-built to meet the unique needs of your business, ensuring a perfect fit for your goals and challenges.",
              },

              {
                title: "Client-Centric Approach",

                desc: "Every business is unique, and so are its challenges. We carefully understand your goals and deliver custom software solutions designed around your business objectives, ensuring maximum value and long-term success.",
              },

              {
                title: "On-Time Delivery",

                desc: "We respect your time and business deadlines. Our structured development process and agile methodology help us deliver projects efficiently and on schedule without compromising quality.",

                colSpan: "md:col-span-2 lg:col-span-2",
              },

              {
                title: "Post-Launch Support",

                desc: "Our partnership doesn’t end after deployment. We provide continuous support, updates, and optimization to ensure your software remains secure, reliable, and ready to scale as your business grows.",
              },
            ].map((feature, idx) => (
              <div
                key={idx}
                className={`p-6 md:p-8 rounded-3xl border transition-all duration-300 backdrop-blur-md
                bg-white/[0.02] border-yellow-500/30 shadow-[0_0_15px_3px_rgba(234,179,8,0.1)] 
                hover:bg-white/[0.06] hover:border-yellow-400/70 hover:shadow-[0_0_25px_5px_rgba(234,179,8,0.25)]
                ${feature.colSpan || ""}`}
              >
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center mb-5 text-white font-bold shadow-lg">
                  {idx + 1}
                </div>

                <h3 className="text-xl font-bold text-white mb-3">
                  {feature.title}
                </h3>

                <p className="text-gray-400 text-sm leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* --- DEVELOPMENT PROCESS (Connected Path) --- */}
        <section className="py-10 md:py-14 border-t border-white/10 relative overflow-hidden">
          <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center">
            Our Development Process
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 md:gap-4 relative px-4 z-10">
            {/* Background Line */}
            <div className="hidden lg:block absolute top-12 left-10 right-10 h-[2px] bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent -z-10"></div>

            {[
              {
                icon: FaSearch,
                title: "Discovery",
                desc: "Understanding your business goals and project requirements.",
              },
              {
                icon: FaClipboardList,
                title: "Planning",
                desc: "Designing system architecture and development roadmap.",
              },
              {
                icon: FaCode,
                title: "Development",
                desc: "Building scalable applications using modern technologies.",
              },
              {
                icon: FaBug,
                title: "Testing",
                desc: "Ensuring security, performance and reliability.",
              },
              {
                icon: FaRocket,
                title: "Launch",
                desc: "Deployment with continuous support and optimization.",
              },
            ].map((step, idx) => (
              <div
                key={idx}
                // MODIFIED: Added bg-white/[0.03], backdrop-blur-md, and updated border
                className="relative bg-white/[0.03] backdrop-blur-md p-6 md:p-8 rounded-3xl border border-blue-400 text-center group hover:-translate-y-2 hover:border-blue-500/60 hover:shadow-[0_10px_30px_-10px_rgba(34,211,238,0.3)] transition-all duration-500 overflow-hidden"
              >
                {/* Background Watermark Numbers */}
                <div className="absolute -bottom-4 -right-2 text-8xl font-black text-white/[0.02] group-hover:text-cyan-500/[0.05] transition-colors duration-500 pointer-events-none select-none">
                  0{idx + 1}
                </div>

                {/* Icon Container */}
                <div className="relative w-16 h-16 mx-auto bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center mb-6 text-gray-400 group-hover:text-cyan-400 group-hover:bg-cyan-500/10 group-hover:border-cyan-500/40 transition-all duration-500 group-hover:scale-110 shadow-lg">
                  <step.icon className="text-2xl transition-transform duration-700 group-hover:rotate-[360deg]" />
                </div>

                {/* Text */}
                <h3 className="relative text-lg font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors duration-300">
                  {step.title}
                </h3>
                <p className="relative text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* TechStackMarquee Section */}
      <div className="py-12 bg-white/[0.02] border-y border-white/10">
        <TechStackCards />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* --- INDUSTRIES WE SERVE (Dynamic Reveal Cards) --- */}
        <section className="py-14 md:py-20">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Industries We Serve
            </h2>
            <p className="text-gray-400 text-lg font-bold max-w-2xl mx-auto">
              We deliver innovative digital solutions across multiple
              industries, helping businesses modernize, scale and stay
              competitive.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {[
              {
                img: "/industries/logistics.jpg",
                title: "Logistics",
                desc: "Fleet management systems, transport bidding platforms and automation.",
              },
              {
                img: "/industries/SaaS.jpeg",
                title: "Startups & SaaS",
                desc: "Scalable SaaS platforms, dashboards and cloud-based applications.",
              },
              {
                img: "/industries/E-commerce.jpEg",
                title: "E-Commerce",
                desc: "Online stores, payment integrations and scalable ecommerce systems.",
              },
              {
                img: "/industries/Clothing.jpeg",
                title: "Fashion Brands",
                desc: "Digital storefronts, inventory systems and brand management tools.",
              },
              {
                img: "/industries/realestate.jpeg",
                title: "Real Estate",
                desc: "Property management platforms and construction workflow systems.",
              },
              {
                img: "/industries/InsuranceFintech.jpeg",
                title: "Fintech",
                desc: "Secure financial applications, dashboards and fintech automation.",
              },
              {
                img: "/industries/education.jpeg",
                title: "Education",
                desc: "Learning management systems and digital education platforms.",
              },
              {
                img: "/industries/business.jpeg",
                title: "Automation",
                desc: "CRM, ERP and custom automation systems for businesses.",
              },
            ].map((industry, idx) => (
              <div
                key={idx}
                className="group relative h-64 md:h-80 rounded-3xl overflow-hidden cursor-pointer shadow-lg bg-gray-900"
              >
                <img
                  src={industry.img}
                  alt={industry.title}
                  className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-30 group-hover:scale-110 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-80 group-hover:opacity-100 transition-opacity"></div>

                <div className="absolute inset-0 p-6 flex flex-col justify-end transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                    {industry.title}
                  </h3>
                  <div className="w-8 h-1 bg-cyan-400 mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100 rounded-full"></div>
                  <p className="text-gray-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-200 line-clamp-3">
                    {industry.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
