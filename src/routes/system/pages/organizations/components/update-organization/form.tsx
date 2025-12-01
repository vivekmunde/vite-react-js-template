import type {
  TGetOrganization,
  TPostOrganizationRequestData,
  TPostOrganizationResponseData,
  TPostOrganizationResponseErrorCode,
} from '@/api-interfaces/system/organizations/interfaces';
import { useMutate } from '@/api/use-mutate';
import { Translation } from '@/components/translation';
import { Button } from '@/components/ui/button';
import { ButtonGroup } from '@/components/ui/button-group';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
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
import { Grid, GridItem } from '@/components/ui/grid';
import { TypographyHeading } from '@/components/ui/typography';
import { useApiErrorHandler } from '@/hooks/use-api-error-handler';
import type { TPermission } from '@/types/rbac';
import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react';
import { useForm } from 'react-hook-form';
import z from 'zod';
import { useOrganizationFormSchema } from '../../hooks/use-organization-form-schema';
import { useOrganizationsQuery } from '../../hooks/use-organizations-query';
import { CodeField } from '../form-fields/code';
import { ColorField } from '../form-fields/color';
import { EmailField } from '../form-fields/email';
import { NameField } from '../form-fields/name';
import { PermissionsField } from '../form-fields/permissions';

const UpdateOrganizationForm: React.FC<{
  organization: TGetOrganization;
  onClose?: () => void;
}> = ({ organization, onClose }) => {
  const formSchema = useOrganizationFormSchema();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: organization.name,
      code: organization.code,
      email: organization.email,
      permissionKeys: organization.permissionKeys ?? [],
      themeLightColorPrimary: organization.theme?.light?.colors?.primary ?? '',
      themeLightColorPrimaryForeground:
        organization.theme?.light?.colors?.primaryForeground ?? '',
      themeLightColorLink: organization.theme?.light?.colors?.link ?? '',
      themeDarkColorPrimary: organization.theme?.dark?.colors?.primary ?? '',
      themeDarkColorPrimaryForeground:
        organization.theme?.dark?.colors?.primaryForeground ?? '',
      themeDarkColorLink: organization.theme?.dark?.colors?.link ?? '',
    },
  });
  const [{ loading: mutating, status, error, validationErrors }, { put }] =
    useMutate<
      TPostOrganizationRequestData,
      TPostOrganizationResponseData,
      string,
      TPostOrganizationResponseErrorCode
    >();
  useApiErrorHandler(status);
  const { onRevalidate: onRevalidateUserOrganizations } =
    useOrganizationsQuery();

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    put(`/system/organizations/${organization.id}`, {
      name: values.name,
      code: values.code,
      email: values.email,
      permissionKeys: (values.permissionKeys ?? []) as TPermission[],
      themeLightColorPrimary: values.themeLightColorPrimary,
      themeLightColorPrimaryForeground: values.themeLightColorPrimaryForeground,
      themeLightColorLink: values.themeLightColorLink,
      themeDarkColorPrimary: values.themeDarkColorPrimary,
      themeDarkColorPrimaryForeground: values.themeDarkColorPrimaryForeground,
      themeDarkColorLink: values.themeDarkColorLink,
    }).then(({ status }) => {
      if (status === 'success') {
        onRevalidateUserOrganizations();
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
          <DrawerDescription>{organization.name}</DrawerDescription>
        </DrawerHeader>
        <DrawerBody>
          <FormContent>
            <NameField />
            <CodeField />
            <EmailField />
            <PermissionsField />

            <Card>
              <CardHeader className="border-b border-dashed">
                <CardTitle as="h4">
                  <Translation value="common/theme" />
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Grid columns={{ default: 2 }} gap="normal">
                  <GridItem>
                    <TypographyHeading as="h5" className="mb-3">
                      <Translation value="common/light" />
                    </TypographyHeading>
                    <Flex direction={{ default: 'vertical' }} gap="normal">
                      <ColorField
                        name="themeLightColorPrimary"
                        labelI18nKey="organizations/primaryColor"
                      />
                      <ColorField
                        name="themeLightColorPrimaryForeground"
                        labelI18nKey="organizations/primaryColorForeground"
                      />
                      <ColorField
                        name="themeLightColorLink"
                        labelI18nKey="organizations/linkColor"
                      />
                    </Flex>
                  </GridItem>

                  <GridItem>
                    <TypographyHeading as="h5" className="mb-3">
                      <Translation value="common/dark" />
                    </TypographyHeading>
                    <Flex direction={{ default: 'vertical' }} gap="normal">
                      <ColorField
                        name="themeDarkColorPrimary"
                        labelI18nKey="organizations/primaryColor"
                      />
                      <ColorField
                        name="themeDarkColorPrimaryForeground"
                        labelI18nKey="organizations/primaryColorForeground"
                      />
                      <ColorField
                        name="themeDarkColorLink"
                        labelI18nKey="organizations/linkColor"
                      />
                    </Flex>
                  </GridItem>
                </Grid>
              </CardContent>
            </Card>
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

export { UpdateOrganizationForm };
