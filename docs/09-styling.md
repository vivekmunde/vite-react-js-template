# Styling & Theming

## Framework

- **CSS**: Tailwind CSS 4
- **UI Library**: Radix UI primitives
- **Utilities**: `clsx`, `tailwind-merge`, `class-variance-authority`

## Theme System

- **Modes**: `light` | `dark`
- **Provider**: `ThemeProvider` (global)
- **Organization Theme**: `OrganizationThemeProvider` (org-specific)
- **Hook**: `useTheme()` returns `[theme, setTheme]`

## Theme Storage

- User preference stored in localStorage
- Organization theme can override user preference

## Components

- Radix UI components styled with Tailwind
- Variants via `class-variance-authority`
- Responsive design with Tailwind breakpoints

## Utilities

- `cn()`: Merges Tailwind classes
- Component variants in `src/components/ui/variants.ts`
