import { useIsOrganizationUserAuthorized } from '@/hooks/use-is-organization-user-authorized';
import type { TPermission } from '@/types/rbac';
import { BanIcon } from 'lucide-react';
import { Translation } from '../translation';
import { Result, ResultIcon, ResultMessage, ResultTitle } from '../ui/result';

const OrganizationRBAC: React.FC<{
  children: React.ReactNode;
  permissions: TPermission[];
  operator?: 'OR' | 'AND';
}> = ({ children, permissions, operator = 'AND' }) => {
  const isAuthorized = useIsOrganizationUserAuthorized(permissions, operator);

  if (isAuthorized) {
    return children;
  }

  return null;
};

const OrganizationPageRBAC: React.FC<{
  children: React.ReactNode;
  permissions: TPermission[];
  operator?: 'OR' | 'AND';
}> = ({ children, permissions, operator = 'AND' }) => {
  const isAuthorized = useIsOrganizationUserAuthorized(permissions, operator);

  if (isAuthorized) {
    return children;
  }

  return (
    <Result variant="destructive" className="flex h-full my-[5vh]">
      <ResultIcon>
        <BanIcon />
      </ResultIcon>
      <ResultTitle className="capitalize text-xl">
        <Translation value="error/page.401.title" />
      </ResultTitle>
      <ResultMessage>
        <Translation value="error/page.401.description_1" />
      </ResultMessage>
      <ResultMessage>
        <Translation value="error/page.401.description_2" />
      </ResultMessage>
    </Result>
  );
};

export { OrganizationPageRBAC, OrganizationRBAC };
