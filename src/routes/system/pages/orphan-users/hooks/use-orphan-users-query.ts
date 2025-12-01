import type {
  TGetUsersResponseData,
  TGetUsersResponseErrorCode,
} from '@/api-interfaces/system/orphan-users/interfaces';
import { useQuery } from '@/api/use-query';
import { useOrphanUsersQuerySearchParams } from './use-orphan-users-query-search-params';

const useOrphanUsersQuery = () => {
  const [searchParams] = useOrphanUsersQuerySearchParams();
  const urlSearchParams = new URLSearchParams({
    page: searchParams.page,
    size: searchParams.size,
    sortBy: searchParams.sortBy,
    sortOrder: searchParams.sortOrder,
    search: searchParams.search,
  }).toString();

  return useQuery<TGetUsersResponseData, string, TGetUsersResponseErrorCode>(
    ['/system/orphan-users', urlSearchParams].join('?')
  );
};

export { useOrphanUsersQuery };
