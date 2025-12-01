import { cn } from '@/components/ui/utils/cn';
import * as LabelPrimitive from '@radix-ui/react-label';
import { type VariantProps } from 'class-variance-authority';
import * as React from 'react';
import { DataTestId } from '../data-test-id';
import { Skeleton } from '../skeleton';
import { useShowSkeleton } from '../skeleton/hooks';
import { labelVariants } from './variants';

const Label: React.FC<
  React.ComponentProps<typeof LabelPrimitive.Root> &
    VariantProps<typeof labelVariants>
> = ({ className, children, size, ...props }) => {
  const showSkeleton = useShowSkeleton();

  const _className = cn(labelVariants({ size }), className);

  return (
    <DataTestId value="label">
      {showSkeleton ? (
        <Skeleton className={_className}>{children}</Skeleton>
      ) : (
        <LabelPrimitive.Root
          data-slot="label"
          className={_className}
          {...props}
        >
          {children}
        </LabelPrimitive.Root>
      )}
    </DataTestId>
  );
};

export { Label };
