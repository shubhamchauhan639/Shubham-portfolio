"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, FileText } from "lucide-react";
import AnimatedBackground from "@/components/ui/AnimatedBackground";

const roles = [
  "Frontend Developer",
  "React Engineer",
  "Next.js Specialist",
  "UI/UX Enthusiast",
  "Full-Stack Builder",
];

const stats = [
  { value: 5, label: "Projects Built", suffix: "+" },
  { value: 2, label: "Years of Growth", suffix: "+" },
  { value: 10, label: "Technologies", suffix: "+" },
];

function useCountUp(target: number, duration = 1400, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    const step = (ts: number) => {
      if (!startTime) startTime = ts;
      const p = Math.min((ts - startTime) / duration, 1);
      setCount(Math.floor(p * target));
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, start]);
  return count;
}

function StatCard({
  value,
  label,
  suffix,
  startCount,
}: {
  value: number;
  label: string;
  suffix: string;
  startCount: boolean;
}) {
  const count = useCountUp(value, 1400, startCount);
  return (
    <div
      className="flex flex-col px-5 py-4 rounded-xl"
      style={{
        background: "var(--bg-card)",
        border: "1px solid var(--border-card)",
        boxShadow: "var(--card-shadow)",
      }}
    >
      <span
        className="text-2xl font-black tracking-tight"
        style={{ color: "var(--brand-indigo)" }}
      >
        {count}
        {suffix}
      </span>
      <span
        className="text-xs font-medium mt-0.5"
        style={{ color: "var(--text-body)" }}
      >
        {label}
      </span>
    </div>
  );
}

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [statsVisible, setStatsVisible] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);

  // Typewriter
  useEffect(() => {
    const current = roles[roleIndex];
    let t: ReturnType<typeof setTimeout>;
    if (!isDeleting && displayed.length < current.length) {
      t = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 75);
    } else if (!isDeleting && displayed.length === current.length) {
      t = setTimeout(() => setIsDeleting(true), 2200);
    } else if (isDeleting && displayed.length > 0) {
      t = setTimeout(() => setDisplayed(current.slice(0, displayed.length - 1)), 40);
    } else {
      setIsDeleting(false);
      setRoleIndex((p) => (p + 1) % roles.length);
    }
    return () => clearTimeout(t);
  }, [displayed, isDeleting, roleIndex]);

  // Count-up on intersect
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setStatsVisible(true); },
      { threshold: 0.4 }
    );
    if (statsRef.current) obs.observe(statsRef.current);
    return () => obs.disconnect();
  }, []);

  const container = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] as [number,number,number,number] },
    },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center py-20 overflow-hidden"
    >
      <AnimatedBackground />

      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-4xl mx-auto px-6 w-full"
      >
        {/* Availability badge */}
        <motion.div variants={item} className="mb-8">
          <span
            className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-widest uppercase px-3.5 py-1.5 rounded-full"
            style={{
              background: "var(--bg-card)",
              border: "1px solid var(--border-card)",
              color: "var(--text-body)",
              boxShadow: "var(--card-shadow)",
            }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full"
              style={{ background: "#22c55e" }}
            />
            Open to Internships &amp; Collaborations
          </span>
        </motion.div>

        {/* Name headline */}
        <motion.div variants={item} className="mb-5">
          <h1
            className="text-5xl md:text-7xl font-black tracking-tight leading-[1.05]"
            style={{ color: "var(--text-title)" }}
          >
            Hi, I&apos;m{" "}
            <span style={{ color: "var(--brand-indigo)" }}>Shubham</span>
          </h1>
        </motion.div>

        {/* Typewriter line */}
        <motion.div
          variants={item}
          className="mb-7 h-10 md:h-12 flex items-center"
        >
          <span
            className="text-xl md:text-3xl font-semibold"
            style={{ color: "var(--text-body)" }}
          >
            {displayed}
          </span>
          <span
            className="inline-block w-[2px] h-7 md:h-9 ml-1 animate-blink rounded-full"
            style={{ background: "var(--brand-indigo)" }}
          />
        </motion.div>

        {/* Tagline */}
        <motion.p
          variants={item}
          className="text-base md:text-lg leading-relaxed max-w-xl mb-10"
          style={{ color: "var(--text-body)", lineHeight: 1.8 }}
        >
          Building{" "}
          <strong
            style={{ color: "var(--text-title)", fontWeight: 600 }}
          >
            production-grade web experiences
          </strong>{" "}
          with React &amp; Next.js — from pixel-perfect UIs to full-stack
          applications integrated with AI.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div variants={item} className="flex flex-wrap gap-3 mb-14">
          {/* Primary */}
          <a
            href="#projects"
            id="hero-view-projects-btn"
            className="group inline-flex items-center gap-2 text-sm font-semibold px-6 py-3 rounded-xl text-white transition-all duration-200"
            style={{
              background: "var(--brand-indigo)",
              boxShadow: "0 2px 8px rgba(79,70,229,0.3)",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.transform = "translateY(-1px)";
              el.style.boxShadow = "0 6px 20px rgba(79,70,229,0.38)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.transform = "translateY(0)";
              el.style.boxShadow = "0 2px 8px rgba(79,70,229,0.3)";
            }}
          >
            View Projects
            <ArrowRight
              size={15}
              className="group-hover:translate-x-0.5 transition-transform duration-200"
            />
          </a>

          {/* Secondary */}
          <a
            href="/Shubham_Chauhan_Resume.pdf"
            download="Shubham Resume.pdf"
            id="hero-download-cv-btn"
            className="group inline-flex items-center gap-2 text-sm font-semibold px-6 py-3 rounded-xl transition-all duration-200"
            style={{
              background: "var(--bg-card)",
              border: "1px solid var(--border-card)",
              color: "var(--text-title)",
              boxShadow: "var(--card-shadow)",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.transform = "translateY(-1px)";
              el.style.borderColor = "var(--brand-indigo)";
              el.style.color = "var(--brand-indigo)";
              el.style.boxShadow = "var(--card-shadow-hover)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.transform = "translateY(0)";
              el.style.borderColor = "var(--border-card)";
              el.style.color = "var(--text-title)";
              el.style.boxShadow = "var(--card-shadow)";
            }}
          >
            <FileText size={15} />
            Download CV
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          ref={statsRef}
          variants={item}
          className="flex flex-wrap gap-3"
        >
          {stats.map((s, i) => (
            <StatCard key={i} {...s} startCount={statsVisible} />
          ))}
        </motion.div>
      </motion.div>

      {/* Bottom gradient fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-28 pointer-events-none"
        style={{ background: "linear-gradient(to top, var(--bg-base), transparent)" }}
      />
    </section>
  );
}
