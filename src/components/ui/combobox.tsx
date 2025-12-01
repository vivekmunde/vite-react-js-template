import {
  Command,
  CommandEmpty,
  CommandInput,
  CommandItem,
  CommandItemGroup,
  CommandItemIcon,
  CommandItemSeparator,
  CommandItemShortcut,
  CommandItemText,
  CommandList,
} from '@/components/ui/command';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import type { VariantProps } from 'class-variance-authority';
import { CommandSeparator } from 'cmdk';
import { ChevronsUpDownIcon } from 'lucide-react';
import * as React from 'react';
import { DataTestId } from './data-test-id';
import { inputVariants } from './input/variants';
import { Skeleton } from './skeleton';
import { useShowSkeleton } from './skeleton/hooks';
import { cn } from './utils/cn';

const ComboboxOpenContext = React.createContext<{
  open?: boolean;
  setOpen?: (open: boolean) => void;
}>({
  open: false,
  setOpen: () => {},
});

const ComboboxValueContext = React.createContext<{
  value?: string | undefined;
  setValue?: (value: string | undefined) => void;
}>({
  value: undefined,
  setValue: () => {},
});

const Combobox: React.FC<
  React.ComponentProps<typeof Popover> & {
    value?: string | undefined;
    onChange?: (value: string | undefined) => void;
  }
> = ({
  children,
  open: propOpen,
  onOpenChange: propOnOpenChange,
  value: propValue,
  onChange: propOnChange,
  ...props
}) => {
  const [open, setOpen] = React.useState(propOpen ?? false);
  const [value, setValue] = React.useState<string | undefined>(propValue);

  return (
    <DataTestId value="combobox">
      <ComboboxOpenContext.Provider
        value={{ open, setOpen: propOnOpenChange ?? setOpen }}
      >
        <ComboboxValueContext.Provider
          value={{
            value: propValue ?? value,
            setValue: propOnChange ?? setValue,
          }}
        >
          <Popover
            open={open}
            onOpenChange={propOnOpenChange ?? setOpen}
            {...props}
          >
            {children}
          </Popover>
        </ComboboxValueContext.Provider>
      </ComboboxOpenContext.Provider>
    </DataTestId>
  );
};

const ComboboxTrigger: React.FC<
  React.ComponentProps<typeof PopoverTrigger> &
    VariantProps<typeof inputVariants>
> = ({ children, className, size = 'default', style, onClick, ...props }) => {
  const showSkeleton = useShowSkeleton();
  const { setOpen } = React.useContext(ComboboxOpenContext);

  const _className = cn(
    '--combobox-trigger',
    inputVariants({ size }),
    'cursor-pointer',
    className
  );

  return showSkeleton ? (
    <DataTestId value="trigger">
      <Skeleton className={_className} style={style}>
        {children}
        <ChevronsUpDownIcon />
      </Skeleton>
    </DataTestId>
  ) : (
    <PopoverTrigger
      className={_className}
      style={style}
      onClick={e => {
        setOpen?.(true);
        onClick?.(e);
      }}
      {...props}
    >
      {children}
      <span>
        <ChevronsUpDownIcon />
      </span>
    </PopoverTrigger>
  );
};

const ComboboxValue: React.FC<
  React.ComponentProps<'span'> & {
    placeholder?: string;
  }
> = ({ className, children, placeholder, ...props }) => {
  const { value } = React.useContext(ComboboxValueContext);

  return (
    <span
      className={cn(
        '--combobox-value',
        'flex-1',
        !value && 'text-muted-foreground',
        className
      )}
      {...props}
    >
      {children ?? value ?? placeholder}
    </span>
  );
};

const ComboboxContent: React.FC<
  React.ComponentProps<typeof PopoverContent>
> = ({ className, ...props }) => {
  return (
    <PopoverContent
      className={cn('--combobox-content', 'p-0 w-auto min-w-fit', className)}
      {...props}
    />
  );
};

const ComboboxCommand: React.FC<React.ComponentProps<typeof Command>> = ({
  className,
  ...props
}) => {
  return (
    <Command
      className={cn(
        '--combobox-command',
        'border-0 shadow-none',
        'sm:min-w-fit',
        className
      )}
      {...props}
    />
  );
};

const ComboboxList: React.FC<React.ComponentProps<typeof CommandList>> = ({
  className,
  ...props
}) => {
  return (
    <CommandList className={cn('--combobox-list', className)} {...props} />
  );
};

const ComboboxItem: React.FC<React.ComponentProps<typeof CommandItem>> = ({
  className,
  onSelect,
  ...props
}) => {
  const { setValue } = React.useContext(ComboboxValueContext);
  const { setOpen } = React.useContext(ComboboxOpenContext);

  return (
    <CommandItem
      className={cn('--combobox-item', className)}
      onSelect={value => {
        setValue?.(value);
        onSelect?.(value);
        setOpen?.(false);
      }}
      {...props}
    />
  );
};

const ComboboxItemGroup: React.FC<
  React.ComponentProps<typeof CommandItemGroup>
> = ({ className, ...props }) => {
  return (
    <CommandItemGroup
      className={cn('--combobox-item-group', className)}
      {...props}
    />
  );
};

const ComboboxSeparator: React.FC<
  React.ComponentProps<typeof CommandSeparator>
> = ({ className, ...props }) => {
  return (
    <CommandSeparator
      className={cn('--combobox-separator', className)}
      {...props}
    />
  );
};

const ComboboxInput: React.FC<React.ComponentProps<typeof CommandInput>> = ({
  className,
  ...props
}) => {
  return (
    <CommandInput className={cn('--combobox-input', className)} {...props} />
  );
};

const ComboboxEmpty: React.FC<React.ComponentProps<typeof CommandEmpty>> = ({
  className,
  ...props
}) => {
  return (
    <CommandEmpty className={cn('--combobox-empty', className)} {...props} />
  );
};

const ComboboxItemIcon: React.FC<
  React.ComponentProps<typeof CommandItemIcon>
> = props => {
  return <CommandItemIcon {...props} />;
};

const ComboboxItemShortcut: React.FC<
  React.ComponentProps<typeof CommandItemShortcut>
> = ({ className, ...props }) => {
  return (
    <CommandItemShortcut
      className={cn('--combobox-item-shortcut', className)}
      {...props}
    />
  );
};

const ComboboxItemText: React.FC<
  React.ComponentProps<typeof CommandItemText>
> = ({ className, ...props }) => {
  return (
    <CommandItemText
      className={cn('--combobox-item-text', className)}
      {...props}
    />
  );
};

const ComboboxItemSeparator: React.FC<
  React.ComponentProps<typeof CommandItemSeparator>
> = ({ className, ...props }) => {
  return (
    <CommandItemSeparator
      className={cn('--combobox-item-separator', className)}
      {...props}
    />
  );
};

export {
  Combobox,
  ComboboxCommand,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxItemGroup,
  ComboboxItemIcon,
  ComboboxItemSeparator,
  ComboboxItemShortcut,
  ComboboxItemText,
  ComboboxList,
  ComboboxSeparator,
  ComboboxTrigger,
  ComboboxValue,
};
