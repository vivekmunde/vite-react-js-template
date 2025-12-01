import type { TErrorCode } from '@/api-interfaces/error-code/interfaces';
import type { TModelCollection } from '@/api/types';
import type { TPermission } from '@/types/rbac';

export type TGetSystemAccessiblePermissionsResponseData =
  TModelCollection<TPermission>;

export type TGetSystemAccessiblePermissionsResponseErrorCode = TErrorCode;
