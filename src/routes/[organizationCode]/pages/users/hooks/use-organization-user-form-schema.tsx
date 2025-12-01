import { useTranslation } from 'react-i18next';
import z from 'zod';

const useOrganizationUserFormSchema = () => {
  const { t: tValidation } = useTranslation('validation');

  const schema = z.object({
    email: z
      .string()
      .min(1, {
        message: tValidation('email.required'),
      })
      .refine(value => z.email().safeParse(value).success, {
        message: tValidation('email.invalid'),
      }),
    roleIds: z.array(z.string()).min(1, {
      message: tValidation('role.required'),
    }),
  });

  return schema;
};

export { useOrganizationUserFormSchema };
