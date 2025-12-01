import { useLoggedInUser } from '@/hooks/use-logged-in-user';
import { useTheme } from '@/hooks/use-theme';
import React, { useEffect, type PropsWithChildren } from 'react';

const ThemeProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [, setTheme] = useTheme();
  const { data: user } = useLoggedInUser();
  const preferences = user?.preferences;

  useEffect(() => {
    if (preferences?.themeMode) {
      setTheme(preferences.themeMode);
    }
  }, [preferences?.themeMode]);

  return <React.Fragment>{children}</React.Fragment>;
};

export { ThemeProvider };
