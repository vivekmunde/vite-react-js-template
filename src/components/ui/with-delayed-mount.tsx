import React from 'react';
import { DelayedMount } from './delayed-mount';

const withDelayedMount = <TProps extends React.JSX.IntrinsicAttributes>(
  Component: React.ComponentType<TProps>,
  delay?: number
) => {
  const WithRBAC: React.FC<TProps> = props => {
    return (
      <DelayedMount delay={delay}>
        <Component {...props} />
      </DelayedMount>
    );
  };

  return WithRBAC;
};

export { withDelayedMount };
