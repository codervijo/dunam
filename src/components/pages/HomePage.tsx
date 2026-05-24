import {
  QrCode, ClipboardCheck, FileText, Send, LayoutDashboard,
  ShieldCheck, History, FileSearch, AlertTriangle,
  CheckCircle2, Calendar, Users, Activity, ArrowRight, Flame,
  Signature, MapPin,
} from "lucide-react";

export function HomePage() {
  return (
    <>
      <Hero />
      <Pain />
      <Product />
      <HowItWorks />
      <Technician />
      <ManagerDashboard />
      <ClientPortal />
      <PricingPreview />
      <FinalCTA />
    </>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-surface to-background" />
      <div className="mx-auto max-w-7xl px-5 pt-16 pb-20 lg:pt-24 lg:pb-28 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-muted-foreground">
            <ShieldCheck className="h-3.5 w-3.5 text-primary" /> Built for NFPA 10 compliance
          </div>
          <h1 className="mt-5 text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-foreground">
            Fire extinguisher inspections <span className="text-primary">without the paperwork.</span>
          </h1>
          <p className="mt-5 text-lg text-muted-foreground max-w-xl">
            Dunam helps fire inspection companies run NFPA 10 inspections, track extinguishers with QR codes,
            generate certificates, and send records to clients — automatically.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#cta" className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground hover:opacity-95">
              Book a demo <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#how" className="inline-flex items-center gap-2 rounded-md border border-border bg-card px-5 py-3 text-sm font-medium text-foreground hover:bg-surface">
              See how it works
            </a>
          </div>
          <div className="mt-8 flex items-center gap-6 text-xs text-muted-foreground">
            <div className="flex items-center gap-1.5"><CheckCircle2 className="h-3.5 w-3.5 text-success" /> NFPA 10 ready</div>
            <div className="flex items-center gap-1.5"><CheckCircle2 className="h-3.5 w-3.5 text-success" /> Works offline</div>
            <div className="flex items-center gap-1.5"><CheckCircle2 className="h-3.5 w-3.5 text-success" /> Bring your own clients</div>
          </div>
        </div>

        <HeroVisual />
      </div>
    </section>
  );
}

function HeroVisual() {
  return (
    <div className="relative">
      <div className="relative mx-auto w-[280px] rounded-[2.5rem] border-8 border-nav bg-card shadow-2xl">
        <div className="rounded-[1.9rem] overflow-hidden">
          <div className="bg-nav text-nav-foreground px-4 py-3 flex items-center justify-between text-[11px]">
            <span>9:41</span>
            <span className="font-medium">Dunam</span>
            <span>●●●</span>
          </div>
          <div className="p-4 space-y-3">
            <div className="rounded-xl bg-surface p-3 border border-border">
              <div className="text-[10px] uppercase tracking-wide text-muted-foreground">Scanning</div>
              <div className="mt-2 flex items-center gap-3">
                <div className="h-14 w-14 rounded-lg bg-primary/10 grid place-items-center text-primary">
                  <QrCode className="h-7 w-7" />
                </div>
                <div>
                  <div className="text-sm font-medium">EXT-04287</div>
                  <div className="text-[11px] text-muted-foreground">5lb ABC · Kitchen #2</div>
                </div>
              </div>
            </div>
            <div className="rounded-xl border border-success/30 bg-success/10 p-3 text-sm flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-success" />
              <span className="font-medium text-foreground">Inspection complete</span>
            </div>
            <div className="rounded-xl border border-border bg-card p-3 text-sm flex items-center gap-2">
              <FileText className="h-4 w-4 text-primary" />
              <span>PDF certificate generated</span>
            </div>
            <div className="rounded-xl border border-border bg-card p-3 text-sm flex items-center gap-2">
              <Send className="h-4 w-4 text-primary" />
              <span>Client notified · Riverside Café</span>
            </div>
          </div>
        </div>
      </div>

      <div className="hidden md:block absolute -left-6 top-12 rotate-[-6deg] rounded-md bg-warning px-3 py-2 text-xs font-semibold text-warning-foreground shadow-lg border border-black/10">
        <div className="text-[9px] uppercase tracking-widest opacity-70">Inspection tag</div>
        DEC 2025 · TECH #14
      </div>
      <div className="hidden md:block absolute -right-2 bottom-6 rotate-[5deg] rounded-md bg-card border border-border px-3 py-2 text-xs shadow-lg">
        <div className="flex items-center gap-1.5"><Flame className="h-3 w-3 text-primary" /> 142 extinguishers tracked</div>
      </div>
    </div>
  );
}

function SectionTitle({ kicker, title, sub }: { kicker?: string; title: string; sub?: string }) {
  return (
    <div className="max-w-2xl">
      {kicker && <div className="text-xs font-semibold uppercase tracking-widest text-primary">{kicker}</div>}
      <h2 className="mt-2 text-3xl md:text-4xl font-semibold tracking-tight text-foreground">{title}</h2>
      {sub && <p className="mt-3 text-muted-foreground text-lg">{sub}</p>}
    </div>
  );
}

function Pain() {
  const items = [
    { icon: FileSearch, t: "Lost or messy inspection records" },
    { icon: Send, t: "Slow certificate delivery" },
    { icon: History, t: "Hard-to-track extinguisher history" },
    { icon: ClipboardCheck, t: "Repeated admin work after every job" },
    { icon: AlertTriangle, t: "Clients asking for documents you already completed" },
  ];
  return (
    <section className="py-20 bg-surface border-y border-border">
      <div className="mx-auto max-w-7xl px-5">
        <SectionTitle kicker="The problem" title="Still running inspections on paper?" />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {items.map((i) => (
            <div key={i.t} className="rounded-xl bg-card border border-border p-5">
              <i.icon className="h-5 w-5 text-primary" />
              <div className="mt-3 text-sm font-medium text-foreground">{i.t}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Product() {
  const features = [
    { icon: ClipboardCheck, t: "Mobile NFPA 10 checklists", d: "Standardized inspection forms your techs can fill out from any phone." },
    { icon: QrCode, t: "QR code extinguisher tracking", d: "Tag every extinguisher once and scan it on every visit." },
    { icon: History, t: "Digital inspection history", d: "See every inspection, every photo, every signature in one timeline." },
    { icon: FileText, t: "Automatic PDF certificates", d: "Branded certificates generated and stored the second a job is complete." },
    { icon: LayoutDashboard, t: "Manager dashboard", d: "See jobs, technicians, failed inspections and upcoming service due dates." },
    { icon: Users, t: "Read-only client portal", d: "Give clients self-serve access to their compliance records." },
  ];
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-5">
        <SectionTitle kicker="Product" title="Built for fire inspection workflows" />
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div key={f.t} className="rounded-2xl bg-card border border-border p-6 hover:border-primary/40 transition">
              <div className="h-10 w-10 rounded-lg bg-primary/10 grid place-items-center text-primary">
                <f.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-semibold text-foreground">{f.t}</h3>
              <p className="mt-1.5 text-sm text-muted-foreground">{f.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    { icon: QrCode, t: "Scan the extinguisher", d: "Point your phone camera at the QR sticker. Dunam pulls up the unit's history instantly." },
    { icon: ClipboardCheck, t: "Complete the inspection checklist", d: "Walk through the NFPA 10 checklist. Mark pass/fail, attach photos, add notes." },
    { icon: FileText, t: "Generate the certificate", d: "A branded PDF certificate is created automatically with technician signature and timestamp." },
    { icon: Send, t: "Send records to the client", d: "Clients are notified by email and can access records anytime in their portal." },
  ];
  return (
    <section id="how" className="py-20 bg-surface border-y border-border">
      <div className="mx-auto max-w-7xl px-5">
        <SectionTitle kicker="How it works" title="From clipboard to client in four steps." />
        <ol className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <li key={s.t} className="relative rounded-2xl bg-card border border-border p-6">
              <div className="absolute -top-3 left-6 inline-flex h-7 w-7 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs font-semibold">
                {i + 1}
              </div>
              <s.icon className="h-6 w-6 text-primary mt-1" />
              <h3 className="mt-3 font-semibold text-foreground">{s.t}</h3>
              <p className="mt-1.5 text-sm text-muted-foreground">{s.d}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function Technician() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-5 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <SectionTitle
            kicker="For technicians"
            title="Simple enough for the field"
            sub="Dunam is designed for technicians working in warehouses, restaurants, schools, offices, and job sites — not for people sitting at a desk all day."
          />
          <ul className="mt-6 space-y-3 text-sm">
            {[
              "Big tap targets and offline mode",
              "Auto-saved progress between buildings",
              "One-tap pass / fail with photo capture",
              "Tech signature and certificate in seconds",
            ].map((t) => (
              <li key={t} className="flex items-center gap-2 text-foreground">
                <CheckCircle2 className="h-4 w-4 text-success" /> {t}
              </li>
            ))}
          </ul>
          <a href="/technician-demo" className="mt-8 inline-flex items-center gap-2 rounded-md border border-border bg-card px-5 py-3 text-sm font-medium hover:bg-surface">
            Try the technician demo <ArrowRight className="h-4 w-4" />
          </a>
        </div>
        <TechnicianMock />
      </div>
    </section>
  );
}

function TechnicianMock() {
  return (
    <div className="grid grid-cols-2 gap-4">
      <div className="rounded-2xl bg-card border border-border p-4 shadow-sm">
        <div className="text-xs text-muted-foreground">Today's jobs</div>
        <div className="mt-3 space-y-2 text-sm">
          {[
            { n: "Riverside Café", e: "8 extinguishers", s: "In progress" },
            { n: "Lincoln Elementary", e: "23 extinguishers", s: "Scheduled" },
            { n: "Acme Warehouse #4", e: "41 extinguishers", s: "Scheduled" },
          ].map((j) => (
            <div key={j.n} className="rounded-lg bg-surface px-3 py-2 border border-border">
              <div className="font-medium text-foreground">{j.n}</div>
              <div className="text-[11px] text-muted-foreground flex justify-between">
                <span>{j.e}</span><span>{j.s}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="rounded-2xl bg-card border border-border p-4 shadow-sm">
        <div className="text-xs text-muted-foreground">EXT-04287 · 5lb ABC</div>
        <div className="mt-2 text-sm font-medium text-foreground">Inspection checklist</div>
        <div className="mt-3 space-y-1.5 text-xs">
          {["Pressure gauge in green", "Seal & tamper indicator intact", "No corrosion or damage", "Mounting & signage", "Accessibility clear"].map((c) => (
            <div key={c} className="flex items-center gap-2 rounded-md bg-surface px-2 py-1.5 border border-border">
              <CheckCircle2 className="h-3.5 w-3.5 text-success" /> {c}
            </div>
          ))}
        </div>
        <div className="mt-3 flex items-center justify-between rounded-md bg-success/10 border border-success/30 px-3 py-2 text-xs font-medium text-foreground">
          <span>Status</span><span className="text-success">PASS</span>
        </div>
        <div className="mt-3 flex items-center gap-2 rounded-md border border-dashed border-border px-3 py-2 text-xs text-muted-foreground">
          <Signature className="h-3.5 w-3.5" /> Sign to generate certificate
        </div>
        <button className="mt-3 w-full rounded-md bg-primary py-2 text-xs font-medium text-primary-foreground">
          Generate certificate
        </button>
      </div>
    </div>
  );
}

function ManagerDashboard() {
  const stats = [
    { icon: ClipboardCheck, t: "Jobs completed today", v: "14" },
    { icon: AlertTriangle, t: "Failed inspections", v: "3" },
    { icon: Send, t: "Certificates sent", v: "112" },
    { icon: Calendar, t: "Upcoming service due", v: "27" },
    { icon: Activity, t: "Technicians active", v: "6 / 8" },
  ];
  return (
    <section className="py-20 bg-surface border-y border-border">
      <div className="mx-auto max-w-7xl px-5">
        <SectionTitle kicker="Manager dashboard" title="Know what was inspected, where, and when." />
        <div className="mt-10 grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {stats.map((s) => (
            <div key={s.t} className="rounded-xl bg-card border border-border p-5">
              <s.icon className="h-5 w-5 text-primary" />
              <div className="mt-3 text-2xl font-semibold text-foreground">{s.v}</div>
              <div className="text-xs text-muted-foreground mt-1">{s.t}</div>
            </div>
          ))}
        </div>
        <div className="mt-6">
          <a href="/dashboard" className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline">
            Open the demo dashboard <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

function ClientPortal() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-5 grid lg:grid-cols-2 gap-12 items-center">
        <div className="order-2 lg:order-1 rounded-2xl bg-card border border-border p-6 shadow-sm">
          <div className="flex items-center justify-between border-b border-border pb-3">
            <div>
              <div className="text-xs text-muted-foreground">Client portal</div>
              <div className="font-semibold">Riverside Café</div>
            </div>
            <span className="rounded-full bg-success/10 text-success border border-success/30 px-2 py-0.5 text-xs font-medium">Compliant</span>
          </div>
          <div className="mt-4 space-y-2 text-sm">
            {[
              { d: "Dec 12, 2025", n: "Annual inspection · 8 units", s: "PASS" },
              { d: "Jun 04, 2025", n: "Monthly check · 8 units", s: "PASS" },
              { d: "Mar 18, 2025", n: "Hydrostatic test · 2 units", s: "PASS" },
            ].map((r) => (
              <div key={r.d} className="flex items-center justify-between rounded-lg bg-surface px-3 py-2 border border-border">
                <div>
                  <div className="font-medium text-foreground">{r.n}</div>
                  <div className="text-xs text-muted-foreground">{r.d}</div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-xs text-success font-semibold">{r.s}</span>
                  <FileText className="h-4 w-4 text-muted-foreground" />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="order-1 lg:order-2">
          <SectionTitle
            kicker="Client portal"
            title="Give clients access without extra emails."
            sub="Clients can view certificates, inspection history, and compliance records from a simple read-only portal."
          />
          <a href="/client-portal-demo" className="mt-6 inline-flex items-center gap-2 rounded-md border border-border bg-card px-5 py-3 text-sm font-medium hover:bg-surface">
            View client portal demo <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

function PricingPreview() {
  const tiers = [
    { name: "Starter", desc: "For small inspection teams", feats: ["Mobile NFPA 10 inspections", "PDF certificates", "Up to 2 technicians"] },
    { name: "Growth", desc: "For growing fire protection businesses", feats: ["QR code tracking", "Manager dashboard", "Client portal", "Automated delivery"], featured: true },
    { name: "Pro", desc: "For larger teams", feats: ["Advanced reporting", "Multi-location clients", "Priority support", "Unlimited technicians"] },
  ];
  return (
    <section className="py-20 bg-surface border-y border-border">
      <div className="mx-auto max-w-7xl px-5">
        <SectionTitle kicker="Pricing" title="Pricing that fits how you actually work." />
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {tiers.map((t) => (
            <div
              key={t.name}
              className={`rounded-2xl p-6 border ${t.featured ? "bg-card border-primary shadow-lg" : "bg-card border-border"}`}
            >
              {t.featured && (
                <div className="inline-block text-[10px] uppercase tracking-widest bg-primary text-primary-foreground rounded-full px-2 py-0.5 mb-3">
                  Most popular
                </div>
              )}
              <div className="text-lg font-semibold">{t.name}</div>
              <div className="text-sm text-muted-foreground mt-1">{t.desc}</div>
              <ul className="mt-5 space-y-2 text-sm">
                {t.feats.map((f) => (
                  <li key={f} className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-success" /> {f}</li>
                ))}
              </ul>
              <a
                href="#cta"
                className={`mt-6 inline-flex w-full items-center justify-center rounded-md px-4 py-2.5 text-sm font-medium ${
                  t.featured
                    ? "bg-primary text-primary-foreground"
                    : "border border-border bg-card hover:bg-surface"
                }`}
              >
                {t.featured ? "Book a demo" : "Contact us"}
              </a>
            </div>
          ))}
        </div>
        <div className="mt-6 text-center">
          <a href="/pricing" className="text-sm font-medium text-primary hover:underline">See full pricing details →</a>
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section id="cta" className="py-20">
      <div className="mx-auto max-w-5xl px-5">
        <div className="rounded-3xl bg-nav text-nav-foreground p-10 md:p-14 relative overflow-hidden">
          <div className="absolute -right-10 -bottom-10 opacity-10">
            <Flame className="h-64 w-64" />
          </div>
          <div className="relative">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight max-w-2xl">
              Ready to get rid of paper inspection records?
            </h2>
            <p className="mt-3 text-nav-foreground/70 max-w-xl">
              See how Dunam works for your team in a 20-minute walkthrough. No setup required.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a href="mailto:hello@dunam.co" className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground">
                Book a demo <ArrowRight className="h-4 w-4" />
              </a>
              <a href="/technician-demo" className="inline-flex items-center gap-2 rounded-md border border-white/20 px-5 py-3 text-sm font-medium hover:bg-white/5">
                <MapPin className="h-4 w-4" /> Tour the product
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
