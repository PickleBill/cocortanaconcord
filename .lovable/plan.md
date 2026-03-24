

# Plan: Partner Ecosystem Hub + Launch Plan Integration

## The Big Picture

You've built a constellation of pickleball sites -- each serves a different layer of the Courtana value chain. This plan adds two things to **this site** (Courtana Connect):

1. **A new `/partners` page** -- a visual ecosystem hub that maps the Courtana partner network, linking out to your live Lovable sites
2. **Launch plan weeks reference partners** -- each week on the landing page gets a subtle partner tie-in (sponsor badge, "powered by" link)

Later, you can build a **standalone Courtana Hub** site that's the master directory across all properties. For now, this site becomes the anchor.

---

## New Page: `/partners` -- The Courtana Ecosystem

A premium, visual page showing how Courtana connects venues, coaches, brands, players, and technology into one flywheel.

### Layout

**Hero**: "The Courtana Ecosystem" headline. Subtitle: "Smart courts. Connected partners. Infinite possibilities." Dark background with the green/gold gradient treatment.

**Interactive Flywheel Diagram**: A circular/radial visual showing the 5 ecosystem layers:
- **Smart Courts** (center) -- courtana.com
- **Coaching** -- Coach Connect, Casey/Kings Court Coach
- **Events & Community** -- Paddles & Pals, tournaments
- **Equipment & Brands** -- Freakshow Paddles
- **Technology & Builds** -- VibeCo Labs, Layup Lab

Each node is clickable and expands to show a partner card.

**Partner Cards Grid**: Each partner gets a card with:
- Partner name and logo/icon
- One-line description
- Category tag (Coaching / Equipment / Community / Technology / Venue)
- Status badge: "Live" (green), "In Development" (amber), "Coming Soon" (muted)
- "Visit Site" button linking to the published Lovable URL
- "How it connects" blurb explaining the value chain link

### Partners to Feature

| Partner | Category | URL | Status |
|---------|----------|-----|--------|
| Courtana Smart Courts | Core Platform | courtana.com | Live |
| Courtana Coach Connect | Coaching Ecosystem | courtana-coach-play.lovable.app | Live |
| Kings Court Coach (Casey) | Individual Coach | (published URL) | Live |
| Freakshow Paddles | Equipment Brand | freakfosho.lovable.app | Live |
| Paddles & Pals | Community Hub | (published URL) | Live |
| Layup Lab | Analytics/Training | layuplab.lovable.app | Live |
| VibeCo Labs | Builder/Agency | vibeco.lovable.app | Live |

Plus 3-4 "opportunity slots" styled as ghost cards: "Your Brand Here", "Tournament Organizer", "Beverage Sponsor", "Apparel Partner" -- showing the ecosystem is open for expansion.

**"How It Works" Section**: Three cards explaining the business model:
1. **We Build It** -- VibeCo builds partner sites from zero to live in hours
2. **We Connect It** -- Courtana smart courts link everything: data, players, events
3. **We Grow It** -- Marketing flywheel drives traffic, engagement, and revenue across partners

**CTA**: "Want to join the ecosystem?" contact form or link to the About page contact section.

---

## Landing Page Updates

### Week-Partner Mapping (Hybrid)

Each week card in the launch timeline gets an optional "Partner Spotlight" badge:

- **Week 1** (Launch Party) -- "Sponsored by" + beverage partner slot + paddle partner (Freakshow)
- **Week 2** (Coaching Clinics) -- "Hosted by" + Coach Connect ecosystem badge
- **Week 3** (Round Robin) -- "Community by" + Paddles & Pals
- **Week 4** (Gamification) -- "Powered by" + Courtana Smart Courts
- **Week 5** (Premium Pricing) -- "Analytics by" + Layup Lab
- **Week 6** (Pro-Am) -- "Featured Coach" + Casey / Kings Court Coach
- **Week 7** (Matchmaking) -- "Powered by" + Courtana AI
- **Week 8** (ROI Report) -- "Built by" + VibeCo Labs

Each badge links to the partner's live site. Subtle, not cluttering the week card -- a small pill below the deliverables.

### New "Ecosystem" CTA on Landing

Between the economics section and the final CTA, add a compact section: "Part of Something Bigger" with a mini version of the flywheel graphic and a "View the Ecosystem →" button linking to `/partners`.

---

## Files to Create
- `src/pages/Partners.tsx` -- full ecosystem hub page
- `src/components/partners/EcosystemFlywheel.tsx` -- interactive radial diagram
- `src/components/partners/PartnerCard.tsx` -- reusable partner card component

## Files to Modify
- `src/App.tsx` -- add `/partners` route
- `src/components/Navbar.tsx` -- add "Ecosystem" nav link
- `src/pages/Landing.tsx` -- add partner badges to week cards + ecosystem CTA section

## Technical Notes
- Partner data stored as a typed array in `src/data/partners.ts` with URLs, categories, status, descriptions
- Flywheel uses CSS/SVG with framer-motion hover animations -- no heavy charting library needed
- All partner URLs are external links (`target="_blank"`) to published Lovable apps
- Partner cards use the existing glass card design system with category-colored accents

