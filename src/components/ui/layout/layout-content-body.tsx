import React from 'react';
import { DataTestId } from '../data-test-id';
import { cn } from '../utils/cn';
import { useLayoutHasScreen } from './use-context';

const LayoutContentBody: React.FC<React.ComponentProps<'div'>> = ({
  className,
  children,
  ...props
}) => {
  const hasScreen = useLayoutHasScreen();

  return (
    <DataTestId value="body">
      <div
        {...props}
        className={cn(
          '--layout-content-body',
          'flex-1',
          !hasScreen && 'px-6 py-3',
          className
        )}
      >
        {children}
      </div>
    </DataTestId>
  );
};

export { LayoutContentBody };
