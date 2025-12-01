import { Translation } from '@/components/translation';
import {
  FormControl,
  FormField,
  FormFieldErrors,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Textarea } from '@/components/ui/textarea';
import React from 'react';
import { useFormContext } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

const DescriptionField: React.FC = () => {
  const { t: tCommon } = useTranslation('common');
  const { control } = useFormContext();

  return (
    <FormField
      control={control}
      name="description"
      render={({ field }) => (
        <FormItem>
          <FormLabel>
            <Translation value="common/description" />
          </FormLabel>
          <FormControl>
            <Textarea
              placeholder={tCommon('description')}
              {...field}
              autoResize
            />
          </FormControl>
          <FormMessage />
          <FormFieldErrors />
        </FormItem>
      )}
    />
  );
};

export { DescriptionField };
