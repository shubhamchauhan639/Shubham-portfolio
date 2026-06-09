"use client";

import React from "react";
import { motion, Variants } from "framer-motion";

interface TimelineEvent {
  period: string;
  title: string;
  description: string;
  current?: boolean;
}

const events: TimelineEvent[] = [
  {
    period: "2026",
    title: "Building Full-Stack Applications",
    description:
      "Developing projects with Next.js, TypeScript, MongoDB, authentication systems, AI integrations, and modern deployment workflows while expanding backend expertise.",
    current: true,
  },
  {
    period: "2025",
    title: "Frontend Development Journey",
    description:
      "Transitioned from design to development and started building applications with JavaScript, React, Next.js, Tailwind CSS, Redux, and Firebase.",
  },
   {
    period: "2025",
    title: "Transitioned from Design to Development",
    description:
      "Moved from UI/UX design into frontend development, combining design thinking with coding to build interactive and responsive web applications.",
  },
  {
    period: "2024 - 2025",
    title: "UI/UX & Figma Designer",
    description:
      "Designed user interfaces, wireframes, prototypes, and design systems in Figma while focusing on usability, visual hierarchy, and user-centered experiences.",
  },
];

export default function Journey() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, x: -10 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section id="journey" className="py-20 border-t border-border-card/50">
      <div className="max-w-4xl mx-auto px-6">
        {/* Section Title */}
        <h2 className="text-xs font-semibold tracking-widest text-text-body/60 uppercase mb-12">
          JOURNEY
        </h2>

        {/* Timeline Container */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="relative pl-6 md:pl-8 border-l border-border-card"
        >
          {events.map((event, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative mb-12 last:mb-0"
            >
              {/* Timeline Marker (Circle) */}
              <div
                className={`absolute -left-[31px] md:-left-[39px] top-1.5 w-4 h-4 rounded-full border-2 bg-bg-base transition-colors ${
                  event.current
                    ? "border-brand-indigo bg-brand-indigo ring-4 ring-brand-indigo/15"
                    : "border-border-card"
                }`}
              />

              {/* Event Content */}
              <div className="flex flex-col md:flex-row md:items-start gap-1 md:gap-8">
                {/* Year / Period */}
                <div className="w-16 flex-shrink-0">
                  <span
                    className={`text-sm font-semibold tracking-wider ${
                      event.current ? "text-brand-indigo" : "text-text-body/60"
                    }`}
                  >
                    {event.period}
                  </span>
                </div>

                {/* Text Block */}
                <div className="flex-1">
                  <h3 className="text-base font-bold text-text-title mb-1.5 font-sans leading-snug">
                    {event.title}
                  </h3>
                  <p className="text-sm text-text-body/90 font-light leading-relaxed">
                    {event.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
