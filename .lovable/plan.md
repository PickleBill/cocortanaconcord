

# V2 Polish — Mobile Video Fix + Partner Filtering + New Partner

## Where We Are

- **V2a** — Done (branding, cleanup, favicon, 8 courts)
- **V2b + V2c** — Done (pull-quote, Roast Coach video, camera layout, pilot timeline, revenue blurbs, mailto CTAs)
- **V2d** — Next after this. You do NOT need to do anything yet. The fork/remix happens after V2d.

This prompt handles three things you flagged: mobile video autoplay, partner page filtering, and adding Gaby (G5quared).

---

## What Gets Built

### 1. Mobile Video Autoplay Fix (`src/pages/Landing.tsx`)

Mobile Safari and Chrome block autoplay of videos unless they're muted AND inline. The videos already have `muted` and `playsInline`, but some mobile browsers still won't autoplay large videos. Fix:

- Add explicit `autoPlay` attribute to the display demo video (it may be missing it)
- Add `poster` attributes using a simple gradient placeholder so cards don't render blank on mobile
- For the case study videos and "See It In Action" section, ensure all `<video>` tags have: `autoPlay`, `muted`, `playsInline`, `loop`, `preload="metadata"`
- Add an `onLoadedData` play trigger as a fallback: `onLoadedData={(e) => e.currentTarget.play()}` — this catches cases where autoplay is blocked

This applies to all 5 video embeds on the landing page.

### 2. Partner Page — Venue vs Ecosystem Filtering (`src/pages/Partners.tsx`)

Add tab-based filtering at the top of the partner grid:

- **All** — shows everything (default)
- **Venue Partners** — filters to `category === "Venue"`
- **Ecosystem Partners** — filters to everything that is NOT a Venue

Uses the existing Tabs component from `src/components/ui/tabs.tsx`. Simple state filter, no new data structures needed.

### 3. New Partner: G5quared / Gaby (`src/data/partners.ts`)

Add a new category: `"Marketing"` — Gaby is a social media ads and business generation expert, not just an influencer. He's a performance marketer.

New partner entry:
- **Name:** G5quared (Gaby)
- **Category:** Marketing (new)
- **Secondary categories:** Influencer
- **Status:** Live
- **URL:** https://www.instagram.com/g5quared
- **Description:** Social media advertising and business generation expert — Facebook ads, content strategy, and growth marketing for venues and brands.
- **Connection:** Marketing partner driving paid acquisition, social ad campaigns, and venue business generation across the Courtana network.
- **Icon:** `Megaphone` (from lucide-react, already imported in other files)

Also update `PartnerCard.tsx` to add a color mapping for "Marketing": `bg-emerald-500/20 text-emerald-400`.

### 4. Mobile Spacing Pass (`src/pages/Partners.tsx`, `src/pages/Landing.tsx`)

- Partner cards grid: ensure `grid-cols-1` on mobile (already `md:grid-cols-2 lg:grid-cols-3` — verify)
- Case study cards: same check
- "See It In Action" video grid: verify it stacks on mobile (currently `md:grid-cols-3`)

---

## Files Modified

| File | Changes |
|------|---------|
| `src/pages/Landing.tsx` | Add `onLoadedData` play fallback to all 5 videos, verify autoPlay/muted/playsInline on all |
| `src/pages/Partners.tsx` | Add Tabs for All / Venue Partners / Ecosystem Partners filtering |
| `src/data/partners.ts` | Add "Marketing" to PartnerCategory, add G5quared entry |
| `src/components/partners/PartnerCard.tsx` | Add "Marketing" color mapping |

---

## What You Need To Do

**Nothing right now.** After this lands, one more prompt (V2d) handles form wiring and analytics. Then you remix for the generic template.

Regarding the password gate on Dashboard — you mentioned you're unsure about it. We can skip it and just keep the Dashboard public for now. It's a soft preview anyway. We can always add it later if Chris wants privacy.

