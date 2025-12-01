import { cn } from '@/components/ui/utils/cn';
import * as React from 'react';
import { DataTestId } from './data-test-id';
import {
  TypographyHeading,
  TypographyParagraph,
  type TTypographyHeadingProps,
  type TTypographyParagraphProps,
} from './typography';

const Card: React.FC<React.ComponentProps<'div'>> = ({
  className,
  ...props
}) => {
  return (
    <DataTestId value="card">
      <div
        data-slot="card"
        className={cn(
          '--card',
          'bg-card text-card-foreground rounded-md border shadow-sm',
          className
        )}
        {...props}
      />
    </DataTestId>
  );
};

const CardHeader: React.FC<React.ComponentProps<'div'>> = ({
  className,
  ...props
}) => {
  return (
    <DataTestId value="header">
      <div
        data-slot="card-header"
        className={cn(
          '--card-header',
          'px-4 pt-4 pb-1 [.border-b]:pb-4',
          className
        )}
        {...props}
      />
    </DataTestId>
  );
};

const CardTitle: React.FC<TTypographyHeadingProps> = ({
  className,
  as = 'h4',
  ...props
}) => {
  return (
    <DataTestId value="title">
      <TypographyHeading
        data-slot="card-title"
        className={cn('--card-title', className)}
        as={as}
        {...props}
      />
    </DataTestId>
  );
};

const CardDescription: React.FC<TTypographyParagraphProps> = ({
  className,
  ...props
}) => {
  return (
    <DataTestId value="description">
      <TypographyParagraph
        data-slot="card-description"
        className={cn('--card-description', 'text-muted-foreground', className)}
        {...props}
      />
    </DataTestId>
  );
};

const CardContent: React.FC<React.ComponentProps<'div'>> = ({
  className,
  ...props
}) => {
  return (
    <DataTestId value="content">
      <div
        data-slot="card-content"
        className={cn('--card-content', 'p-4', className)}
        {...props}
      />
    </DataTestId>
  );
};

const CardFooter: React.FC<React.ComponentProps<'div'>> = ({
  className,
  ...props
}) => {
  return (
    <DataTestId value="footer">
      <div
        data-slot="card-footer"
        className={cn('--card-footer', 'p-4 pt-1 [.border-t]:pt-4', className)}
        {...props}
      />
    </DataTestId>
  );
};

export {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
};
