import type {
  TGetOrganizationResponseData,
  TGetOrganizationResponseErrorCode,
} from '@/api-interfaces/me/organizations/[organizationId]/accessible-permissions/interfaces';
import { useQuery } from '@/api/use-query';
import { useLoggedInOrganization } from './use-logged-in-organization';

const useMyOrganizationPermissions = () => {
  const { data: organization } = useLoggedInOrganization();

  return useQuery<
    TGetOrganizationResponseData,
    string,
    TGetOrganizationResponseErrorCode
  >(
    organization?.id
      ? `/me/organizations/${organization?.id}/accessible-permissions`
      : undefined
  );
};

export { useMyOrganizationPermissions };
