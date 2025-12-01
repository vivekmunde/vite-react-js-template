import { useFormContext } from 'react-hook-form';
import { useFormFieldName } from './use-form-field-context';
import { useFormItemId } from './use-form-item-context';

const useFormField = () => {
  const name = useFormFieldName();
  const id = useFormItemId();
  const { getFieldState, formState } = useFormContext();

  const fieldState = getFieldState(name, formState);

  if (!name) {
    throw new Error('useFormField should be used within <FormField>');
  }

  return {
    id,
    name,
    formItemId: `${id}-form-item`,
    formDescriptionId: `${id}-form-item-description`,
    formMessageId: `${id}-form-item-message`,
    ...fieldState,
  };
};

export { useFormField };
