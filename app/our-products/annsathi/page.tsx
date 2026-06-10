"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  FaArrowLeft,
  FaQrcode,
  FaUtensils,
  FaHotel,
  FaLink,
  FaBoxes,
  FaChartLine,
  FaCheckCircle,
  FaPlay,
  FaBicycle,
  FaConciergeBell,
  FaKey,
  FaServer,
  FaCode,
  FaGitAlt,
  FaLaptopCode,
  FaClipboardList,
  FaUserShield,
  FaStore,
  FaRoute,
  FaCogs,
  FaConciergeBell as FaWaiter,
  FaShieldAlt,
  FaExclamationTriangle,
  FaLock,
  FaCreditCard,
  FaWarehouse,
  FaLayerGroup,
  FaCashRegister,
  FaUsers,
  FaMobileAlt,
  FaChartPie,
  FaHistory,
  FaClock,
  FaCertificate,
  FaEye,
} from "react-icons/fa";
import {
  SiReact,
  SiLaravel,
  SiPostgresql,
  SiRedis,
  SiTailwindcss,
  SiTypescript,
  SiPostman,
  SiExpo,
  SiAlpinedotjs,
  SiMysql,
} from "react-icons/si";

// Ultra-shortened core modules data configuration
const coreModules = [
  {
    step: "01",
    title: "QR Smart Dining",
    desc: "Contactless digital menu ordering driven by instant table QR code scanning.",
    features: [
      "QR Table Mapping",
      "Passwordless Sessions",
      "Real-Time Order Tracking",
    ],
    accent: "border-blue-500/20",
    glow: "via-blue-500/10",
  },
  {
    step: "02",
    title: "Workflow Engine",
    desc: "Configurable backend order pipelines matching custom business paths out-of-the-box.",
    features: [
      "Pay-First/Later Rules",
      "Manager Approvals",
      "Room Service Linkage",
    ],
    accent: "border-purple-500/20",
    glow: "via-purple-500/10",
  },
  {
    step: "03",
    title: "Kitchen KDS Dashboard",
    desc: "Interactive order-tracking grid optimizing back-of-house kitchen workflows.",
    features: ["Live Ticket Queues", "WebSocket Syncing", "Preparation Timers"],
    accent: "border-emerald-500/20",
    glow: "via-emerald-500/10",
  },
  {
    step: "04",
    title: "Floor Operations",
    desc: "Brings complete workspace transparency to ground service staff operations.",
    features: [
      "Waiter Call Logging",
      "Table Occupancy Maps",
      "Service Escalations",
    ],
    accent: "border-pink-500/20",
    glow: "via-pink-500/10",
  },
  {
    step: "05",
    title: "Admin Control Center",
    desc: "Centralized operational command tools providing comprehensive enterprise insights.",
    features: [
      "Live Stream Metrics",
      "Multi-Branch Audits",
      "Menu Workflow Studio",
    ],
    accent: "border-amber-500/20",
    glow: "via-amber-500/10",
  },
  {
    step: "06",
    title: "Billing Automation",
    desc: "Enforces localized tax verification regulations and digital storage compliance safely.",
    features: [
      "GST Invoice Engine",
      "Partial Split-Payments",
      "Webhook Verification",
    ],
    accent: "border-cyan-400/20",
    glow: "via-cyan-400/10",
  },
  {
    step: "07",
    title: "Inventory & Recipes",
    desc: "Automated ingredient depletion loops synchronized straight onto active production lines.",
    features: [
      "Stock Movement Logs",
      "Low-Stock Reminders",
      "Recipe Deductions",
    ],
    accent: "border-orange-500/20",
    glow: "via-orange-500/10",
  },
  {
    step: "08",
    title: "Multi-Tenant SaaS",
    desc: "Isolated core software structure guarding database rows across fixed tenant boundaries.",
    features: [
      "Instant Tenant Setups",
      "Feature Access Hooks",
      "Strict Data Isolation",
    ],
    accent: "border-indigo-500/20",
    glow: "via-indigo-500/10",
  },
  {
    step: "09",
    title: "Smart Room Service Management",
    desc: "Automated guest ordering cycles synchronized directly with hotel front-desk occupancy states.",
    features: [
      "Front-desk room check-in / check-out logs",
      "Automated QR activation on room check-in",
      "Instant session termination on checkout",
      "Contactless in-room dining order streams",
    ],
    accent: "border-teal-500/20",
    glow: "via-teal-500/10",
  },
];

// Expanded Tiers Structure
const ecosystemRolesArchitecture = [
  {
    tier: "TIER 01",
    title: "Restaurant Owner / Branch Owner Scope",
    scope: "TENANT WIDE BUSINESS MANAGEMENT",
    icon: <FaStore className="text-blue-400" />,
    border: "border-blue-500/20",
    glow: "group-hover:shadow-[0_0_30px_rgba(59,130,246,0.15)]",
    image: "/annsathi/admin.jpeg",
    points: [
      "Configure top-level restaurant profiles and parameters",
      "Provision independent branch nodes and regional setups",
      "Staff management, onboarding, and role assignments",
      "Menu architecture compilation, categories, and item mapping",
      "Comprehensive branch billing, revenue statements, and business logs",
    ],
  },
  {
    tier: "TIER 02",
    title: "Manager / Branch Manager Scope",
    scope: "ASSIGNED BRANCH OPERATIONAL CONTROL",
    icon: <FaCogs className="text-amber-400" />,
    border: "border-amber-500/20",
    glow: "group-hover:shadow-[0_0_30px_rgba(245,158,11,0.15)]",
    image: "/annsathi/manager.jpeg",
    points: [
      "Live order stream oversight and workflow intercept management",
      "Floor staff supervision, duty allocation, and performance sheets",
      "Front-desk room service check-in / check-out synchronization overrides",
      "Manage dynamic room QR code states (Checked-In: Enable Ordering / Checked-Out: Terminate)",
      "Workflow overrides and manual order approvals/re-routing control",
    ],
  },
  {
    tier: "TIER 03",
    title: "Chef / Kitchen Staff Scope",
    scope: "KITCHEN OPERATIONS DIRECT ACCESS",
    icon: <FaUtensils className="text-emerald-400" />,
    border: "border-emerald-500/20",
    glow: "group-hover:shadow-[0_0_30px_rgba(16,185,129,0.15)]",
    image: "/annsathi/chef.jpeg",
    points: [
      "Real-time access to the primary Kitchen Display System queue",
      "Preparation step management and active timer tracking hooks",
      "Order status updates (Placed → Preparing → Ready) to core server lines",
      "Production tracking and raw material inventory status reports",
    ],
  },
  {
    tier: "TIER 04",
    title: "Waiter / Service Staff Scope",
    scope: "ASSIGNED FLOOR & TABLES ASSISTANCE",
    icon: <FaWaiter className="text-pink-400" />,
    border: "border-pink-500/20",
    glow: "group-hover:shadow-[0_0_30px_rgba(244,63,94,0.15)]",
    image: "/annsathi/waiter.png",
    points: [
      "Monitor assigned floor grid sectors and table configurations",
      "Instant response panel for customer digital assistance calls",
      "Manual order injection and table check assistance workflows",
      "Track live order completion statuses straight onto customer tables",
    ],
  },
  {
    tier: "TIER 05",
    title: "Invoice Scope",
    scope: "FINANCIAL MODULES SEGREGATION",
    icon: <FaCashRegister className="text-teal-400" />,
    border: "border-teal-500/20",
    glow: "group-hover:shadow-[0_0_30px_rgba(20,184,166,0.15)]",
    image: "/annsathi/invoices.jpeg",
    points: [
      "Invoice compile terminals and settlement tracking ledgers",
      "Process multi-channel manual payments (UPI, Card, Cash checks)",
      "Process partial item transactions or full split-billing updates",
      "Generate compliance-level physical or digital receipts safely",
    ],
  },
  {
    tier: "TIER 06",
    title: "Customer Self-Service",
    scope: "CURRENT ACTIVE SESSION BOUNDARY",
    icon: <FaQrcode className="text-cyan-400" />,
    border: "border-cyan-400/20",
    glow: "group-hover:shadow-[0_0_30px_rgba(6,182,212,0.15)]",
    image: "/annsathi/customer3.png",
    points: [
      "Contactless menu browsing layers across responsive grid nodes",
      "Cart configuration: variants modifiers, recommendations matching",
      "Transmit verified orders right into branch production layers",
      "Review active group check paths and file service request calls",
    ],
  },
];

const clientPortalInfrastructure = [
  {
    name: "Secure QR Session Gateway",
    desc: "Advanced QR parsing validation logic enabling seamless, passwordless customer table access safely.",
    icon: <FaKey className="text-blue-400" />,
  },
  {
    name: "Dynamic Menu Experience",
    desc: "Interactive catalog interfaces cleanly structuring product categories, system search queries, item variants, custom modifiers, and recommendations.",
    icon: <FaUtensils className="text-emerald-400" />,
  },
  {
    name: "Real-Time Order Tracker",
    desc: "Provides customers with live timeline data tracking every stage of processing (Placed → Preparing → Ready → Served → Completed).",
    icon: <FaClock className="text-[#FFC933]" />,
  },
  {
    name: "Group Dining Manager",
    desc: "Empowers multi-device dining groups to map shared ordering baskets, join group tables securely, and perform group split billing handles.",
    icon: <FaUsers className="text-purple-400" />,
  },
  {
    name: "Digital Payment Center",
    desc: "Direct client integration sheets natively processing Razorpay checkouts, stateside UPI shortcuts, fast QR layouts, and manual cashier calls.",
    icon: <FaCreditCard className="text-cyan-400" />,
  },
];

const centralizedAdministrationFeatures = [
  {
    name: "Multi-Tenant Admin Panel",
    desc: "Unified enterprise interface driven by Laravel Filament to coordinate multi-branch configurations, users, product catalogs, inventory lines, and accounts.",
    icon: <FaServer className="text-blue-400" />,
  },
  {
    name: "Workflow Configuration Studio",
    desc: "Empowers restaurant owners to adjust approval paths, payment timelines, kitchen routing rules, and waiter operational logic without editing code lines.",
    icon: <FaCogs className="text-[#FFC933]" />,
  },
  {
    name: "Analytics Command Center",
    desc: "Deep operational tracking data rendering responsive revenue charts, branch throughput metrics, kitchen preparation speeds, and staff efficiency metrics.",
    icon: <FaChartPie className="text-emerald-400" />,
  },
  {
    name: "Audit & Compliance Dashboard",
    desc: "Maintains tamper-proof system logs recording data changes, sensitive setting modifications, user access traces, and financial logs.",
    icon: <FaHistory className="text-purple-400" />,
  },
];

const architectureStackData = [
  {
    layer: "Mobile Application",
    icon: <SiReact className="text-cyan-400" />,
    items: [
      { title: "React Native (Expo Framework)" },
      { title: "React Context API" },
    ],
  },
  {
    layer: "Frontend & Interface Layers",
    icon: <SiTailwindcss className="text-cyan-400" />,
    items: [{ title: "Filament Admin Panel" }, { title: "Tailwind CSS" }],
  },
  {
    layer: "Core Languages & Frameworks",
    icon: <SiTypescript className="text-blue-400" />,
    items: [
      { title: "TypeScript" },
      { title: "JavaScript" },
      { title: "Laravel Framework (PHP)" },
    ],
  },
  {
    layer: "Database Management",
    icon: <SiMysql className="text-[#00758F]" />,
    items: [
      { title: "Remote MySQL Server" },
      { title: "MySQL Database" },
      { title: "phpMyAdmin" },
    ],
  },
  {
    layer: "Data Routing & Utilities",
    icon: <FaRoute className="text-emerald-400" />,
    items: [{ title: "RESTful APIs" }, { title: "QR Code Generator" }],
  },
  {
    layer: "Development & Testing Suite",
    icon: <FaLaptopCode className="text-[#FFC933]" />,
    items: [
      { title: "Visual Studio Code" },
      { title: "Git & GitHub" },
      { title: "Postman API" },
      { title: "XAMPP" },
    ],
  },
];

export default function AnnsathiProductPage() {
  return (
    <main className="bg-[#020617] text-white min-h-screen relative overflow-hidden pt-12 pb-20 font-sans">
      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "Annsathi",
            operatingSystem: "Cloud-Based SaaS",
            applicationCategory: "BusinessApplication",
            description:
              "Annsathi is a complete Restaurant, Hotel & Resort Management Software featuring QR Code Menu Ordering, Inventory Control, and Room Service Automation by Techstrota.",
            provider: {
              "@type": "LocalBusiness",
              name: "Techstrota",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Vadodara",
                addressRegion: "Gujarat",
                addressCountry: "India",
              },
            },
          }),
        }}
      />

      {/* Background Blobs */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-full h-[450px] bg-blue-500/5 blur-[140px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-1/3 -right-32 w-96 h-96 bg-blue-600/10 blur-[130px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* HERO SECTION */}
        <div className="grid lg:grid-cols-12 gap-12 items-stretch mb-15">
          <div className="lg:col-span-7 text-left lg:sticky lg:top-24">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-blue-500/10 border border-blue-500/20 text-xs font-mono font-bold tracking-wider text-blue-400 uppercase mb-6 shadow-sm">
              <FaUtensils /> Scale Tier Architecture // RestaurantOS™
            </div>
            <motion.h1
              className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tight mb-6 uppercase text-white"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              Ann<span className="text-blue-500">sathi</span>
            </motion.h1>
            <h2 className="text-xl md:text-2xl text-slate-300 mb-6 tracking-tight leading-relaxed max-w-2xl">
              One Platform. Complete Operational Control. Restaurant, Hotel &
              Resort Management Made Simple.
            </h2>
            <motion.p
              className="text-slate-400 text-sm md:text-base leading-relaxed max-w-2xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Manage QR Menu Orders, Room Service, Inventory, Parcel Orders,
              Home Deliveries and Staff Operations from a Single Cloud-Based
              Platform.
            </motion.p>

            <motion.div
              className="p-6 rounded-3xl max-w-xl mt-10 border border-blue-500/30 bg-white/[0.01] backdrop-blur-md relative shadow-xl"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <div className="absolute top-0 right-10 w-24 h-[1px] bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
              <h4 className="text-xs font-mono font-bold text-slate-500 uppercase tracking-widest mb-4 flex items-center gap-2">
                <FaChartLine /> CURRENT ACTIVE ROADMAP FOOTPRINT
              </h4>
              <div className="space-y-4">
                <div>
                  <span className="block text-3xl font-extrabold text-white tracking-tight">
                    10+ Active Enterprise Nodes
                  </span>
                </div>
                <hr className="border-white/5" />
                <p className="text-xs md:text-sm text-slate-400 leading-relaxed">
                  Powering multi-branch environments, local cloud kitchens, and
                  premium luxury resorts flawlessly.
                </p>
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-5 flex flex-col w-full max-w-[315px] mx-auto items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative w-full rounded-[36px] overflow-hidden drop-shadow-[0_25px_40px_rgba(0,0,0,0.7)] bg-transparent"
            >
              <video
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-auto block object-cover rounded-[36px]"
              >
                <source src="/annsathi/app_demo.mp4" type="video/mp4" />
              </video>
            </motion.div>
          </div>
        </div>

        {/* CORE OPERATIONAL MODULES GRID (3 CARDS PER ROW) */}
        <div className="mb-15 border-t border-white/10 pt-12">
          <div className="max-w-2xl mb-16">
            <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white uppercase">
              Core Operational Modules
            </h2>
            <p className="text-slate-400 mt-2 text-sm md:text-base">
              Streamlined sub-systems driving automated restaurant workflow
              logic paths.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch w-full max-w-7xl mx-auto">
            {coreModules.map((mod, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.05 * idx, duration: 0.5 }}
                className={`p-6 rounded-2xl bg-gradient-to-b from-white/[0.02] to-transparent border ${mod.accent} relative overflow-hidden flex flex-col justify-between hover:bg-white/[0.02] transition-colors`}
              >
                <div
                  className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-transparent ${mod.glow} to-transparent blur-2xl pointer-events-none`}
                ></div>

                <div className="space-y-4">
                  <div className="flex items-center gap-3 border-b border-white/5 pb-3">
                    <span className="text-xs font-mono font-black text-blue-500 tracking-widest bg-white/5 px-2 py-1 rounded">
                      {mod.step}
                    </span>
                    <h3 className="text-base font-bold tracking-tight text-white">
                      {mod.title}
                    </h3>
                  </div>

                  <p className="text-xs text-slate-400 leading-relaxed">
                    {mod.desc}
                  </p>

                  <div className="space-y-2 pt-1">
                    {mod.features.map((feat, fIdx) => (
                      <div
                        key={fIdx}
                        className="flex items-center gap-2 text-sm text-slate-300"
                      >
                        <FaCheckCircle className="text-blue-500/80 flex-shrink-0 text-[13px]" />
                        <span className="truncate">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ECOSYSTEM CORE FRAMEWORKS */}
        <div className="mb-15 border-t border-white/10 pt-12">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-2xl md:text-4xl font-black uppercase tracking-tight text-white">
              Ecosystem Core Frameworks
            </h2>
          </div>

          <div className="grid gap-12 lg:grid-cols-2">
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-blue-500"></span>{" "}
                Customer Portal Infrastructure
              </h3>
              {clientPortalInfrastructure.map((cFeat, cIdx) => (
                <div
                  key={cIdx}
                  className="p-5 rounded-xl bg-white/[0.01] border border-amber-500/30 flex items-start gap-4 hover:bg-white/[0.03] transition-colors"
                >
                  <div className="p-2.5 bg-white/5 border border-white/10 text-base text-blue-400 rounded-lg">
                    {cFeat.icon}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white mb-1">
                      {cFeat.name}
                    </h4>
                    <p className="text-sm text-slate-400 leading-relaxed">
                      {cFeat.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500"></span>{" "}
                Centralized Administration Studio
              </h3>
              {centralizedAdministrationFeatures.map((aFeat) => (
                <div
                  key={aFeat.name}
                  className="p-5 rounded-xl bg-white/[0.01] border border-amber-500/30 flex items-start gap-4 hover:bg-white/[0.03] transition-colors"
                >
                  <div className="p-2.5 bg-white/5 border border-white/10 text-base text-emerald-400 rounded-lg">
                    {aFeat.icon}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white mb-1">
                      {aFeat.name}
                    </h4>
                    <p className="text-sm text-slate-400 leading-relaxed">
                      {aFeat.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* UPDATED: ALTERNATING ZIGZAG PATTERN (IMAGE LEFT / CONTENT RIGHT OR CONTENT LEFT / IMAGE RIGHT) */}
        <div className="mb-15 border-t border-white/10 pt-12">
          <div className="max-w-3xl mb-16">
            <h2 className="text-2xl md:text-4xl font-black uppercase tracking-tight text-white">
              Hierarchical Role-Based Access Control (RBAC)
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-8 max-w-7xl mx-auto w-full">
            {ecosystemRolesArchitecture.map((role, rIdx) => {
              // Toggle horizontal ordering layout cleanly based on odd/even array indexes
              const isImageRight = rIdx % 2 === 1;

              return (
                <motion.div
                  key={rIdx}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.05 * rIdx, duration: 0.5 }}
                  className={`group p-6 rounded-3xl bg-white/[0.01] border ${role.border} ${
                    role.glow
                  } flex flex-col xl:flex-row items-center gap-8 hover:bg-white/[0.02] transition-all duration-300 w-full ${
                    isImageRight ? "xl:flex-row-reverse" : ""
                  }`}
                >
                  {/* Image Box Frame Block */}
                  <div className="w-full xl:w-1/2">
                    <div className="flex items-center gap-3 border-b border-white/5 pb-3 mb-4">
                      <div className="p-2 bg-white/5 border border-white/10 rounded-xl text-lg shadow-inner">
                        {role.icon}
                      </div>
                      <div>
                        <span className="block text-[11px] font-mono font-black text-slate-500 leading-none">
                          {role.tier}
                        </span>
                        <h3 className="text-md font-bold text-white tracking-tight mt-1">
                          {role.title}
                        </h3>
                      </div>
                    </div>

                    <div className="relative border border-white/5 bg-[#030712] overflow-hidden rounded-xl h-64 sm:h-72 w-full group/img">
                      <a
                        href={role.image}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="absolute inset-0 w-full h-full block z-20"
                      >
                        <Image
                          src={role.image}
                          alt={role.title}
                          fill
                          className="object-contain object-center transition-transform duration-500 group-hover:scale-105"
                          unoptimized
                        />

                        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                          <div className="flex items-center gap-2 text-xs font-mono font-bold tracking-wider text-white uppercase bg-white/10 border border-white/10 px-3 py-1.5 rounded-lg shadow-lg">
                            <FaEye className="text-blue-400" /> View Full Image
                          </div>
                        </div>

                        <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent opacity-60 pointer-events-none"></div>
                      </a>
                    </div>
                  </div>

                  {/* List Description Points Block */}
                  <div className="flex flex-col justify-between h-full w-full xl:w-1/2 min-h-[280px]">
                    <div className="space-y-4 mt-2">
                      <div className="text-[11px] font-mono tracking-widest text-blue-400 font-bold uppercase pb-1.5 border-b border-white/5">
                        Operational Capabilities
                      </div>
                      <ul className="grid grid-cols-1 gap-2.5">
                        {role.points.map((pt, pIdx) => (
                          <li
                            key={pIdx}
                            className="flex items-start gap-2.5 text-sm text-slate-300 leading-relaxed"
                          >
                            <FaCheckCircle className="text-blue-500 flex-shrink-0 text-[13px] mt-0.5 shadow-sm" />
                            <span>{pt}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-6 text-[9px] uppercase tracking-widest font-mono font-black text-slate-400 bg-white/5 border border-white/5 py-2 rounded-lg text-center w-full shadow-inner">
                      {role.scope}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* TECHNICAL BLUEPRINTS AREA LAYOUT GRID */}
        <div className="mb-15 border-t border-white/10 pt-12">
          <div className="max-w-2xl mb-16">
            <h2 className="text-2xl md:text-4xl font-black uppercase tracking-tight text-white">
              Engineered Technology Architecture
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-stretch max-w-7xl mx-auto w-full">
            {architectureStackData.map((tech, tIdx) => (
              <motion.div
                key={tIdx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.05 * tIdx, duration: 0.5 }}
                className="p-5 rounded-2xl bg-white/[0.01] border hover:border-white/30 border-blue-500/20 backdrop-blur-sm flex flex-col gap-3 group transition-all duration-300 relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-1.5 h-full bg-blue-500/30 opacity-100 group-hover:bg-blue-500 transition-colors"></div>

                <div className="flex items-center gap-3 border-b border-white/5 pb-2">
                  <div className="p-2 bg-white/5 border border-white/10 rounded-lg text-lg text-blue-400">
                    {tech.icon}
                  </div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-gray-400 group-hover:text-white transition-colors">
                    {tech.layer}
                  </h3>
                </div>

                <div className="space-y-2 mt-2">
                  {tech.items.map((subItem, sIdx) => (
                    <div
                      key={sIdx}
                      className="flex items-center gap-2.5 pl-1 py-0.5"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500/70 group-hover:bg-blue-400 group-hover:scale-110 transition-all shrink-0 shadow-[0_0_6px_rgba(59,130,246,0.5)]"></span>
                      <h4 className="text-sm font-medium text-slate-300 group-hover:text-white transition-colors">
                        {subItem.title}
                      </h4>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* SECURITY LAYER */}
        <div className="mb-15 border-t border-white/10 pt-12">
          <div className="text-left mb-12">
            <h2 className="text-2xl md:text-4xl font-black uppercase tracking-tight text-white">
              System Core Security Layer
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Role-Based Authentication",
                items: [
                  "Laravel Sanctum Integration",
                  "Multi-guard session segregation",
                  "Stateful API token arrays",
                ],
              },
              {
                title: "Tenant Data Isolation",
                items: [
                  "Database-level validation bounds",
                  "Walled corporate network queries",
                  "Encrypted tenant storage rows",
                ],
              },
              {
                title: "Gateway Payment Security",
                items: [
                  "Razorpay signature tracking validation",
                  "Secure incoming webhook checking",
                  "Fraud verification rule algorithms",
                ],
              },
              {
                title: "API Core Protection Engine",
                items: [
                  "Rate limiting & request throttling",
                  "Cross-Origin Resource Sharing (CORS)",
                  "Signed URLs token parameters",
                ],
              },
              {
                title: "Data Protection Policies",
                items: [
                  "Encrypted environment storage keys",
                  "Secure password hashing models",
                  "Automated disaster recovery loops",
                ],
              },
              {
                title: "Event Auditing Registry",
                items: [
                  "Immutable transaction change history",
                  "Comprehensive trace log dumps",
                  "Database override tracking keys",
                ],
              },
            ].map((sec, sIdx) => (
              <div
                key={sIdx}
                className="p-6 rounded-2xl bg-white/[0.01] border border-amber-500/30 flex flex-col gap-3 relative group transition-colors"
              >
                <h3 className="text-sm font-bold text-white flex items-center gap-2 font-mono uppercase tracking-tight">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>{" "}
                  {sec.title}
                </h3>
                <ul className="space-y-1.5 pl-3.5 border-l border-white/5 mt-1">
                  {sec.items.map((line, lIdx) => (
                    <li
                      key={lIdx}
                      className="text-sm text-slate-400 flex items-center gap-1.5"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-600"></span>{" "}
                      {line}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* HIGH-CONVERSION CTA SECTION */}
        <section className="relative z-10 py-10">
          <div className="relative rounded-[2.5rem] bg-[#020617] border border-blue-500/30 p-12 md:p-20 overflow-hidden text-center shadow-[0_0_50px_-12px_rgba(59,130,246,0.3)]">
            <div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage: `radial-gradient(#3b82f6 1px, transparent 1px)`,
                backgroundSize: "30px 30px",
              }}
            ></div>
            <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-blue-600/20 blur-[80px] rounded-full"></div>
            <div className="absolute -top-24 -left-24 w-64 h-64 bg-blue-400/10 blur-[80px] rounded-full"></div>

            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-extrabold mb-6 tracking-tight">
                Ready to Transform Your Restaurant? <br />
                <span className="text-blue-500">TechStrota RestaurantOS™</span>
              </h2>
              <div className="mt-12 flex flex-col sm:flex-row justify-center items-center gap-6">
                <Link
                  href="/contact"
                  className="group relative px-8 py-4 bg-blue-600 rounded-2xl font-bold text-white transition-all hover:bg-blue-500 hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(37,99,235,0.4)]"
                >
                  Request Architecture Demo
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
