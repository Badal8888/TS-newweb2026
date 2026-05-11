import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

type BlogPost = {
  id: number;
  title: string;
  slug: string;
  paragraph?: string;
  content: string;
  image: string | null;
};

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
    <article className="min-h-screen text-white py-16 md:py-24 relative overflow-hidden selection:bg-blue-500/30">
      {/* Your existing UI remains same */}
    </article>
  );
}
