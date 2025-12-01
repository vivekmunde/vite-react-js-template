import React from 'react';
import { DataTestId } from '../data-test-id';
import { cn } from '../utils/cn';

const LayoutContainer: React.FC<
  React.ComponentProps<'div'> & { size?: 'sm' | 'md' | 'lg' }
> = ({ className, children, size = 'lg', ...props }) => (
  <DataTestId value="container">
    <div
      {...props}
      className={cn(
        '--layout-content-container',
        'w-full mx-auto',
        size === 'sm' && 'max-w-[640px]',
        size === 'md' && 'max-w-[768px]',
        size === 'lg' && 'max-w-[1024px]',
        className
      )}
    >
      {children}
    </div>
  </DataTestId>
);

export { LayoutContainer };
