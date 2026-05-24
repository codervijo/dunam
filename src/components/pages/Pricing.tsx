import { CheckCircle2 } from "lucide-react";

const tiers = [
  {
    name: "Starter",
    desc: "For small inspection teams just getting off paper.",
    feats: ["Mobile NFPA 10 inspections", "PDF certificates", "Up to 2 technicians", "Email support"],
    cta: "Contact us",
  },
  {
    name: "Growth",
    desc: "For growing fire protection businesses.",
    feats: ["Everything in Starter", "QR code tracking", "Manager dashboard", "Client portal", "Automated certificate delivery", "Up to 10 technicians"],
    cta: "Book a demo",
    featured: true,
  },
  {
    name: "Pro",
    desc: "For larger teams and multi-location clients.",
    feats: ["Everything in Growth", "Advanced reporting & exports", "Multi-location clients", "Custom branding", "Priority support", "Unlimited technicians"],
    cta: "Contact us",
  },
];

export function Pricing() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-5">
        <div className="max-w-2xl">
          <div className="text-xs font-semibold uppercase tracking-widest text-primary">Pricing</div>
          <h1 className="mt-2 text-4xl md:text-5xl font-semibold tracking-tight">Pricing that fits how you actually work.</h1>
          <p className="mt-4 text-lg text-muted-foreground">Pick the tier that matches your team today. Move up as you grow — no surprise per-inspection fees.</p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {tiers.map((t) => (
            <div key={t.name} className={`rounded-2xl p-6 border ${t.featured ? "bg-card border-primary shadow-lg" : "bg-card border-border"}`}>
              {t.featured && (
                <div className="inline-block text-[10px] uppercase tracking-widest bg-primary text-primary-foreground rounded-full px-2 py-0.5 mb-3">Most popular</div>
              )}
              <div className="text-xl font-semibold">{t.name}</div>
              <div className="text-sm text-muted-foreground mt-1">{t.desc}</div>
              <div className="mt-5 text-sm text-muted-foreground">Custom pricing</div>
              <a
                href="mailto:hello@dunam.co"
                className={`mt-5 inline-flex w-full items-center justify-center rounded-md px-4 py-2.5 text-sm font-medium ${
                  t.featured ? "bg-primary text-primary-foreground" : "border border-border bg-card hover:bg-surface"
                }`}
              >
                {t.cta}
              </a>
              <ul className="mt-6 space-y-2 text-sm">
                {t.feats.map((f) => (
                  <li key={f} className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-success" /> {f}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 rounded-2xl border border-border bg-card p-8 text-center">
          <h2 className="text-2xl font-semibold">Need something custom?</h2>
          <p className="mt-2 text-muted-foreground">Multi-state operations, enterprise SSO, or custom integrations — let's talk.</p>
          <a href="mailto:hello@dunam.co" className="mt-5 inline-flex items-center rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground">Contact sales</a>
        </div>
      </div>
    </section>
  );
}
