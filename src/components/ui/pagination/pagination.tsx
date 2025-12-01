import { Button } from '@/components/ui/button';
import { cn } from '@/components/ui/utils/cn';
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  MoreHorizontalIcon,
} from 'lucide-react';
import * as React from 'react';
import { buttonVariants } from '../button/variants';
import { DataTestId } from '../data-test-id';
import { Skeleton } from '../skeleton';
import { useShowSkeleton } from '../skeleton/hooks';

const PaginationContext = React.createContext<{
  size?: 'default' | 'sm' | undefined | null;
}>({ size: 'default' });

const Pagination: React.FC<
  React.ComponentProps<'nav'> & {
    size?: 'default' | 'sm' | undefined | null;
  }
> = ({ className, size, ...props }) => {
  return (
    <PaginationContext.Provider value={{ size }}>
      <DataTestId value="pagination">
        <nav
          role="navigation"
          aria-label="pagination"
          data-slot="pagination"
          className={cn('--pagination', 'flex flex-row', className)}
          {...props}
        />
      </DataTestId>
    </PaginationContext.Provider>
  );
};

const PaginationContent: React.FC<React.ComponentProps<'ul'>> = ({
  className,
  ...props
}) => {
  return (
    <ul
      data-slot="pagination-content"
      className={cn(
        '--pagination-content',
        'flex flex-row items-center gap-1',
        className
      )}
      {...props}
    />
  );
};

const PaginationItem: React.FC<React.ComponentProps<'li'>> = ({
  className,
  ...props
}) => {
  return (
    <li
      data-slot="pagination-item"
      className={cn('--pagination-item', className)}
      {...props}
    />
  );
};

type PaginationPageProps = {
  active?: boolean;
} & React.ComponentProps<typeof Button>;

const PaginationPage: React.FC<PaginationPageProps> = ({
  className,
  active,
  ...props
}) => {
  const { size } = React.useContext(PaginationContext);

  return (
    <DataTestId value="page">
      <Button
        aria-current={active ? 'page' : undefined}
        data-slot="pagination-link"
        data-active={active}
        className={cn(
          '--pagination-button',
          'min-w-9 px-2',
          size === 'sm' && 'min-w-8 px-2',
          active && 'border-foreground bg-muted',
          className
        )}
        variant="outline"
        size={size}
        {...props}
      />
    </DataTestId>
  );
};

const PaginationPrevious: React.FC<
  React.ComponentProps<typeof PaginationPage>
> = ({ className, ...props }) => {
  return (
    <DataTestId value="previous">
      <PaginationPage
        aria-label="Go to previous page"
        className={cn('--pagination-previous', className)}
        {...props}
      >
        <ChevronLeftIcon />
      </PaginationPage>
    </DataTestId>
  );
};

const PaginationNext: React.FC<React.ComponentProps<typeof PaginationPage>> = ({
  className,
  ...props
}) => {
  return (
    <DataTestId value="next">
      <PaginationPage
        aria-label="Go to next page"
        className={cn('--pagination-next', className)}
        {...props}
      >
        <ChevronRightIcon />
      </PaginationPage>
    </DataTestId>
  );
};

const PaginationEllipsis: React.FC<
  React.ComponentProps<typeof PaginationPage>
> = ({ className, ...props }) => {
  return (
    <DataTestId value="ellipsis">
      <PaginationPage
        aria-hidden
        data-slot="pagination-ellipsis"
        className={cn('--pagination-ellipsis', className)}
        {...props}
      >
        <MoreHorizontalIcon />
      </PaginationPage>
    </DataTestId>
  );
};

const formatNumber = (val: number) =>
  (val ?? 0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

const PaginationPageRange: React.FC<
  React.ComponentProps<'div'> & {
    page: number;
    size: number;
    total: number;
  }
> = ({ page, size, total, className, ...props }) => {
  const showSkeleton = useShowSkeleton();

  const startIndex = Math.min((page - 1) * size + 1, total);
  const endIndex = Math.min((page - 1) * size + size, total);

  const { size: buttonSize } = React.useContext(PaginationContext);

  const render = () => (
    <div
      className={cn(
        '--pagination-page-range',
        buttonVariants({ size: buttonSize }),
        className
      )}
      {...props}
    >
      {startIndex === endIndex ? (
        <span>{startIndex}</span>
      ) : (
        <React.Fragment>
          <span>{startIndex}</span>
          <span>-</span>
          <span>{endIndex}</span>
        </React.Fragment>
      )}
      <span className="px-0.5">/</span>
      <span>{formatNumber(total)}</span>
    </div>
  );

  return (
    <DataTestId value="range">
      {showSkeleton ? <Skeleton>{render()}</Skeleton> : render()}
    </DataTestId>
  );
};

export {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationNext,
  PaginationPage,
  PaginationPageRange,
  PaginationPrevious,
};
