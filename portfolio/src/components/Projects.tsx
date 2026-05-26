"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects, categories, type ProjectCategory } from "@/data/projects";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("All");

  const filtered =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section
      id="projects"
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
          className="mb-12"
        >
          <p className="text-xs font-semibold uppercase tracking-widest mb-3"
            style={{ color: "#6366f1" }}>
            Portfolio
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4"
            style={{ color: "var(--text-primary)" }}>
            My Projects
          </h2>
          <p className="text-base max-w-xl" style={{ color: "var(--text-secondary)" }}>
            A selection of games, VR/XR experiences, and mobile apps I&apos;ve built. Click any project to watch the demo.
          </p>
        </motion.div>

        {/* Category filters */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap gap-2 mb-10"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className="relative px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200"
              style={{
                color: activeCategory === cat ? "white" : "var(--text-secondary)",
                background: activeCategory === cat
                  ? "linear-gradient(135deg, #6366f1, #8b5cf6)"
                  : "var(--surface)",
                border: `1px solid ${activeCategory === cat ? "transparent" : "var(--border)"}`,
              }}
            >
              {cat}
              {activeCategory === cat && (
                <motion.span
                  layoutId="categoryPill"
                  className="absolute inset-0 rounded-xl"
                  style={{ background: "linear-gradient(135deg, #6366f1, #8b5cf6)", zIndex: -1 }}
                />
              )}
            </button>
          ))}

          <span className="ml-auto flex items-center text-sm" style={{ color: "var(--text-secondary)" }}>
            {filtered.length} project{filtered.length !== 1 ? "s" : ""}
          </span>
        </motion.div>

        {/* Projects grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
