import React, { useEffect } from 'react';
import { DataTestId } from '../data-test-id';
import { useCombinedRef } from '../hooks/use-combined-ref';
import {
  useIsLayoutHeaderSticky,
  useLayoutHeaderBottom,
} from '../layout/use-context';
import { cn } from '../utils/cn';
import { useSetStickyHeader } from './use-context';

const ScreenHeader: React.FC<
  React.ComponentProps<'div'> & { sticky?: boolean }
> = ({ ref, className, children, sticky, ...props }) => {
  const combinedRef = useCombinedRef(ref ?? null);
  const setStickyHeader = useSetStickyHeader();
  const isLayoutHeaderSticky = useIsLayoutHeaderSticky();
  const layoutHeaderBottom = useLayoutHeaderBottom();

  useEffect(() => {
    setStickyHeader(!!sticky);

    if (combinedRef.current && isLayoutHeaderSticky) {
      combinedRef.current.style.top = `${layoutHeaderBottom}px`;
    }
  }, [sticky, isLayoutHeaderSticky, layoutHeaderBottom]);

  return (
    <DataTestId value="header">
      <div
        ref={combinedRef}
        {...props}
        className={cn(
          '--screen-header',
          'px-6 pt-4 pb-2 [.border-b]:pb-4',
          sticky && 'sticky top-0 z-10 bg-background border-b',
          className
        )}
      >
        {children}
      </div>
    </DataTestId>
  );
};

export { ScreenHeader };
