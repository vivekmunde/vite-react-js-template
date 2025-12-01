import debounce from 'lodash.debounce';
import React, { useEffect } from 'react';
import { DataTestId } from '../data-test-id';
import { useCombinedRef } from '../hooks/use-combined-ref';
import { cn } from '../utils/cn';
import {
  useSetIsLayoutHeaderSticky,
  useSetLayoutHeaderBottom,
} from './use-context';

const LayoutContentHeader: React.FC<
  React.ComponentProps<'div'> & { sticky?: boolean }
> = ({ ref, className, children, sticky, ...props }) => {
  const combinedRef = useCombinedRef(ref ?? null);
  const setIsHeaderSticky = useSetIsLayoutHeaderSticky();
  const setHeaderBottom = useSetLayoutHeaderBottom();

  useEffect(() => {
    setIsHeaderSticky(!!sticky);

    const headerBottomSetter = debounce(() => {
      if (combinedRef.current) {
        const height = combinedRef.current.getBoundingClientRect().height;
        setHeaderBottom(height);
      }
    }, 100);

    headerBottomSetter();

    combinedRef.current?.addEventListener('resize', headerBottomSetter);

    return () => {
      combinedRef.current?.removeEventListener('resize', headerBottomSetter);
    };
  }, [sticky]);

  return (
    <DataTestId value="header">
      <div
        ref={combinedRef}
        {...props}
        className={cn(
          '--layout-content-header',
          sticky && 'sticky top-0 z-10 bg-background border-b',
          'px-6 pt-3 pb-1 [.border-b]:pb-3',
          className
        )}
      >
        {children}
      </div>
    </DataTestId>
  );
};

export { LayoutContentHeader };
