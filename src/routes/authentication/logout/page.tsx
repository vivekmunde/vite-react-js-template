import type {
  TPostLogoutRequestData,
  TPostLogoutResponseData,
  TPostLogoutResponseErrorCode,
} from '@/api-interfaces/auth/logout/interfaces';
import { useMutate } from '@/api/use-mutate';
import { PageLoading } from '@/components/ui/page-loading';
import { useLoggedInUser } from '@/hooks/use-logged-in-user';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router';

const LogoutPage: React.FC = () => {
  const [, { post: logout }] = useMutate<
    TPostLogoutResponseData,
    TPostLogoutRequestData,
    string,
    TPostLogoutResponseErrorCode
  >();
  const { onRevalidate: onRevalidateLoggedInUser } = useLoggedInUser();
  const navigate = useNavigate();

  const onLogout = () => {
    logout('/auth/logout', undefined).then(() => {
      onRevalidateLoggedInUser();
      navigate('/');
    });
  };

  useEffect(() => {
    onLogout();
  }, []);

  return <PageLoading />;
};

export { LogoutPage };
