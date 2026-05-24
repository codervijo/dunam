import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { useState } from "react";
import { QrCode, CheckCircle2, XCircle, Signature, FileText, ChevronLeft, MapPin } from "lucide-react";

export const Route = createFileRoute("/technician-demo")({
  head: () => ({ meta: [{ title: "Technician demo — Dunam" }] }),
  component: TechDemo,
});

const checklist = [
  "Pressure gauge in green",
  "Seal & tamper indicator intact",
  "No corrosion, dents or leakage",
  "Mounted at correct height",
  "Signage visible & accessibility clear",
  "Inspection tag present",
];

function TechDemo() {
  const [checked, setChecked] = useState<Record<number, "pass" | "fail" | null>>({});
  const [signed, setSigned] = useState(false);
  const [generated, setGenerated] = useState(false);

  const allMarked = checklist.every((_, i) => checked[i]);
  const anyFail = Object.values(checked).some((v) => v === "fail");

  return (
    <SiteLayout>
      <section className="py-10">
        <div className="mx-auto max-w-md px-5">
          <Link to="/" className="inline-flex items-center gap-1 text-sm text-muted-foreground"><ChevronLeft className="h-4 w-4" /> Back</Link>

          <div className="mt-4 rounded-3xl border-8 border-nav bg-card overflow-hidden shadow-xl">
            <div className="bg-nav text-nav-foreground px-4 py-3 flex items-center justify-between text-xs">
              <span>9:41</span>
              <span className="font-medium">Dunam Tech</span>
              <span>●●●</span>
            </div>

            <div className="p-5 space-y-4">
              <div className="rounded-xl bg-surface border border-border p-3">
                <div className="text-[10px] uppercase tracking-wide text-muted-foreground">Today's job</div>
                <div className="mt-1 font-semibold">Riverside Café</div>
                <div className="text-xs text-muted-foreground flex items-center gap-1"><MapPin className="h-3 w-3" /> 412 J Street, Sacramento CA</div>
              </div>

              <div className="rounded-xl bg-surface border border-border p-3 flex items-center gap-3">
                <div className="h-14 w-14 rounded-lg bg-primary/10 grid place-items-center text-primary">
                  <QrCode className="h-7 w-7" />
                </div>
                <div className="flex-1">
                  <div className="text-sm font-semibold">EXT-04287</div>
                  <div className="text-[11px] text-muted-foreground">5lb ABC dry chemical · Kitchen #2</div>
                  <div className="text-[11px] text-muted-foreground">Last inspected Jun 04, 2025 · PASS</div>
                </div>
              </div>

              <div>
                <div className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-2">NFPA 10 Checklist</div>
                <div className="space-y-2">
                  {checklist.map((c, i) => (
                    <div key={c} className="rounded-lg border border-border bg-card p-3">
                      <div className="text-sm">{c}</div>
                      <div className="mt-2 flex gap-2">
                        <button
                          onClick={() => setChecked({ ...checked, [i]: "pass" })}
                          className={`flex-1 inline-flex items-center justify-center gap-1 rounded-md px-2 py-1.5 text-xs font-medium border ${
                            checked[i] === "pass"
                              ? "bg-success/10 border-success/40 text-success"
                              : "border-border text-muted-foreground hover:bg-surface"
                          }`}
                        >
                          <CheckCircle2 className="h-3.5 w-3.5" /> Pass
                        </button>
                        <button
                          onClick={() => setChecked({ ...checked, [i]: "fail" })}
                          className={`flex-1 inline-flex items-center justify-center gap-1 rounded-md px-2 py-1.5 text-xs font-medium border ${
                            checked[i] === "fail"
                              ? "bg-destructive/10 border-destructive/40 text-destructive"
                              : "border-border text-muted-foreground hover:bg-surface"
                          }`}
                        >
                          <XCircle className="h-3.5 w-3.5" /> Fail
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className={`flex items-center justify-between rounded-lg border px-3 py-2 text-sm font-medium ${
                !allMarked ? "bg-surface border-border text-muted-foreground" :
                anyFail ? "bg-destructive/10 border-destructive/30 text-destructive" :
                "bg-success/10 border-success/30 text-success"
              }`}>
                <span>Overall status</span>
                <span>{!allMarked ? "Pending" : anyFail ? "FAIL" : "PASS"}</span>
              </div>

              <button
                onClick={() => setSigned(true)}
                className={`w-full inline-flex items-center justify-center gap-2 rounded-md border border-dashed px-3 py-3 text-sm ${
                  signed ? "border-success/40 bg-success/10 text-success" : "border-border text-muted-foreground"
                }`}
              >
                <Signature className="h-4 w-4" />
                {signed ? "Signed by M. Alvarez" : "Tap to sign"}
              </button>

              <button
                disabled={!allMarked || !signed}
                onClick={() => setGenerated(true)}
                className="w-full rounded-md bg-primary py-2.5 text-sm font-medium text-primary-foreground disabled:opacity-50"
              >
                Generate certificate
              </button>

              {generated && (
                <div className="rounded-lg bg-card border border-success/30 p-3 flex items-center gap-2 text-sm">
                  <FileText className="h-4 w-4 text-primary" />
                  <span>Certificate sent to Riverside Café</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
