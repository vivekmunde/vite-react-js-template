import type {
  TPutThemeModePreferenceRequestData,
  TPutThemeModePreferenceResponseData,
  TPutThemeModePreferenceResponseErrorCode,
} from '@/api-interfaces/me/preferences/theme-mode/interfaces';
import { useMutate } from '@/api/use-mutate';
import { Translation } from '@/components/translation';
import { DataTestId } from '@/components/ui/data-test-id';
import { Flex } from '@/components/ui/flex';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from '@/components/ui/select';
import { ToastIcon, ToastTitle } from '@/components/ui/toast';
import { useToast } from '@/components/ui/toast/use-toast';
import { TypographyDiv, TypographySpan } from '@/components/ui/typography';
import { useLoggedInUser } from '@/hooks/use-logged-in-user';
import { useTheme } from '@/hooks/use-theme';
import type { TTheme } from '@/types/theme';
import { MoonIcon, SunIcon } from 'lucide-react';
import type React from 'react';

const ThemeModePreference: React.FC = () => {
  const { onRevalidate: onRevalidateLoggedInUser } = useLoggedInUser();
  const [theme, setTheme] = useTheme();
  const [{ loading: updatingTheme }, { put: updateTheme }] = useMutate<
    TPutThemeModePreferenceResponseData,
    TPutThemeModePreferenceRequestData,
    string,
    TPutThemeModePreferenceResponseErrorCode
  >();
  const { toast } = useToast();

  const onThemeChange = (theme: TTheme) => {
    if (!updatingTheme) {
      setTheme(theme);
      updateTheme('/me/preferences/theme-mode', {
        themeMode: theme,
      }).then(({ status }) => {
        onRevalidateLoggedInUser();

        if (status === 'error') {
          toast({
            variant: 'destructive',
            children: (
              <Flex
                direction={{ default: 'horizontal' }}
                alignItems={{ default: 'center' }}
                gap="sm"
              >
                <ToastIcon />
                <ToastTitle>
                  <Translation value="error/someErrorOccurred" />
                </ToastTitle>
              </Flex>
            ),
          });
        }
      });
    }
  };

  return (
    <DataTestId value="theme-mode">
      <Flex
        direction={{ default: 'horizontal' }}
        alignItems={{ default: 'center' }}
        justifyContent={{ default: 'between' }}
        gap="normal"
      >
        <Label>
          <Translation value="common/appearance" />
        </Label>
        <Select value={theme} onValueChange={onThemeChange}>
          <SelectTrigger className="w-40" loading={updatingTheme}>
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
              <TypographyDiv>
                <Translation value="common/light" />
              </TypographyDiv>
            </SelectItem>
            <SelectItem value="dark">
              <MoonIcon />
              <TypographyDiv>
                <Translation value="common/dark" />
              </TypographyDiv>
            </SelectItem>
          </SelectContent>
        </Select>
      </Flex>
    </DataTestId>
  );
};

export { ThemeModePreference };
