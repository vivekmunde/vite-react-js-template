import type {
  TPostRoleRequestData,
  TPostRoleResponseData,
  TPostRoleResponseErrorCode,
} from '@/api-interfaces/system/roles/interfaces';
import { useMutate } from '@/api/use-mutate';
import { Translation } from '@/components/translation';
import { Button } from '@/components/ui/button';
import { ButtonGroup } from '@/components/ui/button-group';
import { DataTestId } from '@/components/ui/data-test-id';
import {
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from '@/components/ui/drawer';
import { Flex } from '@/components/ui/flex';
import { Form, FormContent, FormError } from '@/components/ui/form';
import { useApiErrorHandler } from '@/hooks/use-api-error-handler';
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

const CreateRoleForm: React.FC<{
  onClose?: () => void;
}> = ({ onClose }) => {
  const formSchema = useRoleFormSchema();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      description: '',
      permissionKeys: [],
    },
  });
  const [{ loading: mutating, status, error, validationErrors }, { post }] =
    useMutate<
      TPostRoleRequestData,
      TPostRoleResponseData,
      string,
      TPostRoleResponseErrorCode
    >();
  useApiErrorHandler(status);
  const { onRevalidate: onRevalidateUserRoles } = useRolesQuery();

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    post('/system/roles', {
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
            <Translation value="common/create" />
          </DrawerTitle>
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
                  <Translation value="common/create" />
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

export { CreateRoleForm };
