import * as ToastPrimitives from '@radix-ui/react-toast';
import type { VariantProps } from 'class-variance-authority';
import {
  AlertTriangleIcon,
  CheckCircleIcon,
  type LucideProps,
  MegaphoneIcon,
  XIcon,
} from 'lucide-react';
import * as React from 'react';
import { Button } from '../button';
import { DataTestId } from '../data-test-id';
import { Icon } from '../icon';
import { Skeleton } from '../skeleton';
import { useShowSkeleton } from '../skeleton/hooks';
import { cn } from '../utils/cn';
import { useToast } from './use-toast';
import { toastVariants } from './variants';

const ToastContext = React.createContext<{
  variant?: 'default' | 'success' | 'destructive' | undefined | null;
}>({
  variant: 'default',
});

const ToastAction: React.FC<
  React.ComponentProps<typeof ToastPrimitives.Action>
> = ({ className, ...props }) => (
  <DataTestId value="action">
    <ToastPrimitives.Action
      className={cn('--toast-action', className)}
      {...props}
    />
  </DataTestId>
);

const ToastClose: React.FC<
  React.ComponentProps<typeof ToastPrimitives.Close>
> = ({ className, ...props }) => (
  <ToastPrimitives.Close
    className={cn('--toast-close', className)}
    {...props}
  />
);

const ToastCloseButton: React.FC<React.ComponentProps<typeof Button>> = ({
  className,
  ...props
}) => (
  <DataTestId value="close">
    <ToastClose asChild>
      <Button
        variant="ghost"
        size="sm"
        className={cn('--toast-close-button', className)}
        {...props}
      >
        <XIcon />
      </Button>
    </ToastClose>
  </DataTestId>
);

const ToastDescription: React.FC<
  React.ComponentProps<typeof ToastPrimitives.Description>
> = ({ className, ...props }) => {
  const showSkeleton = useShowSkeleton();

  const _className = cn('--toast-description', 'text-sm opacity-90', className);

  return (
    <DataTestId value="description">
      {showSkeleton ? (
        <Skeleton>
          <ToastPrimitives.Description className={_className} {...props} />
        </Skeleton>
      ) : (
        <ToastPrimitives.Description className={_className} {...props} />
      )}
    </DataTestId>
  );
};

const ToastIcon: React.FC<LucideProps> = ({
  className,
  children,
  ...props
}) => {
  const { variant } = React.useContext(ToastContext);

  const _className = cn(
    '--toast-Icon',
    `[&_svg:not([class*='size-'])]:size-5`,
    variant === 'success' && `[&_svg:not([class*='text-'])]:text-success`,
    variant === 'destructive' &&
      `[&_svg:not([class*='text-'])]:text-destructive`,
    className
  );

  const childrenIcon = children ? (
    children
  ) : variant === 'success' ? (
    <CheckCircleIcon {...props} />
  ) : variant === 'destructive' ? (
    <AlertTriangleIcon {...props} />
  ) : (
    <MegaphoneIcon {...props} />
  );

  return (
    <DataTestId value="icon">
      <span className={_className}>
        <Icon>{childrenIcon}</Icon>
      </span>
    </DataTestId>
  );
};

const ToastTitle: React.FC<
  React.ComponentProps<typeof ToastPrimitives.Title>
> = ({ className, ...props }) => {
  const showSkeleton = useShowSkeleton();
  const { variant } = React.useContext(ToastContext);

  const _className = cn(
    '--toast-title',
    'font-medium',
    variant === 'success' && 'text-success',
    variant === 'destructive' && 'text-destructive',
    className
  );

  return (
    <DataTestId value="title">
      {showSkeleton ? (
        <Skeleton>
          <ToastPrimitives.Title className={_className} {...props} />
        </Skeleton>
      ) : (
        <ToastPrimitives.Title className={_className} {...props} />
      )}
    </DataTestId>
  );
};

const ToastViewport: React.FC<
  React.ComponentProps<typeof ToastPrimitives.Viewport>
> = ({ className, ...props }) => (
  <ToastPrimitives.Viewport
    className={cn(
      '--toast-viewport',
      'fixed top-0 z-[100] flex flex-col-reverse gap-1 overflow-y-auto max-h-screen w-full px-4 py-3 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]',
      className
    )}
    {...props}
  />
);

const Toast: React.FC<
  React.ComponentProps<typeof ToastPrimitives.Root> &
    VariantProps<typeof toastVariants>
> = ({ className, variant, ...props }) => {
  return (
    <ToastContext.Provider value={{ variant }}>
      <DataTestId value="toast">
        <ToastPrimitives.Root
          className={cn('--toast', toastVariants({ variant }), className)}
          {...props}
        />
      </DataTestId>
    </ToastContext.Provider>
  );
};

const Toaster: React.FC = () => {
  const { toasts } = useToast();

  return (
    <ToastPrimitives.Provider>
      {toasts.map(function ({ id, ...props }) {
        return <Toast key={id} {...props} />;
      })}
      <ToastViewport />
    </ToastPrimitives.Provider>
  );
};

export {
  Toast,
  ToastAction,
  ToastClose,
  ToastCloseButton,
  ToastDescription,
  Toaster,
  ToastIcon,
  ToastTitle,
  ToastViewport,
};
