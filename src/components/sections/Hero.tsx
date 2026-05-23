"use client";

import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  MapPin,
} from "lucide-react";
import { siteConfig } from "@/data/site";
import { AnimatedBackground } from "@/components/ui/AnimatedBackground";
import { MagneticButton } from "@/components/ui/MagneticButton";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden pt-24"
    >
      <AnimatedBackground />

      <div className="container-section grid items-center gap-16 lg:grid-cols-[1.3fr_1fr]">
        <div className="flex flex-col gap-7">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-wrap items-center gap-2"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-300">
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
              </span>
              {siteConfig.availability}
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-muted">
              <MapPin className="size-3" />
              {siteConfig.location}
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="font-display text-5xl font-extrabold leading-[1.05] tracking-tight text-balance sm:text-6xl lg:text-7xl"
          >
            <span className="text-white">Mohit Pandey</span>
            <br />
            <span className="text-gradient">
              I ship infrastructure to production.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="max-w-2xl text-balance text-lg leading-relaxed text-muted sm:text-xl"
          >
            DevOps engineer specializing in edge systems, air-gap deployments
            and infrastructure automation. Production rollouts at Maruti, BARC
            and defence-sector clients — based in Delhi NCR, working
            worldwide.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="flex flex-wrap items-center gap-3"
          >
            <MagneticButton href="#contact">
              Hire me
              <ArrowUpRight className="size-4" />
            </MagneticButton>
            <MagneticButton href="#projects" variant="secondary">
              View my work
              <ArrowDown className="size-4 -rotate-45" />
            </MagneticButton>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex items-center gap-3 border-t border-white/5 pt-6"
          >
            <span className="text-xs uppercase tracking-wider text-muted">
              Connect
            </span>
            <div className="flex items-center gap-2">
              <SocialLink href={siteConfig.socials.github} label="GitHub">
                <Github className="size-4" />
              </SocialLink>
              <SocialLink href={siteConfig.socials.linkedin} label="LinkedIn">
                <Linkedin className="size-4" />
              </SocialLink>
              <SocialLink href={`mailto:${siteConfig.email}`} label="Email">
                <Mail className="size-4" />
              </SocialLink>
            </div>
            <span className="ml-auto hidden font-mono text-xs text-muted sm:inline">
              {siteConfig.timezone}
            </span>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="relative mx-auto hidden aspect-square w-full max-w-md lg:block"
        >
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary-600/20 via-fuchsia-500/10 to-cyan-500/20 blur-2xl" />
          <FloatingTerminal />
          <FloatingChip label="Docker" className="top-4 -left-4" />
          <FloatingChip label="Jetson Nano" className="bottom-8 -right-2" />
          <FloatingChip label="iSCSI" className="top-1/2 -right-6" />
          <FloatingChip label="Nginx" className="bottom-2 left-6" />
        </motion.div>
      </div>

      <a
        href="#about"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-muted transition-colors hover:text-white"
        aria-label="Scroll down"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown className="size-5" />
        </motion.div>
      </a>
    </section>
  );
}

function SocialLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target={href.startsWith("mailto:") ? undefined : "_blank"}
      rel="noreferrer noopener"
      aria-label={label}
      className="grid size-9 place-items-center rounded-lg border border-white/10 bg-white/5 text-muted transition-all hover:border-primary-400/40 hover:text-white"
    >
      {children}
    </a>
  );
}

function FloatingTerminal() {
  return (
    <motion.div
      animate={{ y: [0, -8, 0] }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      className="relative size-full rounded-2xl border border-white/10 bg-background/90 p-5 font-mono text-xs shadow-2xl backdrop-blur-xl"
    >
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center gap-1.5">
          <span className="size-2.5 rounded-full bg-red-500/80" />
          <span className="size-2.5 rounded-full bg-yellow-500/80" />
          <span className="size-2.5 rounded-full bg-green-500/80" />
        </div>
        <span className="text-[10px] text-muted">~/ai-deploy</span>
      </div>
      <div className="space-y-1.5">
        <p>
          <span className="text-primary-400">$</span>{" "}
          <span className="text-white">./provision-edge.sh jetson-07</span>
        </p>
        <p className="text-cyan-400">[info] applying golden image…</p>
        <p className="text-emerald-400">✓ image cloned (4m 12s)</p>
        <p className="text-emerald-400">✓ network + reverse-ssh up</p>
        <p className="text-emerald-400">✓ services healthy</p>
        <p className="pt-2">
          <span className="text-primary-400">$</span>{" "}
          <span className="text-white">deploy --site barc --air-gap</span>
        </p>
        <p className="text-cyan-400">[info] offline bundle: 1.4 GB</p>
        <p className="text-emerald-400">✓ nginx + ssl provisioned</p>
        <p className="text-emerald-400">✓ postgres replica synced</p>
        <p className="pt-2">
          <span className="text-primary-400">$</span>{" "}
          <span className="animate-pulse">▌</span>
        </p>
      </div>
    </motion.div>
  );
}

function FloatingChip({
  label,
  className,
}: {
  label: string;
  className?: string;
}) {
  return (
    <motion.div
      animate={{ y: [0, -6, 0] }}
      transition={{
        duration: 4 + Math.random() * 2,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className={`absolute rounded-full border border-white/10 bg-elevated/90 px-3 py-1.5 text-xs font-medium shadow-lg backdrop-blur-md ${className}`}
    >
      {label}
    </motion.div>
  );
}
