

# Concord V2 — Production Cleanup + Template Fork Strategy

## Two-Project Strategy

You're right that this should branch into two projects:

1. **This project** — becomes the final **Concord Pickleball** portal for Chris Williams. We apply all the V2 cleanup below.
2. **A new project** — a generic **Courtana Connect** template with placeholder venue data, no Concord-specific content, reusable for every future venue partner. This would be created as a Lovable remix of this project after V2 lands, then stripped of Concord-specific references.

The remix approach makes sense: finish Concord first (it's 90% there), then fork it into the generic template. That way the template inherits all the polished UI, video patterns, and ecosystem structure.

**For now, this plan covers the Concord V2 cleanup only.** The template fork is a separate step after this ships.

---

## V2a — Global Cleanup & Branding (this prompt)

7 changes across 5 files. No layout or design changes — purely fixing references, dead code, and branding.

### 1. Replace Index.tsx placeholder
`src/pages/Index.tsx` — replace the Lovable placeholder with a simple redirect to `/`.

### 2. Fix EventDetail venue name
`src/pages/EventDetail.tsx` line 72 — "Peak Pickleball" → "Concord Pickleball"

### 3. Update Discovery defaults
`src/pages/Discovery.tsx` lines 17-21:
- `venueName`: "Peak Pickleball" → "Concord Pickleball"
- `courts`: 12 → 8
- `members`: 450 → 200
- `monthlyBookings`: 1200 → 600
- `monthlyEvents`: 6 → 4

### 4. Update event dates to template format
`src/data/events.ts` — replace all specific dates with pilot-relative labels:
- Launch Event → "Week 2 of Pilot"
- Coaches Preview → "Week 1 of Pilot"
- Open Play Night → "Week 3 of Pilot"
- AI Coaching Clinic → "Week 3 of Pilot"
- Community Tournament → "Week 4 of Pilot"
- Friday Night Showcase → "Week 5 of Pilot"
- Charity Round Robin → "Week 6 of Pilot"

Since `date` is used with `parseISO()` in EventDetail, we'll keep the ISO dates but add a `pilotWeek` display field and use that in the UI instead.

### 5. SVG favicon
`index.html` — replace the broken favicon with a clean SVG using Courtana green (#00E676).

### 6. Verify footer
Footer already shows `bill@courtana.com` — confirmed clean, no changes needed.

### 7. Schedule page
Keep it — it's a functional calendar component that adds value for the Concord demo. The 6-court grid should be updated to 8 courts to match Concord.

---

## V2b — Landing Page Polish (next prompt)

6 changes to `src/pages/Landing.tsx`:
- Video `preload="metadata"` on all `<video>` tags
- Elevate the "GoPro on the wall" quote into a dedicated pull-quote callout
- Add the Roast Coach video as a third AI analysis embed
- Revenue table made collapsible via accordion
- Mobile spacing pass on hero stats grid
- Timeline dates → "Dates confirmed after kickoff call" note

## V2c — Dashboard + Events (parallel with V2b)

5 changes:
- Camera layout diagram for 8 courts on Dashboard
- Horizontal pilot timeline bar on Dashboard
- "Why This Event Works" revenue blurb on each event card
- Launch Event gets `featured: true`
- Registration CTAs → mailto:bill@courtana.com

## V2d — Production Hardening (last)

4 changes:
- Video CDN migration (manual — not a Lovable prompt)
- Form submission wiring (Formspree or mailto fallback)
- Simple password gate on Dashboard
- Analytics snippet in index.html

---

## Files Modified in V2a

| File | Change |
|------|--------|
| `src/pages/Index.tsx` | Replace placeholder with redirect |
| `src/pages/EventDetail.tsx` | "Peak Pickleball" → "Concord Pickleball" |
| `src/pages/Discovery.tsx` | Update defaults to Concord profile |
| `src/data/events.ts` | Add `pilotWeek` field, keep ISO dates for parsing |
| `src/pages/Schedule.tsx` | Update courts array from 6 to 8 |
| `index.html` | Fix favicon SVG |

---

## Template Fork (after V2 ships)

After Concord is production-ready:
1. Remix this project in Lovable
2. Strip all Concord-specific content (Chris quotes, "Concord Pickleball" references)
3. Replace with generic placeholders: `{{venueName}}`, `{{courts}}`, etc.
4. Keep all video embeds, ecosystem structure, and UI patterns
5. This becomes the **Courtana Connect** starter kit for every new venue

