export default function ServiceCard({ title }: { title: string }) {
  return (
    <div
      className="p-4 rounded-4"
      style={{
        background: "rgba(255,255,255,0.05)",
        border: "1px solid rgba(255,255,255,0.1)",
      }}
    >
      <h4 style={{ color: "#F4A63F" }}>SaaS Development Company</h4>
      <p className="text-secondary">
        Scalable cloud-based platforms built using Laravel & React.
      </p>
    </div>
  );
}
