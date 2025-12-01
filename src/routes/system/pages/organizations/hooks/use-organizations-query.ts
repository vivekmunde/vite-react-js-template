import type {
  TGetOrganizationsResponseData,
  TGetOrganizationsResponseErrorCode,
} from '@/api-interfaces/system/organizations/interfaces';
import { useQuery } from '@/api/use-query';
import { useOrganizationsQuerySearchParams } from './use-organizations-query-search-params';

const useOrganizationsQuery = () => {
  const [searchParams] = useOrganizationsQuerySearchParams();
  const urlSearchParams = new URLSearchParams({
    page: searchParams.page,
    size: searchParams.size,
    sortBy: searchParams.sortBy,
    sortOrder: searchParams.sortOrder,
    search: searchParams.search,
  }).toString();

  return useQuery<
    TGetOrganizationsResponseData,
    string,
    TGetOrganizationsResponseErrorCode
  >(['/system/organizations', urlSearchParams].join('?'));
};

export { useOrganizationsQuery };
