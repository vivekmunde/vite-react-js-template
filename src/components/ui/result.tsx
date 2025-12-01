import * as React from 'react';
import { DataTestId } from './data-test-id';
import { Icon } from './icon';
import { TypographyHeading, TypographyParagraph } from './typography';
import { cn } from './utils/cn';

const ResultContext = React.createContext<{
  variant?:
    | 'default'
    | 'success'
    | 'warning'
    | 'destructive'
    | null
    | undefined;
  size?: 'default' | 'sm' | 'lg' | undefined | null;
}>({ size: 'default' });

const ResultIcon: React.FC<React.ComponentProps<'span'>> = ({
  className,
  children,
  ...props
}) => {
  const { variant, size } = React.useContext(ResultContext);

  return (
    <DataTestId value="icon">
      <span
        className={cn(
          '--result-Icon',
          'mb-2',
          `[&_svg:not([class*='size-'])]:size-12`,
          variant === 'success' && `[&_svg:not([class*='text-'])]:text-success`,
          variant === 'warning' && `[&_svg:not([class*='text-'])]:text-warning`,
          variant === 'destructive' &&
            `[&_svg:not([class*='text-'])]:text-destructive`,
          size === 'default' && `[&_svg:not([class*='size-'])]:size-12`,
          size === 'sm' && `[&_svg:not([class*='size-'])]:size-8`,
          size === 'lg' && `[&_svg:not([class*='size-'])]:size-20`,
          className
        )}
        {...props}
      >
        <Icon>{children}</Icon>
      </span>
    </DataTestId>
  );
};

const ResultTitle: React.FC<React.ComponentProps<typeof TypographyHeading>> = ({
  className,
  ...props
}) => {
  const { variant, size } = React.useContext(ResultContext);

  return (
    <DataTestId value="title">
      <TypographyHeading
        className={cn(
          '--result-title',
          'text-lg',
          size === 'sm' && 'text-base',
          size === 'lg' && 'text-xl',
          variant === 'success' && `text-success`,
          variant === 'warning' && `text-warning`,
          variant === 'destructive' && `text-destructive`,
          className
        )}
        {...props}
      />
    </DataTestId>
  );
};

const ResultMessage: React.FC<
  React.ComponentProps<typeof TypographyParagraph>
> = ({ className, ...props }) => {
  const { size } = React.useContext(ResultContext);

  return (
    <DataTestId value="message">
      <TypographyParagraph
        className={cn(
          '--result-message',
          size === 'sm' && 'text-sm',
          className
        )}
        {...props}
      />
    </DataTestId>
  );
};

const ResultFooter: React.FC<React.ComponentProps<'div'>> = ({
  className,
  ...props
}) => {
  return (
    <DataTestId value="footer">
      <div className={cn('--result-footer', 'pt-3', className)} {...props} />
    </DataTestId>
  );
};

const Result: React.FC<
  React.ComponentProps<'div'> & {
    variant?: 'default' | 'success' | 'warning' | 'destructive';
    size?: 'default' | 'sm' | 'lg';
  }
> = ({ className, variant, size, ...props }) => {
  return (
    <ResultContext.Provider value={{ variant, size }}>
      <DataTestId value="result">
        <div
          className={cn(
            '--result',
            'flex flex-col items-center justify-center text-center',
            size === 'default' && 'gap-1',
            size === 'sm' && 'gap-0',
            size === 'lg' && 'gap-1.5',
            className
          )}
          {...props}
        />
      </DataTestId>
    </ResultContext.Provider>
  );
};

export { Result, ResultFooter, ResultIcon, ResultMessage, ResultTitle };
