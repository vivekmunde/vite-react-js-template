import type {
  TGetOrganizationResponseData,
  TGetOrganizationResponseErrorCode,
} from '@/api-interfaces/me/logged-in-organization/[organizationCode]/interfaces';
import { useQuery } from '@/api/use-query';
import { ErrorBoundary } from '@/components/error-boundary';
import { OrganizationThemeProvider } from '@/components/organization-theme-provider';
import { PageLoadError } from '@/components/status-messages/page-load-error';
import { PageLoading } from '@/components/ui/page-loading';
import React from 'react';
import { Outlet, useParams } from 'react-router';

const OrganizationLayout: React.FC = () => {
  const { organizationCode } = useParams();

  const { loading, data, status } = useQuery<
    TGetOrganizationResponseData,
    string,
    TGetOrganizationResponseErrorCode
  >(`/me/logged-in-organization/${organizationCode}`);

  if (loading) {
    return <PageLoading />;
  }

  if (status === 'error') {
    return <PageLoadError />;
  }

  if (!data?.id) {
    return <PageLoadError />;
  }

  return (
    <ErrorBoundary>
      <OrganizationThemeProvider>
        <Outlet />
      </OrganizationThemeProvider>
    </ErrorBoundary>
  );
};

export { OrganizationLayout };
