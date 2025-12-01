import type { TErrorCode } from '@/api-interfaces/error-code/interfaces';
import type { TModelCollection } from '@/api/types';

export type TGetProject = {
  id: string;
  name: string;
  description?: string;
  documentNumberPrefix: string;
};

export type TGetProjectsResponseData = TModelCollection<TGetProject>;

export type TGetProjectsResponseErrorCode = TErrorCode;

export type TPostProjectRequestData = {
  name: string;
  description?: string;
  documentNumberPrefix: string;
};

export type TPostProjectResponseData = {
  id: string;
  name: string;
  description?: string;
  documentNumberPrefix: string;
};

export type TPostProjectResponseErrorCode = TErrorCode;
