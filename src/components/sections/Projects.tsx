"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { projects } from "@/data/projects";

const categories = [
  "All",
  "DevOps",
  "Edge",
  "Infrastructure",
  "Networking",
  "Automation",
] as const;

export function Projects() {
  const [active, setActive] = useState<(typeof categories)[number]>("All");

  const filtered = useMemo(() => {
    if (active === "All") return projects;
    return projects.filter((p) => p.category === active);
  }, [active]);

  return (
    <section id="projects" className="relative scroll-mt-20 py-20 sm:py-28 lg:py-32">
      <div className="container-section">
        <SectionHeading
          eyebrow="Selected Work"
          title="Infrastructure that runs in production."
          description="From edge-device cloning pipelines to air-gapped deployments at Maruti, BARC and defence-sector clients — every project below is shipped, monitored and running today."
        />

        <div className="mb-10 flex flex-wrap items-center justify-center gap-2">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`rounded-full border px-4 py-1.5 text-sm transition-all ${
                active === c
                  ? "border-primary-400/60 bg-primary-500/15 text-white shadow-glow"
                  : "border-white/10 bg-white/5 text-muted hover:border-white/20 hover:text-white"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <motion.div
          layout
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((p, i) => (
              <ProjectCard key={p.id} project={p} index={i} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
