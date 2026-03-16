import TechStackCards from "@/components/TechStackMarquee";
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
    <main className="py-24 bg-[#020617] text-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* H1 */}
        <h1 className="text-5xl font-bold mb-10">
          About TechStrota – Software Development Company
        </h1>
        <p className="text-gray-400 text-lg mb-16 leading-relaxed">
          <strong>TechStrota</strong> is a modern
          <strong> software development company in Vadodara, India</strong>
          helping startups and enterprises build scalable digital systems. Our
          expertise includes SaaS development, web development, mobile
          applications and enterprise software solutions using technologies like
          React, Next.js, Laravel and cloud platforms.
        </p>
        <section className="relative py-32 text-center overflow-hidden bg-gradient-to-r from-[#1e6f8c] to-[#2e3fa3]">
          {/* background glow */}
          <div className="absolute inset-0 opacity-20 blur-3xl bg-gradient-to-r from-cyan-400 to-blue-500"></div>

          <div className="relative max-w-4xl mx-auto px-6">
            <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
              Empowering Tomorrow
              <br />
              Through Technology
            </h1>

            <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
              At <span className="font-semibold text-white">TechStrota</span>,
              we transform ideas into scalable digital solutions. We're more
              than just a tech company — we’re your innovation partner.
            </p>
          </div>
        </section>
        {/* WHO WE ARE */}
        <section className="mb-24 mt-10">
          <div className="max-w-6xl mx-auto">
            {/* Title */}
            <h2 className="text-4xl font-bold mb-6 text-center">Who We Are</h2>

            {/* Description */}
            <p className="text-gray-400 text-center max-w-3xl mx-auto leading-relaxed mb-14">
              Founded with a vision to innovate and simplify technology,
              <span className="text-white font-semibold"> TechStrota </span>
              is a modern software development company based in Vadodara,
              Gujarat. We partner with startups and businesses to build
              scalable, secure and future-ready digital products that drive real
              growth.
            </p>

            {/* Cards */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="group bg-[#0F172A] p-7 rounded-2xl border border-gray-800 hover:border-blue-500 transition-all duration-300 hover:-translate-y-1">
                <div className="text-3xl mb-4">🚀</div>
                <h3 className="text-lg font-semibold mb-2">Established</h3>
                <p className="text-gray-400 text-sm">
                  Proudly building innovative digital solutions since 2021.
                </p>
              </div>

              <div className="group bg-[#0F172A] p-7 rounded-2xl border border-gray-800 hover:border-purple-500 transition-all duration-300 hover:-translate-y-1">
                <div className="text-3xl mb-4">🎯</div>
                <h3 className="text-lg font-semibold mb-2">Our Mission</h3>
                <p className="text-gray-400 text-sm">
                  Simplifying complex digital challenges with smart technology.
                </p>
              </div>

              <div className="group bg-[#0F172A] p-7 rounded-2xl border border-gray-800 hover:border-green-500 transition-all duration-300 hover:-translate-y-1">
                <div className="text-3xl mb-4">📈</div>
                <h3 className="text-lg font-semibold mb-2">Growth Journey</h3>
                <p className="text-gray-400 text-sm">
                  From freelance beginnings to a trusted full-stack digital
                  agency.
                </p>
              </div>

              <div className="group bg-[#0F172A] p-7 rounded-2xl border border-gray-800 hover:border-pink-500 transition-all duration-300 hover:-translate-y-1">
                <div className="text-3xl mb-4">❤️</div>
                <h3 className="text-lg font-semibold mb-2">Our Values</h3>
                <p className="text-gray-400 text-sm">
                  Innovation, transparency and user-first product design.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* WHAT WE DO */}

        <section className="mb-24">
          <h2 className="text-3xl font-bold mb-8">What We Do</h2>

          <p className="text-gray-400 mb-12 max-w-3xl">
            TechStrota provides modern technology services that help businesses
            build scalable digital platforms, increase online presence and
            improve operational efficiency.
          </p>

          <div className="grid md:grid-cols-3 lg:grid-cols-3 gap-8">
            {/* Web Development */}
            <div className="flex bg-[#0F172A] rounded-xl border border-gray-800 hover:border-blue-500 transition overflow-hidden">
              <div className="w-20 flex items-center justify-center bg-blue-500/10">
                <FaLaptopCode className="text-blue-400 text-4xl" />
              </div>

              <div className="p-6">
                <h3 className="text-lg font-semibold text-blue-400 mb-2">
                  Web Development
                </h3>
                <p className="text-gray-400 text-sm">
                  From simple websites to powerful digital platforms built with
                  modern frameworks like React and Next.js.
                </p>
              </div>
            </div>

            {/* Software Development */}
            <div className="flex bg-[#0F172A] rounded-xl border border-gray-800 hover:border-purple-500 transition overflow-hidden">
              <div className="w-20 flex items-center justify-center bg-purple-500/10">
                <FaCode className="text-purple-400 text-4xl" />
              </div>

              <div className="p-6">
                <h3 className="text-lg font-semibold text-purple-400 mb-2">
                  Software Development
                </h3>
                <p className="text-gray-400 text-sm">
                  Custom software solutions designed to automate workflows and
                  improve business efficiency.
                </p>
              </div>
            </div>

            {/* SEO */}
            <div className="flex bg-[#0F172A] rounded-xl border border-gray-800 hover:border-green-500 transition overflow-hidden">
              <div className="w-20 flex items-center justify-center bg-green-500/10">
                <FaSearch className="text-green-400 text-4xl" />
              </div>

              <div className="p-6">
                <h3 className="text-lg font-semibold text-green-400 mb-2">
                  SEO Optimization
                </h3>
                <p className="text-gray-400 text-sm">
                  Improve search rankings, drive organic traffic and increase
                  online visibility.
                </p>
              </div>
            </div>

            {/* Android */}
            <div className="flex bg-[#0F172A] rounded-xl border border-gray-800 hover:border-orange-500 transition overflow-hidden">
              <div className="w-20 flex items-center justify-center bg-orange-500/10">
                <FaMobileAlt className="text-orange-400 text-4xl" />
              </div>

              <div className="p-6">
                <h3 className="text-lg font-semibold text-orange-400 mb-2">
                  Android Development
                </h3>
                <p className="text-gray-400 text-sm">
                  Scalable and high-performance mobile applications built for
                  modern Android devices.
                </p>
              </div>
            </div>

            {/* Marketing */}
            <div className="flex bg-[#0F172A] rounded-xl border border-gray-800 hover:border-pink-500 transition overflow-hidden">
              <div className="w-20 flex items-center justify-center bg-pink-500/10">
                <FaBullhorn className="text-pink-400 text-4xl" />
              </div>

              <div className="p-6">
                <h3 className="text-lg font-semibold text-pink-400 mb-2">
                  Social Media Marketing
                </h3>
                <p className="text-gray-400 text-sm">
                  Grow your brand and reach new audiences across social media
                  platforms.
                </p>
              </div>
            </div>

            {/* Hosting */}
            <div className="flex bg-[#0F172A] rounded-xl border border-gray-800 hover:border-yellow-400 transition overflow-hidden">
              <div className="w-20 flex items-center justify-center bg-yellow-500/10">
                <FaServer className="text-yellow-400 text-4xl" />
              </div>

              <div className="p-6">
                <h3 className="text-lg font-semibold text-yellow-400 mb-2">
                  Web Hosting
                </h3>
                <p className="text-gray-400 text-sm">
                  Fast, secure and reliable hosting solutions for modern
                  websites and applications.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* WHY CHOOSE US */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8">Why Choose TechStrota</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-[#0F172A] p-6 rounded-xl border border-gray-800">
              <h3 className="text-xl font-semibold text-blue-400 mb-3">
                Expert Developers
              </h3>
              <p className="text-gray-400">
                Our experienced team specializes in modern technologies like
                React, Next.js and Laravel to build scalable and secure digital
                platforms.
              </p>
            </div>

            <div className="bg-[#0F172A] p-6 rounded-xl border border-gray-800">
              <h3 className="text-xl font-semibold text-blue-400 mb-3">
                Transparent Communication
              </h3>
              <p className="text-gray-400">
                We believe that great products are built through clear
                collaboration. Our team maintains open communication, regular
                updates, and transparent workflows, ensuring you stay informed
                and involved throughout the development process.
              </p>
            </div>

            <div className="bg-[#0F172A] p-6 rounded-xl border border-gray-800">
              <h3 className="text-xl font-semibold text-blue-400 mb-3">
                Client-Centric Approach
              </h3>
              <p className="text-gray-400">
                Every business is unique, and so are its challenges. We
                carefully understand your goals and deliver custom software
                solutions designed around your business objectives, ensuring
                maximum value and long-term success.
              </p>
            </div>

            <div className="bg-[#0F172A] p-6 rounded-xl border border-gray-800">
              <h3 className="text-xl font-semibold text-blue-400 mb-3">
                On-Time Delivery
              </h3>
              <p className="text-gray-400">
                We respect your time and business deadlines. Our structured
                development process and agile methodology help us deliver
                projects efficiently and on schedule without compromising
                quality.
              </p>
            </div>

            <div className="bg-[#0F172A] p-6 rounded-xl border border-gray-800">
              <h3 className="text-xl font-semibold text-blue-400 mb-3">
                Post-Launch Support
              </h3>
              <p className="text-gray-400">
                Our partnership doesn’t end after deployment. We provide
                continuous support, updates, and optimization to ensure your
                software remains secure, reliable, and ready to scale as your
                business grows.
              </p>
            </div>
          </div>
        </section>
        <section className="mb-24">
          <h2 className="text-3xl font-bold mb-12">Our Development Process</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            <div className="bg-[#0F172A] p-6 rounded-xl border border-gray-800 hover:border-blue-500 transition transform hover:-translate-y-2 text-center">
              <FaSearch className="text-blue-400 text-3xl mb-4 mx-auto" />
              <h3 className="font-semibold mb-2">Discovery</h3>
              <p className="text-gray-400 text-sm">
                Understanding your business goals and project requirements.
              </p>
            </div>

            <div className="bg-[#0F172A] p-6 rounded-xl border border-gray-800 hover:border-blue-500 transition transform hover:-translate-y-2 text-center">
              <FaClipboardList className="text-blue-400 text-3xl mb-4 mx-auto" />
              <h3 className="font-semibold mb-2">Planning</h3>
              <p className="text-gray-400 text-sm">
                Designing system architecture and development roadmap.
              </p>
            </div>

            <div className="bg-[#0F172A] p-6 rounded-xl border border-gray-800 hover:border-blue-500 transition transform hover:-translate-y-2 text-center">
              <FaCode className="text-blue-400 text-3xl mb-4 mx-auto" />
              <h3 className="font-semibold mb-2">Development</h3>
              <p className="text-gray-400 text-sm">
                Building scalable applications using modern technologies.
              </p>
            </div>

            <div className="bg-[#0F172A] p-6 rounded-xl border border-gray-800 hover:border-blue-500 transition transform hover:-translate-y-2 text-center">
              <FaBug className="text-blue-400 text-3xl mb-4 mx-auto" />
              <h3 className="font-semibold mb-2">Testing</h3>
              <p className="text-gray-400 text-sm">
                Ensuring security, performance and reliability.
              </p>
            </div>

            <div className="bg-[#0F172A] p-6 rounded-xl border border-gray-800 hover:border-blue-500 transition transform hover:-translate-y-2 text-center">
              <FaRocket className="text-blue-400 text-3xl mb-4 mx-auto" />
              <h3 className="font-semibold mb-2">Launch</h3>
              <p className="text-gray-400 text-sm">
                Deployment with continuous support and optimization.
              </p>
            </div>
          </div>
        </section>
        <TechStackCards />

        <section className="mb-28">
          <div className="max-w-7xl mx-auto">
            {/* Heading */}
            <div className="text-center mb-14 mt-10">
              <h2 className="text-4xl font-bold mb-4">Industries We Serve</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                We deliver innovative digital solutions across multiple
                industries, helping businesses modernize, scale and stay
                competitive.
              </p>
            </div>

            {/* Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Logistics */}
              <div className="group bg-[#0F172A] rounded-xl border border-gray-800 overflow-hidden hover:border-blue-500 transition-all">
                <img
                  src="/industries/logistics.jpg"
                  alt="Logistics"
                  className="h-60 w-full object-cover group-hover:scale-105 transition"
                />
                <div className="p-6">
                  <h3 className="text-lg font-semibold mb-2">
                    Logistics & Transportation
                  </h3>
                  <p className="text-gray-400 text-sm">
                    Fleet management systems, transport bidding platforms and
                    logistics automation.
                  </p>
                </div>
              </div>

              {/* SaaS */}
              <div className="group bg-[#0F172A] rounded-xl border border-gray-800 overflow-hidden hover:border-purple-500 transition-all">
                <img
                  src="/industries/SaaS.jpeg"
                  alt="SaaS"
                  className="h-60 w-full object-cover group-hover:scale-105 transition"
                />
                <div className="p-6">
                  <h3 className="text-lg font-semibold mb-2">
                    SaaS & Technology Startups
                  </h3>
                  <p className="text-gray-400 text-sm">
                    Scalable SaaS platforms, dashboards and cloud-based
                    applications.
                  </p>
                </div>
              </div>

              {/* Ecommerce */}
              <div className="group bg-[#0F172A] rounded-xl border border-gray-800 overflow-hidden hover:border-pink-500 transition-all">
                <img
                  src="/industries/E-commerce.jpEg"
                  alt="Ecommerce"
                  className="h-60 w-full object-cover group-hover:scale-105 transition"
                />
                <div className="p-6">
                  <h3 className="text-lg font-semibold mb-2">
                    E-Commerce Platforms
                  </h3>
                  <p className="text-gray-400 text-sm">
                    Online stores, payment integrations and scalable ecommerce
                    systems.
                  </p>
                </div>
              </div>

              {/* Fashion */}
              <div className="group bg-[#0F172A] rounded-xl border border-gray-800 overflow-hidden hover:border-yellow-500 transition-all">
                <img
                  src="/industries/Clothing.jpeg"
                  alt="Fashion"
                  className="h-60 w-full object-cover group-hover:scale-105 transition"
                />
                <div className="p-6">
                  <h3 className="text-lg font-semibold mb-2">
                    Clothing & Fashion Brands
                  </h3>
                  <p className="text-gray-400 text-sm">
                    Digital storefronts, inventory systems and brand management
                    tools.
                  </p>
                </div>
              </div>

              {/* Real Estate */}
              <div className="group bg-[#0F172A] rounded-xl border border-gray-800 overflow-hidden hover:border-green-500 transition-all">
                <img
                  src="/industries/realestate.jpeg"
                  alt="Real Estate"
                  className="h-60 w-full object-cover group-hover:scale-105 transition"
                />
                <div className="p-6">
                  <h3 className="text-lg font-semibold mb-2">
                    Construction & Real Estate
                  </h3>
                  <p className="text-gray-400 text-sm">
                    Property management platforms and construction workflow
                    systems.
                  </p>
                </div>
              </div>

              {/* Fintech */}
              <div className="group bg-[#0F172A] rounded-xl border border-gray-800 overflow-hidden hover:border-cyan-500 transition-all">
                <img
                  src="/industries/InsuranceFintech.jpeg"
                  alt="Fintech"
                  className="h-60 w-full object-cover group-hover:scale-105 transition"
                />
                <div className="p-6">
                  <h3 className="text-lg font-semibold mb-2">
                    Insurance & Fintech
                  </h3>
                  <p className="text-gray-400 text-sm">
                    Secure financial applications, dashboards and fintech
                    automation.
                  </p>
                </div>
              </div>

              {/* Education */}
              <div className="group bg-[#0F172A] rounded-xl border border-gray-800 overflow-hidden hover:border-indigo-500 transition-all">
                <img
                  src="/industries/education.jpeg"
                  alt="Education"
                  className="h-60 w-full object-cover group-hover:scale-105 transition"
                />
                <div className="p-6">
                  <h3 className="text-lg font-semibold mb-2">
                    Education & E-Learning
                  </h3>
                  <p className="text-gray-400 text-sm">
                    Learning management systems and digital education platforms.
                  </p>
                </div>
              </div>

              {/* Healthcare */}
              <div className="group bg-[#0F172A] rounded-xl border border-gray-800 overflow-hidden hover:border-red-500 transition-all">
                <img
                  src="/industries/healthcare.jpeg"
                  alt="Healthcare"
                  className="h-60 w-full object-cover group-hover:scale-105 transition"
                />
                <div className="p-6">
                  <h3 className="text-lg font-semibold mb-2">
                    Healthcare & Clinics
                  </h3>
                  <p className="text-gray-400 text-sm">
                    Hospital systems, appointment platforms and healthcare
                    dashboards.
                  </p>
                </div>
              </div>

              {/* Automation */}
              <div className="group bg-[#0F172A] rounded-xl border border-gray-800 overflow-hidden hover:border-orange-500 transition-all">
                <img
                  src="/industries/business.jpeg"
                  alt="Automation"
                  className="h-60 w-full object-cover group-hover:scale-105 transition"
                />
                <div className="p-6">
                  <h3 className="text-lg font-semibold mb-2">
                    Business Automation
                  </h3>
                  <p className="text-gray-400 text-sm">
                    CRM, ERP and custom automation systems for businesses.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
