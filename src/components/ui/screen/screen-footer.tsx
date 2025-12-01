import React, { useEffect } from 'react';
import { DataTestId } from '../data-test-id';
import { useCombinedRef } from '../hooks/use-combined-ref';
import {
  useIsLayoutFooterSticky,
  useLayoutFooterTop,
} from '../layout/use-context';
import { cn } from '../utils/cn';
import { useSetStickyFooter } from './use-context';

const ScreenFooter: React.FC<
  React.ComponentProps<'div'> & { sticky?: boolean }
> = ({ ref, className, children, sticky, ...props }) => {
  const combinedRef = useCombinedRef(ref ?? null);
  const setStickyFooter = useSetStickyFooter();
  const isLayoutFooterSticky = useIsLayoutFooterSticky();
  const layoutFooterTop = useLayoutFooterTop();

  useEffect(() => {
    setStickyFooter(!!sticky);

    if (combinedRef.current && isLayoutFooterSticky) {
      combinedRef.current.style.bottom = `${layoutFooterTop}px`;
    }
  }, [sticky, isLayoutFooterSticky, layoutFooterTop]);

  return (
    <DataTestId value="footer">
      <div
        ref={combinedRef}
        {...props}
        className={cn(
          '--screen-footer',
          'px-6 pt-2 pb-4 [.border-t]:pt-4',
          sticky && 'sticky bottom-0 z-10 bg-background border-t',
          className
        )}
      >
        {children}
      </div>
    </DataTestId>
  );
};

export { ScreenFooter };
