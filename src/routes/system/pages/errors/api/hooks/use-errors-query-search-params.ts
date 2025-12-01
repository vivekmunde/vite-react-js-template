import { useSearchParams } from '@/hooks/use-search-params';

const useApiErrorsQuerySearchParams = () =>
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

export { useApiErrorsQuerySearchParams };
