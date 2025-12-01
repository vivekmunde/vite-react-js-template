import type {
  TPutLanguagePreferenceRequestData,
  TPutLanguagePreferenceResponseData,
  TPutLanguagePreferenceResponseErrorCode,
} from '@/api-interfaces/me/preferences/language/interfaces';
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
  SelectValue,
} from '@/components/ui/select';
import { ToastIcon, ToastTitle } from '@/components/ui/toast';
import { useToast } from '@/components/ui/toast/use-toast';
import { TypographyDiv } from '@/components/ui/typography';
import { useLanguage } from '@/hooks/use-language';
import { useLoggedInUser } from '@/hooks/use-logged-in-user';
import type { TLanguage } from '@/types/language';
import type React from 'react';

const LanguagePreference: React.FC = () => {
  const { onRevalidate: onRevalidateLoggedInUser } = useLoggedInUser();
  const [language, setLanguage] = useLanguage();
  const [{ loading: updatingLanguage }, { put: updateLanguage }] = useMutate<
    TPutLanguagePreferenceResponseData,
    TPutLanguagePreferenceRequestData,
    string,
    TPutLanguagePreferenceResponseErrorCode
  >();
  const { toast } = useToast();

  const onLanguageChange = (language: TLanguage) => {
    if (!updatingLanguage) {
      setLanguage(language);
      updateLanguage('/me/preferences/language', {
        language,
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
    <DataTestId value="language">
      <Flex
        direction={{ default: 'horizontal' }}
        alignItems={{ default: 'center' }}
        justifyContent={{ default: 'between' }}
        gap="normal"
      >
        <Label>
          <Translation value="common/language" />
        </Label>
        <Select value={language} onValueChange={onLanguageChange}>
          <SelectTrigger className="w-40" loading={updatingLanguage}>
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="en">
              <TypographyDiv>English</TypographyDiv>
            </SelectItem>
            <SelectItem value="nl">
              <TypographyDiv>Nederlands</TypographyDiv>
            </SelectItem>
          </SelectContent>
        </Select>
      </Flex>
    </DataTestId>
  );
};

export { LanguagePreference };
