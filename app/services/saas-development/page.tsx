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
    <main className="bg-[#040A15] text-white w-full overflow-hidden">
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
      <section className="py-24 px-4 sm:px-6 w-full max-w-7xl mx-auto border-t border-white/5">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={scrollVariants}
          className="text-center mb-16"
        >
          <span className="text-[#1374BB] font-semibold tracking-wider uppercase text-sm mb-3 block">
            What We Build for You
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
            From Idea to Scalable{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1374BB] to-[#3ab0ff]">
              SaaS Product
            </span>
          </h2>
          <p className="text-[#8B95A5] text-lg max-w-2xl mx-auto">
            We deliver complete, production-ready systems tailored to your
            unique business model, not just vague promises.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {deliverables.map((item, idx) => (
            <motion.div
              key={idx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={itemVariants}
              className="bg-gradient-to-br from-[#091122] to-[#040A15] border border-white/5 hover:border-[#1374BB]/50 rounded-[2rem] p-8 group transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#1374BB] rounded-full blur-[80px] opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>

              <div className="text-[#1374BB] mb-6 bg-[#1374BB]/10 inline-flex p-4 rounded-2xl group-hover:bg-[#1374BB] group-hover:text-white group-hover:scale-110 transition-all duration-300 shadow-inner">
                {item.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-3 tracking-tight">
                {item.title}
              </h3>
              <p className="text-[#8B95A5] leading-relaxed">{item.desc}</p>
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
      <section className="py-20 px-4 sm:px-6 w-full max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={scrollVariants}
          className="bg-gradient-to-br from-[#091122] to-[#040A15] border border-white/5 rounded-[2.5rem] p-8 md:p-14 shadow-2xl relative overflow-hidden"
        >
          {/* Decorative background grid */}
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-soft-light pointer-events-none"></div>

          <div className="text-center mb-12 relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Built for{" "}
              <span className="text-[#1374BB]">Growth & Performance</span>
            </h2>
            <p className="text-[#8B95A5] max-w-2xl mx-auto">
              Your SaaS comes equipped with the core features needed to scale
              from day one.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-6 relative z-10">
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex items-center gap-4 bg-[#040A15]/50 border border-white/5 p-4 rounded-xl hover:border-[#1374BB]/30 hover:bg-[#1374BB]/5 transition-all"
              >
                <div className="text-[#3ab0ff] bg-[#1374BB]/10 p-2 rounded-lg">
                  {feature.icon}
                </div>
                <span className="text-white/90 font-medium">
                  {feature.title}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* 5. FINAL CTA */}
      <section className="w-full py-10 px-4 sm:px-6">
        {/* UPDATED: Card border changed to Amber */}
        <motion.div
          className="max-w-5xl mx-auto bg-[#091122] rounded-[2rem] border border-amber-400/30 p-10 md:p-16 text-center relative overflow-hidden"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
        >
          {/* Background Glow - UPDATED to Amber */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-[600px] bg-amber-400/10 rounded-full blur-[80px] pointer-events-none"></div>

          <div className="relative z-10">
            {/* Heading - Text remains Blue */}
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight">
              Ready to turn your idea{" "}
              <span className="text-[#1374BB]">into a SaaS product?</span>
            </h2>
            <Link href="/contact">
              {/* UPDATED: Button shadow color changed to Yellow/Amber, Text remains White */}
              <button className="bg-[#1374BB] hover:bg-[#0e5f99] text-white font-bold text-lg py-4 px-10 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-[0_0_20px_rgba(251,191,36,0.4)]">
                Start Building Today
              </button>
            </Link>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
