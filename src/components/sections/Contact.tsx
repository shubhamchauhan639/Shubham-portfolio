"use client";

import React, { useState } from "react";
import { Mail, Send, ArrowDownRight } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">(
    "idle"
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API request
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus("success");
      setFormState({ name: "", email: "", message: "" });
      setTimeout(() => setSubmitStatus("idle"), 4000);
    }, 120000 / 100); // 1.2s
  };

  return (
    <section id="contact" className="py-20 border-t border-border-card/50">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-xs font-semibold tracking-widest text-text-body/60 uppercase mb-12">
          GET IN TOUCH
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Left Side: Headline & Links */}
          <div className="flex flex-col justify-between h-full">
            <div>
              <h3 className="text-4xl md:text-5xl font-bold tracking-tight text-text-title mb-6 leading-tight flex items-end gap-2">
                Let&apos;s build <br />
                something.
                <span className="inline-block p-1.5 rounded-full border border-border-card bg-bg-card animate-bounce">
                  <ArrowDownRight size={20} className="text-brand-indigo" />
                </span>
              </h3>
              <p className="text-sm text-text-body/90 font-light leading-relaxed max-w-sm mb-8">
                I&apos;m currently looking for frontend internship opportunities. Feel free to reach out if you&apos;d like to collaborate or chat!
              </p>
            </div>

            {/* Structured Contact Details */}
            <div className="flex flex-col gap-4">
              <a
                href="mailto:shubhamchauhan12196@gmail.com"
                className="flex items-center gap-3 text-sm text-text-body hover:text-brand-indigo group transition-smooth"
                id="contact-email-link"
              >
                <span className="p-2.5 rounded-lg border border-border-card bg-bg-card group-hover:border-brand-indigo/35 group-hover:text-brand-indigo transition-smooth">
                  <Mail size={16} />
                </span>
                <span className="font-light">shubhamchauhan12196@gmail.com</span>
              </a>

              <a
                href="https://github.com/shubhamchauhan639"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-text-body hover:text-brand-indigo group transition-smooth"
                id="contact-github-link"
              >
                <span className="p-2.5 rounded-lg border border-border-card bg-bg-card group-hover:border-brand-indigo/35 group-hover:text-brand-indigo transition-smooth">
                  <GithubIcon size={16} />
                </span>
                <span className="font-light">github.com/shubhamchauhan639</span>
              </a>

              <a
                href="https://www.linkedin.com/in/shubham-chauhan-aaa832397/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-text-body hover:text-brand-indigo group transition-smooth"
                id="contact-linkedin-link"
              >
                <span className="p-2.5 rounded-lg border border-border-card bg-bg-card group-hover:border-brand-indigo/35 group-hover:text-brand-indigo transition-smooth">
                  <LinkedinIcon size={16} />
                </span>
                <span className="font-light">linkedin.com/in/shubham</span>
              </a>
            </div>
          </div>

          {/* Right Side: Clean Form */}
          <div className="p-6 rounded-xl border border-border-card bg-bg-card shadow-sm">
            <h4 className="text-sm font-semibold text-text-title mb-6">
              Send a Message
            </h4>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div>
                <label
                  htmlFor="contact-name"
                  className="block text-xs font-semibold text-text-body/60 uppercase mb-1.5"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="contact-name"
                  required
                  value={formState.name}
                  onChange={(e) =>
                    setFormState({ ...formState, name: e.target.value })
                  }
                  placeholder="John Doe"
                  className="w-full text-sm font-light px-4 py-2.5 rounded-lg border border-border-card bg-bg-base/30 text-text-title focus:bg-bg-card focus:border-brand-indigo focus:ring-1 focus:ring-brand-indigo/25 outline-none transition-smooth placeholder:text-text-body/30"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-email"
                  className="block text-xs font-semibold text-text-body/60 uppercase mb-1.5"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="contact-email"
                  required
                  value={formState.email}
                  onChange={(e) =>
                    setFormState({ ...formState, email: e.target.value })
                  }
                  placeholder="john@example.com"
                  className="w-full text-sm font-light px-4 py-2.5 rounded-lg border border-border-card bg-bg-base/30 text-text-title focus:bg-bg-card focus:border-brand-indigo focus:ring-1 focus:ring-brand-indigo/25 outline-none transition-smooth placeholder:text-text-body/30"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-message"
                  className="block text-xs font-semibold text-text-body/60 uppercase mb-1.5"
                >
                  Message
                </label>
                <textarea
                  id="contact-message"
                  required
                  rows={4}
                  value={formState.message}
                  onChange={(e) =>
                    setFormState({ ...formState, message: e.target.value })
                  }
                  placeholder="Hi Shubham, let's connect!"
                  className="w-full text-sm font-light px-4 py-2.5 rounded-lg border border-border-card bg-bg-base/30 text-text-title focus:bg-bg-card focus:border-brand-indigo focus:ring-1 focus:ring-brand-indigo/25 outline-none transition-smooth placeholder:text-text-body/30 resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2 text-sm font-semibold text-bg-card bg-brand-indigo hover:bg-brand-indigo/90 active:scale-[0.98] disabled:opacity-50 py-3 rounded-lg transition-smooth shadow-sm cursor-pointer"
                id="contact-submit-btn"
              >
                {isSubmitting ? (
                  "Sending..."
                ) : submitStatus === "success" ? (
                  "Message Sent!"
                ) : (
                  <>
                    Send Message
                    <Send size={14} />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
