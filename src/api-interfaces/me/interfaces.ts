import type { TLanguage } from '@/types/language';
import type { TErrorCode } from '../error-code/interfaces';

export type TUserCategory = 'ORGANIZATION' | 'SYSTEM';

export type TGetUserResponseData = {
  id: string;
  email: string;
  name?: string;
  category: TUserCategory;
  preferences?: {
    language?: TLanguage;
    themeMode?: 'light' | 'dark';
  };
  rbac: {
    organizationRoles?: {
      organizationId: string;
      roles: {
        id: string;
        name: string;
      }[];
    }[];
    globalRoles?: {
      roleId: string;
      name: string;
    }[];
  };
};

export type TGetUserResponseErrorCode = TErrorCode;
