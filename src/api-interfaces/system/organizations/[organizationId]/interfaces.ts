import type { TErrorCode } from '@/api-interfaces/error-code/interfaces';
import type { TPermission } from '@/types/rbac';

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
  email?: string;
  permissionKeys: TPermission[];
  theme?: TOrganizationTheme;
};

export type TGetOrganizationResponseErrorCode = TErrorCode;

export type TPutOrganizationRequestData = {
  name: string;
  code: string;
  email?: string;
  permissionKeys: TPermission[];
  themeLightColorPrimary?: string;
  themeLightColorPrimaryForeground?: string;
  themeLightColorLink?: string;
  themeDarkColorPrimary?: string;
  themeDarkColorPrimaryForeground?: string;
  themeDarkColorLink?: string;
};

export type TPutOrganizationResponseData = {
  id: string;
  name: string;
  code: string;
  email?: string;
  permissionKeys: TPermission[];
  theme?: TOrganizationTheme;
};

export type TPutOrganizationResponseErrorCode =
  | TErrorCode
  | 'DUPLICATE_ORGANIZATION_CODE';

export type TDeleteOrganizationResponseErrorCode = TErrorCode;

export type TDeleteOrganizationRequestData = undefined;

export type TDeleteOrganizationResponseData = undefined;
