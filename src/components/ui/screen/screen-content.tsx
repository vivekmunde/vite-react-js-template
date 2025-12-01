import React from 'react';
import { DataTestId } from '../data-test-id';
import { cn } from '../utils/cn';
import { useIsStickyFooter, useIsStickyHeader } from './use-context';

const ScreenContent: React.FC<React.ComponentProps<'div'>> = ({
  className,
  children,
  ...props
}) => {
  const stickyHeader = useIsStickyHeader();
  const stickyFooter = useIsStickyFooter();

  return (
    <DataTestId value="content">
      <div
        {...props}
        className={cn(
          '--screen-content',
          'flex-1 p-6 py-3',
          stickyHeader && 'pt-6',
          stickyFooter && 'pb-6',
          className
        )}
      >
        {children}
      </div>
    </DataTestId>
  );
};

export { ScreenContent };
