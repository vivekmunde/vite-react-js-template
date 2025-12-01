import type { Preview } from '@storybook/react-vite';
import React, { useEffect } from 'react';
import '../src/index.css';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: 'todo',
    },
  },

  globalTypes: {
    theme: {
      description: 'Global theme for components',
      defaultValue: 'light',
      toolbar: {
        title: 'Theme',
        icon: 'circlehollow',
        items: [
          { value: 'light', icon: 'sun', title: 'Light' },
          { value: 'dark', icon: 'moon', title: 'Dark' },
          { value: 'system', icon: 'browser', title: 'System' },
        ],
        showName: true,
        dynamicTitle: true,
      },
    },
  },

  decorators: [
    (Story, context) => {
      const { theme } = context.globals;

      useEffect(() => {
        const htmlElement = document.documentElement;

        // Remove existing theme classes
        htmlElement.classList.remove('light', 'dark');

        if (theme === 'system') {
          // Use system preference
          const prefersDark = window.matchMedia(
            '(prefers-color-scheme: dark)'
          ).matches;
          htmlElement.classList.add(prefersDark ? 'dark' : 'light');
        } else {
          // Use selected theme
          htmlElement.classList.add(theme);
        }
      }, [theme]);

      return <Story />;
    },
  ],
};

export default preview;
