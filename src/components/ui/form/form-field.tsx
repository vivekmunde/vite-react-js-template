import {
  Controller,
  type ControllerProps,
  type FieldPath,
  type FieldValues,
} from 'react-hook-form';
import { DataTestId } from '../data-test-id';
import { FormFieldContext } from './form-field-context';

const FormField = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({
  ...props
}: ControllerProps<TFieldValues, TName>) => {
  return (
    <FormFieldContext.Provider value={{ name: props.name }}>
      <DataTestId value={props.name}>
        <Controller {...props} />
      </DataTestId>
    </FormFieldContext.Provider>
  );
};

export { FormField };
