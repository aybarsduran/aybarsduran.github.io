"use client";

import { motion } from "framer-motion";
import type { ReactElement } from "react";
import { skillCategories } from "@/data/skills";

const skillIconMap: Record<string, ReactElement> = {
  unity: (
    <svg viewBox="0 0 32 32" fill="currentColor" width="22" height="22">
      <path d="M25.29 4.382 17.559 16l7.733 11.617L30 16ZM14.441 16 6.709 4.382 1.998 16l4.711 11.617ZM16.586 17.632 8.723 29.5l15.553.001ZM15.413 14.368 23.277 2.5H7.724Z" />
    </svg>
  ),
  csharp: (
    <svg viewBox="0 0 32 32" fill="currentColor" width="22" height="22">
      <path d="M16 2a14 14 0 1 0 14 14A14 14 0 0 0 16 2zm-1 20a6 6 0 1 1 4.9-9.5l-1.56 1.56A4 4 0 1 0 15 22zm8.5-5h-1v1h-1v-1h-1v-1h1v-1h1v1h1zm3.5 0h-1v1h-1v-1h-1v-1h1v-1h1v1h1z" />
    </svg>
  ),
  gamepad: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
      <line x1="6" y1="12" x2="10" y2="12" /><line x1="8" y1="10" x2="8" y2="14" />
      <circle cx="15" cy="12" r=".5" fill="currentColor" /><circle cx="17.5" cy="10" r=".5" fill="currentColor" />
      <path d="M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z" />
    </svg>
  ),
  shader: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
      <circle cx="12" cy="12" r="10" /><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" /><path d="M2 12h20" />
    </svg>
  ),
  vr: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
      <path d="M2 8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8z" />
      <circle cx="9" cy="12" r="2" /><circle cx="15" cy="12" r="2" />
      <path d="M9 12h6" />
    </svg>
  ),
  oculus: (
    <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
      <ellipse cx="12" cy="12" rx="10" ry="7" /><ellipse cx="8.5" cy="12" rx="2.5" ry="2.5" fill="white" /><ellipse cx="15.5" cy="12" rx="2.5" ry="2.5" fill="white" />
    </svg>
  ),
  xr: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
      <path d="m2 8 4 4-4 4" /><path d="m22 8-4 4 4 4" /><path d="M8 2v20" /><path d="M16 2v20" />
    </svg>
  ),
  photon: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
      <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z" />
    </svg>
  ),
  java: (
    <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
      <path d="M8.851 18.56s-.917.534.653.714c1.902.218 2.874.187 4.969-.211 0 0 .552.346 1.321.646-4.699 2.013-10.633-.118-6.943-1.149M8.276 15.933s-1.028.761.542.924c2.032.209 3.636.227 6.413-.308 0 0 .384.389.987.602-5.679 1.661-12.007.13-7.942-1.218M13.116 11.475c1.158 1.333-.304 2.533-.304 2.533s2.939-1.518 1.589-3.418c-1.261-1.772-2.228-2.652 3.007-5.688 0-.001-8.216 2.051-4.292 6.573M19.33 20.504s.679.559-.747.991c-2.712.822-11.288 1.069-13.669.033-.856-.373.75-.89 1.254-.998.527-.114.828-.093.828-.093-.953-.671-6.156 1.317-2.643 1.887 9.58 1.553 17.462-.7 14.977-1.82M9.292 13.21s-4.362 1.036-1.544 1.412c1.189.159 3.561.123 5.77-.062 1.806-.152 3.618-.477 3.618-.477s-.637.272-1.098.587c-4.429 1.165-12.986.623-10.522-.568 2.082-1.006 3.776-.892 3.776-.892M17.116 17.584c4.503-2.34 2.421-4.589.968-4.285-.355.074-.515.138-.515.138s.132-.207.385-.297c2.875-1.011 5.086 2.981-.928 4.562 0-.001.07-.062.09-.118M14.401 0s2.494 2.494-2.365 6.33c-3.896 3.077-.888 4.832-.001 6.836-2.274-2.053-3.943-3.858-2.824-5.539 1.644-2.469 6.197-3.665 5.19-7.627M9.734 23.924c4.322.277 10.959-.153 11.116-2.198 0 0-.302.775-3.572 1.391-3.688.694-8.239.613-10.937.168 0-.001.553.457 3.393.639" />
    </svg>
  ),
  kotlin: (
    <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
      <path d="M2 2h11l-6.5 6.5L22 22H11L2 11.5V2z" />
      <path d="M2 22 12.5 11.5 22 22H2z" />
    </svg>
  ),
  android: (
    <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
      <path d="M17.523 15.341a9.336 9.336 0 0 1-11.046 0 5.847 5.847 0 0 1-2.477-4.83v-.842h16v.842a5.847 5.847 0 0 1-2.477 4.83zM7 7a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm10 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2zM5.5 8A1.5 1.5 0 0 0 4 9.5V16a1.5 1.5 0 0 0 3 0V9.5A1.5 1.5 0 0 0 5.5 8zm13 0A1.5 1.5 0 0 0 17 9.5V16a1.5 1.5 0 0 0 3 0V9.5A1.5 1.5 0 0 0 18.5 8zM8.5 1 7 3.5M15.5 1 17 3.5" />
    </svg>
  ),
  python: (
    <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
      <path d="M14.25.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.77l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.17l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05-.05-1.23.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.24.4-.16.36-.1.32-.05.26-.02h4.09c.22 0 .39-.18.39-.39V6.17c0-.22-.17-.39-.39-.39h-4.1l-.21.02-.27.05-.32.1-.37.16-.4.23-.42.31-.41.42-.38.54-.33.67-.25.82-.15.97-.04 1.12.08 1.12.2.97.3.82.37.68.41.56.41.44.39.35.36.27.32.2.27.14.22.1.17.07.12.04.08.02H9.5c.22 0 .39.17.39.39v1.71c0 .21-.17.39-.39.39H5.41l-.13.02-.17.04-.2.07-.22.1-.23.14-.22.18-.2.23-.17.27-.13.32-.07.36-.02.4.02.4.07.36.13.32.17.27.2.23.22.18.23.14.22.1.2.07.17.04.13.02h9.6l.13-.02.17-.04.2-.07.22-.1.23-.14.22-.18.2-.23.17-.27.13-.32.07-.36.02-.4-.02-.4-.07-.36-.13-.32-.17-.27-.2-.23-.22-.18-.23-.14-.22-.1-.2-.07-.17-.04-.13-.02h-2.9c-.22 0-.39-.17-.39-.39V12.5c0-.21.17-.39.39-.39h2.97l.13-.02.17-.05.21-.09.24-.14.25-.19.25-.25.23-.31.19-.38.14-.44.07-.5.01-.55-.06-.54-.13-.5-.2-.44-.25-.38-.28-.31-.3-.24-.31-.17-.3-.11-.28-.07-.25-.03-.21-.01h-.28l-.01.02h-.01V3.5z" />
    </svg>
  ),
  firebase: (
    <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
      <path d="M3.89 15.673L6.255.461A.542.542 0 0 1 7.27.289L9.763 5.06 3.89 15.673zm16.794 3.667L18.25 5.55a.55.55 0 0 0-.505-.328.55.55 0 0 0-.483.296l-9.692 17.802 10.955-3.959a.8.8 0 0 0 .16-1.001zm-7.0-14.048L11.02 2.745a.554.554 0 0 0-.974.001L2.536 19.09l8.151-13.798z" />
    </svg>
  ),
  git: (
    <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
      <path d="M23.546 10.93 13.067.452a1.55 1.55 0 0 0-2.188 0L8.708 2.627l2.76 2.76a1.838 1.838 0 0 1 2.327 2.341l2.658 2.66a1.838 1.838 0 0 1 1.9 3.039 1.837 1.837 0 0 1-2.6 0 1.846 1.846 0 0 1-.404-1.996L12.86 8.955v6.525c.176.086.342.203.488.348a1.848 1.848 0 0 1 0 2.6 1.844 1.844 0 0 1-2.609 0 1.848 1.848 0 0 1 0-2.6c.182-.18.387-.316.605-.406V8.835a1.834 1.834 0 0 1-.996-2.41L7.636 3.7.45 10.881a1.55 1.55 0 0 0 0 2.189l10.48 10.477a1.55 1.55 0 0 0 2.187 0l10.43-10.43a1.55 1.55 0 0 0 0-2.187" />
    </svg>
  ),
  figma: (
    <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
      <path d="M15.852 8.981h-4.588V0h4.588c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.491-4.49 4.491zM12.735 7.51h3.117c1.665 0 3.019-1.355 3.019-3.019s-1.354-3.019-3.019-3.019h-3.117V7.51zm0 1.471H8.148c-2.476 0-4.49-2.014-4.49-4.49S5.672 0 8.148 0h4.588v8.981zm-4.587-7.51c-1.665 0-3.019 1.355-3.019 3.019s1.354 3.019 3.019 3.019h3.117V1.471H8.148zm4.587 15.019H8.148c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h4.588v8.98zM8.148 8.981c-1.665 0-3.019 1.355-3.019 3.019s1.354 3.019 3.019 3.019h3.117V8.981H8.148zM8.172 24c-2.489 0-4.515-2.014-4.515-4.49s2.026-4.49 4.515-4.49c2.49 0 4.515 2.014 4.515 4.49S10.661 24 8.172 24zm0-7.51c-1.665 0-3.019 1.355-3.019 3.019s1.354 3.02 3.019 3.02c1.665 0 3.019-1.355 3.019-3.02s-1.354-3.019-3.019-3.019zm7.704 7.51c-2.476 0-4.49-2.014-4.49-4.49v-4.49h4.49c2.476 0 4.49 2.014 4.49 4.49S18.38 24 15.876 24zm-3.019-4.49c0 1.665 1.354 3.019 3.019 3.019s3.019-1.354 3.019-3.019-1.354-3.019-3.019-3.019h-3.019V19.51z" />
    </svg>
  ),
  api: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
    </svg>
  ),
};

const levelLabels = ["", "Beginner", "Basic", "Intermediate", "Advanced", "Expert"];

const categoryColors: Record<string, { bg: string; accent: string; text: string }> = {
  "Game Development": { bg: "rgba(99,102,241,0.08)", accent: "#6366f1", text: "#a5b4fc" },
  "XR Development": { bg: "rgba(139,92,246,0.08)", accent: "#8b5cf6", text: "#c4b5fd" },
  "Mobile & Software": { bg: "rgba(20,184,166,0.08)", accent: "#14b8a6", text: "#5eead4" },
  "Tools & Technologies": { bg: "rgba(245,158,11,0.08)", accent: "#f59e0b", text: "#fcd34d" },
};

export default function Skills() {
  return (
    <section
      id="skills"
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
            Expertise
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4" style={{ color: "var(--text-primary)" }}>
            Skills & Tools
          </h2>
          <p className="text-base max-w-xl" style={{ color: "var(--text-secondary)" }}>
            Technologies and tools I work with to build games, immersive XR experiences, and mobile applications.
          </p>
        </motion.div>

        {/* Skill categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((cat, catIdx) => {
            const colors = categoryColors[cat.name] || categoryColors["Game Development"];
            return (
              <motion.div
                key={cat.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: catIdx * 0.1 }}
                className="rounded-2xl p-6"
                style={{
                  background: "var(--surface-2)",
                  border: "1px solid var(--border)",
                }}
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center"
                    style={{ background: colors.bg, color: colors.accent }}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="16" height="16">
                      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-sm" style={{ color: colors.text }}>
                    {cat.name}
                  </h3>
                </div>

                <div className="space-y-3">
                  {cat.skills.map((skill, skillIdx) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: catIdx * 0.1 + skillIdx * 0.05 }}
                    >
                      <div className="flex items-center justify-between mb-1.5">
                        <div className="flex items-center gap-2.5">
                          <span style={{ color: colors.text, opacity: 0.8 }}>
                            {skillIconMap[skill.icon] || (
                              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18">
                                <circle cx="12" cy="12" r="10" />
                              </svg>
                            )}
                          </span>
                          <span className="text-sm font-medium" style={{ color: "var(--text-primary)" }}>
                            {skill.name}
                          </span>
                        </div>
                        <span className="text-xs" style={{ color: "var(--text-secondary)" }}>
                          {levelLabels[skill.level]}
                        </span>
                      </div>
                      {/* Progress bar */}
                      <div className="h-1.5 rounded-full overflow-hidden" style={{ background: "var(--border)" }}>
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${(skill.level / 5) * 100}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8, delay: catIdx * 0.1 + skillIdx * 0.05, ease: "easeOut" }}
                          className="h-full rounded-full"
                          style={{ background: `linear-gradient(90deg, ${colors.accent}, ${colors.text})` }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Extra tech badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-10"
        >
          <p className="text-xs uppercase tracking-widest mb-4 font-medium" style={{ color: "var(--text-secondary)" }}>
            Also familiar with
          </p>
          <div className="flex flex-wrap gap-2">
            {["Blender", "Photoshop", "Inworld AI", "Photon Fusion", "AR Foundation", "Shader Graph", "DOTween", "REST APIs", "Agile / Scrum"].map((tech) => (
              <span key={tech}
                className="px-3 py-1.5 rounded-lg text-xs font-medium border transition-all hover:border-indigo-400/50"
                style={{ background: "var(--surface)", color: "var(--text-secondary)", border: "1px solid var(--border)" }}>
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
