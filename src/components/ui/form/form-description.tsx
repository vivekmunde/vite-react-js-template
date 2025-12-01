import * as React from 'react';
import { DataTestId } from '../data-test-id';
import { TypographyParagraph } from '../typography';
import { cn } from '../utils/cn';
import { useFormField } from './use-form-field';

const FormDescription: React.FC<
  React.ComponentProps<typeof TypographyParagraph>
> = ({ className, ...props }) => {
  const { formDescriptionId } = useFormField();

  return (
    <DataTestId value="description">
      <TypographyParagraph
        id={formDescriptionId}
        data-slot="form-description"
        className={cn(
          '--form-description',
          'text-muted-foreground',
          'text-sm',
          className
        )}
        {...props}
      />
    </DataTestId>
  );
};

export { FormDescription };
