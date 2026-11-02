# BEATUS DREADLOCKS — Booking System Plan

1. [x] Project scaffold (TanStack Start on Netlify), site title/description and home heading branded.
2. [x] Database (Netlify Database + Drizzle ORM beta) and auth (Netlify Identity) packages installed.
3. [ ] Black & gold theme: set palette and heading/body fonts in `src/styles.css`; add brand imagery to `public/img/`.
4. [ ] Database schema in `db/schema.ts` (`services`, `bookings` with status pending/approved/rejected, date + time in Africa/Dar_es_Salaam) with a partial unique index on (date, time) where status = 'approved' to prevent double booking; `db/index.ts`, `drizzle.config.ts` (out: `netlify/database/migrations`); run `npx drizzle-kit generate --name create_services_bookings`. Seed default services via migration.
5. [ ] Public server functions: list active services, available slots for a date, create booking (always PENDING, zod-validated name + Tanzanian phone).
6. [ ] Customer booking site: hero (Premium Loc Care, Ihumwa, Dodoma), services with TZS prices, booking flow (service → date → time → name/phone), confirmation. Mobile/Android-first.
7. [ ] Admin auth: Netlify Identity login page (`/admin/login`), `requireAdmin` middleware checking the `admin` role on every admin server function; run `node /opt/buildhome/.claude/skills/netlify-identity/scripts/enable.cjs`.
8. [ ] Admin dashboard: tabs for pending/approved/rejected bookings; approve (rejects on slot conflict), reject, edit, delete; services CRUD with prices.
9. [ ] Docs, tests, and owner setup instructions (invite owner in Identity, assign `admin` role, set registration to Invite only).
