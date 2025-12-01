import { useSearchParams } from '@/hooks/use-search-params';
import React from 'react';
import { DataTestId } from '../ui/data-test-id';
import { If } from '../ui/if';
import {
  TableColumnSortAscIcon,
  TableColumnSortDescIcon,
  TableColumnSortIcon,
  TableThButton,
} from '../ui/table';
import { cn } from '../ui/utils/cn';

const SearchParamsTableThSortButton: React.FC<
  React.ComponentProps<typeof TableThButton> & {
    name: string;
    prefix?: string;
  }
> = ({ className, name, prefix, onClick, ...props }) => {
  const [searchParams, setSearchParams] = useSearchParams<{
    sortBy?: string;
    sortOrder?: string;
  }>({}, prefix);

  return (
    <DataTestId value="sort">
      <TableThButton
        className={cn('--search-params-table-th-sort-button', className)}
        onClick={e => {
          setSearchParams({
            sortBy: name,
            sortOrder: searchParams.sortOrder === 'asc' ? 'desc' : 'asc',
          });
          onClick?.(e);
        }}
        {...props}
      >
        <If condition={searchParams.sortBy === name}>
          <If.True>
            <If condition={searchParams.sortOrder === 'asc'}>
              <If.True>
                <TableColumnSortAscIcon />
              </If.True>
            </If>
            <If condition={searchParams.sortOrder === 'desc'}>
              <If.True>
                <TableColumnSortDescIcon />
              </If.True>
            </If>
          </If.True>
          <If.False>
            <TableColumnSortIcon />
          </If.False>
        </If>
      </TableThButton>
    </DataTestId>
  );
};

export { SearchParamsTableThSortButton };
