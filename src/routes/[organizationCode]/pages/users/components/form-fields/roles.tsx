import { Translation } from '@/components/translation';
import { Checkbox, CheckboxCase } from '@/components/ui/checkbox';
import {
  FormField,
  FormFieldErrors,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Label } from '@/components/ui/label';
import { useMySystemRoles } from '@/hooks/use-my-system-roles';
import React from 'react';
import { useFormContext } from 'react-hook-form';

const RolesField: React.FC = () => {
  const { data: roles } = useMySystemRoles();
  const { control } = useFormContext();

  return (
    <FormField
      control={control}
      name="roleIds"
      render={({ field }) => (
        <FormItem>
          <FormLabel>
            <Translation value="common/role" options={{ count: 2 }} />
          </FormLabel>
          <div className="border rounded-md w-full">
            {roles?.items?.map(role => (
              <React.Fragment key={role.id}>
                <div className="border-b border-dashed last:border-b-0 p-3">
                  <CheckboxCase>
                    <Checkbox
                      id={role.id}
                      checked={field.value?.includes(role.id)}
                      onClick={() => {
                        if (field.value.includes(role.id)) {
                          field.onChange(
                            field.value.filter((p: string) => p !== role.id)
                          );
                        } else {
                          field.onChange([...field.value, role.id]);
                        }
                      }}
                      className="mt-1"
                    />
                    <Label className="w-full" htmlFor={role.id}>
                      {role.name}
                    </Label>
                  </CheckboxCase>
                </div>
              </React.Fragment>
            ))}
          </div>
          <FormMessage />
          <FormFieldErrors />
        </FormItem>
      )}
    />
  );
};

export { RolesField };
