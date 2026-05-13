# HappyBein – Astro Site

Built with [Astro](https://astro.build) + [Tailwind CSS](https://tailwindcss.com).  
Deployed on [Cloudflare Pages](https://pages.cloudflare.com).

## Version: 1.5 · May 2026

## Quick Start

```bash
# Install dependencies
npm install

# Start dev server (http://localhost:4321)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Deploy to Cloudflare Pages

### Option A — GitHub (recommended, auto-deploy on push)
1. Push this repo to GitHub
2. Go to Cloudflare Pages → Create a project → Connect to Git
3. Select your repo
4. Set build settings:
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
   - **Node version:** `18` or higher (set in Environment Variables: `NODE_VERSION = 18`)
5. Add your custom domain `happybein.com` under Custom Domains

### Option B — Direct upload
1. Run `npm run build` locally
2. Upload the `dist/` folder to Cloudflare Pages → Direct Upload

## Project Structure

```
src/
├── components/
│   ├── Nav.astro           # Shared navigation (auto-updates from site.ts)
│   ├── Footer.astro        # Shared footer
│   └── InitiativeCard.astro # Reusable initiative card with collapsible
├── data/
│   ├── site.ts             # ← Edit version, nav links, social links here
│   └── initiatives.ts      # ← Add/edit initiatives here
├── layouts/
│   └── Base.astro          # Shared HTML shell + SEO tags
├── pages/
│   ├── index.astro         # Home
│   ├── initiatives.astro   # All initiatives
│   ├── manifesto.astro     # The HappyBein Manifesto
│   ├── roadmap.astro       # YeahVibe Roadmap
│   └── contact.astro       # Connect & Collaborate
└── styles/
    └── global.css          # Tailwind + custom component styles
public/
├── images/logo.png         # HappyBein logo (transparent PNG)
├── robots.txt              # Bot crawling rules
├── _redirects              # Cloudflare Pages URL redirects
├── _headers                # HTTP headers (cache, security)
└── llms.txt                # AI crawler metadata

```

## How to Update Version

Edit `src/data/site.ts`:
```ts
version: '1.6',
versionDate: 'June 2026',
```
That's it — version updates everywhere automatically (nav bar, footer, llms.txt).

## How to Add a New Initiative

Edit `src/data/initiatives.ts` — add a new object to the `initiatives` array.  
The card appears automatically on `/initiatives` and in the nav dropdown.
