import type { TErrorCode } from '@/api-interfaces/error-code/interfaces';
import type { TModelCollection } from '@/api/types';
import type { TPermission } from '@/types/rbac';

export type TGetOrganizationResponseData = TModelCollection<TPermission>;

export type TGetOrganizationResponseErrorCode = TErrorCode;
