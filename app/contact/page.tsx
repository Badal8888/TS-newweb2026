export const metadata = {
  title: "Contact TechStrota | Software Development Company",
  description:
    "Contact TechStrota for web development, mobile app development and SaaS software solutions.",
};

export default function Contact() {
  return (
    <main className="py-24">
      <div className="max-w-5xl mx-auto px-6">
        <h1 className="text-5xl font-bold mb-8">Contact TechStrota</h1>

        <p className="text-gray-400 mb-10">
          Get in touch with our team to discuss your project.
        </p>

        <form className="space-y-6">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 bg-[#0F172A] border border-gray-700 rounded"
          />

          <input
            type="email"
            placeholder="Email Address"
            className="w-full p-3 bg-[#0F172A] border border-gray-700 rounded"
          />

          <textarea
            placeholder="Project Details"
            className="w-full p-3 bg-[#0F172A] border border-gray-700 rounded"
            rows={6}
          ></textarea>

          <button className="bg-blue-600 px-6 py-3 rounded-lg">
            Send Message
          </button>
        </form>
      </div>
    </main>
  );
}
