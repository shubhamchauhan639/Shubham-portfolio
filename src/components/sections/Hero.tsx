"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowDown, FileText } from "lucide-react";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number], // Custom ease-out
      },
    },
  };

  const skills = [
    { name: "React", primary: true },
    { name: "Next.js 15", primary: true },
    { name: "TypeScript", primary: true },
    { name: "Firebase", primary: false },
    { name: "Redux", primary: false },
    { name: "Tailwind CSS", primary: false },
    { name: "OpenAI API", primary: false },
  ];

  return (
    <section
      id="home"
      className="min-h-[85vh] flex flex-col justify-center py-20 relative overflow-hidden"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-4xl mx-auto px-6 w-full flex flex-col justify-center"
      >
        {/* Status Tag */}
        <motion.div variants={itemVariants} className="mb-6">
          <span className="text-xs font-semibold tracking-widest text-text-body/60 uppercase border border-border-card px-3 py-1 rounded-full bg-bg-card shadow-sm">
            FRONTEND DEVELOPER • OPEN TO INTERNSHIPS
          </span>
        </motion.div>

        {/* Code Layout Hero Block */}
        <motion.div
          variants={itemVariants}
          className="font-mono text-left mb-8 select-none"
        >
          {/* Opening line */}
          <div className="text-base md:text-lg mb-1">
            <span className="text-brand-indigo font-medium">const</span>{" "}
            <span className="text-text-title font-medium">shubham</span>{" "}
            <span className="text-text-title/70">=</span>{" "}
            <span className="text-text-title/70">&#123;</span>
          </div>

          {/* Huge Main Titles (Indented) */}
          <div className="pl-6 md:pl-10 my-2 flex flex-col gap-1">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-brand-indigo font-sans">
              Frontend
            </h1>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-text-title font-sans flex items-center">
              Developer
              <span className="inline-block w-1.5 h-12 md:h-16 bg-brand-indigo ml-2 animate-pulse"></span>
            </h1>
          </div>

          {/* Closing line */}
          <div className="text-base md:text-lg text-text-title/70">
            &#125;;
          </div>
        </motion.div>

        {/* Tagline */}
        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl text-text-body font-normal leading-relaxed max-w-2xl mb-8"
        >
        Building <strong className="font-semibold text-text-title">modern frontend experiences</strong>. Focused on React and Next.js, with full-stack knowledge to build complete, user-centric web applications.
        </motion.p>

        {/* Core Skills Badges */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap gap-2.5 mb-10"
        >
          {skills.map((skill) => (
            <span
              key={skill.name}
              className={`text-xs md:text-sm font-medium px-4 py-1.5 rounded-full border transition-smooth bg-bg-card shadow-sm ${
                skill.primary
                  ? "border-brand-indigo text-brand-indigo"
                  : "border-border-card text-text-body hover:border-text-body/30"
              }`}
            >
              {skill.name}
            </span>
          ))}
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap gap-4 items-center"
        >
          <a
            href="#projects"
            className="flex items-center gap-2 text-sm font-medium px-6 py-3 rounded-lg border border-text-title text-text-title hover:bg-text-title hover:text-bg-card transition-smooth bg-bg-card shadow-sm"
            id="hero-view-projects-btn"
          >
            View Projects
            <ArrowDown size={16} />
          </a>
          <a
            href="/ShubhamResumePDF.pdf"
            download="Shubham Resume.pdf"
            className="flex items-center gap-2 text-sm font-medium px-6 py-3 rounded-lg border border-border-card text-text-body hover:text-brand-indigo hover:border-brand-indigo/50 transition-smooth bg-bg-card shadow-sm cursor-pointer"
            id="hero-download-cv-btn"
          >
            <FileText size={16} />
            Download CV
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
