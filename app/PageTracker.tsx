"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function PageTracker() {
  const pathname = usePathname();

  useEffect(() => {
    let sessionId = localStorage.getItem("session_id");

    if (!sessionId) {
      sessionId =
        Date.now().toString() + Math.random().toString(36).substring(2);

      localStorage.setItem("session_id", sessionId);
    }

    const sendVisit = () => {
      fetch(`https://admin.techstrota.com/api/track-page-visit`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          page: pathname,
          session_id: sessionId,
        }),
      });
    };

    sendVisit();

    const interval = setInterval(sendVisit, 30000);

    return () => clearInterval(interval);
  }, [pathname]);

  return null;
}
