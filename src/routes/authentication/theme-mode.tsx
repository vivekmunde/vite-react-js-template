import { Translation } from '@/components/translation';
import { DataTestId } from '@/components/ui/data-test-id';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from '@/components/ui/select';
import { TypographySpan } from '@/components/ui/typography';
import { useTheme } from '@/hooks/use-theme';
import { MoonIcon, SunIcon } from 'lucide-react';
import React from 'react';

const ThemeMode: React.FC = () => {
  const [theme, setTheme] = useTheme();

  return (
    <DataTestId value="theme-mode">
      <Select value={theme} onValueChange={setTheme}>
        <SelectTrigger className="bg-background dark:bg-muted/60 w-fit">
          {theme === 'light' ? <SunIcon /> : <MoonIcon />}
          <TypographySpan className="flex-1 text-left">
            {theme === 'light' ? (
              <Translation value="common/light" />
            ) : (
              <Translation value="common/dark" />
            )}
          </TypographySpan>
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="light">
            <SunIcon />
            <TypographySpan>
              <Translation value="common/light" />
            </TypographySpan>
          </SelectItem>
          <SelectItem value="dark">
            <MoonIcon />
            <TypographySpan>
              <Translation value="common/dark" />
            </TypographySpan>
          </SelectItem>
        </SelectContent>
      </Select>
    </DataTestId>
  );
};

export { ThemeMode };
