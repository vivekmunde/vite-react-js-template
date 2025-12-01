import { cn } from '@/components/ui/utils/cn';
import React from 'react';
import { DataTestId } from '../data-test-id';
import { SkeletonProvider } from './provider';

export type TSkeletonProps = React.ComponentProps<'div'> & {
  as?: 'span' | 'div';
};

const Skeleton: React.FC<TSkeletonProps> = ({
  className,
  children = <span>&nbsp;</span>,
  as = 'div',
  ...props
}) => {
  // Safely handle children - make them invisible for proper spacing
  const childrenHidden = React.isValidElement(children)
    ? React.cloneElement(
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        children as React.ReactElement<any>,
        {
          className: cn(
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            (children as any)?.props?.className,
            'invisible'
          ),
        }
      )
    : children;

  const Comp = as === 'span' ? 'span' : 'div';

  return (
    <SkeletonProvider show={false}>
      <DataTestId value="skeleton">
        <Comp
          className={cn(
            '--skeleton',
            'rounded-md',
            className,

            /**
             * ------------------------------------------------------------------------
             * Always apply these styles
             * ------------------------------------------------------------------------
             */
            'animate-pulse bg-muted',
            '[&>*]:invisible text-transparent',

            /**
             * ------------------------------------------------------------------------
             * Override styles.
             * The Skeleton component is used inside other components as inbuilt Skeleton.
             * Those component classes are applied to the Skeleton component.
             * We need to override them to make the Skeleton component work as expected.
             * ------------------------------------------------------------------------
             */

            // border
            'border-0',
            'border-none',

            // shadow
            'shadow-none',

            // ring
            'ring-0',

            // outline
            'outline-none',

            // pointer events
            'pointer-events-none',

            // disabled
            'disabled:opacity-100',
            'disabled:cursor-not-allowed',
            'disabled:pointer-events-auto',
            'disabled:bg-muted',
            'disabled:text-muted-foreground',
            'disabled:border-muted-foreground',
            'disabled:shadow-none',
            'disabled:ring-0',
            'disabled:outline-none',
            'disabled:focus:ring-0',
            'disabled:focus:outline-none',
            'disabled:focus-visible:ring-0',

            // focus
            'focus:ring-0',
            'focus:outline-none',
            'focus-visible:ring-0',

            // hover
            'hover:bg-muted'
          )}
          {...props}
        >
          {childrenHidden}
        </Comp>
      </DataTestId>
    </SkeletonProvider>
  );
};

export { Skeleton };
