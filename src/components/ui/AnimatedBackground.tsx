"use client";

import React from "react";

/**
 * Subtle ambient background: two very soft, slow-moving orbs.
 * Professional — no particles, no neon, no glowing dots.
 */
export default function AnimatedBackground() {
  return (
    <div
      className="absolute inset-0 overflow-hidden pointer-events-none"
      aria-hidden="true"
    >
      {/* Top-right soft orb */}
      <div
        className="absolute rounded-full animate-float-slow"
        style={{
          width: "600px",
          height: "600px",
          top: "-160px",
          right: "-180px",
          background:
            "radial-gradient(circle at center, rgba(99,102,241,0.07) 0%, transparent 65%)",
          filter: "blur(48px)",
        }}
      />

      {/* Bottom-left soft orb */}
      <div
        className="absolute rounded-full animate-float-alt"
        style={{
          width: "480px",
          height: "480px",
          bottom: "-100px",
          left: "-120px",
          background:
            "radial-gradient(circle at center, rgba(139,92,246,0.06) 0%, transparent 65%)",
          filter: "blur(40px)",
          animationDelay: "2.5s",
        }}
      />
    </div>
  );
}
