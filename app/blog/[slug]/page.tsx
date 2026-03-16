import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

export const dynamic = "force-static";
export const dynamicParams = true;

type BlogPost = {
  id: number;
  title: string;
  slug: string;
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
    cache: "force-cache",
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
    <article className="min-h-screen bg-[#020617] text-white py-20 selection:bg-blue-500/30">
      {/* Top Navigation Back Button */}
      <div className="max-w-4xl mx-auto px-6 mb-10">
        <Link
          href="/blog"
          className="inline-flex items-center text-slate-400 hover:text-white transition-colors duration-200 text-sm font-medium"
        >
          ← Back to all posts
        </Link>
      </div>

      <div className="max-w-4xl mx-auto px-6">
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-8 text-transparent bg-clip-text bg-gradient-to-b from-white to-white/70 leading-tight">
            {post.title}
          </h1>

          {post.image && (
            <div className="w-full relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl aspect-video">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
                unoptimized
                priority
              />
            </div>
          )}
        </header>

        {/* IMPORTANT: The `prose prose-invert` classes automatically style raw HTML!
          Make sure npm install @tailwindcss/typography is done if you haven't yet.
        */}
        <div
          className="prose prose-invert prose-lg md:prose-xl max-w-none prose-headings:font-bold prose-a:text-blue-400 hover:prose-a:text-blue-300 prose-img:rounded-xl"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </div>
    </article>
  );
}
