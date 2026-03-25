

# Final Cleanup — Video Swap, Partner Visuals, Event UX

## What this covers

4 issues you flagged:

1. **Roast Coach video swap** — replace with `PEAK_AI_Analysis.mp4` (the 4th unused video in `/public/videos/`)
2. **Partner cards need visuals** — add preview thumbnails/screenshots for partners with live URLs using favicon/OG approach, and a gradient placeholder for those without
3. **Events page UX** — change "Customize This Event" to "Book Your Spot" linking to the event detail page (`/events/{id}`) where the booking modal already exists
4. **Mobile responsiveness pass** — verify grids stack properly, video cards don't overflow

---

## Changes by File

### `src/pages/Landing.tsx`
- Swap Roast Coach video from `AI_Analysis_Roast_Coach.mp4` to `PEAK_AI_Analysis.mp4`
- Update the card title from "Roast Coach — AI Coaching Review" to "Peak AI Analysis — Live Match Review"
- Update modal title and description to match

### `src/components/partners/PartnerCard.tsx`
- Add a visual header area to each partner card: a small preview image using `https://www.google.com/s2/favicons?domain={url}&sz=64` for partners with URLs, or a gradient placeholder with their icon for those without
- This gives every card a visual element at the top without requiring manual screenshots

### `src/pages/Events.tsx`
- Change ALL "Customize This Event" button text to **"Book Your Spot"**
- Change the `<a href="mailto:...">` to `<Link to={/events/${event.id}}>` so it routes to the event detail page with the existing booking modal
- Featured event button gets the same treatment
- The event detail page already has a working "Book Your Spot" button with the registration modal — this just connects the flow

### `src/data/events.ts`
- No changes needed — `revenueNote` and all data fields are already populated

### `src/pages/Partners.tsx`
- Mobile grid already uses `grid-cols-1` on small screens — verified correct
- No changes needed here

---

## Files Modified

| File | Changes |
|------|---------|
| `src/pages/Landing.tsx` | Swap Roast Coach → PEAK_AI_Analysis video, update labels |
| `src/components/partners/PartnerCard.tsx` | Add favicon/gradient visual header to each card |
| `src/pages/Events.tsx` | "Customize This Event" → "Book Your Spot" with Link to detail page |

---

## What's NOT in this prompt

- Password gate on Dashboard — skipped per your feedback
- Video CDN migration — manual step for later
- The fork/remix — happens after this cleanup ships

