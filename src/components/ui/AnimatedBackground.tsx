"use client";

import { motion } from "framer-motion";

export function AnimatedBackground() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
    >
      <div className="absolute inset-0 grid-bg mask-fade-b opacity-60" />
      <motion.div
        className="absolute -top-32 left-1/4 size-[480px] rounded-full bg-primary-600/30 blur-[120px]"
        animate={{ x: [0, 40, -20, 0], y: [0, 30, -20, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-40 right-0 size-[420px] rounded-full bg-cyan-500/20 blur-[120px]"
        animate={{ x: [0, -50, 30, 0], y: [0, 40, -10, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 left-0 size-[380px] rounded-full bg-fuchsia-500/15 blur-[120px]"
        animate={{ x: [0, 60, 0], y: [0, -30, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}
