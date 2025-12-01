import { Slot } from '@radix-ui/react-slot';
import * as React from 'react';
import { DataTestId } from './data-test-id';
import { Icon } from './icon';
import { Link } from './link';
import { useShowSkeleton } from './skeleton/hooks';
import { cn } from './utils/cn';
import { focusVariants } from './variants';

const SidebarMenuGroupContent: React.FC<React.ComponentProps<'div'>> = ({
  className,
  ...props
}) => {
  return (
    <DataTestId value="content">
      <div
        className={cn('--sidebar-menu-group-content', className)}
        {...props}
      />
    </DataTestId>
  );
};

const SidebarMenuGroupHeader: React.FC<React.ComponentProps<'div'>> = ({
  className,
  ...props
}) => {
  return (
    <DataTestId value="header">
      <div
        className={cn(
          '--sidebar-menu-group-header',
          'py-1',
          'flex flex-row items-center gap-2',
          'tracking-wider text-muted-foreground',
          "[&_svg:not([class*='size-'])]:size-4",
          className
        )}
        {...props}
      />
    </DataTestId>
  );
};

const SidebarMenuGroup: React.FC<React.ComponentProps<'div'>> = ({
  className,
  ...props
}) => {
  return (
    <DataTestId value="group">
      <div
        className={cn('--sidebar-menu-group', 'mb-2', className)}
        {...props}
      />
    </DataTestId>
  );
};

const SidebarMenuItem: React.FC<
  React.ComponentProps<'a'> & {
    active?: boolean;
    asChild?: boolean;
  }
> = ({ className, active, asChild, children, ...props }) => {
  const Comp = asChild ? Slot : 'a';

  const _className = cn(
    '--sidebar-menu-item',
    'py-1',
    'flex flex-row items-center gap-2',
    'rounded no-underline text-foreground',
    "[&_svg:not([class*='size-'])]:size-4",
    active && 'text-link font-medium',
    focusVariants(),
    className
  );

  return (
    <DataTestId value="item">
      <Comp className={_className} {...props}>
        {children}
      </Comp>
    </DataTestId>
  );
};

const SidebarMenuLink: React.FC<
  React.ComponentProps<typeof Link> & {
    active?: boolean;
  }
> = ({ className, active, children, ...props }) => {
  const showSkeleton = useShowSkeleton();

  if (showSkeleton) {
    return (
      <SidebarMenuItem
        active={active}
        className={cn('--sidebar-menu-link', className)}
      >
        {children}
      </SidebarMenuItem>
    );
  }

  return (
    <SidebarMenuItem asChild active={active} className={className}>
      <Link {...props}>{children}</Link>
    </SidebarMenuItem>
  );
};

const SidebarMenuItemIcon = Icon;

const SidebarMenu: React.FC<React.ComponentProps<'div'>> = ({
  className,
  ...props
}) => {
  return (
    <DataTestId value="menu">
      <div className={cn('--sidebar-menu', className)} {...props} />
    </DataTestId>
  );
};

export {
  SidebarMenu,
  SidebarMenuGroup,
  SidebarMenuGroupContent,
  SidebarMenuGroupHeader,
  SidebarMenuItem,
  SidebarMenuItemIcon,
  SidebarMenuLink,
};
