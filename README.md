# BEATUS DREADLOCKS — Premium Loc Care

Online appointment booking for BEATUS DREADLOCKS salon in Ihumwa, Dodoma, Tanzania. Customers pick a service (priced in TZS), a date and an available time, and leave their name and phone number. Every booking stays PENDING until the owner approves or rejects it from a secure admin dashboard. All times use the Africa/Dar_es_Salaam timezone.

## Technologies
- TanStack Start (React 19, TanStack Router), Vite, Tailwind CSS 4, shadcn/ui
- Netlify Database (Postgres) with Drizzle ORM — persistent bookings and services
- Netlify Identity — real owner login with an `admin` role
- Deployed on Netlify

## Run locally
```bash
pnpm install
netlify dev --port 8889   # emulates Database and Identity locally
```

## Roadmap
See [PLAN.md](PLAN.md). Remaining: black & gold theme, database schema and migrations, customer booking flow, admin login, admin dashboard for bookings and services, double-booking protection.
