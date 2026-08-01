"use client";


import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      href: "https://github.com/shubhamchauhan639",
      icon: <GithubIcon size={16} />,
      label: "GitHub Profile",
      id: "footer-github-link",
      color: "#8b5cf6",
      glow: "rgba(139,92,246,0.4)",
    },
    {
      href: "https://www.linkedin.com/in/shubham-chauhan-aaa832397/",
      icon: <LinkedinIcon size={16} />,
      label: "LinkedIn Profile",
      id: "footer-linkedin-link",
      color: "#0ea5e9",
      glow: "rgba(14,165,233,0.4)",
    },
    {
      href: "mailto:shubhamchauhan12196@gmail.com",
      icon: <Mail size={16} />,
      label: "Email Contact",
      id: "footer-email-link",
      color: "#6366f1",
      glow: "rgba(99,102,241,0.4)",
    },
  ];

  return (
    <footer
      className="w-full py-10 mt-auto relative overflow-hidden"
      style={{ background: "var(--bg-card)" }}
    >
      {/* Gradient top border */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background: "linear-gradient(90deg, transparent, #6366f1, #8b5cf6, #22d3ee, transparent)",
          boxShadow: "0 0 12px rgba(99,102,241,0.4)",
        }}
      />

      {/* Background glow */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-24 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at center, rgba(99,102,241,0.07) 0%, transparent 70%)",
          filter: "blur(20px)",
        }}
      />

      <div className="relative max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Logo */}
        <div className="flex items-center gap-1">
          <span
            className="text-lg font-black tracking-tight"
            style={{ color: "var(--text-title)" }}
          >
            SC
          </span>
          <span
            className="text-xl font-black"
            style={{
              background: "linear-gradient(135deg, #6366f1, #8b5cf6, #22d3ee)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              backgroundSize: "200% 200%",
              animation: "gradientShift 3s ease infinite",
            }}
          >
            .
          </span>
        </div>

        {/* Copyright */}
        <p className="text-xs font-light text-center" style={{ color: "var(--text-body)" }}>
          © {currentYear} Shubham Singh Chauhan. Crafted with ❤️ and lots of ☕
        </p>

        {/* Social Icons */}
        <div className="flex items-center gap-3">
          {socialLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="p-2.5 rounded-xl transition-all duration-300"
              style={{
                border: "1px solid var(--glass-border)",
                background: "var(--glass-bg)",
                color: "var(--text-body)",
              }}
              aria-label={link.label}
              id={link.id}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = link.color + "60";
                (e.currentTarget as HTMLElement).style.color = link.color;
                (e.currentTarget as HTMLElement).style.boxShadow = `0 0 16px ${link.glow}, 0 0 0 2px ${link.color}20`;
                (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "var(--glass-border)";
                (e.currentTarget as HTMLElement).style.color = "var(--text-body)";
                (e.currentTarget as HTMLElement).style.boxShadow = "none";
                (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
              }}
            >
              {link.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
