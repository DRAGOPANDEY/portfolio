"use client";

import { motion } from "framer-motion";
import { Briefcase, MapPin } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { experiences } from "@/data/experience";

export function Experience() {
  return (
    <section
      id="experience"
      className="relative scroll-mt-20 py-20 sm:py-28 lg:py-32"
    >
      <div className="container-section">
        <SectionHeading
          eyebrow="Experience"
          title="What I've shipped, where."
          description="The roles where I've owned DevOps, edge systems and production infrastructure end-to-end."
        />

        <div className="relative mx-auto max-w-4xl">
          {/* Timeline rail */}
          <div className="absolute left-3 top-2 h-full w-px bg-gradient-to-b from-primary-500/50 via-white/10 to-transparent sm:left-1/2" />

          <div className="space-y-8 sm:space-y-12">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.role + exp.company}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className={`relative flex flex-col gap-4 sm:flex-row sm:gap-8 ${
                  i % 2 === 1 ? "sm:flex-row-reverse" : ""
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-3 top-3 z-10 grid size-7 -translate-x-1/2 place-items-center rounded-full border border-primary-400/40 bg-elevated text-primary-300 shadow-glow sm:left-1/2 sm:size-9">
                  <Briefcase className="size-3 sm:size-4" />
                </div>

                {/* Spacer (only desktop, opposite side) */}
                <div className="hidden flex-1 sm:block" />

                {/* Card */}
                <div className="card-elevated ml-10 flex-1 p-5 sm:ml-0 sm:p-6">
                  <div className="mb-3 flex flex-wrap items-center gap-2">
                    <span className="chip">{exp.period}</span>
                    <span className="inline-flex items-center gap-1 text-xs text-muted">
                      <MapPin className="size-3" />
                      {exp.location}
                    </span>
                  </div>
                  <h3 className="font-display text-base font-semibold leading-tight sm:text-lg">
                    {exp.role}
                  </h3>
                  <p className="mb-3 mt-1 text-sm font-medium text-primary-300">
                    {exp.company}
                  </p>
                  <p className="mb-4 text-sm leading-relaxed text-muted">
                    {exp.description}
                  </p>

                  <ul className="space-y-1.5 text-sm leading-relaxed">
                    {exp.achievements.map((a) => (
                      <li key={a} className="flex items-start gap-2">
                        <span className="mt-2 size-1 shrink-0 rounded-full bg-primary-400" />
                        <span className="text-muted">{a}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {exp.stack.map((s) => (
                      <span key={s} className="chip text-[10px]">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
