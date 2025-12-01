import { cn } from '@/components/ui/utils/cn';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import { cva, type VariantProps } from 'class-variance-authority';
import { XIcon } from 'lucide-react';
import * as React from 'react';
import { Button } from './button';
import { DataTestId } from './data-test-id';
import { Skeleton } from './skeleton';
import { useShowSkeleton } from './skeleton/hooks';

const Dialog: React.FC<
  React.ComponentProps<typeof DialogPrimitive.Root>
> = props => {
  return (
    <DataTestId value="dialog">
      <DialogPrimitive.Root data-slot="dialog" {...props} />
    </DataTestId>
  );
};

const DialogTrigger: React.FC<
  React.ComponentProps<typeof DialogPrimitive.Trigger>
> = ({ className, ...props }) => {
  return (
    <DataTestId value="trigger">
      <DialogPrimitive.Trigger
        data-slot="dialog-trigger"
        className={cn('--dialog-trigger', className)}
        {...props}
      />
    </DataTestId>
  );
};

const DialogPortal: React.FC<
  React.ComponentProps<typeof DialogPrimitive.Portal>
> = props => {
  return <DialogPrimitive.Portal data-slot="dialog-portal" {...props} />;
};

const DialogClose: React.FC<
  React.ComponentProps<typeof DialogPrimitive.Close>
> = ({ className, ...props }) => {
  return (
    <DataTestId value="close">
      <DialogPrimitive.Close
        data-slot="dialog-close"
        className={cn('--dialog-close', className)}
        {...props}
      />
    </DataTestId>
  );
};

const DialogCloseButton: React.FC<React.ComponentProps<typeof Button>> = ({
  className,
  ...props
}) => {
  return (
    <DialogClose asChild>
      <Button
        variant="ghost"
        className={cn('--dialog-close-button', '-m-2', className)}
        {...props}
      >
        <XIcon />
      </Button>
    </DialogClose>
  );
};

const DialogOverlay: React.FC<
  React.ComponentProps<typeof DialogPrimitive.Overlay>
> = ({ className, ...props }) => {
  return (
    <DialogPrimitive.Overlay
      data-slot="dialog-overlay"
      className={cn(
        '--dialog-overlay data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-foreground/60 dark:bg-muted/80',
        className
      )}
      {...props}
    />
  );
};

const dialogContentVariants = cva(
  [
    '--dialog-content',
    'bg-background rounded-lg border shadow-lg',
    'flex flex-col',
    'fixed z-50',
    'duration-200',
    'w-full max-h-[calc(100dvh-2rem)] max-w-[calc(100dvw-2rem)]',
    'data-[state=open]:animate-in data-[state=closed]:animate-out',
    'data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
    'data-[state=closed]:zoom-out-75 data-[state=open]:zoom-in-75',
  ],
  {
    variants: {
      height: {
        auto: '',
        sm: 'md:max-h-[40vh]',
        md: 'md:max-h-[60vh]',
        lg: 'md:max-h-[80vh]',
        full: 'h-[calc(100dvh-2rem)]',
      },
      width: {
        auto: '',
        sm: 'max-sm:inset-x-3 md:max-w-[35vw]',
        md: 'max-sm:inset-x-3 md:max-w-[50vw]',
        lg: 'max-sm:inset-x-3 md:max-w-[75vw]',
        full: 'w-[calc(100dvw-2rem)]',
      },
      position: {
        center: ['top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'],
        left: ['top-[50%] left-[2rem] translate-x-[-1rem] translate-y-[-50%]'],
        right: ['top-[50%] right-[2rem] translate-x-[1rem] translate-y-[-50%]'],
        bottom: [
          'bottom-[2rem] left-[50%] translate-x-[-50%] translate-y-[1rem]',
        ],
        top: ['top-[2rem] left-[50%] translate-x-[-50%] translate-y-[-1rem]'],
        topLeft: [
          'top-[2rem] left-[2rem] translate-x-[-1rem] translate-y-[-1rem]',
        ],
        topRight: [
          'top-[2rem] right-[2rem] translate-x-[1rem] translate-y-[-1rem]',
        ],
        bottomLeft: [
          'bottom-[2rem] left-[2rem] translate-x-[-1rem] translate-y-[1rem]',
        ],
        bottomRight: [
          'bottom-[2rem] right-[2rem] translate-x-[1rem] translate-y-[1rem]',
        ],
      },
    },
    defaultVariants: {
      height: 'auto',
      width: 'md',
      position: 'center',
    },
  }
);

const DialogContent: React.FC<
  React.ComponentProps<typeof DialogPrimitive.Content> &
    VariantProps<typeof dialogContentVariants>
> = ({ className, children, height, width, position, ...props }) => {
  return (
    <DataTestId value="content">
      <DialogPortal data-slot="dialog-portal">
        <DialogOverlay />
        <DialogPrimitive.Content
          data-slot="dialog-content"
          className={cn(
            dialogContentVariants({ height, width, position }),
            className
          )}
          {...props}
        >
          {children}
        </DialogPrimitive.Content>
      </DialogPortal>
    </DataTestId>
  );
};

const DialogHeader: React.FC<React.ComponentProps<'div'>> = ({
  className,
  ...props
}) => {
  return (
    <DataTestId value="header">
      <div
        data-slot="dialog-header"
        className={cn('--dialog-header p-4 pb-2 [.border-b]:pb-4', className)}
        {...props}
      />
    </DataTestId>
  );
};

const DialogBody: React.FC<React.ComponentProps<'div'>> = ({
  className,
  ...props
}) => {
  return (
    <DataTestId value="body">
      <div
        data-slot="dialog-body"
        className={cn('--dialog-body p-4 flex-1 overflow-y-auto', className)}
        {...props}
      />
    </DataTestId>
  );
};

const DialogFooter: React.FC<React.ComponentProps<'div'>> = ({
  className,
  ...props
}) => {
  return (
    <DataTestId value="footer">
      <div
        data-slot="dialog-footer"
        className={cn('--dialog-footer p-4 pt-2 [.border-t]:pt-4', className)}
        {...props}
      />
    </DataTestId>
  );
};

const DialogTitle: React.FC<
  React.ComponentProps<typeof DialogPrimitive.Title>
> = ({ className, children, ...props }) => {
  const showSkeleton = useShowSkeleton();

  const _className = cn('--dialog-title text-lg font-semibold', className);

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

const DialogDescription: React.FC<
  React.ComponentProps<typeof DialogPrimitive.Description>
> = ({ className, children, ...props }) => {
  const showSkeleton = useShowSkeleton();

  const _className = cn(
    '--dialog-description text-muted-foreground',
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
};
