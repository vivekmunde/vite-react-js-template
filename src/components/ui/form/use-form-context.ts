import { useContext } from 'react';
import { FormContext } from './form-context';

const useFieldError = (name: string) => {
  const { fieldErrors } = useContext(FormContext);
  return fieldErrors?.[name];
};

const useFormError = () => {
  const { formError } = useContext(FormContext);
  return formError;
};

export { useFieldError, useFormError };
