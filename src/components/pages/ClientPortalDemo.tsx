import { FileText, Download, ShieldCheck, MapPin, Calendar } from "lucide-react";

const records = [
  { d: "Dec 12, 2025", n: "Annual inspection · 8 units", tech: "M. Alvarez", s: "PASS" },
  { d: "Jun 04, 2025", n: "Monthly check · 8 units", tech: "D. Park", s: "PASS" },
  { d: "Mar 18, 2025", n: "Hydrostatic test · 2 units", tech: "M. Alvarez", s: "PASS" },
  { d: "Dec 14, 2024", n: "Annual inspection · 8 units", tech: "L. Owens", s: "PASS" },
];

const extinguishers = [
  { id: "EXT-04287", type: "5lb ABC", loc: "Kitchen #2", due: "Jun 2026" },
  { id: "EXT-04288", type: "5lb ABC", loc: "Back of house", due: "Jun 2026" },
  { id: "EXT-04289", type: "K-class", loc: "Hood line", due: "Jun 2026" },
  { id: "EXT-04290", type: "10lb ABC", loc: "Storage room", due: "Jun 2026" },
  { id: "EXT-04291", type: "5lb ABC", loc: "Dining room N", due: "Jun 2026" },
  { id: "EXT-04292", type: "5lb ABC", loc: "Dining room S", due: "Jun 2026" },
  { id: "EXT-04293", type: "CO2", loc: "Server closet", due: "Jun 2026" },
  { id: "EXT-04294", type: "5lb ABC", loc: "Patio entrance", due: "Jun 2026" },
];

export function ClientPortalDemo() {
  return (
    <section className="py-10">
      <div className="mx-auto max-w-6xl px-5">
        <a href="/" className="text-sm text-muted-foreground">← Back to site</a>

        <div className="mt-4 rounded-2xl bg-card border border-border p-6 flex flex-wrap items-center justify-between gap-4">
          <div>
            <div className="text-xs font-semibold uppercase tracking-widest text-primary">Client portal · Demo</div>
            <h1 className="mt-1 text-2xl font-semibold">Riverside Café</h1>
            <div className="text-sm text-muted-foreground flex items-center gap-1"><MapPin className="h-3.5 w-3.5" /> 412 J Street, Sacramento CA</div>
          </div>
          <div className="flex items-center gap-2 rounded-full bg-success/10 text-success border border-success/30 px-3 py-1 text-sm font-medium">
            <ShieldCheck className="h-4 w-4" /> Currently compliant
          </div>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <div className="rounded-xl bg-card border border-border p-5">
            <div className="text-xs text-muted-foreground">Total extinguishers</div>
            <div className="mt-2 text-2xl font-semibold">8</div>
          </div>
          <div className="rounded-xl bg-card border border-border p-5">
            <div className="text-xs text-muted-foreground">Last inspection</div>
            <div className="mt-2 text-2xl font-semibold">Dec 12, 2025</div>
          </div>
          <div className="rounded-xl bg-card border border-border p-5">
            <div className="text-xs text-muted-foreground">Next service due</div>
            <div className="mt-2 text-2xl font-semibold flex items-center gap-2"><Calendar className="h-5 w-5 text-primary" /> Jun 2026</div>
          </div>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl bg-card border border-border overflow-hidden">
            <div className="p-5 border-b border-border font-semibold">Inspection history</div>
            <div className="divide-y divide-border">
              {records.map((r) => (
                <div key={r.d} className="px-5 py-3 flex items-center justify-between">
                  <div>
                    <div className="font-medium text-sm">{r.n}</div>
                    <div className="text-xs text-muted-foreground">{r.d} · {r.tech}</div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-semibold text-success">{r.s}</span>
                    <button className="inline-flex items-center gap-1 rounded-md border border-border px-2.5 py-1.5 text-xs hover:bg-surface">
                      <FileText className="h-3.5 w-3.5" /> PDF
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl bg-card border border-border overflow-hidden">
            <div className="p-5 border-b border-border flex items-center justify-between">
              <div className="font-semibold">Extinguishers</div>
              <button className="inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground">
                <Download className="h-3.5 w-3.5" /> Export
              </button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-surface text-muted-foreground text-xs uppercase tracking-wide">
                  <tr>
                    <th className="text-left px-5 py-2">Tag</th>
                    <th className="text-left px-5 py-2">Type</th>
                    <th className="text-left px-5 py-2">Location</th>
                    <th className="text-left px-5 py-2">Next due</th>
                  </tr>
                </thead>
                <tbody>
                  {extinguishers.map((e) => (
                    <tr key={e.id} className="border-t border-border">
                      <td className="px-5 py-2 font-medium">{e.id}</td>
                      <td className="px-5 py-2">{e.type}</td>
                      <td className="px-5 py-2 text-muted-foreground">{e.loc}</td>
                      <td className="px-5 py-2 text-muted-foreground">{e.due}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
