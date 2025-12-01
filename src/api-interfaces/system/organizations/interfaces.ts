import type { TErrorCode } from '@/api-interfaces/error-code/interfaces';
import type { TModelCollection } from '@/api/types';
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

export type TGetOrganization = {
  id: string;
  name: string;
  code: string;
  email?: string;
  permissionKeys: TPermission[];
  theme?: TOrganizationTheme;
};

export type TGetOrganizationsResponseData = TModelCollection<TGetOrganization>;

export type TGetOrganizationsResponseErrorCode = TErrorCode;

export type TPostOrganizationRequestData = {
  name: string;
  code?: string;
  email?: string;
  permissionKeys: TPermission[];
  themeLightColorPrimary?: string;
  themeLightColorPrimaryForeground?: string;
  themeLightColorLink?: string;
  themeDarkColorPrimary?: string;
  themeDarkColorPrimaryForeground?: string;
  themeDarkColorLink?: string;
};

export type TPostOrganizationResponseData = {
  id: string;
  name: string;
  code: string;
  email?: string;
  permissionKeys: TPermission[];
  theme?: TOrganizationTheme;
};

export type TPostOrganizationResponseErrorCode =
  | TErrorCode
  | 'DUPLICATE_ORGANIZATION_CODE';
