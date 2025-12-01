import { cn } from '@/components/ui/utils/cn';
import { type VariantProps } from 'class-variance-authority';
import * as React from 'react';
import { DataTestId } from '../data-test-id';
import { Skeleton } from '../skeleton';
import { useShowSkeleton } from '../skeleton/hooks';
import { inputVariants } from './variants';

export type TInputProps = Omit<React.ComponentProps<'input'>, 'size'> &
  VariantProps<typeof inputVariants>;

const Input: React.FC<TInputProps> = ({ className, type, size, ...props }) => {
  const showSkeleton = useShowSkeleton();

  const _className = cn(inputVariants({ size }), className);

  return (
    <DataTestId value="input">
      {showSkeleton ? (
        <Skeleton className={_className} />
      ) : (
        <input
          type={type}
          data-slot="input"
          className={_className}
          {...props}
        />
      )}
    </DataTestId>
  );
};

export { Input };
