"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Plus } from "lucide-react";
import Image from "next/image";

interface Project {
  title: string;
  description: string;
  tag?: string;
  skills: string[];
  link?: string;
  image: string;
}

const projects: Project[] = [
  {
    title: "DevLog AI",
    tag: "Developer Productivity",
    description:
      "Developer productivity dashboard with GitHub-style streak tracking, AI-powered insights, goal management, analytics, and activity history.",
    skills: ["Next.js 15", "TypeScript", "Firestore", "OpenAI API", "Tailwind CSS"],
    image: "/projects/devlog-ai.jpg",
    link: "https://dev-log-cyan.vercel.app/",
  },
  {
    title: "PlayGrid",
    tag: "Collaborative Code Playground",
    description:
      "Real-time collaborative code playground for writing, running, and sharing code snippets across multiple languages directly in the browser.",
    skills: ["Next.js 14", "TypeScript", "Sandpack", "Supabase", "Tailwind CSS"],
    image: "/projects/image.png",
    link: "https://play-grid-hazel.vercel.app/",
  },
  {
    title: "Streamly",
    tag: "YouTube-Inspired Platform",
    description:
      "Video streaming platform inspired by YouTube with live search, video watch page, category filtering, Redux state management, and responsive design.",
    skills: ["React", "Redux Toolkit", "Tailwind CSS", "YouTube API"],
    image: "/projects/streamly.jpg",
    link: "https://streamly-theta.vercel.app",
  },
  {
    title: "Netflix AI",
    tag: "AI Movie Recommendation",
    description:
      "Netflix-inspired streaming application with Firebase authentication, TMDb integration, AI-powered movie recommendations, and Redux state management.",
    skills: ["React", "Firebase", "Redux Toolkit", "OpenAI API", "TMDb API"],
    image: "/projects/netflix-ai.jpg",
    link: "https://netflix-clone-kohl-ten-96.vercel.app/",
  },
  {
    title: "Music Academy",
    tag: "Frontend Project",
    description:
      "Modern music learning platform with interactive course pages, featured content sections, testimonials, and a clean responsive UI.",
    skills: ["Next.js", "TypeScript", "Tailwind CSS"],
    image: "/projects/music-academy.jpg",
    link: "https://music-app-74ne.vercel.app/",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 border-t border-border-card/50">
      <div className="max-w-4xl mx-auto px-6">
        <div className="section-label">Selected Work</div>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-text-title mb-8">
          Featured Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -4 }}
              className="group rounded-xl border border-border-card bg-bg-card flex flex-col justify-between overflow-hidden shadow-sm hover:border-brand-indigo/40 hover:shadow-md transition-all duration-300"
            >
              <div className="relative w-full h-48 overflow-hidden bg-bg-pill">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="p-6 flex flex-col flex-1">
                {project.tag && (
                  <span className="text-[11px] font-semibold text-brand-indigo uppercase tracking-wider mb-2">
                    {project.tag}
                  </span>
                )}

                <div className="flex items-start justify-between gap-4 mb-2">
                  <h3 className="text-lg font-bold text-text-title group-hover:text-brand-indigo transition-colors">
                    {project.title}
                  </h3>

                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-text-body hover:text-brand-indigo p-1 rounded transition-colors"
                      aria-label={`Visit project ${project.title}`}
                    >
                      <ArrowUpRight size={16} />
                    </a>
                  )}
                </div>

                <p className="text-sm text-text-body leading-relaxed mb-6 font-normal">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-[11px] font-medium text-text-body border border-border-card px-2.5 py-1 rounded-md bg-bg-pill"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-6 rounded-xl border border-dashed border-border-card flex flex-col items-center justify-center text-center bg-bg-card/40 min-h-[220px]"
          >
            <div className="p-3 rounded-full border border-dashed border-border-card mb-3 text-text-body/60">
              <Plus size={20} />
            </div>
            <p className="text-sm font-medium text-text-body">
              More projects in development
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
