import type {
  TGetSessionResponseData,
  TGetSessionResponseErrorCode,
} from '@/api-interfaces/auth/session/interfaces';
import { useQuery } from '@/api/use-query';

const useUserLoginSession = () =>
  useQuery<TGetSessionResponseData, string, TGetSessionResponseErrorCode>(
    '/auth/session'
  );

export { useUserLoginSession };
