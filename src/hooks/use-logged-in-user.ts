import type {
  TGetUserResponseData,
  TGetUserResponseErrorCode,
} from '@/api-interfaces/me/interfaces';
import { useQuery } from '@/api/use-query';

const useLoggedInUser = () =>
  useQuery<TGetUserResponseData, string, TGetUserResponseErrorCode>('/me');

export { useLoggedInUser };
