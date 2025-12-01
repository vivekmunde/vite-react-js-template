import type {
  TGetOrganizationResponseData,
  TGetOrganizationResponseErrorCode,
} from '@/api-interfaces/me/logged-in-organization/[organizationCode]/interfaces';
import { useQuery } from '@/api/use-query';
import { useParams } from 'react-router';

const useLoggedInOrganization = () => {
  const { organizationCode } = useParams();

  return useQuery<
    TGetOrganizationResponseData,
    string,
    TGetOrganizationResponseErrorCode
  >(`/me/logged-in-organization/${organizationCode}`);
};

export { useLoggedInOrganization };
