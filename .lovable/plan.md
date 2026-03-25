# Video Assets + Case Studies + Partner Expansion + UX Cleanup

## Overview

Save 4 new .mp4 video assets, restructure the landing page case studies into a polished multi-venue showcase with video thumbnails and a prominent AI analysis display demo, expand partner data with new categories and venues, and clean up the economics section UX.

## Files to Modify/Create

### 1. Save Video Assets to `public/videos/`

Copy all 4 uploaded .mp4 files (smaller than the old .mov files — solves GitHub size issues):

- `Courtana_display_demo_FINAL.mp4` — the hero display demo, gets prominent "TV frame" treatment
- `BEST_AI_Analysis_-_meta_view_paddle_identifier_copy.mp4` — AI analysis showcase
- `PEAK_AI_Analysis_bcsPaTmCM2dw.mp4` — Peak-specific AI analysis
- `AI_Analysis_Roast_Coach_feb_11.mp4` — coaching AI analysis

Also delete the old `.mov` files if they exist (they don't currently, but clean up any references).

### 2. Landing Page — `src/pages/Landing.tsx`

**Display Demo — Prominent TV Frame Modal**

Add a new "See It In Action" section between Value Props and the Timeline (or at top of the plan section). Features:

- A styled TV/monitor frame with rounded corners and a subtle bezel effect
- Embeds `Courtana_display_demo_FINAL.mp4` with autoplay/muted/loop or controls
- Click opens a fullscreen Dialog modal for immersive viewing
- Brief caption: "Live court display at Underground Pickleball — stats, highlights, and leaderboards in real time."

**AI Analysis Showcase**

Add the meta view AI analysis video (`BEST_AI_Analysis_...mp4`) as a clickable card near the value props or in its own mini-section. Opens in a Dialog modal on click. Title: "AI Analysis in Action" — shows the paddle identification and shot tracking.

**Case Studies Section — Restructured (stays at bottom, before CTA)**

Replace the current single Peak card with a 3-column grid:

**Card 1 — Peak Pickleball:**

- Badge: "Flagship Partner"
- Video thumbnail from `PEAK_AI_Analysis_bcsPaTmCM2dw.mp4` (first frame / poster, click to play)
- Title: "Peak Pickleball — 35 courts, 250 members"
- Brief body text
- CTA: "Visit Peak Pickleball →" links to `https://peakpickleball.club/`

**Card 2 — Underground Pickleball:**

- Badge: "Venue Partner"
- Video embed of `Shot_of_Day.mov` (or the existing asset — we'll use the display demo clip as facility footage since we have it)
- Title: "Underground Pickleball"
- Body: community highlights text
- CTA: "View Highlights →" links to `https://courtana.com/highlight-group/TuuqWPwc26EO`

**Card 3 — Urban Pickleball ATX:**

- Badge: "Primetime Patrtner (Coming Soon)"
- Muted styling, no video yet
- Title: "Urban Pickleball — Austin, TX"
- Body: "Next up in the Courtana network. Austin's premier indoor pickleball destination."
- No active CTA (or muted "Coming Soon" button)

Section title: "Case Studies" / subtitle: "Real venues. Real results. See what Courtana looks like in action."

CTA buttons on Peak and Underground link to the respective external sites (not back to /partners).

**Economics Section — UX Cleanup**

- Tighten the revenue table: reduce padding, make it more compact
- The first KPI card was already reframed to "We Install Everything" / "Turn-Key" in the last edit — verify this is clean
- Ensure the Zero Risk box copy doesn't over-emphasize cost language
- Consider making the revenue table collapsible (accordion) so it doesn't dominate the page

### 3. Partner Data — `src/data/partners.ts`

**Add new categories** to `PartnerCategory` type: `"Venue"` | `"Influencer"` | `"Health & Wellness"`

**Update existing entries:**

- Peak Pickleball: URL → `https://peakpickleball.club/`, category → `"Venue"` (primary)
- Kings Court Coach (Casey): URL → `https://racketscience.lovable.app`, description → "Elite Coaching Partners — powered by Courtana analytics and sport science methodology."

**Add new partner entries:**


| Name                    | Category          | Status      | URL                                                                                                                                                  |
| ----------------------- | ----------------- | ----------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| Underground Pickleball  | Venue             | Live        | [https://courtana.com/highlight-group/TuuqWPwc26EO](https://courtana.com/highlight-group/TuuqWPwc26EO)                                               |
| Urban Pickleball ATX    | Venue             | Coming Soon | [https://www.pickleheads.com/courts/us/texas/austin/urban-pickleball-club](https://www.pickleheads.com/courts/us/texas/austin/urban-pickleball-club) |
| Seven Oaks              | Venue             | Coming Soon | (empty)                                                                                                                                              |
| Capital City Pickleball | Community         | Live        | [https://www.capitalcitypickleball.com/](https://www.capitalcitypickleball.com/)                                                                     |
| Bryant (Padel Bryant)   | Influencer        | Live        | [https://www.instagram.com/padelbryant/](https://www.instagram.com/padelbryant/)                                                                     |
| StretchLab              | Health & Wellness | Live        | [https://www.stretchlab.com/](https://www.stretchlab.com/)                                                                                           |


**Add `categories` array field** to `Partner` interface (optional, for multi-category support). Primary category remains the `category` field; `categories` is an array of additional tags displayed as secondary badges. Example: Underground could be `category: "Venue"`, `categories: ["Community"]`.

**Icons**: `MapPin` for Venue, `Star` or `Instagram` for Influencer, `Heart` for Health & Wellness.

### 4. PartnerCard — `src/components/partners/PartnerCard.tsx`

- Add color mappings for new categories: Venue (blue), Influencer (orange), Health & Wellness (rose)
- Render secondary `categories` badges below the primary badge if present
- Handle empty URLs gracefully (hide "Visit Site" button for Coming Soon partners with no URL)

### 5. Concord entry update — `src/data/partners.ts`

Change Concord's category from `"Community"` to `"Venue"` since it's a venue partner.

6. Make sure  about section has no blank visuals. Pick a Courtana snapshot, anything that is good for the hero image there. I love the copy on it, and I love the rest of the page, but just make sure that there are no placeholders on that one. I think that's all pretty good, so let's get this thing live with your changes.   feel free to place in some other visual imagery on that, but don't overcrowd it. Just make sure it's clean and fluid and aesthetically pleasing 

## Technical Notes

- All video files are .mp4 (H.264) — much smaller than .mov, GitHub-friendly
- Dialog component already exists in `src/components/ui/dialog.tsx` — use for video modals
- `<video>` tags use `playsInline`, `preload="metadata"`, `controls` for mobile compatibility
- Old .mov references in Landing.tsx need to be removed/replaced
- No new routes or pages needed

## Section Order on Landing Page (final)

1. Hero
2. Stats Bar
3. What We Heard (quotes)
4. Built for Your Venue (value props)
5. **See It In Action** (display demo TV frame + AI analysis) — NEW
6. The 8-Week Playbook (timeline)
7. The Economics (cleaned up, more compact)
8. What a Partnership Looks Like
9. Part of Something Bigger (flywheel)
10. **Case Studies** (Peak, Underground, Urban ATX) — RESTRUCTURED
11. CTA