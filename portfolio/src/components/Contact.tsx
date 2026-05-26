"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const socials = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/aybarsduran/",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
    color: "#0077b5",
  },
  {
    label: "GitHub",
    href: "https://github.com/aybarsduran",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
      </svg>
    ),
    color: "#6e40c9",
  },
  {
    label: "HackerRank",
    href: "https://www.hackerrank.com/profile/aybarsduran",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.373 0 0 5.373 0 12c0 6.628 5.373 12 12 12s12-5.372 12-12C24 5.373 18.628 0 12 0zm5.508 16.567l-.001.001c-.356.355-.838.563-1.373.563H7.866c-.534 0-1.016-.207-1.373-.563-.356-.356-.563-.838-.563-1.373V8.806c0-.534.208-1.017.563-1.373.357-.356.84-.563 1.374-.563h8.267c.535 0 1.017.207 1.373.563.357.357.564.84.564 1.373v6.389c0 .534-.207 1.017-.563 1.372zm-7.99-3.45h1.037v1.762h1.037v-1.762h.692v1.762H13.32v-1.762h1.037v1.762h1.037V9.64H7.518v7.239h1.037v-3.762z" />
      </svg>
    ),
    color: "#2ec866",
  },
  {
    label: "Stack Overflow",
    href: "https://stackoverflow.com/users/22237320/aybars-duran",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.36 20.2v-5.38h1.79V22H3v-7.18h1.8v5.38zM6.77 14.32l.38-1.76 8.11 1.71-.37 1.76zm1.16-4.21.76-1.61 7.5 3.56-.76 1.62zm2.26-3.99 1.15-1.38 6.35 5.3-1.15 1.37zm4.45-4.25 1.44-.93 4 6.2-1.44.93zM6.59 19.88v-1.8h8.22v1.8z" />
      </svg>
    ),
    color: "#f48024",
  },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent("Portfolio Contact");
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`);
    window.open(`mailto:aybarsduran@outlook.com?subject=${subject}&body=${body}`);
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  const inputStyle = {
    background: "var(--surface-2)",
    border: "1px solid var(--border)",
    color: "var(--text-primary)",
    borderRadius: "12px",
  };

  return (
    <section
      id="contact"
      className="min-h-screen py-24 px-6"
      style={{ background: "var(--surface)" }}
    >
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "#6366f1" }}>
            Get in touch
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4" style={{ color: "var(--text-primary)" }}>
            Contact Me
          </h2>
          <p className="text-base max-w-xl" style={{ color: "var(--text-secondary)" }}>
            Have a project in mind or want to collaborate? Feel free to reach out!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3 space-y-4"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium mb-1.5" style={{ color: "var(--text-secondary)" }}>
                  Your Name
                </label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                  placeholder="Aybars Duran"
                  className="w-full px-4 py-3 text-sm outline-none transition-all duration-200 focus:ring-2 placeholder:opacity-40"
                  style={{ ...inputStyle, "--tw-ring-color": "#6366f1" } as React.CSSProperties}
                />
              </div>
              <div>
                <label className="block text-xs font-medium mb-1.5" style={{ color: "var(--text-secondary)" }}>
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                  placeholder="hello@example.com"
                  className="w-full px-4 py-3 text-sm outline-none transition-all duration-200 focus:ring-2 placeholder:opacity-40"
                  style={{ ...inputStyle, "--tw-ring-color": "#6366f1" } as React.CSSProperties}
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium mb-1.5" style={{ color: "var(--text-secondary)" }}>
                Message
              </label>
              <textarea
                required
                rows={6}
                value={form.message}
                onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                placeholder="Tell me about your project or just say hi..."
                className="w-full px-4 py-3 text-sm outline-none transition-all duration-200 focus:ring-2 resize-none placeholder:opacity-40"
                style={{ ...inputStyle, "--tw-ring-color": "#6366f1" } as React.CSSProperties}
              />
            </div>

            <button
              type="submit"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm text-white transition-all duration-300 hover:scale-105 hover:shadow-lg disabled:opacity-60"
              style={{
                background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
                boxShadow: "0 0 20px rgba(99,102,241,0.25)",
              }}
            >
              {sent ? (
                <>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  Message Sent!
                </>
              ) : (
                <>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m22 2-7 20-4-9-9-4z" /><path d="M22 2 11 13" />
                  </svg>
                  Send Message
                </>
              )}
            </button>
          </motion.form>

          {/* Social + info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-2 space-y-5"
          >
            {/* Email card */}
            <div className="p-5 rounded-2xl" style={{ background: "var(--surface-2)", border: "1px solid var(--border)" }}>
              <p className="text-xs uppercase tracking-widest mb-2 font-medium" style={{ color: "var(--text-secondary)" }}>
                Direct Email
              </p>
              <a href="mailto:aybarsduran@outlook.com"
                className="text-sm font-medium hover:text-indigo-400 transition-colors"
                style={{ color: "var(--text-primary)" }}>
                aybarsduran@outlook.com
              </a>
            </div>

            {/* Social links */}
            <div className="p-5 rounded-2xl" style={{ background: "var(--surface-2)", border: "1px solid var(--border)" }}>
              <p className="text-xs uppercase tracking-widest mb-4 font-medium" style={{ color: "var(--text-secondary)" }}>
                Find me on
              </p>
              <div className="space-y-3">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 group"
                  >
                    <span className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-200 group-hover:scale-110"
                      style={{ background: `${s.color}20`, color: s.color }}>
                      {s.icon}
                    </span>
                    <span className="text-sm font-medium transition-colors group-hover:text-indigo-400"
                      style={{ color: "var(--text-primary)" }}>
                      {s.label}
                    </span>
                    <svg className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: "var(--text-secondary)" }}>
                      <path d="M15 3h6v6M10 14 21 3M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="max-w-5xl mx-auto mt-20 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4"
        style={{ borderTop: "1px solid var(--border)" }}
      >
        <p className="text-xs" style={{ color: "var(--text-secondary)" }}>
          © {new Date().getFullYear()} Selim Aybars Duran. All rights reserved.
        </p>
        <p className="text-xs" style={{ color: "var(--text-secondary)" }}>
          Built with Next.js & TailwindCSS
        </p>
      </motion.div>
    </section>
  );
}
