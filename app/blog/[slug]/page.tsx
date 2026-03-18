import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

export const dynamicParams = true;

type BlogPost = {
  id: number;
  title: string;
  slug: string;
  paragraph?: string; // Made optional to match usage
  content: string;
  image: string | null;
};

export async function generateStaticParams() {
  const res = await fetch("https://admin.techstrota.com/api/blogs", {
    cache: "force-cache",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch blog slugs");
  }

  const posts: BlogPost[] = await res.json();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

async function getPost(slug: string) {
  const res = await fetch(`https://admin.techstrota.com/api/blogs/${slug}`, {
    cache: "no-store",
  });

  if (!res.ok) return null;
  return res.json();
}

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) notFound();

  return (
    <article className="min-h-screen bg-[#020617] text-white py-16 md:py-24 relative overflow-hidden selection:bg-blue-500/30">
      {/* Background Glow (Matches main page) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[100%] max-w-3xl h-[400px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        {/* Top Navigation Back Button - Upgraded to a sleek pill */}
        <div className="mb-12">
          <Link
            href="/blog"
            className="group inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full text-slate-400 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all duration-300 text-sm font-medium backdrop-blur-sm"
          >
            <span className="group-hover:-translate-x-1 transition-transform duration-300">
              ←
            </span>
            Back to all posts
          </Link>
        </div>

        <header className="mb-16 flex flex-col items-center text-center">
          {/* Title */}
          <h1 className="text-3xl md:text-4xl lg:text-6xl font-extrabold tracking-tight mb-6 pb-2 text-transparent bg-clip-text bg-gradient-to-b from-white to-white/70 leading-tight">
            {post.title}
          </h1>

          {/* Subtitle / Paragraph */}
          {post.paragraph && (
            <p className="text-lg md:text-xl text-slate-400 font-light leading-relaxed max-w-2xl mb-10">
              {post.paragraph}
            </p>
          )}

          {/* Divider Line */}
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500/0 via-blue-500/50 to-blue-500/0 mb-10"></div>

          {/* Hero Image - Fixed borders and added a beautiful blue ambient shadow */}
          {post.image && (
            <div className="w-full relative rounded-2xl overflow-hidden border-4 border-white/20 shadow-[0_0_40px_-15px_rgba(59,130,246,0.3)] aspect-video group">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                unoptimized
                priority
              />
              {/* Subtle gradient overlay on the image */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#020617]/40 to-transparent pointer-events-none"></div>
            </div>
          )}
        </header>

        {/* Content Section - Upgraded the CSS selectors for a better reading experience */}
        <div
          className="max-w-3xl mx-auto text-slate-300 text-lg leading-relaxed 
          [&>p]:mb-8 [&>p]:text-slate-300
          
          /* Headings */
          [&>h1]:text-4xl [&>h1]:font-bold [&>h1]:mb-6 [&>h1]:mt-12 [&>h1]:text-white [&>h1]:tracking-tight
          [&>h2]:text-3xl [&>h2]:font-bold [&>h2]:mb-4 [&>h2]:mt-10 [&>h2]:text-white [&>h2]:tracking-tight
          [&>h3]:text-2xl [&>h3]:font-bold [&>h3]:mb-4 [&>h3]:mt-8 [&>h3]:text-white
          
          /* Lists */
          [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:mb-8 [&>ul>li]:mb-3 [&>ul>li]:pl-2
          [&>ol]:list-decimal [&>ol]:pl-6 [&>ol]:mb-8 [&>ol>li]:mb-3 [&>ol>li]:pl-2
          
          /* Code Blocks & Inline Code */
          [&>pre]:bg-[#0f172a] [&>pre]:border [&>pre]:border-white/10 [&>pre]:p-5 [&>pre]:rounded-xl [&>pre]:mb-8 [&>pre]:overflow-x-auto [&>pre]:text-sm
          [&>p>code]:bg-white/10 [&>p>code]:text-blue-300 [&>p>code]:px-1.5 [&>p>code]:py-0.5 [&>p>code]:rounded-md [&>p>code]:text-sm
          [&>li>code]:bg-white/10 [&>li>code]:text-blue-300 [&>li>code]:px-1.5 [&>li>code]:py-0.5 [&>li>code]:rounded-md [&>li>code]:text-sm
          
          /* Blockquotes */
          [&>blockquote]:border-l-4 [&>blockquote]:border-blue-500 [&>blockquote]:pl-6 [&>blockquote]:py-1 [&>blockquote]:mb-8 [&>blockquote]:italic [&>blockquote]:text-slate-400 [&>blockquote]:bg-white/[0.02] [&>blockquote]:rounded-r-lg
          
          /* Links */
          [&>p>a]:text-blue-400 hover:[&>p>a]:text-blue-300 [&>p>a]:underline [&>p>a]:underline-offset-4 [&>p>a]:decoration-blue-500/30 hover:[&>p>a]:decoration-blue-400
          
          /* Images inside content */
          [&>img]:rounded-xl [&>img]:mb-8 [&>img]:border [&>img]:border-white/10
          [&>p>img]:rounded-xl [&>p>img]:mb-8 [&>p>img]:border [&>p>img]:border-white/10"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </div>
    </article>
  );
}
