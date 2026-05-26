"use client";

import { motion } from "framer-motion";

const highlights = [
  { label: "University", value: "Akdeniz University", sub: "Computer Engineering" },
  { label: "Specialization", value: "Game Dev & XR", sub: "Unity · VR · AR" },
  { label: "Experience", value: "3+ Years", sub: "Unity · Mobile · VR" },
  { label: "Projects", value: "8+ Shipped", sub: "Games · Apps · Research" },
];

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen py-24 px-6"
      style={{ background: "var(--background)" }}
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
            Who I am
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold" style={{ color: "var(--text-primary)" }}>
            About Me
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-5 text-base leading-relaxed" style={{ color: "var(--text-secondary)" }}>
              <p>
                Hello! I&apos;m <span style={{ color: "var(--text-primary)", fontWeight: 600 }}>Aybars</span>, a passionate Game Developer and Software Engineer specializing in Unity development.
              </p>
              <p>
                With experience in creating engaging <span style={{ color: "#a5b4fc" }}>3D, 2D, and XR games</span>, I thrive on transforming innovative ideas into captivating gaming experiences. I have a solid background in programming with <span style={{ color: "#a5b4fc" }}>C#, Java, Python, and Kotlin</span>.
              </p>
              <p>
                I&apos;ve worked on various projects from hyper-casual mobile games to complex VR applications — including a published app on the <span style={{ color: "#a5b4fc" }}>Meta Quest Store</span> (LinguaQuest) and VR research simulations integrating <span style={{ color: "#a5b4fc" }}>Inworld AI</span> and <span style={{ color: "#a5b4fc" }}>Photon</span>.
              </p>
              <p>
                I graduated from <span style={{ color: "var(--text-primary)", fontWeight: 600 }}>Akdeniz University</span> with a degree in Computer Engineering, which provided me with a strong foundation in algorithms, software architecture, and system design.
              </p>
            </div>

            {/* Resume CTA */}
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm text-white transition-all duration-300 hover:scale-105 hover:shadow-lg"
                style={{
                  background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
                  boxShadow: "0 0 20px rgba(99,102,241,0.25)",
                }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
                Download Resume
              </a>
              <a
                href="https://github.com/aybarsduran"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm transition-all duration-300 hover:scale-105 border"
                style={{
                  color: "var(--text-primary)",
                  borderColor: "var(--border)",
                  background: "var(--surface)",
                }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
                GitHub Profile
              </a>
            </div>
          </motion.div>

          {/* Stat cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="grid grid-cols-2 gap-4"
          >
            {highlights.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="p-5 rounded-2xl"
                style={{
                  background: "var(--surface)",
                  border: "1px solid var(--border)",
                }}
              >
                <p className="text-xs uppercase tracking-widest mb-2 font-medium" style={{ color: "var(--text-secondary)" }}>
                  {item.label}
                </p>
                <p className="text-lg font-bold gradient-text">{item.value}</p>
                <p className="text-xs mt-1" style={{ color: "var(--text-secondary)" }}>{item.sub}</p>
              </motion.div>
            ))}

            {/* Quote / motto */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.4 }}
              className="col-span-2 p-5 rounded-2xl relative overflow-hidden"
              style={{
                background: "rgba(99,102,241,0.08)",
                border: "1px solid rgba(99,102,241,0.2)",
              }}
            >
              <div className="text-5xl font-serif leading-none mb-2" style={{ color: "#6366f1", opacity: 0.5 }}>&ldquo;</div>
              <p className="text-sm leading-relaxed" style={{ color: "#c7d2fe" }}>
                Let&apos;s create something amazing together!
              </p>
              <p className="text-xs mt-2 font-medium" style={{ color: "#6366f1" }}>— Aybars</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
