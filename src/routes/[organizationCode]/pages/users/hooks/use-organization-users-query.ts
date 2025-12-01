import type {
  TGetUsersResponseData,
  TGetUsersResponseErrorCode,
} from '@/api-interfaces/[organizationId]/users/interfaces';
import { useQuery } from '@/api/use-query';
import { useLoggedInOrganization } from '@/hooks/use-logged-in-organization';
import { useOrganizationUsersQuerySearchParams } from './use-organization-users-query-search-params';

const useOrganizationUsersQuery = () => {
  const { data: organization } = useLoggedInOrganization();
  const [searchParams] = useOrganizationUsersQuerySearchParams();
  const urlSearchParams = new URLSearchParams({
    page: searchParams.page,
    size: searchParams.size,
    sortBy: searchParams.sortBy,
    sortOrder: searchParams.sortOrder,
    search: searchParams.search,
  }).toString();

  return useQuery<TGetUsersResponseData, string, TGetUsersResponseErrorCode>(
    organization?.id
      ? [`/${organization?.id}/users`, urlSearchParams].join('?')
      : undefined
  );
};

export { useOrganizationUsersQuery };
