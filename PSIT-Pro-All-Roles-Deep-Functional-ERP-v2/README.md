# PSIT Pro — Complete Multi-Role Functional ERP

PSIT Pro is a full-stack, role-aware campus and workplace platform. The interface, navigation, actions, analytics and permissions change for each signed-in role.

## Tailored demo accounts

All demo accounts use password: `Welcome@123`

| Experience | Email |
|---|---|
| Student | `student@psitpro.local` |
| Worker | `employee@psitpro.local` |
| Teacher | `teacher@psitpro.local` |
| Manager | `manager@psitpro.local` |
| HOD / Department Head | `hod@psitpro.local` |
| Administrator | `admin@psitpro.local` |
| Parent / Guardian | `parent@psitpro.local` |
| Librarian | `librarian@psitpro.local` |
| Placement Officer | `placement@psitpro.local` |
| Warden | `warden@psitpro.local` |
| Accountant | `accountant@psitpro.local` |
| Transport Manager | `transport@psitpro.local` |
| Medical Staff | `medical@psitpro.local` |
| Lab Manager | `lab@psitpro.local` |
| Store / Procurement Manager | `procurement@psitpro.local` |
| Maintenance Staff | `maintenance@psitpro.local` |
| IT / System Administrator | `systemadmin@psitpro.local` |
| Super Admin | `superadmin@psitpro.local` |
| Alumni | `alumni@psitpro.local` |

## Windows quick start

Requirements: Node.js 20+ and Docker Desktop.

Open PowerShell **inside the extracted folder containing `package.json`**:

```powershell
npm run setup
npm run build
npm start
```

Open http://localhost:3000

Use `npm start` for fast production-mode loading. Use `npm run dev` only while editing code.

## Architecture

- Next.js 16 App Router, React 19, TypeScript and Tailwind CSS
- PostgreSQL and Prisma ORM
- Secure opaque database sessions, bcrypt password hashing and server-side validation
- Role and persona-aware navigation
- Server-enforced module access checks
- Audit logs, notifications and protected operational routes
- Responsive desktop, tablet and mobile interface

## Database reset

`npm run setup` pushes the latest Prisma schema and recreates the fictional demo dataset. Do not run the demo seed against production data.

## Login redirect-loop fix

This build fixes the issue where login briefly opened a dashboard and then clicking an inner page returned to “Who are you?”. The previous production build always created a `Secure` session cookie. Browsers do not send that cookie when the app is opened through plain HTTP on a LAN address such as `http://192.168.x.x:3000`, so the next page request appeared logged out.

The repaired build now selects the cookie policy from the real protocol:

- Localhost or LAN over HTTP: `COOKIE_SECURE=false`
- Public HTTPS deployment: `COOKIE_SECURE=true`
- Behind a trusted HTTPS reverse proxy: automatically detected from `X-Forwarded-Proto`

Protected routes now return directly to the role-selection screen when there is genuinely no session, instead of bouncing through a persona-less login route. The `/portal` routes are also covered by authentication middleware.

For the cleanest update, extract this ZIP into a new folder and run:

```powershell
npm run setup
npm run build
npm start
```

If opening from another device on the same network, keep this in `.env`:

```env
COOKIE_SECURE="false"
NEXT_PUBLIC_APP_URL="http://YOUR-COMPUTER-IP:3000"
```

Use `COOKIE_SECURE="true"` only after the deployed domain is working through HTTPS.

## Complete functional category upgrade

All role-category links now open a working interface instead of a placeholder card page. See `FUNCTIONAL_MODULES.md` for coverage and features.

Because this release adds database-backed module records, use a fresh extracted folder and run:

```powershell
npm run setup
npm run build
npm start
```

`npm run setup` resets the fictional demo database and adds working records for every tailored role. Back up any data you want to preserve before running it.

## Automatic server-error prevention

This release checks the Prisma schema and role-module records automatically before both `npm run dev` and `npm start`. On Windows, use `SETUP_WINDOWS.bat` once and then `RUN_WINDOWS.bat` for normal launches. See `SERVER_ERROR_FIXED.md`.

## Existing-database Persona upgrade

This release automatically maps legacy Persona values before Prisma changes the PostgreSQL enum. It fixes the `invalid input value for enum Persona_new` error. See `ENUM_MIGRATION_FIX.md`.

## First-run environment and empty-database fix

Compatibility scripts explicitly load `.env`. If a previous setup created the schema but stopped before seeding users, normal startup now creates the complete demo dataset automatically. See `ENV_AND_EMPTY_DB_FIX.md`.
