"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type Props = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "center" | "left";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  className,
}: Props) {
  return (
    <div
      className={cn(
        "mb-14 flex flex-col gap-4",
        align === "center" ? "items-center text-center" : "items-start text-left",
        className
      )}
    >
      {eyebrow && (
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="section-eyebrow"
        >
          <span className="size-1.5 rounded-full bg-primary-400" />
          {eyebrow}
        </motion.span>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.05 }}
        className="font-display text-balance text-4xl font-bold tracking-tight sm:text-5xl"
      >
        <span className="text-gradient">{title}</span>
      </motion.h2>
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className={cn(
            "text-balance text-base text-muted sm:text-lg",
            align === "center" ? "max-w-2xl" : "max-w-3xl"
          )}
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}
