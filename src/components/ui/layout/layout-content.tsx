import React from 'react';
import { DataTestId } from '../data-test-id';
import { cn } from '../utils/cn';

const LayoutContent: React.FC<React.ComponentProps<'div'>> = ({
  className,
  children,
  ...props
}) => (
  <DataTestId value="content">
    <div
      {...props}
      className={cn(
        '--layout-content',
        'relative flex-1 flex flex-col overflow-auto',
        className
      )}
    >
      {children}
    </div>
  </DataTestId>
);

export { LayoutContent };
