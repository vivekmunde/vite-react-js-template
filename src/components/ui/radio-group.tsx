import { cn } from '@/components/ui/utils/cn';
import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';
import { CircleIcon } from 'lucide-react';
import * as React from 'react';
import { DataTestId } from './data-test-id';
import { Skeleton } from './skeleton';
import { useShowSkeleton } from './skeleton/hooks';
import { focusVariants } from './variants';

const RadioGroup: React.FC<
  React.ComponentProps<typeof RadioGroupPrimitive.Root> & {
    orientation?: 'horizontal' | 'vertical';
  }
> = ({ className, orientation = 'horizontal', ...props }) => {
  return (
    <DataTestId value="radio-group">
      <RadioGroupPrimitive.Root
        data-slot="radio-group"
        className={cn(
          '--radio-group',
          'flex gap-3',
          orientation === 'horizontal' ? 'flex-row items-center' : 'flex-col',
          className
        )}
        {...props}
      />
    </DataTestId>
  );
};

const RadioGroupItemCase: React.FC<React.ComponentProps<'div'>> = ({
  className,
  ...props
}) => {
  return (
    <DataTestId value="item-case">
      <div
        className={cn(
          '--radio-group-item-case',
          'flex flex-row gap-2 items-center',
          className
        )}
        {...props}
      />
    </DataTestId>
  );
};

const RadioGroupItem: React.FC<
  React.ComponentProps<typeof RadioGroupPrimitive.Item>
> = ({ className, ...props }) => {
  const showSkeleton = useShowSkeleton();

  const _className = cn(
    '--radio-group-item',
    'text-foreground',
    'aspect-square size-4 shrink-0 rounded-full border border-foreground shadow-xs transition-[color,box-shadow] outline-none',
    focusVariants(),
    'aria-invalid:border-destructive disabled:cursor-not-allowed disabled:opacity-50',
    className
  );

  const renderItem = () => {
    return (
      <RadioGroupPrimitive.Item
        data-slot="radio-group-item"
        className={_className}
        {...props}
      >
        <RadioGroupPrimitive.Indicator
          data-slot="radio-group-indicator"
          className="--radio-group-indicator relative flex items-center justify-center"
        >
          <CircleIcon className="--radio-group-indicator-icon fill-primary absolute top-1/2 left-1/2 size-2 -translate-x-1/2 -translate-y-1/2" />
        </RadioGroupPrimitive.Indicator>
      </RadioGroupPrimitive.Item>
    );
  };

  return (
    <DataTestId value="item">
      {showSkeleton ? (
        <Skeleton className={_className}>{renderItem()}</Skeleton>
      ) : (
        renderItem()
      )}
    </DataTestId>
  );
};

export { RadioGroup, RadioGroupItem, RadioGroupItemCase };
