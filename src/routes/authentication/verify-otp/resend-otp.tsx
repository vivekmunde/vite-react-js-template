import type {
  TPostResendOtpRequestData,
  TPostResendOtpResponseData,
  TPostResendOtpResponseErrorCode,
} from '@/api-interfaces/auth/resend-otp/interfaces';
import { useMutate } from '@/api/use-mutate';
import { Translation } from '@/components/translation';
import { Button } from '@/components/ui/button';
import { DataTestId } from '@/components/ui/data-test-id';
import { Flex } from '@/components/ui/flex';
import { ToastIcon, ToastTitle } from '@/components/ui/toast';
import { useToast } from '@/components/ui/toast/use-toast';
import React, { useEffect } from 'react';
import { useUserLoginSession } from '../use-user-login-session';

const ResendOtp: React.FC = () => {
  const { toast } = useToast();
  const { data: loginSession, onRevalidate: onRevalidateLoginSession } =
    useUserLoginSession();

  const getIntervalDuration = () => {
    return Math.round(
      Math.max(
        0,
        (loginSession?.otpInterval ?? 0) -
          (Date.now() - (loginSession?.otpSentAt ?? 0)) / 1000
      )
    );
  };

  const refInterval = React.useRef<NodeJS.Timeout | undefined>(undefined);
  const [canResendIn, setCanResendIn] = React.useState(getIntervalDuration());
  const [{ loading: mutating }, { post }] = useMutate<
    TPostResendOtpRequestData,
    TPostResendOtpResponseData,
    string,
    TPostResendOtpResponseErrorCode
  >();

  const stopTimer = () => {
    clearInterval(refInterval.current);
  };

  const startTimer = () => {
    stopTimer();

    setCanResendIn(getIntervalDuration());

    refInterval.current = setInterval(() => {
      setCanResendIn(prev => prev - 1);
    }, 1000);
  };

  const onResendOtp = () => {
    post('/auth/resend-otp', undefined).then(response => {
      if (response.status === 'success') {
        onRevalidateLoginSession();

        toast({
          variant: 'success',
          children: (
            <React.Fragment>
              <Flex
                direction={{ default: 'horizontal' }}
                alignItems={{ default: 'center' }}
                gap="sm"
              >
                <ToastIcon />
                <ToastTitle>
                  <Translation value="auth/otpResentSuccess" />
                </ToastTitle>
              </Flex>
            </React.Fragment>
          ),
        });
      } else if (response.status === 'error') {
        toast({
          variant: 'destructive',
          children: (
            <React.Fragment>
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
            </React.Fragment>
          ),
        });
      }
    });
  };

  useEffect(() => {
    startTimer();

    return () => {
      stopTimer();
    };
  }, [loginSession?.otpInterval, loginSession?.otpSentAt]);

  return canResendIn > 0 ? (
    <DataTestId value="resend-in">
      <div className="font-medium">
        <Translation
          value="auth/resendOtpIn"
          options={{ seconds: canResendIn }}
        />
      </div>
    </DataTestId>
  ) : (
    <DataTestId value="resend">
      <Button onClick={onResendOtp} loading={mutating} size="lg">
        <Translation value="common/resend" />
      </Button>
    </DataTestId>
  );
};

export { ResendOtp };
