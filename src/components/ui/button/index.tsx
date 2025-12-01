import { cn } from '@/components/ui/utils/cn';
import { Slot } from '@radix-ui/react-slot';
import { type VariantProps } from 'class-variance-authority';
import * as React from 'react';
import { DataTestId } from '../data-test-id';
import { LoadingIcon } from '../loading-icon';
import { Skeleton } from '../skeleton';
import { useShowSkeleton } from '../skeleton/hooks';
import { buttonVariants } from './variants';

export type TButtonProps = React.ComponentProps<'button'> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
    loading?: boolean;
  };

const Button: React.FC<TButtonProps> = ({
  className,
  variant,
  size,
  asChild = false,
  type = 'button',
  loading = false,
  children,
  onClick,
  ...props
}) => {
  const Comp = asChild ? Slot : 'button';
  const showSkeleton = useShowSkeleton();

  const _className = cn(buttonVariants({ variant, size, loading }), className);

  return (
    <DataTestId value="button">
      {showSkeleton ? (
        <Skeleton className={_className}>{children}</Skeleton>
      ) : (
        <Comp
          data-slot="button"
          className={_className}
          type={type}
          onClick={!loading ? onClick : undefined}
          {...props}
        >
          {asChild ? (
            children
          ) : (
            <React.Fragment>
              {children}
              {loading && <LoadingIcon className="absolute" />}
            </React.Fragment>
          )}
        </Comp>
      )}
    </DataTestId>
  );
};

export { Button };
