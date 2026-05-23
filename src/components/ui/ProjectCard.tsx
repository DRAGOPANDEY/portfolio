"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Github, Sparkles } from "lucide-react";
import type { Project } from "@/data/projects";

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.45, delay: (index % 3) * 0.07 }}
      whileHover={{ y: -4 }}
      className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/5 bg-elevated/60 backdrop-blur-sm transition-all duration-300 hover:border-primary-500/30 hover:shadow-glow"
    >
      <div
        className={`relative h-28 overflow-hidden bg-gradient-to-br ${project.accent}`}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.25),transparent_60%)]" />
        <div className="absolute inset-0 grid-bg opacity-25" />
        <div className="absolute bottom-3 left-4 flex items-center gap-2">
          <span className="rounded-full border border-white/20 bg-black/50 px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-wider text-white backdrop-blur-sm">
            {project.category}
          </span>
          {project.featured && (
            <span className="inline-flex items-center gap-1 rounded-full border border-yellow-300/40 bg-yellow-400/20 px-2.5 py-0.5 text-[10px] font-medium text-yellow-100 backdrop-blur-sm">
              <Sparkles className="size-2.5" />
              Featured
            </span>
          )}
        </div>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="mb-1.5 font-display text-lg font-semibold leading-tight">
          {project.title}
        </h3>
        <p className="mb-4 text-sm text-primary-300/90">{project.tagline}</p>
        <p className="mb-4 text-sm leading-relaxed text-muted">
          {project.description}
        </p>

        <ul className="mb-5 space-y-1.5 text-xs leading-relaxed text-muted">
          {project.highlights.slice(0, 3).map((h) => (
            <li key={h} className="flex items-start gap-2">
              <span className="mt-1.5 size-1 shrink-0 rounded-full bg-primary-400" />
              <span>{h}</span>
            </li>
          ))}
        </ul>

        <div className="mt-auto flex flex-wrap gap-1.5">
          {project.stack.map((s) => (
            <span key={s} className="chip text-[10px]">
              {s}
            </span>
          ))}
        </div>

        {(project.github || project.demo) && (
          <div className="mt-5 flex items-center gap-3 border-t border-white/5 pt-4">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer noopener"
                className="btn-ghost text-xs"
              >
                <Github className="size-3.5" />
                Code
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noreferrer noopener"
                className="btn-ghost text-xs"
              >
                <ArrowUpRight className="size-3.5" />
                Live demo
              </a>
            )}
          </div>
        )}
      </div>
    </motion.article>
  );
}
