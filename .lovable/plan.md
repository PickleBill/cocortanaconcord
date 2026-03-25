# Ecosystem Expansion + Case Studies Section

## Overview

Add 5 new ecosystem partners, update existing links, save 3 video assets, and restructure the landing page case study section into a multi-venue showcase. Seven Oaks gets a placeholder card (assets coming later).  

## Changes - > LOVE IT ALL.  To be clear, there's different types of ecosystem partners which you realize and venue is one of them and probably the most important one venues are the ecosystem partner that is going to be featured in the case study like Peak Pickleball, Underground, which is our primary one and the two in Austin, which are in the pipeline as in. We're gonna be there soon. Coming soon to Dieal. 7oak is in that category as well. And the other thing is I like the idea of the categories and in case it's not obvious like there are several that could be multi categorized so that's fine to do the color labels and make sure we have the ability to have multiple categories, but there should definitely still be a primary.  

### 1. Partner Data (`src/data/partners.ts`)

**Update existing entries:**

- Peak Pickleball URL: `https://courtana-venue-connect.lovable.app` → `https://peakpickleball.club/`
- Kings Court Coach (Casey) URL: duplicate coach-play URL → `https://racketscience.lovable.app`. Update description to "Elite Coaching Partners — powered by Courtana analytics and sport science methodology."

**Add new category values** to the `PartnerCategory` type:

- `"Influencer"` | `"Health & Wellness"` | `"Venue"`

**Add new partner entries:**


| Name                    | Category          | Status      | URL                                                                                                                                                  |
| ----------------------- | ----------------- | ----------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| Bryant (Padel Bryant)   | Influencer        | Live        | [https://www.instagram.com/padelbryant/](https://www.instagram.com/padelbryant/)                                                                     |
| StretchLab              | Health & Wellness | Live        | [https://www.stretchlab.com/](https://www.stretchlab.com/)                                                                                           |
| Urban Pickleball ATX    | Venue             | Live        | [https://www.pickleheads.com/courts/us/texas/austin/urban-pickleball-club](https://www.pickleheads.com/courts/us/texas/austin/urban-pickleball-club) |
| Capital City Pickleball | Community         | Live        | [https://www.capitalcitypickleball.com/](https://www.capitalcitypickleball.com/)                                                                     |
| Underground Pickleball  | Venue             | Live        | [https://courtana.com/highlight-group/TuuqWPwc26EO](https://courtana.com/highlight-group/TuuqWPwc26EO)                                               |
| Seven Oaks              | Venue             | Coming Soon | (empty — assets coming)                                                                                                                              |


**New icons needed:** `Instagram` or `Star` for Influencer, `Heart` for Health & Wellness, `MapPin` for Venue.

### 2. PartnerCard Category Colors (`src/components/partners/PartnerCard.tsx`)

Add color mappings for the 3 new categories:

- `"Influencer"`: orange tones
- `"Health & Wellness"`: rose/pink tones
- `"Venue"`: blue tones

### 3. Save Video Assets

Copy the 3 uploaded `.mov` files to `public/videos/`:

- `Shot_of_Day.mov`
- `That_Shot.mov`
- `Courtana_display_demo.mov`

### 4. Landing Page Case Studies Section (`src/pages/Landing.tsx`)

**Move the current single-card "Case Study: Peak Pickleball" section to the bottom** (after "Part of Something Bigger", before CTA).

**Expand into a multi-card "Case Studies" section** with a 3-column grid:

**Card 1 — Peak Pickleball** (keep existing content):

- Badge: "Flagship Partner"
- Title: "Peak Pickleball — 35 courts, 250 members"
- Body: existing paragraph
- Button: "See Peak's Portal →" → `https://peakpickleball.club/`

**Card 2 — Underground Pickleball:**

- Badge: "Community Partner"
- Title: "Underground Pickleball"
- Body: "Underground brings the energy. Featured highlights powered by Courtana smart courts — watch real plays from the community."
- Two embedded video elements using `<video>` tags pointing to `/videos/Shot_of_Day.mov` and `/videos/That_Shot.mov` (stacked or side-by-side with poster frames)
- Button: "View Highlights →" → `https://courtana.com/highlight-group/TuuqWPwc26EO`
- Secondary link: display demo video `/videos/Courtana_display_demo.mov`

**Card 3 — Seven Oaks** (placeholder):

- Badge: "Coming Soon"
- Title: "Seven Oaks"
- Body: "Details coming soon — another venue joining the Courtana network."
- No button (or muted "Coming Soon" state)

Section title: "Case Studies" with subtitle "Real venues. Real results. See what Courtana looks like in action."

### 5. Route / Page Structure

No new routes needed. The case studies live inline on the landing page and the new partners appear on the existing `/partners` ecosystem page.

## Files Modified

- `src/data/partners.ts` — add 6 new partners, update Peak URL and Casey URL, expand PartnerCategory type
- `src/components/partners/PartnerCard.tsx` — add 3 new category color mappings
- `src/pages/Landing.tsx` — restructure case study section into 3-card grid at bottom, embed videos
- `public/videos/` — 3 new .mov files

## Technical Notes

- Video files served from `public/videos/` as static assets
- `<video>` tags with `controls`, `preload="metadata"`, and `playsInline` for mobile
- Existing partner card component handles the new categories automatically via the color map
- Seven Oaks is a placeholder — will be fleshed out when assets arrive