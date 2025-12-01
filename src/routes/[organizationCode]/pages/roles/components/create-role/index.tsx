import { SystemRBAC } from '@/components/rbac/system-rbac';
import { Translation } from '@/components/translation';
import { Button } from '@/components/ui/button';
import { DataTestId } from '@/components/ui/data-test-id';
import { Drawer, DrawerContent, DrawerTrigger } from '@/components/ui/drawer';
import { useSearchParams } from '@/hooks/use-search-params';
import { PlusIcon } from 'lucide-react';
import React from 'react';
import { CreateRoleForm } from './form';

const CreateRole: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams<{
    createRole?: string;
  }>({}, 'roles');

  const onOpen = () => {
    setSearchParams({ createRole: 'open' });
  };

  const onClose = () => {
    setSearchParams({ createRole: undefined });
  };

  return (
    <SystemRBAC permissions={['MANAGE_ROLE']}>
      <DataTestId value="create">
        <Drawer open={searchParams.createRole === 'open'}>
          <DrawerTrigger asChild>
            <Button variant="outline" onClick={onOpen}>
              <PlusIcon />
              <Translation value="common/create" />
            </Button>
          </DrawerTrigger>
          <DrawerContent>
            <CreateRoleForm onClose={onClose} />
          </DrawerContent>
        </Drawer>
      </DataTestId>
    </SystemRBAC>
  );
};

export { CreateRole };
