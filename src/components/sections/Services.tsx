"use client";

import { motion } from "framer-motion";
import { Cpu, Server, Shield, Zap, ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { services } from "@/data/services";

const iconMap = {
  cpu: Cpu,
  server: Server,
  shield: Shield,
  zap: Zap,
} as const;

export function Services() {
  return (
    <section id="services" className="relative scroll-mt-20 py-24 sm:py-32">
      <div className="container-section">
        <SectionHeading
          eyebrow="What I Do"
          title="Services I offer."
          description="Hire me for the full lifecycle — from training a custom model to deploying it on production GPU infrastructure with SSL, backups and monitoring."
        />

        <div className="grid gap-6 sm:grid-cols-2">
          {services.map((s, i) => {
            const Icon = iconMap[s.icon as keyof typeof iconMap];
            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="card-elevated group relative overflow-hidden p-7"
              >
                <div className="absolute -right-12 -top-12 size-40 rounded-full bg-primary-500/10 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />

                <div className="relative">
                  <div className="mb-5 inline-grid size-12 place-items-center rounded-xl bg-gradient-to-br from-primary-600/30 to-cyan-500/20 text-primary-300 transition-transform duration-300 group-hover:scale-110">
                    <Icon className="size-5" />
                  </div>

                  <h3 className="mb-2 font-display text-xl font-semibold">
                    {s.title}
                  </h3>
                  <p className="mb-5 text-sm leading-relaxed text-muted">
                    {s.description}
                  </p>

                  <ul className="space-y-2 border-t border-white/5 pt-4 text-sm">
                    {s.deliverables.map((d) => (
                      <li
                        key={d}
                        className="flex items-start gap-2.5 text-muted"
                      >
                        <ArrowRight className="mt-0.5 size-3.5 shrink-0 text-primary-400" />
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto mt-12 max-w-2xl text-center"
        >
          <p className="text-sm text-muted">
            Looking for something specific? I take on{" "}
            <span className="text-white">short-term consulting</span>,{" "}
            <span className="text-white">fixed-scope projects</span> and{" "}
            <span className="text-white">long-term retainers</span> — based in
            India, working with clients globally.
          </p>
          <a href="#contact" className="btn-primary mt-6">
            Start a conversation
            <ArrowRight className="size-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
