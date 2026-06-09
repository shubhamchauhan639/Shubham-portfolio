import React from "react";
import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-border-card bg-bg-card/30 py-8 mt-auto">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Logo */}
        <div className="text-lg font-bold tracking-tight text-text-title">
          DEVELOPER<span className="text-brand-indigo font-black">.</span>
        </div>

        {/* Copyright */}
        <p className="text-xs text-text-body font-light">
          © {currentYear} Shubham. All rights reserved. Designed with clean, professional aesthetics.
        </p>

        {/* Social Icons */}
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/shubhamchauhan639"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full border border-border-card bg-bg-card hover:text-brand-indigo hover:border-brand-indigo/35 transition-smooth text-text-body"
            aria-label="GitHub Profile"
            id="footer-github-link"
          >
            <GithubIcon size={16} />
          </a>
          <a
            href="https://linkedin.com/in/shubham"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full border border-border-card bg-bg-card hover:text-brand-indigo hover:border-brand-indigo/35 transition-smooth text-text-body"
            aria-label="LinkedIn Profile"
            id="footer-linkedin-link"
          >
            <LinkedinIcon size={16} />
          </a>
          <a
            href="mailto:shubham@email.com"
            className="p-2 rounded-full border border-border-card bg-bg-card hover:text-brand-indigo hover:border-brand-indigo/35 transition-smooth text-text-body"
            aria-label="Email Contact"
            id="footer-email-link"
          >
            <Mail size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
}
