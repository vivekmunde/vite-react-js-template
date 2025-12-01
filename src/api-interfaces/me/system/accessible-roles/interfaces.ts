import type { TErrorCode } from '@/api-interfaces/error-code/interfaces';
import type { TModelCollection } from '@/api/types';

export type TGetRole = {
  id: string;
  name: string;
  description?: string;
};

export type TGetRolesResponseData = TModelCollection<TGetRole>;

export type TGetRolesResponseErrorCode = TErrorCode;
