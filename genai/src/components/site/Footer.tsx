import { Link } from "@tanstack/react-router";
import { Flame } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-nav text-nav-foreground mt-24">
      <div className="mx-auto max-w-7xl px-5 py-12 grid gap-8 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2 font-semibold text-lg">
            <span className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-primary text-primary-foreground">
              <Flame className="h-4 w-4" />
            </span>
            Dunam
          </div>
          <p className="mt-3 text-sm text-nav-foreground/70 max-w-sm">
            Fire safety compliance software for inspection companies.
          </p>
        </div>
        <div className="text-sm">
          <div className="font-medium mb-3">Product</div>
          <ul className="space-y-2 text-nav-foreground/70">
            <li><Link to="/features">Features</Link></li>
            <li><Link to="/pricing">Pricing</Link></li>
            <li><Link to="/technician-demo">Technician demo</Link></li>
            <li><Link to="/client-portal-demo">Client portal</Link></li>
          </ul>
        </div>
        <div className="text-sm">
          <div className="font-medium mb-3">Company</div>
          <ul className="space-y-2 text-nav-foreground/70">
            <li><a href="#cta">Contact</a></li>
            <li><Link to="/login">Login</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-xs text-nav-foreground/50">
        © {new Date().getFullYear()} Dunam. All rights reserved.
      </div>
    </footer>
  );
}
