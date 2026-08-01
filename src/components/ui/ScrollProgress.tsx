"use client";

import React, { useEffect, useState } from "react";


export default function ScrollProgress() {
  const [scrollPercent, setScrollPercent] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const el = document.documentElement;
      const scrollTop = window.scrollY;
      const scrollHeight = el.scrollHeight - el.clientHeight;
      const pct = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
      setScrollPercent(pct);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-[9998] h-[3px] bg-transparent pointer-events-none">
      <div
        className="h-full rounded-r-full"
        style={{
          width: `${scrollPercent}%`,
          background: "linear-gradient(90deg, #6366f1, #8b5cf6, #22d3ee)",
          boxShadow: "0 0 12px rgba(99,102,241,0.7), 0 0 24px rgba(139,92,246,0.4)",
          borderRadius: "0 999px 999px 0",
          transition: "width 0.12s linear",
        }}
      />
    </div>
  );
}
