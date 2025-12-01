import type { TErrorCode } from '@/api-interfaces/error-code/interfaces';

export type TGetProjectResponseData = {
  id: string;
  name?: string;
  description?: string;
  documentNumberPrefix: string;
};

export type TGetProjectResponseErrorCode = TErrorCode;

export type TPutProjectRequestData = {
  name: string;
  description?: string;
};

export type TPutProjectResponseData = {
  id: string;
  name: string;
  description?: string;
  documentNumberPrefix: string;
};

export type TPutProjectResponseErrorCode = TErrorCode;

export type TDeleteProjectRequestData = undefined;

export type TDeleteProjectResponseData = undefined;

export type TDeleteProjectResponseErrorCode = TErrorCode;
