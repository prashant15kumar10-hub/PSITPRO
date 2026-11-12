# “This page couldn’t load” — fixed

The error occurred because the upgraded role pages queried the new `PortalRecord` and `PortalActivity` tables while an older local PostgreSQL volume could still be running without those tables or without module records.

This release prevents that mismatch:

- `npm run dev` and `npm start` automatically run a schema check before starting.
- Missing tables and indexes are created with Prisma.
- Missing module records are added without resetting existing users.
- `SETUP_WINDOWS.bat` now runs the complete seeded setup instead of an empty setup.
- `RUN_WINDOWS.bat` uses the automatic database preparation.
- A friendly recovery page replaces the generic black server-error screen.
- Search filters preserve record-level authorization.

For a clean installation, extract into a new folder and run `SETUP_WINDOWS.bat`, then `RUN_WINDOWS.bat`.
