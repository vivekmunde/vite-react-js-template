import type { TErrorCode } from '@/api-interfaces/error-code/interfaces';
import type { TPermission } from '@/types/rbac';

export type TGetRoleResponseData = {
  id: string;
  name: string;
  description?: string;
  permissionKeys: TPermission[];
};

export type TGetRoleResponseErrorCode = TErrorCode;

export type TPutRoleRequestData<T extends string | TPermission = TPermission> =
  {
    name: string;
    description?: string;
    permissionKeys: T[];
  };

export type TPutRoleResponseData<T extends string | TPermission = TPermission> =
  {
    id: string;
    name: string;
    description?: string;
    permissionKeys: T[];
  };

export type TPutRoleResponseErrorCode = TErrorCode;

export type TDeleteRoleRequestData = undefined;

export type TDeleteRoleResponseData = undefined;

export type TDeleteRoleResponseErrorCode = TErrorCode;
