import { cn } from '@/components/ui/utils/cn';
import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';
import { DataTestId } from './data-test-id';
import {
  TypographyDiv,
  TypographyParagraph,
  type TTypographyDivProps,
  type TTypographyParagraphProps,
} from './typography';

const alertVariants = cva(
  [
    '--alert',
    'relative w-full rounded-lg border px-3 py-2 grid gap-y-0.5 items-start',
    'has-[>svg]:grid-cols-[calc(var(--spacing)*4)_1fr] grid-cols-[0_1fr] has-[>svg]:gap-x-2',
    `[&>svg]:mt-0.5 [&_svg:not([class*='size-'])]:size-4 [&>svg]:translate-y-0.5 [&>svg]:text-current`,
    'has-[>.--skeleton-icon]:grid-cols-[calc(var(--spacing)*4)_1fr] grid-cols-[0_1fr] has-[>.--skeleton-icon]:gap-x-2',
    '[&_.--skeleton-icon]:size-4 [&_.--skeleton-icon]:mt-1',
  ],
  {
    variants: {
      variant: {
        default: 'bg-card text-card-foreground',
        destructive:
          'border-destructive text-destructive bg-card [&>svg]:text-current *:data-[slot=alert-description]:text-destructive',
        warning:
          'border-warning text-warning bg-card [&>svg]:text-current *:data-[slot=alert-description]:text-warning',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

const Alert: React.FC<
  React.ComponentProps<'div'> & VariantProps<typeof alertVariants>
> = ({ className, variant, ...props }) => {
  return (
    <DataTestId value="alert">
      <div
        data-slot="alert"
        role="alert"
        className={cn(alertVariants({ variant }), className)}
        {...props}
      />
    </DataTestId>
  );
};

const AlertTitle: React.FC<TTypographyDivProps> = ({ className, ...props }) => {
  return (
    <DataTestId value="title">
      <TypographyDiv
        data-slot="alert-title"
        className={cn(
          '--alert-title',
          'col-start-2 line-clamp-1 min-h-4 font-medium tracking-tight',
          className
        )}
        {...props}
      />
    </DataTestId>
  );
};

const AlertDescription: React.FC<TTypographyParagraphProps> = ({
  className,
  ...props
}) => {
  return (
    <DataTestId value="description">
      <TypographyParagraph
        data-slot="alert-description"
        className={cn(
          '--alert-description',
          'text-muted-foreground col-start-2 grid justify-items-start gap-1 text-sm [&_p]:leading-relaxed',
          className
        )}
        {...props}
      />
    </DataTestId>
  );
};

export { Alert, AlertDescription, AlertTitle };
