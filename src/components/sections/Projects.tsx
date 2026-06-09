"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { ArrowUpRight, Plus } from "lucide-react";
import Image from "next/image";

interface Project {
  title: string;
  description: string;
  tag?: string;
  skills: string[];
  link?: string;
  image: string;
  highlight?: boolean;
}

const projects: Project[] = [
  {
    title: "Feedbackly",
    tag: "Full Stack SaaS",
    description:
      "Anonymous feedback platform built with Next.js. Features user authentication, email verification, secure message handling, AI-generated message suggestions, and a modern responsive UI.",
    skills: ["Next.js", "TypeScript", "MongoDB", "NextAuth", "Tailwind CSS"],
    image: "/projects/feedbackly.jpg",
    link: "https://your-feedbackly-link.vercel.app",
    highlight: true,
  },
  {
    title: "Streamly",
    tag: "YouTube inspired Platform",
    description:
      "Video streaming platform inspired by YouTube with live search, video watch page, category filtering, Redux state management, and responsive design.",
    skills: ["React", "Redux Toolkit", "Tailwind CSS", "YouTube API"],
    image: "/projects/streamly.jpg",
    link: "https://streamly-theta.vercel.app",
    highlight: true,
  },
  {
    title: "Netflix AI",
    tag: "AI Movie Recommendation",
    description:
      "Netflix-inspired streaming application with Firebase authentication, TMDb integration, AI-powered movie recommendations, and Redux state management.",
    skills: ["React", "Firebase", "Redux Toolkit", "OpenAI API", "TMDb API"],
    image: "/projects/netflix-ai.jpg",
    link: "https://github.com/shubhamchauhan639",
    highlight: false,
  },
  
  {
    title: "Music Academy",
    tag: "Frontend Project",
    description:
      "Modern music learning platform with interactive course pages, featured content sections, testimonials, and a clean responsive UI.",
    skills: ["Next.js", "TypeScript", "Tailwind CSS"],
    image: "/projects/music-academy.jpg",
    link: "https://your-music-academy-link.vercel.app",
    highlight: false,
  },
  {
    title: "DevLog AI",
    tag: "Developer Productivity",
    description:
      "Developer productivity dashboard with GitHub-style streak tracking, AI-powered insights, goal management, analytics, and activity history.",
    skills: ["Next.js 15", "TypeScript", "Firestore", "OpenAI API", "Tailwind CSS"],
    image: "/projects/devlog-ai.jpg",
    link: "https://devlog.vercel.app",
    highlight: true,
  },
];
export default function Projects() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section id="projects" className="py-20 border-t border-border-card/50">
      <div className="max-w-4xl mx-auto px-6">
        {/* Section Title */}
        <h2 className="text-xs font-semibold tracking-widest text-text-body/60 uppercase mb-8">
          SELECTED WORK
        </h2>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {projects.map((project) => (
           <motion.div
  key={project.title}
  variants={cardVariants}
  whileHover={{
    y: -6,
    transition: { duration: 0.2 },
  }}
  className={`group rounded-xl border flex flex-col justify-between transition-all duration-300 bg-bg-card relative overflow-hidden ${
    project.highlight
      ? "border-brand-indigo ring-1 ring-brand-indigo/25 shadow-md"
      : "border-border-card shadow-sm hover:border-text-body/30"
  }`}
>
  {/* Project Image */}
  <div className="relative w-full h-52 overflow-hidden">
    <Image
      src={project.image}
      alt={project.title}
      fill
      className="object-cover transition-all duration-700 group-hover:scale-110"
    />

    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
  </div>

  {/* Content */}
  <div className="p-6 flex flex-col flex-1">
    <div>
      {/* Tag */}
      {project.tag && (
        <span className="inline-block text-[11px] font-semibold text-brand-indigo tracking-wider uppercase mb-3">
          {project.tag}
        </span>
      )}

      {/* Header */}
      <div className="flex items-start justify-between gap-4 mb-3">
        <h3 className="text-lg font-bold text-text-title">
          {project.title}
        </h3>

        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-body hover:text-brand-indigo p-1.5 rounded-md border border-border-card/50 bg-bg-base/30 hover:border-brand-indigo/30 transition-all duration-300"
            aria-label={`Visit project ${project.title}`}
          >
            <ArrowUpRight size={14} />
          </a>
        )}
      </div>

      {/* Description */}
      <p className="text-sm text-text-body leading-relaxed mb-6 font-light">
        {project.description}
      </p>
    </div>

    {/* Skills */}
    <div className="flex flex-wrap gap-2 mt-auto">
      {project.skills.map((skill) => (
        <span
          key={skill}
          className="text-[11px] font-medium text-text-body/80 border border-border-card px-2.5 py-1 rounded-md bg-bg-pill/50"
        >
          {skill}
        </span>
      ))}
    </div>
  </div>
</motion.div>
          ))}

          {/* Dotted Placeholder Card */}
          <motion.div
            variants={cardVariants}
            className="p-6 rounded-xl border border-dashed border-border-card flex flex-col items-center justify-center text-center bg-bg-card/30 min-h-[220px]"
          >
            <div className="p-3 rounded-full border border-dashed border-border-card mb-3 text-text-body/55">
              <Plus size={20} />
            </div>
            <p className="text-sm font-medium text-text-body/80 mb-1">
              More projects coming soon
            </p>
            <p className="text-xs text-text-body/60 font-light">
              Currently building in public
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
