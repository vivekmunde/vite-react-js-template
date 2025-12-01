import type { TErrorCode } from '@/api-interfaces/error-code/interfaces';

export type TPutLanguagePreferenceRequestData = {
  language: string;
};

export type TPutLanguagePreferenceResponseData = {
  language?: string;
};

export type TPutLanguagePreferenceResponseErrorCode = TErrorCode;
