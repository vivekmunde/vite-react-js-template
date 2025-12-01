import type {
  TPutUserRequestData,
  TPutUserResponseData,
  TPutUserResponseErrorCode,
} from '@/api-interfaces/system/users/[userId]/interfaces';
import type { TGetUser } from '@/api-interfaces/system/users/interfaces';
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
import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react';
import { useForm } from 'react-hook-form';
import z from 'zod';
import { useOrganizationUserFormSchema } from '../../hooks/use-organization-user-form-schema';
import { useOrganizationUsersQuery } from '../../hooks/use-organization-users-query';
import { EmailField } from '../form-fields/email';
import { RolesField } from '../form-fields/roles';

const UpdateUserForm: React.FC<{
  user: TGetUser;
  onClose?: () => void;
}> = ({ user, onClose }) => {
  const { data: organization } = useLoggedInOrganization();
  const formSchema = useOrganizationUserFormSchema();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: user.email,
      roleIds: user.roles?.map(role => role.id) ?? [],
    },
  });
  const [{ loading: mutating, status, error, validationErrors }, { put }] =
    useMutate<
      TPutUserRequestData,
      TPutUserResponseData,
      string,
      TPutUserResponseErrorCode
    >();
  useApiErrorHandler(status);
  const { onRevalidate: onRevalidateUserUsers } = useOrganizationUsersQuery();

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    put(`/${organization?.id}/users/${user.id}`, {
      email: values.email,
      roleIds: values.roleIds,
    }).then(({ status }) => {
      if (status === 'success') {
        onRevalidateUserUsers();
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
          <DrawerDescription>{user.name ?? user.email}</DrawerDescription>
        </DrawerHeader>
        <DrawerBody>
          <FormContent>
            <EmailField />
            <RolesField />
          </FormContent>
        </DrawerBody>
        <DrawerFooter className="border-t">
          <Flex direction={{ default: 'vertical' }} gap="normal">
            <ButtonGroup>
              <DataTestId value="update">
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

export { UpdateUserForm };
