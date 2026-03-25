import { motion } from "framer-motion";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from "recharts";
import { Activity, DollarSign, Users, Camera, ExternalLink, Target, Info } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};
const stagger = { visible: { transition: { staggerChildren: 0.1 } } };

const utilizationData = [
  { week: "Wk 1", courtana: 45, standard: 42 },
  { week: "Wk 2", courtana: 52, standard: 43 },
  { week: "Wk 3", courtana: 58, standard: 41 },
  { week: "Wk 4", courtana: 63, standard: 44 },
  { week: "Wk 5", courtana: 67, standard: 42 },
  { week: "Wk 6", courtana: 72, standard: 43 },
  { week: "Wk 7", courtana: 75, standard: 44 },
  { week: "Wk 8", courtana: 78, standard: 43 },
];

const revenueBySource = [
  { name: "Court Premium", value: 600 },
  { name: "Coaching", value: 1000 },
  { name: "Events", value: 500 },
  { name: "Walk-ins", value: 300 },
  { name: "AI Reviews", value: 250 },
];

const pilotEvents = [
  { name: "Launch Event", date: "Week 2", capacity: 200, registered: 0, revenue: "$0", status: "Planned" },
  { name: "Staff Preview", date: "Week 1", capacity: 10, registered: 0, revenue: "$0", status: "Planned" },
  { name: "Open Play Night", date: "Week 2+", capacity: 40, registered: 0, revenue: "$0", status: "Planned" },
  { name: "AI Coaching Clinic", date: "Week 3", capacity: 16, registered: 0, revenue: "$0", status: "Planned" },
  { name: "Community Tournament", date: "Week 4", capacity: 64, registered: 0, revenue: "$0", status: "Planned" },
  { name: "Friday Night Showcase", date: "Week 5+", capacity: 32, registered: 0, revenue: "$0", status: "Planned" },
  { name: "Charity Round Robin", date: "Week 6", capacity: 24, registered: 0, revenue: "$0", status: "Planned" },
];

const statusColors: Record<string, string> = {
  "Planned": "bg-blue-500/20 text-blue-400",
  "Upcoming": "bg-amber-500/20 text-amber-400",
  "Registration Open": "bg-primary/20 text-primary",
  "Sold Out": "bg-red-500/20 text-red-400",
};

const Dashboard = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-24 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          {/* Header */}
          <motion.div initial="hidden" animate="visible" variants={stagger} className="mb-10">
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h1 className="section-title text-foreground">
                  Concord Pickleball — <span className="text-gradient-green">Pilot Dashboard</span>
                </h1>
                <div className="flex items-center gap-3 mt-2">
                  <span className="text-xs px-3 py-1 rounded-full bg-blue-500/20 text-blue-400 font-bold">Preview Mode</span>
                  <span className="text-sm text-muted-foreground">Dates TBD — pending kickoff</span>
                </div>
              </div>
              <a href="https://courtana.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-primary/10 border border-primary/20 text-sm text-primary hover:bg-primary/20 transition-colors">
                <ExternalLink size={14} />
                Powered by courtana.com
              </a>
            </motion.div>
          </motion.div>

          {/* Preview Banner */}
          <motion.div
            className="glass rounded-2xl p-6 mb-8 border-l-4 border-l-primary bg-primary/5"
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
          >
            <div className="flex items-start gap-3">
              <Info className="text-primary flex-shrink-0 mt-0.5" size={20} />
              <p className="text-sm text-muted-foreground leading-relaxed">
                This dashboard goes live the moment we install cameras. During the pilot, you'll see real-time data on court utilization, event revenue, player engagement, and coaching income.
              </p>
            </div>
          </motion.div>

          {/* KPIs */}
          <motion.div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8" initial="hidden" animate="visible" variants={stagger}>
            {[
              { label: "Sessions Recorded", value: "0", icon: Camera, sub: "Awaiting pilot launch" },
              { label: "Highlights Generated", value: "0", icon: Activity, sub: "Awaiting pilot launch" },
              { label: "Event Revenue", value: "$0", icon: DollarSign, sub: "Awaiting pilot launch", accent: true },
              { label: "Player Accounts", value: "0", icon: Users, sub: "Awaiting pilot launch" },
            ].map((k) => (
              <motion.div key={k.label} variants={fadeInUp} className={`glass rounded-2xl p-5 ${k.accent ? "border-accent/30 glow-green" : ""}`}>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs text-muted-foreground uppercase tracking-wider font-bold">{k.label}</span>
                  <k.icon size={16} className={k.accent ? "text-accent" : "text-primary"} />
                </div>
                <div className={`text-3xl font-extrabold ${k.accent ? "text-gradient-gold" : "text-foreground"}`}>{k.value}</div>
                <div className="text-xs text-muted-foreground mt-1">{k.sub}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Charts */}
          <div className="grid lg:grid-cols-2 gap-6 mb-8">
            <motion.div className="glass rounded-2xl p-6" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
              <h3 className="font-bold text-foreground mb-1">Court Utilization</h3>
              <p className="text-xs text-muted-foreground mb-4">Courtana Courts vs Standard Courts (%)</p>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={utilizationData}>
                    <defs>
                      <linearGradient id="colorUtil" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="hsl(145, 100%, 45%)" stopOpacity={0.3} />
                        <stop offset="95%" stopColor="hsl(145, 100%, 45%)" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(215, 20%, 15%)" />
                    <XAxis dataKey="week" tick={{ fill: "hsl(215, 16%, 62%)", fontSize: 11 }} axisLine={false} tickLine={false} />
                    <YAxis tick={{ fill: "hsl(215, 16%, 62%)", fontSize: 11 }} axisLine={false} tickLine={false} tickFormatter={(v) => `${v}%`} />
                    <Tooltip contentStyle={{ backgroundColor: "hsl(220, 26%, 10%)", border: "1px solid hsl(215, 20%, 15%)", borderRadius: 12, fontSize: 12 }} />
                    <Area type="monotone" dataKey="courtana" stroke="hsl(145, 100%, 45%)" fill="url(#colorUtil)" strokeWidth={2} name="Courtana Courts" />
                    <Area type="monotone" dataKey="standard" stroke="hsl(215, 16%, 47%)" fill="transparent" strokeWidth={1.5} strokeDasharray="4 4" name="Standard Courts" />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </motion.div>

            <motion.div className="glass rounded-2xl p-6" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
              <h3 className="font-bold text-foreground mb-1">Revenue by Source</h3>
              <p className="text-xs text-muted-foreground mb-4">Projected monthly breakdown</p>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={revenueBySource}>
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(215, 20%, 15%)" />
                    <XAxis dataKey="name" tick={{ fill: "hsl(215, 16%, 62%)", fontSize: 10 }} axisLine={false} tickLine={false} />
                    <YAxis tick={{ fill: "hsl(215, 16%, 62%)", fontSize: 11 }} axisLine={false} tickLine={false} tickFormatter={(v) => `$${v}`} />
                    <Tooltip contentStyle={{ backgroundColor: "hsl(220, 26%, 10%)", border: "1px solid hsl(215, 20%, 15%)", borderRadius: 12, fontSize: 12 }} />
                    <Bar dataKey="value" fill="hsl(145, 100%, 45%)" radius={[6, 6, 0, 0]} name="Revenue" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </motion.div>
          </div>

          {/* Event Performance */}
          <motion.div className="glass rounded-2xl overflow-hidden mb-8" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
            <div className="p-6 pb-0">
              <h3 className="font-bold text-foreground mb-1">Event Performance</h3>
              <p className="text-xs text-muted-foreground mb-4">All pilot events — registration and revenue tracking</p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left p-4 text-muted-foreground font-semibold">Event</th>
                    <th className="text-left p-4 text-muted-foreground font-semibold">Date</th>
                    <th className="text-right p-4 text-muted-foreground font-semibold">Capacity</th>
                    <th className="text-right p-4 text-muted-foreground font-semibold">Registered</th>
                    <th className="text-right p-4 text-muted-foreground font-semibold">Revenue</th>
                    <th className="text-right p-4 text-muted-foreground font-semibold">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {pilotEvents.map((ev) => (
                    <tr key={ev.name} className="border-b border-border/50 hover:bg-secondary/30 transition-colors">
                      <td className="p-4 text-foreground font-medium">{ev.name}</td>
                      <td className="p-4 text-muted-foreground">{ev.date}</td>
                      <td className="p-4 text-right text-foreground">{ev.capacity}</td>
                      <td className="p-4 text-right text-foreground">{ev.registered}</td>
                      <td className="p-4 text-right text-primary font-semibold">{ev.revenue}</td>
                      <td className="p-4 text-right">
                        <span className={`text-xs px-3 py-1 rounded-full font-bold ${statusColors[ev.status] || ""}`}>{ev.status}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>

          {/* Pilot Scorecard */}
          <motion.div className="glass rounded-2xl p-8" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-bold text-foreground text-lg flex items-center gap-2">
                <Target className="text-primary" size={20} />
                Pilot Scorecard
              </h3>
              <span className="text-xs px-4 py-1.5 rounded-full bg-blue-500/20 text-blue-400 font-bold">Preview</span>
            </div>
            <div className="grid sm:grid-cols-3 gap-6">
              {[
                { target: "15% utilization lift", current: "Measuring..." },
                { target: "$1,400/mo revenue lift", current: "Pilot in progress" },
                { target: "50+ player accounts", current: "0 accounts" },
              ].map((s) => (
                <div key={s.target} className="bg-secondary/50 rounded-xl p-5">
                  <div className="text-xs text-muted-foreground uppercase tracking-wider font-bold mb-2">Target</div>
                  <div className="text-base font-bold text-foreground mb-3">{s.target}</div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wider font-bold mb-1">Current</div>
                  <div className="text-sm text-muted-foreground">{s.current}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Dashboard;
