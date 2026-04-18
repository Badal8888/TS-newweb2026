import "./globals.css";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import GlobalBackground from "@/components/GlobalBackground";

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
        {/* 1. The Full Page Video Overlay */}
        <video
          autoPlay
          muted
          loop
          playsInline
          // 1. Increased opacity to 0.4 (40%)
          className="fixed inset-0 w-full h-full object-cover z-0 pointer-events-none opacity-[0.4]"
          style={{
            // 2. Removed grayscale and adjusted brightness
            filter: "brightness(120%) contrast(110%)",
          }}
        >
          <source src="videos/background2.mp4" type="video/mp4" />
        </video>
        {/* 🔥 Particle Background */}
        {/* <GlobalBackground /> */}

        {/* 2. Softened Gradient - This is VERY important now to ensure text readability over moving video */}
        <div className="fixed inset-0 z-0 bg-[radial-gradient(circle_at_center,_transparent_30%,_#0a0f1a_90%)] pointer-events-none"></div>

        <Header />
        {children}
        <WhatsAppButton />
        <Footer />
      </body>
    </html>
  );
}
