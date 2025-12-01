import { cn } from '@/components/ui/utils/cn';
import * as TooltipPrimitive from '@radix-ui/react-tooltip';
import * as React from 'react';
import { DataTestId } from './data-test-id';

const TooltipProvider: React.FC<
  React.ComponentProps<typeof TooltipPrimitive.Provider>
> = ({ delayDuration = 0, ...props }) => {
  return (
    <TooltipPrimitive.Provider
      data-slot="tooltip-provider"
      delayDuration={delayDuration}
      {...props}
    />
  );
};

const Tooltip: React.FC<React.ComponentProps<typeof TooltipPrimitive.Root>> = ({
  ...props
}) => {
  return (
    <TooltipProvider>
      <DataTestId value="tooltip">
        <TooltipPrimitive.Root data-slot="tooltip" {...props} />
      </DataTestId>
    </TooltipProvider>
  );
};

const TooltipTrigger: React.FC<
  React.ComponentProps<typeof TooltipPrimitive.Trigger>
> = ({ className, ...props }) => {
  return (
    <DataTestId value="trigger">
      <TooltipPrimitive.Trigger
        data-slot="tooltip-trigger"
        className={cn('--tooltip-trigger', className)}
        {...props}
      />
    </DataTestId>
  );
};

const TooltipContent: React.FC<
  React.ComponentProps<typeof TooltipPrimitive.Content>
> = ({ className, sideOffset = 0, children, ...props }) => {
  return (
    <TooltipPrimitive.Portal>
      <DataTestId value="content">
        <TooltipPrimitive.Content
          data-slot="tooltip-content"
          sideOffset={sideOffset}
          className={cn(
            '--tooltip-content',
            'bg-background text-foreground border animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-fit origin-(--radix-tooltip-content-transform-origin) rounded-md px-3 py-1.5 text-balance',
            className
          )}
          {...props}
        >
          {children}
          <TooltipPrimitive.Arrow
            className={cn('--tooltip-arrow', 'fill-border')}
          />
        </TooltipPrimitive.Content>
      </DataTestId>
    </TooltipPrimitive.Portal>
  );
};

export { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger };
