import React from 'react';
import { DataTestId } from '../data-test-id';
import { cn } from '../utils/cn';

const LayoutSidebarFooter: React.FC<
  React.ComponentProps<'div'> & { sticky?: boolean }
> = ({ className, children, sticky, ...props }) => (
  <DataTestId value="footer">
    <div
      {...props}
      className={cn(
        '--layout-sidebar-footer',
        'p-3 pt-1 [.border-t]:pt-3',
        'bg-sidebar',
        sticky && 'sticky bottom-0 z-10 border-t',
        className
      )}
    >
      {children}
    </div>
  </DataTestId>
);

export { LayoutSidebarFooter };
