"use client";
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/919033476660"
      target="_blank"
      // Added z-[9999] to ensure it stays above the footer and backdrop blur
      className="fixed bottom-6 right-6 z-[9999] bg-green-500 p-4 rounded-full shadow-lg hover:scale-110 transition flex items-center justify-center"
    >
      {/* Tip: Use a real icon or a larger emoji for a better look */}
      <FaWhatsapp className="text-white text-3xl" />
    </a>
  );
}
