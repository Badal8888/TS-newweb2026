"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  FaArrowLeft,
  FaGraduationCap,
  FaChartLine,
  FaPlay,
  FaBuilding,
  FaFileAlt,
  FaClipboardCheck,
  FaUserTie,
  FaDatabase,
  FaExpandArrowsAlt,
  FaUsers,
  FaKey,
  FaClock,
  FaCertificate,
  FaServer,
  FaShieldAlt,
  FaExclamationTriangle,
  FaLaptop,
  FaUserShield,
  FaSignInAlt,
  FaColumns,
  FaIdCard,
  FaCloudDownloadAlt,
  FaCogs,
  FaLock,
  FaCheckCircle,
  FaTerminal,
} from "react-icons/fa";
import { SiTailwindcss, SiLaravel, SiMysql } from "react-icons/si";

const platformsBenefits = [
  {
    title: "Centralized Command Center",
    desc: "A single unified glass panel for coordinators to track active cohorts, department allocations, and trainee records in real time.",
    icon: <FaChartLine className="text-blue-400" />,
    badge: "Real-Time Tracking",
  },
  {
    title: "Automated Lifecycle & Onboarding",
    desc: "Digitize standard forms, execute automated offer generation, maintain document repositories, and process systematic alumni tracking.",
    icon: <FaFileAlt className="text-emerald-400" />,
    badge: "Workflow Automation",
  },
  {
    title: "Real-Time Performance Logs",
    desc: "Provides digital submission pipelines, milestone trackers, and daily/weekly activity logs to completely eliminate administrative guesswork.",
    icon: <FaClipboardCheck className="text-cyan-400" />,
    badge: "Zero Guesswork",
  },
  {
    title: "360° Evaluation Engine",
    desc: "Configurable scoring rubrics and standardized mid-term/final evaluation templates to remove subjective feedback or grading anomalies.",
    icon: <FaUserTie className="text-[#FFC933]" />,
    badge: "Unbiased Audits",
  },
  {
    title: "Accountable Mentorship Matrix",
    desc: "Seamlessly assign specialized mentors, monitor live instruction workloads, and log direct trainee-mentor communications securely.",
    icon: <FaUsers className="text-pink-400" />,
    badge: "Structured Guidance",
  },
  {
    title: "Accreditation & Auditable Analytics",
    desc: "Deep-dive diagnostic data summaries exportable directly to PDF, Excel, and CSV formats. System-wide trails are ready for compliance reviews.",
    icon: <FaDatabase className="text-purple-400" />,
    badge: "Compliance Ready",
  },
];

const structuralPillars = [
  {
    name: "Data Integrity",
    value:
      "A definitive single source of truth—engineered to eliminate database silos and duplicate data arrays permanently.",
    gradient: "from-blue-500/10 to-transparent",
  },
  {
    name: "Fluid Scalability",
    value:
      "A heavy-duty software structure engineered to operate flawlessly whether executing queries for 50 or 5,000+ interns.",
    gradient: "from-emerald-500/10 to-transparent",
  },
  {
    name: "Device Agnostic",
    value:
      "A beautiful, premium UI designed to remain incredibly sharp and fast across desktop, tablet, and phone displays.",
    gradient: "from-cyan-500/10 to-transparent",
  },
];

const technologyArchitectureStack = [
  {
    layer: "Frontend Mobile / Web App",
    icon: <SiTailwindcss className="text-cyan-400" />,
    items: [
      {
        title: "Filament v3 & Tailwind CSS",
        desc: "Modern panel layouts optimizing dashboards across all devices seamlessly.",
      },
      {
        title: "Livewire & Alpine.js",
        desc: "Powers reactive real-time views with 3-second auto-polling updates.",
      },
    ],
  },
  {
    layer: "Backend Command Orchestration",
    icon: <SiLaravel className="text-[#FF2D20]" />,
    items: [
      {
        title: "Laravel PHP Framework (^12.0)",
        desc: "Robust core MVC engine driving administrative workflows and business logic.",
      },
      {
        title: "RESTful Secure APIs Engine",
        desc: "Handles data routing, security hooks, and lookup actions natively.",
      },
    ],
  },
  {
    layer: "Database Engine",
    icon: <SiMysql className="text-[#00758F]" />,
    items: [
      {
        title: "MySQL Infrastructure (iapes_db)",
        desc: "Normalized 24-table schema structured to permanently wipe out data silos.",
      },
      {
        title: "Eloquent ORM Architecture",
        desc: "Uses eager loading optimizations to eliminate query performance bottlenecks.",
      },
    ],
  },
  {
    layer: "Token Authentication Security",
    icon: <FaKey className="text-amber-400" />,
    items: [
      {
        title: "Laravel Sanctum Stateful Guarding",
        desc: "Multi-guard filters separating scopes securely for admins, mentors, and interns.",
      },
    ],
  },
  {
    layer: "Asynchronous Processing Power",
    icon: <FaClock className="text-emerald-400" />,
    items: [
      {
        title: "Laravel Database Queue System",
        desc: "Handles heavy email operations in the background to stop interface delays.",
      },
    ],
  },
  {
    layer: "High-Fidelity Rendering Engine",
    icon: <FaCertificate className="text-purple-400" />,
    items: [
      {
        title: "Browsershot & Headless Puppeteer",
        desc: "Server-side Chrome engine generating pixel-perfect landscape PDF certificates.",
      },
      {
        title: "QR Code Verification Layer",
        desc: "Embeds secure QR verification codes onto files to prevent document forgery.",
      },
    ],
  },
  {
    layer: "File System Layer",
    icon: <FaServer className="text-blue-400" />,
    items: [
      {
        title: "Cloud-Optimized Storage Drivers",
        desc: "Manages local disk paths to isolate resumes, photos, and ZIP archives safely.",
      },
    ],
  },
];

export default function IapesProductPage() {
  return (
    <main className="bg-[#030712] text-slate-100 min-h-screen relative overflow-hidden pt-16 pb-20 font-sans">
      {/* Unique Technical Dynamic Grid Line Background Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f29370a_1px,transparent_1px),linear-gradient(to_bottom,#1f29370a_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none"></div>

      {/* Asymmetric Light Flares */}
      <div className="absolute top-[-20%] left-[-10%] w-[800px] h-[800px] bg-cyan-500/[0.03] blur-[150px] rounded-full pointer-events-none"></div>
      <div className="absolute top-[20%] right-[-20%] w-[600px] h-[600px] bg-blue-600/[0.04] blur-[130px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* RE-ENGINEERED HEADER: WIDESCREEN INDUSTRIAL SUMMARY */}
        <div className="border-l-2 border-cyan-500/40 pl-6 md:pl-10 max-w-4xl mb-15">
          <div className="inline-flex items-center gap-2.5 px-3 py-1 rounded-md bg-cyan-950/40 border border-cyan-800/30 text-[10px] font-mono tracking-widest text-cyan-400 uppercase mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
            SaaS PLATFORM
          </div>
          <motion.h1
            className="text-5xl sm:text-6xl md:text-8xl font-black tracking-tighter mb-6 leading-none uppercase text-white"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            IAPES
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl text-slate-300 max-w-5xl leading-relaxed mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.15, duration: 0.6 }}
          >
            A high-order cloud architecture developed by Techstrota to inject
            real-time tracking loops into corporate and varsity arrays.
          </motion.p>
          <p className="text-sm text-slate-400 leading-relaxed max-w-3xl">
            This platform acts as a definitive single source of truth,
            automating life cycle routing from public multi-field applications
            to verified document issuance pipelines.
          </p>
        </div>

        {/* SCREEN SHOWCASE: INTEGRATED SYSTEM TERMINAL COCKPIT */}
        <div className="grid lg:grid-cols-12 gap-8 items-start mb-15">
          <div className="lg:col-span-8 bg-[#090d16] border border-slate-800/80 rounded-2xl p-3 shadow-2xl relative">
            <div className="flex items-center justify-between mb-3 px-2 border-b border-slate-800 pb-3">
              <div className="flex items-center gap-2">
                <FaTerminal className="text-xs text-cyan-500 font-mono" />
                <span className="text-[10px] font-mono tracking-widest text-slate-400 uppercase">
                  iapes_dashboard_demo
                </span>
              </div>
              <span className="text-[9px] text-cyan-400/70 bg-cyan-950/40 border border-cyan-900/40 px-2 py-0.5 rounded">
                SaaS ACTIVE
              </span>
            </div>
            <div className="relative aspect-video rounded-xl overflow-hidden bg-black/40 border border-slate-900 shadow-inner">
              {/* 🌟 UPDATED VIDEO ATTTRIBUTES FOR AUTOPLAY AND BACKUP FEATURE ACCESS */}
              <video
                controls
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
              >
                <source src="/iapes/video.mp4" type="video/mp4" />
              </video>
            </div>
          </div>

          {/* ASYMMETRIC FLUID WORKSPACE DIRECTORIES PANEL */}
          <div className="lg:col-span-4 space-y-4">
            <div className="p-6 bg-gradient-to-b from-slate-900/60 to-transparent border border-slate-800 rounded-2xl">
              <h3 className="text-xs font-mono font-bold tracking-widest text-slate-400 uppercase mb-4 flex items-center gap-2">
                <FaCogs className="text-cyan-500" /> Target Workspace Clusters
              </h3>
              <div className="space-y-2.5">
                {[
                  {
                    name: "Academic Varsities & Campuses",
                    type: "EDTECH CONFIG",
                  },
                  {
                    name: "Engineering & Multi-Branch Colleges",
                    type: "CORE ROUTING",
                  },
                  { name: "Vocational Incubation Hubs", type: "DEPLOY MODULE" },
                  {
                    name: "Corporate Enterprise HR Units",
                    type: "HR INTERFACE Scope",
                  },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-[#090d16]/80 border border-slate-800 flex justify-between items-center group hover:border-cyan-500/30 transition-colors"
                  >
                    <span className="text-xs text-slate-300 font-medium group-hover:text-white transition-colors">
                      {item.name}
                    </span>
                    <span className="text-[8px] font-mono text-slate-500 bg-slate-900 px-2 py-0.5 rounded border border-slate-800 group-hover:text-cyan-400 transition-colors">
                      {item.type}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* THE IAPES OPERATIONAL FLOW: RE-ENGINEERED VERTICAL COMPACT TIMELINE THREAD */}
        <div className="mb-15 border-t border-white/10 pt-12">
          <div className="max-w-xl mb-16">
            <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white uppercase">
              The Flow Logic
            </h2>
            <p className="text-slate-400 mt-2 text-sm md:text-base">
              Unified lifecycle synchronization mapping structural candidates
              onto auditable institutional data outputs.
            </p>
          </div>

          {/* MAIN LINE THREAD WRAPPER */}
          <div className="relative ml-4 md:ml-6 pl-8 md:pl-12 space-y-10 max-w-4xl">
            {[
              {
                step: "01",
                title: "Candidate Public Application Intake",
                desc: "Applicants submit via a zero-auth localized page, immediately prompting data generation loops including sequential application indices and stateful tokens.",
              },
              {
                step: "02",
                title: "Asynchronous Interview Scheduling Control",
                desc: "Management coordinates rows into specific groupings and triggers transactional confirmation dispatches asynchronously via isolated system queues.",
              },
              {
                step: "03",
                title: "Automated Document Letter Compilations",
                desc: "System auto-assembles core placement metrics inside localized server frameworks to render download-ready completion documents safely.",
              },
              {
                step: "04",
                title: "System Identity Profile Onboarding",
                desc: "Once validated, the app maps operational accounts instantly, provisioning database schemas and outputting digital identification credentials.",
              },
              {
                step: "05",
                title: "Task Matrices & Operational Logs Tracking",
                desc: "Supervisors pass custom production assignments down to tracking queues while active profiles file hours directly within user sheets.",
              },
              {
                step: "06",
                title: "360° Assessment Rubrics & Immutable Audits",
                desc: "System cores execute standardized parameter tracking rules, compiling complete activity history changes into write-locked registers.",
              },
              {
                step: "07",
                title: "Secure Cryptographic Certification Streams",
                desc: "Deploys headless Chromium processors to create landscape verification structures matching data footprints perfectly.",
              },
            ].map((flow, idx) => (
              <div key={idx} className="relative w-full">
                {/* Node Ring Indicator Pin */}
                <div className="absolute left-0 -translate-x-1/2 top-1.5 w-6 h-6 rounded-full bg-[#030712] border border-amber-500/30 group-hover:border-amber-400 flex items-center justify-center transition-colors z-20">
                  <span className="text-[9px] font-mono font-bold text-amber-400">
                    {flow.step}
                  </span>
                </div>

                {/* TIMELINE CARD CONTAINER */}
                <div className="p-5 rounded-xl bg-white/[0.01] border border-amber-500/20 group-hover:border-amber-500/50 transition-all duration-300">
                  <h4 className="text-base font-bold text-blue-400 transition-colors">
                    {flow.title}
                  </h4>
                  <p className="text-sm text-slate-400 leading-relaxed max-w-2xl mt-1">
                    {flow.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FUNCTIONAL INFRASTRUCTURE: ALTERNATING FULL-WIDTH WIDESCREEN FLOW PANELS */}
        <div className="mb-15 border-t border-slate-800/60 pt-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-4">
            <div>
              <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white uppercase">
                System Features
              </h2>
              <p className="text-slate-400 mt-2 text-sm md:text-base">
                Comprehensive multi-layer control schemes running inside your
                tracking matrix dashboards.
              </p>
            </div>
          </div>

          <div className="space-y-4 max-w-5xl mx-auto w-full">
            {platformsBenefits.map((feat, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white/[0.01] border border-amber-500/30 hover:border-slate-800/60 transition-all duration-300 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-slate-900 border border-slate-800 rounded-xl text-lg text-cyan-400 shadow-inner">
                    {feat.icon}
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white mb-0.5">
                      {feat.title}
                    </h3>
                    <p className="text-sm text-slate-400 max-w-xl leading-relaxed">
                      {feat.desc}
                    </p>
                  </div>
                </div>
                <span className="text-[9px] font-mono font-bold tracking-wider uppercase px-2.5 py-1 bg-slate-900 border border-slate-800 text-slate-400 rounded-md whitespace-nowrap self-start sm:self-center">
                  {feat.badge}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* PORTAL SPECIFICS MAPPING: ALTERNATING ROLE BLOCK TIERS */}
        <div className="mb-15 border-t border-slate-800/60 pt-12">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* PORTAL LAYER 1: INTERN PORTAL INFRASTRUCTURE */}
            <div className="space-y-6">
              <div className="mb-6">
                <h3 className="text-xl md:text-2xl font-bold text-white flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-500"></span>{" "}
                  Intern Interface Engine
                </h3>
                <p className="text-sm text-slate-400 mt-1">
                  Dedicated trainee self-service web panels built for milestone
                  uploads and tracking tasks.
                </p>
              </div>

              <div className="space-y-3">
                {[
                  {
                    name: "Secure Credential Gateway",
                    desc: "Initial student login window validating system-assigned credentials via secure web tokens before granting dashboard access.",
                  },
                  {
                    name: "Interactive Onboarding Hub",
                    desc: "Post-authentication staging interface allowing interns to review, accept, or reject digital offer letter templates seamlessly.",
                  },
                  {
                    name: "Dynamic Profile Desk",
                    desc: "Displays personal identity nodes showing unique Intern ID codes, course domains, department tracks, and assigned teammates.",
                  },
                  {
                    name: "Task Management Pipeline",
                    desc: "Dedicated queue highlighting supervisor tasks, tracking due deadlines, allowing project submissions, and fetching evaluator remarks.",
                  },
                  {
                    name: "Document Downloader",
                    desc: "One-click download vault allowing interns to instantly save their system-generated digital ID cards, offer sheets, and completion certificates.",
                  },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-white/[0.01] border border-blue-500/30 hover:bg-slate-900/30 transition-colors"
                  >
                    <h4 className="text-xs font-bold text-purple-400 uppercase tracking-wider mb-1">
                      {item.name}
                    </h4>
                    <p className="text-sm text-slate-400 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
              <div className="p-3.5 rounded-xl bg-purple-950/20 border border-purple-900/30 text-[12px] font-mono text-purple-400 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-500 animate-pulse"></span>
                FRAMEWORK DESK: NEXT.JS / TAILWIND NODE STACK
              </div>
            </div>

            {/* PORTAL LAYER 2: ADMINISTRATIVE CONTROLS */}
            <div className="space-y-6">
              <div className="mb-6">
                <h3 className="text-xl md:text-2xl font-bold text-white flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-500"></span>{" "}
                  Central Admin Dashboard
                </h3>
                <p className="text-sm text-slate-400 mt-1">
                  Multi-tenant management dashboards for complete oversight and
                  program analytics.
                </p>
              </div>

              <div className="space-y-3">
                {[
                  {
                    name: "Universal Authentication Gateway",
                    desc: "Central security entrance protecting admin-side modules, separating system access tokens, and maintaining multi-guard session parameters.",
                  },
                  {
                    name: "Live Analytics Matrix",
                    desc: "Interactive command views highlighting program totals like applications received, interview numbers, and active intern metrics at a glance.",
                  },
                  {
                    name: "Recruitment Pipeline Command",
                    desc: "Core applicant workspace to filter large submission volumes, download resume documents, add internal comments, and move status tiers.",
                  },
                  {
                    name: "Interview Scheduling Board",
                    desc: "Enables coordinators to assemble custom interview batches, select dates, schedule evaluators, and compile performance entry cards.",
                  },
                  {
                    name: "Automated Offer Engine",
                    desc: "Drafting terminal to assign internship details, configure role descriptions, select letter designs, and generate streamed PDFs.",
                  },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-white/[0.01] border border-blue-500/30 hover:bg-slate-900/30 transition-colors"
                  >
                    <h4 className="text-xs font-bold text-cyan-400 uppercase tracking-wider mb-1">
                      {item.name}
                    </h4>
                    <p className="text-sm text-slate-400 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
              <div className="p-3.5 rounded-xl bg-cyan-950/20 border border-cyan-900/30 text-[12px] font-mono text-cyan-400 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 animate-pulse"></span>
                FRAMEWORK DESK: LARAVEL 12 / FILAMENT 3 PANEL MODULES
              </div>
            </div>
          </div>
        </div>

        {/* HIERARCHICAL RBAC TIERS BREAKDOWN ROLES SYSTEM */}
        <div className="mb-15 border-t border-slate-800/60 pt-12">
          <div className="mb-12">
            <h2 className="text-2xl md:text-4xl font-black tracking-tight text-white uppercase">
              User Role Allocation
            </h2>
            <p className="text-slate-400 text-sm md:text-base mt-1">
              System clearance scope criteria boundaries running natively at the
              routing gate level.
            </p>
          </div>

          <div className="space-y-4 w-full">
            {[
              {
                tier: "TIER 01",
                name: "Admin / HR Coordinator",
                scope: "GLOBAL SCOPE",
                border: "border-red-500/20",
                tagBg: "text-red-400 bg-red-500/5",
                bullets: [
                  "Full System Access & Profile Configuration: Retains complete administrative input control to create intern accounts, manage user roles, and trigger secure password resets across the system modules.",
                  "Recruitment & Interview Management: Authorized to filter applications, shortlist candidates, download resumes, assign interview panelists, and record scores within a centralized table.",
                  "Enforced Oversight Boundaries: Drives critical automated operational pipelines including issuing structured offer letters, evaluating performance rubrics, and generating custom certificates. Cannot access an intern's personal dashboard directly without a verified audit trail entry.",
                ],
              },
              {
                tier: "TIER 02",
                name: "Mentor Supervisor",
                scope: "COHORT RESTRICTED",
                border: "border-amber-500/20",
                tagBg: "text-amber-400 bg-amber-500/5",
                bullets: [
                  "Instructional Workflow Oversight: Authorized to view assigned intern data, allocate operational tasks, monitor project milestones, and evaluate task submissions in real time.",
                  "Auditable Guidance Tracking: Logs all direct feedback, scores, and status markings transparently into an immutable system activity log to ensure comprehensive tracking accountability.",
                ],
              },
              {
                tier: "TIER 03",
                name: "Intern Profile (End User)",
                scope: "PERSONAL ACCT SCOPE",
                border: "border-blue-500/20",
                tagBg: "text-blue-400 bg-blue-500/5",
                bullets: [
                  "Personal Dashboard Access Only: Exclusive permission to log into a dedicated self-service panel to manage their personal profile and monitor historical records.",
                  "Operational Submission & Verification: Submits daily attendance logs, views assigned task deadlines, uploads completed work attachments, and updates progress notes smoothly.",
                  "Read-Only Security Boundaries: Zero capability to modify past attendance logs, configure milestone evaluation scores, or alter issued certificate content. Retains download-only permissions for documents.",
                ],
              },
              {
                tier: "TIER 04",
                name: "Candidate Applicant",
                scope: "PUBLIC SCOPE ONLY",
                border: "border-purple-500/20",
                tagBg: "text-purple-400 bg-purple-500/5",
                bullets: [
                  "Public Open Portal Access: Allows public access to fill out and submit the multi-field internship application form and upload resumes without a prior account login.",
                  "Isolated Application Tracking: Limited to tracking real-time application status changes via secure, automated transaction tokens sent through email confirmation links.",
                  "Zero System Visibility: Restricts any view of internal system modules, active cohorts, admin remarks, or independent candidate profiles permanently.",
                ],
              },
            ].map((role, rIdx) => (
              <div
                key={rIdx}
                className={`p-6 rounded-xl bg-[#090d16]/40 border ${role.border} flex flex-col md:flex-row gap-6 justify-between items-start`}
              >
                <div className="md:w-1/3 space-y-2">
                  <span className="text-[10px] font-mono tracking-widest text-slate-500 font-bold block">
                    {role.tier}
                  </span>
                  <h4 className="text-lg font-bold text-white tracking-tight">
                    {role.name}
                  </h4>
                  <span
                    className={`inline-block text-[9px] font-mono tracking-wider font-bold px-2 py-0.5 rounded border border-white/5 uppercase ${role.tagBg}`}
                  >
                    {role.scope}
                  </span>
                </div>
                <div className="md:w-2/3 space-y-2">
                  {role.bullets.map((bullet, bIdx) => (
                    <p
                      key={bIdx}
                      className="text-xs md:text-sm text-slate-400 leading-relaxed pl-4 border-l border-slate-800"
                    >
                      {bullet}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 p-4 rounded-xl bg-amber-500/5 border border-amber-500/20 max-w-3xl flex items-center gap-3">
            <FaExclamationTriangle className="text-[#FFC933] text-lg flex-shrink-0" />
            <p className="text-sm text-slate-400 leading-relaxed">
              <span className="text-white font-bold uppercase tracking-wider text-[13px] mr-1">
                Dynamic Security Guardrails:
              </span>
              When unauthorized endpoints or out-of-bounds cross-role actions
              are attempted, server-side Sanctum token blocks terminate requests
              instantly and enforce read-only visibility boundaries at the UI
              level.
            </p>
          </div>
        </div>

        {/* TECHNOLOGY ARCHITECTURE: SLENDER TWO-COLUMN MATRIX LINES */}
        <div className="mb-15 border-t border-slate-400/60 pt-12">
          <div className="max-w-xl mb-16">
            <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white uppercase">
              System Blueprints
            </h2>
            <p className="text-gray-400 mt-2 text-sm md:text-base">
              Robust language distribution schemas protecting data operations
              pipelines flawlessly.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 max-w-5xl mx-auto w-full">
            {technologyArchitectureStack.map((tech, tIdx) => (
              <div
                key={tIdx}
                className="p-5 rounded-xl bg-[#090d16]/30 border border-slate-700 relative overflow-hidden flex flex-col gap-3"
              >
                <div className="absolute top-0 left-0 w-1 h-full bg-cyan-500/30 opacity-100"></div>
                <div className="flex items-center gap-3 border-b border-slate-800/80 pb-2">
                  <div className="text-slate-400 text-base">{tech.icon}</div>
                  <h3 className="text-sm font-mono font-bold tracking-wider uppercase text-slate-300">
                    {tech.layer}
                  </h3>
                </div>
                <div className="space-y-3 mt-1">
                  {tech.items.map((subItem, sIdx) => (
                    <div key={sIdx} className="space-y-0.5">
                      <h4 className="text-sm font-bold text-white font-mono tracking-wide">
                        {subItem.title}
                      </h4>
                      <p className="text-[13px] text-slate-400 leading-normal">
                        {subItem.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* SYSTEM CORE SECURITY COMPLIANCE DECK */}
        <div className="mb-15 border-t border-slate-800/60 pt-12">
          <div className="text-left mb-12">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-cyan-950/40 border border-cyan-900/40 text-[10px] font-mono tracking-wider text-cyan-400 uppercase mb-4">
              <FaShieldAlt /> ENCRYPTION STANDARD SEC_01
            </div>
            <h2 className="text-2xl md:text-4xl font-black tracking-tight text-white uppercase">
              IAPES Security Model
            </h2>
            <p className="text-slate-400 text-sm md:text-base">
              Engineered with deep relational isolation matrices to guarantee
              absolute data privacy and protection.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Role-Based Authentication",
                desc: "Secured token-based multi-guard credential mapping. Restricts backend API and user panel layouts to authenticated scopes perfectly.",
              },
              {
                title: "Relational Data Isolation",
                desc: "Rigid database-level separation layer routing. Cohorts and administrative entries are walled off at core database queries via Eloquent relationships.",
              },
              {
                title: "Team-Based Access Control",
                desc: "Granular authorization mechanics preventing external visibility or leakage of technical task submissions beyond explicit project teams.",
              },
              {
                title: "Permission-Based Visibility",
                desc: "Dynamic structural layout controls. Renders specific dashboard cards, modules, and metrics based on parent access allocation override keys.",
              },
            ].map((sec, sIdx) => (
              <div
                key={sIdx}
                className="p-5 rounded-xl bg-white/[0.01] border border-slate-700 flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-sm font-mono font-bold text-white mb-2 uppercase tracking-wider flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-cyan-400"></span>
                    {sec.title}
                  </h3>
                  <p className="text-[13px] text-slate-400 leading-relaxed">
                    {sec.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 p-4 rounded-xl bg-slate-950 border border-slate-900 flex items-center gap-3">
            <FaLock className="text-slate-500 flex-shrink-0 text-xs" />
            <p className="text-[13px] font-mono text-slate-500">
              [ENFORCEMENT SYSTEM ACTIVE] No parameter fields can discover
              structural databases outside explicit tokens.
            </p>
          </div>
        </div>

        {/* HIGH-CONVERSION CTA SECTION FROM MAIN BRAND CONTEXT */}
        <section className="relative z-10 py-10">
          <div className="relative rounded-[2rem] bg-gradient-to-b from-[#090d16] to-transparent border border-slate-600 p-12 md:p-20 overflow-hidden text-center shadow-2xl">
            <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-cyan-600/10 blur-[80px] rounded-full"></div>
            <div className="absolute -top-24 -left-24 w-64 h-64 bg-blue-500/5 blur-[80px] rounded-full"></div>

            <div className="relative z-10">
              <h2 className="text-3xl md:text-6xl font-black mb-6 tracking-tight leading-none text-white uppercase">
                Stop Managing Spreadsheets. <br />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
                  Start Building Futures.
                </span>
              </h2>

              <p className="max-w-xl mx-auto mt-6 text-slate-400 text-md leading-relaxed">
                Let us help you transition your infrastructure to an
                intelligent, automated, and hassle-free internship ecosystem
                today.
              </p>

              <div className="mt-12 flex flex-col sm:flex-row justify-center items-center gap-6">
                <Link
                  href="/contact"
                  className="group relative px-8 py-3.5 bg-cyan-600 hover:bg-cyan-500 border border-cyan-500/30 rounded-xl text-xs font-mono font-bold tracking-widest uppercase text-white transition-all hover:scale-105 active:scale-95 shadow-[0_0_30px_rgba(6,182,212,0.2)]"
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
