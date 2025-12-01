import React from 'react';
import { ErrorBoundary } from './error-boundary';

const withErrorBoundary = <TProps extends object>(
  WrappedComponent: React.ComponentType<TProps>,
  fallback?: React.ReactNode
) => {
  const WithErrorBoundary = (props: TProps) => (
    <ErrorBoundary fallback={fallback}>
      <WrappedComponent {...props} />
    </ErrorBoundary>
  );

  return WithErrorBoundary;
};

export { withErrorBoundary };
