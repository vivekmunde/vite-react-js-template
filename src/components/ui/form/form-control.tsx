import { Slot } from '@radix-ui/react-slot';
import * as React from 'react';
import { useFormField } from './use-form-field';

const FormControl: React.FC<React.ComponentProps<typeof Slot>> = ({
  ...props
}) => {
  const { error, formItemId, formDescriptionId, formMessageId } =
    useFormField();

  return (
    <Slot
      data-slot="form-control"
      id={formItemId}
      aria-describedby={
        !error
          ? `${formDescriptionId}`
          : `${formDescriptionId} ${formMessageId}`
      }
      aria-invalid={!!error}
      {...props}
    />
  );
};

export { FormControl };
