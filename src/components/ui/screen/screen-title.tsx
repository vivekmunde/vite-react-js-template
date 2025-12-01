import React from 'react';
import { DataTestId } from '../data-test-id';
import type { TTypographyHeadingProps } from '../typography';
import { TypographyHeading } from '../typography';
import { cn } from '../utils/cn';

const ScreenTitle: React.FC<TTypographyHeadingProps> = ({
  className,
  children,
  as = 'h1',
  ...props
}) => {
  return (
    <DataTestId value="title">
      <TypographyHeading
        as={as}
        {...props}
        className={cn('--screen-title', className)}
      >
        {children}
      </TypographyHeading>
    </DataTestId>
  );
};

export { ScreenTitle };
