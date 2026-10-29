# Next.js Supabase Production Starter

An opinionated Next.js starter with the boring production safeguards already in place: strict TypeScript, protected server actions, RLS, security headers, tests, and CI.

```mermaid
flowchart LR
  U[Browser] --> N[Next.js App Router]
  N --> Z[Zod validation]
  Z --> A[Server action]
  A --> S[Supabase RLS]
```

## Quick start

```bash
cp .env.example .env.local
npm install
npm run dev
```

Apply `supabase/migrations/0001_notes.sql` in a development project. Never run integration tests against production; the test guard intentionally fails when it detects a production-like URL.

Read [architecture](docs/architecture.md), [runbook](docs/runbook.md), and [security policy](SECURITY.md).

MIT License © William Lima
