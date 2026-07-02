import Image from "next/image";
import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaXTwitter,
} from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="relative backdrop-blur-md border-t border-white/10 text-gray-300 pt-20 pb-10">
      <div className="relative z-10 max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Company */}
        <div>
          <Image
            src="/logo.png"
            alt="TechStrota"
            width={160}
            height={50}
            className="mb-6"
          />

          <p className="text-gray-400 leading-relaxed mb-6">
            TechStrota builds scalable web platforms, SaaS products, and mobile
            applications that help startups and enterprises grow faster using
            modern technologies.
          </p>

          {/* Social */}
          <div className="flex gap-4 text-lg">
            <a
              href="https://www.facebook.com/people/Tech-Strota/61550062532070/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#1877F2] hover:scale-110 transition"
            >
              <FaFacebookF />
            </a>

            <a
              href="https://www.instagram.com/techstrota/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#E4405F] hover:scale-110 transition"
            >
              <FaInstagram />
            </a>

            <a
              href="https://www.linkedin.com/company/107613221/admin/dashboard/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#0A66C2] hover:scale-110 transition"
            >
              <FaLinkedinIn />
            </a>

            <a
              href="https://twitter.com/techstrota"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:scale-110 transition"
            >
              <FaXTwitter />
            </a>

            <a
              href="https://www.youtube.com/@techstrota"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#FF0000] hover:scale-110 transition"
            >
              <FaYoutube />
            </a>
          </div>
        </div>

        {/* Useful Links */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-6">
            Useful Links
          </h3>

          <ul className="space-y-3">
            <li>
              <Link href="/" className="text-blue-400 transition">
                Home
              </Link>
            </li>

            <li>
              <Link href="/about" className="text-blue-400 transition">
                About Us
              </Link>
            </li>

            <li>
              <Link href="/services" className="text-blue-400 transition">
                Services
              </Link>
            </li>

            <li>
              <Link href="/portfolio" className="text-blue-400 transition">
                Portfolio
              </Link>
            </li>

            <li>
              <Link href="/blog" className="text-blue-400 transition">
                Blog
              </Link>
            </li>

            <li>
              <Link href="/gallery" className="text-blue-400 transition">
                TS Gallery
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-6">
            Contact Info
          </h3>

          <p className="text-gray-400 mb-4 leading-relaxed">
            503, Sterling Centre, R C Dutt Road,near fairfield Hotel Alkapuri,
            Vadodara, Gujarat, India - 390007 <br />
            CIN: GJ240114897 <br />
            GSTIN: 24AAVFT0941Q1ZF <br />
          </p>
        </div>

        {/* Newsletter */}
        <div>
          {/* Google Map */}
          <div className="rounded-xl overflow-hidden border border-gray-800">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.1452737157033!2d73.17069167384061!3d22.310344942534083!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fca3bf1872097%3A0x27b8ab5e9a99528d!2sTechStrota!5e0!3m2!1sen!2sin!4v1778224393632!5m2!1sen!2sin"
              width="100%"
              height="150"
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-800 mt-16 pt-6 text-center font-bold text-gray-500 text-md">
        © {new Date().getFullYear()} TechStrota. All Rights Reserved.
      </div>
    </footer>
  );
}
