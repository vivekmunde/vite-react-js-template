import { createContext, useContext } from 'react';

export const SkeletonContext = createContext<boolean>(false);

export const useShowSkeleton = () => useContext(SkeletonContext);
