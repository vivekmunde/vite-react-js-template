import type { TPermission } from '@/types/rbac';
import { useLoggedInUser } from './use-logged-in-user';
import { useMyOrganizationPermissions } from './use-my-organization-permissions';

const useIsOrganizationUserAuthorized = (
  permissions: TPermission[],
  operator: 'OR' | 'AND' = 'AND'
) => {
  const { data: user } = useLoggedInUser();
  const { data: userPermissions } = useMyOrganizationPermissions();

  if (!user?.id) {
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

export { useIsOrganizationUserAuthorized };
