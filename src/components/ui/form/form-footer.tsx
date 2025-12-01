import * as React from 'react';
import { cn } from '../utils/cn';

const FormFooter: React.FC<React.ComponentProps<'div'>> = ({
  className,
  ...props
}) => {
  return <div className={cn('--form-footer', 'pt-4', className)} {...props} />;
};

export { FormFooter };
