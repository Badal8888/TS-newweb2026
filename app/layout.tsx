import "./globals.css";
import type { Metadata, Viewport } from "next";
import ClientWrapper from "@/components/ClientWrapper";

// Metadata works here because this is now a Server Component
export const metadata: Metadata = {
  title: "TechStrota – Web, Mobile & SaaS Development Company in India",
  description:
    "TechStrota is a leading IT company in Vadodara providing web development, mobile app development, SaaS solutions and custom software development for global clients.",
  keywords: [
    "IT Company in Vadodara",
    "Software Development Company in India",
    "SaaS Development Company",
    "Hire Laravel Developer India",
    "Web Development Company India",
  ],
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      {/* Remove the background color from the body here so it doesn't block the video */}
      <body className="antialiased">
        <ClientWrapper>{children}</ClientWrapper>
      </body>
    </html>
  );
}
