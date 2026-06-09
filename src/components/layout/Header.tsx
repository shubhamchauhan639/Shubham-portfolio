"use client";

import React, { useState, useEffect } from "react";
import { useTheme } from "@/app/providers";
import { Sun, Moon, Menu, X } from "lucide-react";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Journey", href: "#journey" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const { theme, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setMounted(true);
    }, 0);
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-smooth border-b ${
        scrolled
          ? "bg-bg-card/85 backdrop-blur-md shadow-sm border-border-card"
          : "bg-transparent border-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#home"
          className="text-xl font-bold tracking-tight text-text-title flex items-center gap-0.5"
          id="nav-logo"
        >
          DEVELOPER<span className="text-brand-indigo font-black text-2xl">.</span>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-text-body hover:text-brand-indigo transition-colors"
              id={`nav-link-${item.label.toLowerCase()}`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Actions (Theme & Mobile Menu Toggle) */}
        <div className="flex items-center gap-4">
          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg border border-border-card bg-bg-card text-text-body hover:text-brand-indigo hover:border-brand-indigo/50 transition-smooth min-w-[38px] min-h-[38px] flex items-center justify-center cursor-pointer"
            aria-label="Toggle theme"
            id="theme-toggle-btn"
          >
            {mounted ? (
              theme === "light" ? <Moon size={18} /> : <Sun size={18} />
            ) : (
              <div className="w-[18px] h-[18px]" />
            )}
          </button>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg border border-border-card bg-bg-card text-text-body hover:text-brand-indigo transition-smooth"
            aria-label="Toggle mobile menu"
            id="mobile-menu-toggle-btn"
          >
            {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-16 bg-bg-card border-b border-border-card shadow-lg animate-in fade-in slide-in-from-top-4 duration-200">
          <nav className="flex flex-col p-6 gap-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-text-body hover:text-brand-indigo py-2 border-b border-border-card/50 last:border-b-0"
                id={`mobile-nav-link-${item.label.toLowerCase()}`}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
