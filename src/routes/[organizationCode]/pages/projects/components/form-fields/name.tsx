import { Translation } from '@/components/translation';
import {
  FormControl,
  FormField,
  FormFieldErrors,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import React from 'react';
import { useFormContext } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

const NameField: React.FC = () => {
  const { t: tCommon } = useTranslation('common');
  const { control } = useFormContext();

  return (
    <FormField
      control={control}
      name="name"
      render={({ field }) => (
        <FormItem>
          <FormLabel>
            <Translation value="common/name" />
          </FormLabel>
          <FormControl>
            <Input placeholder={tCommon('name')} {...field} />
          </FormControl>
          <FormMessage />
          <FormFieldErrors />
        </FormItem>
      )}
    />
  );
};

export { NameField };
