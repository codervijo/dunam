import {
  QrCode, ClipboardCheck, FileText, LayoutDashboard, Users,
  History, ShieldCheck, Smartphone, Bell, BarChart3, FileSignature, Lock,
} from "lucide-react";

const groups = [
  {
    title: "Field workflow",
    items: [
      { i: Smartphone, t: "Mobile-first technician app", d: "Big buttons, offline mode, fast capture for techs on the move." },
      { i: QrCode, t: "QR code extinguisher tagging", d: "Scan once on arrival, see the full unit history instantly." },
      { i: ClipboardCheck, t: "NFPA 10 checklists", d: "Standardized pass/fail flows with photo capture and notes." },
      { i: FileSignature, t: "On-device signatures", d: "Capture technician and on-site contact signatures." },
    ],
  },
  {
    title: "Records & delivery",
    items: [
      { i: FileText, t: "Branded PDF certificates", d: "Auto-generated with your logo, tech name, and unit details." },
      { i: History, t: "Full inspection history", d: "Every visit, photo, and certificate stored against the asset." },
      { i: Bell, t: "Client notifications", d: "Email delivery the moment a job is complete." },
      { i: Lock, t: "Read-only client portal", d: "Clients access compliance records without an email thread." },
    ],
  },
  {
    title: "For the office",
    items: [
      { i: LayoutDashboard, t: "Manager dashboard", d: "Today's jobs, failed inspections, certificates sent, due dates." },
      { i: BarChart3, t: "Reporting & exports", d: "CSV/PDF exports for audits, billing, and compliance review." },
      { i: Users, t: "Team management", d: "Invite technicians, assign routes, track activity." },
      { i: ShieldCheck, t: "Compliance reminders", d: "Upcoming monthly, annual and hydrostatic service dates." },
    ],
  },
];

export function Features() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-5">
        <div className="max-w-2xl">
          <div className="text-xs font-semibold uppercase tracking-widest text-primary">Features</div>
          <h1 className="mt-2 text-4xl md:text-5xl font-semibold tracking-tight">Everything you need to run inspections, nothing you don't.</h1>
          <p className="mt-4 text-lg text-muted-foreground">Dunam covers the entire inspection lifecycle — from the technician scanning a QR code in the field to the client opening their certificate at their desk.</p>
        </div>

        <div className="mt-14 space-y-14">
          {groups.map((g) => (
            <div key={g.title}>
              <h2 className="text-2xl font-semibold">{g.title}</h2>
              <div className="mt-5 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
                {g.items.map((it) => (
                  <div key={it.t} className="rounded-2xl bg-card border border-border p-5">
                    <div className="h-9 w-9 rounded-lg bg-primary/10 grid place-items-center text-primary">
                      <it.i className="h-5 w-5" />
                    </div>
                    <div className="mt-3 font-medium">{it.t}</div>
                    <div className="text-sm text-muted-foreground mt-1">{it.d}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
