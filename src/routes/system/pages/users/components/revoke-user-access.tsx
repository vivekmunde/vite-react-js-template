import type {
  TGetAuthorizedToModifyUserResponseData,
  TGetAuthorizedToModifyUserResponseErrorCode,
} from '@/api-interfaces/system/rbac/authorized-to-modify-user/[userId]/interfaces';
import type {
  TPutUserRequestData,
  TPutUserResponseData,
  TPutUserResponseErrorCode,
} from '@/api-interfaces/system/users/[userId]/interfaces';
import type { TGetUser } from '@/api-interfaces/system/users/interfaces';
import { useMutate } from '@/api/use-mutate';
import { useQuery } from '@/api/use-query';
import { SystemRBAC } from '@/components/rbac/system-rbac';
import { Translation } from '@/components/translation';
import { Alert, AlertTitle } from '@/components/ui/alert';
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { Button } from '@/components/ui/button';
import { ButtonGroup } from '@/components/ui/button-group';
import { DataTestId } from '@/components/ui/data-test-id';
import { Flex } from '@/components/ui/flex';
import { Icon } from '@/components/ui/icon';
import { TypographyParagraph } from '@/components/ui/typography';
import { useApiErrorHandler } from '@/hooks/use-api-error-handler';
import { useSearchParams } from '@/hooks/use-search-params';
import { AlertCircleIcon, ShieldIcon } from 'lucide-react';
import React from 'react';
import { useSystemUsersQuery } from '../hooks/use-system-users-query';

const RevokeUserAccessForm: React.FC<{
  user: TGetUser;
  onClose: () => void;
}> = ({ user, onClose }) => {
  const [{ loading: mutating, status, error }, mutator] = useMutate<
    TPutUserRequestData,
    TPutUserResponseData,
    string,
    TPutUserResponseErrorCode
  >();
  useApiErrorHandler(status);
  const { onRevalidate: onRevalidateSystemUsers } = useSystemUsersQuery();

  const onDelete = () => {
    mutator
      .put(`/system/users/${user.id}`, {
        email: user.email,
        roleIds: [],
      })
      .then(({ status }) => {
        if (status === 'success') {
          onRevalidateSystemUsers();
          onClose();
        }
      });
  };

  return (
    <React.Fragment>
      <AlertDialogHeader>
        <AlertDialogTitle>
          <Translation
            value="revoke/revokeSystemUserAccessConfirmMessage"
            options={{ name: user.name ?? user.email }}
          />
        </AlertDialogTitle>
      </AlertDialogHeader>
      <AlertDialogBody>
        <TypographyParagraph>
          <Translation value="revoke/revokeSystemUserAccessConfirmDescription" />
        </TypographyParagraph>
      </AlertDialogBody>
      <AlertDialogFooter>
        <Flex direction={{ default: 'vertical' }} gap="normal">
          <ButtonGroup>
            <DataTestId value="revoke">
              <Button
                variant="destructive"
                onClick={onDelete}
                loading={mutating}
              >
                <Translation value="common/revoke" />
              </Button>
            </DataTestId>
            <DataTestId value="cancel">
              <Button variant="outline" onClick={onClose}>
                <Translation value="common/cancel" />
              </Button>
            </DataTestId>
          </ButtonGroup>
          {error?.message && (
            <Alert variant="destructive">
              <Icon>
                <AlertCircleIcon />
              </Icon>
              <AlertTitle className="--form-errors-alert-title">
                {error?.message}
              </AlertTitle>
            </Alert>
          )}
        </Flex>
      </AlertDialogFooter>
    </React.Fragment>
  );
};

const RevokeUserAccess: React.FC<{
  user: TGetUser;
}> = ({ user }) => {
  const { data: authorizedToModifyUser } = useQuery<
    TGetAuthorizedToModifyUserResponseData,
    string,
    TGetAuthorizedToModifyUserResponseErrorCode
  >(`/system/rbac/authorized-to-modify-user/${user.id}`);
  const [searchParams, setSearchParams] = useSearchParams<{
    revokeUserAccess?: string;
  }>({}, 'users');

  const onOpen = () => {
    setSearchParams({ revokeUserAccess: user.id });
  };

  const onClose = () => {
    setSearchParams({ revokeUserAccess: undefined });
  };

  return authorizedToModifyUser?.authorized ? (
    <SystemRBAC permissions={['MANAGE_USER']}>
      <DataTestId value="revoke">
        <AlertDialog open={searchParams.revokeUserAccess === user.id}>
          <AlertDialogTrigger asChild>
            <Button variant="ghost" onClick={onOpen} className="-my-2 p-2">
              <ShieldIcon />
            </Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <RevokeUserAccessForm user={user} onClose={onClose} />
          </AlertDialogContent>
        </AlertDialog>
      </DataTestId>
    </SystemRBAC>
  ) : null;
};

export { RevokeUserAccess };
