import type {
  TGetProjectsResponseData,
  TGetProjectsResponseErrorCode,
} from '@/api-interfaces/[organizationId]/projects/interfaces';
import { useQuery } from '@/api/use-query';
import { useLoggedInOrganization } from '@/hooks/use-logged-in-organization';
import { useProjectsQuerySearchParams } from './use-projects-query-search-params';

const useProjectsQuery = () => {
  const { data: organization } = useLoggedInOrganization();
  const [searchParams] = useProjectsQuerySearchParams();
  const urlSearchParams = new URLSearchParams({
    page: searchParams.page,
    size: searchParams.size,
    sortBy: searchParams.sortBy,
    sortOrder: searchParams.sortOrder,
    search: searchParams.search,
  }).toString();

  return useQuery<
    TGetProjectsResponseData,
    string,
    TGetProjectsResponseErrorCode
  >(
    organization?.id
      ? [`/${organization?.id}/projects`, urlSearchParams].join('?')
      : undefined
  );
};

export { useProjectsQuery };
