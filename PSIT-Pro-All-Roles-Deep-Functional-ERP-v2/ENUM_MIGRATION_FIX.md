# Persona enum upgrade fix

Older PSIT Pro databases contain these enum values:

- `PARENT_GUARDIAN`
- `STORE_PROCUREMENT_MANAGER`
- `IT_SYSTEM_ADMINISTRATOR`

The complete ERP uses:

- `PARENT`
- `STORE_MANAGER`
- `IT_ADMIN`

PostgreSQL cannot drop an enum value while rows still use it. The project now runs `scripts/pre-push-enum-fix.mjs` before every Prisma schema push. It safely adds the replacement values, updates existing users, and only then lets Prisma remove the obsolete values.

Normal recovery command:

```powershell
npm run db:push
npm run db:bootstrap
npm run build
npm start
```

For a completely disposable demonstration database:

```powershell
docker compose down -v
npm run setup
npm run build
npm start
```
