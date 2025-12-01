import * as React from 'react';
import { cn } from '../utils/cn';
import { FormItemContext } from './form-item-context';

const FormItem: React.FC<React.ComponentProps<'div'>> = ({
  className,
  ...props
}) => {
  const id = React.useId();

  return (
    <FormItemContext.Provider value={{ id }}>
      <div
        data-slot="form-item"
        className={cn(
          '--form-item',
          'flex flex-col items-start gap-1.5',
          className
        )}
        {...props}
      />
    </FormItemContext.Provider>
  );
};

export { FormItem };
