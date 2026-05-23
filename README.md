# Mohit Pandey — Portfolio

> Professional portfolio for **Mohit Pandey** — DevOps Engineer · AI Engineer · Computer Vision Developer.

A world-class, recruiter-focused portfolio built with **Next.js 15**, **Tailwind CSS**, and **Framer Motion**. Production-ready, SEO-optimized and ready for one-click Vercel deployment.

---

## ✨ Highlights

- **Hero section** with animated terminal mockup and floating tech chips
- **Skills section** with grouped categories and animated proficiency bars
- **Projects section** with filterable category tabs (10 real projects)
- **Experience timeline** with alternating cards on desktop
- **Certifications grid** with placeholder cards for upcoming credentials
- **Contact form** wired to a Next.js Edge API route with validation
- **Scroll progress bar**, magnetic buttons, smooth scrolling, custom scrollbar
- **Responsive** mobile menu, dark theme, premium typography (Inter + Space Grotesk + JetBrains Mono)
- **SEO**: metadata, OpenGraph, Twitter card, sitemap, robots.txt

---

## 🧱 Tech Stack

| Layer        | Choice                                  |
|--------------|-----------------------------------------|
| Framework    | Next.js 15 (App Router)                 |
| Language     | TypeScript                              |
| Styling      | Tailwind CSS                            |
| Animation    | Framer Motion                           |
| Icons        | Lucide React                            |
| Fonts        | Inter, Space Grotesk, JetBrains Mono    |
| Deployment   | Vercel                                  |

---

## 📁 Folder Structure

```
mohit-portfolio/
├── public/
│   ├── favicon.svg
│   ├── resume.pdf          ← drop your real resume here
│   └── robots.txt
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   └── contact/
│   │   │       └── route.ts        ← Edge API for contact form
│   │   ├── globals.css             ← Tailwind + design tokens
│   │   ├── layout.tsx              ← Root layout + fonts + SEO
│   │   ├── page.tsx                ← Home page composition
│   │   └── sitemap.ts              ← Auto-generated sitemap
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   ├── ScrollProgress.tsx
│   │   ├── sections/
│   │   │   ├── Hero.tsx
│   │   │   ├── About.tsx
│   │   │   ├── Skills.tsx
│   │   │   ├── Projects.tsx
│   │   │   ├── Experience.tsx
│   │   │   ├── Certifications.tsx
│   │   │   └── Contact.tsx
│   │   └── ui/
│   │       ├── SectionHeading.tsx
│   │       ├── MagneticButton.tsx
│   │       ├── ProjectCard.tsx
│   │       └── AnimatedBackground.tsx
│   ├── data/                       ← all content lives here (single source of truth)
│   │   ├── site.ts
│   │   ├── skills.ts
│   │   ├── projects.ts
│   │   ├── experience.ts
│   │   └── certifications.ts
│   └── lib/
│       └── utils.ts                ← cn() helper
├── .env.example
├── .eslintrc.json
├── .gitignore
├── next.config.mjs
├── package.json
├── postcss.config.mjs
├── tailwind.config.ts
├── tsconfig.json
├── vercel.json
└── README.md
```

---

## 🚀 Run Locally

### 1. Install dependencies

```bash
npm install
```

### 2. Start the dev server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### 3. Build for production

```bash
npm run build
npm run start
```

---

## ✏️ Customize Content

All copy lives in **`src/data/`** — no need to touch components for content edits:

| File                          | What's in it                                   |
|-------------------------------|------------------------------------------------|
| `src/data/site.ts`            | Name, role, email, socials, nav links          |
| `src/data/skills.ts`          | Skill categories with proficiency levels       |
| `src/data/projects.ts`        | All projects (title, stack, highlights, links) |
| `src/data/experience.ts`      | Work history timeline                          |
| `src/data/certifications.ts`  | Certifications + stat counters                 |

**Replace your resume:** drop a `resume.pdf` into `public/`.

**Update social links:** edit `src/data/site.ts`.

---

## ☁️ Deploy to Vercel

### Option A — One-click via the Vercel dashboard

1. Push this repo to GitHub.
2. Go to [vercel.com/new](https://vercel.com/new) and import the repo.
3. Vercel auto-detects Next.js — accept the defaults.
4. (Optional) add `NEXT_PUBLIC_SITE_URL` env var.
5. Click **Deploy**.

### Option B — Vercel CLI

```bash
npm install -g vercel
vercel              # first time: links the project
vercel --prod       # ship to production
```

### Post-deploy checklist

- [ ] Update `siteConfig.url` in `src/data/site.ts` to your live domain
- [ ] Replace `public/resume.pdf` with your real resume
- [ ] Add a custom domain in Vercel → Settings → Domains
- [ ] (Optional) wire the contact form to a real email service (see below)

---

## 📬 Wiring the Contact Form to a Real Inbox

The contact form posts to `src/app/api/contact/route.ts`. By default it logs and returns success. Two easy upgrades:

**Option A — [Resend](https://resend.com/)**

```bash
npm install resend
```

```ts
// src/app/api/contact/route.ts
import { Resend } from "resend";
const resend = new Resend(process.env.RESEND_API_KEY);
await resend.emails.send({
  from: "portfolio@mohitpandey.dev",
  to: process.env.CONTACT_TO_EMAIL!,
  subject: `Portfolio: ${subject}`,
  text: `From ${name} <${email}>\n\n${message}`,
});
```

**Option B — Slack incoming webhook** — POST a formatted message to your `SLACK_WEBHOOK_URL`.

---

## 🌱 Suggested Future Improvements

- 📝 **Blog / Notes** section (`/blog`) using MDX for writeups on AI deployments
- 🎥 **Project demo videos** embedded inside project cards
- 🌗 **Light theme toggle** (the design tokens already support theming)
- 🌐 **Internationalization** (Hindi + English) via `next-intl`
- 📊 **Analytics**: Vercel Analytics + Plausible for privacy-friendly stats
- 🤖 **AI chat** trained on your resume — let recruiters ask questions live
- 🧪 **CI**: GitHub Actions for `lint`, `build`, `typecheck` on PRs
- 🖼️ **OG image generation** via `@vercel/og` for shareable previews
- 🔍 **Search** projects with `cmdk` (Command-K palette)

---

## 📜 License

MIT — feel free to fork this as a starting point for your own portfolio.

---

Built with care by **Mohit Pandey**.
