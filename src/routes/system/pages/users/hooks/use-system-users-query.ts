import type {
  TGetUsersResponseData,
  TGetUsersResponseErrorCode,
} from '@/api-interfaces/system/users/interfaces';
import { useQuery } from '@/api/use-query';
import { useSystemUsersQuerySearchParams } from './use-system-users-query-search-params';

const useSystemUsersQuery = () => {
  const [searchParams] = useSystemUsersQuerySearchParams();
  const urlSearchParams = new URLSearchParams({
    page: searchParams.page,
    size: searchParams.size,
    sortBy: searchParams.sortBy,
    sortOrder: searchParams.sortOrder,
    search: searchParams.search,
  }).toString();

  return useQuery<TGetUsersResponseData, string, TGetUsersResponseErrorCode>(
    ['/system/users', urlSearchParams].join('?')
  );
};

export { useSystemUsersQuery };
