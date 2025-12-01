import { cn } from '@/components/ui/utils/cn';
import { Command as CommandPrimitive } from 'cmdk';
import { SearchIcon } from 'lucide-react';
import * as React from 'react';
import { Button } from './button';
import { DataTestId } from './data-test-id';
import {
  Dialog,
  DialogBody,
  DialogClose,
  DialogCloseButton,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
  DialogTrigger,
} from './dialog';
import { Icon } from './icon';
import { inputVariants } from './input/variants';
import { Skeleton } from './skeleton';
import { useShowSkeleton } from './skeleton/hooks';
import { TypographySpan } from './typography';

const Command: React.FC<React.ComponentProps<typeof CommandPrimitive>> = ({
  className,
  ...props
}) => {
  return (
    <DataTestId value="command">
      <CommandPrimitive
        data-slot="command"
        className={cn(
          '--command',
          'relative bg-popover text-popover-foreground flex h-full w-full flex-col overflow-hidden border rounded-md shadow-xs sm:min-w-[400px]',
          className
        )}
        {...props}
      />
    </DataTestId>
  );
};

const CommandInput: React.FC<
  React.ComponentProps<typeof CommandPrimitive.Input>
> = ({ className, ...props }) => {
  const showSkeleton = useShowSkeleton();

  const _className = cn(
    '--command-input',
    inputVariants(),
    'border-0 shadow-none',
    'm-1 pl-8',
    className
  );

  return (
    <DataTestId value="command-input-wrapper">
      <div
        data-slot="command-input-wrapper"
        className={cn('relative flex flex-row items-center gap-2 border-b')}
      >
        <Icon>
          <SearchIcon
            className={cn('size-4 shrink-0 opacity-50 absolute left-3')}
          />
        </Icon>
        <DataTestId value="input">
          {showSkeleton ? (
            <Skeleton className={_className} />
          ) : (
            <CommandPrimitive.Input
              data-slot="command-input"
              className={_className}
              {...props}
            />
          )}
        </DataTestId>
      </div>
    </DataTestId>
  );
};

const CommandList: React.FC<
  React.ComponentProps<typeof CommandPrimitive.List>
> = ({ className, ...props }) => {
  return (
    <DataTestId value="list">
      <CommandPrimitive.List
        data-slot="command-list"
        className={cn(
          '--command-list',
          'scroll-py-1 overflow-x-hidden overflow-y-auto',
          className
        )}
        {...props}
      />
    </DataTestId>
  );
};

const CommandEmpty: React.FC<
  React.ComponentProps<typeof CommandPrimitive.Empty>
> = ({ ...props }) => {
  return (
    <DataTestId value="empty">
      <CommandPrimitive.Empty
        data-slot="command-empty"
        className={cn('--command-empty', 'py-6 text-center')}
        {...props}
      />
    </DataTestId>
  );
};

const CommandItemGroup: React.FC<
  React.ComponentProps<typeof CommandPrimitive.Group>
> = ({ className, heading, ...props }) => {
  const showSkeleton = useShowSkeleton();

  return (
    <DataTestId value="group">
      <CommandPrimitive.Group
        data-slot="command-group"
        className={cn(
          '--command-item-group',
          'text-foreground [&_[cmdk-group-heading]]:text-muted-foreground overflow-hidden p-1 [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-sm [&_[cmdk-group-heading]]:font-medium',
          className
        )}
        heading={
          showSkeleton ? (
            <Skeleton className="w-1/3">{heading}</Skeleton>
          ) : (
            heading
          )
        }
        {...props}
      />
    </DataTestId>
  );
};

const CommandItemSeparator: React.FC<
  React.ComponentProps<typeof CommandPrimitive.Separator>
> = ({ className, ...props }) => {
  return (
    <DataTestId value="separator">
      <CommandPrimitive.Separator
        data-slot="command-separator"
        className={cn(
          '--command-item-separator',
          'bg-border -mx-1 h-px',
          className
        )}
        {...props}
      />
    </DataTestId>
  );
};

const CommandItem: React.FC<
  React.ComponentProps<typeof CommandPrimitive.Item>
> = ({ className, ...props }) => {
  const showSkeleton = useShowSkeleton();

  return (
    <DataTestId value="item">
      <CommandPrimitive.Item
        data-slot="command-item"
        className={cn(
          '--command-item',
          'flex flex-row justify-between items-center gap-2',
          'rounded-sm px-2 py-1.5',
          'outline-hidden select-none relative cursor-default',
          "[&_svg:not([class*='text-'])]:text-muted-foreground",
          "[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
          !showSkeleton &&
            'data-[selected=true]:bg-accent data-[selected=true]:text-accent-foreground',
          !showSkeleton &&
            'data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50',
          className
        )}
        {...props}
      />
    </DataTestId>
  );
};

const CommandItemIcon: React.FC<React.ComponentProps<typeof Icon>> = props => {
  return <Icon data-slot="command-item-icon" {...props} />;
};

const CommandItemText: React.FC<
  React.ComponentProps<typeof TypographySpan>
> = ({ className, ...props }) => {
  return (
    <TypographySpan
      data-slot="command-item-text"
      className={cn('--command-item-text', 'flex-1', className)}
      {...props}
    />
  );
};

const CommandItemShortcut: React.FC<
  React.ComponentProps<typeof TypographySpan>
> = ({ className, ...props }) => {
  return (
    <DataTestId value="shortcut">
      <TypographySpan
        data-slot="command-shortcut"
        className={cn(
          '--command-item-shortcut',
          'text-muted-foreground ml-auto text-sm tracking-widest',
          className
        )}
        {...props}
      />
    </DataTestId>
  );
};

const CommandDialog: React.FC<React.ComponentProps<typeof Dialog>> = props => {
  return (
    <DataTestId value="command">
      <Dialog data-slot="command-dialog" {...props} />
    </DataTestId>
  );
};

const CommandDialogOpen: React.FC<
  React.ComponentProps<'div'> & {
    shortcutKey: string;
    onOpen?: () => void;
  }
> = ({ className, shortcutKey, onOpen, ...props }) => {
  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (
        e.key.toLowerCase() === shortcutKey.toLowerCase() &&
        (e.metaKey || e.ctrlKey)
      ) {
        e.preventDefault();
        onOpen?.();
      }
    };
    document.addEventListener('keydown', down);
    return () => document.removeEventListener('keydown', down);
  }, []);

  return (
    <div
      className={cn(
        '--command-dialog-open',
        'text-muted-foreground',
        className
      )}
      {...props}
    />
  );
};

const CommandDialogCloseButton: React.FC<
  React.ComponentProps<typeof Button>
> = ({ className, ...props }) => {
  return (
    <DialogCloseButton
      data-slot="command-close"
      className={cn(
        '--command-dialog-close-button',
        'absolute right-1 top-1 m-0 z-10 [&_svg]:opacity-50',
        className
      )}
      {...props}
    />
  );
};

const CommandDialogHeader: React.FC<
  React.ComponentProps<typeof DialogHeader>
> = ({ className, ...props }) => {
  return (
    <DialogHeader
      data-slot="command-dialog-header"
      className={cn('--command-dialog-header', 'relative', className)}
      {...props}
    />
  );
};

const CommandDialogBody: React.FC<React.ComponentProps<typeof DialogBody>> = ({
  className,
  ...props
}) => {
  return (
    <DialogBody
      data-slot="command-dialog-body"
      className={cn(
        '--command-dialog-body',
        'p-0 relative',
        '[&_.--command]:border-0 [&_.--command]:shadow-none [&_.--command]:min-w-auto',
        className
      )}
      {...props}
    />
  );
};

const CommandDialogClose = DialogClose;
const CommandDialogContent = DialogContent;
const CommandDialogDescription = DialogDescription;
const CommandDialogFooter = DialogFooter;
const CommandDialogOverlay = DialogOverlay;
const CommandDialogPortal = DialogPortal;
const CommandDialogTitle = DialogTitle;
const CommandDialogTrigger = DialogTrigger;

export {
  Command,
  CommandDialog,
  CommandDialogBody,
  CommandDialogClose,
  CommandDialogCloseButton,
  CommandDialogContent,
  CommandDialogDescription,
  CommandDialogFooter,
  CommandDialogHeader,
  CommandDialogOpen,
  CommandDialogOverlay,
  CommandDialogPortal,
  CommandDialogTitle,
  CommandDialogTrigger,
  CommandEmpty,
  CommandInput,
  CommandItem,
  CommandItemGroup,
  CommandItemIcon,
  CommandItemSeparator,
  CommandItemShortcut,
  CommandItemText,
  CommandList,
};
