"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

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
    <main className="min-h-screen w-full bg-[#020714] text-white py-10">
      <div className="max-w-6xl mx-auto px-6">
        <h1 className="flex items-center justify-center gap-3 text-4xl font-bold mb-10 text-center">
          Contact
          <Link href="/">
            <Image
              src="/logo.png"
              alt="TechStrota Logo"
              width={150}
              height={40}
            />
          </Link>
        </h1>

        <div className="grid md:grid-cols-2 rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
          <div className="p-8 bg-slate-900">
            <h2 className="text-3xl font-bold mb-3 text-blue-400">
              Get In Touch
            </h2>

            <p className="text-gray-300 mb-8">
              Looking for web development, SaaS platforms or mobile app
              development? Our team is ready to help you build scalable software
              solutions.
            </p>
          </div>

          <div className="p-8 bg-slate-950">
            <h2 className="text-2xl font-semibold mb-4">Send Inquiry</h2>

            {success && <div className="text-green-400 mb-4">{success}</div>}

            <form className="space-y-5" onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Full Name"
                required
                className="w-full p-3 rounded-lg bg-white/5 border border-white/10"
              />

              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  required
                  className="w-full p-3 rounded-lg bg-white/5 border border-white/10"
                />

                <input
                  type="tel"
                  name="mobileno"
                  value={formData.mobileno}
                  onChange={handleChange}
                  placeholder="Phone"
                  required
                  className="w-full p-3 rounded-lg bg-white/5 border border-white/10"
                />
              </div>

              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Subject"
                className="w-full p-3 rounded-lg bg-white/5 border border-white/10"
              />

              <textarea
                rows={4}
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Describe your project..."
                required
                className="w-full p-3 rounded-lg bg-white/5 border border-white/10"
              />

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-lg font-semibold"
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
