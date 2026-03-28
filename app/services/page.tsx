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

// 9 Services ka data with real placeholder images
const servicesList = [
  {
    title: "Mobile App Development",
    tag: "Mobile",
    tagColor: "text-[#0a0f1a] bg-[#f2a93b]", // Gold bg, dark text
    description:
      "We build high-performance mobile apps using React Native for seamless iOS and Android experiences, backed by robust, scalable cloud backends.",
    bullets: [
      "Native performance with Cross-Platform efficiency",
      "Custom UI/UX tailored for device ergonomics",
      "Real-time backend sync & offline capabilities",
    ],
    link: "/services/mobile-app-development",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=800",
    buttonColor: "text-[#f2a93b] bg-[#f2a93b]/10 border-[#f2a93b]/20 hover:bg-[#f2a93b] hover:text-[#0a0f1a]",
    reverse: false, // Image left, text right
  },
  {
    title: "SaaS & Cloud Solutions",
    tag: "Enterprise",
    tagColor: "text-white bg-[#3b82f6]", // Blue bg, white text
    description:
      "Accelerate your business with enterprise-grade CRM and SaaS platforms. We architect multi-tenant environments that grow with your user base.",
    bullets: [
      "Cloud-Native Architecture (AWS/Azure)",
      "Secure Multi-tenant Data Separation",
      "API-first Headless Infrastructure",
    ],
    link: "/services/saas-development",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800",
    buttonColor: "text-[#3b82f6] bg-[#3b82f6]/10 border-[#3b82f6]/20 hover:bg-[#3b82f6] hover:text-white",
    reverse: true, // Image right, text left
  },
  {
    title: "Web & E-commerce",
    tag: "E-commerce",
    tagColor: "text-[#0a0f1a] bg-[#f2a93b]",
    description:
      "Launch scalable online stores and web systems built for conversion and speed. From headless commerce to high-traffic web portals.",
    bullets: [
      "Custom Shopify & Headless Integrations",
      "Lightning Fast Progressive Web Apps",
      "Robust Inventory & Order Management",
    ],
    link: "/services/Ecommerce-development",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=800",
    buttonColor: "text-[#f2a93b] bg-[#f2a93b]/10 border-[#f2a93b]/20 hover:bg-[#f2a93b] hover:text-[#0a0f1a]",
    reverse: false,
  },
  {
    title: "Marketing & Growth",
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
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
    buttonColor: "text-[#3b82f6] bg-[#3b82f6]/10 border-[#3b82f6]/20 hover:bg-[#3b82f6] hover:text-white",
    reverse: true,
  },
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
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800",
    buttonColor: "text-[#f2a93b] bg-[#f2a93b]/10 border-[#f2a93b]/20 hover:bg-[#f2a93b] hover:text-[#0a0f1a]",
    reverse: false,
  },
  {
    title: "Website Design",
    tag: "Design",
    tagColor: "text-white bg-[#3b82f6]",
    description:
      "Crafting stunning, user-centric website designs that not only look beautiful but are built to convert visitors into customers.",
    bullets: [
      "User-Centric UI/UX Design",
      "Responsive & Mobile-First Approach",
      "Brand Identity Integration",
    ],
    link: "/services/website-design",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=800",
    buttonColor: "text-[#3b82f6] bg-[#3b82f6]/10 border-[#3b82f6]/20 hover:bg-[#3b82f6] hover:text-white",
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
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800",
    buttonColor: "text-[#f2a93b] bg-[#f2a93b]/10 border-[#f2a93b]/20 hover:bg-[#f2a93b] hover:text-[#0a0f1a]",
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
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800",
    buttonColor: "text-[#3b82f6] bg-[#3b82f6]/10 border-[#3b82f6]/20 hover:bg-[#3b82f6] hover:text-white",
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
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
    buttonColor: "text-[#f2a93b] bg-[#f2a93b]/10 border-[#f2a93b]/20 hover:bg-[#f2a93b] hover:text-[#0a0f1a]",
    reverse: false,
  },
];

export default function Services() {
  return (
    <main className="py-16 md:py-20 lg:py-24 bg-[#0a0f1a] text-white font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title Section */}
        <div className="text-center md:text-left mb-16 max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
            Our Software Development <span className="text-[#f2a93b]">Services</span>
          </h1>
          <p className="text-slate-400 text-lg md:text-xl">
            TechStrota provides professional software development services including web development, mobile app development and SaaS platforms for startups, logistics companies and enterprises.
          </p>
        </div>

        {/* Services List */}
        <div className="space-y-12">
          {servicesList.map((service, index) => (
            <section key={index} className="group">
              <div
                className={`flex flex-col ${
                  service.reverse ? "lg:flex-row-reverse" : "lg:flex-row"
                } gap-8 items-center bg-[#161e2d]/70 backdrop-blur-md border border-[#f2a93b] p-6 rounded-3xl shadow-2xl hover:border-[#f2a93b]/30 transition-all duration-300`}
              >
                {/* Image Container */}
                <div className="w-full lg:w-1/2 aspect-video rounded-2xl overflow-hidden relative border border-white/10 bg-slate-800">
                  
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy" 
                  />
                  
                  {/* Tag Overlay on Image */}
                  <div
                    className={`absolute top-4 ${
                      service.reverse ? "right-4" : "left-4"
                    } ${service.tagColor} text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest z-10`}
                  >
                    {service.tag}
                  </div>
                </div>

                {/* Text Content Container */}
                <div className="w-full lg:w-1/2 flex flex-col justify-center space-y-4">
                  <h3 className="text-3xl font-bold text-white">
                    {service.title}
                  </h3>
                  <p className="text-slate-400 text-lg leading-relaxed">
                    {service.description}
                  </p>

                  {/* Bullet Points */}
                  <ul className="space-y-2">
                    {service.bullets.map((bullet, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-slate-300">
                        {/* Custom SVG Checkmark Icon */}
                        <svg className={`w-5 h-5 flex-shrink-0 ${service.reverse ? 'text-[#3b82f6]' : 'text-[#f2a93b]'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                        <span className="text-sm sm:text-base">{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Button */}
                  <div className="pt-4">
                    <Link href={service.link}>
                      <button
                        className={`${service.buttonColor} px-8 py-3 rounded-xl font-bold flex items-center gap-2 w-fit transition-all duration-300 border`}
                      >
                        Show Details
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}