"use client";

import React, { useState, useEffect } from "react";
import { useTheme } from "@/app/providers";
import { Sun, Moon, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

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
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    setTimeout(() => setMounted(true), 0);

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = navItems.map((n) => n.href.slice(1));
      for (const s of [...sections].reverse()) {
        const el = document.getElementById(s);
        if (el && window.scrollY >= el.offsetTop - 100) {
          setActiveSection(s);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-bg-card/80 backdrop-blur-md border-b border-border-card shadow-sm"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#home"
          className="text-lg font-bold tracking-tight text-text-title flex items-center gap-0.5"
          id="nav-logo"
        >
          SC<span className="text-brand-indigo font-black text-xl">.</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.slice(1);
            return (
              <a
                key={item.label}
                href={item.href}
                className="relative text-sm font-medium px-4 py-2 rounded-lg transition-colors duration-200"
                style={{
                  color: isActive ? "var(--brand-indigo)" : "var(--text-body)",
                }}
                id={`nav-link-${item.label.toLowerCase()}`}
              >
                {isActive && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-lg bg-bg-pill"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{item.label}</span>
              </a>
            );
          })}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-3">
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg border border-border-card bg-bg-card text-text-body hover:text-brand-indigo hover:border-brand-indigo/50 transition-colors cursor-pointer"
            aria-label="Toggle theme"
            id="theme-toggle-btn"
          >
            {mounted ? (
              theme === "light" ? (
                <Moon size={18} />
              ) : (
                <Sun size={18} />
              )
            ) : (
              <div className="w-[18px] h-[18px]" />
            )}
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg border border-border-card bg-bg-card text-text-body hover:text-brand-indigo transition-colors"
            aria-label="Toggle mobile menu"
            id="mobile-menu-toggle-btn"
          >
            {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden overflow-hidden bg-bg-card border-b border-border-card shadow-lg"
          >
            <nav className="flex flex-col p-4 gap-1">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-sm font-medium py-2.5 px-4 rounded-lg transition-colors ${
                    activeSection === item.href.slice(1)
                      ? "text-brand-indigo bg-bg-pill"
                      : "text-text-body hover:text-brand-indigo"
                  }`}
                  id={`mobile-nav-link-${item.label.toLowerCase()}`}
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
