import * as React from 'react';
import { DataTestId } from '../data-test-id';
import { TypographyParagraph } from '../typography';
import { cn } from '../utils/cn';
import { useFormField } from './use-form-field';

const FormMessage: React.FC<
  React.ComponentProps<typeof TypographyParagraph>
> = ({ className, children, ...props }) => {
  const { error, formMessageId } = useFormField();
  const body = error ? String(error?.message) : children;

  if (!body) {
    return null;
  }

  return (
    <DataTestId value="message">
      <TypographyParagraph
        id={formMessageId}
        data-slot="form-message"
        className={cn(
          '--form-message',
          'text-destructive',
          'text-sm',
          className
        )}
        {...props}
      >
        {body}
      </TypographyParagraph>
    </DataTestId>
  );
};

export { FormMessage };
