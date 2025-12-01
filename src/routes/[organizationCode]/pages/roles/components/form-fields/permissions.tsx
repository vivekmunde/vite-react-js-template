import { Translation } from '@/components/translation';
import { Checkbox, CheckboxCase } from '@/components/ui/checkbox';
import { Flex } from '@/components/ui/flex';
import {
  FormField,
  FormFieldErrors,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Label } from '@/components/ui/label';
import { useMyOrganizationPermissions } from '@/hooks/use-my-organization-permissions';
import { sortPermissions } from '@/utils/sort-permissions';
import React from 'react';
import { useFormContext } from 'react-hook-form';

const PermissionsField: React.FC = () => {
  const { data: organizationPermissions } = useMyOrganizationPermissions();
  const permissions = sortPermissions(
    organizationPermissions?.items ?? [
      'READ_ORGANIZATION',
      'READ_ROLE',
      'READ_USER',
    ]
  );
  const { control } = useFormContext();

  return (
    <FormField
      control={control}
      name="permissionKeys"
      render={({ field }) => (
        <FormItem>
          <FormLabel>
            <Translation value="common/permission" options={{ count: 2 }} />
          </FormLabel>
          <div className="border rounded-md">
            {permissions.map(permission => (
              <React.Fragment key={permission}>
                <Flex
                  direction={{ default: 'vertical' }}
                  gap="none"
                  className="border-b border-dashed last:border-b-0 p-3"
                >
                  <CheckboxCase>
                    <Checkbox
                      id={permission}
                      checked={field.value?.includes(permission)}
                      onClick={() => {
                        if (field.value.includes(permission)) {
                          field.onChange(
                            field.value.filter((p: string) => p !== permission)
                          );
                        } else {
                          field.onChange([...field.value, permission]);
                        }
                      }}
                      className="mt-1"
                    />
                    <Label htmlFor={permission}>
                      <Translation value={`permission/${permission}.title`} />
                    </Label>
                  </CheckboxCase>
                  <Label
                    htmlFor={permission}
                    className="pl-8 font-normal text-muted-foreground"
                  >
                    <Translation
                      value={`permission/${permission}.description`}
                    />
                  </Label>
                </Flex>
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

export { PermissionsField };
