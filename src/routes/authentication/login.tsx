import { LogoSvg } from '@/components/logo-svg';
import { Translation } from '@/components/translation';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { DataTestId } from '@/components/ui/data-test-id';
import { Flex } from '@/components/ui/flex';
import { If } from '@/components/ui/if';
import React from 'react';
import { Language } from './language';
import { ResetLoginSession } from './reset-login-session';
import { ThemeMode } from './theme-mode';
import { useUserLoginSession } from './use-user-login-session';
import { VerifyEmail } from './verify-email';
import { VerifyOtp } from './verify-otp';

const Login: React.FC = () => {
  const { data } = useUserLoginSession();

  return (
    <DataTestId value="login">
      <Flex
        direction={{ default: 'vertical' }}
        justifyContent={{ default: 'center' }}
        alignItems={{ default: 'center' }}
        gap="normal"
        className="h-screen p-8 pb-24 bg-muted dark:bg-background overflow-auto"
      >
        <Flex
          direction={{ default: 'vertical' }}
          justifyContent={{ default: 'center' }}
          alignItems={{ default: 'center' }}
          gap="normal"
          className="gap-8"
        >
          <LogoSvg className="size-20" />
          <div className="flex flex-col gap-3" style={{ width: '400px' }}>
            <Card className="shadow-none rounded-lg dark:bg-muted/30">
              <CardHeader className="px-6 pt-6">
                <CardTitle as="h2">
                  <Translation value="common/login" />
                </CardTitle>
              </CardHeader>
              <CardContent className="px-6 pb-6">
                <If condition={data?.step === 'verify-email'}>
                  <If.True>
                    <VerifyEmail />
                  </If.True>
                </If>
                <If condition={data?.step === 'verify-otp'}>
                  <If.True>
                    <VerifyOtp />
                  </If.True>
                </If>
              </CardContent>
              <If condition={data?.step === 'verify-otp'}>
                <If.True>
                  <CardFooter className="border-t [.border-t]:p-1">
                    <ResetLoginSession />
                  </CardFooter>
                </If.True>
              </If>
            </Card>
            <Flex
              direction={{ default: 'horizontal' }}
              justifyContent={{ default: 'between' }}
              gap="normal"
            >
              <Language />
              <ThemeMode />
            </Flex>
          </div>
        </Flex>
      </Flex>
    </DataTestId>
  );
};

export { Login };
