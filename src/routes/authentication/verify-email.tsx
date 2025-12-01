import type {
  TPostVerifyEmailRequestData,
  TPostVerifyEmailResponseData,
  TPostVerifyEmailResponseErrorCode,
} from '@/api-interfaces/auth/verify-email/interfaces';
import { useMutate } from '@/api/use-mutate';
import { Translation } from '@/components/translation';
import { Button } from '@/components/ui/button';
import { DataTestId } from '@/components/ui/data-test-id';
import { Flex } from '@/components/ui/flex';
import {
  Form,
  FormContent,
  FormControl,
  FormError,
  FormField,
  FormFieldErrors,
  FormFooter,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { zodResolver } from '@hookform/resolvers/zod';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import z from 'zod';
import { useUserLoginSession } from './use-user-login-session';

const VerifyEmail: React.FC = () => {
  const { t: tCommon } = useTranslation('common');
  const { t: tValidation } = useTranslation('validation');
  const [loading, setLoading] = useState(false);
  const { onRevalidate: onRevalidateUserLoginSession } = useUserLoginSession();
  const [{ loading: mutating, validationErrors, error }, { post }] = useMutate<
    TPostVerifyEmailRequestData,
    TPostVerifyEmailResponseData,
    string,
    TPostVerifyEmailResponseErrorCode
  >();

  const formSchema = z.object({
    email: z.string().min(1, {
      message: tValidation('email.required'),
    }),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    post('/auth/verify-email', {
      email: values.email,
    }).then(({ status }) => {
      if (status === 'success') {
        setLoading(true);
      }
      onRevalidateUserLoginSession();
    });
  }

  return (
    <DataTestId value="verify-email">
      <Form {...form} fieldErrors={validationErrors} formError={error?.message}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FormContent>
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel size="lg">
                    <Translation value="auth/enterYourEmail" />
                  </FormLabel>
                  <FormControl>
                    <Input
                      size="lg"
                      placeholder={tCommon('email')}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                  <FormFieldErrors />
                </FormItem>
              )}
            />
          </FormContent>
          <FormFooter>
            <Flex
              direction={{ default: 'vertical' }}
              alignItems={{ default: 'start' }}
              gap="normal"
            >
              <DataTestId value="verify-email-button">
                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  loading={mutating || loading}
                >
                  <Translation value="common/login" />
                </Button>
              </DataTestId>
              <FormError />
            </Flex>
          </FormFooter>
        </form>
      </Form>
    </DataTestId>
  );
};

export { VerifyEmail };
