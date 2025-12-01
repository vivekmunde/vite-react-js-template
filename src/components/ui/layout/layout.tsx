import React from 'react';
import { DataTestId } from '../data-test-id';
import { cn } from '../utils/cn';
import { LayoutContextProvider } from './layout-context';

const Layout: React.FC<
  React.ComponentProps<'div'> & {
    widths?: ('1fr' | string)[];
  }
> = ({ className, children, widths = [], ...props }) => {
  let numberOfChildren = 0;

  try {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    numberOfChildren = (children as any)?.length;
  } catch {
    // ignore
  }

  return (
    <LayoutContextProvider>
      <DataTestId value="layout">
        <div
          {...props}
          className={cn('--layout', 'h-dvh w-[100dvw]', 'grid', className)}
          style={{
            gridTemplateColumns: widths
              .map((_, index) => widths[index] ?? `${100 / numberOfChildren}%`)
              .join(' '),
          }}
        >
          {children}
        </div>
      </DataTestId>
    </LayoutContextProvider>
  );
};

export { Layout };
