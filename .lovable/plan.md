

# Plan: Peak Pickleball Venue Portal Transformation

## Summary
Transform the entire app into a customized portal for Peak Pickleball with real dates (April 7 - June 1, 2026), real quotes from Chris Kepko, Peak-specific events, updated economics, and a password-gated dashboard.

## Changes

### 1. Global Updates
- **`index.html`**: Title → "Courtana × Peak Pickleball", update meta description
- **`src/components/Navbar.tsx`**: Simplify nav to "The Plan | Events | Dashboard (🔒)" only. Remove Schedule, Discovery, Ecosystem, About links.

### 2. Landing Page (`src/pages/Landing.tsx`) — Major Rewrite

**Hero**: Badge → "🟢 Live Partnership Portal". Subheadline → "Smart courts. Real data. Zero risk. Your 8-week launch plan starts April 7." Stats → "4 Smart Courts | $0 Upfront | May 9 Grand Opening | 300-Player Tournament"

**New "What We Heard" section** after hero: Three pull-quote cards with green left border from Chris Kepko (the $1.5M facility quote, gamification/badges quote, and 16-court expansion quote).

**Value Props** — Replace all 6 with Peak-specific cards: Cameras on 4 Courts, We Run Your Events, AI Coaching at $20-25, Gamification That Sticks, Open Play Solved, Live Broadcast to the Highway.

**8-Week Timeline** — Replace with real dates anchored to Peak's calendar (April 7 through June 1). Each week gets specific tags (LAUNCH/EVENTS/DATA/GROWTH/REVIEW), real deliverables, and Peak-specific descriptions as specified.

**Economics** — Update KPIs to: $0 pilot investment, $95/court/mo post-pilot, $2,000-4,000/mo projected lift. Revenue table: 5 rows with Premium court pricing, AI coaching, Tournament revenue share, Walk-in/guest fees, Open play optimization across Conservative/Realistic/Upside columns totaling $1,200/$2,650/$4,100. Add "Zero Risk" callout box.

### 3. Events Page (`src/data/events.ts` + `src/pages/Events.tsx`) — Replace All Events

Replace the 6 seed events with Peak-specific events:
1. Peak Spring Smash Tournament (May 1-4, $40, 300 spots)
2. Courtana Court Preview: Coaches Only (April 14, Free/invite only, 10 spots)
3. Open Play Happy Hour (Every Thursday from April 17, $10/members free)
4. AI Coaching Clinic: Third Shot Mastery (April 22, $25, 16 spots)
5. Friday Night Lights: Live Broadcast (Every Friday from May 16, Free/$5)
6. Charity Round Robin (May 17, $20, 24 spots)

**Featured event** (full-width card at top): Peak Pickleball Grand Opening — Dinks & Drinks with Chris Kelly (May 9, $15).

Each card CTA opens a booking modal (already exists in EventDetail — add inline modal to Events page too). Bottom CTA: "Want to host your own event?" → mailto:bill@courtana.com.

### 4. Dashboard Page (`src/pages/Dashboard.tsx`) — Password-Gated Rewrite

**Password gate**: Centered card, "Peak Pickleball — Pilot Dashboard", password input, hardcode "peak2026". Store auth in sessionStorage.

**Dashboard content** (after auth):
- Header: "Peak Pickleball — Pilot Dashboard" + "Week 1 of 8" badge + "April 7 — June 1, 2026"
- KPI row (4 cards): Sessions Recorded: 0, Highlights Generated: 0, Event Revenue: $0, Player Accounts: 0 — all with "Pilot starts April 7" subtext
- Line chart: Court Utilization (Courtana Courts vs Standard) over 8 weeks with slight upward trend
- Bar chart: Revenue by Source (Court Premium, Coaching, Events, Walk-ins, AI Reviews)
- Event Performance table: The 6 events + featured event with Date, Capacity, Registered, Revenue, Status badges
- Pilot Scorecard: Target metrics (15% utilization lift, $2,000/mo revenue, 50+ accounts) vs current status, "Starting Soon" badge

### 5. Files Changed

**Modified:**
- `index.html` — title + meta
- `src/components/Navbar.tsx` — simplified nav links + 🔒 icon on Dashboard
- `src/pages/Landing.tsx` — complete content rewrite (hero, quotes, value props, timeline, economics)
- `src/pages/Events.tsx` — add featured event card + inline booking modal + mailto CTA
- `src/pages/Dashboard.tsx` — password gate + zero-state dashboard with charts
- `src/data/events.ts` — replace all 6 events + add featured event data

**No new files needed** — all components and pages already exist.

### Technical Notes
- Password gate uses `useState` + `sessionStorage.getItem/setItem` pattern
- Events dates use ISO format for `date-fns` parsing (2026-04-xx, 2026-05-xx)
- Dashboard charts use recharts (already imported in current Dashboard)
- Booking modal pattern already exists in EventDetail — reuse in Events page
- Remove partner badge references from timeline (weekPartners) since nav is simplified

