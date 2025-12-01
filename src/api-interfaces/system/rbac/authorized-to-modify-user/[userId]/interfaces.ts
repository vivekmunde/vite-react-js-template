import type { TErrorCode } from '@/api-interfaces/error-code/interfaces';

export type TGetAuthorizedToModifyUserResponseData = {
  authorized: boolean;
};

export type TGetAuthorizedToModifyUserResponseErrorCode = TErrorCode;
