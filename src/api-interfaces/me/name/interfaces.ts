import type { TErrorCode } from '@/api-interfaces/error-code/interfaces';

export type TPutNameRequestData = {
  name: string;
};

export type TPutNameResponseData = {
  id: string;
  name?: string;
};

export type TPutNameResponseErrorCode = TErrorCode;
