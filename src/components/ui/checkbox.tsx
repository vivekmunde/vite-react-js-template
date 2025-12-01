import { cn } from '@/components/ui/utils/cn';
import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import { CheckIcon } from 'lucide-react';
import * as React from 'react';
import { DataTestId } from './data-test-id';
import { Skeleton } from './skeleton';
import { useShowSkeleton } from './skeleton/hooks';
import { focusVariants } from './variants';

const CheckboxCase: React.FC<React.ComponentProps<'div'>> = ({
  className,
  ...props
}) => {
  return (
    <DataTestId value="checkbox-case">
      <div
        className={cn(
          '--checkbox-case',
          'flex flex-row gap-2 items-center cursor-pointer',
          className
        )}
        {...props}
      />
    </DataTestId>
  );
};

const Checkbox: React.FC<
  React.ComponentProps<typeof CheckboxPrimitive.Root>
> = ({ className, ...props }) => {
  const showSkeleton = useShowSkeleton();

  return (
    <DataTestId value="checkbox">
      {showSkeleton ? (
        <Skeleton className={cn('--skeleton-checkbox size-5', className)} />
      ) : (
        <CheckboxPrimitive.Root
          data-slot="checkbox"
          className={cn(
            '--checkbox',
            'peer data-[state=checked]:bg-foreground data-[state=checked]:text-background data-[state=checked]:border-foreground aria-invalid:border-destructive size-5 shrink-0 rounded-[4px] border shadow-xs transition-shadow outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 cursor-pointer',
            focusVariants(),
            className
          )}
          {...props}
        >
          <CheckboxPrimitive.Indicator
            data-slot="checkbox-indicator"
            className="--checkbox-indicator flex items-center justify-center text-current transition-none"
          >
            <CheckIcon className="size-4 stroke-3" />
          </CheckboxPrimitive.Indicator>
        </CheckboxPrimitive.Root>
      )}
    </DataTestId>
  );
};

export { Checkbox, CheckboxCase };
