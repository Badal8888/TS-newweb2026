import Link from "next/link";

export const metadata = {
  title: "Software Development Services | TechStrota",
  description:
    "TechStrota offers web development, mobile app development and SaaS development services for startups and enterprises.",
  keywords: [
    "software development",
    "web development",
    "mobile app development",
    "SaaS",
    "custom software",
  ],
};

const servicesList = [
  {
    title: "Mobile App Development",
    tag: "Mobile",
    tagColor: "text-[#0a0f1a] bg-[#f2a93b]",
    description:
      "High-performance mobile apps using React Native for Android & iOS.",
    bullets: ["Cross-platform apps", "Realtime sync", "Offline support"],
    link: "/services/mobile-app-development",
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=800",
    buttonColor:
      "text-[#f2a93b] bg-[#f2a93b]/10 border-[#f2a93b]/20 hover:bg-[#f2a93b] hover:text-black",
    reverse: false,
  },
  {
    title: "SaaS Development",
    tag: "Cloud",
    tagColor: "text-white bg-blue-500",
    description: "Scalable SaaS platforms, CRM systems and cloud-based apps.",
    bullets: ["Multi-tenant systems", "Secure APIs", "Cloud infrastructure"],
    link: "/services/saas-development",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800",
    buttonColor:
      "text-blue-400 bg-blue-400/10 border-blue-400/20 hover:bg-blue-400 hover:text-white",
    reverse: true,
  },
  {
    title: "Web Development",
    tag: "Web",
    tagColor: "text-black bg-yellow-400",
    description: "Fast, SEO-friendly websites using Next.js and modern stack.",
    bullets: ["Next.js performance", "SEO optimized", "Scalable architecture"],
    link: "/services/web-development",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800",
    buttonColor:
      "text-yellow-400 bg-yellow-400/10 border-yellow-400/20 hover:bg-yellow-400 hover:text-black",
    reverse: false,
  },
  {
    title: "E-commerce Development",
    tag: "Store",
    tagColor: "text-white bg-green-500",
    description:
      "Custom e-commerce stores with payment, inventory and scaling.",
    bullets: ["Shopify / Custom", "Payment integration", "Order management"],
    link: "/services/ecommerce-development",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=800",
    buttonColor:
      "text-green-400 bg-green-400/10 border-green-400/20 hover:bg-green-400 hover:text-black",
    reverse: true,
  },
  {
    title: "SEO & Marketing",
    tag: "Growth",
    tagColor: "text-white bg-pink-500",
    description: "Grow traffic and leads using SEO and performance marketing.",
    bullets: ["Technical SEO", "Content strategy", "Lead generation"],
    link: "/services/seo",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
    buttonColor:
      "text-pink-400 bg-pink-400/10 border-pink-400/20 hover:bg-pink-400 hover:text-white",
    reverse: false,
  },
];

export default function Services() {
  return (
    <main className="bg-[#020617] text-white py-16">
      {/* HERO VIDEO */}
      <div className="max-w-5xl mx-auto px-4 mb-16">
        <div className="aspect-video">
          <video
            className="w-full h-full object-cover rounded-xl border border-gray-800"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src="/services/services_hero.mp4" type="video/mp4" />
          </video>
        </div>
      </div>

      {/* HEADER */}
      <div className="text-center max-w-3xl mx-auto px-4 mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Our Software Development Services
        </h1>
        <p className="text-gray-400 text-lg">
          We build scalable, high-performance digital products for startups and
          enterprises.
        </p>
      </div>

      {/* SERVICES */}
      <div className="max-w-7xl mx-auto px-4 space-y-12">
        {servicesList.map((service, index) => (
          <div
            key={index}
            className={`flex flex-col ${
              service.reverse ? "lg:flex-row-reverse" : "lg:flex-row"
            } gap-8 items-center bg-[#161e2d] p-6 rounded-2xl border border-gray-800 hover:border-gray-600 transition`}
          >
            {/* IMAGE */}
            <div className="w-full lg:w-1/2 aspect-video overflow-hidden rounded-xl">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover hover:scale-105 transition"
              />
            </div>

            {/* TEXT */}
            <div className="w-full lg:w-1/2 space-y-4">
              {/* TAG */}
              <span
                className={`${service.tagColor} px-3 py-1 rounded-full text-xs`}
              >
                {service.tag}
              </span>

              <h2 className="text-2xl font-bold">{service.title}</h2>

              <p className="text-gray-400">{service.description}</p>

              <ul className="space-y-2">
                {service.bullets.map((b, i) => (
                  <li key={i} className="text-gray-300 flex gap-2">
                    ✔ {b}
                  </li>
                ))}
              </ul>

              <Link href={service.link}>
                <button
                  className={`${service.buttonColor} px-6 py-2 rounded-lg border transition`}
                >
                  View Details →
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
