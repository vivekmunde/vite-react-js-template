import { cn } from '@/components/ui/utils/cn';
import * as SwitchPrimitive from '@radix-ui/react-switch';
import * as React from 'react';
import { DataTestId } from './data-test-id';
import { Skeleton } from './skeleton';
import { useShowSkeleton } from './skeleton/hooks';
import { focusVariants } from './variants';

const SwitchCase: React.FC<React.ComponentProps<'div'>> = ({
  className,
  ...props
}) => (
  <DataTestId value="switch-case">
    <div
      className={cn(
        '--switch-case',
        'flex flex-row gap-2 items-center',
        className
      )}
      {...props}
    />
  </DataTestId>
);

const Switch: React.FC<React.ComponentProps<typeof SwitchPrimitive.Root>> = ({
  className,
  ...props
}) => {
  const showSkeleton = useShowSkeleton();

  const render = () => {
    return (
      <SwitchPrimitive.Root
        data-slot="switch"
        className={cn(
          'peer data-[state=checked]:bg-foreground data-[state=unchecked]:bg-input',
          'inline-flex h-[1.15rem] w-8 shrink-0 items-center rounded-full border border-transparent shadow-xs transition-all outline-none',
          focusVariants(),
          'disabled:cursor-not-allowed disabled:opacity-50',
          className
        )}
        {...props}
      >
        <DataTestId value="thumb">
          <SwitchPrimitive.Thumb
            data-slot="switch-thumb"
            className={cn(
              'bg-background pointer-events-none block size-4 rounded-full ring-0',
              'transition-transform data-[state=checked]:translate-x-[calc(100%-2px)] data-[state=unchecked]:translate-x-0'
            )}
          />
        </DataTestId>
      </SwitchPrimitive.Root>
    );
  };

  return (
    <DataTestId value="switch">
      {showSkeleton ? (
        <Skeleton className={className}>{render()}</Skeleton>
      ) : (
        render()
      )}
    </DataTestId>
  );
};

export { Switch, SwitchCase };
