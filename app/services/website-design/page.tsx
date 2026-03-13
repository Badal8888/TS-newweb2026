export const metadata = {
  title: "Website Design Services | TechStrota",
  description:
    "Professional website design services by TechStrota. We build modern, responsive and SEO optimized websites for businesses.",
};

export default function WebsiteDesign() {
  return (
    <main className="py-24 bg-[#020617] text-white">
      <div className="max-w-6xl mx-auto px-6">
        <h1 className="text-5xl font-bold mb-8">Website Design Services</h1>

        <p className="text-gray-400 mb-10">
          TechStrota provides modern website design services that help
          businesses establish a strong online presence with responsive and
          user-friendly interfaces.
        </p>

        <h2 className="text-3xl font-bold mb-6">What We Offer</h2>

        <ul className="text-gray-400 space-y-3 list-disc ml-6">
          <li>Responsive website design</li>
          <li>SEO optimized structure</li>
          <li>Fast loading pages</li>
          <li>Modern UI/UX design</li>
          <li>Custom business websites</li>
        </ul>

        <h2 className="text-3xl font-bold mt-12 mb-6">Technologies We Use</h2>

        <p className="text-gray-400">
          We build websites using modern technologies like React, Next.js,
          Laravel and cloud hosting platforms.
        </p>
      </div>
    </main>
  );
}
