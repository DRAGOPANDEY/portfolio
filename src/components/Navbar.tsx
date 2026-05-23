"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/data/site";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-white/5 bg-background/80 backdrop-blur-xl"
          : "bg-transparent"
      )}
    >
      <nav className="container-section flex h-16 items-center justify-between">
        <a
          href="#hero"
          className="group flex items-center gap-2.5 font-display text-base font-bold"
        >
          <span className="grid size-8 place-items-center rounded-lg bg-gradient-to-br from-primary-500 to-cyan-500 font-mono text-sm shadow-glow transition-transform group-hover:scale-110">
            M
          </span>
          <span className="hidden sm:inline">
            Mohit Pandey
          </span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {siteConfig.navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="rounded-full px-3.5 py-2 text-sm text-muted transition-colors hover:bg-white/5 hover:text-white"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a href="#contact" className="hidden btn-primary md:inline-flex">
            Hire me
            <ArrowUpRight className="size-4" />
          </a>
          <button
            onClick={() => setOpen((s) => !s)}
            className="grid size-10 place-items-center rounded-lg border border-white/10 bg-white/5 md:hidden"
            aria-label="Toggle menu"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-t border-white/5 bg-background/95 backdrop-blur-xl md:hidden"
          >
            <ul className="container-section flex flex-col gap-1 py-4">
              {siteConfig.navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-lg px-4 py-3 text-sm text-muted hover:bg-white/5 hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="btn-primary mt-2 w-full"
                >
                  Hire me
                  <ArrowUpRight className="size-4" />
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
