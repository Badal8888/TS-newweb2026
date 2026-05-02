"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaXTwitter,
} from "react-icons/fa6";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobileno: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setLoading(true);
    setSuccess("");

    try {
      const res = await fetch("https://admin.techstrota.com/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success) {
        setSuccess("Your inquiry has been submitted successfully.");

        setFormData({
          name: "",
          email: "",
          mobileno: "",
          subject: "",
          message: "",
        });
      }
    } catch (error) {
      console.error(error);
    }

    setLoading(false);
  };

  return (
    <main className="min-h-screen w-full bg-[#020714] text-white py-8 sm:py-10 mb-10">
      <div className=" relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        {/* Heading */}
        <h1 className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-10 text-center">
          Contact{" "}
          <span>
            <span className="text-[#FFC933]">Tech</span>
            <span className="text-[#2AB4F4]">strota</span>
          </span>
        </h1>

        {/* Card */}
        <div className="grid grid-cols-1 md:grid-cols-2 rounded-2xl overflow-hidden border border-amber-400/50 shadow-[0_0_50px_-12px_rgba(59,130,246,0.5)]">
          {/* Left Section */}
          <div className="p-6 sm:p-8 bg-slate-900">
            <h2 className="text-2xl sm:text-3xl font-bold mb-3 text-blue-400">
              Get In Touch
            </h2>

            <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-6">
              Looking for web development, SaaS platforms or mobile app
              development? Our team is ready to help you build scalable software
              solutions.
            </p>

            {/* Contact Info */}
            <div className="space-y-4 text-sm sm:text-base text-gray-300">
              <div>
                <p className="font-semibold text-white">📍 Address</p>
                <p>
                  503, Sterling Centre, R C Dutt Road, near fairfield Hotel
                  Alkapuri, Vadodara - 390007
                </p>
              </div>

              <div>
                <p className="font-semibold text-white">📞 Phone</p>
                <p>+91 81288 40055</p>
              </div>

              <div>
                <p className="font-semibold text-white">📧 Email</p>
                <p>techstrota@gmail.com</p>
              </div>
            </div>

            {/* Social */}
            <div className="mt-6">
              <p className="text-sm text-gray-400 mb-3">Follow us</p>

              <div className="flex flex-wrap gap-3">
                <a
                  href="https://www.facebook.com/people/Tech-Strota/61550062532070/"
                  target="_blank"
                  className="w-10 h-10 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 hover:bg-blue-500 hover:scale-110 transition-all duration-300"
                >
                  <FaFacebookF />
                </a>

                <a
                  href="https://www.instagram.com/techstrota/"
                  target="_blank"
                  className="w-10 h-10 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 hover:bg-pink-500 hover:scale-110 transition-all duration-300"
                >
                  <FaInstagram />
                </a>

                <a
                  href="https://www.linkedin.com/company/107613221/admin/dashboard/"
                  target="_blank"
                  className="w-10 h-10 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 hover:bg-blue-600 hover:scale-110 transition-all duration-300"
                >
                  <FaLinkedinIn />
                </a>

                <a
                  href="https://twitter.com/techstrota"
                  target="_blank"
                  className="w-10 h-10 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 hover:bg-gray-700 hover:scale-110 transition-all duration-300"
                >
                  <FaXTwitter />
                </a>

                <a
                  href="https://www.youtube.com/@techstrota"
                  target="_blank"
                  className="w-10 h-10 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 hover:bg-red-500 hover:scale-110 transition-all duration-300"
                >
                  <FaYoutube />
                </a>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="p-6 sm:p-8 bg-slate-950">
            <h2 className="text-xl sm:text-2xl font-semibold mb-4">
              Send Inquiry
            </h2>

            {success && (
              <div className="text-green-400 text-sm mb-4">{success}</div>
            )}

            <form className="space-y-4 sm:space-y-5" onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Full Name"
                required
                className="w-full p-3 text-sm sm:text-base rounded-lg bg-white/5 border border-white/10 focus:outline-none focus:border-blue-500"
              />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  required
                  className="w-full p-3 text-sm sm:text-base rounded-lg bg-white/5 border border-white/10 focus:outline-none focus:border-blue-500"
                />

                <input
                  type="tel"
                  name="mobileno"
                  value={formData.mobileno}
                  onChange={handleChange}
                  placeholder="Phone"
                  required
                  className="w-full p-3 text-sm sm:text-base rounded-lg bg-white/5 border border-white/10 focus:outline-none focus:border-blue-500"
                />
              </div>

              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Subject"
                className="w-full p-3 text-sm sm:text-base rounded-lg bg-white/5 border border-white/10 focus:outline-none focus:border-blue-500"
              />

              <textarea
                rows={4}
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Describe your project..."
                required
                className="w-full p-3 text-sm sm:text-base rounded-lg bg-white/5 border border-white/10 focus:outline-none focus:border-blue-500"
              />

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-lg font-semibold transition-all active:scale-95"
              >
                {loading ? "Submitting..." : "Submit Inquiry"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
