import type { TErrorCode } from '@/api-interfaces/error-code/interfaces';
import type { TModelCollection } from '@/api/types';

export type TGetOrganization = {
  id: string;
  name: string;
  code: string;
};

export type TGetOrganizationsResponseData = TModelCollection<TGetOrganization>;

export type TGetOrganizationsResponseErrorCode = TErrorCode;
