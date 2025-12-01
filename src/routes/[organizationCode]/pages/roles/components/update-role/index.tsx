import type { TGetRole } from '@/api-interfaces/[organizationId]/roles/interfaces';
import { SystemRBAC } from '@/components/rbac/system-rbac';
import { Button } from '@/components/ui/button';
import { DataTestId } from '@/components/ui/data-test-id';
import { Drawer, DrawerContent, DrawerTrigger } from '@/components/ui/drawer';
import { If } from '@/components/ui/if';
import { useSearchParams } from '@/hooks/use-search-params';
import { PencilIcon } from 'lucide-react';
import React from 'react';
import { UpdateRoleForm } from './form';

const UpdateRole: React.FC<{
  role: TGetRole;
}> = ({ role }) => {
  const [searchParams, setSearchParams] = useSearchParams<{
    updateRole?: string;
  }>({}, 'roles');

  const onOpen = () => {
    setSearchParams({ updateRole: role.id });
  };

  const onClose = () => {
    setSearchParams({ updateRole: undefined });
  };

  return (
    <If condition={!!role.organizationId}>
      <If.True>
        <SystemRBAC permissions={['MANAGE_ROLE']}>
          <DataTestId value="update">
            <Drawer open={searchParams.updateRole === role.id}>
              <DrawerTrigger asChild>
                <Button variant="ghost" onClick={onOpen}>
                  <PencilIcon />
                </Button>
              </DrawerTrigger>
              <DrawerContent>
                <UpdateRoleForm role={role} onClose={onClose} />
              </DrawerContent>
            </Drawer>
          </DataTestId>
        </SystemRBAC>
      </If.True>
    </If>
  );
};

export { UpdateRole };
