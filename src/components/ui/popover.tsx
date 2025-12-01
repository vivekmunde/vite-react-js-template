import { cn } from '@/components/ui/utils/cn';
import * as PopoverPrimitive from '@radix-ui/react-popover';
import * as React from 'react';
import { DataTestId } from './data-test-id';

const PopoverClose = PopoverPrimitive.PopoverClose;

const Popover: React.FC<
  React.ComponentProps<typeof PopoverPrimitive.Root>
> = props => {
  return (
    <DataTestId value="popover">
      <PopoverPrimitive.Root data-slot="popover" {...props} />
    </DataTestId>
  );
};

const PopoverTrigger: React.FC<
  React.ComponentProps<typeof PopoverPrimitive.Trigger>
> = ({ className, ...props }) => (
  <DataTestId value="trigger">
    <PopoverPrimitive.Trigger
      data-slot="popover-trigger"
      className={cn('--popover-trigger', className)}
      {...props}
    />
  </DataTestId>
);

const PopoverContent: React.FC<
  React.ComponentProps<typeof PopoverPrimitive.Content>
> = ({ className, align = 'center', sideOffset = 4, children, ...props }) => {
  return (
    <DataTestId value="content">
      <PopoverPrimitive.Portal>
        <PopoverPrimitive.Content
          data-slot="popover-content"
          align={align}
          sideOffset={sideOffset}
          className={cn(
            '--popover-content',
            'bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-72 origin-(--radix-popover-content-transform-origin) rounded-md border p-3 shadow-md outline-hidden',
            className
          )}
          {...props}
        >
          {children}
          <PopoverArrow />
        </PopoverPrimitive.Content>
      </PopoverPrimitive.Portal>
    </DataTestId>
  );
};

const PopoverAnchor: React.FC<
  React.ComponentProps<typeof PopoverPrimitive.Anchor>
> = ({ className, ...props }) => {
  return (
    <DataTestId value="anchor">
      <PopoverPrimitive.Anchor
        data-slot="popover-anchor"
        className={cn('--popover-anchor', className)}
        {...props}
      />
    </DataTestId>
  );
};

const PopoverArrow: React.FC<
  React.ComponentProps<typeof PopoverPrimitive.Arrow>
> = ({ className, ...props }) => (
  <DataTestId value="arrow">
    <PopoverPrimitive.Arrow
      className={cn('--popover-arrow', 'w-3 h-2 fill-border', className)}
      {...props}
    />
  </DataTestId>
);

export {
  Popover,
  PopoverAnchor,
  PopoverArrow,
  PopoverClose,
  PopoverContent,
  PopoverTrigger,
};
