import { useSearchParams } from '@/hooks/use-search-params';

const useRolesQuerySearchParams = () =>
  useSearchParams(
    {
      page: '1',
      size: '5',
      sortBy: 'name',
      sortOrder: 'asc',
      search: '',
    },
    'roles'
  );

export { useRolesQuerySearchParams };
