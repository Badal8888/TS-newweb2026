import GalleryDetailsClient from "./GalleryDetailsClient";

export async function generateMetadata({ params }) {
  const { id } = await params;

  const response = await fetch(`http://127.0.0.1:8000/api/galleries/${id}`, {
    cache: "no-store",
  });

  if (!response.ok) {
    return {
      title: "Gallery",
    };
  }

  const gallery = await response.json();

  return {
    title: gallery.seo_title || gallery.title,
    description: gallery.meta_description || gallery.description,
    keywords: gallery.keywords,
  };
}

export default function Page() {
  return <GalleryDetailsClient />;
}
