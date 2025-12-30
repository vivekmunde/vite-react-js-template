# RBAC (Role-Based Access Control)

## Permission Types

Defined in `src/types/rbac.ts`:

- `READ_ANALYTICS`
- `READ_ERROR`
- `READ_ORGANIZATION` / `MANAGE_ORGANIZATION`
- `READ_ROLE` / `MANAGE_ROLE`
- `READ_USER` / `MANAGE_USER`

## Scopes

- **System**: System-wide permissions
- **Organization**: Organization-scoped permissions

## Components

- `OrganizationRBAC`: Renders children if authorized
- `OrganizationPageRBAC`: Shows 401 page if unauthorized
- `SystemRBAC`: System-level permission check
- `withSystemRBAC`: HOC wrapper

## Hooks

- `useIsOrganizationUserAuthorized(permissions, operator)`: Organization check
- `useIsSystemUserAuthorized(permissions, operator)`: System check
- `operator`: `'AND'` (default) or `'OR'`

## Usage

```tsx
<OrganizationRBAC permissions={['READ_USER']}>
  <UserList />
</OrganizationRBAC>
```
