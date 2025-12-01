import type { TErrorCode } from '@/api-interfaces/error-code/interfaces';

export type TPutThemeModePreferenceRequestData = {
  themeMode: string;
};

export type TPutThemeModePreferenceResponseData = {
  themeMode?: string;
};

export type TPutThemeModePreferenceResponseErrorCode = TErrorCode;
