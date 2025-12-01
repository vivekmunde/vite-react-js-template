import type {
  TGetApiErrorsResponseData,
  TGetApiErrorsResponseErrorCode,
} from '@/api-interfaces/system/errors/api/interfaces';
import { useQuery } from '@/api/use-query';
import { useApiErrorsQuerySearchParams } from './use-errors-query-search-params';

const useApiErrorsQuery = () => {
  const [searchParams] = useApiErrorsQuerySearchParams();
  const urlSearchParams = new URLSearchParams({
    page: searchParams.page,
    size: searchParams.size,
    sortBy: searchParams.sortBy,
    sortOrder: searchParams.sortOrder,
    search: searchParams.search,
  }).toString();

  return useQuery<
    TGetApiErrorsResponseData,
    string,
    TGetApiErrorsResponseErrorCode
  >(['/system/errors/api', urlSearchParams].join('?'));
};

export { useApiErrorsQuery };
