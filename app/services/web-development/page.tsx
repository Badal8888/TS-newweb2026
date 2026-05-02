"use client";

import { motion } from "framer-motion";
import Link from "next/link";

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

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

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
  className,
}: {
  children: React.ReactNode;
  index: number;
  className?: string;
}) => (
  <motion.div
    variants={{
      hidden: { opacity: 0, y: 40 },
      visible: (i: number) => ({ opacity: 1, y: 0 }),
    }}
    custom={index}
    className={`bg-white/5 backdrop-blur-lg border border-amber-400/40 p-6 rounded-xl hover:scale-103 hover:shadow-blue-500/20 hover:border-amber-400 transition ${className || ""}`}
  >
    {children}
  </motion.div>
);

/* ================= HERO ================= */
function HeroSection() {
  return (
    <div className="relative z-10 py-10 sm:py-14 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-10">
        {/* LEFT SIDE - CONTENT */}
        <ScrollReveal
          delay={0.2}
          className="w-full md:w-1/2 text-center md:text-left"
        >
          <div className="inline-block px-4 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-sm font-medium mb-6">
            TechStrota – Web Development Company in Vadodara
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-6 tracking-tight leading-tight">
            Build <span className="text-blue-500">Fast, Scalable Websites</span>
          </h1>

          <p className="text-gray-400 text-lg sm:text-xl mb-8 leading-relaxed max-w-xl">
            We design and develop high-performance, SEO-friendly websites using
            modern technologies to help businesses grow online.
          </p>

          <motion.div
            variants={itemVariants}
            className="flex gap-4 flex-col sm:flex-row md:justify-start justify-center items-center"
          >
            <Link href="/contact" className="w-full sm:w-auto">
              <button className="bg-[#1374BB] hover:bg-[#0e5f99] text-white font-bold py-3 px-8 rounded-xl transition-colors w-full sm:w-auto shadow-[0_0_15px_rgba(19,116,187,0.2)]">
                Inquire Now
              </button>
            </Link>

            <Link href="/portfolio" className="w-full sm:w-auto">
              <button className="border-2 border-[#1374BB]/20 hover:border-[#1374BB] text-[#1374BB] font-bold py-3 px-8 rounded-xl transition-colors w-full sm:w-auto">
                View Portfolio
              </button>
            </Link>
          </motion.div>
        </ScrollReveal>

        {/* RIGHT SIDE - VIDEO */}
        <motion.div
          className="flex-1 w-full mt-8 lg:mt-0"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div
            className="relative group rounded-2xl overflow-hidden
            bg-[#0b1220]
            border border-blue-500/50
            shadow-[0_20px_60px_rgba(0,0,0,0.6)]
            aspect-video
            transition-all duration-500
            hover:shadow-[0_30px_80px_rgba(59,130,246,0.25)]
            hover:-translate-y-2"
          >
            <video
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity"
            >
              <source src="/services/web_development.mp4" type="video/mp4" />
            </video>
          </div>
        </motion.div>
      </div>
    </div>
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
    <ScrollReveal className="py-20 bg-transparent text-white text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-2 text-blue-400">
        Our Web Development Process
      </h2>
      <p className="text-gray-300 mb-12 max-w-2xl mx-auto">
        From idea to live website, we follow a structured, transparent process
        that keeps clients in the loop and delivers reliable, maintainable code.
      </p>

      <ScrollRevealCards className="grid md:grid-cols-5 gap-4 max-w-7xl mx-auto px-6">
        {steps.map((step, i) => (
          <Card
            key={i}
            index={i}
            className="border border-amber-400 rounded-xl backdrop-blur-md
            hover:border-amber-400 transition-all duration-300"
          >
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
    <ScrollReveal className="py-20 bg-transparent text-white text-center">
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
    <ScrollReveal className="py-20 bg-transparent text-white text-center">
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
      <Link
        href="/contact"
        className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold shadow-lg hover:scale-105 transition-transform"
      >
        Contact for a Free Quote
      </Link>
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
