"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Mail } from "lucide-react";
import { siteConfig } from "@/data/site";

export function MobileCTA() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const past = window.scrollY > window.innerHeight * 0.5;
      const nearBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 400;
      setShow(past && !nearBottom);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ type: "spring", stiffness: 260, damping: 24 }}
          className="fixed inset-x-0 bottom-4 z-40 mx-auto flex max-w-md items-center gap-2 px-4 md:hidden"
        >
          <a
            href={`mailto:${siteConfig.email}`}
            aria-label="Email"
            className="grid size-12 shrink-0 place-items-center rounded-full border border-white/10 bg-elevated/95 text-white shadow-lg backdrop-blur-xl"
          >
            <Mail className="size-5" />
          </a>
          <a
            href="#contact"
            className="btn-primary flex-1 justify-center shadow-2xl"
          >
            Hire me
            <ArrowUpRight className="size-4" />
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
