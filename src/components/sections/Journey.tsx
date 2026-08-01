"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface TimelineEvent {
  period: string;
  title: string;
  description: string;
  current?: boolean;
  icon: string;
  color: string;
  glow: string;
}

const events: TimelineEvent[] = [
  {
    period: "2026 — Present",
    title: "Building Full-Stack Applications",
    description:
      "Developing projects with Next.js, TypeScript, MongoDB, authentication systems, AI integrations, and modern deployment workflows while expanding backend expertise.",
    current: true,
    icon: "🚀",
    color: "#6366f1",
    glow: "rgba(99,102,241,0.4)",
  },
  {
    period: "2025",
    title: "Frontend Development Journey",
    description:
      "Transitioned from design to development and started building applications with JavaScript, React, Next.js, Tailwind CSS, Redux, and Firebase.",
    icon: "⚡",
    color: "#8b5cf6",
    glow: "rgba(139,92,246,0.4)",
  },
  {
    period: "2025",
    title: "Transitioned from Design to Development",
    description:
      "Moved from UI/UX design into frontend development, combining design thinking with coding to build interactive and responsive web applications.",
    icon: "🔄",
    color: "#06b6d4",
    glow: "rgba(6,182,212,0.4)",
  },
  {
    period: "2024 — 2025",
    title: "UI/UX & Figma Designer",
    description:
      "Designed user interfaces, wireframes, prototypes, and design systems in Figma while focusing on usability, visual hierarchy, and user-centered experiences.",
    icon: "🎨",
    color: "#f59e0b",
    glow: "rgba(245,158,11,0.4)",
  },
];

export default function Journey() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  const lineHeight = useTransform(scrollYProgress, [0.05, 0.85], ["0%", "100%"]);

  return (
    <section id="journey" className="py-24" style={{ borderTop: "1px solid var(--glass-border)" }}>
      <div className="max-w-5xl mx-auto px-6">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="section-label mb-4"
        >
          My Journey
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl md:text-4xl font-black mb-3"
          style={{ color: "var(--text-title)" }}
        >
          The{" "}
          <span
            style={{
              background: "var(--gradient-text)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              backgroundSize: "200% 200%",
              animation: "gradientShift 3s ease infinite",
            }}
          >
            road so far
          </span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="text-sm mb-16 max-w-xl"
          style={{ color: "var(--text-body)" }}
        >
          From designer to developer — a story of continuous growth and curiosity.
        </motion.p>

        {/* Timeline */}
        <div ref={containerRef} className="relative">
          {/* Animated vertical line */}
          <div
            className="absolute left-6 md:left-8 top-0 bottom-0 w-px"
            style={{ background: "var(--glass-border)" }}
          >
            <motion.div
              style={{ height: lineHeight }}
              className="absolute top-0 left-0 right-0 rounded-full"
              transition={{ ease: "easeOut" }}
            >
              <div
                className="w-full h-full"
                style={{
                  background: "linear-gradient(to bottom, #6366f1, #8b5cf6, #06b6d4)",
                  boxShadow: "0 0 8px rgba(99,102,241,0.5)",
                  borderRadius: "999px",
                }}
              />
            </motion.div>
          </div>

          {/* Events */}
          <div className="flex flex-col gap-10 pl-16 md:pl-20">
            {events.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="relative"
              >
                {/* Marker */}
                <div
                  className="absolute -left-[46px] md:-left-[52px] top-3 flex items-center justify-center text-lg"
                  style={{
                    width: "36px",
                    height: "36px",
                    borderRadius: "50%",
                    background: event.current ? event.color : "var(--bg-card)",
                    border: `2px solid ${event.color}`,
                    boxShadow: event.current
                      ? `0 0 0 4px ${event.glow}, 0 0 20px ${event.glow}`
                      : `0 0 12px ${event.glow}`,
                    fontSize: "14px",
                    flexShrink: 0,
                  }}
                >
                  {event.icon}
                </div>

                {/* Card */}
                <div
                  className="p-6 rounded-2xl transition-all duration-300 hover:scale-[1.01]"
                  style={{
                    background: "var(--glass-bg)",
                    backdropFilter: "var(--glass-blur)",
                    border: `1px solid ${event.current ? event.color + "50" : "var(--glass-border)"}`,
                    boxShadow: event.current
                      ? `0 8px 32px ${event.glow}`
                      : "0 2px 16px rgba(0,0,0,0.06)",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = event.color + "60";
                    (e.currentTarget as HTMLElement).style.boxShadow = `0 12px 40px ${event.glow}`;
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = event.current
                      ? event.color + "50"
                      : "var(--glass-border)";
                    (e.currentTarget as HTMLElement).style.boxShadow = event.current
                      ? `0 8px 32px ${event.glow}`
                      : "0 2px 16px rgba(0,0,0,0.06)";
                  }}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <span
                      className="text-xs font-bold tracking-widest uppercase px-2.5 py-1 rounded-full"
                      style={{
                        color: event.color,
                        background: event.color + "18",
                        border: `1px solid ${event.color}35`,
                      }}
                    >
                      {event.period}
                    </span>
                    {event.current && (
                      <span
                        className="text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full animate-pulse"
                        style={{
                          background: "var(--brand-indigo)",
                          color: "white",
                        }}
                      >
                        Now
                      </span>
                    )}
                  </div>
                  <h3
                    className="text-base font-bold mb-2"
                    style={{ color: "var(--text-title)" }}
                  >
                    {event.title}
                  </h3>
                  <p className="text-sm font-light leading-relaxed" style={{ color: "var(--text-body)" }}>
                    {event.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
