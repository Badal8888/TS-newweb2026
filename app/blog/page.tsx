export const metadata = {
  title: "Tech Blog | TechStrota",
  description:
    "Read the latest articles about web development, SaaS platforms, startups and technology trends.",
};

export default function Blog() {
  return (
    <main className="py-24">
      <div className="max-w-5xl mx-auto px-6">
        <h1 className="text-5xl font-bold mb-8">TechStrota Blog</h1>

        <p className="text-gray-400">
          Our blog shares insights about software development, SaaS startups,
          React development and modern technology trends.
        </p>
      </div>
    </main>
  );
}
