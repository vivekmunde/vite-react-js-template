import * as React from 'react';
import { DataTestId } from '../data-test-id';
import { If } from '../if';
import { cn } from '../utils/cn';
import { FormMessage } from './form-message';
import { useFieldError } from './use-form-context';
import { useFormFieldName } from './use-form-field-context';

const FormFieldErrors: React.FC<React.ComponentProps<typeof FormMessage>> = ({
  className,
  ...props
}) => {
  const name = useFormFieldName();
  const fieldError = useFieldError(name);

  return (
    <If condition={!!fieldError}>
      <If.True>
        <DataTestId value="error">
          <FormMessage
            className={cn(
              '--field-errors-form-message flex flex-col',
              'text-sm',
              className
            )}
            {...props}
          >
            <span>{fieldError}</span>
          </FormMessage>
        </DataTestId>
      </If.True>
    </If>
  );
};

export { FormFieldErrors };
