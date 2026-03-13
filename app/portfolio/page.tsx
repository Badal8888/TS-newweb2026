export const metadata = {
  title: "Our Portfolio & Case Studies | TechStrota",
};

export default function Portfolio() {
  return (
    <main className="py-24">
      <div className="container-custom">
        <h1 className="text-5xl font-bold mb-12">Case Studies</h1>

        <div className="bg-[#1E293B] p-10 rounded-2xl">
          <h2 className="text-3xl font-semibold">
            ScanVault – Logistics SaaS Platform
          </h2>

          <p className="text-gray-400 mt-4">
            Problem: Logistics companies needed structured photo management.
          </p>

          <p className="text-gray-400 mt-2">
            Solution: Built a Laravel-based SaaS system with folder-based image
            management.
          </p>

          <p className="text-gray-400 mt-2">
            Result: 120,000+ images managed securely with high scalability and
            performance.
          </p>
        </div>
      </div>
    </main>
  );
}
