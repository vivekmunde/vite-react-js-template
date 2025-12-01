import { useSearchParams } from '@/hooks/use-search-params';

const useUIErrorsQuerySearchParams = () =>
  useSearchParams(
    {
      page: '1',
      size: '10',
      sortBy: 'createdAt',
      sortOrder: 'asc',
      search: '',
    },
    'errors'
  );

export { useUIErrorsQuerySearchParams };
