import type {
  TPostVerifyOtpRequestData,
  TPostVerifyOtpResponseData,
  TPostVerifyOtpResponseErrorCode,
} from '@/api-interfaces/auth/verify-otp/interfaces';
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
import { useLoggedInUser } from '@/hooks/use-logged-in-user';
import { zodResolver } from '@hookform/resolvers/zod';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import z from 'zod';
import { useUserLoginSession } from '../use-user-login-session';
import { ResendOtp } from './resend-otp';

const VerifyOtp: React.FC = () => {
  const { t: tCommon } = useTranslation('common');
  const { t: tValidation } = useTranslation('validation');
  const [loading, setLoading] = useState(false);
  const { onRevalidate: onRevalidateUserLoginSession } = useUserLoginSession();
  const { onRevalidate: onRevalidateUserSession } = useLoggedInUser();
  const [{ loading: mutating, validationErrors, error }, { post }] = useMutate<
    TPostVerifyOtpRequestData,
    TPostVerifyOtpResponseData,
    string,
    TPostVerifyOtpResponseErrorCode
  >();

  const formSchema = z.object({
    otp: z.string().min(1, {
      message: tValidation('otp.required'),
    }),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      otp: '',
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    post('/auth/verify-otp', {
      otp: values.otp,
    }).then(({ status }) => {
      if (status === 'success') {
        setLoading(true);
      }
      onRevalidateUserLoginSession();
      onRevalidateUserSession();
    });
  }

  return (
    <DataTestId value="verify-otp">
      <Form {...form} fieldErrors={validationErrors} formError={error?.message}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FormContent>
            <FormField
              control={form.control}
              name="otp"
              render={({ field }) => (
                <FormItem>
                  <FormLabel size="lg">
                    <Translation value="auth/enterYourOtp" />
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder={tCommon('otp')}
                      size="lg"
                      className="tracking-[1rem]"
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
            <Flex direction={{ default: 'vertical' }} gap="normal">
              <Flex
                direction={{ default: 'horizontal' }}
                alignItems={{ default: 'center' }}
                justifyContent={{ default: 'between' }}
                gap="normal"
              >
                <DataTestId value="verify">
                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    loading={mutating || loading}
                  >
                    <Translation value="common/verify" />
                  </Button>
                </DataTestId>
                <ResendOtp />
              </Flex>
              <FormError />
            </Flex>
          </FormFooter>
        </form>
      </Form>
    </DataTestId>
  );
};

export { VerifyOtp };
