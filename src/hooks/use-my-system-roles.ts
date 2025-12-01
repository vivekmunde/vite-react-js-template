import type {
  TGetRolesResponseData,
  TGetRolesResponseErrorCode,
} from '@/api-interfaces/me/system/accessible-roles/interfaces';
import { useQuery } from '@/api/use-query';

const useMySystemRoles = () => {
  return useQuery<TGetRolesResponseData, string, TGetRolesResponseErrorCode>(
    '/me/system/accessible-roles'
  );
};

export { useMySystemRoles };
