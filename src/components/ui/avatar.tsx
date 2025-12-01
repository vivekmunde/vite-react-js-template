import { cn } from '@/components/ui/utils/cn';
import * as AvatarPrimitive from '@radix-ui/react-avatar';
import * as React from 'react';
import { DataTestId } from './data-test-id';
import { Skeleton } from './skeleton';
import { useShowSkeleton } from './skeleton/hooks';

const Avatar: React.FC<
  React.ComponentProps<typeof AvatarPrimitive.Root> & {}
> = ({ className, children, ...props }) => {
  const _className = cn(
    '--avatar',
    'relative flex size-8 shrink-0 overflow-hidden rounded-full',
    className
  );

  return (
    <DataTestId value="avatar">
      <AvatarPrimitive.Root
        data-slot="avatar"
        className={_className}
        {...props}
      >
        {children}
      </AvatarPrimitive.Root>
    </DataTestId>
  );
};

const AvatarImage: React.FC<
  React.ComponentProps<typeof AvatarPrimitive.Image>
> = ({ className, children, ...props }) => {
  const showSkeleton = useShowSkeleton();

  const _className = cn('--avatar-image', 'aspect-square size-full', className);

  return (
    <DataTestId value="image">
      {showSkeleton ? (
        <Skeleton className={_className}>{children}</Skeleton>
      ) : (
        <AvatarPrimitive.Image
          data-slot="avatar-image"
          className={_className}
          {...props}
        >
          {children}
        </AvatarPrimitive.Image>
      )}
    </DataTestId>
  );
};

const AvatarFallback: React.FC<
  React.ComponentProps<typeof AvatarPrimitive.Fallback>
> = ({ className, children, ...props }) => {
  const showSkeleton = useShowSkeleton();

  const _className = cn(
    '--avatar-fallback bg-muted flex size-full items-center justify-center rounded-full',
    className
  );
  return (
    <DataTestId value="fallback">
      {showSkeleton ? (
        <Skeleton className={_className}>{children}</Skeleton>
      ) : (
        <AvatarPrimitive.Fallback
          data-slot="avatar-fallback"
          className={_className}
          {...props}
        >
          {children}
        </AvatarPrimitive.Fallback>
      )}
    </DataTestId>
  );
};

export { Avatar, AvatarFallback, AvatarImage };
