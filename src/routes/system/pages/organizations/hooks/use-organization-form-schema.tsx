import { useTranslation } from 'react-i18next';
import z from 'zod';

const useOrganizationFormSchema = () => {
  const { t: tValidation } = useTranslation('validation');

  const schema = z.object({
    name: z.string().min(1, {
      message: tValidation('name.required'),
    }),
    code: z.string().optional(),
    email: z
      .string()
      .optional()
      .refine(value => value === '' || z.email().safeParse(value).success, {
        message: tValidation('email.invalid'),
      }),
    permissionKeys: z.array(z.string()).optional(),
    themeLightColorPrimary: z.string().optional(),
    themeLightColorPrimaryForeground: z.string().optional(),
    themeLightColorLink: z.string().optional(),
    themeDarkColorPrimary: z.string().optional(),
    themeDarkColorPrimaryForeground: z.string().optional(),
    themeDarkColorLink: z.string().optional(),
  });

  return schema;
};

export { useOrganizationFormSchema };
