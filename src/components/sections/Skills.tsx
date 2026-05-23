"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { skillCategories } from "@/data/skills";

export function Skills() {
  return (
    <section id="skills" className="relative scroll-mt-20 py-20 sm:py-28 lg:py-32">
      <div className="container-section">
        <SectionHeading
          eyebrow="Tech Stack"
          title="The DevOps toolkit I ship with."
          description="Every tool listed here is one I've used in production — edge fleet, server infrastructure or enterprise integration. Proficiency bars indicate how often I reach for it."
        />

        <div className="grid gap-6 lg:grid-cols-3">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="card-elevated p-6"
            >
              <h3 className="mb-1 font-display text-xl font-semibold">
                {cat.title}
              </h3>
              <p className="mb-6 text-sm text-muted">{cat.description}</p>

              <div className="space-y-4">
                {cat.skills.map((s, j) => (
                  <div key={s.name}>
                    <div className="mb-1.5 flex items-center justify-between text-sm">
                      <span className="font-medium">{s.name}</span>
                      <span className="font-mono text-xs text-muted">
                        {s.level}%
                      </span>
                    </div>
                    <div className="h-1.5 overflow-hidden rounded-full bg-white/5">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${s.level}%` }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 1,
                          delay: 0.2 + j * 0.06,
                          ease: "easeOut",
                        }}
                        className="h-full rounded-full bg-gradient-to-r from-primary-500 to-cyan-400"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
