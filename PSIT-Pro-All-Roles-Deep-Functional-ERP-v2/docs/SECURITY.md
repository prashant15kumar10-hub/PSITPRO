# Security

- Opaque random session tokens; only SHA-256 hashes persist in PostgreSQL.
- HttpOnly, SameSite cookies; Secure in production.
- bcrypt password hashing and expiring single-use reset tokens.
- Role and ownership checks on protected operations.
- Zod validation on actions and search inputs.
- Prisma parameterized database access.
- Upload allowlist, 5 MB limit and generated storage keys.
- Audit logs for authentication and material workflow changes.
- Basic login throttling; production multi-node deployments should use Redis.
