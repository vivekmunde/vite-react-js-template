import type {
  TGetAuthorizedToModifyUserResponseData,
  TGetAuthorizedToModifyUserResponseErrorCode,
} from '@/api-interfaces/system/rbac/authorized-to-modify-user/[userId]/interfaces';
import type { TGetUser } from '@/api-interfaces/system/users/interfaces';
import { useQuery } from '@/api/use-query';
import { SystemRBAC } from '@/components/rbac/system-rbac';
import { Button } from '@/components/ui/button';
import { DataTestId } from '@/components/ui/data-test-id';
import { Drawer, DrawerContent, DrawerTrigger } from '@/components/ui/drawer';
import { useSearchParams } from '@/hooks/use-search-params';
import { PencilIcon } from 'lucide-react';
import React from 'react';
import { UpdateUserForm } from './form';

const UpdateUser: React.FC<{
  user: TGetUser;
}> = ({ user }) => {
  const { data: authorizedToModifyUser } = useQuery<
    TGetAuthorizedToModifyUserResponseData,
    string,
    TGetAuthorizedToModifyUserResponseErrorCode
  >(`/system/rbac/authorized-to-modify-user/${user.id}`);
  const [searchParams, setSearchParams] = useSearchParams<{
    updateUser?: string;
  }>({}, 'users');

  const onOpen = () => {
    setSearchParams({ updateUser: user.id });
  };

  const onClose = () => {
    setSearchParams({ updateUser: undefined });
  };

  return authorizedToModifyUser?.authorized ? (
    <SystemRBAC permissions={['MANAGE_USER']}>
      <DataTestId value="create">
        <Drawer open={searchParams.updateUser === user.id}>
          <DrawerTrigger asChild>
            <Button variant="ghost" onClick={onOpen} className="-my-2 p-2">
              <PencilIcon />
            </Button>
          </DrawerTrigger>
          <DrawerContent>
            <UpdateUserForm user={user} onClose={onClose} />
          </DrawerContent>
        </Drawer>
      </DataTestId>
    </SystemRBAC>
  ) : null;
};

export { UpdateUser };
