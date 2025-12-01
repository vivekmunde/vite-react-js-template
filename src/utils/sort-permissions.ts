import type { TPermission } from '@/types/rbac';

const permissionsSortSequence: Record<TPermission, number> = {
  READ_ERROR: 1,
  READ_ORGANIZATION: 2,
  MANAGE_ORGANIZATION: 3,
  READ_ROLE: 4,
  MANAGE_ROLE: 5,
  READ_USER: 6,
  MANAGE_USER: 7,
  READ_ANALYTICS: 8,
  READ_PROJECT: 9,
  MANAGE_PROJECT: 10,
};

const sortPermissions = (permissions: TPermission[]): TPermission[] => {
  const sortedPermissions: TPermission[] = permissions.sort(
    (a, b) => permissionsSortSequence[a] - permissionsSortSequence[b]
  );
  return sortedPermissions;
};

export { sortPermissions };
