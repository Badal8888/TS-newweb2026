"use client";

import { motion } from "framer-motion";

/* ================= SEO Structured Data ================= */
const StructuredData = () => (
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        name: "TechStrota",
        image: "https://www.techstrota.com/images/seo/brand-logo.jpg",
        url: "https://www.techstrota.com",
        telephone: "+91xxxxxxxxxx",
        email: "hello@techstrota.com",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Office Address",
          addressLocality: "Vadodara",
          addressRegion: "Gujarat",
          addressCountry: "IN",
        },
        description:
          "TechStrota is a web development company in Vadodara, specializing in React, Next.js, Laravel, Node.js web development services.",
        serviceType: "Web Development Services",
        areaServed: ["Vadodara", "Gujarat", "India"],
      }),
    }}
  />
);

/* ================= SCROLL REVEAL COMPONENTS ================= */
function ScrollReveal({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function ScrollRevealCards({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

const Card = ({
  children,
  index,
}: {
  children: React.ReactNode;
  index: number;
}) => (
  <motion.div
    variants={{
      hidden: { opacity: 0, y: 40 },
      visible: (i: number) => ({ opacity: 1, y: 0 }),
    }}
    custom={index}
    className="bg-white/5 backdrop-blur-lg border border-blue-400/20 p-6 rounded-xl hover:scale-103 hover:shadow-blue-500/20 transition"
  >
    {children}
  </motion.div>
);

/* ================= HERO ================= */
function HeroSection() {
  return (
    <ScrollReveal className="relative py-20 px-6 flex justify-center bg-gradient-to-br from-[#020b1f] via-[#071a3a] to-[#020b1f] overflow-hidden">
      <div className="w-full max-w-6xl relative rounded-2xl border border-blue-400/30 shadow-[0_0_100px_rgba(59,130,246,0.25)]">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-auto object-cover rounded-2xl"
        >
          <source src="/services/web_development.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-gradient-to-t from-[#020b1f]/90 via-blue-900/40 to-transparent rounded-2xl" />

        <div className="absolute inset-0 flex items-center justify-center text-center px-6 sm:px-12">
          <motion.div
            initial={{ opacity: 0, y: 70 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="max-w-3xl"
          >
            <span className="text-2xl md:text-3xl font-bold text-blue-300 mb-2 block">
              TechStrota – Web Development Company in Vadodara
            </span>

            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4"
              aria-label="Professional Web Development Services | TechStrota Vadodara"
            >
              Build{" "}
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Fast, Scalable
              </span>{" "}
              Websites
            </h1>

            <p className="text-gray-200 mb-8 text-lg">
              We design and develop high‑performance, SEO‑friendly websites
              using React, Next.js, Laravel, Node.js, and modern cloud
              infrastructure, helping businesses in Vadodara and India grow
              online.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="/contact"
                className="bg-gradient-to-r from-blue-500 to-cyan-500 px-6 py-3 rounded-xl text-white font-semibold shadow-lg hover:scale-105 transition-transform"
              >
                Get Free Consultation
              </a>
              <a
                href="/portfolio"
                className="border border-white/30 px-6 py-3 rounded-xl text-white hover:bg-white/10 transition"
              >
                View Portfolio
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </ScrollReveal>
  );
}

/* ================= PROCESS ================= */
function ProcessSection() {
  const steps = [
    "Requirement Analysis",
    "UI/UX Design",
    "Backend & Frontend Development",
    "Testing & QA",
    "Deployment & Support",
  ];

  return (
    <ScrollReveal className="py-20 bg-gradient-to-b from-[#020b1f] to-[#071a3a] text-white text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-2 text-blue-400">
        Our Web Development Process
      </h2>
      <p className="text-gray-300 mb-12 max-w-2xl mx-auto">
        From idea to live website, we follow a structured, transparent process
        that keeps clients in the loop and delivers reliable, maintainable code.
      </p>

      <ScrollRevealCards className="grid md:grid-cols-5 gap-4 max-w-7xl mx-auto px-6">
        {steps.map((step, i) => (
          <Card key={i} index={i}>
            <div className="text-cyan-400 font-bold mb-2 text-xl">0{i + 1}</div>
            <h3 className="font-semibold text-white">{step}</h3>
          </Card>
        ))}
      </ScrollRevealCards>
    </ScrollReveal>
  );
}

/* ================= TECH ================= */
function TechSection() {
  const techs = [
    "React",
    "Next.js",
    "Node.js",
    "Laravel",
    "MongoDB",
    "MySQL",
    "AWS / Cloud",
    "Docker / DevOps",
  ];

  return (
    <ScrollReveal className="py-20 bg-[#071a3a] text-white text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-2 text-cyan-400">
        Technologies We Use
      </h2>
      <p className="text-gray-300 mb-12 max-w-2xl mx-auto">
        We build modern, scalable web applications using industry‑leading tech
        stacks and best‑practice workflows for performance, security, and SEO.
      </p>

      <ScrollRevealCards className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto px-6">
        {techs.map((tech, i) => (
          <Card key={i} index={i}>
            <h3 className="font-semibold">{tech}</h3>
          </Card>
        ))}
      </ScrollRevealCards>
    </ScrollReveal>
  );
}

/* ================= WHY US ================= */
function WhyChooseUs() {
  const features = [
    "⚡ Blazing‑fast Performance",
    "🔐 Secure & Maintainable Code",
    "📱 Fully Responsive Designs",
    "🚀 SEO‑Optimized Websites",
    "📈 Growth‑Focused UX",
    "🛠️ Ongoing Support & Updates",
  ];

  return (
    <ScrollReveal className="py-20 bg-gradient-to-b from-[#071a3a] to-[#0f1e3f] text-white text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-2 text-blue-400">
        Why Choose TechStrota?
      </h2>
      <p className="text-gray-300 mb-12 max-w-2xl mx-auto">
        We don’t just build websites; we build growth‑focused digital products
        for businesses in Vadodara and beyond.
      </p>

      <ScrollRevealCards className="grid md:grid-cols-4 gap-4 max-w-7xl mx-auto px-6">
        {features.map((item, i) => (
          <Card key={i} index={i}>
            {item}
          </Card>
        ))}
      </ScrollRevealCards>
    </ScrollReveal>
  );
}

/* ================= CTA ================= */
function CTASection() {
  return (
    <ScrollReveal
      className="py-16 text-center bg-gradient-to-r from-blue-600 to-cyan-500 text-white"
      delay={0.2}
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-2">
        Ready to Build Your Website?
      </h2>
      <p className="mb-6 text-lg">
        TechStrota – web development company in Vadodara – can help you launch a
        fast, scalable, and SEO‑friendly website in weeks, not months.
      </p>
      <a
        href="/contact"
        className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold shadow-lg hover:scale-105 transition-transform"
      >
        Contact for a Free Quote
      </a>
    </ScrollReveal>
  );
}

/* ================= MAIN EXPORT ================= */
export default function Page() {
  return (
    <>
      {/* SEO structured data */}
      <StructuredData />

      {/* Hidden SEO heading */}
      <h1 className="sr-only">
        Web Development Services | TechStrota – Web Development Company in
        Vadodara
      </h1>
      <main className="font-sans" id="web-development-services">
        <HeroSection />
        <ProcessSection />
        <TechSection />
        <WhyChooseUs />
        <CTASection />
      </main>
    </>
  );
}
