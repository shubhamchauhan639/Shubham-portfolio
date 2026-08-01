"use client";

import React from "react";
import { motion } from "framer-motion";
import { Monitor, Server, Wrench } from "lucide-react";

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: string[];
}

const categories: SkillCategory[] = [
  {
    title: "FRONTEND",
    icon: <Monitor size={16} className="text-brand-indigo" />,
    skills: [
      "React.js",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "Redux Toolkit",
    ],
  },
  {
    title: "BACKEND & DATABASES",
    icon: <Server size={16} className="text-brand-indigo" />,
    skills: [
      "Node.js",
      "MongoDB",
      "Express.js",
      "MySQL",
      "Firebase",
      "REST APIs",
      "React Context API",
    ],
  },
  {
    title: "TOOLS & TESTING",
    icon: <Wrench size={16} className="text-brand-indigo" />,
    skills: [
      "Git",
      "GitHub",
      "VS Code",
      "Figma",
      "Jest",
      "React Testing Library",
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 border-t border-border-card/50">
      <div className="max-w-4xl mx-auto px-6">
        <div className="section-label">Technical Skills</div>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-text-title mb-8">
          Core Capabilities
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -3 }}
              className="p-6 rounded-xl border border-border-card bg-bg-card shadow-sm hover:border-brand-indigo/30 transition-all duration-300 flex flex-col"
            >
              <div className="flex items-center gap-2 mb-4 pb-3 border-b border-border-card/60">
                {category.icon}
                <h3 className="text-xs font-bold tracking-wider text-text-title">
                  {category.title}
                </h3>
              </div>

              <div className="flex flex-col gap-2">
                {category.skills.map((skill) => (
                  <div
                    key={skill}
                    className="text-sm text-text-body font-normal px-3 py-2 rounded-lg border border-border-card/40 bg-bg-pill/50 hover:bg-bg-pill transition-colors flex items-center justify-between"
                  >
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
