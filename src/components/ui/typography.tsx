import React from 'react';
import { DataTestId } from './data-test-id';
import { Skeleton } from './skeleton';
import { useShowSkeleton } from './skeleton/hooks';
import { cn } from './utils/cn';

export type TTypographySpanProps = React.HTMLAttributes<HTMLSpanElement>;

const TypographySpan: React.FC<TTypographySpanProps> = ({
  children,
  className,
  ...props
}) => {
  const showSkeleton = useShowSkeleton();

  const _className = cn('--text', className);

  return (
    <DataTestId value="text">
      {showSkeleton ? (
        <Skeleton as="span" className={_className}>
          {children}
        </Skeleton>
      ) : (
        <span className={_className} {...props}>
          {children}
        </span>
      )}
    </DataTestId>
  );
};

export type TTypographyDivProps = React.HTMLAttributes<HTMLDivElement>;

const TypographyDiv: React.FC<TTypographyDivProps> = ({
  children,
  className,
  ...props
}) => {
  const showSkeleton = useShowSkeleton();

  const _className = cn('--text', className);

  return (
    <DataTestId value="text">
      {showSkeleton ? (
        <Skeleton className={_className}>{children}</Skeleton>
      ) : (
        <div className={_className} {...props}>
          {children}
        </div>
      )}
    </DataTestId>
  );
};

export type TTypographyParagraphProps =
  React.HTMLAttributes<HTMLParagraphElement>;

const TypographyParagraph: React.FC<TTypographyParagraphProps> = ({
  children,
  className,
  ...props
}) => {
  const showSkeleton = useShowSkeleton();

  const _className = cn('--paragraph', className);

  return (
    <DataTestId value="paragraph">
      {showSkeleton ? (
        <Skeleton className={_className}>{children}</Skeleton>
      ) : (
        <p className={_className} {...props}>
          {children}
        </p>
      )}
    </DataTestId>
  );
};

export type TTypographyHeadingProps =
  React.HTMLAttributes<HTMLHeadingElement> & {
    as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5';
  };

const TypographyH1: React.FC<TTypographyHeadingProps> = ({
  className,
  children,
  ...props
}) => {
  const showSkeleton = useShowSkeleton();

  const _className = cn('--h1', 'text-3xl font-bold', className);

  return (
    <DataTestId value="h1">
      {showSkeleton ? (
        <Skeleton className={_className}>{children}</Skeleton>
      ) : (
        <h1 className={_className} {...props}>
          {children}
        </h1>
      )}
    </DataTestId>
  );
};

const TypographyH2: React.FC<TTypographyHeadingProps> = ({
  className,
  children,
  ...props
}) => {
  const showSkeleton = useShowSkeleton();

  const _className = cn('--h2', 'text-2xl font-bold', className);

  return (
    <DataTestId value="h2">
      {showSkeleton ? (
        <Skeleton className={_className}>{children}</Skeleton>
      ) : (
        <h2 className={_className} {...props}>
          {children}
        </h2>
      )}
    </DataTestId>
  );
};

const TypographyH3: React.FC<TTypographyHeadingProps> = ({
  className,
  children,
  ...props
}) => {
  const showSkeleton = useShowSkeleton();

  const _className = cn('--h3', 'text-xl font-bold', className);

  return (
    <DataTestId value="h3">
      {showSkeleton ? (
        <Skeleton className={_className}>{children}</Skeleton>
      ) : (
        <h3 className={_className} {...props}>
          {children}
        </h3>
      )}
    </DataTestId>
  );
};

const TypographyH4: React.FC<TTypographyHeadingProps> = ({
  className,
  children,
  ...props
}) => {
  const showSkeleton = useShowSkeleton();

  const _className = cn('--h4', 'text-lg font-bold', className);

  return (
    <DataTestId value="h4">
      {showSkeleton ? (
        <Skeleton className={_className}>{children}</Skeleton>
      ) : (
        <h4 className={_className} {...props}>
          {children}
        </h4>
      )}
    </DataTestId>
  );
};

const TypographyH5: React.FC<TTypographyHeadingProps> = ({
  className,
  children,
  ...props
}) => {
  const showSkeleton = useShowSkeleton();
  const _className = cn('--h5', 'text-base font-bold', className);

  return (
    <DataTestId value="h5">
      {showSkeleton ? (
        <Skeleton className={_className}>{children}</Skeleton>
      ) : (
        <h5 className={_className} {...props}>
          {children}
        </h5>
      )}
    </DataTestId>
  );
};

const TypographyHeading: React.FC<TTypographyHeadingProps> = ({
  as = 'h1',
  className,
  ...props
}) => {
  const Component = {
    h1: TypographyH1,
    h2: TypographyH2,
    h3: TypographyH3,
    h4: TypographyH4,
    h5: TypographyH5,
  }[as];

  return (
    <DataTestId value="heading">
      <Component className={cn('leading-normal', className)} {...props} />
    </DataTestId>
  );
};

export {
  TypographyDiv,
  TypographyHeading,
  TypographyParagraph,
  TypographySpan,
};
