import React from 'react';
import { SkeletonContext, useShowSkeleton } from './hooks';

const SkeletonProvider: React.FC<{
  children: React.ReactNode;
  show: boolean;
}> = ({ children, show }) => {
  return (
    <SkeletonContext.Provider value={show}>{children}</SkeletonContext.Provider>
  );
};

const IfSkeletonTrue: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const show = useShowSkeleton();

  return show ? children : null;
};

const IfSkeletonFalse: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const show = useShowSkeleton();

  return !show ? children : null;
};

const IfSkeleton = { True: IfSkeletonTrue, False: IfSkeletonFalse };

export { IfSkeleton, SkeletonProvider };
