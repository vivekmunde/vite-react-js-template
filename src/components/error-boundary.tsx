import {
  type TPostUIErrorRequestData,
  type TPostUIErrorResponseData,
} from '@/api-interfaces/errors/ui/interfaces';
import { useMutate } from '@/api/use-mutate';
import { Translation } from '@/components/translation';
import { DataTestId } from '@/components/ui/data-test-id';
import { ErrorBoundary as UIErrorBoundary } from '@/components/ui/error-boundary';
import {
  Result,
  ResultIcon,
  ResultMessage,
  ResultTitle,
} from '@/components/ui/result';
import { AlertTriangleIcon } from 'lucide-react';
import React, { type ReactNode } from 'react';

const ErrorBoundaryMessage: React.FC = () => (
  <DataTestId value="error-boundary">
    <Result variant="destructive">
      <ResultIcon>
        <AlertTriangleIcon />
      </ResultIcon>
      <ResultTitle>
        <Translation value="error/errorBoundary.title" />
      </ResultTitle>
      <ResultMessage>
        <Translation value="error/errorBoundary.message" />
      </ResultMessage>
    </Result>
  </DataTestId>
);

const ErrorBoundary: React.FC<{
  children: ReactNode;
  fallback?: ReactNode;
}> = ({ children, fallback }) => {
  const [, mutator] = useMutate<
    TPostUIErrorRequestData,
    TPostUIErrorResponseData
  >();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onError = (error: any, info: any) => {
    mutator.post('/errors/ui', {
      error: {
        message: error.message,
        name: error.name,
        stack: error.stack,
        componentStack: info.componentStack,
        digest: error.digest,
      },
      url: window.location.href,
    });
  };

  return (
    <UIErrorBoundary
      fallback={fallback ?? <ErrorBoundaryMessage />}
      onError={onError}
    >
      {children}
    </UIErrorBoundary>
  );
};

export { ErrorBoundary, ErrorBoundaryMessage };
