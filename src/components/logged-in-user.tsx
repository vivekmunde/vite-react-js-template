import type { TGetUserResponseData } from '@/api-interfaces/me/interfaces';
import React from 'react';
import { useLoggedInUser } from '../hooks/use-logged-in-user';

const LoggedInUser: React.FC<{
  children: (user?: TGetUserResponseData) => React.ReactNode;
}> = ({ children }) => {
  const { data: user } = useLoggedInUser();

  return <React.Fragment>{children(user)}</React.Fragment>;
};

export { LoggedInUser };
