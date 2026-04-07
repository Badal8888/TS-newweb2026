"use client";

import Link from "next/link";
import Image from "next/image";

export default function HeroSection() {
  const processSteps = [
    {
      title: "Requirement Gathering",
      description:
        "We understand your business model, products, and goals to build the right eCommerce solution.",
    },
    {
      title: "UI/UX Planning",
      description:
        "We design a smooth and user-friendly shopping experience for better conversions.",
    },
    {
      title: "Development",
      description:
        "We develop fast, secure, and scalable eCommerce websites using modern technologies.",
    },
    {
      title: "Payment Integration",
      description:
        "We integrate Razorpay, Stripe, PayPal and other secure payment gateways.",
    },
    {
      title: "Testing",
      description:
        "We test performance, responsiveness, and checkout flow before launch.",
    },
    {
      title: "Launch & Support",
      description:
        "We launch your website and provide ongoing support and maintenance.",
    },
  ];

  const features = [
    "Custom eCommerce website design",
    "Mobile responsive store",
    "SEO-friendly pages",
    "Shopping cart & checkout",
    "Secure payment integration",
    "Inventory management",
    "Shipping setup",
    "Admin dashboard",
  ];

  return (
    <main className="bg-[#020b1f]">
      {/* HERO */}
      <section className="py-5 px-6 flex justify-center">
        <div className="w-full max-w-6xl">
          <div className="relative rounded-2xl overflow-hidden border border-blue-600/60 shadow-2xl">
            <video autoPlay loop playsInline controls className="w-full">
              <source src="/services/E-commerce.mp4" type="video/mp4" />
            </video>

            <div className="hidden md:flex absolute inset-0 bg-black/40 items-center justify-center text-center px-6">
              <div className="max-w-3xl">
                <h1 className="text-5xl font-bold text-white mb-4">
                  Best IT Company in Vadodara for E-commerce Development
                </h1>

                <p className="text-gray-200 text-lg">
                  TechStrota provides professional eCommerce website development
                  services in Vadodara, Gujarat.
                </p>
              </div>
            </div>
          </div>

          {/* MOBILE */}
          <div className="md:hidden text-center mt-6 px-4">
            <h1 className="text-2xl font-bold text-white mb-3">
              E-commerce Development Services
            </h1>
            <p className="text-gray-300 text-sm">
              We build powerful online stores with modern UI and SEO
              optimization.
            </p>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="px-6 py-14 flex justify-center">
        <div className="max-w-6xl w-full">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-10">
            Our eCommerce Development Process
          </h2>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
            {processSteps.map((step, i) => (
              <div
                key={i}
                className="group relative rounded-2xl border border-white/10 bg-[#0b122c] p-6 shadow-xl 
                transition-all duration-300 hover:-translate-y-2 hover:scale-[1.04] hover:border-blue-500/40"
              >
                <div className="absolute inset-0 rounded-2xl bg-blue-500/10 opacity-0 group-hover:opacity-100 blur-xl transition duration-300" />

                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-full bg-blue-600/20 text-blue-400 flex items-center justify-center font-bold mb-4">
                    {i + 1}
                  </div>

                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-400 transition">
                    {step.title}
                  </h3>

                  <p className="text-gray-300 text-sm">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES + WHY */}
      <section className="px-6 py-14 flex justify-center">
        <div className="max-w-6xl w-full grid lg:grid-cols-2 gap-8">
          {/* FEATURES */}
          <div className="rounded-2xl border border-white/10 bg-[#0b122c] p-8 shadow-xl">
            <h2 className="text-3xl font-bold text-white mb-6">
              eCommerce Features
            </h2>

            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((item, i) => (
                <div
                  key={i}
                  className="px-4 py-3 rounded-xl bg-white/5 border border-white/10 
                  hover:border-blue-400 hover:bg-blue-500/10 hover:text-blue-400 transition-all duration-300"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* WHY TECHSTROTA */}
          <div className="group relative rounded-2xl border border-white/10 bg-[#0b122c] p-8 shadow-xl hover:shadow-blue-500/20 transition-all duration-300">
            <div className="absolute inset-0 rounded-2xl bg-blue-500/10 opacity-0 group-hover:opacity-100 blur-xl transition duration-300" />

            <div className="relative z-10 text-center">
              <div className="flex justify-center mb-6">
                <Image
                  src="/logo.png"
                  alt="TechStrota Vadodara IT Company"
                  width={220}
                  height={100}
                />
              </div>

              <h2 className="text-3xl font-bold text-white mb-5">
                Why Choose TechStrota
              </h2>

              <p className="text-gray-300 mb-4">
                TechStrota is a leading{" "}
                <Link href="/" className="text-blue-400 hover:underline">
                  IT company in Vadodara
                </Link>{" "}
                providing modern eCommerce solutions.
              </p>

              <p className="text-gray-300 mb-6">
                We specialize in{" "}
                <Link
                  href="/services/ecommerce"
                  className="text-blue-400 hover:underline"
                >
                  eCommerce development
                </Link>{" "}
                and{" "}
                <Link
                  href="/services/web-development"
                  className="text-blue-400 hover:underline"
                >
                  web development services
                </Link>
                .
              </p>

              <div className="flex justify-center gap-4 flex-wrap">
                <Link
                  href="/contact"
                  className="px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg"
                >
                  Contact Us
                </Link>

                <Link
                  href="/portfolio"
                  className="px-5 py-2 border border-white/20 hover:border-blue-400 rounded-lg text-white"
                >
                  Portfolio
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL SEO */}
      <section className="px-6 pb-16 flex justify-center">
        <div className="max-w-5xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Professional eCommerce Development in Vadodara
          </h2>

          <p className="text-gray-300 leading-8">
            TechStrota offers complete eCommerce website development services
            including design, development, payment integration, and support.
          </p>
        </div>
      </section>
    </main>
  );
}
