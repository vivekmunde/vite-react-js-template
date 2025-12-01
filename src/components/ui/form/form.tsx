import {
  type FieldValues,
  FormProvider,
  type FormProviderProps,
} from 'react-hook-form';
import { DataTestId } from '../data-test-id';
import { FormContext } from './form-context';

const Form = <
  TFieldValues extends FieldValues,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  TContext = any,
  TTransformedValues extends FieldValues | undefined = undefined,
>({
  fieldErrors,
  formError,
  ...props
}: FormProviderProps<TFieldValues, TContext, TTransformedValues> & {
  fieldErrors?: Record<string, string | undefined>;
  formError?: string | undefined;
}) => {
  return (
    <DataTestId value="form">
      <FormContext.Provider
        value={{
          fieldErrors,
          formError,
        }}
      >
        <FormProvider {...props} />
      </FormContext.Provider>
    </DataTestId>
  );
};

export { Form };
