import { cn } from '@/components/ui/utils/cn';
import { Slot } from '@radix-ui/react-slot';
import { type VariantProps } from 'class-variance-authority';
import { DataTestId } from '../data-test-id';
import { Skeleton } from '../skeleton';
import { useShowSkeleton } from '../skeleton/hooks';
import { badgeVariants } from './variants';

const Badge: React.FC<
  React.ComponentProps<'span'> &
    VariantProps<typeof badgeVariants> & {
      asChild?: boolean;
    }
> = ({ className, variant, asChild = false, children, ...props }) => {
  const Comp = asChild ? Slot : 'span';
  const showSkeleton = useShowSkeleton();

  const _className = cn(badgeVariants({ variant }), className);

  return (
    <DataTestId value="badge">
      {showSkeleton ? (
        <Skeleton className={cn('min-w-16', _className)}>{children}</Skeleton>
      ) : (
        <Comp data-slot="badge" className={_className} {...props}>
          {children}
        </Comp>
      )}
    </DataTestId>
  );
};

export { Badge };
