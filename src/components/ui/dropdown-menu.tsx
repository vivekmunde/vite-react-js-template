import { cn } from '@/components/ui/utils/cn';
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';
import { CheckIcon, ChevronRightIcon, CircleIcon } from 'lucide-react';
import * as React from 'react';
import { DataTestId } from './data-test-id';

const DropdownMenu: React.FC<
  DropdownMenuPrimitive.DropdownMenuProps
> = props => (
  <DataTestId value="dropdown-menu">
    <DropdownMenuPrimitive.Root {...props} />
  </DataTestId>
);

const DropdownMenuPortal: React.FC<
  React.ComponentProps<typeof DropdownMenuPrimitive.Portal>
> = ({ ...props }) => {
  return (
    <DropdownMenuPrimitive.Portal data-slot="dropdown-menu-portal" {...props} />
  );
};

const DropdownMenuTrigger: React.FC<
  React.ComponentProps<typeof DropdownMenuPrimitive.Trigger>
> = ({ className, ...props }) => {
  return (
    <DataTestId value="trigger">
      <DropdownMenuPrimitive.Trigger
        data-slot="dropdown-menu-trigger"
        className={cn('--dropdown-menu-trigger', className)}
        {...props}
      />
    </DataTestId>
  );
};

const DropdownMenuArrow: React.FC<
  React.ComponentProps<typeof DropdownMenuPrimitive.Arrow>
> = ({ className, ...props }) => (
  <DataTestId value="arrow">
    <DropdownMenuPrimitive.Arrow
      className={cn('--dropdown-menu-arrow', 'fill-border', className)}
      {...props}
    />
  </DataTestId>
);

const DropdownMenuContent: React.FC<
  React.ComponentProps<typeof DropdownMenuPrimitive.Content>
> = ({ className, sideOffset = 4, align = 'center', children, ...props }) => {
  return (
    <DropdownMenuPrimitive.Portal>
      <DataTestId value="content">
        <DropdownMenuPrimitive.Content
          data-slot="dropdown-menu-content"
          align={align}
          sideOffset={sideOffset}
          className={cn(
            '--dropdown-menu-content',
            'bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 max-h-(--radix-dropdown-menu-content-available-height) min-w-[8rem] origin-(--radix-dropdown-menu-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border p-1 shadow-md',
            className
          )}
          {...props}
        >
          {children}
          <DropdownMenuArrow />
        </DropdownMenuPrimitive.Content>
      </DataTestId>
    </DropdownMenuPrimitive.Portal>
  );
};

const DropdownMenuGroup: React.FC<
  React.ComponentProps<typeof DropdownMenuPrimitive.Group>
> = ({ className, ...props }) => {
  return (
    <DataTestId value="group">
      <DropdownMenuPrimitive.Group
        data-slot="dropdown-menu-group"
        className={cn('--dropdown-menu-group', className)}
        {...props}
      />
    </DataTestId>
  );
};

const DropdownMenuItem: React.FC<
  React.ComponentProps<typeof DropdownMenuPrimitive.Item> & {
    inset?: boolean;
    variant?: 'default' | 'destructive';
  }
> = ({ className, inset, variant = 'default', ...props }) => {
  return (
    <DataTestId value="item">
      <DropdownMenuPrimitive.Item
        data-slot="dropdown-menu-item"
        data-inset={inset}
        data-variant={variant}
        className={cn(
          '--dropdown-menu-item',
          "focus:bg-accent focus:text-accent-foreground data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 data-[variant=destructive]:focus:text-destructive data-[variant=destructive]:*:[svg]:!text-destructive [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
          className
        )}
        {...props}
      />
    </DataTestId>
  );
};

const DropdownMenuCheckboxItem: React.FC<
  React.ComponentProps<typeof DropdownMenuPrimitive.CheckboxItem>
> = ({ className, children, checked, ...props }) => {
  return (
    <DataTestId value="checkbox-item">
      <DropdownMenuPrimitive.CheckboxItem
        data-slot="dropdown-menu-checkbox-item"
        className={cn(
          '--dropdown-menu-checkbox-item',
          "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
          className
        )}
        checked={checked}
        {...props}
      >
        <span className="pointer-events-none absolute left-2 flex size-3.5 items-center justify-center">
          <DropdownMenuPrimitive.ItemIndicator>
            <CheckIcon className="size-4" />
          </DropdownMenuPrimitive.ItemIndicator>
        </span>
        {children}
      </DropdownMenuPrimitive.CheckboxItem>
    </DataTestId>
  );
};

const DropdownMenuRadioGroup: React.FC<
  React.ComponentProps<typeof DropdownMenuPrimitive.RadioGroup>
> = ({ className, ...props }) => {
  return (
    <DataTestId value="radio-group">
      <DropdownMenuPrimitive.RadioGroup
        data-slot="dropdown-menu-radio-group"
        className={cn('--dropdown-menu-radio-group', className)}
        {...props}
      />
    </DataTestId>
  );
};

const DropdownMenuRadioItem: React.FC<
  React.ComponentProps<typeof DropdownMenuPrimitive.RadioItem>
> = ({ className, children, ...props }) => {
  return (
    <DataTestId value="radio-item">
      <DropdownMenuPrimitive.RadioItem
        data-slot="dropdown-menu-radio-item"
        className={cn(
          '--dropdown-menu-radio-item',
          "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
          className
        )}
        {...props}
      >
        <span className="pointer-events-none absolute left-2 flex size-3.5 items-center justify-center">
          <DropdownMenuPrimitive.ItemIndicator>
            <CircleIcon className="size-2 fill-current" />
          </DropdownMenuPrimitive.ItemIndicator>
        </span>
        {children}
      </DropdownMenuPrimitive.RadioItem>
    </DataTestId>
  );
};

const DropdownMenuLabel: React.FC<
  React.ComponentProps<typeof DropdownMenuPrimitive.Label> & {
    inset?: boolean;
  }
> = ({ className, inset, ...props }) => {
  return (
    <DataTestId value="label">
      <DropdownMenuPrimitive.Label
        data-slot="dropdown-menu-label"
        data-inset={inset}
        className={cn(
          '--dropdown-menu-label',
          'px-2 py-1.5 font-medium data-[inset]:pl-8',
          className
        )}
        {...props}
      />
    </DataTestId>
  );
};

const DropdownMenuSeparator: React.FC<
  React.ComponentProps<typeof DropdownMenuPrimitive.Separator>
> = ({ className, ...props }) => {
  return (
    <DataTestId value="separator">
      <DropdownMenuPrimitive.Separator
        data-slot="dropdown-menu-separator"
        className={cn(
          '--dropdown-menu-separator',
          'bg-border -mx-1 my-1 h-px',
          className
        )}
        {...props}
      />
    </DataTestId>
  );
};

const DropdownMenuShortcut: React.FC<React.ComponentProps<'span'>> = ({
  className,
  ...props
}) => {
  return (
    <DataTestId value="shortcut">
      <span
        data-slot="dropdown-menu-shortcut"
        className={cn(
          '--dropdown-menu-shortcut',
          'text-muted-foreground ml-auto text-xs tracking-widest',
          className
        )}
        {...props}
      />
    </DataTestId>
  );
};

const DropdownMenuSub: React.FC<
  React.ComponentProps<typeof DropdownMenuPrimitive.Sub>
> = ({ ...props }) => {
  return (
    <DataTestId value="sub">
      <DropdownMenuPrimitive.Sub data-slot="dropdown-menu-sub" {...props} />
    </DataTestId>
  );
};

const DropdownMenuSubTrigger: React.FC<
  React.ComponentProps<typeof DropdownMenuPrimitive.SubTrigger> & {
    inset?: boolean;
  }
> = ({ className, inset, children, ...props }) => {
  return (
    <DataTestId value="trigger">
      <DropdownMenuPrimitive.SubTrigger
        data-slot="dropdown-menu-sub-trigger"
        data-inset={inset}
        className={cn(
          '--dropdown-menu-sub-trigger',
          'focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground flex cursor-default items-center rounded-sm px-2 py-1.5 outline-hidden select-none data-[inset]:pl-8',
          className
        )}
        {...props}
      >
        {children}
        <ChevronRightIcon className="ml-auto size-4" />
      </DropdownMenuPrimitive.SubTrigger>
    </DataTestId>
  );
};

const DropdownMenuSubContent: React.FC<
  React.ComponentProps<typeof DropdownMenuPrimitive.SubContent>
> = ({ className, ...props }) => {
  return (
    <DataTestId value="content">
      <DropdownMenuPrimitive.SubContent
        data-slot="dropdown-menu-sub-content"
        className={cn(
          '--dropdown-menu-sub-content',
          'bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[8rem] origin-(--radix-dropdown-menu-content-transform-origin) overflow-hidden rounded-md border p-1 shadow-lg',
          className
        )}
        {...props}
      />
    </DataTestId>
  );
};

export {
  DropdownMenu,
  DropdownMenuArrow,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
};
