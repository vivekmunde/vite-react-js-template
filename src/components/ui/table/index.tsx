import { cn } from '@/components/ui/utils/cn';
import {
  ArrowUpDownIcon,
  FilterIcon,
  type LucideProps,
  MoveDownIcon,
  MoveUpIcon,
} from 'lucide-react';
import React, { createContext, useContext } from 'react';
import { Button } from '../button';
import { DataTestId } from '../data-test-id';
import { useCombinedRef } from '../hooks/use-combined-ref';
import { Icon } from '../icon';
import { useStickyColumns } from './use-sticky-columns';

export type TTableParent = 'Table' | 'Header' | 'Body' | 'Footer';

export type TTableBorder = 'none' | 'horizontal' | 'vertical' | 'grid';

const TableParentContext = createContext<TTableParent>('Table');

const TableBorderContext = createContext<TTableBorder>('horizontal');

const TableParentContextProvider: React.FC<{
  children: React.ReactNode;
  parent: TTableParent;
}> = ({ children, parent }) => {
  return (
    <TableParentContext.Provider value={parent}>
      {children}
    </TableParentContext.Provider>
  );
};

const TableBorderContextProvider: React.FC<{
  children: React.ReactNode;
  border: TTableBorder;
}> = ({ children, border }) => {
  return (
    <TableBorderContext.Provider value={border}>
      {children}
    </TableBorderContext.Provider>
  );
};

const TableBody: React.FC<React.ComponentProps<'tbody'>> = ({
  className,
  ...props
}) => {
  return (
    <TableParentContextProvider parent="Body">
      <DataTestId value="body">
        <tbody className={cn('--table-body', className)} {...props} />
      </DataTestId>
    </TableParentContextProvider>
  );
};

const TableCaption: React.FC<React.ComponentProps<'caption'>> = ({
  className,
  ...props
}) => {
  const border = useContext(TableBorderContext);

  return (
    <DataTestId value="caption">
      <caption
        className={cn(
          '--table-caption',
          (border === 'horizontal' || border === 'grid') && 'border-t',
          'text-sm text-muted-foreground px-4 py-2',
          className
        )}
        {...props}
      />
    </DataTestId>
  );
};

const stickyLeftClassNames = `--sticky-l sticky bg-background after:content-[''] after:absolute after:right-0 after:top-0 after:bottom-0 after:bg-border`;
const stickyRightClassNames = `--sticky-r sticky bg-background after:content-[''] after:absolute after:left-0 after:top-0 after:bottom-0 after:bg-border`;

const TableTh: React.FC<
  React.ComponentProps<'th'> & {
    sticky?: 'left' | 'right';
  }
> = ({ className, sticky, ...props }) => {
  const border = useContext(TableBorderContext);

  return (
    <DataTestId value="th">
      <th
        className={cn(
          '--table-th',
          'first:rounded-tl last:rounded-tr',
          (border === 'none' || border === 'horizontal') &&
            'px-2 py-1.5 first:pl-4 last:pr-4',
          (border === 'vertical' || border === 'grid') && 'px-2 py-1.5',
          'text-left align-middle font-medium capitalize text-muted-foreground',
          (border === 'vertical' || border === 'grid') &&
            'border-r last:border-r-0',
          sticky === 'left' && stickyLeftClassNames,
          sticky === 'right' && stickyRightClassNames,
          className
        )}
        {...props}
      />
    </DataTestId>
  );
};

const TableThContent: React.FC<React.ComponentProps<'div'>> = ({
  className,
  ...props
}) => {
  return (
    <div
      className={cn(
        '--table-th-content',
        'flex flex-row items-center gap-1',
        className
      )}
      {...props}
    />
  );
};

const TableThActions: React.FC<React.ComponentProps<'div'>> = ({
  className,
  ...props
}) => {
  return (
    <div
      className={cn(
        '--table-th-actions',
        'flex flex-row items-center gap-[1px]',
        className
      )}
      {...props}
    />
  );
};

const TableThButton: React.FC<React.ComponentProps<'button'>> = ({
  className,
  ...props
}) => {
  return (
    <Button
      className={cn(
        '--table-th-button',
        'p-1 min-h-max min-w-max',
        "[&_svg:not([class*='size-'])]:size-3",
        className
      )}
      size="sm"
      variant="ghost"
      {...props}
    />
  );
};

const TableTd: React.FC<
  React.ComponentProps<'td'> & {
    sticky?: 'left' | 'right';
  }
> = ({ className, sticky, ...props }) => {
  const border = useContext(TableBorderContext);

  return (
    <DataTestId value="td">
      <td
        className={cn(
          '--table-td',
          'first:rounded-bl last:rounded-br',
          (border === 'none' || border === 'horizontal') &&
            'p-2 first:pl-4 last:pr-4',
          (border === 'vertical' || border === 'grid') && 'p-2',
          'align-middle',
          (border === 'vertical' || border === 'grid') &&
            'border-r last:border-r-0',
          sticky === 'left' && stickyLeftClassNames,
          sticky === 'right' && stickyRightClassNames,
          className
        )}
        {...props}
      />
    </DataTestId>
  );
};

const TableFooter: React.FC<React.ComponentProps<'tfoot'>> = ({
  className,
  ...props
}) => {
  const border = useContext(TableBorderContext);

  return (
    <TableParentContextProvider parent="Footer">
      <DataTestId value="footer">
        <tfoot
          className={cn(
            '--table-footer',
            (border === 'horizontal' || border === 'grid') && 'border-t',
            'font-medium',
            className
          )}
          {...props}
        />
      </DataTestId>
    </TableParentContextProvider>
  );
};

const TableHeader: React.FC<React.ComponentProps<'thead'>> = ({
  className,
  ...props
}) => (
  <TableParentContextProvider parent="Header">
    <DataTestId value="header">
      <thead className={cn('--table-header', className)} {...props} />
    </DataTestId>
  </TableParentContextProvider>
);

const TableColumnFilterIcon: React.FC<LucideProps> = ({
  className,
  ...props
}) => (
  <Icon>
    <FilterIcon
      className={cn('--table-header-filter-icon', className)}
      {...props}
    />
  </Icon>
);

const TableColumnSortIcon: React.FC<LucideProps> = ({
  className,
  ...props
}) => (
  <Icon>
    <ArrowUpDownIcon
      className={cn('--table-header-sort-asc-icon', className)}
      {...props}
    />
  </Icon>
);

const TableColumnSortAscIcon: React.FC<LucideProps> = ({
  className,
  ...props
}) => (
  <Icon>
    <MoveDownIcon
      className={cn('--table-header-sort-asc-icon', className)}
      {...props}
    />
  </Icon>
);

const TableColumnSortDescIcon: React.FC<LucideProps> = ({
  className,
  ...props
}) => (
  <Icon>
    <MoveUpIcon
      className={cn('--table-header-sort-desc-icon', className)}
      {...props}
    />
  </Icon>
);

const TableTr: React.FC<
  React.ComponentProps<'tr'> & { selected?: boolean }
> = ({ className, selected, ref, ...props }) => {
  const parent = useContext(TableParentContext);
  const border = useContext(TableBorderContext);
  const refTableTr = useCombinedRef(ref ?? null);

  return (
    <DataTestId value="tr">
      <tr
        ref={refNode => {
          refTableTr.current = refNode;
          if (typeof ref === 'function') {
            ref(refNode);
          }
        }}
        data-state={selected ? 'selected' : undefined}
        className={cn(
          '--table-tr',
          (border === 'horizontal' || border === 'grid') && 'border-b',
          (border === 'horizontal' || border === 'grid') &&
            (parent === 'Body' || parent === 'Footer') &&
            'last:border-b-0',
          'transition-colors [&:hover_td]:bg-accent',
          selected && '[&_td]:bg-accent',
          className
        )}
        {...props}
      />
    </DataTestId>
  );
};

const Table: React.FC<
  Omit<React.ComponentProps<'table'>, 'border'> & {
    border?: 'none' | 'horizontal' | 'vertical' | 'grid';
  }
> = ({ ref, className, border = 'horizontal', ...props }) => {
  const combinedRef = useCombinedRef(ref ?? null);
  const stickyColumns = useStickyColumns();

  React.useEffect(() => {
    stickyColumns(combinedRef.current);
  });

  return (
    <TableParentContextProvider parent="Table">
      <TableBorderContextProvider border={border}>
        <DataTestId value="table">
          <div className="relative w-full overflow-auto">
            <table
              ref={combinedRef}
              className={cn('--table', 'w-full caption-bottom', className)}
              {...props}
            />
          </div>
        </DataTestId>
      </TableBorderContextProvider>
    </TableParentContextProvider>
  );
};

export {
  Table,
  TableBody,
  TableBorderContextProvider,
  TableCaption,
  TableColumnFilterIcon,
  TableColumnSortAscIcon,
  TableColumnSortDescIcon,
  TableColumnSortIcon,
  TableFooter,
  TableHeader,
  TableParentContextProvider,
  TableTd,
  TableTh,
  TableThActions,
  TableThButton,
  TableThContent,
  TableTr,
};
