# Routing

## Structure

React Router 7 with lazy-loaded routes.

## Route Hierarchy

### Root Routes

- `/` → Redirects to `/switch-view`
- `/login` → Redirects to `/`
- `/logout` → Logout page
- `/me` → User profile
- `/switch-view` → Organization switcher

### System Routes (`/system/*`)

- `/system/home` → System dashboard
- `/system/organizations` → Organization management
- `/system/roles` → System roles
- `/system/users` → System users
- `/system/orphan-users` → Orphaned users
- `/system/errors/api` → API error logs
- `/system/errors/ui` → UI error logs

### Organization Routes (`/:organizationCode/*`)

- `/:organizationCode/home` → Organization dashboard
- `/:organizationCode/roles` → Organization roles
- `/:organizationCode/users` → Organization users
- `/:organizationCode/projects` → Projects

## Layouts

- `RootLayout`: Global providers and guards
- `SystemLayout`: System-level navigation
- `OrganizationLayout`: Organization-level navigation
- `SystemPagesLayout`: System pages wrapper
- `OrganizationPagesLayout`: Organization pages wrapper

## Guards

- `OnlineGuard`: Network connectivity check
- `ServerConnectionGuard`: Server availability check
- `Authentication`: Auth state management
