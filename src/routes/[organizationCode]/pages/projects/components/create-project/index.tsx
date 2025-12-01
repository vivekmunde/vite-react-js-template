import { OrganizationRBAC } from '@/components/rbac/organization-rbac';
import { Translation } from '@/components/translation';
import { Button } from '@/components/ui/button';
import { DataTestId } from '@/components/ui/data-test-id';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { useSearchParams } from '@/hooks/use-search-params';
import { PlusIcon } from 'lucide-react';
import React from 'react';
import { CreateProjectForm } from './form';

const CreateProject: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams<{
    createProject?: string;
  }>({}, 'projects');

  const onOpen = () => {
    setSearchParams({ createProject: 'open' });
  };

  const onClose = () => {
    setSearchParams({ createProject: undefined });
  };

  return (
    <OrganizationRBAC permissions={['MANAGE_PROJECT']}>
      <DataTestId value="create">
        <Dialog open={searchParams.createProject === 'open'}>
          <DialogTrigger asChild>
            <Button variant="outline" onClick={onOpen}>
              <PlusIcon />
              <Translation value="common/create" />
            </Button>
          </DialogTrigger>
          <DialogContent width="sm">
            <CreateProjectForm onClose={onClose} />
          </DialogContent>
        </Dialog>
      </DataTestId>
    </OrganizationRBAC>
  );
};

export { CreateProject };
