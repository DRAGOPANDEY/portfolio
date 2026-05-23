"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Loader2, Mail, MapPin, Send } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { siteConfig } from "@/data/site";

type Status = "idle" | "loading" | "success" | "error";

export function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string>("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setError("");

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error || "Failed to send. Please try again.");
      }
      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  return (
    <section id="contact" className="relative scroll-mt-20 py-20 sm:py-28 lg:py-32">
      <div className="container-section">
        <SectionHeading
          eyebrow="Contact"
          title="Let's work together."
          description="Hiring for a role, planning a project, or just want to talk edge AI? Send a message — I reply within 24 hours, Monday to Friday."
        />

        <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-[1fr_1.2fr]">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="card-elevated flex flex-col gap-6 p-6 sm:p-8"
          >
            <div>
              <h3 className="mb-2 font-display text-2xl font-semibold">
                Get in touch
              </h3>
              <p className="text-sm leading-relaxed text-muted">
                Open to full-time roles, freelance projects and consulting
                engagements. Based in India, working with clients globally.
              </p>
            </div>

            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <span className="grid size-10 place-items-center rounded-xl bg-primary-500/10 text-primary-300">
                  <Mail className="size-4" />
                </span>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-sm transition-colors hover:text-primary-300"
                >
                  {siteConfig.email}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <span className="grid size-10 place-items-center rounded-xl bg-primary-500/10 text-primary-300">
                  <MapPin className="size-4" />
                </span>
                <span className="text-sm text-muted">
                  {siteConfig.location} · Open to remote
                </span>
              </li>
              <li className="flex items-center gap-3">
                <span className="grid size-10 place-items-center rounded-xl bg-primary-500/10 text-primary-300">
                  <Linkedin className="size-4" />
                </span>
                <a
                  href={siteConfig.socials.linkedin}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="text-sm transition-colors hover:text-primary-300"
                >
                  LinkedIn
                </a>
              </li>
              <li className="flex items-center gap-3">
                <span className="grid size-10 place-items-center rounded-xl bg-primary-500/10 text-primary-300">
                  <Github className="size-4" />
                </span>
                <a
                  href={siteConfig.socials.github}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="text-sm transition-colors hover:text-primary-300"
                >
                  GitHub
                </a>
              </li>
            </ul>

            <div className="rounded-xl border border-emerald-500/20 bg-emerald-500/5 p-4 text-xs text-emerald-200">
              <div className="mb-1 flex items-center gap-2 font-semibold">
                <span className="relative flex size-2">
                  <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
                </span>
                Available for new opportunities
              </div>
              <p className="text-emerald-200/70">
                Open to DevOps, Edge Systems and Infrastructure roles —
                full-time or freelance.
              </p>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            onSubmit={handleSubmit}
            className="card-elevated flex flex-col gap-4 p-6 sm:p-8"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Name" name="name" placeholder="Jane Doe" required />
              <Field
                label="Email"
                name="email"
                type="email"
                placeholder="jane@company.com"
                required
              />
            </div>
            <Field
              label="Subject"
              name="subject"
              placeholder="Role at Acme Inc."
              required
            />
            {/* Honeypot — hidden from humans, bots fill it */}
            <input
              type="text"
              name="website"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
              className="absolute -left-[9999px] size-0 opacity-0"
            />
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="message"
                className="text-xs font-medium uppercase tracking-wider text-muted"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                placeholder="Tell me about the role, project or idea..."
                className="rounded-xl border border-white/10 bg-background/60 px-4 py-3 text-sm placeholder:text-muted/60 focus:border-primary-400/60 focus:outline-none focus:ring-2 focus:ring-primary-500/30"
              />
            </div>

            <button
              type="submit"
              disabled={status === "loading"}
              className="btn-primary mt-2 w-full disabled:cursor-not-allowed disabled:opacity-60"
            >
              {status === "loading" ? (
                <>
                  <Loader2 className="size-4 animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  Send message
                  <Send className="size-4" />
                </>
              )}
            </button>

            {status === "success" && (
              <p className="rounded-lg border border-emerald-500/30 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-200">
                Thanks — your message was sent. I'll get back to you soon.
              </p>
            )}
            {status === "error" && (
              <p className="rounded-lg border border-rose-500/30 bg-rose-500/10 px-4 py-3 text-sm text-rose-200">
                {error}
              </p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  required,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label
        htmlFor={name}
        className="text-xs font-medium uppercase tracking-wider text-muted"
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="rounded-xl border border-white/10 bg-background/60 px-4 py-3 text-sm placeholder:text-muted/60 focus:border-primary-400/60 focus:outline-none focus:ring-2 focus:ring-primary-500/30"
      />
    </div>
  );
}
