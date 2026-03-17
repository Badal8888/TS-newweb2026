import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";

export default function TeamSection() {
  return (
    <section className="py-24 bg-[#020617] text-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Meet Our Team</h2>

          <p className="text-gray-400 max-w-2xl mx-auto">
            Our talented professionals at TechStrota work together to build
            scalable SaaS platforms, web applications and innovative digital
            solutions.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {/* Member 1 */}
          <div className="group bg-[#0F172A] border border-gray-800 rounded-xl overflow-hidden hover:border-blue-500 transition">
            <div className="relative overflow-hidden">
              <img
                src="/team/badal.jpg"
                alt="Badal Patel Founder TechStrota"
                className="w-full h-64 object-cover group-hover:scale-110 transition duration-500"
              />

              {/* Social Icons */}
              <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-4 opacity-0 group-hover:opacity-100 transition">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  className="bg-blue-600 p-2 rounded-full hover:bg-blue-700"
                >
                  <FaLinkedin />
                </a>

                <a
                  href="https://instagram.com"
                  target="_blank"
                  className="bg-pink-600 p-2 rounded-full hover:bg-pink-700"
                >
                  <FaInstagram />
                </a>

                <a
                  href="https://github.com"
                  target="_blank"
                  className="bg-gray-700 p-2 rounded-full hover:bg-gray-800"
                >
                  <FaGithub />
                </a>
              </div>
            </div>

            <div className="p-6 text-center">
              <h3 className="text-lg font-semibold">Badal Patel</h3>

              <p className="text-blue-400 text-sm mb-2">Founder & CEO</p>

              <p className="text-gray-400 text-sm">
                🎓 B.Tech Computer Engineering
              </p>

              <p className="text-gray-400 text-sm">💼 5+ Years Experience</p>

              <p className="text-gray-400 text-sm">
                🚀 SaaS, Web Apps, Logistics Systems
              </p>
            </div>
          </div>

          {/* Member 2 */}
          <div className="group bg-[#0F172A] border border-gray-800 rounded-xl overflow-hidden hover:border-blue-500 transition">
            <img
              src="/team/dev1.jpg"
              alt="Senior Full Stack Developer TechStrota"
              className="w-full h-64 object-cover"
            />

            <div className="p-6 text-center">
              <h3 className="text-lg font-semibold">Amit Sharma</h3>

              <p className="text-blue-400 text-sm mb-2">
                Senior Full Stack Developer
              </p>

              <p className="text-gray-400 text-sm">🎓 B.Sc IT</p>

              <p className="text-gray-400 text-sm">💼 4+ Years Experience</p>

              <p className="text-gray-400 text-sm">
                ⚙️ React, Laravel, Node.js
              </p>
            </div>
          </div>

          {/* Member 3 */}
          <div className="group bg-[#0F172A] border border-gray-800 rounded-xl overflow-hidden hover:border-blue-500 transition">
            <img
              src="/team/dev2.jpg"
              alt="Mobile App Developer TechStrota"
              className="w-full h-64 object-cover"
            />

            <div className="p-6 text-center">
              <h3 className="text-lg font-semibold">Priya Mehta</h3>

              <p className="text-blue-400 text-sm mb-2">Mobile App Developer</p>

              <p className="text-gray-400 text-sm">🎓 MCA</p>

              <p className="text-gray-400 text-sm">💼 3+ Years Experience</p>

              <p className="text-gray-400 text-sm">📱 Flutter, React Native</p>
            </div>
          </div>

          {/* Member 4 */}
          <div className="group bg-[#0F172A] border border-gray-800 rounded-xl overflow-hidden hover:border-blue-500 transition">
            <img
              src="/team/designer.jpg"
              alt="UI UX Designer TechStrota"
              className="w-full h-64 object-cover"
            />

            <div className="p-6 text-center">
              <h3 className="text-lg font-semibold">Jay Patel</h3>

              <p className="text-blue-400 text-sm mb-2">UI / UX Designer</p>

              <p className="text-gray-400 text-sm">🎓 B.Des</p>

              <p className="text-gray-400 text-sm">💼 3+ Years Experience</p>

              <p className="text-gray-400 text-sm">🎨 Figma, UI Systems</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
