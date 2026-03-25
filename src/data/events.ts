export interface EventData {
  id: string;
  title: string;
  description: string;
  longDescription: string[];
  date: string;
  time: string;
  pilotWeek: string;
  price: number;
  spots: number;
  spotsTotal: number;
  category: "Open Play" | "Clinic" | "Tournament" | "Special";
  whatsIncluded: string[];
  whoItsFor: string;
  format: string;
  badge?: string;
  featured?: boolean;
  revenueNote?: string;
}

export const events: EventData[] = [
  {
    id: "launch-event",
    title: "Your Launch Event — Powered by Courtana",
    description: "We plan it. We promote it to our network. You provide the courts. Your first event on smart courts, designed to get players hooked.",
    longDescription: [
      "Your first Courtana-powered event — designed to make an impression on your members and attract new players.",
      "We handle promotion through our network and your member list. Live highlights on the big screens, player sign-ups, gamification preview.",
      "Free entry for members, optional small fee for guests. Social content captured throughout for your marketing channels."
    ],
    date: "2026-06-01",
    time: "5:00 PM – 9:00 PM",
    pilotWeek: "Week 2 of Pilot",
    price: 0,
    spots: 200,
    spotsTotal: 200,
    category: "Special",
    whatsIncluded: ["Full smart court experience", "Live highlights on screens", "Player account setup", "Social content capture"],
    whoItsFor: "Your entire membership + invited guests. The kickoff event everyone talks about.",
    format: "Open format with exhibition matches, demos, and open play rotations.",
    badge: "🚀 Launch Event",
    featured: true,
    revenueNote: "Free entry builds member base — 200 player sign-ups = long-term retention revenue",
  },
  {
    id: "coaches-preview",
    title: "Smart Court Preview: Coaches Only",
    description: "Private session for your coaching staff. See AI analysis on your own games. Coaches become evangelists before players see it.",
    longDescription: [
      "This invite-only session gives your coaching team exclusive early access to Courtana's smart court technology.",
      "Each coach plays a full session while the AI analyzes their technique — shot selection, spin rate, placement accuracy, and consistency patterns.",
      "The goal: coaches experience the technology firsthand so they can authentically recommend it to their students.",
      "Includes a full walkthrough of the coaching tools, revenue sharing model, and how to integrate AI analysis into lesson plans."
    ],
    date: "2026-06-08",
    time: "10:00 AM – 12:00 PM",
    pilotWeek: "Week 1 of Pilot",
    price: 0,
    spots: 10,
    spotsTotal: 10,
    category: "Clinic",
    whatsIncluded: ["2-hour smart court session", "AI analysis on your game", "Coaching tools walkthrough", "Revenue model briefing"],
    whoItsFor: "Your coaching staff only — invite required.",
    format: "Guided demo + free play on smart courts with AI analysis running.",
    badge: "Invite Only",
    revenueNote: "Coaches become evangelists — each coach drives $500+/mo in AI analysis revenue",
  },
  {
    id: "open-play-night",
    title: "Open Play Night",
    description: "Weekly open play with smart court features active. Members play free, guests $10. The easiest way to experience Courtana.",
    longDescription: [
      "Weekly open play night with all smart court features running.",
      "Real-time court displays show who's playing, skill levels, and open spots. No more group text chains — just show up, scan in, and Courtana matches you.",
      "Members play free. Guests pay $10 — and get full access to smart court features including instant replay, shot tracking, and the weekly leaderboard.",
      "This is the weekly heartbeat of the Courtana experience at your venue."
    ],
    date: "2026-06-11",
    time: "5:00 PM – 8:00 PM",
    pilotWeek: "Week 3 of Pilot",
    price: 10,
    spots: 40,
    spotsTotal: 40,
    category: "Open Play",
    whatsIncluded: ["3 hours of open play", "Smart court features", "Skill-based matching", "Weekly leaderboard entry"],
    whoItsFor: "All levels. Members free, guests $10.",
    format: "Open rotation. Courtana handles court assignments and skill matching.",
    revenueNote: "$10/guest × 40 spots = $400/night recurring revenue",
  },
  {
    id: "ai-coaching-clinic",
    title: "AI Coaching Clinic: Third Shot Mastery",
    description: "Coach-led drills with AI analysis delivered to each player within 24 hours. $25/player, 16 spots. The first paid AI coaching session.",
    longDescription: [
      "The first paid coaching clinic on smart courts — and the test of the AI coaching revenue model.",
      "Coach-led drills focus on the third shot drop. The AI tracks every attempt — spin, trajectory, landing zone, consistency.",
      "Within 24 hours of the clinic, each player receives a personalized AI analysis report showing their performance, patterns, and specific drills to practice.",
      "Revenue split: 70% coach, 20% venue, 10% Courtana."
    ],
    date: "2026-06-18",
    time: "6:00 PM – 7:30 PM",
    pilotWeek: "Week 3 of Pilot",
    price: 25,
    spots: 16,
    spotsTotal: 16,
    category: "Clinic",
    whatsIncluded: ["90-minute coached clinic", "AI shot analysis", "Personalized report within 24hrs", "Drill progression plan"],
    whoItsFor: "Intermediate players (3.0–4.0) looking to master the third shot drop.",
    format: "4 courts, 4 players per court. Rotating drills with AI tracking every shot.",
    revenueNote: "$25/player × 16 spots = $400/clinic — 70% coach, 20% venue, 10% Courtana",
  },
  {
    id: "community-tournament",
    title: "Community Tournament",
    description: "Multi-day tournament with smart court coverage. Every match recorded, highlights auto-generated, live leaderboard on displays.",
    longDescription: [
      "Your first Courtana-powered tournament. Smart court cameras cover every match on designated courts.",
      "Every match is recorded. Highlights are auto-generated. The live leaderboard runs on court-side displays.",
      "Multiple skill divisions ensure competitive, fun matches at every level. Double elimination brackets with games to 11, win by 2.",
      "Players leave with a highlight reel and a reason to come back."
    ],
    date: "2026-06-27",
    time: "8:00 AM – 6:00 PM",
    pilotWeek: "Week 4 of Pilot",
    price: 40,
    spots: 64,
    spotsTotal: 64,
    category: "Tournament",
    whatsIncluded: ["Tournament play", "Smart court recording", "Auto-generated highlights", "Live leaderboard", "Medals for winners"],
    whoItsFor: "All skill levels — multiple divisions from 3.0 to 5.0+.",
    format: "Double elimination brackets by skill division. Games to 11, win by 2.",
    revenueNote: "$40/player × 64 spots = $2,560 — plus spectator F&B and guest fees",
  },
  {
    id: "friday-night-showcase",
    title: "Friday Night Showcase: Live Broadcast",
    description: "Live broadcast from your courts. Smart court cameras power the on-screen experience. Free to watch, $5 to play.",
    longDescription: [
      "Weekly Friday night showcase with live broadcast from your smart courts.",
      "Players pay $5 to compete — complete with live stats, instant replay, and real-time leaderboard. Spectators watch free.",
      "Smart court cameras broadcast matches to screens inside the venue and online.",
      "This is how smart courts drive walk-in traffic and guest fee revenue."
    ],
    date: "2026-07-03",
    time: "7:00 PM – 10:00 PM",
    pilotWeek: "Week 5 of Pilot",
    price: 5,
    spots: 32,
    spotsTotal: 32,
    category: "Special",
    whatsIncluded: ["Live broadcast", "Smart court recording", "Instant replay", "Leaderboard competition", "Spectator-friendly atmosphere"],
    whoItsFor: "Players ($5 to compete) and spectators (free). All levels welcome.",
    format: "Showcase matches on courts with live broadcast.",
    revenueNote: "$5/player × 32 spots = $160/night + walk-in spectator traffic",
  },
  {
    id: "charity-round-robin",
    title: "Charity Round Robin",
    description: "Friendly round robin with all proceeds donated. Smart courts track every match — awards for Most Aces, Best Rally, and Heart of the Court.",
    longDescription: [
      "Grab a partner and play for a cause. This round robin pairs you with different partners throughout the afternoon.",
      "Every dollar of your $20 donation entry goes directly to a local cause. Courtana's smart courts track every match.",
      "Awards for Most Aces, Best Rally, and the 'Heart of the Court' sportsmanship award — all determined by smart court data.",
      "Light refreshments provided. Medals for the top 3 teams."
    ],
    date: "2026-07-11",
    time: "10:00 AM – 2:00 PM",
    pilotWeek: "Week 6 of Pilot",
    price: 20,
    spots: 24,
    spotsTotal: 24,
    category: "Tournament",
    whatsIncluded: ["4 hours of play", "Partner rotation format", "Medals for top 3", "Smart court stat awards", "Refreshments"],
    whoItsFor: "All skill levels. Balanced teams keep matches competitive and fun.",
    format: "Round robin with rotating partners. 6 rounds, 15-minute matches. Points-based standings.",
  },
];

export const getEventById = (id: string) => events.find((e) => e.id === id);

export const categoryColors: Record<string, string> = {
  "Open Play": "bg-primary/20 text-primary",
  "Clinic": "bg-blue-500/20 text-blue-400",
  "Tournament": "bg-amber-500/20 text-amber-400",
  "Special": "bg-accent/20 text-accent",
};
