import { cn } from '@/components/ui/utils/cn';
import * as SeparatorPrimitive from '@radix-ui/react-separator';
import * as React from 'react';
import { DataTestId } from './data-test-id';

const Separator: React.FC<
  React.ComponentProps<typeof SeparatorPrimitive.Root>
> = ({
  className,
  orientation = 'horizontal',
  decorative = true,
  ...props
}) => {
  return (
    <DataTestId value="separator">
      <SeparatorPrimitive.Root
        data-slot="separator"
        decorative={decorative}
        orientation={orientation}
        className={cn(
          '--separator',
          'bg-border shrink-0 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px',
          className
        )}
        {...props}
      />
    </DataTestId>
  );
};

export { Separator };
