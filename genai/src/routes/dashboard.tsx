import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import {
  ClipboardCheck, AlertTriangle, Send, Calendar, Activity,
  CheckCircle2, XCircle, MapPin, Flame,
} from "lucide-react";

export const Route = createFileRoute("/dashboard")({
  head: () => ({ meta: [{ title: "Dashboard demo — Dunam" }] }),
  component: Dashboard,
});

const stats = [
  { icon: ClipboardCheck, t: "Jobs completed today", v: "14", sub: "+3 vs yesterday" },
  { icon: AlertTriangle, t: "Failed inspections", v: "3", sub: "Needs follow-up" },
  { icon: Send, t: "Certificates sent", v: "112", sub: "This week" },
  { icon: Calendar, t: "Upcoming service due", v: "27", sub: "Next 30 days" },
  { icon: Activity, t: "Technicians active", v: "6 / 8", sub: "Right now" },
];

const jobs = [
  { id: "J-2041", client: "Riverside Café", loc: "Sacramento, CA", tech: "M. Alvarez", units: 8, status: "Complete", pass: true },
  { id: "J-2042", client: "Lincoln Elementary", loc: "Stockton, CA", tech: "D. Park", units: 23, status: "In progress", pass: true },
  { id: "J-2043", client: "Acme Warehouse #4", loc: "Reno, NV", tech: "J. Kim", units: 41, status: "Scheduled", pass: true },
  { id: "J-2038", client: "Mid-Town Hotel", loc: "Sacramento, CA", tech: "M. Alvarez", units: 17, status: "Complete", pass: false },
  { id: "J-2037", client: "Bayside Marina", loc: "Oakland, CA", tech: "L. Owens", units: 12, status: "Complete", pass: true },
];

const upcoming = [
  { client: "Sunrise Diner", what: "Annual NFPA 10 inspection", when: "Dec 18" },
  { client: "Lincoln Elementary", what: "Monthly visual check", when: "Dec 20" },
  { client: "Acme Warehouse #4", what: "Hydrostatic test (2 units)", when: "Jan 04" },
];

function Dashboard() {
  return (
    <SiteLayout>
      <section className="py-10">
        <div className="mx-auto max-w-7xl px-5">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <div className="text-xs font-semibold uppercase tracking-widest text-primary">Manager dashboard · Demo</div>
              <h1 className="mt-1 text-3xl font-semibold">Good morning, Dana</h1>
              <p className="text-sm text-muted-foreground">Here's what's happening across your team today.</p>
            </div>
            <Link to="/" className="text-sm text-muted-foreground hover:text-foreground">← Back to site</Link>
          </div>

          <div className="mt-8 grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            {stats.map((s) => (
              <div key={s.t} className="rounded-xl bg-card border border-border p-5">
                <s.icon className="h-5 w-5 text-primary" />
                <div className="mt-3 text-2xl font-semibold">{s.v}</div>
                <div className="text-xs text-muted-foreground">{s.t}</div>
                <div className="text-[11px] text-muted-foreground mt-1">{s.sub}</div>
              </div>
            ))}
          </div>

          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            <div className="lg:col-span-2 rounded-2xl bg-card border border-border overflow-hidden">
              <div className="p-5 border-b border-border flex items-center justify-between">
                <div className="font-semibold">Recent jobs</div>
                <div className="text-xs text-muted-foreground">Last 24 hours</div>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead className="bg-surface text-muted-foreground text-xs uppercase tracking-wide">
                    <tr>
                      <th className="text-left px-5 py-3">Job</th>
                      <th className="text-left px-5 py-3">Client</th>
                      <th className="text-left px-5 py-3">Technician</th>
                      <th className="text-left px-5 py-3">Units</th>
                      <th className="text-left px-5 py-3">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {jobs.map((j) => (
                      <tr key={j.id} className="border-t border-border">
                        <td className="px-5 py-3 font-medium">{j.id}</td>
                        <td className="px-5 py-3">
                          <div>{j.client}</div>
                          <div className="text-xs text-muted-foreground flex items-center gap-1"><MapPin className="h-3 w-3" />{j.loc}</div>
                        </td>
                        <td className="px-5 py-3">{j.tech}</td>
                        <td className="px-5 py-3">{j.units}</td>
                        <td className="px-5 py-3">
                          <div className="flex items-center gap-2">
                            <span className={`inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-xs font-medium ${
                              j.status === "Complete" ? "bg-success/10 text-success border border-success/30" :
                              j.status === "In progress" ? "bg-warning/20 text-warning-foreground border border-warning/40" :
                              "bg-surface text-muted-foreground border border-border"
                            }`}>{j.status}</span>
                            {j.status === "Complete" && (j.pass ? (
                              <CheckCircle2 className="h-4 w-4 text-success" />
                            ) : (
                              <XCircle className="h-4 w-4 text-destructive" />
                            ))}
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="space-y-6">
              <div className="rounded-2xl bg-card border border-border p-5">
                <div className="font-semibold flex items-center gap-2"><Calendar className="h-4 w-4 text-primary" /> Upcoming service due</div>
                <div className="mt-3 space-y-2 text-sm">
                  {upcoming.map((u) => (
                    <div key={u.client} className="rounded-lg bg-surface border border-border px-3 py-2">
                      <div className="font-medium">{u.client}</div>
                      <div className="text-xs text-muted-foreground">{u.what}</div>
                      <div className="text-[11px] mt-0.5 text-primary font-medium">{u.when}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="rounded-2xl bg-card border border-border p-5">
                <div className="font-semibold flex items-center gap-2"><Flame className="h-4 w-4 text-primary" /> Failed inspections</div>
                <div className="mt-3 text-sm space-y-2">
                  <div className="rounded-lg bg-destructive/5 border border-destructive/30 px-3 py-2">
                    <div className="font-medium">EXT-04210 · Mid-Town Hotel</div>
                    <div className="text-xs text-muted-foreground">Pressure gauge below operating range</div>
                  </div>
                  <div className="rounded-lg bg-destructive/5 border border-destructive/30 px-3 py-2">
                    <div className="font-medium">EXT-04188 · Mid-Town Hotel</div>
                    <div className="text-xs text-muted-foreground">Tamper seal broken</div>
                  </div>
                  <div className="rounded-lg bg-destructive/5 border border-destructive/30 px-3 py-2">
                    <div className="font-medium">EXT-03104 · Bayside Marina</div>
                    <div className="text-xs text-muted-foreground">Corrosion on cylinder base</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
