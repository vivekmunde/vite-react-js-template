import * as React from 'react';
import { Flex } from '../flex';
import { cn } from '../utils/cn';

const FormContent: React.FC<React.ComponentProps<typeof Flex>> = ({
  className,
  ...props
}) => {
  return (
    <Flex
      className={cn('--form-content', className)}
      direction={{ default: 'vertical' }}
      gap="normal"
      {...props}
    />
  );
};

export { FormContent };
