import { useSearchParams } from '@/hooks/use-search-params';

const useOrganizationUsersQuerySearchParams = () =>
  useSearchParams(
    {
      page: '1',
      size: '10',
      sortBy: 'name',
      sortOrder: 'asc',
      search: '',
    },
    'users'
  );

export { useOrganizationUsersQuerySearchParams };
