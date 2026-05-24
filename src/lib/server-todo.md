# TODO: server-side code dropped during Astro port

The source TanStack Start project shipped server-side code that does
not translate to Astro's static-output model. These files are kept
here as a record of what was dropped.

## Dropped files (from `genai/`)

- `genai/src/server.ts` — Cloudflare Workers fetch handler that
  proxied requests to `@tanstack/react-start/server-entry` and
  rendered a branded error page on catastrophic SSR failure.
- `genai/src/start.ts` — TanStack Start entrypoint registration.
- `genai/src/router.tsx` — TanStack Router client/server router
  construction.
- `genai/src/routeTree.gen.ts` — auto-generated route tree.
- `genai/src/lib/error-capture.ts` — global error-capture helpers
  consumed by `server.ts`.
- `genai/src/lib/error-page.ts` — server-rendered 500 error HTML.
- `genai/src/routes/__root.tsx` — TanStack `RootRoute` (shell,
  `<HeadContent />`, `<Scripts />`, NotFound + Error components).
  The shell duties (HTML doc, `<head>` meta, Header/Footer) moved
  to `src/layouts/SiteLayout.astro`. The Astro static build has no
  parallel for the NotFound/Error route handlers in this codebase.

## TODO

- Replace the 500-error branding with Astro's `src/pages/404.astro`
  (and a deploy-platform-specific 500 handler) if/when desired.
- If/when this project needs server endpoints again, add them as
  Astro endpoints (`src/pages/api/*.ts`) under a non-static adapter,
  or move them to a separate Worker.
