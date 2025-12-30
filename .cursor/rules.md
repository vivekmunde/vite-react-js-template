# Cursor AI Rules

## Project Overview

Multi-tenant organization management system with role-based access control (RBAC).

## Tech Stack

- **Framework**: React 19 + TypeScript (strict mode)
- **Build Tool**: Vite 7
- **Routing**: React Router 7
- **Data Fetching**: SWR 2 (via custom hooks)
- **Forms**: React Hook Form + Zod validation
- **Styling**: Tailwind CSS 4 (utility-first)
- **UI Components**: Radix UI primitives + shadcn/ui
- **i18n**: i18next + react-i18next
- **Charts**: ECharts
- **Testing**: Vitest + Storybook + Playwright

## Core Principles

- Always follow **KISS** (Keep It Simple, Stupid)
- Always follow **DRY** (Don't Repeat Yourself)
- Follow **Single Responsibility Principle**
- Prefer **Inversion of Control** and composability
- Prioritize **readability and maintainability** over cleverness
- Use **meaningful variable and function names**
- Avoid **over-engineering** and unnecessary abstractions

## React & TypeScript Rules

- Always use **functional components** (no class components)
- Use **TypeScript strictly** (strict mode enabled)
- **Never use `any`** - prefer explicit and meaningful types
- Use React hooks idiomatically
- Keep components **small and focused**
- Use **named exports** (avoid default exports unless explicitly required)
- Path alias: Use `@/` to reference `src/` directory

## Code Quality & Formatting

- **Prettier**: Auto-formats on save and pre-commit
  - Single quotes, semicolons, 80 char width, 2 spaces
- **ESLint**: TypeScript ESLint + React Hooks rules
- **TypeScript**: Strict mode with no unused locals/parameters
- **Pre-commit hooks**: Husky + lint-staged enforce formatting and linting
- Always run `npm run format && npm run tsc && npm run lint` before committing

## Styling Rules

- Use **Tailwind CSS 4** only (utility-first approach)
- Do **not** use inline styles
- Do **not** use CSS files unless explicitly required
- Use `cn()` utility for merging Tailwind classes
- Component variants via `class-variance-authority`
- Use Radix UI primitives styled with Tailwind
- Follow responsive design with Tailwind breakpoints

## UI Components

- Use **components/ui** components where applicable
- Extend **components/ui** instead of rewriting them
- Maintain consistent UI patterns
- UI components located in `src/components/ui/`
- Use Radix UI primitives for accessibility

## Project Structure

```
src/
├── api/              # API layer (hooks, connection provider)
├── api-interfaces/   # Type-safe API interfaces
├── components/       # React components (UI, RBAC, guards)
├── hooks/           # Custom React hooks
├── routes/          # Route definitions and pages
├── types/           # TypeScript type definitions
└── utils/           # Utility functions
```

## API Architecture

- All API interfaces **must** be defined in `src/api-interfaces/`
- Organize interfaces by domain (auth, me, system, [organizationId])
- Do **not** redefine API types elsewhere
- Keep API interfaces **reusable and clean**
- Use type-safe request/response types

## Data Fetching

- Use **`useQuery`** for data fetching (SWR-based, automatic caching)
- Use **`useMutate`** for mutations (optimistic updates, cache invalidation)
- Use **`useFetch`** for direct HTTP requests (get, post, put, patch, delete)
- Use **`useRevalidate`** for cache revalidation
- Use **`useFetcher`** for low-level fetch operations (queuing, cancellation)
- **Do not** use SWR directly unless explicitly instructed
- Always handle **loading, error, and empty states**
- All API calls go through `ConnectionProvider` context

## API Hooks Reference

- `useQuery<TData>(key, fetcher)`: SWR-based data fetching
- `useMutate<TData>(key, fetcher)`: Mutation operations
- `useFetch<TRequest, TResponse>(method, url)`: HTTP methods
- `useRevalidate(key)`: Cache revalidation
- `useApiErrorHandler()`: Centralized error handling

## Routing

- Use **React Router 7** with lazy-loaded routes
- Route structure:
  - Root routes: `/`, `/me`, `/switch-view`, `/logout`
  - System routes: `/system/*` (system-level pages)
  - Organization routes: `/:organizationCode/*` (org-scoped pages)
- Use appropriate layouts: `SystemLayout`, `OrganizationLayout`
- Routes defined in `src/routes/`

## Authentication & Authorization

- Use **RBAC components** for permission checks:
  - `OrganizationRBAC`: Conditional render based on org permissions
  - `OrganizationPageRBAC`: Shows 401 page if unauthorized
  - `SystemRBAC`: System-level permission checks
  - `withSystemRBAC`: HOC wrapper
- Use **RBAC hooks**:
  - `useIsOrganizationUserAuthorized(permissions, operator)`
  - `useIsSystemUserAuthorized(permissions, operator)`
- Permission types defined in `src/types/rbac.ts`
- Always check permissions before rendering sensitive content

## Guards & Providers

- **OnlineGuard**: Blocks UI when offline
- **ServerConnectionGuard**: Validates server connection
- **ErrorBoundary**: Catches React errors
- **ConnectionProvider**: API connection context (base URL, hooks)
- **ThemeProvider**: Global theme management (light/dark)
- **OrganizationThemeProvider**: Organization-specific theming
- **I18nProvider**: i18next setup and language detection

## Internationalization (i18n)

- **Always** use translations - never hardcode strings
- Use `<Translation value="key" />` component from `src/components/translation.tsx`
- Translation files in `public/locales/{lang}/`
- Supported languages: `en`, `nl`
- Reuse existing translation keys where possible
- Use `useLanguage()` hook for language management
- API URL includes language prefix automatically

## Custom Hooks

### Auth & User

- `useLoggedInUser()`: Current user data
- `useLoggedInOrganization()`: Active organization
- `useMyOrganizationPermissions()`: Organization permissions
- `useMySystemPermissions()`: System permissions
- `useMySystemRoles()`: System roles

### UI State

- `useLanguage()`: Current language `[language, setLanguage]`
- `useTheme()`: Theme mode `[theme, setTheme]`
- `useIsOnline()`: Network status
- `useSearchParams()`: URL search params management
- `useLocalStorage()`: LocalStorage wrapper

## Forms

- Use **React Hook Form** for form management
- Use **Zod** for validation schemas
- Use `@hookform/resolvers` for Zod integration
- Always validate on both client and server
- Handle validation errors from API responses

## Testing

- Use **Vitest** for unit/integration tests
- Use **Storybook** for component development and visual testing
- Use **Playwright** for browser/E2E tests
- Always test:
  - Happy paths
  - Edge cases
  - Error states
- Prefer **behavior-based testing**
- Keep tests **readable and maintainable**

## Status Messages

Use appropriate status components:

- `Empty`: Empty state
- `NoMatch`: No search results
- `PageLoadError`: Page load failure
- `PageNotFound`: 404 page

## Dependencies

- **Do NOT add new dependencies without asking**
- Prefer existing utilities and libraries
- Check if functionality exists in project before adding new packages

## Environment Variables

- `VITE_API_URL`: Required API base URL
- Access via `import.meta.env.VITE_API_URL`

## Forbidden

- Do **not** invent APIs or bypass project architecture
- Do **not** use `any` type
- Do **not** use default exports (unless required)
- Do **not** use inline styles or CSS files (use Tailwind)
- Do **not** use SWR directly (use custom hooks)
- Do **not** hardcode strings (use translations)
- Do **not** ignore these rules
