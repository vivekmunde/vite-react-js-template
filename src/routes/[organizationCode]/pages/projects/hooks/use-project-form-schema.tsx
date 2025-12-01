import { useTranslation } from 'react-i18next';
import z from 'zod';

const useCreateProjectFormSchema = () => {
  const { t: tValidation } = useTranslation('validation');

  const schema = z.object({
    name: z.string().min(1, {
      message: tValidation('name.required'),
    }),
    description: z.string().optional(),
    documentNumberPrefix: z.string().min(1, {
      message: tValidation('documentNumberPrefix.required'),
    }),
  });

  return schema;
};

const useUpdateProjectFormSchema = () => {
  const { t: tValidation } = useTranslation('validation');

  const schema = z.object({
    name: z.string().min(1, {
      message: tValidation('name.required'),
    }),
    description: z.string().optional(),
  });

  return schema;
};
export { useCreateProjectFormSchema, useUpdateProjectFormSchema };
