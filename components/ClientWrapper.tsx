"use client";
import { useState, useEffect } from "react";
import Loader from "@/components/Loader";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function ClientWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#0a0f1a] text-white">
      {/* 1. Loader Layer */}
      {isLoading && <Loader />}

      {/* 2. Global Video Background */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover opacity-[0.4]"
          style={{ filter: "brightness(120%) contrast(110%)" }}
        >
          <source src="/videos/background2.mp4" type="video/mp4" />
        </video>
        {/* Subtle Gradient overlay to make text readable */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_30%,_#0a0f1a_90%)]" />
      </div>

      {/* 3. Content Layer */}
      <div
        className={`relative z-10 transition-opacity duration-1000 ${isLoading ? "opacity-0" : "opacity-100"}`}
      >
        <Header />
        <main className="min-h-screen">{children}</main>
        <WhatsAppButton />
        <Footer />
      </div>
    </div>
  );
}
