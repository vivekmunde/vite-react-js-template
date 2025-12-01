import type { TGetOrganization } from '@/api-interfaces/system/organizations/interfaces';
import { SystemRBAC } from '@/components/rbac/system-rbac';
import { Button } from '@/components/ui/button';
import { DataTestId } from '@/components/ui/data-test-id';
import { Drawer, DrawerContent, DrawerTrigger } from '@/components/ui/drawer';
import { useSearchParams } from '@/hooks/use-search-params';
import { PencilIcon } from 'lucide-react';
import React from 'react';
import { UpdateOrganizationForm } from './form';

const UpdateOrganization: React.FC<{
  organization: TGetOrganization;
}> = ({ organization }) => {
  const [searchParams, setSearchParams] = useSearchParams<{
    updateOrganization?: string;
  }>({}, 'orgs');

  const onOpen = () => {
    setSearchParams({ updateOrganization: organization.id });
  };

  const onClose = () => {
    setSearchParams({ updateOrganization: undefined });
  };

  return (
    <SystemRBAC permissions={['MANAGE_ORGANIZATION']}>
      <DataTestId value="update">
        <Drawer open={searchParams.updateOrganization === organization.id}>
          <DrawerTrigger asChild>
            <Button variant="ghost" onClick={onOpen} className="-my-2 p-2">
              <PencilIcon />
            </Button>
          </DrawerTrigger>
          <DrawerContent>
            <UpdateOrganizationForm
              organization={organization}
              onClose={onClose}
            />
          </DrawerContent>
        </Drawer>
      </DataTestId>
    </SystemRBAC>
  );
};

export { UpdateOrganization };
