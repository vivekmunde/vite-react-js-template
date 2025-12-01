import { Button } from '@/components/ui/button';
import { Flex } from '@/components/ui/flex';
import {
  Form,
  FormContent,
  FormControl,
  FormDescription,
  FormError,
  FormField,
  FormFieldErrors,
  FormFooter,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { SkeletonProvider } from '@/components/ui/skeleton';
import { zodResolver } from '@hookform/resolvers/zod';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const formSchema = z.object({
  username: z.string().min(2, {
    message: 'Username must be at least 2 characters.',
  }),
  displayName: z.string().min(2, {
    message: 'Display name must be at least 2 characters.',
  }),
});

const C = () => <div />;

const meta = {
  title: 'Components/UI/Form',
  component: C,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof C>;

export default meta;
type Story = StoryObj<typeof meta>;

export const _Story: Story = {
  args: {},
  render: () => {
    // 1. Define your form.
    const form = useForm<z.infer<typeof formSchema>>({
      resolver: zodResolver(formSchema),
      defaultValues: {
        username: '',
        displayName: '',
      },
    });

    // 2. Define a submit handler.
    function onSubmit(values: z.infer<typeof formSchema>) {
      // Do something with the form values.
      // ✅ This will be type-safe and validated.
      console.log(values);
    }

    return (
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FormContent className="w-[400px]">
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    <Input placeholder="shadcn" {...field} />
                  </FormControl>
                  <FormDescription>This is your login name.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="displayName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Display name</FormLabel>
                  <FormControl>
                    <Input placeholder="shadcn" {...field} />
                  </FormControl>
                  <FormDescription>
                    This is your public display name.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </FormContent>
          <FormFooter>
            <Button type="submit" variant="primary">
              Submit
            </Button>
          </FormFooter>
        </form>
      </Form>
    );
  },
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Errors: Story = {
  args: {},
  render: () => {
    const [submitting, setSubmitting] = useState(false);
    const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
    const [formError, setFormError] = useState<string | undefined>(undefined);
    const timer = useRef<NodeJS.Timeout | null>(null);

    const form = useForm<z.infer<typeof formSchema>>({
      resolver: zodResolver(formSchema),
      defaultValues: {
        username: '',
        displayName: '',
      },
    });

    function onSubmit() {
      setSubmitting(true);
      setFieldErrors({});
      setFormError(undefined);

      timer.current = setTimeout(() => {
        setFieldErrors({
          username: 'Username is already in use. Choose another username.',
        });
        setFormError('A user with this username already exists.');
        setSubmitting(false);
      }, 2000);
    }

    useEffect(() => {
      return () => {
        if (timer.current) {
          clearTimeout(timer.current);
        }
      };
    }, []);

    return (
      <Form {...form} fieldErrors={fieldErrors} formError={formError}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FormContent className="w-[400px]">
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    <Input placeholder="shadcn" {...field} />
                  </FormControl>
                  <FormDescription>This is your login name.</FormDescription>
                  <FormMessage />
                  <FormFieldErrors />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="displayName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Display name</FormLabel>
                  <FormControl>
                    <Input placeholder="shadcn" {...field} />
                  </FormControl>
                  <FormDescription>
                    This is your public display name.
                  </FormDescription>
                  <FormMessage />
                  <FormFieldErrors />
                </FormItem>
              )}
            />
          </FormContent>
          <FormFooter>
            <Flex direction={{ default: 'vertical' }} gap="normal">
              <Button
                type="submit"
                variant="primary"
                loading={submitting}
                className="max-w-fit"
              >
                <span>Submit</span>
              </Button>
              <FormError />
            </Flex>
          </FormFooter>
        </form>
      </Form>
    );
  },
};

export const _Skeleton: Story = {
  args: {},
  render: () => {
    // 1. Define your form.
    const form = useForm<z.infer<typeof formSchema>>({
      resolver: zodResolver(formSchema),
      defaultValues: {
        username: '',
        displayName: '',
      },
    });

    // 2. Define a submit handler.
    function onSubmit(values: z.infer<typeof formSchema>) {
      // Do something with the form values.
      // ✅ This will be type-safe and validated.
      console.log(values);
    }

    return (
      <SkeletonProvider show>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <FormContent className="w-[400px]">
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Username</FormLabel>
                    <FormControl>
                      <Input placeholder="shadcn" {...field} />
                    </FormControl>
                    <FormDescription>This is your login name.</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="displayName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Display name</FormLabel>
                    <FormControl>
                      <Input placeholder="shadcn" {...field} />
                    </FormControl>
                    <FormDescription>
                      This is your public display name.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </FormContent>
            <FormFooter>
              <Button type="submit" variant="primary">
                Submit
              </Button>
            </FormFooter>
          </form>
        </Form>
      </SkeletonProvider>
    );
  },
};
