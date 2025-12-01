import { useSearchParams } from '@/hooks/use-search-params';

const useOrganizationsQuerySearchParams = () =>
  useSearchParams(
    {
      page: '1',
      size: '10',
      sortBy: 'name',
      sortOrder: 'asc',
      search: '',
    },
    'orgs'
  );

export { useOrganizationsQuerySearchParams };
