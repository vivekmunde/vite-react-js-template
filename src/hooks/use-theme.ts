import { useLocalStorage } from '@/hooks/use-local-storage';
import type { TTheme } from '@/types/theme';
import { useEffect } from 'react';

const useTheme = (): [TTheme, (theme: TTheme) => void] => {
  const [theme, setTheme] = useLocalStorage<TTheme>(
    'theme',
    document.documentElement.classList.contains('dark') ? 'dark' : 'light'
  );

  useEffect(() => {
    document.documentElement.classList.toggle('light', theme === 'light');
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  return [theme ?? 'light', setTheme];
};

export { useTheme };
