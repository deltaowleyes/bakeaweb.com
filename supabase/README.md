# Supabase (logins, accounts, saved designs)

- Project: **bakeaweb**, ref `gpwxuunutljcauoknhrh`, region **Canada (Central)** (`ca-central-1`), organization *Delta Owl Eyes*, Free plan.
- API URL: `https://gpwxuunutljcauoknhrh.supabase.co` (public). The publishable key is public too; the secret key and database password are never put in the repo.
- Dashboard: https://supabase.com/dashboard/project/gpwxuunutljcauoknhrh
- `migrations/` holds every database change, in order. They are already applied to the project (2026-11-08). Plan: `plans/pagename-accounts.md`.
- The other project in the organization, `delta-owl-eyes` (US East), is empty and not used by BAKE.

## What the database enforces
- Pagenames: 3–12 characters, a–z, 0–9 and single hyphens, starts with a letter, doesn't end with a hyphen; reserved words blocked (`reserved_names`); unique per domain.
- A deleted or renamed-away pagename is held 90 days; a deleted design can be restored for 30 days.
- 3 free accounts per login on bakedby.me / rezsite.com (active or forwarding, not `paid`); paid accounts don't count; one bakedbya.pro name per login.
- Row-level security: a login only sees and changes its own accounts and projects. `paid`, `status` and pagename changes only go through `rename_account`, `delete_account`, `restore_account` or the server.
- Anyone (even signed out) can call `pagename_check(domain, pagename)` → `ok` | `format` | `reserved` | `taken`.
- Roles (`user_roles`: baker, admin, escrow, rezsite_reviewer) are given by an administrator in the dashboard only.

## Sign-in setup (2026-11-08)
- Site URL `https://bakeaweb.com`; redirect URLs `https://bakeaweb.com/**` and `http://localhost:5173/**`.
- Email + password on, with email confirmation. Google sign-in on (Google Cloud client "BAKE Studio", callback `https://gpwxuunutljcauoknhrh.supabase.co/auth/v1/callback`).
- **Google is in Testing mode**: only test users added at https://console.cloud.google.com/auth/audience can use Google sign-in. To open it to everyone: add the privacy policy (and terms) link on the Branding page once the *Terms and policies* pages are live, then click **Publish app**.
