import React, { useMemo } from 'react';
import { paginate } from './paginate';
import type { TPagination, TPaginationArgs } from './types';
import { usePaginate } from './use-paginate';

export type TPaginationProviderProps<T> = Partial<TPaginationArgs> & {
  data: T[];
};

export type TStatefulPaginationProviderProps<T> =
  TPaginationProviderProps<T> & {
    children: (
      args: TPagination<T>,
      actions: {
        onChange: (args: TPaginationArgs) => void;
      }
    ) => React.ReactNode;
  };

export type TStatelessPaginationProviderProps<T> =
  TPaginationProviderProps<T> & {
    children: (args: TPagination<T>) => React.ReactNode;
  };

const StatefulPaginationProvider = <T,>({
  children,
  ...props
}: TStatefulPaginationProviderProps<T>) => {
  const [paginated, paginate] = usePaginate(props.data, {
    page: props.page ?? 0,
    size: props.size,
    numberOfPages: props.numberOfPages,
  });
  return children(paginated, paginate);
};

const StatelessPaginationProvider = <T,>({
  children,
  page,
  size,
  numberOfPages,
  data,
}: TStatelessPaginationProviderProps<T>) => {
  const paginated = useMemo(() => {
    return paginate(data, {
      page: page ?? 0,
      size,
      numberOfPages,
    });
  }, [page, size, numberOfPages, data]);

  return children(paginated);
};

export { StatefulPaginationProvider, StatelessPaginationProvider };
