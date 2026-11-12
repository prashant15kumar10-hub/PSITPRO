# Environment and empty-database startup fix

This release fixes both errors shown during first setup:

1. Plain Node compatibility scripts explicitly load `.env` before creating Prisma Client.
2. If the schema exists but no users were seeded, `npm run dev` and `npm start` automatically create the complete demonstration dataset.

Existing failed installation recovery:

```powershell
npm run db:seed
npm run build
npm start
```

Fresh reset:

```powershell
docker compose down -v
npm run setup
npm run build
npm start
```
