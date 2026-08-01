"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Send, Sparkles } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";

const contactLinks = [
  {
    href: "mailto:shubhamchauhan12196@gmail.com",
    icon: <Mail size={18} />,
    label: "shubhamchauhan12196@gmail.com",
    color: "#6366f1",
    glow: "rgba(99,102,241,0.4)",
    id: "contact-email-link",
  },
  {
    href: "https://github.com/shubhamchauhan639",
    icon: <GithubIcon size={18} />,
    label: "github.com/shubhamchauhan639",
    color: "#8b5cf6",
    glow: "rgba(139,92,246,0.4)",
    id: "contact-github-link",
    external: true,
  },
  {
    href: "https://www.linkedin.com/in/shubham-chauhan-aaa832397/",
    icon: <LinkedinIcon size={18} />,
    label: "linkedin.com/in/shubham",
    color: "#0ea5e9",
    glow: "rgba(14,165,233,0.4)",
    id: "contact-linkedin-link",
    external: true,
  },
];

export default function Contact() {
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus("success");
      setFormState({ name: "", email: "", message: "" });
      setTimeout(() => setSubmitStatus("idle"), 4000);
    }, 1200);
  };

  const inputStyle = (field: string) => ({
    width: "100%",
    fontSize: "0.875rem",
    fontWeight: 300,
    padding: "0.75rem 1rem",
    borderRadius: "0.75rem",
    border: `1px solid ${focusedField === field ? "var(--brand-indigo)" : "var(--glass-border)"}`,
    background: focusedField === field ? "var(--bg-card)" : "var(--glass-bg)",
    backdropFilter: "blur(8px)",
    color: "var(--text-title)",
    outline: "none",
    boxShadow: focusedField === field ? "0 0 0 3px var(--glow-indigo)" : "none",
    transition: "all 0.25s cubic-bezier(0.4,0,0.2,1)",
  });

  return (
    <section id="contact" className="py-24 relative overflow-hidden" style={{ borderTop: "1px solid var(--glass-border)" }}>
      {/* Background glow */}
      <div
        className="absolute bottom-0 right-0 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(99,102,241,0.12) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="section-label mb-4"
        >
          Get In Touch
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl md:text-5xl font-black mb-3 leading-tight"
          style={{ color: "var(--text-title)" }}
        >
          Let&apos;s build{" "}
          <span
            style={{
              background: "var(--gradient-text)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              backgroundSize: "200% 200%",
              animation: "gradientShift 3s ease infinite",
            }}
          >
            something great
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="text-sm mb-14 max-w-lg"
          style={{ color: "var(--text-body)" }}
        >
          I&apos;m currently looking for frontend internship opportunities. Feel free to reach out — I&apos;d love to chat!
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Left: Links */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col gap-4"
          >
            {contactLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                id={link.id}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                className="group flex items-center gap-4 p-4 rounded-2xl transition-all duration-300"
                style={{
                  background: "var(--glass-bg)",
                  backdropFilter: "var(--glass-blur)",
                  border: `1px solid var(--glass-border)`,
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = link.color + "55";
                  (e.currentTarget as HTMLElement).style.boxShadow = `0 8px 30px ${link.glow}`;
                  (e.currentTarget as HTMLElement).style.transform = "translateX(6px)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "var(--glass-border)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "none";
                  (e.currentTarget as HTMLElement).style.transform = "translateX(0)";
                }}
              >
                <span
                  className="p-2.5 rounded-xl flex-shrink-0 transition-all duration-300"
                  style={{
                    background: link.color + "18",
                    color: link.color,
                    border: `1px solid ${link.color}30`,
                  }}
                >
                  {link.icon}
                </span>
                <span
                  className="text-sm font-light"
                  style={{ color: "var(--text-body)" }}
                >
                  {link.label}
                </span>
              </a>
            ))}

            {/* Availability badge */}
            <div
              className="mt-4 flex items-center gap-3 p-4 rounded-2xl"
              style={{
                background: "rgba(16,185,129,0.08)",
                border: "1px solid rgba(16,185,129,0.25)",
              }}
            >
              <span
                className="w-2.5 h-2.5 rounded-full animate-pulse"
                style={{ background: "#10b981", boxShadow: "0 0 8px rgba(16,185,129,0.6)" }}
              />
              <span className="text-xs font-semibold" style={{ color: "#10b981" }}>
                Available for internships &amp; freelance
              </span>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="p-6 md:p-8 rounded-2xl"
            style={{
              background: "var(--glass-bg)",
              backdropFilter: "var(--glass-blur)",
              border: "1px solid var(--glass-border)",
              boxShadow: "0 8px 40px rgba(0,0,0,0.08)",
            }}
          >
            <div className="flex items-center gap-2 mb-6">
              <Sparkles size={16} style={{ color: "var(--brand-indigo)" }} />
              <h4 className="text-sm font-bold" style={{ color: "var(--text-title)" }}>
                Send a Message
              </h4>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              {/* Name */}
              <div>
                <label
                  htmlFor="contact-name"
                  className="block text-[10px] font-bold tracking-widest uppercase mb-2"
                  style={{ color: "var(--text-body)" }}
                >
                  Name
                </label>
                <input
                  type="text"
                  id="contact-name"
                  required
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  onFocus={() => setFocusedField("name")}
                  onBlur={() => setFocusedField(null)}
                  placeholder="John Doe"
                  style={{
                    ...inputStyle("name"),
                    caretColor: "var(--brand-indigo)",
                  }}
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="contact-email"
                  className="block text-[10px] font-bold tracking-widest uppercase mb-2"
                  style={{ color: "var(--text-body)" }}
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="contact-email"
                  required
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  onFocus={() => setFocusedField("email")}
                  onBlur={() => setFocusedField(null)}
                  placeholder="john@example.com"
                  style={{
                    ...inputStyle("email"),
                    caretColor: "var(--brand-indigo)",
                  }}
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="contact-message"
                  className="block text-[10px] font-bold tracking-widest uppercase mb-2"
                  style={{ color: "var(--text-body)" }}
                >
                  Message
                </label>
                <textarea
                  id="contact-message"
                  required
                  rows={4}
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  onFocus={() => setFocusedField("message")}
                  onBlur={() => setFocusedField(null)}
                  placeholder="Hi Shubham, let's connect!"
                  style={{
                    ...inputStyle("message"),
                    resize: "none",
                    caretColor: "var(--brand-indigo)",
                  }}
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={isSubmitting}
                id="contact-submit-btn"
                className="relative w-full flex items-center justify-center gap-2 text-sm font-bold py-3.5 rounded-xl text-white overflow-hidden transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed"
                style={{
                  background:
                    submitStatus === "success"
                      ? "linear-gradient(135deg, #10b981, #059669)"
                      : "var(--gradient-primary)",
                  backgroundSize: "200% 200%",
                  animation: submitStatus !== "success" ? "gradientShift 3s ease infinite" : "none",
                  boxShadow:
                    submitStatus === "success"
                      ? "0 4px 20px rgba(16,185,129,0.4)"
                      : "0 4px 20px var(--glow-indigo)",
                  cursor: isSubmitting ? "not-allowed" : "pointer",
                }}
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <span
                      className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"
                    />
                    Sending...
                  </span>
                ) : submitStatus === "success" ? (
                  "✓ Message Sent!"
                ) : (
                  <>
                    Send Message
                    <Send size={14} />
                  </>
                )}
                {/* Shimmer */}
                {submitStatus !== "success" && !isSubmitting && (
                  <span
                    className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity"
                    style={{
                      background:
                        "linear-gradient(90deg, transparent, rgba(255,255,255,0.15), transparent)",
                      backgroundSize: "200% 100%",
                      animation: "shimmer 1.5s linear infinite",
                    }}
                  />
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
