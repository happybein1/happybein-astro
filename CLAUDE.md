# HappyBein — Project Instructions

Use this as the system prompt / project context for any Claude chat dedicated to HappyBein work (website development, content, strategy, etc.).

---

## Who We Are

HappyBein is a purpose-driven foundation based in Eindhoven, Netherlands (work began 2021; stichting officially founded April 2022). Mission: **simplify societal complexity** — giving individuals and founders better tools to make sense of the world and act with clarity.

The founder works solo with a lean budget. Every solution must prioritise **simplicity, zero/low recurring cost, and maintainability by one person**.

Privacy-first: the founder does not appear publicly. All content is posted under the HappyBein project identity, not a person.

---

## Tech Stack

| Layer | Tool |
|---|---|
| Framework | Astro 4 + Tailwind CSS |
| Hosting | Cloudflare Pages (auto-deploy from GitHub) |
| Serverless logic | Cloudflare Workers (free tier) |
| Analytics | GA4 — Property ID: G-TJFL5YQ705 (consent-gated, see Analytics) + Cloudflare Web Analytics |
| Email | Brevo (free tier — GDPR-native, EU company) |
| No backend server — use Cloudflare Workers for any API calls or serverless logic |

---

## Analytics

- GA4 (G-TJFL5YQ705) loads **only after cookie consent**, via the shared yv-consent banner (`yv_consent` cookie; source `_shared/consent.js`, inlined in `src/layouts/Base.astro`)
- Cloudflare Web Analytics runs on all zones (cookieless, no consent needed)
- **Never add a bare gtag script** — always go through the consent banner

---

## Brand

| Element | Value |
|---|---|
| Teal (primary) | `#2ABFBF` (dark `#1A9A9A`, light `#4DD0D0`) |
| Green | `#4CAF50` |
| Blue | `#29ABE2` |
| Text | ink `#1A3333`, body `#2C4A4A`, muted `#5A7A7A` |
| Theme | Light — backgrounds `#F4FAFA` / `#E8F7F7` |
| Voice | Clear, direct, purposeful — no hype, no jargon |
| Signed as | "The HappyBein team" — never a personal name |

Source of truth for colours: `tailwind.config.mjs`.

---

## Sites & Structure (October 2026)

Idea: **"Structured understanding unlocks solutions"** — tagline: **"From understanding to solutions"**

**Understanding** — under happybein.com

| Site | URL | Repo | Covers |
|---|---|---|---|
| HappyBein | happybein.com | `happybein-astro` | Foundation home, manifesto, initiatives, journal |
| YeahCore | yeahcore.happybein.com (formerly core.yeahvibe.com) | `yeahvibe-astro` | Human needs, decision foundation, the 5 Pillars framework, practical guides |
| YeahSight | yeahsight.happybein.com (yeahsight.com redirects here) | `yeahsight` | How society works, forces shaping the future, sharing fairly, Vision & Roadmap |

**Solutions**

| Site | URL | Repo | Covers |
|---|---|---|---|
| YeahVibe tools | yeahvibe.com | `dailyapp` | Tools hub: IntentFlow, Reflect, ShopTools, SpeakNote, QuickTimer, World Clock, games… |

---

## Initiatives

| Initiative | Status | Description |
|---|---|---|
| **YeahVibe** | 🟢 Active | Tools hub at yeahvibe.com — where understanding turns into solutions |
| **YeahCore** | 🟢 Active | Decision foundation built on the 5 Pillars of Leverage |
| **YeahSight** | 🟢 Active | How society works & forces shaping the future |
| **YeahDev** | 🟡 Maintain | Internal dev knowledge base — **not public content** |
| **SpeakNote** | 🟡 Maintain | Local voice transcription |
| **YeahVibe Workout** | ⏸ Paused | Micro-exercise randomiser — no active dev |
| **YeahVibe GameTrack** | ⏸ Paused | Score tracker — no active dev |

YeahVibe is the flagship. Prioritise it above all others.

---

## Current Priorities (mid-2026)

1. **Email capture on yeahvibe.com** (repo: `dailyapp`) — Brevo integration via Cloudflare Worker. happybein.com capture is live; YeahVibe needs its own, with more specific framing (e.g. "Get a new YeahVibe insight in your inbox")
2. **Short-form video pipeline** — YeahVibe insights → Kokoro TTS (local, already installed) → Pexels stock clips → CapCut → 9:16 export → YouTube Shorts + TikTok + embedded on yeahvibe.com. Target: **30s per video** (20–40s range; never past 60s for short-form)
3. **YeahVibe as the core product to grow** — all roads lead back to it

---

## Email Setup (Brevo)

- Brevo is connected and working on happybein.com
- Two segments: **HappyBein — Interested Individuals** and **HappyBein — Life Coaches**
- These lists are kept separate — never merged
- Cloudflare Worker handles the API call so the Brevo API key is never exposed in the frontend
- Next task: replicate the email capture on yeahvibe.com (in the `dailyapp` repo)

---

## Video Production Stack

| Tool | Role | Cost |
|---|---|---|
| Kokoro TTS (local) | Voiceover from script — runs on laptop, no API calls | Free |
| Pexels / Pixabay | Free stock video clips | Free |
| CapCut | Assembles clips + audio, auto-captions, exports 9:16 | Free |

**Script formula (targeting 30s ≈ 60 words):**
```
[0–5 sec]   HOOK — surprising claim or question
[5–10 sec]  PROBLEM — the tension the insight addresses
[10–25 sec] INSIGHT — the core idea, in plain language
[25–30 sec] CTA — by topic: "Find more at yeahsight.com" (society/future) or "Try it at yeahvibe.com" (tools)
```

---

## Constraints

- No paid tools unless clearly justified
- No paid ads or growth spend
- Every feature must be maintainable solo
- Prefer static/edge solutions (Cloudflare Workers, Astro) over server infrastructure
- Keep things lean — the 20% that delivers 80% of the value is always the right call

---

## Working in This Repo (happybein-astro)

- **Four languages:** English at the root (`src/pages/*.astro`), plus `nl/`, `fr/`, `es/` folders. A new main page needs a copy in each language folder; UI strings live in `src/i18n/`. (`privacy` and `journal` are English-only.)
- **Journal posts:** Markdown files in `src/content/journal/`
- **`functions/`:** Cloudflare Pages Functions for the Decap CMS GitHub login at `/admin` (`/api/auth`, `/api/callback`) — **do not delete**

---

## Useful Links (for reference in dev work)

- Live site: https://happybein.com
- YeahCore: https://yeahcore.happybein.com
- YeahSight: https://yeahsight.happybein.com
- YeahVibe: https://yeahvibe.com
- GA4 dashboard: https://analytics.google.com (property G-TJFL5YQ705)
- Brevo: https://app.brevo.com
- Cloudflare dashboard: https://dash.cloudflare.com

---

*Last updated October 2026 — based on v2.0 of the HappyBein Strategy & Action Plan (May 2026), updated for the October 2026 site structure*
