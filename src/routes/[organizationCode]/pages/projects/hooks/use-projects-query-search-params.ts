import { useSearchParams } from '@/hooks/use-search-params';

const useProjectsQuerySearchParams = () =>
  useSearchParams(
    {
      page: '1',
      size: '10',
      sortBy: 'name',
      sortOrder: 'asc',
      search: '',
    },
    'projects'
  );

export { useProjectsQuerySearchParams };
