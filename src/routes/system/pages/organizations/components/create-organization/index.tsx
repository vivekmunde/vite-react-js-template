import { SystemRBAC } from '@/components/rbac/system-rbac';
import { Translation } from '@/components/translation';
import { Button } from '@/components/ui/button';
import { DataTestId } from '@/components/ui/data-test-id';
import { Drawer, DrawerContent, DrawerTrigger } from '@/components/ui/drawer';
import { useSearchParams } from '@/hooks/use-search-params';
import { PlusIcon } from 'lucide-react';
import React from 'react';
import { CreateOrganizationForm } from './form';

const CreateOrganization: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams<{
    createOrganization?: string;
  }>({}, 'orgs');

  const onOpen = () => {
    setSearchParams({ createOrganization: 'open' });
  };

  const onClose = () => {
    setSearchParams({ createOrganization: undefined });
  };

  return (
    <SystemRBAC permissions={['MANAGE_ORGANIZATION']}>
      <DataTestId value="create">
        <Drawer open={searchParams.createOrganization === 'open'}>
          <DrawerTrigger asChild>
            <Button variant="outline" onClick={onOpen}>
              <PlusIcon />
              <Translation value="common/create" />
            </Button>
          </DrawerTrigger>
          <DrawerContent>
            <CreateOrganizationForm onClose={onClose} />
          </DrawerContent>
        </Drawer>
      </DataTestId>
    </SystemRBAC>
  );
};

export { CreateOrganization };
