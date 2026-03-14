import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Contact TechStrota | Web Development & SaaS Solutions",
  description:
    "Contact TechStrota for web development, SaaS platforms, mobile app development and custom software solutions. Get a free consultation today.",
  keywords: [
    "contact TechStrota",
    "software development company contact",
    "web development services India",
    "SaaS development company",
    "mobile app development services",
  ],
};

export default function Contact() {
  return (
    <main className="min-h-screen w-full bg-[#020714] bg-gradient-to-br from-slate-950 via-slate-900 to-[#020714] text-white py-10">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
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

        <div className="grid md:grid-cols-2 rounded-2xl overflow-hidden border border-white/10 shadow-2xl backdrop-blur-xl">
          {/* LEFT CONTACT PANEL */}
          <div className="p-8 bg-gradient-to-br from-slate-900 via-slate-950 to-indigo-950">
            <h2 className="text-3xl font-bold mb-3 text-blue-400">
              Get In Touch
            </h2>

            <p className="text-gray-300 mb-8">
              Looking for web development, SaaS platforms or mobile app
              development? Our team is ready to help you build scalable software
              solutions.
            </p>

            <div className="space-y-6">
              {/* Email */}
              <div className="flex gap-4 items-center">
                <div className="bg-white/10 p-3 rounded-lg">📧</div>
                <div>
                  <p className="font-semibold">Email</p>
                  <a
                    href="mailto:info@techstrota.com"
                    className="text-blue-300 hover:text-white"
                  >
                    info@techstrota.com
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex gap-4 items-center">
                <div className="bg-white/10 p-3 rounded-lg">📞</div>
                <div>
                  <p className="font-semibold">Call</p>
                  <a
                    href="tel:+919033476660"
                    className="text-blue-300 hover:text-white"
                  >
                    +91 90334 76660
                  </a>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="flex gap-4 items-center">
                <div className="bg-white/10 p-3 rounded-lg">💬</div>
                <div>
                  <p className="font-semibold">WhatsApp</p>
                  <a
                    href="https://wa.me/918128840055"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-400 hover:text-white"
                  >
                    Chat on WhatsApp
                  </a>
                </div>
              </div>
            </div>

            {/* Quick CTA */}
            <div className="mt-10">
              <a
                href="https://wa.me/918128840055"
                target="_blank"
                className="inline-block bg-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-green-600 transition"
              >
                Start WhatsApp Chat
              </a>
            </div>
          </div>

          {/* CONTACT FORM */}
          <div className="p-8 bg-slate-950">
            <h2 className="text-2xl font-semibold mb-4">Send Inquiry</h2>

            <p className="text-gray-400 mb-6">
              Fill the form and our team will respond within 24 hours.
            </p>

            <form className="space-y-5">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full p-3 rounded-lg bg-white/5 border border-white/10 focus:border-blue-400 outline-none"
              />

              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full p-3 rounded-lg bg-white/5 border border-white/10 focus:border-blue-400 outline-none"
                />

                <input
                  type="tel"
                  placeholder="Phone"
                  className="w-full p-3 rounded-lg bg-white/5 border border-white/10 focus:border-blue-400 outline-none"
                />
              </div>

              <input
                type="text"
                placeholder="Subject"
                className="w-full p-3 rounded-lg bg-white/5 border border-white/10 focus:border-blue-400 outline-none"
              />

              <textarea
                rows={4}
                placeholder="Describe your project..."
                className="w-full p-3 rounded-lg bg-white/5 border border-white/10 focus:border-blue-400 outline-none"
              ></textarea>

              <button
                type="submit"
                className="w-full bg-blue-500 hover:bg-blue-600 transition px-6 py-3 rounded-lg font-semibold"
              >
                Submit Inquiry
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
