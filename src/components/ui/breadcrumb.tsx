import { cn } from '@/components/ui/utils/cn';
import { Slot } from '@radix-ui/react-slot';
import { ChevronRight, MoreHorizontal } from 'lucide-react';
import * as React from 'react';
import { Button } from './button';
import { DataTestId } from './data-test-id';
import { Skeleton } from './skeleton';
import { useShowSkeleton } from './skeleton/hooks';
import { focusVariants } from './variants';

const Breadcrumb: React.FC<React.ComponentProps<'nav'>> = ({
  className,
  ...props
}) => {
  return (
    <DataTestId value="breadcrumb">
      <nav
        aria-label="breadcrumb"
        data-slot="breadcrumb"
        className={cn('--breadcrumb', className)}
        {...props}
      />
    </DataTestId>
  );
};

const BreadcrumbList: React.FC<React.ComponentProps<'ol'>> = ({
  className,
  ...props
}) => {
  return (
    <DataTestId value="list">
      <ol
        data-slot="breadcrumb-list"
        className={cn(
          '--breadcrumb-list',
          'text-muted-foreground flex flex-wrap items-center gap-1.5 text-sm break-words sm:gap-2.5',
          className
        )}
        {...props}
      />
    </DataTestId>
  );
};

const BreadcrumbItem: React.FC<React.ComponentProps<'li'>> = ({
  className,
  children,
  ...props
}) => {
  const showSkeleton = useShowSkeleton();

  const _className = cn(
    '--breadcrumb-item',
    'inline-flex items-center gap-1.5',
    className
  );

  return (
    <DataTestId value="item">
      {showSkeleton ? (
        <Skeleton className={_className}>{children}</Skeleton>
      ) : (
        <li data-slot="breadcrumb-item" className={_className} {...props}>
          {children}
        </li>
      )}
    </DataTestId>
  );
};

const BreadcrumbLink: React.FC<
  React.ComponentProps<'a'> & {
    asChild?: boolean;
  }
> = ({ asChild, className, ...props }) => {
  const Comp = asChild ? Slot : 'a';

  return (
    <DataTestId value="link">
      <Comp
        data-slot="breadcrumb-link"
        className={cn(
          '--breadcrumb-link',
          'hover:text-foreground transition-colors',
          'text-link underline underline-offset-2',
          focusVariants(),
          'focus-visible:ring-link focus-visible:ring-offset-2 focus-visible:rounded-sm',
          'disabled:pointer-events-none disabled:opacity-50',
          className
        )}
        {...props}
      />
    </DataTestId>
  );
};

const BreadcrumbPage: React.FC<React.ComponentProps<'span'>> = ({
  className,
  ...props
}) => {
  return (
    <DataTestId value="page">
      <span
        data-slot="breadcrumb-page"
        role="link"
        aria-disabled="true"
        aria-current="page"
        className={cn(
          '--breadcrumb-page',
          'text-foreground font-normal',
          className
        )}
        {...props}
      />
    </DataTestId>
  );
};

const BreadcrumbSeparator: React.FC<React.ComponentProps<'li'>> = ({
  className,
  children,
  ...props
}) => {
  const showSkeleton = useShowSkeleton();

  return (
    <DataTestId value="separator">
      <li
        data-slot="breadcrumb-separator"
        role="presentation"
        aria-hidden="true"
        className={cn(
          '--breadcrumb-separator',
          '[&>svg]:size-3.5',
          showSkeleton && '[&>svg]:opacity-20',
          className
        )}
        {...props}
      >
        {children ?? <ChevronRight />}
      </li>
    </DataTestId>
  );
};

const BreadcrumbEllipsis: React.FC<React.ComponentProps<'span'>> = ({
  className,
  ...props
}) => {
  return (
    <DataTestId value="ellipsis">
      <span
        data-slot="breadcrumb-ellipsis"
        role="presentation"
        aria-hidden="true"
        className={cn(
          '--breadcrumb-ellipsis',
          'flex items-center justify-center',
          className
        )}
        {...props}
      >
        <MoreHorizontal className="size-4" />
        <span className="sr-only">More</span>
      </span>
    </DataTestId>
  );
};

const BreadcrumbMenuTrigger: React.FC<React.ComponentProps<typeof Button>> = ({
  className,
  variant = 'ghost',
  size = 'sm',
  ...props
}) => {
  return (
    <DataTestId value="menu-trigger">
      <Button
        data-slot="breadcrumb-menu-trigger"
        variant={variant}
        size={size}
        className={cn(
          '--breadcrumb-menu-trigger',
          'size-auto p-0.5 min-h-0 min-w-0 h-auto w-auto',
          className
        )}
        {...props}
      />
    </DataTestId>
  );
};

export {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbMenuTrigger,
  BreadcrumbPage,
  BreadcrumbSeparator,
};
