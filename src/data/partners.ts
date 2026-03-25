import { Monitor, GraduationCap, Swords, ShoppingBag, Users, FlaskConical, Rocket, MapPin, Star, Heart, Megaphone, type LucideIcon } from "lucide-react";

export type PartnerCategory = "Core Platform" | "Coaching" | "Community" | "Equipment" | "Technology" | "Agency" | "Venue" | "Influencer" | "Health & Wellness" | "Marketing";
export type PartnerStatus = "Live" | "In Development" | "Coming Soon" | "Open Slot";

export interface Partner {
  name: string;
  category: PartnerCategory;
  categories?: PartnerCategory[];
  url: string;
  status: PartnerStatus;
  description: string;
  connection: string;
  icon: LucideIcon;
}

export interface WeekPartner {
  label: string;
  partnerName: string;
  url: string;
}

export const partners: Partner[] = [
  {
    name: "Courtana Smart Courts",
    category: "Core Platform",
    url: "https://courtana.com",
    status: "Live",
    description: "AI-powered smart court technology — cameras, sensors, and real-time analytics for every point played.",
    connection: "The engine powering the entire ecosystem. Every partner feature runs on Courtana data.",
    icon: Monitor,
  },
  {
    name: "Peak Pickleball",
    category: "Venue",
    categories: ["Community"],
    url: "https://peakpickleball.club/",
    status: "Live",
    description: "Flagship venue partner — 35 courts, 250 members, full smart court deployment.",
    connection: "The first venue to go live with Courtana. Proof that the model works at scale.",
    icon: MapPin,
  },
  {
    name: "Underground Pickleball",
    category: "Venue",
    categories: ["Community"],
    url: "https://courtana.com/highlight-group/TuuqWPwc26EO",
    status: "Live",
    description: "Community-driven venue bringing the energy — featured highlights powered by Courtana smart courts.",
    connection: "Venue partner with live highlights, Shot of the Day, and community engagement through smart court tech.",
    icon: MapPin,
  },
  {
    name: "Concord Pickleball",
    category: "Venue",
    url: "",
    status: "Coming Soon",
    description: "Next venue partner in the Courtana network — launching soon.",
    connection: "New venue partnership bringing smart court tech to the Concord community.",
    icon: MapPin,
  },
  {
    name: "Urban Pickleball ATX",
    category: "Venue",
    url: "https://www.pickleheads.com/courts/us/texas/austin/urban-pickleball-club",
    status: "Coming Soon",
    description: "Austin's premier indoor pickleball destination — joining the Courtana network soon.",
    connection: "Pipeline venue partner bringing smart court technology to the Austin pickleball community.",
    icon: MapPin,
  },
  {
    name: "Seven Oaks",
    category: "Venue",
    url: "",
    status: "Coming Soon",
    description: "Another venue joining the Courtana network — details coming soon.",
    connection: "Pipeline venue partner expanding the Courtana footprint.",
    icon: MapPin,
  },
  {
    name: "Racket Science",
    category: "Coaching",
    url: "https://racketscience.lovable.app",
    status: "Live",
    description: "Elite Coaching Partners — powered by Courtana analytics and sport science methodology.",
    connection: "Individual coach powered by Courtana analytics. Proof that the platform scales to pros.",
    icon: GraduationCap,
  },
  {
    name: "Courtana Coach Connect",
    category: "Coaching",
    url: "https://courtana-coach-play.lovable.app",
    status: "Live",
    description: "The coaching marketplace connecting certified pros with venues and players.",
    connection: "Coaches book through venues, teach on smart courts, and use AI insights to personalize lessons.",
    icon: GraduationCap,
  },
  {
    name: "Capital City Pickleball",
    category: "Community",
    url: "https://www.capitalcitypickleball.com/",
    status: "Live",
    description: "Community organization fostering competitive and recreational pickleball across the region.",
    connection: "Community partner driving player engagement, events, and Courtana-powered highlights.",
    icon: Users,
  },
  {
    name: "Paddles & Pals",
    category: "Community",
    url: "https://paddles-and-pals.lovable.app",
    status: "Live",
    description: "The social hub for recreational pickleball — meetups, groups, and community-first play.",
    connection: "Feeds players into venue events. Community layer that drives repeat visits and group bookings.",
    icon: Users,
  },
  {
    name: "Bryant (Padel Bryant)",
    category: "Influencer",
    url: "https://www.instagram.com/padelbryant/",
    status: "Live",
    description: "Content creator and influencer bringing pickleball culture to a wider audience.",
    connection: "Influencer partner amplifying Courtana-powered highlights and venue experiences across social media.",
    icon: Star,
  },
  {
    name: "StretchLab",
    category: "Health & Wellness",
    url: "https://www.stretchlab.com/",
    status: "Live",
    description: "Assisted stretching and recovery services — helping players stay on the court longer.",
    connection: "Health & wellness partner offering recovery services at Courtana-powered venues.",
    icon: Heart,
  },
  {
    name: "Freakshow Paddles",
    category: "Equipment",
    url: "https://freakfosho.lovable.app",
    status: "Live",
    description: "Bold, high-performance custom paddles for players who refuse to blend in.",
    connection: "Equipment sponsor for launch events. Players demo paddles at Courtana-powered venues.",
    icon: Swords,
  },
  {
    name: "Layup Lab",
    category: "Technology",
    url: "https://layuplab.lovable.app",
    status: "Live",
    description: "Advanced analytics and training platform — deep dives into shot patterns, fitness metrics, and improvement tracking.",
    connection: "Analytics layer for serious players. Data flows from smart courts into personalized training plans.",
    icon: FlaskConical,
  },
  {
    name: "VibeCo Labs",
    category: "Agency",
    url: "https://vibeco.lovable.app",
    status: "Live",
    description: "The builder behind the ecosystem. Zero-to-one websites, brands, and digital products — shipped in hours.",
    connection: "Builds partner sites, marketing assets, and MVPs. The agency flywheel powering ecosystem growth.",
    icon: Rocket,
  },
];

export const openSlots: { name: string; category: PartnerCategory }[] = [
  { name: "Your Brand Here", category: "Equipment" },
  { name: "Tournament Organizer", category: "Community" },
  { name: "Beverage Sponsor", category: "Equipment" },
  { name: "Apparel Partner", category: "Equipment" },
];

export const weekPartners: Record<number, WeekPartner> = {
  1: { label: "Sponsored by", partnerName: "Freakshow Paddles", url: "https://freakfosho.lovable.app" },
  2: { label: "Hosted by", partnerName: "Coach Connect", url: "https://courtana-coach-play.lovable.app" },
  3: { label: "Community by", partnerName: "Paddles & Pals", url: "https://paddles-and-pals.lovable.app" },
  4: { label: "Powered by", partnerName: "Courtana Smart Courts", url: "https://courtana.com" },
  5: { label: "Analytics by", partnerName: "Layup Lab", url: "https://layuplab.lovable.app" },
  6: { label: "Featured Coach", partnerName: "Racket Science", url: "https://racketscience.lovable.app" },
  7: { label: "Powered by", partnerName: "Courtana AI", url: "https://courtana.com" },
  8: { label: "Built by", partnerName: "VibeCo Labs", url: "https://vibeco.lovable.app" },
};
