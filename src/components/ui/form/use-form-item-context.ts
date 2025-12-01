import { useContext } from 'react';
import { FormItemContext } from './form-item-context';

const useFormItemId = () => {
  const { id } = useContext(FormItemContext);
  return id;
};

export { useFormItemId };
