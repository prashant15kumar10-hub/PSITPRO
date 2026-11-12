# Login loop — diagnosed and fixed

Observed video sequence:

1. A role signs in successfully and the dashboard renders.
2. An inner route such as `/personal/learning` starts loading.
3. The application returns to the role-selection screen.

Cause: the old production-mode session cookie was always marked `Secure`. On an HTTP LAN URL, the browser did not send that cookie on the next navigation. Middleware then treated the request as unauthenticated.

Fixes included:

- Protocol-aware session-cookie security.
- Explicit local/LAN override with `COOKIE_SECURE=false`.
- Direct session-expired redirect, avoiding a `/login` → `/` redirect chain.
- Authentication protection added to `/portal/*` routes.
- Expired sessions cleaned during new login.
- Logout clears the same cookie attributes and returns to role selection.
