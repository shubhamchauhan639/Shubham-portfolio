"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { Monitor, Server, Award } from "lucide-react";

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: string[];
}

export default function Skills() {
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
    icon: <Award size={16} className="text-brand-indigo" />,
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
    <section id="skills" className="py-20 border-t border-border-card/50">
      <div className="max-w-4xl mx-auto px-6">
        {/* Section Title */}
        <h2 className="text-xs font-semibold tracking-widest text-text-body/60 uppercase mb-8">
          TECHNICAL SKILLS
        </h2>

        {/* Categories Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {categories.map((category) => (
            <motion.div
              key={category.title}
              variants={cardVariants}
              whileHover={{ y: -2 }}
              className="p-6 rounded-xl border border-border-card bg-bg-card shadow-sm hover:border-text-body/30 transition-smooth flex flex-col"
            >
              {/* Category Header */}
              <div className="flex items-center gap-2 mb-4 pb-3 border-b border-border-card/50">
                {category.icon}
                <h3 className="text-xs font-bold tracking-wider text-text-title">
                  {category.title}
                </h3>
              </div>

              {/* Skills List */}
              <div className="flex flex-col gap-2">
                {category.skills.map((skill) => (
                  <div
                    key={skill}
                    className="text-sm text-text-body/90 font-light px-3 py-2 rounded-lg border border-border-card/50 bg-bg-pill/30 hover:bg-bg-pill hover:border-border-card transition-smooth flex items-center justify-between"
                  >
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
