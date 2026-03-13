export default function Services() {
  return (
    <main className="py-24">
      <div className="max-w-5xl mx-auto px-6">
        <h1 className="text-5xl font-bold mb-8">Our Services</h1>
        <p className="text-gray-400 mb-12">
          We offer a wide range of services to help your business grow and
          succeed in the digital world.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-[#0F172A] p-8 rounded-2xl border border-gray-800 hover:border-blue-500 transition cursor-pointer">
            <h3 className="text-xl font-semibold mb-4 text-blue-400">
              Web Development
            </h3>
            <p className="text-gray-400">
              We build fast, scalable and SEO-friendly websites using React,
              Next.js and modern web technologies.
            </p>
          </div>

          <div className="bg-[#0F172A] p-8 rounded-2xl border border-gray-800 hover:border-blue-500 transition cursor-pointer">
            <h3 className="text-xl font-semibold mb-4 text-blue-400">
              Mobile App Development
            </h3>
            <p className="text-gray-400">
              Android and iOS mobile applications using React Native and
              scalable backend systems.
            </p>
          </div>

          <div className="bg-[#0F172A] p-8 rounded-2xl border border-gray-800 hover:border-blue-500 transition cursor-pointer">
            <h3 className="text-xl font-semibold mb-4 text-blue-400">
              SaaS Development
            </h3>
            <p className="text-gray-400">
              We build powerful SaaS platforms with modern UI/UX and scalable
              architecture to help businesses grow faster.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
