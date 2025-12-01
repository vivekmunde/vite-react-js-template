import type {
  TGetUIErrorsResponseData,
  TGetUIErrorsResponseErrorCode,
} from '@/api-interfaces/system/errors/ui/interfaces';
import { useQuery } from '@/api/use-query';
import { useUIErrorsQuerySearchParams } from './use-errors-query-search-params';

const useUIErrorsQuery = () => {
  const [searchParams] = useUIErrorsQuerySearchParams();
  const urlSearchParams = new URLSearchParams({
    page: searchParams.page,
    size: searchParams.size,
    sortBy: searchParams.sortBy,
    sortOrder: searchParams.sortOrder,
    search: searchParams.search,
  }).toString();

  return useQuery<
    TGetUIErrorsResponseData,
    string,
    TGetUIErrorsResponseErrorCode
  >(['/system/errors/ui', urlSearchParams].join('?'));
};

export { useUIErrorsQuery };
