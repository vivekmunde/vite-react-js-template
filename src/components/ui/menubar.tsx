import { cn } from '@/components/ui/utils/cn';
import * as MenubarPrimitive from '@radix-ui/react-menubar';
import { CheckIcon, ChevronRightIcon, CircleIcon } from 'lucide-react';
import * as React from 'react';
import { DataTestId } from './data-test-id';

const Menubar: React.FC<React.ComponentProps<typeof MenubarPrimitive.Root>> = ({
  className,
  ...props
}) => {
  return (
    <DataTestId value="menubar">
      <MenubarPrimitive.Root
        data-slot="menubar"
        className={cn(
          '--menubar',
          'bg-background flex items-center gap-1 rounded-md border p-1 shadow-xs',
          className
        )}
        {...props}
      />
    </DataTestId>
  );
};

const MenubarMenu: React.FC<
  React.ComponentProps<typeof MenubarPrimitive.Menu>
> = ({ ...props }) => {
  return (
    <DataTestId value="menu">
      <MenubarPrimitive.Menu data-slot="menubar-menu" {...props} />
    </DataTestId>
  );
};

const MenubarGroup: React.FC<
  React.ComponentProps<typeof MenubarPrimitive.Group>
> = ({ ...props }) => {
  return (
    <DataTestId value="group">
      <MenubarPrimitive.Group data-slot="menubar-group" {...props} />
    </DataTestId>
  );
};

const MenubarPortal: React.FC<
  React.ComponentProps<typeof MenubarPrimitive.Portal>
> = ({ ...props }) => {
  return <MenubarPrimitive.Portal data-slot="menubar-portal" {...props} />;
};

const MenubarRadioGroup: React.FC<
  React.ComponentProps<typeof MenubarPrimitive.RadioGroup>
> = ({ ...props }) => {
  return (
    <DataTestId value="radio-group">
      <MenubarPrimitive.RadioGroup data-slot="menubar-radio-group" {...props} />
    </DataTestId>
  );
};

const MenubarTrigger: React.FC<
  React.ComponentProps<typeof MenubarPrimitive.Trigger>
> = ({ className, ...props }) => {
  return (
    <DataTestId value="trigger">
      <MenubarPrimitive.Trigger
        data-slot="menubar-trigger"
        className={cn(
          '--menubar-trigger',
          'focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground',
          'flex items-center rounded-sm px-2 py-1 font-medium outline-hidden select-none',
          className
        )}
        {...props}
      />
    </DataTestId>
  );
};

const MenubarContent: React.FC<
  React.ComponentProps<typeof MenubarPrimitive.Content>
> = ({
  className,
  align = 'start',
  alignOffset = -4,
  sideOffset = 8,
  children,
  ...props
}) => {
  return (
    <DataTestId value="content">
      <MenubarPortal>
        <MenubarPrimitive.Content
          data-slot="menubar-content"
          align={align}
          alignOffset={alignOffset}
          sideOffset={sideOffset}
          className={cn(
            '--menubar-content',
            'bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[12rem] origin-(--radix-menubar-content-transform-origin) overflow-hidden rounded-md border p-1 shadow-md',
            className
          )}
          {...props}
        >
          {children}
          <MenubarPrimitive.Arrow className="fill-border" />
        </MenubarPrimitive.Content>
      </MenubarPortal>
    </DataTestId>
  );
};

const MenubarItem: React.FC<
  React.ComponentProps<typeof MenubarPrimitive.Item> & {
    inset?: boolean;
    variant?: 'default' | 'destructive';
  }
> = ({ className, inset, variant = 'default', ...props }) => {
  return (
    <DataTestId value="item">
      <MenubarPrimitive.Item
        data-slot="menubar-item"
        data-inset={inset}
        data-variant={variant}
        className={cn(
          '--menubar-item',
          "focus:bg-accent focus:text-accent-foreground data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 data-[variant=destructive]:focus:text-destructive data-[variant=destructive]:*:[svg]:!text-destructive [&_svg:not([class*='text-'])]:text-muted-foreground",
          'relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 outline-hidden select-none',
          "data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
          className
        )}
        {...props}
      />
    </DataTestId>
  );
};

const MenubarCheckboxItem: React.FC<
  React.ComponentProps<typeof MenubarPrimitive.CheckboxItem>
> = ({ className, children, checked, ...props }) => {
  return (
    <DataTestId value="checkbox-item">
      <MenubarPrimitive.CheckboxItem
        data-slot="menubar-checkbox-item"
        className={cn(
          '--menubar-checkbox-item',
          "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-xs py-1.5 pr-2 pl-8 outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
          className
        )}
        checked={checked}
        {...props}
      >
        <span className="pointer-events-none absolute left-2 flex size-3.5 items-center justify-center">
          <MenubarPrimitive.ItemIndicator>
            <CheckIcon className="size-4" />
          </MenubarPrimitive.ItemIndicator>
        </span>
        {children}
      </MenubarPrimitive.CheckboxItem>
    </DataTestId>
  );
};

const MenubarRadioItem: React.FC<
  React.ComponentProps<typeof MenubarPrimitive.RadioItem>
> = ({ className, children, ...props }) => {
  return (
    <DataTestId value="radio-item">
      <MenubarPrimitive.RadioItem
        data-slot="menubar-radio-item"
        className={cn(
          '--menubar-radio-item',
          "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-xs py-1.5 pr-2 pl-8 outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
          className
        )}
        {...props}
      >
        <span className="pointer-events-none absolute left-2 flex size-3.5 items-center justify-center">
          <MenubarPrimitive.ItemIndicator>
            <CircleIcon className="size-2 fill-current" />
          </MenubarPrimitive.ItemIndicator>
        </span>
        {children}
      </MenubarPrimitive.RadioItem>
    </DataTestId>
  );
};

const MenubarLabel: React.FC<
  React.ComponentProps<typeof MenubarPrimitive.Label> & {
    inset?: boolean;
  }
> = ({ className, inset, ...props }) => {
  return (
    <DataTestId value="label">
      <MenubarPrimitive.Label
        data-slot="menubar-label"
        data-inset={inset}
        className={cn(
          '--menubar-label',
          'px-2 py-1.5 font-medium data-[inset]:pl-8',
          className
        )}
        {...props}
      />
    </DataTestId>
  );
};

const MenubarSeparator: React.FC<
  React.ComponentProps<typeof MenubarPrimitive.Separator>
> = ({ className, ...props }) => {
  return (
    <DataTestId value="separator">
      <MenubarPrimitive.Separator
        data-slot="menubar-separator"
        className={cn(
          '--menubar-separator',
          'bg-border -mx-1 my-1 h-px',
          className
        )}
        {...props}
      />
    </DataTestId>
  );
};

const MenubarShortcut: React.FC<React.ComponentProps<'span'>> = ({
  className,
  ...props
}) => {
  return (
    <DataTestId value="shortcut">
      <span
        data-slot="menubar-shortcut"
        className={cn(
          '--menubar-shortcut',
          'text-muted-foreground ml-auto text-xs tracking-widest',
          className
        )}
        {...props}
      />
    </DataTestId>
  );
};

const MenubarSub: React.FC<
  React.ComponentProps<typeof MenubarPrimitive.Sub>
> = ({ ...props }) => {
  return (
    <DataTestId value="sub">
      <MenubarPrimitive.Sub data-slot="menubar-sub" {...props} />
    </DataTestId>
  );
};

const MenubarSubTrigger: React.FC<
  React.ComponentProps<typeof MenubarPrimitive.SubTrigger> & {
    inset?: boolean;
  }
> = ({ className, inset, children, ...props }) => {
  return (
    <DataTestId value="sub-trigger">
      <MenubarPrimitive.SubTrigger
        data-slot="menubar-sub-trigger"
        data-inset={inset}
        className={cn(
          'focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground flex cursor-default items-center rounded-sm px-2 py-1.5 outline-none select-none data-[inset]:pl-8',
          className
        )}
        {...props}
      >
        {children}
        <ChevronRightIcon className="ml-auto h-4 w-4" />
      </MenubarPrimitive.SubTrigger>
    </DataTestId>
  );
};

const MenubarSubContent: React.FC<
  React.ComponentProps<typeof MenubarPrimitive.SubContent>
> = ({ className, children, ...props }) => {
  return (
    <DataTestId value="sub-content">
      <MenubarPrimitive.SubContent
        sideOffset={4}
        data-slot="menubar-sub-content"
        className={cn(
          '--menubar-sub-content',
          'bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[8rem] origin-(--radix-menubar-content-transform-origin) overflow-hidden rounded-md border p-1 shadow-lg',
          className
        )}
        {...props}
      >
        {children}
        <MenubarPrimitive.Arrow className="fill-border" />
      </MenubarPrimitive.SubContent>
    </DataTestId>
  );
};

export {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarGroup,
  MenubarItem,
  MenubarLabel,
  MenubarMenu,
  MenubarPortal,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
};
