import { Slot } from '@radix-ui/react-slot';
import React from 'react';
import { DataTestId } from '../data-test-id';
import { cn } from '../utils/cn';

const LayoutSidebarHeader: React.FC<
  React.ComponentProps<'div'> & {
    sticky?: boolean;
    asChild?: boolean;
  }
> = ({ className, children, sticky, asChild, ...props }) => {
  const Comp = asChild ? Slot : 'div';

  return (
    <DataTestId value="header">
      <Comp
        {...props}
        className={cn(
          '--layout-sidebar-header',
          'bg-sidebar',
          sticky && 'sticky top-0 z-10 border-b',
          'p-3 pb-1 [.border-b]:pb-3',
          className
        )}
      >
        {children}
      </Comp>
    </DataTestId>
  );
};

export { LayoutSidebarHeader };
