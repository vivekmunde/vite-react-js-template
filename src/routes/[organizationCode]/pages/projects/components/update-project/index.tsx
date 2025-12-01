import type { TGetProject } from '@/api-interfaces/[organizationId]/projects/interfaces';
import { OrganizationRBAC } from '@/components/rbac/organization-rbac';
import { Button } from '@/components/ui/button';
import { DataTestId } from '@/components/ui/data-test-id';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { useSearchParams } from '@/hooks/use-search-params';
import { PencilIcon } from 'lucide-react';
import React from 'react';
import { UpdateProjectForm } from './form';

const UpdateProject: React.FC<{
  project: TGetProject;
}> = ({ project }) => {
  const [searchParams, setSearchParams] = useSearchParams<{
    updateProject?: string;
  }>({}, 'projects');

  const onOpen = () => {
    setSearchParams({ updateProject: project.id });
  };

  const onClose = () => {
    setSearchParams({ updateProject: undefined });
  };

  return (
    <OrganizationRBAC permissions={['MANAGE_PROJECT']}>
      <DataTestId value="update">
        <Dialog open={searchParams.updateProject === project.id}>
          <DialogTrigger asChild>
            <Button variant="ghost" onClick={onOpen}>
              <PencilIcon />
            </Button>
          </DialogTrigger>
          <DialogContent width="sm">
            <UpdateProjectForm project={project} onClose={onClose} />
          </DialogContent>
        </Dialog>
      </DataTestId>
    </OrganizationRBAC>
  );
};

export { UpdateProject };
