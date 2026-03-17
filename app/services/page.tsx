import Link from "next/link";

export const metadata = {
  title: "Software Development Services | TechStrota",
  description:
    "TechStrota offers web development, mobile app development and SaaS development services for startups and enterprises.",
  keywords: [
    "software development services",
    "web development services",
    "mobile app development services",
    "SaaS development company",
    "custom software development",
  ],
};

export default function Services() {
  return (
    <main className="py-16 md:py-20 lg:py-24 bg-[#020617] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight">
          Our Software Development Services
        </h1>

        <p className="text-gray-400 max-w-3xl mb-10 md:mb-14 text-sm sm:text-base">
          TechStrota provides professional software development services
          including web development, mobile app development and SaaS platforms
          for startups, logistics companies and enterprises.
        </p>

        {/* Video */}
        <div className="mb-10 md:mb-16 max-w-4xl mx-auto">
          <div className="aspect-video">
            <video
              className="w-full h-full object-cover rounded-xl md:rounded-2xl border border-gray-800"
              autoPlay
              muted
              loop
              playsInline
            >
              <source src="/services/services_hero.mp4" type="video/mp4" />
            </video>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
          {/* Web Development */}
          <Link href="services/web-development">
            <div className="bg-[#0F172A] p-5 sm:p-6 md:p-8 rounded-xl md:rounded-2xl border border-gray-800 hover:border-blue-500 transition cursor-pointer h-full">
              <h3 className="text-lg sm:text-xl font-semibold mb-3 md:mb-4 text-blue-400">
                Web Development
              </h3>

              <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                We build fast, scalable and SEO-friendly websites using React,
                Next.js and modern web technologies.
              </p>
            </div>
          </Link>

          {/* Mobile Development */}
          <Link href="services/mobile-app-development">
            <div className="bg-[#0F172A] p-8 rounded-2xl border border-gray-800 hover:border-blue-500 transition cursor-pointer">
              <h3 className="text-xl font-semibold mb-4 text-blue-400">
                Mobile App Development
              </h3>

              <p className="text-gray-400">
                Android and iOS mobile applications using React Native and
                scalable backend systems.
              </p>
            </div>
          </Link>

          {/* SaaS Development */}
          <Link href="services/saas-development">
            <div className="bg-[#0F172A] p-8 rounded-2xl border border-gray-800 hover:border-blue-500 transition cursor-pointer">
              <h3 className="text-xl font-semibold mb-4 text-blue-400">
                SaaS Development
              </h3>

              <p className="text-gray-400">
                Build powerful SaaS platforms, CRM systems and cloud-based
                business applications.
              </p>
            </div>
          </Link>
          <Link href="services/website-design">
            <div className="bg-[#0F172A] p-8 rounded-2xl border border-gray-800 hover:border-blue-500 transition cursor-pointer">
              <h3 className="text-xl font-semibold mb-4 text-blue-400">
                Website Design
              </h3>

              <p className="text-gray-400">
                Build powerful SaaS platforms, CRM systems and cloud-based
                business applications.
              </p>
            </div>
          </Link>

          <Link href="services/Ecommerce-development">
            <div className="bg-[#0F172A] p-8 rounded-2xl border border-gray-800 hover:border-blue-500 transition cursor-pointer">
              <h3 className="text-xl font-semibold mb-4 text-blue-400">
                E-commerce Development
              </h3>

              <p className="text-gray-400">
                Build powerful SaaS platforms, CRM systems and cloud-based
                business applications.
              </p>
            </div>
          </Link>

          <Link href="services/web-application">
            <div className="bg-[#0F172A] p-8 rounded-2xl border border-gray-800 hover:border-blue-500 transition cursor-pointer">
              <h3 className="text-xl font-semibold mb-4 text-blue-400">
                Web Application Development
              </h3>

              <p className="text-gray-400">
                Build powerful SaaS platforms, CRM systems and cloud-based
                business applications.
              </p>
            </div>
          </Link>

          <Link href="services/dedicated-developers">
            <div className="bg-[#0F172A] p-8 rounded-2xl border border-gray-800 hover:border-blue-500 transition cursor-pointer">
              <h3 className="text-xl font-semibold mb-4 text-blue-400">
                Dedicated Developers
              </h3>

              <p className="text-gray-400">
                Build powerful SaaS platforms, CRM systems and cloud-based
                business applications.
              </p>
            </div>
          </Link>

          <Link href="services/seo">
            <div className="bg-[#0F172A] p-8 rounded-2xl border border-gray-800 hover:border-blue-500 transition cursor-pointer">
              <h3 className="text-xl font-semibold mb-4 text-blue-400">
                Search Engine Optimization (SEO)
              </h3>

              <p className="text-gray-400">
                Build powerful SaaS platforms, CRM systems and cloud-based
                business applications.
              </p>
            </div>
          </Link>

          <Link href="services/social-media-marketing">
            <div className="bg-[#0F172A] p-8 rounded-2xl border border-gray-800 hover:border-blue-500 transition cursor-pointer">
              <h3 className="text-xl font-semibold mb-4 text-blue-400">
                Social Media Marketing
              </h3>

              <p className="text-gray-400">
                Build powerful SaaS platforms, CRM systems and cloud-based
                business applications.
              </p>
            </div>
          </Link>
        </div>
      </div>
    </main>
  );
}
