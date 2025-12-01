# Components

## Core Components

### Providers

- `I18nProvider`: i18next setup
- `ThemeProvider`: Theme management (light/dark)
- `OrganizationThemeProvider`: Organization-specific theming
- `ConnectionProvider`: API connection context

### Guards

- `OnlineGuard`: Blocks UI when offline
- `ServerConnectionGuard`: Validates server connection
- `ErrorBoundary`: Catches React errors

### RBAC Components

- `OrganizationRBAC`: Conditional render based on permissions
- `OrganizationPageRBAC`: Shows 401 page if unauthorized
- `SystemRBAC`: System-level permission checks
- `withSystemRBAC`: HOC for system RBAC

### Status Messages

- `Empty`: Empty state
- `NoMatch`: No search results
- `PageLoadError`: Page load failure
- `PageNotFound`: 404 page

## UI Components

Located in `src/components/ui/`:

- Form components (input, select, checkbox, etc.)
- Layout components (flex, grid, screen)
- Data display (table, pagination, chart)
- Feedback (toast, alert, dialog)
- Navigation (sidebar, breadcrumb, tabs)

## Search Params

- `SearchInput`: URL-synced search
- `Pager`: Pagination controls
- `Table`: Data table with sorting
