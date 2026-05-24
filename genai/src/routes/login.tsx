import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Flame } from "lucide-react";

export const Route = createFileRoute("/login")({
  head: () => ({ meta: [{ title: "Login — Dunam" }] }),
  component: Login,
});

function Login() {
  return (
    <SiteLayout>
      <section className="py-20">
        <div className="mx-auto max-w-md px-5">
          <div className="rounded-2xl bg-card border border-border p-8 shadow-sm">
            <div className="flex items-center gap-2 font-semibold text-lg">
              <span className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-primary text-primary-foreground">
                <Flame className="h-4 w-4" />
              </span>
              Dunam
            </div>
            <h1 className="mt-6 text-2xl font-semibold">Welcome back</h1>
            <p className="mt-1 text-sm text-muted-foreground">Sign in to your inspection dashboard.</p>

            <form className="mt-6 space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="text-sm font-medium">Email</label>
                <input type="email" className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm" placeholder="you@company.com" />
              </div>
              <div>
                <label className="text-sm font-medium">Password</label>
                <input type="password" className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm" placeholder="••••••••" />
              </div>
              <button className="w-full rounded-md bg-primary py-2.5 text-sm font-medium text-primary-foreground">Sign in</button>
            </form>

            <div className="mt-6 text-xs text-muted-foreground text-center">
              Don't have an account? <a href="mailto:hello@dunam.co" className="text-primary font-medium">Book a demo</a>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
