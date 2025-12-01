import { ErrorBoundary } from '@/components/error-boundary';
import { PageLoading } from '@/components/ui/page-loading';
import { useLoggedInUser } from '@/hooks/use-logged-in-user';
import { Login } from '@/routes/authentication/login';
import React, { type PropsWithChildren } from 'react';

const Authentication: React.FC<PropsWithChildren> = ({ children }) => {
  const { loading, data } = useLoggedInUser();

  if (loading) {
    return <PageLoading />;
  }

  if (data?.id) {
    return children;
  }

  return (
    <ErrorBoundary>
      <Login />
    </ErrorBoundary>
  );
};

export { Authentication };
