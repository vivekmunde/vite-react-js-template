import { cn } from '@/components/ui/utils/cn';
import * as SelectPrimitive from '@radix-ui/react-select';
import type { VariantProps } from 'class-variance-authority';
import {
  CheckIcon,
  ChevronDownIcon,
  ChevronsUpDownIcon,
  ChevronUpIcon,
} from 'lucide-react';
import * as React from 'react';
import { DataTestId } from './data-test-id';
import { inputVariants } from './input/variants';
import { LoadingIcon } from './loading-icon';
import { Skeleton } from './skeleton';
import { useShowSkeleton } from './skeleton/hooks';

const Select: React.FC<SelectPrimitive.SelectProps> = props => {
  return (
    <DataTestId value="select">
      <SelectPrimitive.Root data-slot="select" {...props} />
    </DataTestId>
  );
};

const SelectTrigger: React.FC<
  React.ComponentProps<typeof SelectPrimitive.Trigger> &
    VariantProps<typeof inputVariants> & {
      loading?: boolean;
    }
> = ({ className, size = 'default', children, loading = false, ...props }) => {
  const showSkeleton = useShowSkeleton();

  const _className = cn(
    '--select-trigger',
    'data-[placeholder]:text-muted-foreground',
    inputVariants({ size }),
    'cursor-pointer',
    className
  );

  return (
    <DataTestId value="trigger">
      {showSkeleton ? (
        <Skeleton className={_className} />
      ) : (
        <SelectPrimitive.Trigger
          data-slot="select-trigger"
          data-size={size}
          className={_className}
          {...props}
        >
          {children}
          <SelectPrimitive.Icon asChild>
            {loading ? <LoadingIcon /> : <ChevronsUpDownIcon />}
          </SelectPrimitive.Icon>
        </SelectPrimitive.Trigger>
      )}
    </DataTestId>
  );
};

const SelectValue: React.FC<
  React.ComponentProps<typeof SelectPrimitive.Value>
> = ({ className, ...props }) => {
  return (
    <DataTestId value="value">
      <SelectPrimitive.Value
        data-slot="select-value"
        className={cn('--select-value', className)}
        {...props}
      />
    </DataTestId>
  );
};

const SelectArrow: React.FC<
  React.ComponentProps<typeof SelectPrimitive.Arrow>
> = ({ className, ...props }) => (
  <DataTestId value="arrow">
    <SelectPrimitive.Arrow
      className={cn('--select-arrow', 'w-3 h-2 fill-border', className)}
      {...props}
    />
  </DataTestId>
);

const SelectContent: React.FC<
  React.ComponentProps<typeof SelectPrimitive.Content>
> = ({
  className,
  children,
  position = 'popper',
  align = 'center',
  ...props
}) => {
  return (
    <SelectPrimitive.Portal>
      <DataTestId value="content">
        <SelectPrimitive.Content
          data-slot="select-content"
          className={cn(
            '--select-content',
            'bg-popover text-popover-foreground',
            'data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
            'relative z-50 max-h-(--radix-select-content-available-height) min-w-[8rem] origin-(--radix-select-content-transform-origin) rounded-md border shadow-md',
            position === 'popper' &&
              'data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1',
            className
          )}
          position={position}
          align={align}
          {...props}
        >
          <SelectArrow />
          <SelectScrollUpButton />
          <SelectPrimitive.Viewport
            className={cn(
              '--select-viewport',
              'p-1',
              position === 'popper' &&
                'h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)] scroll-my-1'
            )}
          >
            {children}
          </SelectPrimitive.Viewport>
          <SelectScrollDownButton />
        </SelectPrimitive.Content>
      </DataTestId>
    </SelectPrimitive.Portal>
  );
};

const SelectItemGroup: React.FC<
  React.ComponentProps<typeof SelectPrimitive.Group>
> = ({ className, ...props }) => {
  return (
    <DataTestId value="group">
      <SelectPrimitive.Group
        data-slot="select-group"
        className={cn('--select-item-group', className)}
        {...props}
      />
    </DataTestId>
  );
};

const SelectItemLabel: React.FC<
  React.ComponentProps<typeof SelectPrimitive.Label>
> = ({ className, ...props }) => {
  return (
    <DataTestId value="label">
      <SelectPrimitive.Label
        data-slot="select-label"
        className={cn(
          '--select-item-label',
          'text-muted-foreground px-2 py-1.5',
          className
        )}
        {...props}
      />
    </DataTestId>
  );
};

const SelectItem: React.FC<
  React.ComponentProps<typeof SelectPrimitive.Item>
> = ({ className, children, ...props }) => {
  return (
    <DataTestId value="item">
      <SelectPrimitive.Item
        data-slot="select-item"
        className={cn(
          '--select-item',
          "focus:bg-accent focus:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground relative flex w-full cursor-default items-center gap-2 rounded-sm py-1.5 pr-8 pl-2 outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2",
          className
        )}
        {...props}
      >
        <span className="absolute right-2 flex size-3.5 items-center justify-center">
          <SelectPrimitive.ItemIndicator>
            <CheckIcon className="size-4" />
          </SelectPrimitive.ItemIndicator>
        </span>
        <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
      </SelectPrimitive.Item>
    </DataTestId>
  );
};

const SelectItemSeparator: React.FC<
  React.ComponentProps<typeof SelectPrimitive.Separator>
> = ({ className, ...props }) => {
  return (
    <DataTestId value="separator">
      <SelectPrimitive.Separator
        data-slot="select-separator"
        className={cn(
          '--select-item-separator',
          'bg-border pointer-events-none -mx-1 my-1 h-px',
          className
        )}
        {...props}
      />
    </DataTestId>
  );
};

const SelectScrollUpButton: React.FC<
  React.ComponentProps<typeof SelectPrimitive.ScrollUpButton>
> = ({ className, ...props }) => {
  return (
    <DataTestId value="scroll-up-button">
      <SelectPrimitive.ScrollUpButton
        data-slot="select-scroll-up-button"
        className={cn(
          '--select-scroll-up-button',
          'flex cursor-default items-center justify-center py-1',
          className
        )}
        {...props}
      >
        <ChevronUpIcon className="size-4" />
      </SelectPrimitive.ScrollUpButton>
    </DataTestId>
  );
};

const SelectScrollDownButton: React.FC<
  React.ComponentProps<typeof SelectPrimitive.ScrollDownButton>
> = ({ className, ...props }) => {
  return (
    <DataTestId value="scroll-down-button">
      <SelectPrimitive.ScrollDownButton
        data-slot="select-scroll-down-button"
        className={cn(
          '--select-scroll-down-button',
          'flex cursor-default items-center justify-center py-1',
          className
        )}
        {...props}
      >
        <ChevronDownIcon className="size-4" />
      </SelectPrimitive.ScrollDownButton>
    </DataTestId>
  );
};

export {
  Select,
  SelectArrow,
  SelectContent,
  SelectItem,
  SelectItemGroup,
  SelectItemLabel,
  SelectItemSeparator,
  SelectScrollDownButton,
  SelectScrollUpButton,
  SelectTrigger,
  SelectValue,
};
