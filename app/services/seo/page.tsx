export default function Services() {
  return (
    <main className="py-24 bg-[#020617] text-white">
      <div className="max-w-6xl mx-auto px-6">
        <h1 className="text-5xl font-bold mb-8">Our Services</h1>
        <p className="text-gray-400 mb-12">
          TechStrota offers a wide range of services to help businesses succeed
          in the digital world, including web development, website design, SEO
          and social media marketing.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-[#0F172A] p-8 rounded-2xl border border-gray-800 hover:border-blue-500 transition cursor-pointer">
            <h3 className="text-xl font-semibold mb-4 text-blue-400">
              Web Development
            </h3>
            <p className="text-gray-400">
              We build fast, scalable and SEO-friendly websites using React,
              Next.js and modern web technologies.
            </p>
          </div>
          <div className="bg-[#0F172A] p-8 rounded-2xl border border-gray-800 hover:border-blue-500 transition cursor-pointer">
            <h3 className="text-xl font-semibold mb-4 text-blue-400">
              Website Design
            </h3>
            <p className="text-gray-400">
              We create modern, responsive and user-friendly website designs
              that help businesses establish a strong online presence.
            </p>
          </div>
          <div className="bg-[#0F172A] p-8 rounded-2xl border border-gray-800 hover:border-blue-500 transition cursor-pointer">
            <h3 className="text-xl font-semibold mb-4 text-blue-400">
              Search Engine Optimization (SEO)
            </h3>
            <p className="text-gray-400">
              Our SEO services help businesses improve their search engine
              rankings and drive more organic traffic to their websites.{" "}
            </p>
          </div>
          <div className="bg-[#0F172A] p-8 rounded-2xl border border-gray-800 hover:border-blue-500 transition cursor-pointer">
            <h3 className="text-xl font-semibold mb-4 text-blue-400">
              Social Media Marketing
            </h3>
            <p className="text-gray-400">
              We create and manage effective social media marketing campaigns to
              help businesses engage with their audience and grow their brand
              online.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

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
