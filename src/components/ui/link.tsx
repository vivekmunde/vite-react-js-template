import { cn } from '@/components/ui/utils/cn';
import * as React from 'react';
import { DataTestId } from './data-test-id';
import { Skeleton } from './skeleton';
import { useShowSkeleton } from './skeleton/hooks';
import { focusVariants } from './variants';

const Link: React.FC<React.ComponentProps<'a'>> = ({
  className,
  children,
  ...props
}) => {
  const showSkeleton = useShowSkeleton();

  const _className = cn(
    '--link',
    'text-link underline underline-offset-2',
    focusVariants(),
    'focus-visible:ring-link focus-visible:ring-offset-2 focus-visible:rounded-sm',
    'disabled:pointer-events-none disabled:opacity-50',
    className
  );

  return (
    <DataTestId value="link">
      {showSkeleton ? (
        <Skeleton className={_className}>{children}</Skeleton>
      ) : (
        <a data-slot="link" className={_className} {...props}>
          {children}
        </a>
      )}
    </DataTestId>
  );
};

export { Link };
