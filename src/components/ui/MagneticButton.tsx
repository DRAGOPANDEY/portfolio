"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useRef, type ReactNode, type MouseEvent } from "react";
import { cn } from "@/lib/utils";

type Props = {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
  variant?: "primary" | "secondary";
  download?: boolean | string;
  target?: string;
  rel?: string;
  type?: "button" | "submit";
};

export function MagneticButton({
  children,
  href,
  onClick,
  className,
  variant = "primary",
  download,
  target,
  rel,
  type = "button",
}: Props) {
  const ref = useRef<HTMLElement | null>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 220, damping: 18 });
  const sy = useSpring(y, { stiffness: 220, damping: 18 });

  const handleMove = (e: MouseEvent<HTMLElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const mx = e.clientX - rect.left - rect.width / 2;
    const my = e.clientY - rect.top - rect.height / 2;
    x.set(mx * 0.25);
    y.set(my * 0.25);
  };

  const reset = () => {
    x.set(0);
    y.set(0);
  };

  const base = variant === "primary" ? "btn-primary" : "btn-secondary";

  if (href) {
    return (
      <motion.a
        ref={ref as React.MutableRefObject<HTMLAnchorElement | null>}
        href={href}
        download={download}
        target={target}
        rel={rel}
        onMouseMove={handleMove}
        onMouseLeave={reset}
        style={{ x: sx, y: sy }}
        className={cn(base, className)}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      ref={ref as React.MutableRefObject<HTMLButtonElement | null>}
      type={type}
      onClick={onClick}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      style={{ x: sx, y: sy }}
      className={cn(base, className)}
    >
      {children}
    </motion.button>
  );
}
