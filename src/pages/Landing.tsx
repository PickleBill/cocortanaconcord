import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Camera, Megaphone, Brain, Gamepad2, Users, Radio,
  ArrowRight, Mail, BarChart3, ExternalLink, Zap, MessageSquareQuote,
  ChevronDown, CheckCircle
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import EcosystemFlywheel from "@/components/partners/EcosystemFlywheel";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.12 } },
};

const stats = [
  { value: "8", label: "Indoor Courts" },
  { value: "$0", label: "Upfront Cost" },
  { value: "8", label: "Week Pilot" },
  { value: "1", label: "Camera Per Court" },
];

const quotes = [
  "Members keep asking me for footage and I've got one GoPro cable-tied to the wall. I don't want to go find clips and send them to people.",
  "Nobody's making money from pickleball. Show me the numbers and I'll look at it — but the last thing I want to do is spend more money.",
  "If it can pay for itself and I don't have to deal with it, I'm interested.",
];

const valueProps = [
  { icon: Camera, title: "No More GoPro on the Wall", desc: "One PTZ camera per court replaces the cable-tied GoPro. Auto-generated highlights. Members get their clips without you lifting a finger. QR code sign-up, highlights delivered automatically." },
  { icon: Megaphone, title: "Events That Make Money", desc: "Queen City Open on smart courts? Every match recorded, highlights auto-generated, live leaderboard. Players pay more for the experience. You keep the revenue — we handle the tech." },
  { icon: Brain, title: "AI Coaching = New Revenue", desc: "$20-25 per AI video review. A new tier between free tips and $80/hr lessons. Revenue split: 70% to coach, 20% to Concord, 10% to Courtana. Your first clinic pays for the month." },
  { icon: Gamepad2, title: "Gamification That Retains", desc: "Badges, XP, leaderboards, trick shot recognition. The thing that makes members renew instead of leaving after the novelty wears off. Retention is where you make money." },
  { icon: Users, title: "Highlights Members Will Pay For", desc: "10 free highlights to hook them. Then they pay per clip. The members already asking you for footage? Now they get it instantly and you earn from it." },
  { icon: Radio, title: "Your Screens, Working For You", desc: "Court-side displays show player stats, leaderboards, and instant replay. Down the road, sponsored content from local businesses — turning your TVs into a revenue stream." },
];

const weeks = [
  {
    num: 1, title: "Install + Staff Preview", focus: "LAUNCH", color: "bg-purple-500/20 text-purple-400",
    desc: "Install cameras on your pilot courts. Configure displays. Run a private demo for your coaching staff — they see AI analysis on their own games before anyone else. Coaches become evangelists before players ever see it.",
    deliverables: [
      { text: "Hardware installed", link: null },
      { text: "Staff training session", link: null },
      { text: "Baseline metrics captured", link: "/dashboard" },
      { text: "Launch date confirmed", link: null },
    ],
  },
  {
    num: 2, title: "Community Launch Event", focus: "EVENTS", color: "bg-amber-500/20 text-amber-400",
    desc: "Your first Courtana-powered event. Open play night with live highlights on the big screens, player sign-ups, gamification preview. Free entry for members, small fee for guests. We promote through our network + your member list.",
    deliverables: [
      { text: "Launch event", link: "/events" },
      { text: "Player accounts created", link: "/dashboard" },
      { text: "First highlights generated", link: null },
      { text: "Social content captured", link: null },
    ],
  },
  {
    num: 3, title: "Coaching Clinic Series", focus: "EVENTS", color: "bg-amber-500/20 text-amber-400",
    desc: "First paid coaching clinic on smart courts. Coach-led drills with AI analysis delivered to each player. $25-40/player, 12-16 spots. Revenue split kicks in immediately. This validates the AI coaching revenue model.",
    deliverables: [
      { text: "Paid clinic revenue", link: null },
      { text: "AI analysis reports", link: null },
      { text: "Coach feedback loop", link: null },
      { text: "Revenue model tested", link: "/dashboard" },
    ],
  },
  {
    num: 4, title: "Tournament Integration", focus: "EVENTS", color: "bg-amber-500/20 text-amber-400",
    desc: "Courtana cameras go live on tournament courts. Every match recorded, highlights auto-generated, live leaderboard on displays. Players leave with shareable highlight reels and a reason to come back.",
    deliverables: [
      { text: "Tournament coverage", link: "/events" },
      { text: "Highlight reels", link: null },
      { text: "Live leaderboard", link: "/dashboard" },
      { text: "Social content engine", link: null },
    ],
  },
  {
    num: 5, title: "Signature Event", focus: "LAUNCH", color: "bg-purple-500/20 text-purple-400",
    desc: "Your big moment. We help plan and co-promote a signature event — could be a grand opening, a pro-am, a themed night. Courtana powers the on-screen experience: player stats, instant replay, live broadcast. This is the event people talk about.",
    deliverables: [
      { text: "Flagship event", link: "/events" },
      { text: "Live broadcast", link: null },
      { text: "Press/social coverage", link: null },
      { text: "Membership spike tracking", link: "/dashboard" },
    ],
  },
  {
    num: 6, title: "Gamification Goes Live", focus: "DATA", color: "bg-cyan-500/20 text-cyan-400",
    desc: "Full gamification system: badges, XP, achievement tracking, weekly leaderboard, trick shot recognition. Players start earning status and competing for spots on the board. This is the retention engine — the thing that keeps them coming back in month 2 and beyond.",
    deliverables: [
      { text: "Gamification system live", link: null },
      { text: "Engagement tracking", link: "/dashboard" },
      { text: "Leaderboard competition", link: null },
      { text: "Repeat visit data", link: "/dashboard" },
    ],
  },
  {
    num: 7, title: "Matchmaking + Open Play", focus: "GROWTH", color: "bg-primary/20 text-primary",
    desc: "Skill-based matchmaking and open play optimization. Real-time court displays show availability and skill levels. 'Find Your Fourth' feature goes live. Guest fees for non-members who discover your venue through Courtana.",
    deliverables: [
      { text: "Matchmaking active", link: null },
      { text: "Open play displays", link: "/schedule" },
      { text: "Guest fee revenue", link: "/dashboard" },
      { text: "Network growth", link: null },
    ],
  },
  {
    num: 8, title: "The Numbers", focus: "REVIEW", color: "bg-red-500/20 text-red-400",
    desc: "ROI review with your team. Court utilization data, event revenue, coaching income, player engagement, highlights generated. Clear picture of what continuing and expanding looks like. The numbers make the decision for you.",
    deliverables: [
      { text: "ROI dashboard", link: "/dashboard" },
      { text: "Expansion proposal", link: null },
      { text: "Growth plan", link: null },
      { text: "Go/No-Go decision", link: null },
    ],
  },
];

const revenueStreams = [
  { name: "Premium court pricing", conservative: "$200–400", realistic: "$500–900", upside: "$900–1,500" },
  { name: "AI coaching revenue", conservative: "$300–600", realistic: "$800–1,500", upside: "$1,500–2,500" },
  { name: "Events & tournaments", conservative: "$150–400", realistic: "$400–800", upside: "$800–1,500" },
  { name: "Walk-in / guest fees", conservative: "$50–200", realistic: "$200–500", upside: "$500–1,000" },
  { name: "Open play optimization", conservative: "$50–150", realistic: "$150–400", upside: "$400–800" },
];

const Landing = () => {
  const [expandedWeek, setExpandedWeek] = useState<number | null>(null);

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-36 pb-28 px-4 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] rounded-full opacity-20" style={{ background: "radial-gradient(ellipse, hsl(145 100% 45% / 0.3), transparent 70%)" }} />
          <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] rounded-full opacity-10" style={{ background: "radial-gradient(circle, hsl(48 100% 50% / 0.3), transparent 70%)" }} />
        </div>

        <div className="container mx-auto text-center max-w-5xl relative z-10">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary/10 border border-primary/20 mb-10">
              <span className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse" />
              <span className="text-base font-semibold text-primary tracking-wide">Partnership Preview</span>
            </motion.div>

            <motion.h1 variants={fadeInUp} className="text-foreground mb-6" style={{ fontSize: "clamp(3rem, 7vw, 5rem)", fontWeight: 800, lineHeight: 1.05, letterSpacing: "-0.02em" }}>
              Courtana × <span className="text-gradient-green">Concord Pickleball</span>
            </motion.h1>

            <motion.p variants={fadeInUp} className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed">
              Smart courts. Real data. Zero risk. Here's what the first 8 weeks look like.
            </motion.p>

            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-5 justify-center">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-xl px-10 py-6 text-lg font-bold glow-green" asChild>
                <a href="#plan">
                  See the Plan
                  <ArrowRight size={20} className="ml-2" />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="border-border text-foreground hover:bg-secondary rounded-xl px-10 py-6 text-lg font-bold" asChild>
                <Link to="/partners">Explore the Ecosystem</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-12 border-y border-border bg-card/30">
        <div className="container mx-auto px-4">
          <motion.div className="grid grid-cols-2 md:grid-cols-4 gap-6" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            {stats.map((s) => (
              <motion.div key={s.label} variants={fadeInUp} className="glass rounded-2xl p-6 text-center glow-green">
                <div className="text-4xl md:text-5xl font-extrabold text-gradient-green mb-2">{s.value}</div>
                <div className="text-base text-muted-foreground font-medium">{s.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* What We Heard */}
      <section className="py-24 px-4">
        <div className="container mx-auto max-w-5xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-10">
              <MessageSquareQuote className="text-primary" size={28} />
              <h2 className="text-2xl md:text-3xl font-extrabold text-foreground">What We Heard</h2>
            </motion.div>
            <div className="grid md:grid-cols-3 gap-6 mb-6">
              {quotes.map((q, i) => (
                <motion.div key={i} variants={fadeInUp} className="glass rounded-2xl p-6 border-l-4 border-l-primary">
                  <p className="text-foreground text-base leading-relaxed italic">"{q}"</p>
                </motion.div>
              ))}
            </div>
            <motion.p variants={fadeInUp} className="text-sm text-muted-foreground">
              From our visit with <span className="text-foreground font-semibold">Chris Williams</span>, Concord Pickleball
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Value Props */}
      <section className="py-24 px-4 bg-card/50">
        <div className="container mx-auto max-w-6xl">
          <motion.h2 className="text-foreground text-center mb-4 font-extrabold" style={{ fontSize: "clamp(2rem, 5vw, 3rem)", lineHeight: 1.15 }} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
            Built for Your Venue
          </motion.h2>
          <motion.p className="text-lg text-muted-foreground text-center mb-14 max-w-xl mx-auto" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
            Every feature designed around your facility, your coaches, and your players.
          </motion.p>
          <motion.div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            {valueProps.map((v) => (
              <motion.div key={v.title} variants={fadeInUp} className="glass rounded-2xl p-8 glow-green-hover transition-all duration-300 hover:-translate-y-1">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                  <v.icon className="text-primary" size={28} />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{v.title}</h3>
                <p className="text-base text-muted-foreground leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 8-Week Timeline */}
      <section id="plan" className="py-24 px-4">
        <div className="container mx-auto max-w-4xl">
          <motion.h2 className="text-foreground text-center mb-4 font-extrabold" style={{ fontSize: "clamp(2rem, 5vw, 3rem)", lineHeight: 1.15 }} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
            The 8-Week Playbook
          </motion.h2>
          <motion.p className="text-lg text-muted-foreground text-center mb-14 max-w-xl mx-auto" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
            Each week builds on the last. By week 8, you'll have hard data on ROI.
          </motion.p>
          <motion.div className="space-y-4 relative" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={stagger}>
            <div className="absolute left-7 top-0 bottom-0 w-px bg-border hidden md:block" />
            {weeks.map((w) => {
              const isOpen = expandedWeek === w.num;
              return (
                <motion.div key={w.num} variants={fadeInUp} className="flex gap-6">
                  <div className="hidden md:flex flex-col items-center">
                    <div className="w-14 h-14 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center text-primary font-bold text-base flex-shrink-0 z-10">
                      {w.num}
                    </div>
                  </div>
                  <div
                    className={`glass rounded-2xl flex-1 transition-all duration-300 cursor-pointer ${isOpen ? "ring-1 ring-primary/30" : "glow-green-hover hover:-translate-y-0.5"}`}
                    onClick={() => setExpandedWeek(isOpen ? null : w.num)}
                  >
                    <div className="p-6 md:p-8">
                      <div className="flex items-center gap-3 mb-1 flex-wrap">
                        <span className="md:hidden w-10 h-10 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center text-primary font-bold text-sm flex-shrink-0">
                          {w.num}
                        </span>
                        <h3 className="text-lg font-bold text-foreground flex-1">{w.title}</h3>
                        <span className={`text-xs px-3 py-1 rounded-full font-bold uppercase tracking-wider ${w.color}`}>{w.focus}</span>
                        <ChevronDown size={18} className={`text-muted-foreground transition-transform ${isOpen ? "rotate-180" : ""}`} />
                      </div>

                      <AnimatePresence>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            <p className="text-base text-muted-foreground mb-5 leading-relaxed mt-3">{w.desc}</p>
                            <div className="flex flex-wrap gap-2">
                              {w.deliverables.map((d) =>
                                d.link ? (
                                  <Link
                                    key={d.text}
                                    to={d.link}
                                    onClick={(e) => e.stopPropagation()}
                                    className="text-sm px-4 py-1.5 rounded-full bg-primary/10 text-primary border border-primary/20 font-medium hover:bg-primary/20 transition-colors"
                                  >
                                    {d.text} →
                                  </Link>
                                ) : (
                                  <span key={d.text} className="text-sm px-4 py-1.5 rounded-full bg-secondary text-muted-foreground font-medium">
                                    {d.text}
                                  </span>
                                )
                              )}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>

                      {!isOpen && (
                        <p className="text-sm text-muted-foreground mt-1 line-clamp-2">{w.desc}</p>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Economics */}
      <section className="py-24 px-4 bg-card/50">
        <div className="container mx-auto max-w-5xl">
          <motion.h2 className="text-foreground text-center mb-14 font-extrabold" style={{ fontSize: "clamp(2rem, 5vw, 3rem)", lineHeight: 1.15 }} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
            The Economics
          </motion.h2>
          <motion.div className="grid md:grid-cols-3 gap-8 mb-14" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            {[
              { label: "Your Investment During Pilot", value: "$0", sub: "Cameras, software, event support — we install everything, we pay for everything. 8 weeks." },
              { label: "After the Pilot", value: "$95/court/mo", sub: "4 courts = $380/month. 8 courts = $760/month. Your first coaching clinic covers it." },
              { label: "Projected New Revenue", value: "$1,400+/mo", sub: "From premium court pricing, AI coaching, highlight sales, and event revenue.", gold: true },
            ].map((m) => (
              <motion.div key={m.label} variants={fadeInUp} className={`glass rounded-2xl p-8 text-center ${m.gold ? "border-accent/30 glow-green" : ""}`}>
                <div className="text-sm text-muted-foreground mb-3 font-medium">{m.label}</div>
                <div className={`font-extrabold mb-3 ${m.gold ? "text-gradient-gold" : "text-foreground"}`} style={{ fontSize: "clamp(2rem, 5vw, 3rem)" }}>{m.value}</div>
                <div className="text-sm text-muted-foreground leading-relaxed">{m.sub}</div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div className="glass rounded-2xl overflow-x-auto mb-4" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left p-5 text-muted-foreground font-semibold text-base">Revenue Stream</th>
                  <th className="text-right p-5 text-muted-foreground font-semibold text-base">Conservative</th>
                  <th className="text-right p-5 text-muted-foreground font-semibold text-base">Realistic</th>
                  <th className="text-right p-5 text-muted-foreground font-semibold text-base">Upside</th>
                </tr>
              </thead>
              <tbody>
                {revenueStreams.map((r) => (
                  <tr key={r.name} className="border-b border-border/50">
                    <td className="p-5 text-foreground text-sm font-medium">{r.name}</td>
                    <td className="p-5 text-right text-muted-foreground text-base">{r.conservative}</td>
                    <td className="p-5 text-right text-foreground text-base">{r.realistic}</td>
                    <td className="p-5 text-right text-primary font-bold text-base">{r.upside}</td>
                  </tr>
                ))}
                <tr className="bg-primary/5">
                  <td className="p-5 font-bold text-foreground text-lg">Total Monthly</td>
                  <td className="p-5 text-right font-bold text-muted-foreground text-lg">$750–1,750</td>
                  <td className="p-5 text-right font-bold text-foreground text-lg">$2,050–4,100</td>
                  <td className="p-5 text-right font-bold text-primary text-lg">$4,100–7,300</td>
                </tr>
              </tbody>
            </table>
          </motion.div>
          <motion.p className="text-sm text-muted-foreground italic mb-10 text-center" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
            Exact projections depend on your facility size, membership count, court pricing, and event programming. We build your model together during Week 1.
          </motion.p>

          {/* Zero Risk Box */}
          <motion.div className="glass rounded-2xl p-8 border-primary/20 glow-green" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
            <h3 className="text-xl font-bold text-foreground mb-3 flex items-center gap-2">
              <Zap className="text-primary" size={22} />
              Zero Risk
            </h3>
            <p className="text-base text-muted-foreground leading-relaxed">
              Start with 4 courts. One camera each. Zero hardware cost. No subscription during the 8-week pilot. After that, 4 courts at $95/month = $380. Your first AI coaching clinic makes that back in a single session. If the numbers don't work, we pull everything. The only risk is dealing with one more GoPro request from a member.
            </p>
          </motion.div>
        </div>
      </section>

      {/* What a Partnership Looks Like */}
      <section className="py-24 px-4">
        <div className="container mx-auto max-w-5xl">
          <motion.h2 className="text-foreground text-center mb-14 font-extrabold" style={{ fontSize: "clamp(2rem, 5vw, 3rem)", lineHeight: 1.15 }} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
            What a Partnership Looks Like
          </motion.h2>
          <motion.div className="grid md:grid-cols-2 gap-8 mb-8" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.div variants={fadeInUp} className="glass rounded-2xl p-8 border-l-4 border-l-primary">
              <h3 className="text-lg font-bold text-foreground mb-5 flex items-center gap-2">
                <CheckCircle className="text-primary" size={20} />
                What Courtana Brings
              </h3>
              <ul className="space-y-3">
                {[
                  "Smart court hardware (cameras, displays) — installed free",
                  "AI analysis engine + player app",
                  "Event planning + co-promotion for 3 anchor events",
                  "Co-branded marketing (social content, email campaigns)",
                  "Revenue processing via Stripe",
                  "Weekly performance reports",
                  "Dedicated partner success contact",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div variants={fadeInUp} className="glass rounded-2xl p-8 border-l-4 border-l-border">
              <h3 className="text-lg font-bold text-foreground mb-5 flex items-center gap-2">
                <CheckCircle className="text-muted-foreground" size={20} />
                What We'd Love From You
              </h3>
              <ul className="space-y-3">
                {[
                  "4-6 courts designated for smart court install",
                  "Coaching staff intro session (1 hour)",
                  "Permission for \"Powered by Courtana\" signage on smart courts",
                  "One email to your member list about the launch",
                  "15-min bi-weekly check-in during pilot",
                  "Honest feedback on what's working",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground mt-2 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
          <motion.p className="text-center text-muted-foreground text-sm italic" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
            This is a partnership, not a purchase order. We both invest, we both win.
          </motion.p>
        </div>
      </section>

      {/* Case Study: Peak Pickleball */}
      <section className="py-24 px-4 bg-card/50">
        <div className="container mx-auto max-w-4xl">
          <motion.div className="glass rounded-2xl p-8 md:p-10 border border-accent/30" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
            <span className="text-sm font-bold px-4 py-1.5 rounded-full bg-accent/20 text-accent inline-block mb-5">🏆 Flagship Partner</span>
            <h3 className="text-2xl md:text-3xl font-extrabold text-foreground mb-4">Peak Pickleball — 35 courts, 250 members</h3>
            <p className="text-base text-muted-foreground leading-relaxed mb-6">
              Peak launched their Courtana pilot in spring 2026. Within the first month: a 300-player tournament with live highlights on 4 courts, AI coaching clinics generating new revenue per session, and a grand opening event that became the talk of the local pickleball community.
            </p>
            <Button variant="outline" className="border-accent/30 text-accent hover:bg-accent/10 rounded-xl font-bold" asChild>
              <a href="https://courtana-venue-connect.lovable.app" target="_blank" rel="noopener noreferrer">
                See Peak's Portal →
              </a>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Part of Something Bigger */}
      <section className="py-24 px-4">
        <div className="container mx-auto max-w-5xl">
          <motion.div className="glass rounded-2xl p-8 md:p-12 bg-card/80" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div className="flex justify-center">
                <EcosystemFlywheel compact />
              </div>
              <div>
                <h3 className="text-2xl font-extrabold text-foreground mb-4">Part of Something Bigger</h3>
                <p className="text-base text-muted-foreground leading-relaxed mb-6">
                  When you partner with Courtana, you're not just getting cameras on your courts. You're joining a network of venues, coaches, brands, and players — all connected through smart court technology. Every highlight shared, every badge earned, every event booked strengthens the entire ecosystem.
                </p>
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-xl font-bold" asChild>
                  <Link to="/partners">
                    Explore the Ecosystem →
                  </Link>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 px-4 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full opacity-15" style={{ background: "radial-gradient(ellipse, hsl(145 100% 45% / 0.4), transparent 70%)" }} />
        </div>
        <div className="container mx-auto max-w-3xl text-center relative z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.h2 variants={fadeInUp} className="text-foreground mb-4 font-extrabold" style={{ fontSize: "clamp(2rem, 5vw, 3rem)", lineHeight: 1.15 }}>
              Let's prove it works — together.
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto">
              The pilot starts the moment you say yes. Hardware installed in days. First event within the week.
            </motion.p>
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center flex-wrap">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-xl px-8 py-6 text-lg font-bold glow-green gap-3" asChild>
                <a href="mailto:bill@courtana.com">
                  <Mail size={20} />
                  Start a Conversation
                </a>
              </Button>
              <Button size="lg" variant="outline" className="border-border text-foreground hover:bg-secondary rounded-xl px-8 py-6 text-lg font-bold gap-3" asChild>
                <Link to="/partners">
                  <Users size={20} />
                  View the Ecosystem
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-border text-foreground hover:bg-secondary rounded-xl px-8 py-6 text-lg font-bold gap-3" asChild>
                <Link to="/dashboard">
                  <BarChart3 size={20} />
                  Pilot Dashboard
                </Link>
              </Button>
            </motion.div>
            <motion.div variants={fadeInUp} className="mt-8">
              <a href="https://courtana.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-base">
                Learn more at courtana.com
                <ExternalLink size={16} />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Landing;
