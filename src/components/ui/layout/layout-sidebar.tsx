import React from 'react';
import { DataTestId } from '../data-test-id';
import { cn } from '../utils/cn';

const LayoutSidebar: React.FC<
  React.ComponentProps<'div'> & {
    side?: 'left' | 'right';
  }
> = ({ className, children, side = 'left', ...props }) => (
  <DataTestId value="sidebar">
    <div
      {...props}
      className={cn(
        '--layout-sidebar',
        'overflow-auto flex flex-col bg-sidebar',
        side === 'left' && 'border-r',
        side === 'right' && 'border-l',
        className
      )}
    >
      {children}
    </div>
  </DataTestId>
);

export { LayoutSidebar };
