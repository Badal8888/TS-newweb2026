import TechStackCards from "@/components/TechStackMarquee";
import GoogleReviews from "@/components/GoogleReviews";
import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";
import {
  FaSearch,
  FaClipboardList,
  FaCode,
  FaBug,
  FaRocket,
  FaLaptopCode,
  FaMobileAlt,
  FaBullhorn,
  FaServer,
} from "react-icons/fa";

export const metadata = {
  title:
    "TechStrota - Software Development Company in Vadodara | Web & App Experts",
  description:
    "TechStrota is a leading software development company in Vadodara, Gujarat offering web development, mobile apps, SaaS platforms and custom software solutions.",
  keywords: [
    "TechStrota",
    "software company Vadodara",
    "web development Gujarat",
    "mobile app development India",
    "SaaS development",
    "React Next.js company",
    "Laravel development",
  ],
};

export default function About() {
  return (
    <main className="bg-[#030712] text-white font-sans">
      {/* HERO */}
      <section className="text-center py-24 px-6 border-b border-white/10">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          About TechStrota
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto">
          TechStrota is a leading software development company in Vadodara,
          Gujarat helping startups and businesses build scalable digital
          products and SaaS platforms.
        </p>
      </section>

      {/* WHO WE ARE */}
      <section className="py-20 px-6 max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Who We Are</h2>
        <p className="text-gray-400 max-w-3xl mx-auto mb-12">
          Founded in 2021, TechStrota is a modern IT company focused on
          delivering high-quality web, mobile and custom software solutions. We
          help businesses grow with scalable and secure technology.
        </p>

        <div className="grid md:grid-cols-4 gap-6">
          {[
            {
              title: "Established",
              desc: "Building digital products since 2021",
            },
            {
              title: "Mission",
              desc: "Simplifying complex technology",
            },
            {
              title: "Growth",
              desc: "From freelance to full agency",
            },
            {
              title: "Values",
              desc: "Innovation & transparency",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-[#0F172A] p-6 rounded-xl border border-gray-800"
            >
              <h3 className="font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-400 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <GoogleReviews />

      {/* SERVICES */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-10 text-center">What We Do</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              icon: FaLaptopCode,
              title: "Web Development",
              desc: "Modern websites using React & Next.js",
            },
            {
              icon: FaMobileAlt,
              title: "Mobile Apps",
              desc: "Android apps with high performance",
            },
            {
              icon: FaCode,
              title: "Custom Software",
              desc: "Business automation solutions",
            },
            {
              icon: FaSearch,
              title: "SEO Optimization",
              desc: "Improve ranking & traffic",
            },
            {
              icon: FaBullhorn,
              title: "Marketing",
              desc: "Social media growth strategies",
            },
            {
              icon: FaServer,
              title: "Hosting",
              desc: "Fast & secure hosting solutions",
            },
          ].map((service, i) => (
            <div
              key={i}
              className="bg-[#0F172A] p-6 rounded-xl border border-gray-800"
            >
              <service.icon className="text-3xl mb-4 text-cyan-400" />
              <h3 className="font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-400 text-sm">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TEAM */}
      <section className="py-20 px-6 max-w-6xl mx-auto text-center border-t border-white/10">
        <h2 className="text-3xl font-bold mb-10">Our Team</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              name: "Chirag Kanani",
              role: "Founder & CEO",
            },
            {
              name: "Badal Jamod",
              role: "Founder & CTO",
            },
            {
              name: "Vidhi Patel",
              role: "Senior Developer",
            },
          ].map((member, i) => (
            <div
              key={i}
              className="bg-[#0F172A] p-6 rounded-xl border border-gray-800"
            >
              <h3 className="text-lg font-semibold">{member.name}</h3>
              <p className="text-cyan-400 text-sm mb-4">{member.role}</p>

              <div className="flex justify-center gap-4">
                <FaLinkedin />
                <FaInstagram />
                <FaGithub />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-20 px-6 max-w-6xl mx-auto border-t border-white/10">
        <h2 className="text-3xl font-bold mb-10 text-center">
          Development Process
        </h2>

        <div className="grid md:grid-cols-5 gap-6 text-center">
          {[
            { icon: FaSearch, title: "Discovery" },
            { icon: FaClipboardList, title: "Planning" },
            { icon: FaCode, title: "Development" },
            { icon: FaBug, title: "Testing" },
            { icon: FaRocket, title: "Launch" },
          ].map((step, i) => (
            <div key={i}>
              <step.icon className="text-3xl mx-auto mb-3 text-cyan-400" />
              <p className="text-gray-300">{step.title}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TECH STACK */}
      <div className="py-10 border-t border-white/10">
        <TechStackCards />
      </div>

      {/* SEO TEXT (Hidden but useful) */}
      <section className="hidden">
        <h2>Software Development Company in Vadodara</h2>
        <p>
          TechStrota provides web development, mobile app development, SaaS
          platforms and custom software solutions in Gujarat, India.
        </p>
      </section>
    </main>
  );
}
