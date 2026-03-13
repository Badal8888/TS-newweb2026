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
    <footer className="bg-[#020617] text-gray-300 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-4 gap-12">
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
            <a href="#" className="hover:text-blue-400 transition">
              <FaFacebookF />
            </a>

            <a href="#" className="hover:text-blue-400 transition">
              <FaInstagram />
            </a>

            <a href="#" className="hover:text-blue-400 transition">
              <FaLinkedinIn />
            </a>

            <a href="#" className="hover:text-blue-400 transition">
              <FaXTwitter />
            </a>

            <a href="#" className="hover:text-blue-400 transition">
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
              <Link href="/" className="hover:text-blue-400 transition">
                Home
              </Link>
            </li>

            <li>
              <Link href="/about" className="hover:text-blue-400 transition">
                About Us
              </Link>
            </li>

            <li>
              <Link href="/services" className="hover:text-blue-400 transition">
                Services
              </Link>
            </li>

            <li>
              <Link
                href="/portfolio"
                className="hover:text-blue-400 transition"
              >
                Portfolio
              </Link>
            </li>

            <li>
              <Link href="/blog" className="hover:text-blue-400 transition">
                Blog
              </Link>
            </li>

            <li>
              <Link href="/career" className="hover:text-blue-400 transition">
                Career
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
            156, 1st Floor, C Tower, K10 Atlantis <br />
            Near Genda Circle, Opp. Honest Restaurant <br />
            Vadodara, Gujarat 390007
          </p>

          {/* Google Map */}
          <div className="rounded-xl overflow-hidden border border-gray-800">
            <iframe
              src="https://maps.google.com/maps?q=K10%20Atlantis%20Vadodara&t=&z=13&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="150"
              loading="lazy"
            ></iframe>
          </div>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-6">Newsletter</h3>

          <p className="text-gray-400 mb-4">
            Subscribe to get updates about technology, startups and our latest
            projects.
          </p>

          <div className="flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-[#0F172A] border border-gray-700 px-4 py-3 rounded-l-lg w-full focus:outline-none"
            />

            <button className="bg-blue-600 px-5 rounded-r-lg hover:bg-blue-700 transition">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-800 mt-16 pt-6 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} TechStrota. All Rights Reserved.
      </div>
    </footer>
  );
}
