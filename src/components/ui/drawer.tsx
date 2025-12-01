import { cn } from '@/components/ui/utils/cn';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import { cva, type VariantProps } from 'class-variance-authority';
import { XIcon } from 'lucide-react';
import * as React from 'react';
import { Button } from './button';
import { DataTestId } from './data-test-id';
import { Skeleton } from './skeleton';
import { useShowSkeleton } from './skeleton/hooks';

const Drawer: React.FC<
  React.ComponentProps<typeof DialogPrimitive.Root>
> = props => {
  return (
    <DataTestId value="dialog">
      <DialogPrimitive.Root data-slot="dialog" {...props} />
    </DataTestId>
  );
};

const DrawerTrigger: React.FC<
  React.ComponentProps<typeof DialogPrimitive.Trigger>
> = ({ className, ...props }) => {
  return (
    <DataTestId value="trigger">
      <DialogPrimitive.Trigger
        data-slot="dialog-trigger"
        className={cn('--drawer-trigger', className)}
        {...props}
      />
    </DataTestId>
  );
};

const DrawerPortal: React.FC<
  React.ComponentProps<typeof DialogPrimitive.Portal>
> = props => {
  return <DialogPrimitive.Portal data-slot="dialog-portal" {...props} />;
};

const DrawerClose: React.FC<
  React.ComponentProps<typeof DialogPrimitive.Close>
> = ({ className, ...props }) => {
  return (
    <DataTestId value="close">
      <DialogPrimitive.Close
        data-slot="dialog-close"
        className={cn('--drawer-close', className)}
        {...props}
      />
    </DataTestId>
  );
};

const DrawerCloseButton: React.FC<React.ComponentProps<typeof Button>> = ({
  className,
  ...props
}) => {
  return (
    <DrawerClose asChild>
      <Button
        variant="ghost"
        className={cn('--drawer-close-button', '-m-2', className)}
        {...props}
      >
        <XIcon />
      </Button>
    </DrawerClose>
  );
};

const DrawerOverlay: React.FC<
  React.ComponentProps<typeof DialogPrimitive.Overlay>
> = ({ className, ...props }) => {
  return (
    <DialogPrimitive.Overlay
      data-slot="dialog-overlay"
      className={cn(
        '--drawer-overlay data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-foreground/60 dark:bg-muted/80',
        className
      )}
      {...props}
    />
  );
};

const dialogContentVariants = cva(
  [
    '--drawer-content',
    'bg-background rounded-lg border shadow-lg',
    'flex flex-col',
    'data-[state=open]:animate-in data-[state=closed]:animate-out',
    'data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
    'fixed z-50',
    'duration-200',
    'w-full max-h-[calc(100dvh-2rem)] max-w-[calc(100dvw-2rem)]',
  ],
  {
    variants: {
      height: {
        sm: 'md:max-h-[40vh]',
        md: 'md:max-h-[60vh]',
        lg: 'md:max-h-[80vh]',
        full: 'h-[calc(100dvh-2rem)]',
      },
      width: {
        sm: 'max-sm:inset-x-3 md:max-w-[35vw]',
        md: 'max-sm:inset-x-3 md:max-w-[50vw]',
        lg: 'max-sm:inset-x-3 md:max-w-[75vw]',
        full: 'w-[calc(100dvw-2rem)]',
      },
      position: {
        left: [
          'top-[50%] left-[2rem] translate-x-[-1rem] translate-y-[-50%]',
          'data-[state=open]:slide-in-from-left-[100%] data-[state=closed]:slide-out-to-left-[100%]',
        ],
        right: [
          'top-[50%] right-[2rem] translate-x-[1rem] translate-y-[-50%]',
          'data-[state=open]:slide-in-from-right-[100%] data-[state=closed]:slide-out-to-right-[100%]',
        ],
        bottom: [
          'bottom-[2rem] left-[50%] translate-x-[-50%] translate-y-[1rem]',
          'data-[state=open]:slide-in-from-bottom-[100%] data-[state=closed]:slide-out-to-bottom-[100%]',
        ],
        top: [
          'top-[2rem] left-[50%] translate-x-[-50%] translate-y-[-1rem]',
          'data-[state=open]:slide-in-from-top-[100%] data-[state=closed]:slide-out-to-top-[100%]',
        ],
      },
    },
    defaultVariants: {
      height: 'full',
      width: 'sm',
      position: 'right',
    },
  }
);

const DrawerContent: React.FC<
  React.ComponentProps<typeof DialogPrimitive.Content> &
    VariantProps<typeof dialogContentVariants>
> = ({ className, children, height, width, position, ...props }) => {
  return (
    <DataTestId value="content">
      <DrawerPortal data-slot="dialog-portal">
        <DrawerOverlay />
        <DialogPrimitive.Content
          data-slot="dialog-content"
          className={cn(
            dialogContentVariants({
              height:
                position === 'left' || position === 'right' ? 'full' : height,
              width:
                position === 'top' || position === 'bottom' ? 'full' : width,
              position,
            }),
            className
          )}
          {...props}
        >
          {children}
        </DialogPrimitive.Content>
      </DrawerPortal>
    </DataTestId>
  );
};

const DrawerHeader: React.FC<React.ComponentProps<'div'>> = ({
  className,
  ...props
}) => {
  return (
    <DataTestId value="header">
      <div
        data-slot="dialog-header"
        className={cn('--drawer-header p-4 pb-2 [.border-b]:pb-4', className)}
        {...props}
      />
    </DataTestId>
  );
};

const DrawerBody: React.FC<React.ComponentProps<'div'>> = ({
  className,
  ...props
}) => {
  return (
    <DataTestId value="body">
      <div
        data-slot="dialog-body"
        className={cn('--drawer-body p-4 flex-1 overflow-y-auto', className)}
        {...props}
      />
    </DataTestId>
  );
};

const DrawerFooter: React.FC<React.ComponentProps<'div'>> = ({
  className,
  ...props
}) => {
  return (
    <DataTestId value="footer">
      <div
        data-slot="dialog-footer"
        className={cn('--drawer-footer p-4 pt-2 [.border-t]:pt-4', className)}
        {...props}
      />
    </DataTestId>
  );
};

const DrawerTitle: React.FC<
  React.ComponentProps<typeof DialogPrimitive.Title>
> = ({ className, children, ...props }) => {
  const showSkeleton = useShowSkeleton();

  const _className = cn('--drawer-title text-lg font-semibold', className);

  return (
    <DataTestId value="title">
      {showSkeleton ? (
        <Skeleton className={_className}>{children}</Skeleton>
      ) : (
        <DialogPrimitive.Title
          data-slot="dialog-title"
          className={_className}
          {...props}
        >
          {children}
        </DialogPrimitive.Title>
      )}
    </DataTestId>
  );
};

const DrawerDescription: React.FC<
  React.ComponentProps<typeof DialogPrimitive.Description>
> = ({ className, children, ...props }) => {
  const showSkeleton = useShowSkeleton();

  const _className = cn(
    '--drawer-description text-muted-foreground',
    className
  );

  return (
    <DataTestId value="description">
      {showSkeleton ? (
        <Skeleton className={_className}>{children}</Skeleton>
      ) : (
        <DialogPrimitive.Description
          data-slot="dialog-description"
          className={_className}
          {...props}
        >
          {children}
        </DialogPrimitive.Description>
      )}
    </DataTestId>
  );
};

export {
  Drawer,
  DrawerBody,
  DrawerClose,
  DrawerCloseButton,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerPortal,
  DrawerTitle,
  DrawerTrigger,
};
