# Storybook

## Overview

Component development environment and visual testing tool integrated with Vitest.

## Scripts

- `storybook`: Start Storybook dev server (port 5002)
- `build-storybook`: Build static Storybook site

## Configuration

### Main Config (`.storybook/main.ts`)

- **Framework**: `@storybook/react-vite`
- **Stories**: `src/**/*.stories.@(js|jsx|mjs|ts|tsx)` and `src/**/*.mdx`
- **Addons**:
  - `@chromatic-com/storybook`: Chromatic integration
  - `@storybook/addon-docs`: Documentation
  - `@storybook/addon-onboarding`: Onboarding guide
  - `@storybook/addon-a11y`: Accessibility testing
  - `@storybook/addon-vitest`: Vitest integration

### Preview Config (`.storybook/preview.tsx`)

- **Theme Switcher**: Light/Dark/System modes
- **Accessibility**: A11y checks (todo mode)
- **Controls**: Auto-matched for color/date props
- **Global Styles**: Imports `src/index.css`

## Testing Integration

- **Vitest Addon**: Runs tests in browser (Playwright/Chromium)
- **Setup**: `.storybook/vitest.setup.ts`
- **Browser**: Headless Chromium via Playwright

## Stories Location

- `src/stories/components/ui/`: UI component stories
- `src/stories/Configure.mdx`: Configuration docs
- Stories follow naming: `*.stories.tsx`

## Features

- Component isolation
- Interactive controls
- Accessibility checks
- Theme switching
- Visual regression testing (via Chromatic)
