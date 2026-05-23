# 🚀 Deploy Mohit Pandey's Portfolio

This portfolio is built for **Vercel** — one-click deploy, free tier, custom domain, SSL out of the box.

---

## ✅ Pre-deploy checklist

Before pushing, verify these one-time customizations:

- [ ] `public/resume.pdf` — replace the placeholder file with your real resume PDF
- [ ] `src/data/site.ts` — confirm `email`, `github`, `linkedin`, `location` are right
- [ ] `src/data/site.ts` — set `url` to your actual deployed URL (e.g. `https://mohitpandey.dev`)
- [ ] Run locally once: `npm run dev` and walk through every section in a browser

---

## ① Push to GitHub (5 min)

If you don't have a repo yet:

```bash
cd ~/mohit-portfolio
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
```

Create a new repo on GitHub (use the GitHub UI — call it `portfolio` or `mohit-pandey-portfolio`), then:

```bash
git remote add origin https://github.com/DRAGOPANDEY/portfolio.git
git push -u origin main
```

> If you get an authentication prompt, use a **GitHub Personal Access Token** instead of your password (Settings → Developer settings → Personal access tokens).

---

## ② Deploy to Vercel (3 min)

### Option A — Vercel dashboard (recommended)

1. Sign in at **[vercel.com](https://vercel.com)** with your GitHub account
2. Click **"Add New… → Project"**
3. Find your `portfolio` repo and click **"Import"**
4. Vercel auto-detects Next.js — leave all defaults
5. Click **"Deploy"**
6. Wait ~1 minute. You'll get a live URL like `mohit-pandey-portfolio.vercel.app`

### Option B — Vercel CLI

```bash
npm install -g vercel
cd ~/mohit-portfolio
vercel          # first time: links the project, asks a few questions
vercel --prod   # ship to production
```

---

## ③ Add a custom domain (optional but recommended)

A `.vercel.app` URL works, but `mohitpandey.dev` looks far more professional.

### Buy a domain

- **Namecheap** — ~$10/year for `.dev`, `.com`, `.tech`
- **Porkbun** — similar pricing, simpler UI
- **GoDaddy** — easiest in India

Suggestions for your name:
- `mohitpandey.dev` ⭐ (best, shows you're a dev)
- `mohitpandey.tech`
- `mohit-pandey.com`
- `pandeydev.com`

### Connect it to Vercel

1. In Vercel: **Project → Settings → Domains → Add**
2. Enter your domain, click **Add**
3. Vercel shows DNS records — copy them
4. Back at your registrar (Namecheap/Porkbun): paste those DNS records
5. Wait 5–60 minutes for DNS to propagate
6. ✅ HTTPS is automatically configured by Vercel

### Update your code

In `src/data/site.ts`, update:
```ts
url: "https://yourdomain.dev",
```

Commit and push — Vercel redeploys automatically.

---

## ④ Wire up the contact form to your inbox (optional, 5 min)

Out of the box, contact submissions log to Vercel function logs. To actually receive emails:

1. Sign up free at **[resend.com](https://resend.com)** (no credit card)
2. Create an API key — copy it
3. In Vercel: **Project → Settings → Environment Variables**, add:
   ```
   RESEND_API_KEY      = re_xxxxxxxxxxxxxxxxx
   CONTACT_TO_EMAIL    = mohitpy6371@gmail.com
   RESEND_FROM         = Portfolio <onboarding@resend.dev>
   ```
4. Trigger a redeploy: **Deployments → Latest → ⋯ → Redeploy**
5. Test by sending yourself a message via your live site

> 💡 The free tier of Resend covers **3,000 emails/month** — more than enough for a portfolio.

---

## ⑤ Share your portfolio professionally

Once live, your link looks great everywhere thanks to the auto-generated OG image. Share it on:

- 🔗 **LinkedIn profile** — Featured section + "About" section + as a website link
- 🐦 **Twitter/X bio**
- 📩 **Email signature** — every email becomes a portfolio CTA
- 📄 **Resume** — replace generic links with `mohitpandey.dev`
- 💼 **Job applications** — paste in the "Portfolio URL" field
- 💬 **WhatsApp groups for jobs** — preview card renders beautifully

---

## 🔁 Pushing updates after launch

Every `git push` to `main` automatically triggers a new Vercel deployment:

```bash
# Edit src/data/projects.ts to add a new project
git add .
git commit -m "Add new project: <title>"
git push
```

Vercel builds and deploys in ~60 seconds. Zero downtime.

---

## 📊 Monitor your portfolio

Once deployed, Vercel gives you free:

- **Analytics** — visitors per day, top countries, top pages
  (already wired via `@vercel/analytics` — just enable it in dashboard)
- **Speed Insights** — Core Web Vitals score
  (already wired via `@vercel/speed-insights`)
- **Function logs** — every contact-form submission shows up here

Enable both at: **Project → Analytics** and **Project → Speed Insights**.

---

## 🛟 Common issues

**Build fails on Vercel but works locally**
→ Run `npm run build` locally. Same error? Fix it first. If only Vercel fails, check Node version in **Settings → General → Node.js Version** (should be 20.x).

**Custom domain shows "DNS_PROBE_FINISHED_NXDOMAIN"**
→ DNS hasn't propagated yet. Wait 30 minutes and try in incognito.

**Contact form silently does nothing on production**
→ Add the Resend env vars (Step ④). Without them, submissions only log.

**OG image doesn't render in WhatsApp/LinkedIn preview**
→ Use the [LinkedIn Post Inspector](https://www.linkedin.com/post-inspector/) or [Open Graph debugger](https://www.opengraph.xyz/) — paste your URL, click "Re-scrape". Cache busts after that.

---

## 💸 Cost

| Service | Cost |
|---|---|
| Vercel hosting (Hobby) | **Free** |
| Vercel Analytics | **Free** (2,500 events/month) |
| Domain (`.dev` on Namecheap) | ~$12/year |
| Resend (email forwarding) | **Free** (3,000/month) |
| Total | **~$1/month** for a fully pro portfolio |

You're set.
