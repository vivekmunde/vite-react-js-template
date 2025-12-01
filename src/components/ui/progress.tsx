import { cn } from '@/components/ui/utils/cn';
import * as ProgressPrimitive from '@radix-ui/react-progress';
import * as React from 'react';
import { DataTestId } from './data-test-id';

const Progress: React.FC<
  React.ComponentProps<typeof ProgressPrimitive.Root>
> = ({ className, value, ...props }) => {
  return (
    <DataTestId value="progress">
      <ProgressPrimitive.Root
        data-slot="progress"
        className={cn(
          '--progress',
          'bg-primary/20 relative h-1.5 w-full overflow-hidden rounded-full',
          className
        )}
        {...props}
      >
        <ProgressPrimitive.Indicator
          data-slot="indicator"
          className={cn(
            '--progress-indicator',
            'bg-primary h-full w-full flex-1 transition-all'
          )}
          style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
        />
      </ProgressPrimitive.Root>
    </DataTestId>
  );
};

export { Progress };
