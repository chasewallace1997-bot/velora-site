# Velora Marketing Site

Marketing microsite for **Velora Labs** — AI-native endurance training OS.
Deployed at [veloralabs.io](https://veloralabs.io).

## Pages

| Route | Description |
|-------|-------------|
| `/` | Home — hero, value props, Garmin CTA, about |
| `/product` | Product overview with feature breakdown |
| `/data` | Data usage & privacy summary (plain English) |
| `/garmin` | Garmin integration details for Developer Program reviewers |
| `/contact` | Contact form with Resend email delivery |
| `/legal/privacy` | Privacy policy |
| `/legal/terms` | Terms of service |

## Stack

- **Next.js 16** (App Router, TypeScript)
- **React 19** with server actions and `useActionState`
- **Tailwind CSS v4** (CSS-first config in `globals.css`)
- **Resend** (contact form email delivery)
- **lucide-react** (icons)

## Environment variables

Copy `.env.example` to `.env.local` and fill in:

```env
RESEND_API_KEY=re_...
```

- Get an API key at [resend.com](https://resend.com)
- Verify your sending domain (`veloralabs.io`) in the Resend dashboard
- Without `RESEND_API_KEY`, form submissions log to console and return success (safe for local dev)

## Local development

```bash
npm install
cp .env.example .env.local   # add RESEND_API_KEY (optional for dev)
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deploy to Vercel

### Initial deploy

```bash
npm i -g vercel   # if not installed
vercel            # from inside velora-site/; framework: Next.js
```

### Environment variables in Vercel

Project → Settings → Environment Variables:

| Key | Value |
|-----|-------|
| `RESEND_API_KEY` | Your Resend API key |

### Custom domain (veloralabs.io)

1. Vercel → Project → Settings → **Domains** → Add `veloralabs.io` and `www.veloralabs.io`
2. Update DNS at your registrar:

| Type | Name | Value |
|------|------|-------|
| A | `@` | `76.76.21.21` |
| CNAME | `www` | `cname.vercel-dns.com` |

Vercel provisions SSL automatically once DNS propagates (< 1 hour typically).

### Production deploy

```bash
git add .
git commit -m "feat: initial Velora marketing site"
git push origin main
```

Vercel auto-deploys on every push to `main`.

## Design tokens

Defined in `src/app/globals.css` using Tailwind v4's `@theme` block:

| CSS variable | Tailwind class | Value |
|---|---|---|
| `--color-background` | `bg-background` | `#090909` |
| `--color-surface` | `bg-surface` | `#111111` |
| `--color-surface-raised` | `bg-surface-raised` | `#1c1c1c` |
| `--color-border` | `border-border` | `#252525` |
| `--color-foreground` | `text-foreground` | `#f0f0f0` |
| `--color-muted` | `text-muted` | `#888888` |
| `--color-accent` | `bg-accent` / `text-accent` | `#6366f1` |
| `--color-accent-soft` | `text-accent-soft` | `#818cf8` |
