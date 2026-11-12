# PSIT Pro enterprise ERP implementation

## Implemented foundation

- 19 role experiences with dedicated dashboards, navigation, metrics, notifications and permissions.
- 187 configured role links: 125 database workspaces and 62 specialized pages.
- PostgreSQL persistence through Prisma with indexed records, activities, files and approvals.
- Server-side session authentication and role/persona checks.
- Object-level visibility for personal, role and organization records.
- CRUD creation, status transitions, archive, filters, pagination and CSV export.
- Reusable approval requests with requester, approver, decision, timestamps, comments, history, notifications and audit events.
- Secure authorized uploads and downloads with size/type validation and unique storage paths.
- Permission-filtered global search and AI context.
- Event-driven in-app notifications for creation, status changes and approvals.
- Automatic database preparation and module-data bootstrap on startup.
- Loading, empty, success and friendly error/recovery states.

## External production services

Real payment capture, outbound email, mobile push, SMS, GPS, institutional SSO/MFA providers, malware scanning and cloud object storage require credentials and contracts from the institution. The project does not invent or embed those secrets. Integrate them in staging before public deployment.

## Required clean setup

```powershell
docker compose down -v
npm run setup
npm run build
npm start
```

The first command deletes the previous local demonstration database. Do not run it against data you need to preserve.
