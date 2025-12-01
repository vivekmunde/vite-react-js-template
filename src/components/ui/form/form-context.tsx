import { createContext } from 'react';

const FormContext = createContext<{
  fieldErrors?: Record<string, string | undefined>;
  formError?: string | undefined;
}>({});

export { FormContext };
