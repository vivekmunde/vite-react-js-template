import type {
  TPutNameRequestData,
  TPutNameResponseData,
  TPutNameResponseErrorCode,
} from '@/api-interfaces/me/name/interfaces';
import { useMutate } from '@/api/use-mutate';
import { Translation } from '@/components/translation';
import { Button } from '@/components/ui/button';
import { ButtonGroup } from '@/components/ui/button-group';
import { DataTestId } from '@/components/ui/data-test-id';
import {
  Dialog,
  DialogBody,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Flex } from '@/components/ui/flex';
import {
  Form,
  FormContent,
  FormControl,
  FormError,
  FormField,
  FormFieldErrors,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useLoggedInUser } from '@/hooks/use-logged-in-user';
import { useSearchParams } from '@/hooks/use-search-params';
import { zodResolver } from '@hookform/resolvers/zod';
import { PencilIcon } from 'lucide-react';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import z from 'zod';

const UpdateProfileForm: React.FC<{
  onClose?: () => void;
}> = ({ onClose }) => {
  const { t: tCommon } = useTranslation('common');
  const { t: tValidation } = useTranslation('validation');
  const { data: user, onRevalidate: onRevalidateLoggedInUser } =
    useLoggedInUser();
  const [{ loading, validationErrors, error }, { put }] = useMutate<
    TPutNameRequestData,
    TPutNameResponseData,
    string,
    TPutNameResponseErrorCode
  >();

  const formSchema = z.object({
    name: z.string().min(1, {
      message: tValidation('name.required'),
    }),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: user?.name ?? '',
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    put('/me/name', {
      name: values.name,
    }).then(({ status }) => {
      if (status === 'success') {
        onRevalidateLoggedInUser();
        onClose?.();
      }
    });
  }

  return (
    <Form {...form} fieldErrors={validationErrors} formError={error?.message}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="overflow-hidden flex-1 flex flex-col"
      >
        <DialogHeader>
          <DialogTitle>
            <Translation value="common/update" />
          </DialogTitle>
          <DialogDescription>{user?.name}</DialogDescription>
        </DialogHeader>
        <DialogBody>
          <FormContent>
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    <Translation value="common/name" />
                  </FormLabel>
                  <FormControl>
                    <Input placeholder={tCommon('name')} {...field} />
                  </FormControl>
                  <FormMessage />
                  <FormFieldErrors />
                </FormItem>
              )}
            />
          </FormContent>
        </DialogBody>
        <DialogFooter>
          <Flex direction={{ default: 'vertical' }} gap="normal">
            <ButtonGroup>
              <DataTestId value="update">
                <Button type="submit" variant="primary" loading={loading}>
                  <Translation value="common/update" />
                </Button>
              </DataTestId>
              <DataTestId value="cancel">
                <Button type="button" variant="outline" onClick={onClose}>
                  <Translation value="common/cancel" />
                </Button>
              </DataTestId>
            </ButtonGroup>
            <FormError />
          </Flex>
        </DialogFooter>
      </form>
    </Form>
  );
};

const UpdateProfile: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams<{
    updateProfileDialog?: string;
  }>({ updateProfileDialog: undefined }, 'me');

  const onOpen = () => {
    setSearchParams({ updateProfileDialog: 'open' });
  };

  const onClose = () => {
    setSearchParams({ updateProfileDialog: undefined });
  };

  return (
    <DataTestId value="update">
      <Dialog open={searchParams.updateProfileDialog == 'open'}>
        <DialogTrigger asChild onClick={onOpen}>
          <Button variant="ghost">
            <PencilIcon />
          </Button>
        </DialogTrigger>
        <DialogContent width="sm">
          <UpdateProfileForm onClose={onClose} />
        </DialogContent>
      </Dialog>
    </DataTestId>
  );
};

export { UpdateProfile };
