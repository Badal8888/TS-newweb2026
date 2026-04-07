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
      "https://www.linkedin.com/company/107613221/admin/dashboard/",
      "https://www.instagram.com/techstrota/",
      "https://twitter.com/techstrota",
      "https://www.facebook.com/people/Tech-Strota/61550062532070/",
      "https://www.youtube.com/@techstrota",
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress:
        "503, Sterling Centre, R C Dutt Road,near fairfield Hotel Alkapuri, Vadodara - 390007",
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
