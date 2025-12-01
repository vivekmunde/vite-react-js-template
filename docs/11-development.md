# Development

## Scripts

- `dev`: Format, type-check, lint, then start dev server (port 5000)
- `build`: Production build
- `preview`: Preview production build (port 5000)
- `lint`: ESLint check
- `lint:fix`: Auto-fix linting issues
- `tsc`: TypeScript type checking
- `format`: Prettier format all files
- `format:check`: Check formatting
- `storybook`: Start Storybook (port 5002)
- `build-storybook`: Build Storybook

## Code Quality

- **Linting**: ESLint with TypeScript rules
- **Formatting**: Prettier
- **Type Checking**: TypeScript strict mode
- **Pre-commit**: Husky + lint-staged

## Testing

- **Unit/Integration**: Vitest
- **Component**: Storybook + Vitest addon
- **Browser**: Playwright (headless Chromium)

## Path Aliases

- `@/`: Maps to `src/`

## Configuration

- `vite.config.ts`: Vite + React plugin + Tailwind
- `tsconfig.json`: TypeScript config
- `eslint.config.js`: ESLint rules
- `components.json`: shadcn/ui config
