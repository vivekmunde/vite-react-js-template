import { useEffect, useMemo, useRef, useState } from 'react';
import { paginate } from './paginate';
import type { TPagination, TPaginationArgs } from './types';

const usePaginate = <T>(
  dataSource: T[],
  args?: Partial<TPaginationArgs>
): [
  TPagination<T>,
  apis: {
    onChange: (args: TPaginationArgs) => void;
  },
] => {
  const paginationArgs: TPaginationArgs = {
    page: args?.page ?? 1,
    size: args?.size ?? 10,
    numberOfPages: args?.numberOfPages ?? 5,
  };

  const refInitialArgs = useRef(paginationArgs);

  const [{ page, size, numberOfPages, data }, setState] = useState<
    TPaginationArgs & {
      data: T[];
    }
  >({
    page: paginationArgs?.page,
    size: paginationArgs?.size,
    numberOfPages: paginationArgs?.numberOfPages,
    data: dataSource,
  });

  const onChange = (changedArgs: TPaginationArgs) => {
    if (
      page !== changedArgs.page ||
      size !== changedArgs.size ||
      numberOfPages !== changedArgs.numberOfPages
    ) {
      setState({
        data,
        page: changedArgs.page ?? page,
        size: changedArgs.size ?? size,
        numberOfPages: changedArgs.numberOfPages ?? numberOfPages,
      });
    }
  };

  const paginated = useMemo(() => {
    return paginate(data, {
      page,
      size,
      numberOfPages,
    });
  }, [page, size, numberOfPages, data]);

  useEffect(() => {
    if (
      refInitialArgs.current?.page !== paginationArgs?.page ||
      refInitialArgs.current?.size !== paginationArgs?.size ||
      refInitialArgs.current?.numberOfPages !== paginationArgs?.numberOfPages ||
      data !== dataSource
    ) {
      setState(currentState => {
        return {
          ...currentState,
          page: paginationArgs?.page ?? page,
          size: paginationArgs?.size ?? size,
          numberOfPages: paginationArgs?.numberOfPages ?? numberOfPages,
          data: dataSource,
        };
      });
    }
  }, [
    paginationArgs?.page,
    paginationArgs?.size,
    paginationArgs?.numberOfPages,
    dataSource,
  ]);

  return [paginated, { onChange }];
};

export { usePaginate };
