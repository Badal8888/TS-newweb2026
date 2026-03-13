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
    <main className="py-24 bg-[#020617] text-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Page Title */}
        <h1 className="text-5xl font-bold mb-6">
          Our Software Development Services
        </h1>

        <p className="text-gray-400 max-w-3xl mb-16">
          TechStrota provides professional software development services
          including web development, mobile app development and SaaS platforms
          for startups, logistics companies and enterprises.
        </p>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-10">
          {/* Web Development */}
          <Link href="services/web-development">
            <div className="bg-[#0F172A] p-8 rounded-2xl border border-gray-800 hover:border-blue-500 transition cursor-pointer">
              <h3 className="text-xl font-semibold mb-4 text-blue-400">
                Web Development
              </h3>

              <p className="text-gray-400">
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
