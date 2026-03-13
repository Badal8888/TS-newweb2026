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
        {/* WHO WE ARE */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8">Who We Are</h2>

          <p className="text-gray-400 mb-8 leading-relaxed">
            Founded with the passion to innovate and simplify,
            <strong> TechStrota</strong> is a dynamic technology firm based in
            Vadodara, Gujarat. From humble beginnings, we have evolved into a
            trusted partner for startups, enterprises and innovators looking to
            build scalable, secure and smart digital solutions.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-[#0F172A] p-6 rounded-xl border border-gray-800">
              🚀 Established in 2021
            </div>

            <div className="bg-[#0F172A] p-6 rounded-xl border border-gray-800">
              🎯 Founded to simplify digital challenges with smart solutions
            </div>

            <div className="bg-[#0F172A] p-6 rounded-xl border border-gray-800">
              📈 Evolved from freelance roots to a full-stack digital agency
            </div>

            <div className="bg-[#0F172A] p-6 rounded-xl border border-gray-800">
              ❤️ Passionate about innovation, ethics and user-first design
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

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
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
        <section className="mb-24">
          <h2 className="text-3xl font-bold mb-12">Our Technology Stack</h2>

          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
            {/* React */}
            <div className="bg-[#0F172A] p-6 rounded-xl border border-gray-800 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-500/20 transition text-center">
              <FaReact className="text-[#61DBFB] text-5xl mx-auto mb-3" />
              <p className="text-gray-300">React</p>
            </div>

            {/* Next.js */}
            <div className="bg-[#0F172A] p-6 rounded-xl border border-gray-800 hover:border-white hover:shadow-lg transition text-center">
              <SiNextdotjs className="text-white text-5xl mx-auto mb-3" />
              <p className="text-gray-300">Next.js</p>
            </div>

            {/* Laravel */}
            <div className="bg-[#0F172A] p-6 rounded-xl border border-gray-800 hover:border-red-500 hover:shadow-lg hover:shadow-red-500/20 transition text-center">
              <SiLaravel className="text-[#FF2D20] text-5xl mx-auto mb-3" />
              <p className="text-gray-300">Laravel</p>
            </div>

            {/* Node.js */}
            <div className="bg-[#0F172A] p-6 rounded-xl border border-gray-800 hover:border-green-500 hover:shadow-lg hover:shadow-green-500/20 transition text-center">
              <FaNodeJs className="text-[#3C873A] text-5xl mx-auto mb-3" />
              <p className="text-gray-300">Node.js</p>
            </div>

            {/* MySQL */}
            <div className="bg-[#0F172A] p-6 rounded-xl border border-gray-800 hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/20 transition text-center">
              <SiMysql className="text-[#00758F] text-5xl mx-auto mb-3" />
              <p className="text-gray-300">MySQL</p>
            </div>

            {/* AWS */}
            <div className="bg-[#0F172A] p-6 rounded-xl border border-gray-800 hover:border-orange-400 hover:shadow-lg hover:shadow-orange-400/20 transition text-center">
              <FaAws className="text-[#FF9900] text-5xl mx-auto mb-3" />
              <p className="text-gray-300">AWS</p>
            </div>

            {/* PHP */}
            <div className="bg-[#0F172A] p-6 rounded-xl border border-gray-800 hover:border-purple-400 transition text-center">
              <FaPhp className="text-[#777BB4] text-5xl mx-auto mb-3" />
              PHP
            </div>

            {/* Python */}
            <div className="bg-[#0F172A] p-6 rounded-xl border border-gray-800 hover:border-yellow-400 transition text-center">
              <FaPython className="text-[#3776AB] text-5xl mx-auto mb-3" />
              Python
            </div>

            {/* Flutter */}
            <div className="bg-[#0F172A] p-6 rounded-xl border border-gray-800 hover:border-blue-400 transition text-center">
              <SiFlutter className="text-[#02569B] text-5xl mx-auto mb-3" />
              Flutter
            </div>

            {/* .NET */}
            <div className="bg-[#0F172A] p-6 rounded-xl border border-gray-800 hover:border-purple-500 transition text-center">
              <SiDotnet className="text-[#512BD4] text-5xl mx-auto mb-3" />
              .NET
            </div>

            {/* Hostinger */}
            <div className="bg-[#0F172A] p-6 rounded-xl border border-gray-800 hover:border-purple-600 transition text-center">
              <img src="/icons/hostinger.svg" className="h-12 mx-auto mb-3" />
              Hostinger
            </div>
            {/* Docker */}
            <div className="bg-[#0F172A] p-6 rounded-xl border border-gray-800 hover:border-blue-400 hover:shadow-lg hover:shadow-blue-400/20 transition text-center">
              <FaDocker className="text-[#2496ED] text-5xl mx-auto mb-3" />
              <p className="text-gray-300">Docker</p>
            </div>
            {/* Filament */}
          </div>
        </section>
        <section className="mb-24">
          <h2 className="text-3xl font-bold mb-10">Industries We Serve</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-[#0F172A] p-6 rounded-xl border border-gray-800">
              Logistics & Transportation
            </div>

            <div className="bg-[#0F172A] p-6 rounded-xl border border-gray-800">
              SaaS & Technology Startups
            </div>

            <div className="bg-[#0F172A] p-6 rounded-xl border border-gray-800">
              E-Commerce Platforms
            </div>
            <div className="bg-[#0F172A] p-6 rounded-xl border border-gray-800">
              Clothing & Fashion Brands
            </div>
            <div className="bg-[#0F172A] p-6 rounded-xl border border-gray-800">
              construction & Real Estate
            </div>
            <div className="bg-[#0F172A] p-6 rounded-xl border border-gray-800">
              insurance & Fintech Companies
            </div>
            <div className="bg-[#0F172A] p-6 rounded-xl border border-gray-800">
              Education & E-Learning
            </div>

            <div className="bg-[#0F172A] p-6 rounded-xl border border-gray-800">
              Healthcare & Clinics
            </div>

            <div className="bg-[#0F172A] p-6 rounded-xl border border-gray-800">
              Business Automation Systems
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
