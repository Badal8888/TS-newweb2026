import HomeClient from "./HomeClient";

export const metadata = {
  title: "TechStrota | Web Development, SaaS & Mobile App Development Company",
  description:
    "TechStrota is a modern software development company providing web development, SaaS platforms, mobile app development and scalable digital solutions for startups and enterprises.",
  keywords: [
    "TechStrota",
    "software development company",
    "web development company",
    "SaaS development company",
    "mobile app development company",
    "Next.js development",
    "React development",
  ],
  openGraph: {
    title: "TechStrota | Scalable SaaS & Digital Solutions",
    description:
      "TechStrota builds modern SaaS platforms, web applications and mobile apps for startups and enterprises.",
    url: "https://www.techstrota.com",
    siteName: "TechStrota",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function Home() {
  return <HomeClient />;
}
