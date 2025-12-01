import type {
  TGetSystemAccessiblePermissionsResponseData,
  TGetSystemAccessiblePermissionsResponseErrorCode,
} from '@/api-interfaces/me/system/accessible-permissions/interfaces';
import { useQuery } from '@/api/use-query';

const useMySystemPermissions = () => {
  return useQuery<
    TGetSystemAccessiblePermissionsResponseData,
    string,
    TGetSystemAccessiblePermissionsResponseErrorCode
  >('/me/system/accessible-permissions');
};

export { useMySystemPermissions };
