

# V2b + V2c — Landing Polish + Dashboard/Events Upgrade

## Status Check

**V2a — DONE.** Index redirect, Concord branding, Discovery defaults, pilotWeek fields, favicon, 8 courts on Schedule — all shipped.

**Next up:** V2b (Landing polish) and V2c (Dashboard + Events) can run together in one prompt since they touch different files.

**Fork timing:** After V2b+V2c+V2d land, you remix this project in Lovable (Settings > Remix). No action needed from you until then.

---

## What Gets Built Now (V2b + V2c combined)

### Landing Page Polish (`src/pages/Landing.tsx`)

1. Add `preload="metadata"` to ALL `<video>` tags (some already have it, verify all do — the "See It In Action" section videos especially)
2. Elevate the GoPro quote ("Members keep asking me for footage...") into a dedicated pull-quote callout with larger text, quotation marks, and "— Chris Williams, Concord Pickleball" attribution — placed between the quotes carousel and value props
3. Add the Roast Coach video (`AI_Analysis_Roast_Coach.mp4`) as a third clickable card in the "See It In Action" section, titled "Roast Coach — AI Coaching Review"
4. Timeline section: add a subtle note under the header — "Dates confirmed after kickoff call"
5. Mobile spacing pass: ensure hero stats grid uses `grid-cols-2` on small screens with proper gap

### Dashboard Upgrade (`src/pages/Dashboard.tsx`)

1. **Camera layout diagram** — An 8-court grid (4x2) showing camera positions as green dots on each court. Simple CSS grid with court labels (Court 1-8) and a camera icon per court
2. **Pilot timeline bar** — Horizontal 8-week timeline showing which events land in which week. Each week is a segment; events shown as colored dots/pills below their week. Uses the `pilotEvents` data already in the file
3. Place both new sections between the KPI cards and the charts

### Events Upgrade (`src/pages/Events.tsx` + `src/data/events.ts`)

1. **Launch Event confirmed as `featured: true`** — already correct in events.ts (verified)
2. **"Why This Event Works" revenue blurb** — Add a `revenueNote` field to `EventData` interface and each event. Example: "Open Play Night — $10/guest × 40 spots = $400/night recurring". Display as a small green-tinted callout on each event card
3. **Wire CTAs** — "Customize This Event" buttons become `mailto:bill@courtana.com?subject=Event: {title}` links instead of dead buttons

### About Page Cleanup (`src/pages/About.tsx`)

- Verify no placeholder images remain (last edit added the display demo video — confirm it's rendering)

---

## Files Modified

| File | Changes |
|------|---------|
| `src/pages/Landing.tsx` | Pull-quote callout, Roast Coach video card, timeline note, mobile grid fix, video preload audit |
| `src/pages/Dashboard.tsx` | Camera layout diagram, pilot timeline bar |
| `src/pages/Events.tsx` | Wire CTA buttons to mailto, render revenueNote |
| `src/data/events.ts` | Add `revenueNote` field to interface + all 7 events |

---

## What You Need To Do

**Nothing right now.** This prompt handles V2b+V2c. After this lands:
- **V2d** (password gate on Dashboard, form wiring, analytics) is one more prompt
- **Video CDN migration** is manual (upload videos to Cloudflare R2 or S3, update URLs, purge from git) — I'll give you exact steps when we get there
- **Fork/Remix** — after V2d, go to Settings > Remix to create the generic Courtana Connect template

