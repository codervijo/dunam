import { Flame, Menu } from "lucide-react";
import { useState } from "react";

const nav = [
  { to: "/features", label: "Features" },
  { to: "/#how", label: "How it works" },
  { to: "/technician-demo", label: "For technicians" },
  { to: "/pricing", label: "Pricing" },
  { to: "/login", label: "Login" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 bg-nav text-nav-foreground border-b border-black/30">
      <div className="mx-auto max-w-7xl px-5 py-3 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2 font-semibold tracking-tight text-lg">
          <span className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-primary text-primary-foreground">
            <Flame className="h-4 w-4" />
          </span>
          Dunam
        </a>
        <nav className="hidden md:flex items-center gap-7 text-sm text-nav-foreground/80">
          {nav.map((n) => (
            <a key={n.to} href={n.to} className="hover:text-nav-foreground transition-colors">
              {n.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <a
            href="/#cta"
            className="hidden sm:inline-flex items-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-95 transition"
          >
            Book a demo
          </a>
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-md hover:bg-white/10"
            aria-label="Menu"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden border-t border-white/10 px-5 py-3 flex flex-col gap-3 text-sm">
          {nav.map((n) => (
            <a key={n.to} href={n.to} className="text-nav-foreground/80">
              {n.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
