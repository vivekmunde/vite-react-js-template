import type {
  TGetOrganizationsResponseData,
  TGetOrganizationsResponseErrorCode,
} from '@/api-interfaces/me/organizations/interfaces';
import { useQuery } from '@/api/use-query';

const useMyOrganizations = () => {
  return useQuery<
    TGetOrganizationsResponseData,
    string,
    TGetOrganizationsResponseErrorCode
  >('/me/organizations');
};

export { useMyOrganizations };
