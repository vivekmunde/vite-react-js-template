import type {
  TGetRolesResponseData,
  TGetRolesResponseErrorCode,
} from '@/api-interfaces/[organizationId]/roles/interfaces';
import { useQuery } from '@/api/use-query';
import { useLoggedInOrganization } from '@/hooks/use-logged-in-organization';
import { useRolesQuerySearchParams } from './use-roles-query-search-params';

const useRolesQuery = () => {
  const { data: organization } = useLoggedInOrganization();
  const [searchParams] = useRolesQuerySearchParams();
  const urlSearchParams = new URLSearchParams({
    page: searchParams.page,
    size: searchParams.size,
    sortBy: searchParams.sortBy,
    sortOrder: searchParams.sortOrder,
    search: searchParams.search,
  }).toString();

  return useQuery<TGetRolesResponseData, string, TGetRolesResponseErrorCode>(
    organization?.id
      ? [`/${organization?.id}/roles`, urlSearchParams].join('?')
      : undefined
  );
};

export { useRolesQuery };
