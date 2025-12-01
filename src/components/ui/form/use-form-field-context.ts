import { useContext } from 'react';
import { FormFieldContext } from './form-field-context';

const useFormFieldName = () => {
  const { name } = useContext(FormFieldContext);
  return name;
};

export { useFormFieldName };
