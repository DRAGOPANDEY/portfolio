import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";
import { siteConfig } from "@/data/site";

export function Footer() {
  return (
    <footer className="relative border-t border-white/5 bg-background/60">
      <div className="container-section py-14">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <a
              href="#hero"
              className="inline-flex items-center gap-2.5 font-display text-lg font-bold"
            >
              <span className="grid size-8 place-items-center rounded-lg bg-gradient-to-br from-primary-500 to-cyan-500 font-mono text-sm shadow-glow">
                M
              </span>
              Mohit Pandey
            </a>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted">
              DevOps and AI engineer building production-grade computer vision
              systems. Available worldwide for freelance and full-time work.
            </p>
            <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-300">
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
              </span>
              {siteConfig.availability}
            </div>
          </div>

          <div>
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-wider text-white">
              Sitemap
            </h4>
            <ul className="space-y-2.5 text-sm">
              {siteConfig.navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-muted transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-wider text-white">
              Get in touch
            </h4>
            <a
              href={`mailto:${siteConfig.email}`}
              className="group inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-white"
            >
              {siteConfig.email}
              <ArrowUpRight className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <div className="mt-5 flex items-center gap-2">
              <FooterIcon
                href={siteConfig.socials.github}
                label="GitHub"
                icon={<Github className="size-4" />}
              />
              <FooterIcon
                href={siteConfig.socials.linkedin}
                label="LinkedIn"
                icon={<Linkedin className="size-4" />}
              />
              <FooterIcon
                href={`mailto:${siteConfig.email}`}
                label="Email"
                icon={<Mail className="size-4" />}
              />
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/5 pt-6 sm:flex-row">
          <p className="text-xs text-muted">
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <p className="text-xs text-muted">
            Built with Next.js, Tailwind & Framer Motion · Deployed on Vercel
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterIcon({
  href,
  label,
  icon,
}: {
  href: string;
  label: string;
  icon: React.ReactNode;
}) {
  const external = !href.startsWith("mailto:");
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer noopener" : undefined}
      aria-label={label}
      className="grid size-9 place-items-center rounded-lg border border-white/10 bg-white/5 text-muted transition-all hover:scale-110 hover:border-primary-400/40 hover:text-white"
    >
      {icon}
    </a>
  );
}
