import type { TErrorCode } from '@/api-interfaces/error-code/interfaces';

type TOrganizationTheme = {
  light?: {
    colors?: {
      primary?: string;
      primaryForeground?: string;
      link?: string;
    };
  };
  dark?: {
    colors?: {
      primary?: string;
      primaryForeground?: string;
      link?: string;
    };
  };
};

export type TGetOrganizationResponseData = {
  id: string;
  name: string;
  code: string;
  theme?: TOrganizationTheme;
};

export type TGetOrganizationResponseErrorCode = TErrorCode;
