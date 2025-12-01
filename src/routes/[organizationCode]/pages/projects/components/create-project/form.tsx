import type {
  TPostProjectRequestData,
  TPostProjectResponseData,
  TPostProjectResponseErrorCode,
} from '@/api-interfaces/[organizationId]/projects/interfaces';
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
import { useLoggedInOrganization } from '@/hooks/use-logged-in-organization';
import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react';
import { useForm } from 'react-hook-form';
import z from 'zod';
import { useCreateProjectFormSchema } from '../../hooks/use-project-form-schema';
import { useProjectsQuery } from '../../hooks/use-projects-query';
import { DescriptionField } from '../form-fields/description';
import { DocumentNumberPrefixField } from '../form-fields/document-number-prefix';
import { NameField } from '../form-fields/name';

const CreateProjectForm: React.FC<{
  onClose?: () => void;
}> = ({ onClose }) => {
  const { data: organization } = useLoggedInOrganization();
  const formSchema = useCreateProjectFormSchema();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      description: '',
      documentNumberPrefix: '',
    },
  });
  const [{ loading: mutating, status, error, validationErrors }, { post }] =
    useMutate<
      TPostProjectRequestData,
      TPostProjectResponseData,
      string,
      TPostProjectResponseErrorCode
    >();
  useApiErrorHandler(status);
  const { onRevalidate: onRevalidateUserProjects } = useProjectsQuery();

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    post(`/${organization?.id}/projects`, {
      name: values.name,
      description: values.description,
      documentNumberPrefix: values.documentNumberPrefix,
    }).then(({ status }) => {
      if (status === 'success') {
        onRevalidateUserProjects();
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
            <DocumentNumberPrefixField />
            <DescriptionField />
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

export { CreateProjectForm };
