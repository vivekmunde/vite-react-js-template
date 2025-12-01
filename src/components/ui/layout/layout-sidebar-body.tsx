import React from 'react';
import { DataTestId } from '../data-test-id';
import { cn } from '../utils/cn';

const LayoutSidebarBody: React.FC<React.ComponentProps<'div'>> = ({
  className,
  children,
  ...props
}) => (
  <DataTestId value="body">
    <div
      {...props}
      className={cn('--layout-sidebar-body', 'p-3 flex-1', className)}
    >
      {children}
    </div>
  </DataTestId>
);

export { LayoutSidebarBody };
