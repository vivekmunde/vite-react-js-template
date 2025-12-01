import debounce from 'lodash.debounce';
import React, { useEffect } from 'react';
import { DataTestId } from '../data-test-id';
import { useCombinedRef } from '../hooks/use-combined-ref';
import { cn } from '../utils/cn';
import {
  useSetIsLayoutFooterSticky,
  useSetLayoutFooterTop,
} from './use-context';

const LayoutContentFooter: React.FC<
  React.ComponentProps<'div'> & { sticky?: boolean }
> = ({ ref, className, children, sticky, ...props }) => {
  const combinedRef = useCombinedRef(ref ?? null);
  const setIsFooterSticky = useSetIsLayoutFooterSticky();
  const setFooterTop = useSetLayoutFooterTop();

  useEffect(() => {
    setIsFooterSticky(!!sticky);

    const footerTopSetter = debounce(() => {
      if (combinedRef.current) {
        const height = combinedRef.current.getBoundingClientRect().height;
        setFooterTop(height);
      }
    }, 100);

    footerTopSetter();

    combinedRef.current?.addEventListener('resize', footerTopSetter);

    return () => {
      combinedRef.current?.removeEventListener('resize', footerTopSetter);
    };
  }, [sticky]);

  return (
    <DataTestId value="footer">
      <div
        ref={combinedRef}
        {...props}
        className={cn(
          '--layout-content-footer',
          'px-6 pt-3 pb-1 [.border-t]:pb-3',
          sticky && 'sticky bottom-0 z-10 bg-background border-t',
          className
        )}
      >
        {children}
      </div>
    </DataTestId>
  );
};

export { LayoutContentFooter };
