import type { TErrorCode } from '@/api-interfaces/error-code/interfaces';

export type TPostUIErrorDetails = {
  message: string;
  name: string;
  stack?: string;
  componentStack?: string;
  digest?: string;
};

export type TPostUIErrorRequestData = {
  error: TPostUIErrorDetails;
  url: string;
};

export type TPostUIErrorResponseData = {
  id: string;
};

export type TPostUIErrorResponseErrorCode = TErrorCode;
