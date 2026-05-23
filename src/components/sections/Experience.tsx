"use client";

import { motion } from "framer-motion";
import { Briefcase, MapPin } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { experiences } from "@/data/experience";

export function Experience() {
  return (
    <section id="experience" className="relative scroll-mt-20 py-24 sm:py-32">
      <div className="container-section">
        <SectionHeading
          eyebrow="Experience"
          title="What I've shipped, where."
          description="A snapshot of the roles where I've owned AI vision systems from training to production."
        />

        <div className="relative mx-auto max-w-4xl">
          <div className="absolute left-4 top-2 h-full w-px bg-gradient-to-b from-primary-500/50 via-white/10 to-transparent sm:left-1/2" />

          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.role + exp.company}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`relative flex flex-col gap-4 sm:flex-row ${
                  i % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"
                }`}
              >
                <div className="absolute left-4 top-3 grid size-8 -translate-x-1/2 place-items-center rounded-full border border-white/10 bg-elevated text-primary-300 shadow-glow sm:left-1/2">
                  <Briefcase className="size-3.5" />
                </div>

                <div className="hidden flex-1 sm:block" />

                <div className="card-elevated ml-12 flex-1 p-6 sm:ml-0">
                  <div className="mb-2 flex flex-wrap items-center gap-2">
                    <span className="chip">{exp.period}</span>
                    <span className="inline-flex items-center gap-1 text-xs text-muted">
                      <MapPin className="size-3" />
                      {exp.location}
                    </span>
                  </div>
                  <h3 className="font-display text-lg font-semibold">
                    {exp.role}
                  </h3>
                  <p className="mb-3 text-sm font-medium text-primary-300">
                    {exp.company}
                  </p>
                  <p className="mb-4 text-sm text-muted">{exp.description}</p>

                  <ul className="space-y-1.5 text-sm">
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
