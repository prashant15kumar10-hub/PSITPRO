# PSIT Pro Architecture

Browser → Next.js Server Components/Server Actions/Route Handlers → Zod validation → session/RBAC authorization → domain workflow → Prisma → PostgreSQL. Every employee operation derives identity from the server session. Sensitive payroll and document downloads apply ownership checks. Manager, HR, finance and admin actions apply role or team scope. AuditLog records security and business mutations.
