import type {
  TGetRolesResponseData,
  TGetRolesResponseErrorCode,
} from '@/api-interfaces/system/roles/interfaces';
import { useQuery } from '@/api/use-query';
import { useRolesQuerySearchParams } from './use-roles-query-search-params';

const useRolesQuery = () => {
  const [searchParams] = useRolesQuerySearchParams();
  const urlSearchParams = new URLSearchParams({
    page: searchParams.page,
    size: searchParams.size,
    sortBy: searchParams.sortBy,
    sortOrder: searchParams.sortOrder,
    search: searchParams.search,
  }).toString();

  return useQuery<TGetRolesResponseData, string, TGetRolesResponseErrorCode>(
    ['/system/roles', urlSearchParams].join('?')
  );
};

export { useRolesQuery };
