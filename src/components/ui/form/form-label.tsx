import { Label } from '@/components/ui/label';
import * as React from 'react';
import { cn } from '../utils/cn';
import { useFieldError } from './use-form-context';
import { useFormField } from './use-form-field';
import { useFormFieldName } from './use-form-field-context';

const FormLabel: React.FC<React.ComponentProps<typeof Label>> = ({
  className,
  ...props
}) => {
  const { error, formItemId } = useFormField();
  const name = useFormFieldName();
  const fieldError = useFieldError(name);

  return (
    <Label
      data-slot="form-label"
      data-error={!!error}
      htmlFor={formItemId}
      className={cn(
        '--form-label',
        'font-medium',
        'data-[error=true]:text-destructive',
        (error || !!fieldError) && 'text-destructive',
        className
      )}
      {...props}
    />
  );
};

export { FormLabel };
