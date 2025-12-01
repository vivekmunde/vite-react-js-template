import type { TPermission } from '@/types/rbac';
import { SystemPageRBAC, SystemRBAC } from './system-rbac';

const withSystemRBAC = <TProps,>(
  Component: React.ComponentType<TProps>,
  permissions: TPermission[]
) => {
  const WithSystemRBAC: React.FC<
    TProps & React.JSX.IntrinsicAttributes
  > = props => {
    return (
      <SystemRBAC permissions={permissions}>
        <Component {...props} />
      </SystemRBAC>
    );
  };

  return WithSystemRBAC;
};

const withSystemPageRBAC = <TProps,>(
  Component: React.ComponentType<TProps>,
  permissions: TPermission[]
) => {
  const WithSystemPageRBAC: React.FC<
    TProps & React.JSX.IntrinsicAttributes
  > = props => {
    return (
      <SystemPageRBAC permissions={permissions}>
        <Component {...props} />
      </SystemPageRBAC>
    );
  };

  return WithSystemPageRBAC;
};

export { withSystemPageRBAC, withSystemRBAC };
