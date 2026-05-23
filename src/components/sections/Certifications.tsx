"use client";

import { motion } from "framer-motion";
import { Award, Code2, type LucideIcon } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { certifications } from "@/data/certifications";

const iconMap: Record<string, LucideIcon> = {
  award: Award,
  code: Code2,
};

export function Certifications() {
  return (
    <section id="certifications" className="relative scroll-mt-20 py-24 sm:py-32">
      <div className="container-section">
        <SectionHeading
          eyebrow="Certifications"
          title="Credentials earned."
          description="Professional certifications backing my hands-on work in Python, data science and full-stack development."
        />

        <div className="mx-auto grid max-w-3xl gap-4 sm:grid-cols-2">
          {certifications.map((c, i) => {
            const Icon = iconMap[c.icon] ?? Award;
            return (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="card-elevated group flex flex-col gap-3 p-6"
              >
                <div className="inline-grid size-10 place-items-center rounded-xl bg-gradient-to-br from-primary-600/30 to-cyan-500/20 text-primary-300 transition-transform group-hover:scale-110">
                  <Icon className="size-5" />
                </div>
                <h3 className="font-display text-base font-semibold leading-tight">
                  {c.title}
                </h3>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-muted">{c.issuer}</span>
                  <span className="chip text-[10px]">{c.year}</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
