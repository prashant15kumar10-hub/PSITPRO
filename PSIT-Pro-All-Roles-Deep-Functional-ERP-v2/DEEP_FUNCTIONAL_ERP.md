# PSIT Pro — deep functional module engine

This build replaces the former generic portal record page with role- and module-specific submodules.

## Implemented behavior
- Each portal module resolves to a dedicated specification: purpose, submodules, exact fields, allowed statuses, read-only rules, uploads, approvals and notifications.
- Student attendance, assignments, examinations/results, fees, library, hostel, transport and placements have dedicated submodule schemas and tables.
- Teacher class attendance, assignment management and marks have separate faculty workflows.
- Finance, library, hostel, academics, people management and operations use distinct domain schemas for the remaining role modules.
- Forms are generated only from the selected submodule's fields; unrelated ERP fields are never sent or displayed.
- Records include a `submodule` discriminator and indexed JSON field payload with a schema version. PostgreSQL remains the source of truth.
- Search, status filtering, pagination and CSV export are server-side and authorization-scoped.
- Create, edit, status change, archive, upload, approval decision, notifications and audit history persist to PostgreSQL.
- Read-only student/parent sections intentionally hide mutation controls.
- Development seed rows are explicitly marked `developmentSeed: true`; production data is not hard-coded in components.

## Clean Windows setup
This package uses host port **5433** for its private PostgreSQL container to avoid collisions with older PostgreSQL containers on port 5432.

```powershell
docker compose down -v
npm run setup
npm run build
npm start
```

Open http://localhost:3000. Keep the terminal open.

## Production integrations
The database workflows are functional locally. Real card/UPI collection, institutional email/SMS/push, GPS, SSO/MFA, cloud object storage and malware scanning require the institution's chosen providers and credentials; these are not fabricated in this repository.

## All-role coverage in this edition
- 19 role experiences
- 125 active database-backed portal modules
- 231 purpose-built submodules
- 1,304 module-specific field definitions
- 64 intentionally read-only submodules
- 11 explicit approval-workflow submodules
- 0 active modules using the generic fallback schema

Specialist implementations include Parent/Guardian, Teacher, Worker, Manager, HOD, Librarian, Placement Officer, Warden, Accountant, Transport Manager, Medical Staff, Lab Manager, Store/Procurement Manager, Maintenance Staff, IT Administrator, Administrator, Super Admin and Alumni. Each uses its own terminology, fields, statuses and authorized actions.
