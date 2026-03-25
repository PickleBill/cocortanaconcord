import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Clock, Users, DollarSign, Search, TrendingUp } from "lucide-react";
import { format, parseISO } from "date-fns";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { events, categoryColors } from "@/data/events";

const categories = ["All", "Clinic", "Tournament", "Open Play", "Special"];

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

const Events = () => {
  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");

  const featured = events.find((e) => e.featured);
  const regularEvents = events.filter((e) => !e.featured);

  const filtered = useMemo(() => {
    return regularEvents.filter((e) => {
      const matchCat = filter === "All" || e.category === filter;
      const matchSearch = e.title.toLowerCase().includes(search.toLowerCase());
      return matchCat && matchSearch;
    });
  }, [filter, search, regularEvents]);

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-24 pb-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
            <h1 className="section-title text-foreground mb-2">Event Templates — Courtana × <span className="text-gradient-green">Concord</span></h1>
            <p className="text-muted-foreground mb-8">These events are included in your pilot. We customize timing, pricing, and format to your venue.</p>
          </motion.div>

          {/* Featured Event */}
          {featured && (
            <motion.div initial="hidden" animate="visible" variants={fadeInUp} className="mb-10">
              <div className="glass rounded-2xl overflow-hidden glow-green border-primary/20">
                <div className="relative h-56 bg-gradient-to-br from-primary/20 via-card to-accent/10 flex items-center justify-center">
                  <div className="text-center">
                    <span className="text-sm font-bold px-4 py-1.5 rounded-full bg-accent/20 text-accent mb-3 inline-block">{featured.badge}</span>
                    <h2 className="text-2xl md:text-3xl font-extrabold text-foreground px-4">{featured.title}</h2>
                  </div>
                </div>
                <div className="p-8">
                  <p className="text-base text-muted-foreground mb-5 leading-relaxed">{featured.description}</p>
                  <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground mb-6">
                    <span className="flex items-center gap-1.5"><Clock size={16} /> {featured.time}</span>
                    <span className="flex items-center gap-1.5"><Users size={16} /> {featured.spots} spots</span>
                    <span className="flex items-center gap-1.5"><DollarSign size={16} /> {featured.price === 0 ? "Free" : `$${featured.price}`}</span>
                  </div>
                  <Button variant="outline" className="border-primary/30 text-primary hover:bg-primary/10 rounded-xl px-8 py-5 text-base font-bold" asChild>
                    <Link to={`/events/${featured.id}`}>
                      Book Your Spot
                    </Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          )}

          {/* Filters */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <div className="flex gap-2 flex-wrap">
              {categories.map((c) => (
                <button
                  key={c}
                  onClick={() => setFilter(c)}
                  className={`px-4 py-2 rounded-xl text-sm font-medium transition-colors ${
                    filter === c
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
            <div className="relative sm:ml-auto">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={16} />
              <Input
                placeholder="Search events..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-9 bg-secondary border-border rounded-xl w-full sm:w-60"
              />
            </div>
          </div>

          {/* Grid */}
          <motion.div
            className="grid md:grid-cols-2 gap-6"
            initial="hidden"
            animate="visible"
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          >
            {filtered.map((event) => (
              <motion.div key={event.id} variants={fadeInUp}>
                <div className="glass rounded-2xl overflow-hidden glow-green-hover transition-all duration-300 hover:-translate-y-0.5 group">
                  <div className="relative h-44 bg-gradient-to-br from-secondary to-card flex items-center justify-center">
                    <div className="flex flex-col items-center gap-2">
                      <span className={`text-xs font-bold px-3 py-1 rounded-full ${categoryColors[event.category]}`}>
                        {event.category}
                      </span>
                      {event.badge && (
                        <span className="text-xs font-bold px-3 py-1 rounded-full bg-accent/20 text-accent">{event.badge}</span>
                      )}
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="font-bold text-foreground text-lg mb-2 group-hover:text-primary transition-colors">{event.title}</h3>
                    <p className="text-sm text-muted-foreground line-clamp-2 mb-4">{event.description}</p>
                    <div className="flex flex-wrap gap-x-4 gap-y-2 text-xs text-muted-foreground mb-4">
                      <span className="flex items-center gap-1"><Clock size={14} /> {event.time.split("–")[0].trim()}</span>
                      <span className="flex items-center gap-1"><Users size={14} /> {event.spots} spots</span>
                      <span className="flex items-center gap-1"><DollarSign size={14} /> {event.price === 0 ? "Free" : `$${event.price}`}</span>
                    </div>
                    {event.revenueNote && (
                      <div className="flex items-start gap-2 p-3 rounded-xl bg-primary/5 border border-primary/10 mb-4">
                        <TrendingUp size={14} className="text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-xs text-primary font-medium">{event.revenueNote}</span>
                      </div>
                    )}
                    <Button variant="outline" className="w-full border-primary/30 text-primary hover:bg-primary/10 rounded-xl" asChild>
                      <Link to={`/events/${event.id}`}>
                        Book Your Spot
                      </Link>
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {filtered.length === 0 && (
            <div className="text-center py-20 text-muted-foreground">
              No events found. Try a different filter.
            </div>
          )}

          {/* Bottom CTA */}
          <motion.div className="mt-16 text-center glass rounded-2xl p-10" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
            <h3 className="text-xl font-bold text-foreground mb-3">Want to customize these for Concord?</h3>
            <p className="text-muted-foreground mb-6">We handle the tech, booking, and payments. You bring the players.</p>
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-xl px-8 font-bold" asChild>
              <a href="mailto:bill@courtana.com">Get in Touch</a>
            </Button>
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Events;
