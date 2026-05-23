"use client";

import { motion } from "framer-motion";
import { GraduationCap, Languages as LanguagesIcon, MapPin } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { education, languages } from "@/data/education";

export function Education() {
  return (
    <section id="education" className="relative scroll-mt-20 py-20 sm:py-28 lg:py-32">
      <div className="container-section">
        <SectionHeading
          eyebrow="Education & Languages"
          title="Background."
          description="Engineering foundation in Electronics & Communications, with a software-first career built on top."
        />

        <div className="mx-auto grid max-w-5xl gap-6 lg:grid-cols-[1.4fr_1fr]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-4"
          >
            {education.map((edu) => (
              <div key={edu.degree} className="card-elevated p-6">
                <div className="mb-4 flex items-center gap-3">
                  <span className="grid size-11 place-items-center rounded-xl bg-gradient-to-br from-primary-600/30 to-cyan-500/20 text-primary-300">
                    <GraduationCap className="size-5" />
                  </span>
                  <span className="chip">{edu.period}</span>
                </div>
                <h3 className="font-display text-lg font-semibold">
                  {edu.degree}
                </h3>
                <p className="mt-1 text-sm font-medium text-primary-300">
                  {edu.field}
                </p>
                <p className="mt-3 text-sm text-muted">{edu.institution}</p>
                {edu.location && (
                  <p className="mt-1 inline-flex items-center gap-1 text-xs text-muted">
                    <MapPin className="size-3" />
                    {edu.location}
                  </p>
                )}
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="card-elevated flex flex-col gap-4 p-6"
          >
            <div className="flex items-center gap-3">
              <span className="grid size-11 place-items-center rounded-xl bg-gradient-to-br from-primary-600/30 to-cyan-500/20 text-primary-300">
                <LanguagesIcon className="size-5" />
              </span>
              <h3 className="font-display text-lg font-semibold">Languages</h3>
            </div>

            <ul className="flex flex-col gap-3">
              {languages.map((lang) => (
                <li
                  key={lang.name}
                  className="flex items-center justify-between rounded-xl border border-white/5 bg-background/40 px-4 py-3"
                >
                  <span className="font-medium">{lang.name}</span>
                  <span className="chip text-[10px]">{lang.level}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
