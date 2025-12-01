import type {
  TDeleteProjectRequestData,
  TDeleteProjectResponseData,
  TDeleteProjectResponseErrorCode,
} from '@/api-interfaces/[organizationId]/projects/[projectId]/interfaces';
import type { TGetProject } from '@/api-interfaces/[organizationId]/projects/interfaces';
import { useMutate } from '@/api/use-mutate';
import { OrganizationRBAC } from '@/components/rbac/organization-rbac';
import { Translation } from '@/components/translation';
import { Alert, AlertTitle } from '@/components/ui/alert';
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { Button } from '@/components/ui/button';
import { ButtonGroup } from '@/components/ui/button-group';
import { DataTestId } from '@/components/ui/data-test-id';
import { Flex } from '@/components/ui/flex';
import { Icon } from '@/components/ui/icon';
import { TypographyParagraph } from '@/components/ui/typography';
import { useApiErrorHandler } from '@/hooks/use-api-error-handler';
import { useLoggedInOrganization } from '@/hooks/use-logged-in-organization';
import { useSearchParams } from '@/hooks/use-search-params';
import { AlertCircleIcon, TrashIcon } from 'lucide-react';
import React from 'react';
import { useProjectsQuery } from '../hooks/use-projects-query';

const DeleteProjectForm: React.FC<{
  project: TGetProject;
  onClose: () => void;
}> = ({ project, onClose }) => {
  const { data: organization } = useLoggedInOrganization();
  const [{ loading: mutating, status, error }, mutator] = useMutate<
    TDeleteProjectRequestData,
    TDeleteProjectResponseData,
    string,
    TDeleteProjectResponseErrorCode
  >();
  useApiErrorHandler(status);
  const { onRevalidate: onRevalidateUserProjects } = useProjectsQuery();

  const onDelete = () => {
    mutator
      .delete(`/${organization?.id}/projects/${project.id}`, undefined)
      .then(({ status }) => {
        if (status === 'success') {
          onRevalidateUserProjects();
          onClose();
        }
      });
  };

  return (
    <React.Fragment>
      <AlertDialogHeader>
        <AlertDialogTitle>
          <Translation
            value="delete/deleteConfirmMessage"
            options={{ name: project.name }}
          />
        </AlertDialogTitle>
      </AlertDialogHeader>
      <AlertDialogBody>
        <TypographyParagraph>
          <Translation
            value="delete/deleteConfirmDescription"
            options={{ name: project.name }}
          />
        </TypographyParagraph>
      </AlertDialogBody>
      <AlertDialogFooter>
        <Flex direction={{ default: 'vertical' }} gap="normal">
          <ButtonGroup>
            <DataTestId value="delete">
              <Button
                variant="destructive"
                onClick={onDelete}
                loading={mutating}
              >
                <Translation value="common/delete" />
              </Button>
            </DataTestId>
            <DataTestId value="cancel">
              <Button variant="outline" onClick={onClose}>
                <Translation value="common/cancel" />
              </Button>
            </DataTestId>
          </ButtonGroup>
          {error?.message && (
            <Alert variant="destructive">
              <Icon>
                <AlertCircleIcon />
              </Icon>
              <AlertTitle className="--form-errors-alert-title">
                {error?.message}
              </AlertTitle>
            </Alert>
          )}
        </Flex>
      </AlertDialogFooter>
    </React.Fragment>
  );
};

const DeleteProject: React.FC<{
  project: TGetProject;
}> = ({ project }) => {
  const [searchParams, setSearchParams] = useSearchParams<{
    deleteProject?: string;
  }>({}, 'projects');

  const onOpen = () => {
    setSearchParams({ deleteProject: project.id });
  };

  const onClose = () => {
    setSearchParams({ deleteProject: undefined });
  };

  return (
    <OrganizationRBAC permissions={['MANAGE_PROJECT']}>
      <DataTestId value="delete">
        <AlertDialog open={searchParams.deleteProject === project.id}>
          <AlertDialogTrigger asChild>
            <Button variant="ghost" onClick={onOpen}>
              <TrashIcon />
            </Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <DeleteProjectForm project={project} onClose={onClose} />
          </AlertDialogContent>
        </AlertDialog>
      </DataTestId>
    </OrganizationRBAC>
  );
};

export { DeleteProject };
