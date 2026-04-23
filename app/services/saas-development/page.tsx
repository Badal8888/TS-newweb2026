"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Blocks,
  ShieldCheck,
  LayoutDashboard,
  CreditCard,
  Webhook,
  Cloud,
  Lightbulb,
  PenTool,
  Code2,
  TestTube2,
  Rocket,
  Repeat,
  Users,
  Bell,
  DatabaseBackup,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

export default function SaaSServices() {
  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const scrollVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  // Data Arrays
  const deliverables = [
    {
      title: "Custom SaaS Applications",
      desc: "Built from scratch based on your business model.",
      icon: <Blocks size={28} />,
    },
    {
      title: "Secure Multi-Tenant Systems",
      desc: "Handle multiple users & data safely and efficiently.",
      icon: <ShieldCheck size={28} />,
    },
    {
      title: "Admin Dashboards & Analytics",
      desc: "Full control with actionable data insights.",
      icon: <LayoutDashboard size={28} />,
    },
    {
      title: "Subscription & Payments",
      desc: "Stripe, Razorpay, and recurring billing integration.",
      icon: <CreditCard size={28} />,
    },
    {
      title: "API & 3rd-Party Integrations",
      desc: "Connect CRM, payment, and automation tools.",
      icon: <Webhook size={28} />,
    },
    {
      title: "Cloud Deployment & Scaling",
      desc: "AWS, server optimization, and auto-scaling.",
      icon: <Cloud size={28} />,
    },
  ];

  const processSteps = [
    {
      step: "01",
      title: "Idea Validation & Planning",
      icon: <Lightbulb size={24} />,
    },
    {
      step: "02",
      title: "Prototyping & UX Design",
      icon: <PenTool size={24} />,
    },
    {
      step: "03",
      title: "Development (Front & Back)",
      icon: <Code2 size={24} />,
    },
    {
      step: "04",
      title: "Testing & Optimization",
      icon: <TestTube2 size={24} />,
    },
    { step: "05", title: "Launch & Deployment", icon: <Rocket size={24} /> },
    {
      step: "06",
      title: "Ongoing Support & Scaling",
      icon: <Repeat size={24} />,
    },
  ];

  const features = [
    { title: "User Authentication & Roles", icon: <Users size={20} /> },
    { title: "Subscription Plans & Billing", icon: <CreditCard size={20} /> },
    { title: "Real-time Notifications", icon: <Bell size={20} /> },
    {
      title: "Dashboard & Custom Reports",
      icon: <LayoutDashboard size={20} />,
    },
    { title: "Data Security & Backup", icon: <DatabaseBackup size={20} /> },
    { title: "Secure API Access", icon: <Webhook size={20} /> },
  ];

  return (
    <main className="bg-transparent text-white w-full overflow-hidden">
      {/* 1. HERO SECTION (Original) */}
      <section className="min-h-[100dvh] lg:h-screen w-full pt-20 pb-12 px-4 sm:px-6 flex items-center justify-center relative">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#1374BB]/10 blur-[150px] rounded-full pointer-events-none"></div>
        <div className="w-full max-w-7xl flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-4 relative z-10">
          <motion.div
            className="flex-1 text-center lg:text-left"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants} className="mb-4">
              <span className="inline-flex px-4 py-1.5 rounded-full border border-[#1374BB]/30 bg-[#1374BB]/5 text-[#1374BB] text-xs font-bold uppercase tracking-wider shadow-[0_0_15px_rgba(19,116,187,0.2)]">
                Launch Your SaaS Platform
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-white mb-6 leading-[1.1]"
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1374BB] to-[#3ab0ff]">
                SaaS
              </span>
              <br />
              Development
              <br />
              Services
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-[#8B95A5] text-base lg:text-lg max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed"
            >
              Our SaaS development services empower businesses to build
              scalable, secure, and user-friendly software products. From idea
              to launch, we create custom SaaS solutions that drive growth and
              deliver seamless user experiences.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex gap-4 flex-col sm:flex-row justify-center lg:justify-start"
            >
              <Link href="/contact">
                <button className="w-full sm:w-auto bg-[#1374BB] hover:bg-[#0f5c96] transition-colors text-white font-bold py-3.5 px-8 rounded-xl shadow-[0_4px_20px_rgba(19,116,187,0.3)]">
                  Inquire Now
                </button>
              </Link>

              <Link href="/portfolio">
                <button className="w-full sm:w-auto border-2 border-[#1374BB]/30 hover:border-[#1374BB] hover:bg-[#1374BB]/10 transition-all text-[#1374BB] font-bold py-3.5 px-8 rounded-xl">
                  View Portfolio
                </button>
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            className="flex-1 w-full"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="rounded-2xl overflow-hidden border border-[#1374BB]/20 bg-[#091122] aspect-video relative group">
              <div className="absolute inset-0 bg-[#1374BB]/10 group-hover:bg-transparent transition-colors z-10 pointer-events-none"></div>
              <video
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover scale-[1.02]"
              >
                <source src="/services/Saas.mp4" type="video/mp4" />
              </video>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. WHAT WE BUILD FOR YOU (Deliverables Grid) */}
      <section className="py-24 px-4 sm:px-6 w-full max-w-7xl mx-auto border-t border-white/5 bg-transparent relative overflow-hidden">
        {/* Optional: Background decorative glow to make the glass pop */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#1374BB]/5 blur-[120px] pointer-events-none -z-10"></div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={scrollVariants}
          className="text-center mb-16 relative z-10"
        >
          <span className="text-[#1374BB] font-bold tracking-[0.3em] uppercase text-xs mb-4 block">
            What We Build for You
          </span>
          <h2 className="text-3xl md:text-6xl font-extrabold mb-6 tracking-tight leading-tight">
            From Idea to Scalable{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1374BB] to-[#3ab0ff]">
              SaaS Product
            </span>
          </h2>
          <p className="text-[#8B95A5] text-lg md:text-xl max-w-2xl mx-auto font-medium">
            We deliver complete, production-ready systems tailored to your
            unique business model, not just vague promises.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {deliverables.map((item, idx) => (
            <motion.div
              key={idx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={itemVariants}
              // MODIFIED: bg-white/[0.03], backdrop-blur-md, and softened border
              className="relative group p-8 rounded-[2.5rem] transition-all duration-500 overflow-hidden flex flex-col
          bg-white/[0.03] backdrop-blur-md border border-amber-400/40 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)]
          hover:bg-white/[0.08] hover:-translate-y-2 hover:shadow-[#1374BB]/20"
            >
              {/* Internal Glow Effect */}
              <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-32 h-32 bg-[#1374BB]/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Icon Container - Glass-in-Glass effect */}
              <div className="text-[#1374BB] mb-8 bg-white/5 border border-white/10 inline-flex w-fit p-4 rounded-2xl group-hover:bg-[#1374BB] group-hover:text-white group-hover:scale-110 transition-all duration-500 shadow-inner">
                <div className="drop-shadow-[0_0_8px_rgba(19,116,187,0.4)]">
                  {item.icon}
                </div>
              </div>

              <h3 className="text-2xl font-bold text-white mb-4 tracking-tight group-hover:text-[#3ab0ff] transition-colors">
                {item.title}
              </h3>

              <p className="text-[#8B95A5] leading-relaxed group-hover:text-gray-300 transition-colors">
                {item.desc}
              </p>

              {/* Subtle decorative edge light */}
              <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#1374BB]/20 to-transparent"></div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 3. HOW WE BUILD YOUR SAAS (Process Timeline) */}
      <section className="py-10 px-4 sm:px-6 w-full max-w-7xl mx-auto relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#1374BB]/5 blur-[120px] rounded-full pointer-events-none -z-10"></div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={scrollVariants}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            A Clear <span className="text-[#1374BB]">Development Process</span>
          </h2>
          <p className="text-[#8B95A5] max-w-2xl mx-auto">
            We eliminate confusion with a transparent, step-by-step roadmap to
            launch.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {processSteps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="flex items-start gap-5 relative group"
            >
              {/* Connector line for desktop (except last item in rows) */}
              {(idx + 1) % 3 !== 0 && (
                <div className="hidden lg:block absolute top-6 left-[4.5rem] w-[calc(100%-4rem)] h-[1px] bg-gradient-to-r from-[#1374BB]/30 to-transparent z-0"></div>
              )}

              <div className="relative z-10 flex flex-col items-center gap-2">
                <div className="w-12 h-12 rounded-xl bg-[#040A15] border border-[#1374BB]/50 text-[#3ab0ff] flex items-center justify-center font-black text-lg group-hover:bg-[#1374BB] group-hover:text-white transition-colors duration-300 shadow-[0_0_15px_rgba(19,116,187,0.2)]">
                  {step.step}
                </div>
              </div>

              <div className="pt-2 relative z-10">
                <div className="flex items-center gap-2 text-white/90 mb-1">
                  <span className="text-[#8B95A5] group-hover:text-[#3ab0ff] transition-colors">
                    {step.icon}
                  </span>
                  <h4 className="text-xl font-bold">{step.title}</h4>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 4. SAAS FEATURES YOU GET */}
      <section className="py-20 rounded-xl px-4 sm:px-6 w-full max-w-6xl mx-auto relative overflow-hidden">
        {/* Optional: Background decorative glow to make the frosting visible */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#1374BB]/10 blur-[120px] rounded-full pointer-events-none -z-10"></div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={scrollVariants}
          className="relative overflow-hidden rounded-[2.5rem] p-8 md:p-14 shadow-2xl transition-all duration-500
          /* GLASS EFFECT START */
          bg-white/[0.03] backdrop-blur-xl border border-amber-400/40 
          /* GLASS EFFECT END */"
        >
          {/* Noise Texture Over Glass */}
          <div className="absolute inset-0 opacity-10 mix-blend-soft-light pointer-events-none"></div>

          <div className="text-center mb-12 relative z-10">
            <h2 className="text-3xl md:text-5xl font-extrabold mb-4 tracking-tight leading-tight">
              Built for{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1374BB] to-[#3ab0ff]">
                Growth & Performance
              </span>
            </h2>
            <p className="text-[#8B95A5] text-lg md:text-xl max-w-2xl mx-auto font-medium">
              Your SaaS comes equipped with the core features needed to scale
              from day one.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-4 relative z-10">
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                // Internal "Glass-on-Glass" items
                className="flex items-center gap-4 p-4 rounded-2xl transition-all duration-300
            bg-white/5 border border-amber-400/40 backdrop-blur-sm
            hover:bg-white/10 hover:translate-x-1 shadow-inner"
              >
                {/* Icon Container */}
                <div className="text-[#3ab0ff] bg-[#1374BB]/10 p-2.5 rounded-xl group-hover:scale-110 transition-transform shadow-lg">
                  <div className="drop-shadow-[0_0_8px_rgba(19,116,187,0.4)]">
                    {feature.icon}
                  </div>
                </div>
                <span className="text-white/90 font-bold tracking-tight text-sm md:text-base">
                  {feature.title}
                </span>
              </motion.div>
            ))}
          </div>

          {/* Subtle bottom accent light */}
          <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#1374BB]/20 to-transparent"></div>
        </motion.div>
      </section>

      {/* 5. FINAL CTA */}
      <section className="w-full py-12 md:py-20 px-4 sm:px-6 relative overflow-hidden">
        {/* Optional: Deep background glow to enhance the frost effect */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/5 blur-[120px] pointer-events-none"></div>

        <motion.div
          className="max-w-5xl mx-auto p-10 md:p-16 text-center relative overflow-hidden rounded-[2.5rem]
      /* GLASS EFFECT START */
      bg-white/[0.03] backdrop-blur-xl border border-amber-400/40 
      shadow-[0_20px_50px_rgba(0,0,0,0.3)]
      /* GLASS EFFECT END */"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
        >
          {/* Amber Internal Glow - Softened for the glass look */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-[600px] bg-amber-400/[0.08] rounded-full blur-[100px] pointer-events-none"></div>

          <div className="relative z-10">
            {/* Heading */}
            <h2 className="text-3xl md:text-6xl font-extrabold mb-8 tracking-tight leading-tight text-white">
              Ready to turn your idea{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1374BB] to-[#3ab0ff]">
                into a SaaS product?
              </span>
            </h2>

            <Link href="/contact">
              <button className="group relative bg-[#1374BB] hover:bg-[#0e5f99] text-white font-bold text-lg py-4 px-12 rounded-xl transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-[0_10px_30px_-10px_rgba(19,116,187,0.5)] overflow-hidden">
                {/* Subtle button shine effect */}
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></span>
                Start Building Today
              </button>
            </Link>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
