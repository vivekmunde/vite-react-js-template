import type {
  TPutRoleRequestData,
  TPutRoleResponseData,
  TPutRoleResponseErrorCode,
} from '@/api-interfaces/[organizationId]/roles/[roleId]/interfaces';
import type { TGetRole } from '@/api-interfaces/[organizationId]/roles/interfaces';
import { useMutate } from '@/api/use-mutate';
import { Translation } from '@/components/translation';
import { Button } from '@/components/ui/button';
import { ButtonGroup } from '@/components/ui/button-group';
import { DataTestId } from '@/components/ui/data-test-id';
import {
  DrawerBody,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from '@/components/ui/drawer';
import { Flex } from '@/components/ui/flex';
import { Form, FormContent, FormError } from '@/components/ui/form';
import { useApiErrorHandler } from '@/hooks/use-api-error-handler';
import { useLoggedInOrganization } from '@/hooks/use-logged-in-organization';
import type { TPermission } from '@/types/rbac';
import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react';
import { useForm } from 'react-hook-form';
import z from 'zod';
import { useRoleFormSchema } from '../../hooks/use-roles-form-schema';
import { useRolesQuery } from '../../hooks/use-roles-query';
import { DescriptionField } from '../form-fields/description';
import { NameField } from '../form-fields/name';
import { PermissionsField } from '../form-fields/permissions';

const UpdateRoleForm: React.FC<{
  role: TGetRole;
  onClose?: () => void;
}> = ({ role, onClose }) => {
  const { data: organization } = useLoggedInOrganization();
  const formSchema = useRoleFormSchema();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: role.name,
      description: role.description ?? '',
      permissionKeys: role.permissionKeys ?? [],
    },
  });
  const [{ loading: mutating, status, error, validationErrors }, { put }] =
    useMutate<
      TPutRoleRequestData,
      TPutRoleResponseData,
      string,
      TPutRoleResponseErrorCode
    >();
  useApiErrorHandler(status);
  const { onRevalidate: onRevalidateUserRoles } = useRolesQuery();

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    put(`/${organization?.id}/roles/${role.id}`, {
      name: values.name,
      description: values.description,
      permissionKeys: (values.permissionKeys ?? []) as TPermission[],
    }).then(({ status }) => {
      if (status === 'success') {
        onRevalidateUserRoles();
        onClose?.();
      }
    });
  };

  return (
    <Form {...form} fieldErrors={validationErrors} formError={error?.message}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col flex-1 overflow-hidden"
      >
        <DrawerHeader className="border-b">
          <DrawerTitle>
            <Translation value="common/update" />
          </DrawerTitle>
          <DrawerDescription>{role.name}</DrawerDescription>
        </DrawerHeader>
        <DrawerBody>
          <FormContent>
            <NameField />
            <DescriptionField />
            <PermissionsField />
          </FormContent>
        </DrawerBody>
        <DrawerFooter className="border-t">
          <Flex direction={{ default: 'vertical' }} gap="normal">
            <ButtonGroup>
              <DataTestId value="create">
                <Button type="submit" variant="primary" loading={mutating}>
                  <Translation value="common/update" />
                </Button>
              </DataTestId>
              <DataTestId value="cancel">
                <Button type="button" variant="outline" onClick={onClose}>
                  <Translation value="common/cancel" />
                </Button>
              </DataTestId>
            </ButtonGroup>
            <FormError />
          </Flex>
        </DrawerFooter>
      </form>
    </Form>
  );
};

export { UpdateRoleForm };
