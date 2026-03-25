

# Concord Pickleball Fork — Full Content Swap

## Overview
Swap all Peak Pickleball content to Concord Pickleball across 7 files. Keep all architecture, animations, and page structure. Add 3 new landing page sections. No new files needed except imports.

## Files to Modify

### 1. `src/pages/Landing.tsx` — Major content swap + 3 new sections

**Data arrays to replace:**
- `stats` → 8 Indoor Courts, $0 Upfront Cost, 8 Week Pilot, 1 Camera Per Court
- `quotes` → Chris Williams GoPro quote, "nobody's making money" quote, "pay for itself" quote. Attribution → "Chris Williams, Concord Pickleball"
- `valueProps` → 6 new items: No More GoPro on the Wall, Events That Make Money, AI Coaching = New Revenue, Gamification That Retains, Highlights Members Will Pay For, Your Screens Working For You
- `weeks` → Remove `dates` field from all 8 objects. Replace all titles/descriptions with generic versions (Install + Staff Preview, Community Launch Event, Coaching Clinic Series, Tournament Integration, Signature Event, Gamification Goes Live, Matchmaking + Open Play, The Numbers). Remove line 271 that renders `w.dates`.
- `revenueStreams` → Ranges instead of fixed numbers ($200-400, $300-600, etc.). Totals: $750-1,750 / $2,050-4,100 / $4,100-7,300

**Hero updates:** Badge → "Partnership Preview", headline → "Concord Pickleball", subheadline remove April 7 reference, second CTA → "Explore the Ecosystem" linking to /partners

**KPI cards:** $0 pilot, $95/court/mo (4 courts = $380, 8 courts = $760), $1,400+/mo projected

**Timeline subtitle:** Remove "April 7 – June 1, 2026" → "Each week builds on the last. By week 8, you'll have hard data on ROI."

**Zero Risk box:** New copy referencing GoPro, 4 courts starting point, $380/mo math

**Add italic note** below revenue table about projections depending on facility size

**3 new sections inserted between Economics and CTA:**

1. **"What a Partnership Looks Like"** — Two-column glass cards. Left (green border): What Courtana Brings (7 bullet items). Right (muted border): What We'd Love From You (6 bullet items). Subtext: "This is a partnership, not a purchase order."

2. **"Case Study: Peak Pickleball"** — Gold-bordered card with "Flagship Partner" badge, Peak stats (35 courts, 250 members), brief results paragraph, external link button to https://courtana-venue-connect.lovable.app

3. **"Part of Something Bigger"** — Import and render `EcosystemFlywheel` (compact) on left, ecosystem text on right, "Explore the Ecosystem →" button to /partners

**CTA section:** Headline → "Let's prove it works — together." Remove April 7 reference and calendar button. Buttons: Start a Conversation (mailto), View the Ecosystem (/partners), Pilot Dashboard (/dashboard)

### 2. `src/data/events.ts` — Replace all events

7 genericized template events with placeholder dates in June/July 2026:
- Launch Event (featured, Special, free, 200 spots)
- Staff Preview (Clinic, free, invite only, 10 spots)
- Open Play Night (Open Play, $10, 40 spots)
- AI Coaching Clinic (Clinic, $25, 16 spots)
- Community Tournament (Tournament, $40, 64 spots)
- Friday Night Showcase (Special, $5, 32 spots)
- Charity Round Robin (Tournament, $20, 24 spots)

### 3. `src/pages/Events.tsx` — Text and button updates

- Title: "Event Templates — Courtana × Concord"
- Subtitle: "These events are included in your pilot..."
- All booking buttons → "Customize This Event" with `variant="outline"`
- Bottom CTA: "Want to customize these for Concord?"

### 4. `src/pages/Dashboard.tsx` — Preview state

- Header: "Concord Pickleball — Pilot Dashboard"
- Badge: "Preview Mode" instead of "Week 1 of 8"
- Date range: "Dates TBD — pending kickoff"
- KPI sub text: "Awaiting pilot launch"
- `pilotEvents` → genericized (Week 1-7 dates, $0 revenue, "Planned" status)
- Add glass banner before KPIs explaining the dashboard goes live at install

### 5. `src/data/partners.ts` — Add 2 entries

- Concord Pickleball (Coming Soon, Community category)
- Peak Pickleball (Live, Community category, links to https://courtana-venue-connect.lovable.app)

### 6. `src/components/Navbar.tsx` — Reorder links

- Primary: The Plan, Events, Ecosystem (/partners), Dashboard
- More dropdown: Schedule, About, Discovery

### 7. `src/components/Footer.tsx` — Three-column layout

- Col 1: Courtana wordmark + tagline
- Col 2: Quick links (The Plan, Events, Ecosystem, Dashboard)
- Col 3: Contact (bill@courtana.com, courtana.com)
- Bottom: "© 2026 Courtana · Built with intention"

## Technical Notes
- Import `EcosystemFlywheel` in Landing.tsx from `@/components/partners/EcosystemFlywheel`
- Remove `CalendarDays` import from Landing.tsx (calendar CTA removed)
- Schedule page courts array: keep as 6 courts (could update to 8 to match Concord but prompt doesn't specify)
- All existing animations, glass styling, and responsive breakpoints stay unchanged

