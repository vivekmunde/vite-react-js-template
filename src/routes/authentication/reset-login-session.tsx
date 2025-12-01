import type {
  TPostSessionResetRequestData,
  TPostSessionResetResponseData,
  TPostSessionResetResponseErrorCode,
} from '@/api-interfaces/auth/session/reset/interfaces';
import { useMutate } from '@/api/use-mutate';
import { Translation } from '@/components/translation';
import { Alert, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { DataTestId } from '@/components/ui/data-test-id';
import { Flex } from '@/components/ui/flex';
import { Icon } from '@/components/ui/icon';
import { AlertCircleIcon } from 'lucide-react';
import React, { useState } from 'react';
import { useUserLoginSession } from './use-user-login-session';

const ResetLoginSession: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const { onRevalidate: onRevalidateUserLoginSession } = useUserLoginSession();
  const [{ loading: mutating, status, error }, { post }] = useMutate<
    TPostSessionResetRequestData,
    TPostSessionResetResponseData,
    string,
    TPostSessionResetResponseErrorCode
  >();

  const onChangeEmail = () => {
    post('/auth/session/reset', undefined).then(({ status }) => {
      if (status === 'success') {
        setLoading(true);
      }
      onRevalidateUserLoginSession();
    });
  };

  return (
    <Flex direction={{ default: 'vertical' }} gap="normal">
      <DataTestId value="reset">
        <Button
          variant="ghost"
          size="lg"
          className="w-full capitalize"
          onClick={onChangeEmail}
          loading={mutating || loading}
        >
          <Translation value="auth/changeEmail" />
        </Button>
      </DataTestId>
      {status === 'error' && (
        <Alert variant="destructive">
          <Icon>
            <AlertCircleIcon />
          </Icon>
          <AlertTitle>{error?.message}</AlertTitle>
        </Alert>
      )}
    </Flex>
  );
};

export { ResetLoginSession };
