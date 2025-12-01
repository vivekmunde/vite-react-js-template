import type {
  TDeleteOrganizationRequestData,
  TDeleteOrganizationResponseData,
  TDeleteOrganizationResponseErrorCode,
} from '@/api-interfaces/system/organizations/[organizationId]/interfaces';
import type { TGetOrganization } from '@/api-interfaces/system/organizations/interfaces';
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
import { useOrganizationsQuery } from '../hooks/use-organizations-query';

const DeleteOrganizationForm: React.FC<{
  organization: TGetOrganization;
  onClose: () => void;
}> = ({ organization, onClose }) => {
  const [{ loading: mutating, status, error }, mutator] = useMutate<
    TDeleteOrganizationRequestData,
    TDeleteOrganizationResponseData,
    string,
    TDeleteOrganizationResponseErrorCode
  >();
  useApiErrorHandler(status);
  const { onRevalidate: onRevalidateUserOrganizations } =
    useOrganizationsQuery();

  const onDelete = () => {
    mutator
      .delete(`/system/organizations/${organization.id}`, undefined)
      .then(({ status }) => {
        if (status === 'success') {
          onRevalidateUserOrganizations();
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
            options={{ name: organization.name }}
          />
        </AlertDialogTitle>
      </AlertDialogHeader>
      <AlertDialogBody>
        <TypographyParagraph>
          <Translation
            value="delete/deleteConfirmDescription"
            options={{ name: organization.name }}
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

const DeleteOrganization: React.FC<{
  organization: TGetOrganization;
}> = ({ organization }) => {
  const [searchParams, setSearchParams] = useSearchParams<{
    deleteOrganization?: string;
  }>({}, 'orgs');

  const onOpen = () => {
    setSearchParams({ deleteOrganization: organization.id });
  };

  const onClose = () => {
    setSearchParams({ deleteOrganization: undefined });
  };

  return (
    <SystemRBAC permissions={['MANAGE_ORGANIZATION']}>
      <DataTestId value="delete">
        <AlertDialog open={searchParams.deleteOrganization === organization.id}>
          <AlertDialogTrigger asChild>
            <Button variant="ghost" onClick={onOpen} className="-my-2 p-2">
              <TrashIcon />
            </Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <DeleteOrganizationForm
              organization={organization}
              onClose={onClose}
            />
          </AlertDialogContent>
        </AlertDialog>
      </DataTestId>
    </SystemRBAC>
  );
};

export { DeleteOrganization };
