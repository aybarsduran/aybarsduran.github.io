"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
}

function ExternalLinkIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 3h6v6M10 14 21 3M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    </svg>
  );
}
function GitHubIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}
function PlayIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="white">
      <path d="M5 3l14 9-14 9V3z" />
    </svg>
  );
}
function CloseIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

const categoryColors: Record<string, string> = {
  "Game Dev": "rgba(99,102,241,0.15)",
  "VR/XR": "rgba(139,92,246,0.15)",
  "Mobile": "rgba(20,184,166,0.15)",
};
const categoryTextColors: Record<string, string> = {
  "Game Dev": "#a5b4fc",
  "VR/XR": "#c4b5fd",
  "Mobile": "#5eead4",
};

export default function ProjectCard({ project }: ProjectCardProps) {
  const [modalOpen, setModalOpen] = useState(false);
  const [imgError, setImgError] = useState(false);

  const hasVideo = !!project.youtubeId;
  const thumbnailUrl = hasVideo
    ? imgError
      ? `https://img.youtube.com/vi/${project.youtubeId}/mqdefault.jpg`
      : (project.thumbnail ?? `https://img.youtube.com/vi/${project.youtubeId}/hqdefault.jpg`)
    : null;

  return (
    <>
      <motion.article
        layout
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95 }}
        whileHover={{ y: -4 }}
        transition={{ duration: 0.3 }}
        className={`rounded-2xl overflow-hidden flex flex-col ${hasVideo ? "cursor-pointer" : "cursor-default"} group`}
        style={{
          background: "var(--surface)",
          border: "1px solid var(--border)",
        }}
        onClick={() => hasVideo && setModalOpen(true)}
      >
        {/* Thumbnail */}
        <div className="relative w-full aspect-video overflow-hidden" style={{ background: "#0d0d18" }}>
          {thumbnailUrl ? (
            <>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={thumbnailUrl}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                onError={() => setImgError(true)}
              />
              {/* Dark overlay on hover */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-14 h-14 rounded-full flex items-center justify-center"
                  style={{ background: "rgba(99,102,241,0.9)" }}>
                  <PlayIcon />
                </div>
              </div>
            </>
          ) : (
            /* Placeholder for projects without video */
            <div className="w-full h-full flex flex-col items-center justify-center gap-3"
              style={{ background: "linear-gradient(135deg, rgba(99,102,241,0.08), rgba(139,92,246,0.08))" }}>
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center"
                style={{ background: "rgba(99,102,241,0.15)", border: "1px solid rgba(99,102,241,0.2)" }}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#6366f1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="3" width="20" height="14" rx="2" />
                  <path d="M8 21h8M12 17v4" />
                </svg>
              </div>
              <span className="text-xs font-medium" style={{ color: "rgba(99,102,241,0.7)" }}>Video coming soon</span>
            </div>
          )}
          {/* Category badge */}
          <span
            className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-xs font-semibold"
            style={{
              background: categoryColors[project.category] || "rgba(99,102,241,0.15)",
              color: categoryTextColors[project.category] || "#a5b4fc",
              border: `1px solid ${categoryTextColors[project.category] || "#a5b4fc"}30`,
              backdropFilter: "blur(8px)",
            }}
          >
            {project.category}
          </span>
          {/* Studio badge */}
          {project.studio && (
            <span
              className="absolute top-3 right-3 px-2.5 py-1 rounded-full text-xs font-semibold"
              style={{
                background: "rgba(245,158,11,0.15)",
                color: "#fcd34d",
                border: "1px solid rgba(245,158,11,0.25)",
                backdropFilter: "blur(8px)",
              }}
            >
              {project.studio}
            </span>
          )}
        </div>

        {/* Content */}
        <div className="p-5 flex flex-col flex-1">
          <h3 className="font-semibold text-base mb-2 group-hover:text-indigo-400 transition-colors"
            style={{ color: "var(--text-primary)" }}>
            {project.title}
          </h3>
          <p className="text-sm leading-relaxed flex-1 line-clamp-2"
            style={{ color: "var(--text-secondary)" }}>
            {project.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 mt-4">
            {project.tags.slice(0, 3).map((tag) => (
              <span key={tag}
                className="text-xs px-2 py-0.5 rounded-md"
                style={{ background: "var(--surface-2)", color: "var(--text-secondary)", border: "1px solid var(--border)" }}>
                {tag}
              </span>
            ))}
          </div>

          {/* Links */}
          <div className="flex gap-2 mt-4" onClick={(e) => e.stopPropagation()}>
            {hasVideo && (
              <button
                onClick={() => setModalOpen(true)}
                className="flex-1 flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg text-xs font-medium text-white transition-all duration-200 hover:opacity-90"
                style={{ background: "linear-gradient(135deg, #6366f1, #8b5cf6)" }}
              >
                <PlayIcon />
                <span className="ml-0.5">Watch</span>
              </button>
            )}
            {project.githubUrl && (
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer"
                className="flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg text-xs font-medium transition-all duration-200 hover:border-indigo-400 hover:text-indigo-400"
                style={{ background: "var(--surface-2)", color: "var(--text-secondary)", border: "1px solid var(--border)" }}>
                <GitHubIcon />
                Code
              </a>
            )}
            {project.externalUrl && !project.githubUrl && (
              <a href={project.externalUrl} target="_blank" rel="noopener noreferrer"
                className="flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg text-xs font-medium transition-all duration-200 hover:border-indigo-400 hover:text-indigo-400"
                style={{ background: "var(--surface-2)", color: "var(--text-secondary)", border: "1px solid var(--border)" }}>
                <ExternalLinkIcon />
                View
              </a>
            )}
          </div>
        </div>
      </motion.article>

      {/* Video Modal */}
      <AnimatePresence mode="wait">
        {modalOpen && hasVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            style={{ background: "rgba(0,0,0,0.85)", backdropFilter: "blur(8px)" }}
            onClick={() => setModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="relative w-full max-w-3xl rounded-2xl overflow-hidden"
              style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal header */}
              <div className="flex items-center justify-between px-5 py-4 border-b"
                style={{ borderColor: "var(--border)" }}>
                <div>
                  <h3 className="font-semibold" style={{ color: "var(--text-primary)" }}>{project.title}</h3>
                  <span className="text-xs" style={{ color: "var(--text-secondary)" }}>{project.category}</span>
                </div>
                <div className="flex items-center gap-2">
                  {project.githubUrl && (
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer"
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-colors"
                      style={{ background: "var(--surface-2)", color: "var(--text-secondary)", border: "1px solid var(--border)" }}>
                      <GitHubIcon /> GitHub
                    </a>
                  )}
                  {project.externalUrl && (
                    <a href={project.externalUrl} target="_blank" rel="noopener noreferrer"
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-colors"
                      style={{ background: "var(--surface-2)", color: "var(--text-secondary)", border: "1px solid var(--border)" }}>
                      <ExternalLinkIcon /> Link
                    </a>
                  )}
                  <button onClick={() => setModalOpen(false)}
                    className="w-8 h-8 rounded-lg flex items-center justify-center transition-colors hover:text-white"
                    style={{ background: "var(--surface-2)", color: "var(--text-secondary)" }}>
                    <CloseIcon />
                  </button>
                </div>
              </div>

              {/* YouTube embed */}
              <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src={`https://www.youtube.com/embed/${project.youtubeId}?autoplay=1&rel=0&playsinline=1`}
                  title={project.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>

              {/* Description */}
              <div className="px-5 py-4">
                <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5 mt-3">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-xs px-2 py-0.5 rounded-md"
                      style={{ background: "var(--surface-2)", color: "var(--text-secondary)", border: "1px solid var(--border)" }}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
