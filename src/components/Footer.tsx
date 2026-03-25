import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="border-t border-border py-12">
    <div className="container mx-auto px-4">
      <div className="grid md:grid-cols-3 gap-10 mb-10">
        {/* Col 1: Brand */}
        <div className="flex flex-col items-center md:items-start gap-2">
          <div className="text-xl font-bold tracking-tight">
            <span className="text-gradient-green">Courtana</span>
          </div>
          <p className="text-sm text-muted-foreground">Smart courts. Connected community.</p>
        </div>

        {/* Col 2: Quick Links */}
        <div className="flex flex-col items-center md:items-start gap-2">
          <span className="text-xs text-muted-foreground uppercase tracking-wider font-bold mb-1">Quick Links</span>
          <Link to="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">The Plan</Link>
          <Link to="/events" className="text-sm text-muted-foreground hover:text-primary transition-colors">Events</Link>
          <Link to="/partners" className="text-sm text-muted-foreground hover:text-primary transition-colors">Ecosystem</Link>
          <Link to="/dashboard" className="text-sm text-muted-foreground hover:text-primary transition-colors">Dashboard</Link>
        </div>

        {/* Col 3: Contact */}
        <div className="flex flex-col items-center md:items-start gap-2">
          <span className="text-xs text-muted-foreground uppercase tracking-wider font-bold mb-1">Contact</span>
          <a href="mailto:bill@courtana.com" className="text-sm text-muted-foreground hover:text-primary transition-colors">bill@courtana.com</a>
          <a href="https://courtana.com" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-primary transition-colors">courtana.com</a>
        </div>
      </div>

      <div className="border-t border-border pt-6 text-center">
        <p className="text-xs text-muted-foreground/60">© 2026 Courtana · Built with intention</p>
      </div>
    </div>
  </footer>
);

export default Footer;
