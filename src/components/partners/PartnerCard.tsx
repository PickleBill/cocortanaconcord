import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { Partner, PartnerCategory } from "@/data/partners";

const categoryColors: Record<PartnerCategory, string> = {
  "Core Platform": "bg-primary/20 text-primary",
  "Coaching": "bg-amber-500/20 text-amber-400",
  "Community": "bg-purple-500/20 text-purple-400",
  "Equipment": "bg-red-500/20 text-red-400",
  "Technology": "bg-cyan-500/20 text-cyan-400",
  "Agency": "bg-pink-500/20 text-pink-400",
  "Venue": "bg-blue-500/20 text-blue-400",
  "Influencer": "bg-orange-500/20 text-orange-400",
  "Health & Wellness": "bg-rose-500/20 text-rose-400",
  "Marketing": "bg-emerald-500/20 text-emerald-400",
};

const statusColors: Record<string, string> = {
  Live: "bg-primary/20 text-primary",
  "In Development": "bg-amber-500/20 text-amber-400",
  "Coming Soon": "bg-muted text-muted-foreground",
  "Open Slot": "border border-dashed border-border text-muted-foreground",
};

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export const PartnerCard = ({ partner }: { partner: Partner }) => {
  const domain = partner.url ? new URL(partner.url).hostname : null;

  return (
  <motion.div variants={fadeInUp} className="glass rounded-2xl overflow-hidden glow-green-hover transition-all duration-300 hover:-translate-y-1 flex flex-col">
    {/* Visual Header */}
    <div className="h-28 bg-gradient-to-br from-secondary to-card flex items-center justify-center relative">
      {domain ? (
        <img
          src={`https://www.google.com/s2/favicons?domain=${domain}&sz=64`}
          alt={partner.name}
          className="w-16 h-16 rounded-xl bg-background/50 p-2"
        />
      ) : (
        <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center">
          <partner.icon className="text-primary" size={32} />
        </div>
      )}
      <span className={`absolute top-3 right-3 text-xs px-3 py-1 rounded-full font-semibold ${statusColors[partner.status]}`}>
        {partner.status}
      </span>
    </div>
    <div className="p-8 flex flex-col flex-1">
    <h3 className="text-xl font-bold text-foreground mb-1">{partner.name}</h3>
    <div className="flex flex-wrap gap-1.5 mb-4">
      <span className={`inline-block text-xs px-3 py-1 rounded-full font-semibold ${categoryColors[partner.category]}`}>
        {partner.category}
      </span>
      {partner.categories?.map((cat) => (
        <span key={cat} className={`inline-block text-xs px-2.5 py-0.5 rounded-full font-medium opacity-80 ${categoryColors[cat]}`}>
          {cat}
        </span>
      ))}
    </div>
    <p className="text-base text-muted-foreground leading-relaxed mb-4 flex-1">{partner.description}</p>
    <p className="text-sm text-muted-foreground/70 italic mb-6">🔗 {partner.connection}</p>
    {partner.url ? (
      <Button variant="outline" className="border-primary/30 text-primary hover:bg-primary/10 w-full gap-2" asChild>
        <a href={partner.url} target="_blank" rel="noopener noreferrer">
          Visit Site <ExternalLink size={14} />
        </a>
      </Button>
    ) : (
      <Button variant="outline" className="border-border text-muted-foreground w-full" disabled>
        Coming Soon
      </Button>
    )}
    </div>
  </motion.div>
);
};

export const OpenSlotCard = ({ name, category }: { name: string; category: PartnerCategory }) => (
  <motion.div variants={fadeInUp} className="rounded-2xl p-8 border-2 border-dashed border-border/50 flex flex-col items-center justify-center text-center min-h-[280px] hover:border-primary/30 transition-colors">
    <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center mb-4">
      <span className="text-2xl">+</span>
    </div>
    <h3 className="text-lg font-bold text-muted-foreground mb-1">{name}</h3>
    <span className={`text-xs px-3 py-1 rounded-full font-semibold ${categoryColors[category]}`}>{category}</span>
  </motion.div>
);
