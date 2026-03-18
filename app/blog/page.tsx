import Link from "next/link";
import Image from "next/image";

// Forces the page to be treated as a static build
export const dynamic = "force-static";

type BlogPost = {
  id: number;
  title: string;
  slug: string;
  paragraph: string;
  content: string;
  image: string | null;
};

async function getPosts(): Promise<BlogPost[]> {
  const res = await fetch("https://admin.techstrota.com/api/blogs");

  if (!res.ok) {
    throw new Error("Failed to fetch posts");
  }

  return res.json();
}

export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <div className="min-h-screen bg-[#020617] text-white py-24 relative overflow-hidden selection:bg-blue-500/30">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] max-w-4xl h-[400px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          {/* FIX 1: Added pb-2 here so the 'g' does not get clipped */}
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 pb-2 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-white to-white/70">
            TechStrota Blog
          </h1>
          <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto font-light leading-relaxed">
            Insights on software development, SaaS startups, React ecosystems,
            and modern technology trends.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <Link
              href={`/blog/${post.slug}`}
              key={post.id}
              // Changed: Increased border opacity to white/20, added a blue border on hover, and added a subtle blue shadow on hover
              className="group flex flex-col bg-white/5 border-2 border-white/50 rounded-2xl overflow-hidden hover:bg-white/10 hover:border-blue-500/50 transition-all duration-300 shadow-lg hover:shadow-blue-500/20 hover:shadow-2xl hover:-translate-y-1"
            >
              {post.image && (
                <div className="relative w-full h-56 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    unoptimized
                  />
                </div>
              )}

              <div className="p-6 md:p-8 flex flex-col flex-grow">
                <h2 className="text-2xl font-bold mb-3 text-white group-hover:text-blue-400 transition-colors duration-300 line-clamp-2">
                  {post.title}
                </h2>

                <p className="text-slate-400 text-sm md:text-base leading-relaxed line-clamp-3 mb-6 flex-grow">
                  {post.paragraph || "No description available"}
                </p>

                <div className="mt-auto flex items-center text-blue-500 font-semibold text-sm tracking-wide uppercase">
                  Read Article
                  <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">
                    →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
