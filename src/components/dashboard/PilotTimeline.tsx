import { motion } from "framer-motion";
import { Calendar } from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const timelineWeeks = [
  { week: 1, events: ["Staff Preview"] },
  { week: 2, events: ["Launch Event", "Open Play"] },
  { week: 3, events: ["AI Coaching Clinic"] },
  { week: 4, events: ["Community Tournament"] },
  { week: 5, events: ["Friday Showcase"] },
  { week: 6, events: ["Charity Round Robin"] },
  { week: 7, events: ["Matchmaking Live"] },
  { week: 8, events: ["ROI Review"] },
];

const eventColors: Record<string, string> = {
  "Staff Preview": "bg-blue-500/20 text-blue-400",
  "Launch Event": "bg-purple-500/20 text-purple-400",
  "Open Play": "bg-primary/20 text-primary",
  "AI Coaching Clinic": "bg-blue-500/20 text-blue-400",
  "Community Tournament": "bg-amber-500/20 text-amber-400",
  "Friday Showcase": "bg-accent/20 text-accent",
  "Charity Round Robin": "bg-amber-500/20 text-amber-400",
  "Matchmaking Live": "bg-primary/20 text-primary",
  "ROI Review": "bg-red-500/20 text-red-400",
};

const PilotTimeline = () => {
  return (
    <motion.div
      className="glass rounded-2xl p-6"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeInUp}
    >
      <div className="flex items-center gap-2 mb-1">
        <Calendar size={18} className="text-primary" />
        <h3 className="font-bold text-foreground">Pilot Timeline</h3>
      </div>
      <p className="text-xs text-muted-foreground mb-5">8-week rollout — dates confirmed after kickoff</p>

      <div className="flex gap-1">
        {timelineWeeks.map((w) => (
          <div key={w.week} className="flex-1 min-w-0">
            <div className="h-2 rounded-full bg-primary/20 mb-2" />
            <div className="text-center">
              <span className="text-[10px] font-bold text-muted-foreground block">Wk {w.week}</span>
              <div className="mt-1.5 space-y-1">
                {w.events.map((ev) => (
                  <span
                    key={ev}
                    className={`block text-[9px] font-bold px-1 py-0.5 rounded ${eventColors[ev] || "bg-secondary text-muted-foreground"} truncate`}
                    title={ev}
                  >
                    {ev}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default PilotTimeline;
