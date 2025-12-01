import { cn } from '@/components/ui/utils/cn';
import type { VariantProps } from 'class-variance-authority';
import React, { useEffect } from 'react';
import { DataTestId } from './data-test-id';
import { useCombinedRef } from './hooks/use-combined-ref';
import { inputVariants } from './input/variants';
import { Skeleton } from './skeleton';
import { useShowSkeleton } from './skeleton/hooks';

export type TTextareaProps = React.ComponentProps<'textarea'> &
  VariantProps<typeof inputVariants> & {
    autoResize?: boolean;
  };

const Textarea: React.FC<TTextareaProps> = ({
  className,
  size,
  autoResize = false,
  ref,
  ...props
}) => {
  const showSkeleton = useShowSkeleton();
  const internalRef = useCombinedRef(ref ?? null);

  const _className = cn(
    '--textarea',
    inputVariants({ size }),
    autoResize ? 'resize-none overflow-hidden' : 'resize-y',
    size === 'sm'
      ? 'min-h-[40px]'
      : size === 'lg'
        ? 'min-h-[80px]'
        : 'min-h-[60px]',
    className
  );

  const adjustHeight = () => {
    const el = internalRef.current;
    if (el && autoResize) {
      el.style.height = 'auto';
      el.style.height = `${el.scrollHeight + 2}px`;
    }
  };

  useEffect(() => {
    adjustHeight();
  }, [props.value, autoResize]);

  return (
    <DataTestId value="textarea">
      {showSkeleton ? (
        <Skeleton className={_className} />
      ) : (
        <textarea
          data-slot="textarea"
          className={_className}
          ref={internalRef}
          onChange={e => {
            adjustHeight();
            props.onChange?.(e);
          }}
          {...props}
        />
      )}
    </DataTestId>
  );
};

export { Textarea };
