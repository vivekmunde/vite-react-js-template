import { cn } from '@/components/ui/utils/cn';
import * as HoverCardPrimitive from '@radix-ui/react-hover-card';
import * as React from 'react';
import { DataTestId } from './data-test-id';

const HoverCard: React.FC<
  React.ComponentProps<typeof HoverCardPrimitive.Root>
> = ({ openDelay = 0, closeDelay = 0, ...props }) => {
  return (
    <DataTestId value="hover-card">
      <HoverCardPrimitive.Root
        data-slot="hover-card"
        openDelay={openDelay}
        closeDelay={closeDelay}
        {...props}
      />
    </DataTestId>
  );
};

const HoverCardTrigger: React.FC<
  React.ComponentProps<typeof HoverCardPrimitive.Trigger>
> = ({ className, ...props }) => {
  return (
    <DataTestId value="trigger">
      <HoverCardPrimitive.Trigger
        data-slot="hover-card-trigger"
        className={cn('--hover-card-trigger', className)}
        {...props}
      />
    </DataTestId>
  );
};

const HoverCardContent: React.FC<
  React.ComponentProps<typeof HoverCardPrimitive.Content>
> = ({ className, align = 'center', sideOffset = 4, children, ...props }) => {
  return (
    <HoverCardPrimitive.Portal data-slot="hover-card-portal">
      <DataTestId value="content">
        <HoverCardPrimitive.Content
          data-slot="hover-card-content"
          align={align}
          sideOffset={sideOffset}
          className={cn(
            '--hover-card-content',
            'bg-popover text-popover-foreground',
            'sm:max-w-[400px]',
            'data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 origin-(--radix-hover-card-content-transform-origin)',
            'rounded-md border p-4 shadow-md outline-hidden',
            className
          )}
          {...props}
        >
          {children}
          <HoverCardPrimitive.Arrow className="fill-border" />
        </HoverCardPrimitive.Content>
      </DataTestId>
    </HoverCardPrimitive.Portal>
  );
};

export { HoverCard, HoverCardContent, HoverCardTrigger };
