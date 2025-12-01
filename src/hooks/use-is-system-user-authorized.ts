import type { TPermission } from '@/types/rbac';
import { useLoggedInUser } from './use-logged-in-user';
import { useMySystemPermissions } from './use-my-system-permissions';

const useIsSystemUserAuthorized = (
  permissions: TPermission[],
  operator: 'OR' | 'AND' = 'AND'
) => {
  const { data: user } = useLoggedInUser();
  const { data: userPermissions } = useMySystemPermissions();

  if (!user?.id) {
    return false;
  }

  if (user.category !== 'SYSTEM' || permissions.length === 0) {
    return false;
  }

  if (operator === 'AND') {
    return permissions.every(permission =>
      userPermissions?.items?.includes(permission)
    );
  }

  return permissions.some(permission =>
    userPermissions?.items?.includes(permission)
  );
};

export { useIsSystemUserAuthorized };
