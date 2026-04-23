"use client";

import { ReactNode, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  Target,
  Clapperboard,
  TrendingUp,
  Magnet,
  LineChart,
  CheckCircle2,
  Eye,
  MessageSquareHeart,
  MousePointerClick,
  Rocket,
  Smartphone,
  Images,
  Megaphone,
  MessageCircle,
  Video,
  ArrowRight,
  Share2,
  Heart,
  BarChart2,
} from "lucide-react";

import {
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaYoutube,
  FaXTwitter,
  FaGoogle,
  FaTiktok,
  FaWhatsapp,
  FaPhone,
  FaMeta,
} from "react-icons/fa6";

export default function SocialMediaServices() {
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
  const growthSystem = [
    {
      title: "Content Strategy",
      icon: <Target size={28} />,
      desc: "We plan what your audience actually wants to see",
      bullets: [
        "Niche-based content planning",
        "Competitor & trend research",
        "Monthly content calendar",
      ],
    },
    {
      title: "Content Creation",
      icon: <Clapperboard size={28} />,
      desc: "Content that stops scrolling and builds interest",
      bullets: [
        "Reels, carousels, short videos",
        "Hook-based captions",
        "Story-driven content",
      ],
    },
    {
      title: "Growth & Engagement",
      icon: <TrendingUp size={28} />,
      desc: "We don’t chase followers, we build real engagement",
      bullets: [
        "Comment & DM strategy",
        "Community interaction",
        "Audience targeting",
      ],
    },
    {
      title: "Lead Generation System",
      icon: <Magnet size={28} />,
      desc: "Turn followers into customers",
      bullets: [
        "WhatsApp & DM funnels",
        "Offer-based campaigns",
        "Landing page integration",
      ],
    },
    {
      title: "Performance Tracking",
      icon: <LineChart size={28} />,
      desc: "No guessing, only data",
      bullets: [
        "Reach, engagement & conversion",
        "Weekly insights",
        "Strategy optimization",
      ],
    },
  ];

  const expectations = [
    {
      title: "More profile visits",
      // UPDATED: Icon colors changed to amber
      icon: <Rocket className="text-amber-400" size={24} />,
    },
    {
      title: "Higher engagement on posts",
      icon: <MessageSquareHeart className="text-amber-400" size={24} />,
    },
    {
      title: "More DMs & inquiries",
      icon: <MousePointerClick className="text-amber-400" size={24} />,
    },
    {
      title: "Real leads and conversions",
      icon: <Target className="text-amber-400" size={24} />,
    },
  ];

  const contentTypes = [
    {
      title: "Reels & Short Videos",
      desc: "High reach content",
      icon: <Smartphone size={40} />,
    },
    {
      title: "Carousel Posts",
      desc: "Education + saves",
      icon: <Images size={40} />,
    },
    {
      title: "Ads Creatives",
      desc: "Conversion focused",
      icon: <Megaphone size={40} />,
    },
    {
      title: "Story Content",
      desc: "Daily engagement",
      icon: <MessageCircle size={40} />,
    },
    {
      title: "Brand Videos",
      desc: "Authority building",
      icon: <Video size={40} />,
    },
  ];

  const frameworkSteps = [
    {
      step: "01",
      title: "Strategy",
      desc: "In-depth data audit and architectural planning of your brand's vision.",
      color: "text-amber-400",
    },
    {
      step: "02",
      title: "Content",
      desc: "Elite editorial production including design, copywriting, and video.",
      color: "text-[#3ab0ff]",
    },
    {
      step: "03",
      title: "Launch",
      desc: "Surgical deployment across key nodes to maximize algorithmic impact.",
      color: "text-amber-400",
    },
    {
      step: "04",
      title: "Growth",
      desc: "Iterative optimization based on real-time intelligence feeds.",
      color: "text-[#3ab0ff]",
    },
  ];

  const pricingPlans = [
    {
      name: "STARTER",
      price: "7,999",
      features: [
        "12 Custom Posts",
        "4 Basic Reels",
        "Performance Reporting",
        "2 Platforms",
      ],
      highlight: false,
      nameColor: "text-[#8B95A5]",
      checkColor: "text-amber-400",
    },
    {
      name: "GROWTH",
      price: "14,999",
      badge: "MOST POPULAR",
      features: [
        "25 Premium Posts",
        "8 Cinematic Reels",
        "Ad Management (Basic)",
        "Automated Leads Funnel",
        "4 Platforms",
      ],
      highlight: true,
      nameColor: "text-amber-400",
      checkColor: "text-amber-400",
    },
    {
      name: "PREMIUM",
      price: "24,999",
      features: [
        "Daily Premium Posting",
        "15 Pro-Grade Reels",
        "Dedicated Brand Manager",
        "Influencer Outreach",
        "Unlimited Platforms",
      ],
      highlight: false,
      nameColor: "text-[#8B95A5]",
      checkColor: "text-[#3ab0ff]",
    },
  ];

  const intelligenceSuccess = [
    {
      stat: "Engagement: +420%",
      img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop",
      icon: (
        <Share2
          size={18}
          className="text-[#8B95A5] hover:text-white transition-colors cursor-pointer"
        />
      ),
    },
    {
      stat: "Reach: 1.2M",
      img: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=600&auto=format&fit=crop",
      icon: (
        <Heart
          size={18}
          className="text-[#8B95A5] hover:text-pink-500 transition-colors cursor-pointer"
        />
      ),
    },
    {
      stat: "Leads: 850+",
      img: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=600&auto=format&fit=crop",
      icon: (
        <Eye
          size={18}
          className="text-[#8B95A5] hover:text-[#3ab0ff] transition-colors cursor-pointer"
        />
      ),
    },
    {
      stat: "ROI: 12x",
      img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600&auto=format&fit=crop",
      icon: (
        <BarChart2
          size={18}
          className="text-[#8B95A5] hover:text-amber-400 transition-colors cursor-pointer"
        />
      ),
    },
  ];

  type FloatingIconProps = {
    children: ReactNode;
    className?: string;
    delay?: number;
    duration?: number;
  };

  const FloatingIcon = ({
    children,
    className,
    delay = 0,
    duration = 5,
  }: FloatingIconProps) => {
    const [isGone, setIsGone] = useState(false);

    const exitX = (Math.random() - 0.5) * 1500;
    const exitY = (Math.random() - 0.5) * 1500;

    return (
      <motion.div
        className={className}
        animate={
          isGone
            ? { x: exitX, y: exitY, opacity: 0, scale: 0.5 }
            : { y: [0, -20, 0] }
        }
        transition={
          isGone
            ? { duration: 1, ease: "backIn" }
            : {
                duration: duration,
                repeat: Infinity,
                ease: "easeInOut",
                delay: delay,
              }
        }
        onClick={() => setIsGone(true)}
        whileHover={{ scale: 1.1, cursor: "pointer" }}
        whileTap={{ scale: 0.9 }}
      >
        {children}
      </motion.div>
    );
  };

  return (
    <main className="bg-transparent text-white w-full overflow-hidden">
      {/* 1. HERO SECTION (Untouched) */}
      <section className="relative z-10 min-h-[100dvh] lg:h-screen w-full pt-20 pb-12 px-4 sm:px-6 flex items-center justify-center">
        <div className="w-full max-w-7xl flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-4">
          <motion.div
            className="flex-1 text-center lg:text-left"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants} className="mb-4">
              <span className="inline-flex px-4 py-1.5 rounded-full border border-[#1374BB]/30 bg-[#1374BB]/5 text-[#1374BB] text-xs font-bold uppercase tracking-wider shadow-[0_0_15px_rgba(19,116,187,0.2)]">
                Content & Social Strategy
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-white mb-6 leading-[1.1]"
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1374BB] to-[#3ab0ff]">
                Social Media
              </span>
              <br />
              Marketing
              <br />
              Services
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-[#8B95A5] text-base lg:text-lg max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed"
            >
              Grow your brand with powerful social media strategies on Facebook,
              Instagram, LinkedIn and Twitter. We help you increase engagement,
              build authority, and generate leads through targeted campaigns.
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
                <source src="/services/social_media.mp4" type="video/mp4" />
              </video>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 1.5 PLATFORMS WE MANAGE (Scattered & Floating Icons with Run-Away Effect) */}
      <section className="py-12 px-4 sm:px-6 w-full max-w-6xl mx-auto overflow-hidden">
        <div className="relative w-full h-[550px] md:h-[650px] flex items-center justify-center">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] bg-amber-400/10 blur-[100px] rounded-full pointer-events-none z-0"></div>

          {/* --- SCATTERED PLATFORM ICONS --- */}

          {/* 1. Instagram - Runs Top-Left */}
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            whileHover={{
              x: -120,
              y: -120,
              scale: 0.8,
              transition: { type: "spring", stiffness: 300 },
            }}
            className="absolute top-[8%] md:top-[10%] left-[8%] md:left-[12%] z-0 cursor-pointer group"
          >
            <div className="w-16 h-16 md:w-20 md:h-20 bg-[#0A1220] border border-white/5 rounded-2xl md:rounded-[1.5rem] flex items-center justify-center shadow-2xl transition-all group-hover:border-pink-500/50">
              <FaInstagram className="w-8 h-8 md:w-10 md:h-10 text-pink-500" />
            </div>
          </motion.div>

          {/* 2. Google - Runs Up */}
          <motion.div
            animate={{ y: [0, 15, 0] }}
            transition={{
              duration: 4.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
            whileHover={{ y: -180, scale: 0.7, transition: { type: "spring" } }}
            className="absolute top-[20%] md:top-[22%] left-[28%] md:left-[32%] z-10 cursor-pointer"
          >
            <div className="w-12 h-12 md:w-14 md:h-14 bg-[#0A1220] border border-white/5 rounded-2xl flex items-center justify-center shadow-2xl">
              <FaGoogle className="w-6 h-6 md:w-7 md:h-7 text-white" />
            </div>
          </motion.div>

          {/* 3. Meta - Runs Top-Right */}
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5,
            }}
            whileHover={{
              x: 140,
              y: -140,
              scale: 0.8,
              transition: { type: "spring" },
            }}
            className="absolute top-[10%] md:top-[12%] right-[22%] md:right-[25%] z-0 cursor-pointer group"
          >
            <div className="w-14 h-14 md:w-16 md:h-16 bg-[#0A1220] border border-white/5 rounded-2xl flex items-center justify-center shadow-2xl transition-all group-hover:border-blue-500/50">
              <FaMeta className="w-7 h-7 md:w-8 md:h-8 text-blue-500" />
            </div>
          </motion.div>

          {/* 4. Facebook - Runs Right */}
          <motion.div
            animate={{ y: [0, 25, 0] }}
            transition={{
              duration: 5.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2,
            }}
            whileHover={{
              x: 180,
              rotate: 15,
              scale: 0.6,
              transition: { type: "spring" },
            }}
            className="absolute top-[35%] md:top-[32%] right-[2%] md:right-[6%] z-20 cursor-pointer"
          >
            <div className="w-16 h-16 md:w-[84px] md:h-[84px] bg-[#0A1220] border border-white/5 rounded-2xl md:rounded-[1.5rem] flex items-center justify-center shadow-2xl">
              <FaFacebookF className="w-8 h-8 md:w-11 md:h-11 text-blue-600" />
            </div>
          </motion.div>

          {/* 5. TikTok - Runs Bottom-Right */}
          <motion.div
            animate={{ y: [0, -18, 0] }}
            transition={{
              duration: 4.8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1.5,
            }}
            whileHover={{
              x: 120,
              y: 120,
              scale: 0.7,
              transition: { type: "spring" },
            }}
            className="absolute bottom-[28%] md:bottom-[25%] right-[8%] md:right-[10%] z-0 cursor-pointer"
          >
            <div className="w-14 h-14 md:w-16 md:h-16 bg-[#0A1220] border border-white/5 rounded-2xl flex items-center justify-center shadow-2xl">
              <FaTiktok className="w-7 h-7 md:w-8 md:h-8 text-white" />
            </div>
          </motion.div>

          {/* 6. YouTube - Runs Down */}
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{
              duration: 5.2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.2,
            }}
            whileHover={{
              y: 150,
              opacity: 0.2,
              transition: { type: "spring" },
            }}
            className="absolute bottom-[10%] md:bottom-[12%] right-[18%] md:right-[26%] z-10 cursor-pointer group"
          >
            <div className="w-16 h-16 md:w-20 md:h-20 bg-[#0A1220] border border-white/5 rounded-2xl md:rounded-[1.5rem] flex items-center justify-center shadow-2xl transition-all group-hover:border-red-500/50">
              <FaYoutube className="w-8 h-8 md:w-10 md:h-10 text-red-500" />
            </div>
          </motion.div>

          {/* 7. WhatsApp - Runs Bottom */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{
              duration: 4.2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2.5,
            }}
            whileHover={{ y: 100, scale: 1.4, transition: { type: "spring" } }}
            className="absolute bottom-[5%] md:bottom-[6%] left-[50%] md:left-[55%] z-0 cursor-pointer"
          >
            <div className="w-12 h-12 md:w-14 md:h-14 bg-[#0A1220] border border-white/5 rounded-xl md:rounded-2xl flex items-center justify-center shadow-2xl transition-all group-hover:border-green-500/50">
              <FaWhatsapp className="w-6 h-6 md:w-7 md:h-7 text-green-500" />
            </div>
          </motion.div>

          {/* 8. Call - Runs Bottom-Left */}
          <motion.div
            animate={{ y: [0, 20, 0] }}
            transition={{
              duration: 5.8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1.2,
            }}
            whileHover={{
              x: -130,
              y: 130,
              scale: 0.5,
              transition: { type: "spring" },
            }}
            className="absolute bottom-[20%] md:bottom-[22%] left-[28%] md:left-[32%] z-10 cursor-pointer"
          >
            <div className="w-14 h-14 md:w-[72px] md:h-[72px] bg-[#0A1220] border border-white/5 rounded-xl md:rounded-2xl flex items-center justify-center shadow-2xl">
              <FaPhone className="w-6 h-6 md:w-8 md:h-8 text-emerald-400" />
            </div>
          </motion.div>

          {/* 9. LinkedIn - Runs Left */}
          <motion.div
            animate={{ y: [0, -22, 0] }}
            transition={{
              duration: 6.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.8,
            }}
            whileHover={{
              x: -200,
              rotate: -20,
              scale: 0.4,
              transition: { type: "spring" },
            }}
            className="absolute bottom-[10%] md:bottom-[14%] left-[6%] md:left-[10%] z-20 cursor-pointer"
          >
            <div className="w-16 h-16 md:w-24 md:h-24 bg-[#0A1220] border border-white/5 rounded-2xl md:rounded-[1.5rem] flex items-center justify-center shadow-2xl transition-all group-hover:border-blue-400/50">
              <FaLinkedinIn className="w-8 h-8 md:w-12 md:h-12 text-blue-400" />
            </div>
          </motion.div>

          {/* 10. Twitter/X - Runs Left */}
          <motion.div
            animate={{ y: [0, 15, 0] }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1.8,
            }}
            whileHover={{
              x: -150,
              opacity: 0.3,
              transition: { type: "spring" },
            }}
            className="absolute top-[40%] md:top-[45%] left-[2%] md:left-[4%] z-0 flex cursor-pointer"
          >
            <div className="w-14 h-14 md:w-16 md:h-16 bg-[#0A1220] border border-white/5 rounded-2xl flex items-center justify-center shadow-2xl">
              <FaXTwitter className="w-7 h-7 md:w-8 md:h-8 text-white" />
            </div>
          </motion.div>

          {/* --- CENTER CARD (Static) --- */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0, rotate: -8 }}
            whileInView={{ scale: 1, opacity: 1, rotate: -8 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: "spring" }}
            className="relative z-30 w-48 h-48 md:w-[240px] md:h-[240px] bg-gradient-to-br from-amber-300 to-amber-500 rounded-[2rem] shadow-[0_20px_60px_rgba(251,191,36,0.3)] flex items-center justify-center p-2.5 hover:rotate-0 hover:scale-105 transition-all duration-500 cursor-default"
          >
            <div className="w-full h-full bg-[#0A1222] rounded-[1.5rem] flex flex-col items-center justify-center text-center p-4 shadow-inner border border-amber-400/20">
              <h3 className="text-2xl md:text-3xl font-black text-white leading-tight">
                Platforms
                <br />
                <span className="text-amber-400">We Manage</span>
              </h3>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. HOW WE TURN CONTENT INTO CUSTOMERS (Updated to Yellow) */}
      <section className="relative py-12 md:py-20 px-4 sm:px-6 w-full max-w-7xl mx-auto border-t border-white/5 bg-transparent overflow-hidden">
        {/* Large background blur remains for depth */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-amber-400/10 blur-[150px] rounded-full pointer-events-none -z-10"></div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={scrollVariants}
          className="text-center mb-16 relative z-10"
        >
          <span className="text-[#FFC933] font-bold tracking-[0.3em] uppercase text-xs mb-4 block">
            How We Turn Content Into Customers
          </span>
          <h2 className="text-3xl md:text-6xl font-extrabold mb-6 tracking-tight leading-tight">
            We Don’t Just Post - <br className="hidden md:block" /> We Build a{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1374BB] to-[#3ab0ff]">
              Growth System
            </span>
          </h2>
          <p className="text-[#8B95A5] text-lg md:text-xl max-w-2xl mx-auto font-medium">
            Every post, reel, and campaign is designed to attract attention,
            build trust, and convert followers into leads.
          </p>
        </motion.div>

        {/* Dynamic 5-Item Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 relative z-10">
          {growthSystem.map((block, idx) => (
            <motion.div
              key={idx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={itemVariants}
              // MODIFIED: bg-white/[0.03], backdrop-blur-md, and softened edges
              className={`relative p-8 group transition-all duration-500 overflow-hidden
          bg-white/[0.03] backdrop-blur-md border border-white/10 rounded-3xl
          hover:bg-white/[0.07] hover:border-amber-400/40 hover:shadow-[0_20px_50px_rgba(251,191,36,0.1)]
          ${idx < 3 ? "lg:col-span-2" : "lg:col-span-3"}`}
            >
              {/* Subtle internal glass glow on hover */}
              <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-32 h-32 bg-blue-500/5 blur-[80px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="flex items-center gap-4 mb-6 relative z-10">
                {/* Icon Container with Glass-in-Glass effect */}
                <div className="bg-white/5 border border-white/10 text-[#1374BB] p-4 rounded-2xl group-hover:bg-[#1374BB] group-hover:text-white group-hover:scale-110 transition-all duration-500 shadow-inner">
                  <div className="drop-shadow-[0_0_8px_rgba(19,116,187,0.4)]">
                    {block.icon}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                    {block.title}
                  </h3>
                  <p className="text-[#8B95A5] text-xs font-bold uppercase tracking-wider mt-1">
                    {block.desc}
                  </p>
                </div>
              </div>

              <ul className="space-y-4 mt-6 pt-6 border-t border-white/10 relative z-10">
                {block.bullets.map((bullet, bIdx) => (
                  <li
                    key={bIdx}
                    className="flex items-start gap-3 text-white/80 group/list"
                  >
                    <CheckCircle2
                      size={18}
                      className="text-amber-400 mt-0.5 shrink-0 transition-transform group-hover/list:scale-125"
                    />
                    <span className="text-sm md:text-base font-medium group-hover/list:text-white transition-colors">
                      {bullet}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 2.5 OUR FRAMEWORK */}
      <section className="py-24 px-4 sm:px-6 w-full max-w-7xl mx-auto border-t border-white/5">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={scrollVariants}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">
            Our Framework
          </h2>
        </motion.div>

        <div className="relative flex flex-col md:flex-row justify-between gap-12 md:gap-4 mt-4">
          {/* Connecting Line for Desktop */}
          {/* Positioned exactly halfway down the 5rem (h-20) number boxes */}
          <div className="hidden md:block absolute top-10 left-[10%] right-[10%] h-[1px] bg-white/10 z-0"></div>

          {frameworkSteps.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="relative z-10 flex-1 flex flex-col items-center text-center group"
            >
              {/* Number Box matching the image design */}
              <div className="w-20 h-20 rounded-2xl bg-[#091122] border border-amber-400/50 flex items-center justify-center text-xl font-bold mb-6 shadow-[0_10px_30px_rgba(0,0,0,0.5)] group-hover:-translate-y-1 transition-all duration-300">
                <span className={item.color}>{item.step}</span>
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold mb-3 text-white">
                {item.title}
              </h3>
              <p className="text-[#8B95A5] text-md font-bold max-w-[240px] leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 3. WHAT YOU'LL START SEEING (Updated to Yellow) */}
      <section className="py-6 px-4 sm:px-6 w-full max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={scrollVariants}
          className="relative bg-[#091122]/50 border border-amber-400/30 rounded-3xl p-8 md:p-12 backdrop-blur-sm overflow-hidden"
        >
          {/* UPDATED: Background gradient to Amber */}
          <div className="absolute inset-0 bg-gradient-to-r from-amber-400/10 via-transparent to-amber-400/10 opacity-50"></div>

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="lg:w-1/3 text-center lg:text-left">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                What You’ll <span className="text-[#1374BB]">Start Seeing</span>
              </h3>
              <p className="text-[#8B95A5]">
                The tangible results of our growth system.
              </p>
            </div>

            <div className="lg:w-2/3 grid grid-cols-2 md:grid-cols-4 gap-6 w-full">
              {expectations.map((item, idx) => (
                <div
                  key={idx}
                  className="flex flex-col items-center text-center gap-3"
                >
                  {/* UPDATED: Added subtle Amber border to circles */}
                  <div className="bg-[#040A15] p-4 rounded-full border border-amber-400/20 shadow-[0_0_15px_rgba(251,191,36,0.1)]">
                    {item.icon}
                  </div>
                  <span className="text-sm font-semibold text-white/90">
                    {item.title}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* 4. CONTENT TYPES WE CREATE (Updated to Yellow) */}
      <section className="relative z-10 py-10 md:py-20 px-4 sm:px-6 w-full max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={scrollVariants}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4 tracking-tight text-white leading-tight">
            Content That Works on{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1374BB] to-[#3ab0ff]">
              Every Platform
            </span>
          </h2>
          <p className="text-[#8B95A5] text-lg md:text-xl max-w-2xl mx-auto font-medium">
            Visually stunning, highly engaging formats tailored for your
            specific goals.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6">
          {contentTypes.map((type, idx) => (
            <motion.div
              key={idx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={itemVariants}
              // MODIFIED: Added bg-white/[0.03], backdrop-blur-md, and updated border logic
              className={`relative overflow-hidden transition-all duration-500 group p-8 rounded-[2rem]
          bg-white/[0.03] backdrop-blur-md border border-amber-400/40 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)]
          hover:bg-white/[0.08] hover:border-amber-400/40 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(251,191,36,0.1)] 
          ${idx < 3 ? "lg:col-span-2" : "lg:col-span-3"}`}
            >
              {/* Etched Watermark Icon - Glows amber behind the glass on hover */}
              <div className="absolute -right-6 -bottom-6 text-white/[0.03] group-hover:text-amber-400/10 group-hover:scale-125 transition-all duration-700 pointer-events-none transform rotate-12">
                <div className="scale-[2.5]">{type.icon}</div>
              </div>

              <div className="relative z-10">
                {/* Main Icon Container - Glass-in-Glass effect */}
                <div className="inline-flex p-3 rounded-2xl bg-white/5 border border-white/10 text-amber-400 mb-6 shadow-inner group-hover:scale-110 group-hover:bg-amber-400/10 transition-all duration-300">
                  <div className="drop-shadow-[0_0_8px_rgba(251,191,36,0.5)]">
                    {type.icon}
                  </div>
                </div>

                <h4 className="text-2xl font-bold text-white mb-3 tracking-tight">
                  {type.title}
                </h4>

                <p className="text-[#8B95A5] font-medium inline-flex items-center gap-2.5 transition-colors group-hover:text-gray-300">
                  {/* Pulsing amber bullet point */}
                  <span className="w-2 h-2 rounded-full bg-amber-400 shadow-[0_0_10px_rgba(251,191,36,0.8)] animate-pulse"></span>
                  {type.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 4.5 INVESTMENT TIERS (Pricing) */}
      <section className="py-10 px-4 sm:px-6 w-full max-w-7xl mx-auto border-t border-white/5">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={scrollVariants}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight text-white">
            Investment Tiers
          </h2>
          <p className="text-[#8B95A5] text-sm md:text-base">
            Engineered for every stage of your brand&apos;s evolution.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-center pt-8">
          {pricingPlans.map((plan, idx) => (
            <motion.div
              key={idx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={itemVariants}
              className={`relative flex flex-col rounded-3xl p-8 transition-all duration-300 ${
                plan.highlight
                  ? "bg-[#091122] border border-amber-400/50 shadow-[0_0_40px_rgba(251,191,36,0.15)] md:-mt-8 md:mb-8 z-10"
                  : "bg-[#091122] border border-white/5 hover:border-white/10"
              }`}
            >
              {/* Optional Badge for Highlighted Plan */}
              {plan.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-amber-400 text-[#040A15] text-[10px] font-bold uppercase tracking-widest py-1 px-4 rounded-full">
                  {plan.badge}
                </div>
              )}

              <div className="mb-8">
                <h4
                  className={`text-xs font-bold tracking-widest uppercase mb-4 ${plan.nameColor}`}
                >
                  {plan.name}
                </h4>
              </div>

              <ul className="space-y-4 mb-10 flex-1">
                {plan.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-start gap-3">
                    <CheckCircle2
                      size={18}
                      className={`${plan.checkColor} shrink-0 mt-0.5`}
                    />
                    <span className="text-sm text-white/90">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3.5 rounded-xl font-bold text-sm transition-all duration-300 ${
                  plan.highlight
                    ? "bg-amber-400 hover:bg-amber-500 text-[#040A15] shadow-[0_0_20px_rgba(251,191,36,0.4)]"
                    : "bg-transparent border border-white/10 text-white hover:bg-white/5"
                }`}
              >
                Select Plan
              </button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 4.8 RECENT INTELLIGENCE SUCCESS */}
      <section className="py-20 px-4 sm:px-6 w-full max-w-7xl mx-auto border-t border-white/5">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={scrollVariants}
          className="mb-10 text-center md:text-left pl-2"
        >
          <h2 className="text-2xl md:text-4xl font-bold tracking-tight text-white">
            Recent Intelligence Success
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {intelligenceSuccess.map((item, idx) => (
            <motion.div
              key={idx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={itemVariants}
              className="bg-[#0A1220] border border-white/5 rounded-[1.5rem] p-4 flex flex-col group hover:border-amber-400/20 transition-all duration-300 hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
            >
              {/* Image Container */}
              <div className="w-full aspect-[4/5] rounded-[1rem] overflow-hidden mb-5 relative bg-[#040A15]">
                <img
                  src={item.img}
                  alt={item.stat}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out opacity-80 group-hover:opacity-100"
                />
                {/* Subtle inner shadow overlay to blend image borders */}
                <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-[1rem]"></div>
              </div>

              {/* Bottom Row: Stat & Icon */}
              <div className="flex items-center justify-between px-1 mt-auto">
                <span className="text-amber-500 font-bold text-sm tracking-wide">
                  {item.stat}
                </span>
                <div>{item.icon}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 5. FINAL CTA (Untouched) */}
      <section className="w-full py-12 md:py-20 px-4 sm:px-6 relative overflow-hidden">
        {/* Decorative background glow to enhance the frost effect */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/5 blur-[120px] pointer-events-none"></div>

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
          {/* Amber Internal Glow - Frosted through the glass */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-[600px] bg-amber-400/[0.08] rounded-full blur-[100px] pointer-events-none"></div>

          <div className="relative z-10">
            <h2 className="text-3xl md:text-6xl font-extrabold mb-8 tracking-tight leading-tight text-white">
              Want content that{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1374BB] to-[#3ab0ff]">
                actually brings leads?
              </span>
            </h2>

            <Link href="/contact">
              <button className="group relative bg-[#1374BB] hover:bg-[#0e5f99] text-white font-bold text-lg py-4 px-12 rounded-xl transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-[0_10px_30px_-10px_rgba(19,116,187,0.5)] overflow-hidden">
                {/* Subtle button shine effect */}
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></span>
                Let&apos;s Build Your Strategy
              </button>
            </Link>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
