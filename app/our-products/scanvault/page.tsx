"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  FaServer,
  FaFolderOpen,
  FaUserShield,
  FaCamera,
  FaCloudUploadAlt,
  FaKey,
  FaChartPie,
  FaArrowLeft,
  FaCheckCircle,
  FaExclamationTriangle,
  FaPlay,
  FaLaptop,
  FaExternalLinkAlt,
  FaUsers,
  FaShieldAlt,
  FaEye,
  FaLockOpen,
  FaGlobe,
} from "react-icons/fa";
import { SiFlutter, SiLaravel, SiMysql } from "react-icons/si"; // Fallback to react-icons if needed

const techStackDetails = [
  {
    name: "Frontend Mobile App",
    detail: "Flutter (Cross-Platform iOS/Android)",
    icon: <SiFlutter />,
    color: "#02569B",
  },
  {
    name: "Backend Dashboard",
    detail: "Laravel Filament Admin Portal",
    icon: <SiLaravel />,
    color: "#FF2D20",
  },
  {
    name: "Database Engine",
    detail: "MySQL Relational Infrastructure",
    icon: <SiMysql />,
    color: "#00758F",
  },
  {
    name: "API Framework",
    detail: "Laravel PHP Rest API Engine",
    icon: <SiLaravel />,
    color: "#FF2D20",
  },
  {
    name: "Token Authentication",
    detail: "Laravel Sanctum Stateful Guarding",
    icon: <FaKey />,
    color: "#38BDF8",
  },
  {
    name: "File System Layer",
    detail: "Laravel Cloud-Optimized Storage Drivers",
    icon: <FaServer />,
    color: "#A855F7",
  },
];

const mobileScreens = [
  {
    name: "Secure Login",
    desc: "Token-based credentials gateway securing mobile local endpoints.",
    icon: <FaKey className="text-blue-400" />,
  },
  {
    name: "Main Tab Interface",
    desc: "Consolidated actions view: Folders, Upload, Camera capture, and Subfolder Creation.",
    icon: <FaFolderOpen className="text-[#FFC933]" />,
  },
  {
    name: "Nested Asset Navigator",
    desc: "Infinite subfolder traversal layout featuring immediate high-fidelity image thumbnails.",
    icon: <FaServer className="text-emerald-400" />,
  },
  {
    name: "Centralized Sync Tab",
    desc: "Bulk syncs structural folders and client media streams straight onto secure central nodes.",
    icon: <FaCloudUploadAlt className="text-[#2AB4F4]" />,
  },
  {
    name: "Direct Shutter Engine",
    desc: "Hooks directly into core hardware optics to snap assets directly into preset directories.",
    icon: <FaCamera className="text-purple-400" />,
  },
];

// Structural representations for Dashboard Screens Showcase (Super Admin removed)
const dashboardPreviews = [
  {
    title: "Dynamic Allocation Profiles",
    desc: "Enforce manager-to-user creation quotas instantly via custom embedded guardrail panels.",
    src: "/scanvault/img2.png",
  },
  {
    title: "Tree-Structured Image Explorer",
    desc: "Seamless folder-wise visual browser to audit, tag, and securely download field images.",
    src: "/scanvault/img3.png",
  },
];

// Unified Demo Environment Access Parameters Mappings
const demoCredentials = [
  {
    role: "Company Admin",
    user: "demo@admin.com",
    pass: "admin@123",
    color: "text-[#FFC933] bg-amber-500/10 border-amber-500/20",
  },
  {
    role: "Workspace Manager",
    user: "demo@manager.com",
    pass: "manager@123",
    color: "text-blue-400 bg-blue-500/10 border-blue-500/20",
  },
  {
    role: "App Operator",
    user: "demo@user.com",
    pass: "user@123",
    color: "text-purple-400 bg-purple-500/10 border-purple-500/20",
  },
];

export default function ScanVaultProductPage() {
  return (
    <main className="bg-[#020617] text-white min-h-screen relative overflow-hidden pt-0 pb-20 font-sans">
      {/* Dynamic Ambient Background Glow Elements */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-full h-[450px] bg-amber-500/5 blur-[140px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-1/3 -right-32 w-96 h-96 bg-blue-600/10 blur-[130px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 mt-10">
        {/* HERO TITLE HEADER WITH SIDE-BY-SIDE INTEGRATION */}
        <div className="grid lg:grid-cols-12 gap-12 items-stretch mb-10 -mt-2">
          <div className="lg:col-span-7 text-left lg:sticky lg:top-24">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs font-bold tracking-wider text-[#FFC933] uppercase mb-6">
              <FaServer /> Active SaaS Infrastructure
            </div>
            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-6"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Scan<span className="text-blue-500">Vault</span>
            </motion.h1>
            <motion.p
              className="text-gray-300 text-base md:text-lg mb-6 font-medium leading-relaxed max-w-3xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              ScanVault is a hybrid solution combining a mobile app and a
              web-based dashboard designed for structured, secure, and scalable
              image management. The mobile app allows users to select, store,
              and optionally upload images in a folder-based hierarchy, while
              the dashboard offers centralized control over uploaded content
              using role-based access for different types of workspace users.
            </motion.p>

            {/* MULTI-CARD HORIZONTAL METRICS LAYOUT */}
            <div className="flex flex-col sm:flex-row items-start gap-7 max-w-3xl w-full mt-18">
              {/* CARD 1: EXISTING ECOSYSTEM METRICS */}
              <motion.div
                className="p-8 rounded-3xl border w-full sm:w-1/2 text-center items-center border-white/40 bg-white/[0.02] backdrop-blur-md relative"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                <div className="absolute top-0 right-10 w-24 h-[1px] bg-gradient-to-r from-transparent via-[#FFC933] to-transparent"></div>
                <h4 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-4">
                  Ecosystem Metrics
                </h4>
                <div className="space-y-4">
                  <div>
                    <span className="block text-3xl font-extrabold text-white">
                      380K+
                    </span>
                    <span className="text-xs text-gray-400">
                      Operational Images Managed
                    </span>
                  </div>
                  <hr className="border-white/40" />
                  <div>
                    <span className="block text-3xl font-extrabold text-[#2AB4F4]">
                      99.9%
                    </span>
                    <span className="text-xs text-gray-400">
                      Guaranteed System Uptime
                    </span>
                  </div>
                </div>
              </motion.div>

              {/* CARD 2: RELEVANT SCANVAULT CORE PARAMETERS */}
              <motion.div
                className="p-8 rounded-3xl border w-full sm:w-1/2 text-center items-center border-white/40 bg-white/[0.02] backdrop-blur-md relative"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                <div className="absolute top-0 right-10 w-24 h-[1px] bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>
                <h4 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-4">
                  Security Parameters
                </h4>
                <div className="space-y-4">
                  <div>
                    <span className="block text-3xl font-extrabold text-white">
                      3 Tier
                    </span>
                    <span className="text-xs text-gray-400">
                      Granular User Access Layout
                    </span>
                  </div>
                  <hr className="border-white/40" />
                  <div>
                    <span className="block text-3xl font-extrabold text-purple-400">
                      100%
                    </span>
                    <span className="text-xs text-gray-400">
                      Multi-Tenant Isolation Limits
                    </span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* RIGHT SIDEBAR COLUMN: PREMIUM SMARTPHONE HARDWARE MOCKUP */}
          <div className="lg:col-span-5 flex flex-col w-full max-w-[315px] mx-auto items-center">
            {/* HARDWARE CHASSIS OVERLAY FRAME */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative p-2.5 rounded-[52px] bg-[#1c1a24] border-[6px] border-[#2d2a3a] max-w-[315px] w-full shadow-[0_25px_60px_-15px_rgba(0,0,0,0.8),0_0_50px_rgba(59,130,246,0.1)] group select-none"
            >
              <div className="absolute left-[-9px] top-28 w-[3px] h-8 bg-[#3d394e] rounded-l"></div>
              <div className="absolute left-[-9px] top-40 w-[3px] h-12 bg-[#3d394e] rounded-l"></div>
              <div className="absolute left-[-9px] top-56 w-[3px] h-12 bg-[#3d394e] rounded-l"></div>
              <div className="absolute right-[-9px] top-44 w-[3px] h-16 bg-[#3d394e] rounded-r"></div>
              <div className="bg-black rounded-[44px] overflow-hidden p-1.5 relative border border-black/60">
                <div className="relative w-full aspect-[9/19.5] rounded-[36px] overflow-hidden bg-[#020617] shadow-inner">
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full block object-cover object-top"
                  >
                    <source src="/scanvault/scanvault.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
                <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-28 h-[3.5px] bg-white rounded-full z-40 pointer-events-none mix-blend-difference"></div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* SECTION 1: SYSTEM ARCHITECTURE WORKFLOW FLOW (Super Admin Step Removed) */}
        <div className="mb-15 border-t border-white/10 pt-12">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-2xl md:text-4xl font-bold tracking-tight">
              The ScanVault Operation Flow
            </h2>
            <p className="text-gray-400 mt-2 text-sm md:text-base">
              How administrative modules and field teams synchronize smoothly
              across modern networks.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-center items-center relative">
            {[
              {
                step: "01",
                title: "Company Admin",
                desc: "Configures Workspace Sub-Managers & User Capacities",
              },
              {
                step: "02",
                title: "Manager Tier",
                desc: "Oversees Assigned Local Operating Field Staff",
              },
              {
                step: "03",
                title: "Mobile User",
                desc: "Captures, Nest-Structures, and Uploads Media",
              },
              {
                step: "04",
                title: "Secure Cloud",
                desc: "Isolates Storage Vault Buffers & Active Audit Data",
              },
            ].map((flow, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white/[0.01] border border-blue-500/40 relative h-full flex flex-col justify-start"
              >
                <span className="block text-xs font-bold text-[#FFC933] mb-1">
                  {flow.step}
                </span>
                <h4 className="text-base font-bold text-white mb-2">
                  {flow.title}
                </h4>
                <p className="text-xs text-gray-400 leading-relaxed">
                  {flow.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* SECTION 4: DETAILED DEVELOPMENT TOOLS ARCHITECTURE */}
        <div className="mb-15 border-t border-white/10 pt-12">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-2xl md:text-4xl font-bold tracking-tight">
              Engineered Technology Architecture
            </h2>
            <p className="text-gray-400 mt-2 text-sm md:text-base">
              A meticulous choice of robust platforms ensuring responsive speeds
              and complete multi-tenant isolation.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {techStackDetails.map((tech, tIdx) => (
              <div
                key={tIdx}
                className="p-6 rounded-2xl bg-white/[0.02] border hover:border-white/5 border-[#2AB4F4]/30 transition-all duration-300"
              >
                <div style={{ color: tech.color }} className="text-3xl mb-4">
                  {tech.icon}
                </div>
                <h4 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">
                  {tech.name}
                </h4>
                <p className="text-sm font-semibold text-white">
                  {tech.detail}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* SECTION 2: DEEP DIVE LAYERED RBAC */}
        <div className="mb-15 border-t border-white/10 pt-12">
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-2 flex items-center gap-3">
              <FaUserShield className="text-[#2AB4F4]" /> Hierarchical
              Role-Based Access Control (RBAC)
            </h2>
            <p className="text-gray-400 text-sm md:text-base">
              Ironclad security protocols built on absolute data segregation
              limits. Out-of-bounds attempts are terminated instantly at the
              gateway level.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 items-stretch">
            {/* COMPANY ADMIN */}
            <div className="p-6 rounded-2xl bg-white/[0.03] border border-amber-400/30 flex flex-col justify-between shadow-[0_4px_30px_rgba(245,158,11,0.05)]">
              <div>
                <span className="text-xs font-bold text-[#FFC933] uppercase tracking-widest block mb-2">
                  Tier 01
                </span>
                <h3 className="text-xl font-bold mb-4 text-white">
                  Company Admin
                </h3>
                <ul className="space-y-2.5 text-sm text-gray-400">
                  <li className="flex items-start gap-2">
                    <FaCheckCircle className="text-[#FFC933] mt-0.5 flex-shrink-0" />{" "}
                    Manage assigned Managers & create company-specific users
                  </li>
                  <li className="flex items-start gap-2">
                    <FaCheckCircle className="text-[#FFC933] mt-0.5 flex-shrink-0" />{" "}
                    Browse structural folders, show, and download uploaded
                    images
                  </li>
                  <li className="flex items-start gap-2">
                    <FaCheckCircle className="text-[#FFC933] mt-0.5 flex-shrink-0" />{" "}
                    Strict isolation: Cannot access or manage adjacent company
                    nodes
                  </li>
                  <li className="flex items-start gap-2">
                    <FaCheckCircle className="text-[#FFC933] mt-0.5 flex-shrink-0" />{" "}
                    View total organization metrics, users, active photos, and
                    storage usage bounds
                  </li>
                </ul>
              </div>
              <div className="mt-6 text-[10px] uppercase tracking-widest font-bold text-[#FFC933] bg-amber-400/5 px-2.5 py-1 rounded border border-amber-400/10 text-center">
                Company Restricted Scope
              </div>
            </div>

            {/* MANAGER */}
            <div className="p-6 rounded-2xl bg-white/[0.03] border border-blue-500/30 flex flex-col justify-between shadow-[0_4px_30px_rgba(59,130,246,0.05)]">
              <div>
                <span className="text-xs font-bold text-[#2AB4F4] uppercase tracking-widest block mb-2">
                  Tier 02
                </span>
                <h3 className="text-xl font-bold mb-4 text-white">Manager</h3>
                <ul className="space-y-2.5 text-sm text-gray-400">
                  <li className="flex items-start gap-2">
                    <FaCheckCircle className="text-[#2AB4F4] mt-0.5 flex-shrink-0" />{" "}
                    Manage and provision assigned operational user staff
                  </li>
                  <li className="flex items-start gap-2">
                    <FaCheckCircle className="text-[#2AB4F4] mt-0.5 flex-shrink-0" />{" "}
                    Show and download uploaded images & folders created by users
                  </li>
                  <li className="flex items-start gap-2">
                    <FaCheckCircle className="text-[#2AB4F4] mt-0.5 flex-shrink-0" />{" "}
                    Isolated scope: Only views own uploaded content; no
                    dashboard access to other managers&apos; panels
                  </li>
                  <li className="flex items-start gap-2">
                    <FaCheckCircle className="text-[#2AB4F4] mt-0.5 flex-shrink-0" />{" "}
                    Display metrics regarding total users, photos, and storage
                    within their sub-tenant workspace
                  </li>
                </ul>
              </div>
              <div className="mt-6 text-[10px] uppercase tracking-widest font-bold text-[#2AB4F4] bg-blue-400/5 px-2.5 py-1 rounded border border-blue-400/10 text-center">
                Group Restricted Scope
              </div>
            </div>

            {/* USER (MOBILE ONLY) */}
            <div className="p-6 rounded-2xl bg-white/[0.03] border border-purple-500/30 flex flex-col justify-between shadow-[0_4px_30px_rgba(168,85,247,0.05)]">
              <div>
                <span className="text-xs font-bold text-purple-400 uppercase tracking-widest block mb-2">
                  Tier 03
                </span>
                <h3 className="text-xl font-bold mb-4 text-white">
                  Application User
                </h3>
                <ul className="space-y-2.5 text-sm text-gray-400">
                  <li className="flex items-start gap-2">
                    <FaCheckCircle className="text-purple-400 mt-0.5 flex-shrink-0" />{" "}
                    Exclusive native smartphone interface access only
                  </li>
                  <li className="flex items-start gap-2">
                    <FaCheckCircle className="text-purple-400 mt-0.5 flex-shrink-0" />{" "}
                    Browse assigned operational folders & subfolders seamlessly
                  </li>
                  <li className="flex items-start gap-2">
                    <FaCheckCircle className="text-purple-400 mt-0.5 flex-shrink-0" />{" "}
                    Capture assets or perform folder-wise image batch uploads
                  </li>
                  <li className="flex items-start gap-2">
                    <FaCheckCircle className="text-purple-400 mt-0.5 flex-shrink-0" />{" "}
                    Zero visibility or tracking over administrative back-end
                    endpoints
                  </li>
                </ul>
              </div>
              <div className="mt-6 text-[10px] uppercase tracking-widest font-bold text-purple-400 bg-purple-400/5 px-2.5 py-1 rounded border border-purple-400/10 text-center">
                Device Specific Scope
              </div>
            </div>
          </div>

          {/* ACTIVE EXCEEDED OVERFLOW CONTROLLER MECHANISM */}
          <div className="mt-8 p-4 rounded-xl bg-amber-500/5 border border-amber-500/20 max-w-3xl flex items-center gap-3">
            <FaExclamationTriangle className="text-[#FFC933] text-xl flex-shrink-0" />
            <p className="text-sm text-gray-400 leading-relaxed">
              <span className="text-white font-bold">
                Dynamic Capacity Guardrails:
              </span>{" "}
              When assigned company/manager thresholds are exceeded, the core
              orchestration controllers block user generation across system
              interfaces and display defensive dashboard responses (
              <span className="text-[#FFC933]">
                &quot;Limit reached! Cannot create more.&quot;
              </span>
              ).
            </p>
          </div>
        </div>

        {/* SECTION 2: WEB DASHBOARD PREVIEW GALLERY & ALTERNATING LAYOUTS */}
        <div className="mb-15 border-t border-white/30 pt-12">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/30 text-xs font-bold text-blue-400 tracking-wide mb-6 shadow-[0_0_20px_rgba(59,130,246,0.15)]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              Production Environment:
              <a
                href="https://techstrota.cloud"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-white transition-colors inline-flex items-center gap-1 font-mono tracking-normal"
              >
                techstrota.cloud <FaExternalLinkAlt className="text-[9px]" />
              </a>
            </div>

            <h2 className="text-2xl md:text-4xl font-bold tracking-tight flex items-center justify-center gap-3">
              <FaLaptop className="text-[#2AB4F4]" /> Web Admin Management
              Showcase
            </h2>
            <p className="text-gray-400 mt-2 text-sm md:text-base mb-8">
              Explore structural interfaces deployed inside the unified Laravel
              Filament back-end workspace.
            </p>
          </div>

          {/* Alternating Stack Container for Dashboard Items */}
          <div className="flex flex-col gap-12 max-w-7xl mx-auto w-full mb-16">
            {dashboardPreviews.map((preview, idx) => {
              // Alternate order: Card 0 (idx 0) puts content left, image right.
              // Card 1 (idx 1) puts image left, content right.
              const isImageLeft = idx % 2 === 0;

              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1, duration: 0.6 }}
                  className="group bg-white/[0.01] border hover:border-white/25 rounded-3xl overflow-hidden shadow-xl border-amber-400/20 p-8 transition-all duration-300 grid md:grid-cols-12 gap-8 items-center"
                >
                  {/* Image container handles structural order dynamically using CSS order properties */}
                  <div
                    className={`relative w-full h-72 sm:h-[400px] border border-white/5 bg-[#030712] overflow-hidden rounded-xl group/img md:col-span-6 ${isImageLeft ? "md:order-1" : "md:order-2"}`}
                  >
                    <a
                      href={preview.src}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute inset-0 w-full h-full block z-20"
                    >
                      <Image
                        src={preview.src}
                        alt={preview.title}
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

                  {/* Text Description Block Component layout column */}
                  <div
                    className={`space-y-4 md:col-span-6 ${isImageLeft ? "md:order-2" : "md:order-1"}`}
                  >
                    <div className="text-[10px] font-mono tracking-widest text-[#FFC933] font-bold uppercase pb-1 border-b border-white/5 inline-block">
                      Workspace Segment // 0{idx + 1}
                    </div>
                    <h3 className="text-2xl font-bold text-white group-hover:text-[#FFC933] transition-colors">
                      {preview.title}
                    </h3>
                    <p className="text-sm text-gray-400 leading-relaxed">
                      {preview.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* SECTION 3: MOBILE INTERFACE TO DASHBOARD MAPPING FEATURE LAYOUT */}
        <div className="grid gap-12 lg:grid-cols-2 mb-12 border-t border-white/10 pt-12">
          {/* MOBILE PORTAL */}
          <div>
            <h3 className="text-xl md:text-2xl font-bold mb-8 text-white flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-purple-500"></span>{" "}
              Native Mobile Infrastructure
            </h3>

            <div className="space-y-4">
              {mobileScreens.map((screen, sIdx) => (
                <div
                  key={sIdx}
                  className="p-5 rounded-xl bg-white/[0.02] border hover:border-white/5 flex items-start gap-4 border-purple-600/30 transition-all duration-300"
                >
                  <div className="p-3 bg-white/5 border border-white/10 rounded-lg text-lg flex-shrink-0">
                    {screen.icon}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white mb-1">
                      {screen.name}
                    </h4>
                    <p className="text-sm text-gray-400 leading-relaxed">
                      {screen.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 p-4 rounded-xl bg-white/[0.01] font-bold border border-purple-500/30 text-[13px] text-gray-500 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse"></span>
              Mobile Application powered by Flutter architecture framework
            </div>
          </div>

          {/* WEB COMMAND CENTRAL */}
          <div>
            <h3 className="text-xl md:text-2xl font-bold mb-8 text-white flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#2AB4F4]"></span>{" "}
              Centralized Admin Dashboard
            </h3>

            <div className="space-y-4">
              {[
                {
                  name: "Universal Authentication Gateway",
                  scope: "Accessible By: Admin, Manager",
                  desc: "Central entry screen securing dashboard control points. Restricts login paths securely matching specific system roles.",
                  icon: <FaKey className="text-blue-400" />,
                },
                {
                  name: "Dynamic Analytical Views",
                  scope: "Accessible By: Admin, Manager",
                  desc: "Displays role-specific overviews. Organization Admins and Workspace Managers review exact capacity trends via reactive pie charts.",
                  icon: <FaChartPie className="text-[#FFC933]" />,
                },
                {
                  name: "Company Administrative Controls",
                  scope: "Accessible By: Admin",
                  desc: "Enables corporate entity heads to generate sub-managers or users, tracking exact team deployment numbers inside their organization boundary.",
                  icon: <FaUsers className="text-emerald-400" />,
                },
                {
                  name: "Manager Control Panel",
                  scope: "Accessible By: Manager",
                  desc: "Dedicated segment for floor operators to provision local mobile application accounts bounded strictly by assigned company limits.",
                  icon: <FaFolderOpen className="text-cyan-400" />,
                },
                {
                  name: "Tree-Structured Image Explorer",
                  scope: "Accessible By: Admin, Manager",
                  desc: "Seamless folder-wise visual browser allowing privileged administrative teams to filter captured assets, inspect directories, and batch-download user media.",
                  icon: <FaLaptop className="text-purple-400" />,
                },
              ].map((section, dIdx) => (
                <div
                  key={dIdx}
                  className="p-5 rounded-xl bg-white/[0.02] border hover:border-white/5 flex items-start gap-4 border-blue-500/30 transition-all duration-300 relative group"
                >
                  <div className="p-3 bg-white/5 border border-white/10 rounded-lg text-lg flex-shrink-0 group-hover:border-blue-500/30 transition-colors">
                    {section.icon}
                  </div>
                  <div className="w-full">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1.5">
                      <h4 className="text-sm font-bold text-white">
                        {section.name}
                      </h4>
                      <span className="text-[10px] bg-blue-500/10 text-blue-400 border border-blue-500/20 px-2.5 py-0.5 rounded-full font-semibold tracking-wide self-start sm:self-center">
                        {section.scope}
                      </span>
                    </div>
                    <p className="text-sm text-gray-400 leading-relaxed">
                      {section.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 p-4 rounded-xl bg-white/[0.01] font-bold border border-blue-500/30 text-[13px] text-gray-500 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              Admin Dashboard backend powered by Laravel Filament architecture
              modules
            </div>
          </div>
        </div>

        {/* SECTION 3: ENTERPRISE SECURITY MODEL INFRASTRUCTURE */}
        <div className="mb-12 border-t border-white/10 pt-12">
          <div className="text-left mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs font-bold tracking-wider text-[#FFC933] uppercase mb-4">
              <FaShieldAlt /> System Core Security
            </div>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-2">
              ScanVault Multi-Tenant Security Model
            </h2>
            <p className="text-gray-400 text-sm md:text-base">
              Engineered with deep corporate isolation matrices to guarantee
              absolute data privacy across all user endpoints.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-3">
            {[
              {
                title: "Role-Based Authentication",
                desc: "Secured token-based credential mapping fields. Restricts application layouts to authenticated scopes perfectly.",
              },
              {
                title: "Company-Level Data Isolation",
                desc: "Rigid tenant separation layer routing. Multi-tenant corporate groups are walled off at database query levels.",
              },
              {
                title: "Share-Based Access Control",
                desc: "Granular authorization mechanics preventing external visibility or leakage of image files beyond explicit team spaces.",
              },
            ].map((sec, sIdx) => (
              <div
                key={sIdx}
                className="p-6 rounded-2xl bg-white/[0.02] border border-amber-400/20 hover:border-amber-400/40 shadow-xl transition-all duration-300 relative group flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-base font-bold text-white mb-2.5 flex items-center gap-2 group-hover:text-[#FFC933] transition-colors">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
                    {sec.title}
                  </h3>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {sec.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 p-4 rounded-xl bg-blue-500/5 border border-blue-500/20 flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse flex-shrink-0"></span>
            <p className="text-sm text-gray-400 font-medium">
              <span className="text-white font-bold">
                Absolute Scope Guardrail Execution:
              </span>{" "}
              No sub-tenant asset layer can traverse, parse, or discover
              structural media nodes outside their explicitly assigned
              administrative path.
            </p>
          </div>
        </div>

        {/* CTA HOVER CARD BLOCK FROM MAIN THEME */}
        <section className="relative z-10 py-10">
          <div className="relative rounded-[2.5rem] bg-[#020617] border border-yellow-500/30 p-12 md:p-20 overflow-hidden text-center shadow-[0_0_50px_-12px_rgba(234,179,8,0.5)]">
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
                Looking to Deploy a Similar <br />
                <span className="text-blue-500">
                  Enterprise SaaS Architecture?
                </span>
              </h2>

              <p className="max-w-2xl mx-auto mt-6 text-gray-400 text-base md:text-lg font-medium">
                Let us build your next secure mobile client system with robust
                asset protection and granular back-end tracking controls.
              </p>

              <div className="mt-12 flex flex-col sm:flex-row justify-center items-center gap-6">
                <Link
                  href="/contact"
                  className="group relative px-8 py-4 bg-blue-600 rounded-2xl font-bold text-white transition-all hover:bg-blue-500 hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(37,99,235,0.4)]"
                >
                  Contact Our Engineers Today
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
