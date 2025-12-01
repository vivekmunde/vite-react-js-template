import { SystemRBAC } from '@/components/rbac/system-rbac';
import { Translation } from '@/components/translation';
import { Button } from '@/components/ui/button';
import { DataTestId } from '@/components/ui/data-test-id';
import { Drawer, DrawerContent, DrawerTrigger } from '@/components/ui/drawer';
import { useSearchParams } from '@/hooks/use-search-params';
import { PlusIcon } from 'lucide-react';
import React from 'react';
import { CreateUserForm } from './form';

const CreateUser: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams<{
    createUser?: string;
  }>({}, 'users');

  const onOpen = () => {
    setSearchParams({ createUser: 'open' });
  };

  const onClose = () => {
    setSearchParams({ createUser: undefined });
  };

  return (
    <SystemRBAC permissions={['MANAGE_USER']}>
      <DataTestId value="create">
        <Drawer open={searchParams.createUser === 'open'}>
          <DrawerTrigger asChild>
            <Button variant="outline" onClick={onOpen}>
              <PlusIcon />
              <Translation value="common/create" />
            </Button>
          </DrawerTrigger>
          <DrawerContent>
            <CreateUserForm onClose={onClose} />
          </DrawerContent>
        </Drawer>
      </DataTestId>
    </SystemRBAC>
  );
};

export { CreateUser };
