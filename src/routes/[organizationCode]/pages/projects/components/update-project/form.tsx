import type {
  TPutProjectRequestData,
  TPutProjectResponseData,
  TPutProjectResponseErrorCode,
} from '@/api-interfaces/[organizationId]/projects/[projectId]/interfaces';
import type { TGetProject } from '@/api-interfaces/[organizationId]/projects/interfaces';
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
import { useUpdateProjectFormSchema } from '../../hooks/use-project-form-schema';
import { useProjectsQuery } from '../../hooks/use-projects-query';
import { DescriptionField } from '../form-fields/description';
import { NameField } from '../form-fields/name';

const UpdateProjectForm: React.FC<{
  project: TGetProject;
  onClose?: () => void;
}> = ({ project, onClose }) => {
  const { data: organization } = useLoggedInOrganization();
  const formSchema = useUpdateProjectFormSchema();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: project.name,
      description: project.description ?? '',
    },
  });
  const [{ loading: mutating, status, error, validationErrors }, { put }] =
    useMutate<
      TPutProjectRequestData,
      TPutProjectResponseData,
      string,
      TPutProjectResponseErrorCode
    >();
  useApiErrorHandler(status);
  const { onRevalidate: onRevalidateUserProjects } = useProjectsQuery();

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    put(`/${organization?.id}/projects/${project.id}`, {
      name: values.name,
      description: values.description,
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
            <Translation value="common/update" />
          </DrawerTitle>
          <DrawerDescription>{project.name}</DrawerDescription>
        </DrawerHeader>
        <DrawerBody>
          <FormContent>
            <NameField />
            <DescriptionField />
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

export { UpdateProjectForm };
