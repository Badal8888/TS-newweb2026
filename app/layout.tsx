import "./globals.css";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <WhatsAppButton />
        <Footer />
      </body>
    </html>
  );
}
