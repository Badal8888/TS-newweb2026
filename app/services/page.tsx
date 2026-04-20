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
    title: "Web Development",
    tag: "Web",
    tagColor: "text-[#0a0f1a] bg-[#f2a93b]",
    description:
      "We build fast, scalable and SEO-friendly websites using React, Next.js and modern web technologies to elevate your brand presence online.",
    bullets: [
      "High-performance Next.js architectures",
      "SEO optimized structures",
      "Scalable modern web technologies",
    ],
    link: "/services/web-development",
    image: "/services/web-development.png", // Placeholder image path, replace with actual image URL
    buttonColor:
      "text-[#f2a93b] bg-[#f2a93b]/10 border-[#f2a93b]/20 hover:bg-[#f2a93b] hover:text-[#0a0f1a]",
    reverse: false,
  },
  {
    title: "E-commerce Development",
    tag: "E-commerce",
    tagColor: "text-white bg-[#3b82f6]",
    description:
      "Launch scalable online stores and web systems built for conversion and speed. From headless commerce to high-traffic web portals.",
    bullets: [
      "Custom Shopify & Headless Integrations",
      "Lightning Fast Progressive Web Apps",
      "Robust Inventory & Order Management",
    ],
    link: "/services/Ecommerce-development",
    image: "/services/e-commerce.png", // Placeholder image path, replace with actual image URL
    buttonColor:
      "text-[#f2a93b] bg-[#f2a93b]/10 border-[#f2a93b]/20 hover:bg-[#f2a93b] hover:text-[#0a0f1a]",
    reverse: true,
  },
  {
    title: "Web Application Development",
    tag: "Web-App",
    tagColor: "text-[#0a0f1a] bg-[#f2a93b]",
    description:
      "Developing complex, robust, and highly interactive web applications tailored to solve specific business challenges.",
    bullets: [
      "Custom Web App Solutions",
      "Interactive Dashboards & Portals",
      "Seamless Third-Party API Integrations",
    ],
    link: "/services/web-application",
    image: "/services/web-application.png", // Placeholder image path, replace with actual image URL
    buttonColor:
      "text-[#f2a93b] bg-[#f2a93b]/10 border-[#f2a93b]/20 hover:bg-[#f2a93b] hover:text-[#0a0f1a]",
    reverse: false,
  },
  {
    title: "Dedicated Developers",
    tag: "Team",
    tagColor: "text-white bg-[#3b82f6]",
    description:
      "Hire our top-tier dedicated developers to extend your team. We provide skilled professionals for your long-term project needs.",
    bullets: [
      "Access to Top 1% Tech Talent",
      "Flexible Engagement Models",
      "Seamless Team Integration",
    ],
    link: "/services/dedicated-developers",
    image: "/services/dedicated-developer.png", // Placeholder image path, replace with actual image URL
    buttonColor:
      "text-[#3b82f6] bg-[#3b82f6]/10 border-[#3b82f6]/20 hover:bg-[#3b82f6] hover:text-white",
    reverse: true,
  },
  {
    title: "Search Engine Optimization",
    tag: "SEO",
    tagColor: "text-[#0a0f1a] bg-[#f2a93b]",
    description:
      "Improve your online visibility and drive organic traffic with our proven, white-hat Search Engine Optimization strategies.",
    bullets: [
      "Comprehensive Site Audits",
      "On-Page & Off-Page SEO",
      "Keyword Strategy & Link Building",
    ],
    link: "/services/seo",
    // Yahan maine image link change kar diya hai jo proper work karega
    image: "/services/seo.png", // Placeholder image path, replace with actual image URL
    buttonColor:
      "text-[#f2a93b] bg-[#f2a93b]/10 border-[#f2a93b]/20 hover:bg-[#f2a93b] hover:text-[#0a0f1a]",
    reverse: false,
  },
  {
    title: "Social Media Marketing",
    tag: "Growth",
    tagColor: "text-white bg-[#3b82f6]",
    description:
      "Data-driven strategies to amplify your brand. We dominate through SEO, SMM, and Performance Marketing to ensure your digital product reaches the right audience.",
    bullets: [
      "Technical SEO & Content Optimization",
      "Strategic Social Media Management",
      "Targeted Lead Generation & ROI focus",
    ],
    link: "/services/social-media-marketing",
    image: "/services/social-media-marketing.png", // Placeholder image path, replace with actual image URL
    buttonColor:
      "text-[#3b82f6] bg-[#3b82f6]/10 border-[#3b82f6]/20 hover:bg-[#3b82f6] hover:text-white",
    reverse: true,
  },
  {
    title: "SaaS Development",
    tag: "Enterprise",
    tagColor: "text-[#0a0f1a] bg-[#f2a93b]", // Blue bg, white text
    description:
      "Accelerate your business with enterprise-grade CRM and SaaS platforms. We architect multi-tenant environments that grow with your user base.",
    bullets: [
      "Cloud-Native Architecture (AWS/Azure)",
      "Secure Multi-tenant Data Separation",
      "API-first Headless Infrastructure",
    ],
    link: "/services/saas-development",
    image: "/services/saas-development.png", // Placeholder image path, replace with actual image URL
    buttonColor:
      "text-[#3b82f6] bg-[#3b82f6]/10 border-[#3b82f6]/20 hover:bg-[#3b82f6] hover:text-white",
    reverse: false, // Image right, text left
  },
  {
    title: "Mobile App Development",
    tag: "Mobile",
    tagColor: "text-white bg-[#3b82f6]", // Gold bg, dark text
    description:
      "We build high-performance mobile apps using React Native for seamless iOS and Android experiences, backed by robust, scalable cloud backends.",
    bullets: [
      "Native performance with Cross-Platform efficiency",
      "Custom UI/UX tailored for device ergonomics",
      "Real-time backend sync & offline capabilities",
    ],
    link: "/services/mobile-app-development",
    image: "/services/mobile-application.png", // Placeholder image path, replace with actual image URL
    buttonColor:
      "text-[#f2a93b] bg-[#f2a93b]/10 border-[#f2a93b]/20 hover:bg-[#f2a93b] hover:text-[#0a0f1a]",
    reverse: true, // Image left, text right
  },
];

export default function Services() {
  return (
    <main className="bg-transparent text-white py-10 md:py-16">
      {/* HERO VIDEO */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 mb-10 md:mb-16">
        <div className="aspect-video">
          <video
            className="w-full h-full object-cover rounded-lg md:rounded-xl border border-gray-800"
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
      <div className="relative z-10 text-center max-w-3xl mx-auto px-4 mb-10 md:mb-16">
        <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-3 md:mb-4">
          Our Software Development Services
        </h1>
        <p className="text-gray-400 text-sm sm:text-base md:text-lg">
          We build scalable, high-performance digital products for startups and
          enterprises.
        </p>
      </div>

      {/* SERVICES */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 space-y-6 md:space-y-12">
        {servicesList.map((service, index) => (
          <div
            key={index}
            className={`flex flex-col ${
              service.reverse ? "lg:flex-row-reverse" : "lg:flex-row"
            } gap-6 md:gap-8 items-center bg-[#161e2d] p-4 md:p-6 rounded-xl md:rounded-2xl border border-gray-800 hover:border-gray-600 transition`}
          >
            {/* IMAGE */}
            <div className="w-full lg:w-1/2 aspect-video overflow-hidden rounded-lg md:rounded-xl">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover hover:scale-105 transition"
              />
            </div>

            {/* TEXT */}
            <div className="w-full lg:w-1/2 space-y-3 md:space-y-4 text-center lg:text-left">
              {/* TAG */}
              <span
                className={`${service.tagColor} px-3 py-1 rounded-full text-xs inline-block`}
              >
                {service.tag}
              </span>

              <h2 className="text-xl sm:text-2xl font-bold">{service.title}</h2>

              <p className="text-gray-400 text-sm sm:text-base">
                {service.description}
              </p>

              <ul className="space-y-1 md:space-y-2 text-sm sm:text-base">
                {service.bullets.map((b, i) => (
                  <li
                    key={i}
                    className="text-gray-300 flex gap-2 justify-center lg:justify-start"
                  >
                    ✔ {b}
                  </li>
                ))}
              </ul>

              <Link href={service.link}>
                <button
                  className={`${service.buttonColor} w-full sm:w-auto px-5 py-2 rounded-lg border transition`}
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
