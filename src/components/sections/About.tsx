"use client";

import { motion } from "framer-motion";
import { Cpu, GitBranch, Globe, Shield } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { stats } from "@/data/certifications";
import { siteConfig } from "@/data/site";

const pillars = [
  {
    icon: GitBranch,
    title: "DevOps & Automation",
    description:
      "Dockerized stacks, Nginx + SSL, scripted backups and CI-grade deployments — clone to prod in minutes.",
  },
  {
    icon: Cpu,
    title: "Edge Systems",
    description:
      "Raspberry Pi, Jetson Nano and Intel NUC fleets — provisioned, monitored and remotely managed.",
  },
  {
    icon: Shield,
    title: "Air-Gap & Secure",
    description:
      "Offline, air-gapped and high-security deployments at Maruti, BARC and defence-sector clients.",
  },
  {
    icon: Globe,
    title: "Remote-First",
    description:
      "Async-friendly, English-fluent and comfortable with global client workflows and time zones.",
  },
];

export function About() {
  return (
    <section id="about" className="relative scroll-mt-20 py-20 sm:py-28 lg:py-32">
      <div className="container-section">
        <SectionHeading
          eyebrow="About"
          title="DevOps for the systems that can't go down."
          description="I'm a DevOps engineer at Intozi Tech, building production infrastructure that runs at Maruti Suzuki, BARC and defence-sector clients. I own the full stack — from Jetson Nano cloning pipelines to air-gapped enterprise rollouts and 24/7 on-call operations."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="card-elevated group p-6"
            >
              <div className="mb-4 inline-grid size-11 place-items-center rounded-xl bg-gradient-to-br from-primary-600/30 to-cyan-500/20 text-primary-300 transition-transform group-hover:scale-110">
                <p.icon className="size-5" />
              </div>
              <h3 className="mb-1.5 font-display text-lg font-semibold">
                {p.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted">
                {p.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-12 grid grid-cols-2 gap-4 rounded-2xl border border-white/5 bg-elevated/50 p-6 backdrop-blur-sm sm:grid-cols-4"
        >
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="font-display text-3xl font-bold text-gradient-primary sm:text-4xl">
                {s.value}
              </div>
              <div className="mt-1 text-xs uppercase tracking-wider text-muted">
                {s.label}
              </div>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-10"
        >
          <p className="mb-4 text-center text-xs font-medium uppercase tracking-[0.2em] text-muted">
            Production deployments at
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {siteConfig.clients.map((c) => (
              <span
                key={c}
                className="rounded-full border border-white/10 bg-elevated/60 px-4 py-2 text-sm font-semibold text-white/90 backdrop-blur-sm"
              >
                {c}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
