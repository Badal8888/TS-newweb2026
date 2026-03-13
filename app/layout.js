export const metadata = {
  title: "TechStrota | Software Development Company",
  description:
    "TechStrota is a software development company providing web development, mobile apps and SaaS platforms.",
};

export default function RootLayout({ children }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "TechStrota",
    url: "https://www.techstrota.com",
    logo: "https://www.techstrota.com/logo.png",
    sameAs: [
      "https://www.linkedin.com/",
      "https://www.instagram.com/",
      "https://twitter.com/",
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: "156, 1st Floor, C Tower, K10 Atlantis, Near Genda Circle",
      addressLocality: "Vadodara",
      addressRegion: "Gujarat",
      postalCode: "390007",
      addressCountry: "India",
    },
  };

  return (
    <html lang="en">
      <body>
        {children}

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </body>
    </html>
  );
}
