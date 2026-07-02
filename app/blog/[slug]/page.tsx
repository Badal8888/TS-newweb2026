import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

export const dynamic = "force-dynamic";

type BlogPost = {
  id: number;
  title: string;
  slug: string;
  paragraph?: string;
  content: string;
  image: string | null;
  gallery?: {
    url: string;
    desc?: string;
  }[];
};

async function getPost(slug: string) {
  try {
    const res = await fetch(`https://admin.techstrota.com/api/blogs/${slug}`, {
      cache: "no-store",
    });

    if (!res.ok) return null;

    return res.json();
  } catch (error) {
    console.error(error);
    return null;
  }
}

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post: BlogPost = await getPost(slug);

  if (!post) notFound();
  const gallery = (post.gallery ?? []).filter(
    (item) => item?.url && item.url.trim() !== "",
  );
  console.log("Gallery:", post.gallery);
  return (
    <article className="min-h-screen text-white py-16 md:py-24 relative overflow-hidden selection:bg-blue-500/30">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[100%] max-w-3xl h-[400px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        {/* Back Button */}
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

        {/* Header */}
        <header className="mb-16 flex flex-col items-center text-center">
          <h1 className="text-3xl md:text-4xl lg:text-6xl font-extrabold tracking-tight mb-6 pb-2 text-transparent bg-clip-text bg-gradient-to-b from-white to-white/70 leading-tight">
            {post.title}
          </h1>

          {post.paragraph && (
            <p className="text-lg md:text-xl text-slate-400 font-light leading-relaxed max-w-2xl mb-10">
              {post.paragraph}
            </p>
          )}

          <div className="w-24 h-1 bg-gradient-to-r from-blue-500/0 via-blue-500/50 to-blue-500/0 mb-10"></div>

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

              <div className="absolute inset-0 bg-gradient-to-t from-[#020617]/40 to-transparent pointer-events-none"></div>
            </div>
          )}
        </header>

        {/* Blog Content */}
        <div
          className="max-w-3xl mx-auto text-slate-300 text-lg leading-relaxed
          [&>p]:mb-8
          [&>h1]:text-4xl [&>h1]:font-bold [&>h1]:mb-6 [&>h1]:mt-12
          [&>h2]:text-3xl [&>h2]:font-bold [&>h2]:mb-4 [&>h2]:mt-10
          [&>h3]:text-2xl [&>h3]:font-bold [&>h3]:mb-4 [&>h3]:mt-8
          [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:mb-8
          [&>ol]:list-decimal [&>ol]:pl-6 [&>ol]:mb-8
          [&>img]:rounded-xl [&>img]:my-8"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
        {/* Gallery Section */}
        {gallery.length > 0 && (
          <div className="max-w-4xl mx-auto mt-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Gallery</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {gallery.map((item, index) => (
                <div key={index} className="space-y-3">
                  <div className="relative aspect-video rounded-xl overflow-hidden">
                    <Image
                      src={`https://admin.techstrota.com/storage/${item.url}`}
                      alt={item.desc || `Gallery ${index + 1}`}
                      fill
                      className="object-cover"
                      unoptimized
                    />
                  </div>

                  {item.desc && (
                    <p className="text-sm text-slate-400 text-center">
                      {item.desc}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </article>
  );
}
