# Overview

## Project

Multi-tenant organization management system with role-based access control (RBAC).

## Tech Stack

- **Framework**: React 19 + TypeScript
- **Build**: Vite 7
- **Routing**: React Router 7
- **Data Fetching**: SWR 2
- **Forms**: React Hook Form + Zod
- **UI**: Radix UI + Tailwind CSS 4
- **i18n**: i18next + react-i18next
- **Charts**: ECharts
- **Testing**: Vitest + Storybook

## Architecture

- **Entry**: `src/main.tsx` → `Router` → `RootLayout`
- **Provider Hierarchy**: ConnectionProvider → ErrorBoundary → OnlineGuard → ServerConnectionGuard → Authentication → UserLanguageProvider → ThemeProvider
- **Route Structure**: System routes (`/system/*`) and Organization routes (`/:organizationCode/*`)

## Environment

- `VITE_API_URL`: Required API base URL
- Development/Production modes via Vite env
