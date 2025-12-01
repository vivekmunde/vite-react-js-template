import { useLoggedInOrganization } from '@/hooks/use-logged-in-organization';
import { useTheme } from '@/hooks/use-theme';
import React, { useEffect, type PropsWithChildren } from 'react';

const OrganizationThemeProvider: React.FC<PropsWithChildren> = ({
  children,
}) => {
  const [theme] = useTheme();
  const { data: organization } = useLoggedInOrganization();

  useEffect(() => {
    const documentElement = document.documentElement;

    const defaultPrimary = documentElement.style.getPropertyValue('--primary');
    const defaultPrimaryForeground = documentElement.style.getPropertyValue(
      '--primary-foreground'
    );
    const defaultLink = documentElement.style.getPropertyValue('--link');

    if (theme === 'light' && organization?.theme?.light?.colors) {
      const { primary, primaryForeground, link } =
        organization.theme.light.colors;

      if (primary) {
        documentElement.style.setProperty('--primary', primary);
      }
      if (primaryForeground) {
        documentElement.style.setProperty(
          '--primary-foreground',
          primaryForeground
        );
      }
      if (link) {
        documentElement.style.setProperty('--link', link);
      }
    } else if (theme === 'dark' && organization?.theme?.dark?.colors) {
      const { primary, primaryForeground, link } =
        organization.theme.dark.colors;

      if (primary) {
        documentElement.style.setProperty('--primary', primary);
      }
      if (primaryForeground) {
        documentElement.style.setProperty(
          '--primary-foreground',
          primaryForeground
        );
      }
      if (link) {
        documentElement.style.setProperty('--link', link);
      }
    }

    return () => {
      documentElement.style.setProperty('--primary', defaultPrimary);
      documentElement.style.setProperty(
        '--primary-foreground',
        defaultPrimaryForeground
      );
      documentElement.style.setProperty('--link', defaultLink);
    };
  }, [theme, organization?.theme]);

  return <React.Fragment>{children}</React.Fragment>;
};

export { OrganizationThemeProvider };
