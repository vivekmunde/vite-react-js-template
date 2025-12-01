import { buttonVariants } from '@/components/ui/button/variants';
import { cn } from '@/components/ui/utils/cn';
import * as AlertDialogPrimitive from '@radix-ui/react-alert-dialog';
import type { VariantProps } from 'class-variance-authority';
import * as React from 'react';
import { DataTestId } from './data-test-id';
import { Skeleton } from './skeleton';
import { useShowSkeleton } from './skeleton/hooks';

const AlertDialog: React.FC<
  React.ComponentProps<typeof AlertDialogPrimitive.Root>
> = ({ ...props }) => {
  return (
    <DataTestId value="alert-dialog">
      <AlertDialogPrimitive.Root data-slot="alert-dialog" {...props} />
    </DataTestId>
  );
};

const AlertDialogTrigger: React.FC<
  React.ComponentProps<typeof AlertDialogPrimitive.Trigger>
> = ({ className, ...props }) => {
  return (
    <DataTestId value="trigger">
      <AlertDialogPrimitive.Trigger
        data-slot="alert-dialog-trigger"
        className={cn('--alert-dialog-trigger', className)}
        {...props}
      />
    </DataTestId>
  );
};

const AlertDialogPortal: React.FC<
  React.ComponentProps<typeof AlertDialogPrimitive.Portal>
> = ({ ...props }) => {
  return (
    <AlertDialogPrimitive.Portal data-slot="alert-dialog-portal" {...props} />
  );
};

const AlertDialogOverlay: React.FC<
  React.ComponentProps<typeof AlertDialogPrimitive.Overlay>
> = ({ className, ...props }) => {
  return (
    <AlertDialogPrimitive.Overlay
      data-slot="alert-dialog-overlay"
      className={cn(
        '--alert-dialog-overlay',
        'data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-foreground/60 dark:bg-muted/80',
        className
      )}
      {...props}
    />
  );
};

const AlertDialogContent: React.FC<
  React.ComponentProps<typeof AlertDialogPrimitive.Content>
> = ({ className, ...props }) => {
  return (
    <DataTestId value="content">
      <AlertDialogPortal>
        <AlertDialogOverlay />
        <AlertDialogPrimitive.Content
          data-slot="alert-dialog-content"
          className={cn(
            '--alert-dialog-content',
            'bg-background rounded-lg border shadow-lg',
            'fixed z-50',
            'w-full sm:max-w-lg max-w-[calc(100%-2rem)] max-h-[calc(100%-2rem)]',
            'top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] duration-200',
            'data-[state=open]:animate-in data-[state=closed]:animate-out',
            'data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
            'data-[state=closed]:zoom-out-75 data-[state=open]:zoom-in-75',
            className
          )}
          {...props}
        />
      </AlertDialogPortal>
    </DataTestId>
  );
};

const AlertDialogHeader: React.FC<React.ComponentProps<'div'>> = ({
  className,
  ...props
}) => {
  return (
    <DataTestId value="header">
      <div
        data-slot="alert-dialog-header"
        className={cn(
          '--alert-dialog-header',
          'p-4 pb-1 [.border-b]:pb-4',
          className
        )}
        {...props}
      />
    </DataTestId>
  );
};

const AlertDialogBody: React.FC<React.ComponentProps<'div'>> = ({
  className,
  ...props
}) => {
  return (
    <DataTestId value="body">
      <div
        data-slot="alert-dialog-body"
        className={cn('--alert-dialog-body', 'p-4 overflow-y-auto', className)}
        {...props}
      />
    </DataTestId>
  );
};

const AlertDialogFooter: React.FC<React.ComponentProps<'div'>> = ({
  className,
  ...props
}) => {
  return (
    <DataTestId value="footer">
      <div
        data-slot="alert-dialog-footer"
        className={cn(
          '--alert-dialog-footer',
          'p-4 pt-1 [.border-t]:pt-4',
          className
        )}
        {...props}
      />
    </DataTestId>
  );
};

const AlertDialogTitle: React.FC<
  React.ComponentProps<typeof AlertDialogPrimitive.Title>
> = ({ className, ...props }) => {
  const showSkeleton = useShowSkeleton();

  const _className = cn(
    '--alert-dialog-title text-lg font-semibold',
    className
  );

  return (
    <DataTestId value="title">
      {showSkeleton ? (
        <Skeleton className={_className}>{props.children}</Skeleton>
      ) : (
        <AlertDialogPrimitive.Title
          data-slot="alert-dialog-title"
          className={_className}
          {...props}
        />
      )}
    </DataTestId>
  );
};

const AlertDialogDescription: React.FC<
  React.ComponentProps<typeof AlertDialogPrimitive.Description>
> = ({ className, ...props }) => {
  const showSkeleton = useShowSkeleton();

  const _className = cn('--alert-dialog-description', className);

  return (
    <DataTestId value="description">
      {showSkeleton ? (
        <Skeleton className={_className}>{props.children}</Skeleton>
      ) : (
        <AlertDialogPrimitive.Description
          data-slot="alert-dialog-description"
          className={_className}
          {...props}
        />
      )}
    </DataTestId>
  );
};

const AlertDialogAction: React.FC<
  React.ComponentProps<typeof AlertDialogPrimitive.Action> &
    VariantProps<typeof buttonVariants>
> = ({ className, ...props }) => {
  return (
    <AlertDialogPrimitive.Action
      className={cn('--alert-dialog-action', className)}
      {...props}
    />
  );
};

const AlertDialogCancel: React.FC<
  React.ComponentProps<typeof AlertDialogPrimitive.Cancel> &
    VariantProps<typeof buttonVariants>
> = ({ className, ...props }) => {
  return (
    <DataTestId value="cancel">
      <AlertDialogPrimitive.Cancel
        className={cn('--alert-dialog-cancel', className)}
        {...props}
      />
    </DataTestId>
  );
};

export {
  AlertDialog,
  AlertDialogAction,
  AlertDialogBody,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  AlertDialogPortal,
  AlertDialogTitle,
  AlertDialogTrigger,
};
