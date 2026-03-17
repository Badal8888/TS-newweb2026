"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";

import {
  FaLaptopCode,
  FaShoppingCart,
  FaCode,
  FaUsers,
  FaSearch,
  FaBullhorn,
  FaCloud,
  FaMobileAlt,
} from "react-icons/fa";

export default function Header() {
  const pathname = usePathname();

  const [menuOpen, setMenuOpen] = useState(false);
  const [serviceOpen, setServiceOpen] = useState(false);
  const [mobileServices, setMobileServices] = useState(false);

  const navLink = (path: string) =>
    pathname === path
      ? "text-blue-400 font-semibold"
      : "text-gray-300 hover:text-blue-400 transition";

  return (
    <header className="bg-[#020617] border-b border-gray-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image src="/logo.png" alt="TechStrota" width={150} height={40} />
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/" className={navLink("/")}>
            Home
          </Link>

          <Link href="/about" className={navLink("/about")}>
            About
          </Link>

          {/* Services */}
          <div
            className="relative"
            onMouseEnter={() => setServiceOpen(true)}
            onMouseLeave={() => setServiceOpen(false)}
          >
            <Link href="/services" className={navLink("/services")}>
              Services
            </Link>

            {/* Mega Menu */}
            <div
              className={`absolute left-1/2 -translate-x-1/2 top-10 pt-4 w-[90vw] max-w-3xl transition-all duration-300 ${
                serviceOpen
                  ? "opacity-100 translate-y-0 visible"
                  : "opacity-0 translate-y-4 invisible"
              }`}
            >
              <div className="bg-[#0F172A] border border-gray-800 rounded-xl shadow-xl p-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <ServiceLink
                    href="/services/web-development"
                    icon={<FaLaptopCode className="text-blue-400" />}
                    title="Web Development"
                    desc="Modern React & Next.js websites"
                  />

                  <ServiceLink
                    href="/services/Ecommerece-development"
                    icon={<FaShoppingCart className="text-green-400" />}
                    title="Ecommerce Development"
                    desc="Online stores & payment systems"
                  />

                  <ServiceLink
                    href="/services/web-application"
                    icon={<FaCode className="text-purple-400" />}
                    title="Web Applications"
                    desc="Custom business platforms"
                  />

                  <ServiceLink
                    href="/services/dedicated-developers"
                    icon={<FaUsers className="text-orange-400" />}
                    title="Dedicated Developers"
                    desc="Hire expert developers"
                  />

                  <ServiceLink
                    href="/services/seo"
                    icon={<FaSearch className="text-yellow-400" />}
                    title="SEO Optimization"
                    desc="Improve Google rankings"
                  />

                  <ServiceLink
                    href="/services/social-media-marketing"
                    icon={<FaBullhorn className="text-pink-400" />}
                    title="Social Media Marketing"
                    desc="Grow brand awareness"
                  />

                  <ServiceLink
                    href="/services/saas-development"
                    icon={<FaCloud className="text-cyan-400" />}
                    title="SaaS Development"
                    desc="Cloud platforms"
                  />

                  <ServiceLink
                    href="/services/mobile-app-development"
                    icon={<FaMobileAlt className="text-indigo-400" />}
                    title="Mobile Apps"
                    desc="Android & iOS apps"
                  />
                </div>
              </div>
            </div>
          </div>
          <Link href="/gallery" className={navLink("/gallery")}>
            TS Gallery
          </Link>
          <Link href="/blog" className={navLink("/blog")}>
            Blog
          </Link>
          <Link href="/portfolio" className={navLink("/portfolio")}>
            Portfolio
          </Link>

          <Link href="/contact" className={navLink("/contact")}>
            Contact
          </Link>
        </nav>

        {/* Mobile Button */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-[#020617] border-t border-gray-800 transition-all duration-300 ${
          menuOpen ? "max-h-[600px] py-6" : "max-h-0 overflow-hidden"
        }`}
      >
        <div className="px-6 space-y-4">
          <Link
            href="/"
            onClick={() => setMenuOpen(false)}
            className="block text-gray-300"
          >
            Home
          </Link>

          <Link
            href="/about"
            onClick={() => setMenuOpen(false)}
            className="block text-gray-300"
          >
            About
          </Link>

          {/* Mobile Services */}
          <button
            onClick={() => setMobileServices(!mobileServices)}
            className="block text-gray-300 w-full text-left"
          >
            Services
          </button>

          {mobileServices && (
            <div className="pl-4 space-y-2 text-gray-400">
              <Link
                href="/services/web-development"
                onClick={() => setMenuOpen(false)}
                className="block"
              >
                Web Development
              </Link>

              <Link
                href="/services/Ecommerece-development"
                onClick={() => setMenuOpen(false)}
                className="block"
              >
                Ecommerce Development
              </Link>

              <Link
                href="/services/web-application"
                onClick={() => setMenuOpen(false)}
                className="block"
              >
                Web Applications
              </Link>

              <Link
                href="/services/mobile-app-development"
                onClick={() => setMenuOpen(false)}
                className="block"
              >
                Mobile Apps
              </Link>

              <Link
                href="/services/seo"
                onClick={() => setMenuOpen(false)}
                className="block"
              >
                SEO
              </Link>

              <Link
                href="/services/saas-development"
                onClick={() => setMenuOpen(false)}
                className="block"
              >
                SaaS Development
              </Link>
            </div>
          )}

          <Link
            href="/blog"
            onClick={() => setMenuOpen(false)}
            className="block text-gray-300"
          >
            Blog
          </Link>

          <Link
            href="/contact"
            onClick={() => setMenuOpen(false)}
            className="block text-gray-300"
          >
          <Link href="/gallery" className="block text-gray-300">
            TS Gallery
          </Link>
          <Link href="/blog" className="block text-gray-300">
            Blog
          </Link>

          <Link href="/portfolio" className="block text-gray-300">
            Portfolio
          </Link>

          <Link href="/contact" className="block text-gray-300">
            Contact
          </Link>
        </div>
      </div>
    </header>
  );
}

function ServiceLink({
  href,
  icon,
  title,
  desc,
}: {
  href: string;
  icon: React.ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <Link
      href={href}
      className="flex items-start gap-4 p-3 rounded-lg hover:bg-[#1E293B] transition"
    >
      <div className="text-xl mt-1">{icon}</div>

      <div>
        <p className="font-semibold text-white">{title}</p>
        <p className="text-gray-400 text-sm">{desc}</p>
      </div>
    </Link>
  );
}
