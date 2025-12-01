import type { TErrorCode } from '@/api-interfaces/error-code/interfaces';
import type { TModelCollection } from '@/api/types';

export type TGetApiErrorDetails = {
  statusCode?: number;
  message?: string;
  stack?: string;
};

export type TGetApiErrorRequest = {
  body?: string;
  method?: string;
  mode?: string;
  text?: string;
};

export type TGetApiError = {
  id: string;
  error: TGetApiErrorDetails;
  url: string;
  request?: TGetApiErrorRequest;
  userId?: string;
  createdAt: Date;
};

export type TGetApiErrorsResponseData = TModelCollection<TGetApiError>;

export type TGetApiErrorsResponseErrorCode = TErrorCode;
