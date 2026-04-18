"use client";

import dynamic from "next/dynamic";

// Lazy load the new Complex 3D Scene
const Complex3DBackground = dynamic(() => import("./Complex3DBackground"), {
  ssr: false,
});

export default function GlobalBackground() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <div className="w-full h-full">
        <Complex3DBackground />
      </div>
    </div>
  );
}
