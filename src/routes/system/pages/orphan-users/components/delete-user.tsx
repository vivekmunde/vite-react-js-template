import type {
  TDeleteUserRequestData,
  TDeleteUserResponseData,
  TDeleteUserResponseErrorCode,
} from '@/api-interfaces/system/orphan-users/[userId]/interfaces';
import type { TGetUser } from '@/api-interfaces/system/users/interfaces';
import { useMutate } from '@/api/use-mutate';
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
import { AlertCircleIcon, TrashIcon } from 'lucide-react';
import React from 'react';
import { useOrphanUsersQuery } from '../hooks/use-orphan-users-query';

const DeleteUserForm: React.FC<{
  user: TGetUser;
  onClose: () => void;
}> = ({ user, onClose }) => {
  const [{ loading: mutating, status, error }, mutator] = useMutate<
    TDeleteUserRequestData,
    TDeleteUserResponseData,
    string,
    TDeleteUserResponseErrorCode
  >();
  useApiErrorHandler(status);
  const { onRevalidate: onRevalidateOrphanUsers } = useOrphanUsersQuery();

  const onDelete = () => {
    mutator
      .delete(`/system/orphan-users/${user.id}`, undefined)
      .then(({ status }) => {
        if (status === 'success') {
          onRevalidateOrphanUsers();
          onClose();
        }
      });
  };

  return (
    <React.Fragment>
      <AlertDialogHeader>
        <AlertDialogTitle>
          <Translation
            value="delete/deleteConfirmMessage"
            options={{ name: user.name ?? user.email }}
          />
        </AlertDialogTitle>
      </AlertDialogHeader>
      <AlertDialogBody>
        <TypographyParagraph>
          <Translation
            value="delete/deleteConfirmDescription"
            options={{ name: user.name ?? user.email }}
          />
        </TypographyParagraph>
      </AlertDialogBody>
      <AlertDialogFooter>
        <Flex direction={{ default: 'vertical' }} gap="normal">
          <ButtonGroup>
            <DataTestId value="delete">
              <Button
                variant="destructive"
                onClick={onDelete}
                loading={mutating}
              >
                <Translation value="common/delete" />
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

const DeleteUser: React.FC<{
  user: TGetUser;
}> = ({ user }) => {
  const [searchParams, setSearchParams] = useSearchParams<{
    deleteUser?: string;
  }>({}, 'users');

  const onOpen = () => {
    setSearchParams({ deleteUser: user.id });
  };

  const onClose = () => {
    setSearchParams({ deleteUser: undefined });
  };

  return (
    <SystemRBAC permissions={['MANAGE_USER']}>
      <DataTestId value="delete">
        <AlertDialog open={searchParams.deleteUser === user.id}>
          <AlertDialogTrigger asChild>
            <Button variant="ghost" onClick={onOpen} className="-my-2 p-2">
              <TrashIcon />
            </Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <DeleteUserForm user={user} onClose={onClose} />
          </AlertDialogContent>
        </AlertDialog>
      </DataTestId>
    </SystemRBAC>
  );
};

export { DeleteUser };
