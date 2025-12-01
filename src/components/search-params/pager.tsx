import { useSearchParams } from '@/hooks/use-search-params';
import React from 'react';
import { Pager } from '../ui/pagination/pager';
import { StatefulPaginationProvider } from '../ui/pagination/pagination-provider';

const SearchParamsPager: React.FC<{
  total?: number;
  numberOfPages?: number;
  prefix?: string;
}> = ({ prefix, numberOfPages = 5, ...props }) => {
  const [searchParams, setSearchParams] = useSearchParams<{
    page?: string;
    size?: string;
  }>(
    {
      page: '1',
      size: '10',
    },
    prefix
  );

  return (
    <StatefulPaginationProvider
      data={Array.from({ length: props.total ?? 0 }, (_, index) => index)}
      page={Number(searchParams.page ?? '1')}
      size={Number(searchParams.size ?? '10')}
      numberOfPages={numberOfPages}
    >
      {({ page, pages, size, total, hasNext, hasPrev }, paginate) => (
        <Pager
          pages={pages}
          page={page}
          size={size}
          numberOfPages={numberOfPages}
          total={total}
          hasNext={hasNext}
          hasPrev={hasPrev}
          onChange={page => {
            paginate.onChange({ page });
            setSearchParams({
              ...searchParams,
              page: page.toString(),
              size: size.toString(),
            });
          }}
        />
      )}
    </StatefulPaginationProvider>
  );
};

export { SearchParamsPager };
