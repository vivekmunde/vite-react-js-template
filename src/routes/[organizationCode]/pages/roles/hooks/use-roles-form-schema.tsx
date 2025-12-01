import { useTranslation } from 'react-i18next';
import z from 'zod';

const useRoleFormSchema = () => {
  const { t: tValidation } = useTranslation('validation');

  const schema = z.object({
    name: z.string().min(1, {
      message: tValidation('name.required'),
    }),
    description: z.string().optional(),
    permissionKeys: z.array(z.string()).optional(),
  });

  return schema;
};

export { useRoleFormSchema };
