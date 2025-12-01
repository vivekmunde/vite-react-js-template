import {
  SidebarMenu,
  SidebarMenuGroup,
  SidebarMenuGroupContent,
  SidebarMenuGroupHeader,
  SidebarMenuItemIcon,
  SidebarMenuLink,
} from '@/components/ui/sidebar-menu';
import { SkeletonProvider } from '@/components/ui/skeleton';
import { TypographySpan } from '@/components/ui/typography';
import type { Meta, StoryObj } from '@storybook/react-vite';
import {
  BellIcon,
  Building2Icon,
  CircleUserIcon,
  MailIcon,
  ShieldHalfIcon,
  ShieldIcon,
  UsersIcon,
} from 'lucide-react';

const meta = {
  title: 'Components/UI/SidebarMenu',
  component: SidebarMenu,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof SidebarMenu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const _Story: Story = {
  args: {},
  render: () => {
    return (
      <div className="flex flex-col gap-10">
        <div className="flex flex-row gap-20">
          <SidebarMenu>
            <SidebarMenuGroup>
              <SidebarMenuGroupHeader>
                <TypographySpan>Administration</TypographySpan>
              </SidebarMenuGroupHeader>
              <SidebarMenuGroupContent>
                <SidebarMenuLink href="#">
                  <TypographySpan>Customers</TypographySpan>
                </SidebarMenuLink>
                <SidebarMenuLink href="#">
                  <TypographySpan>Roles</TypographySpan>
                </SidebarMenuLink>
                <SidebarMenuLink href="#" active>
                  <TypographySpan>Users</TypographySpan>
                </SidebarMenuLink>
              </SidebarMenuGroupContent>
            </SidebarMenuGroup>
            <SidebarMenuGroup>
              <SidebarMenuGroupHeader>
                <TypographySpan>Me</TypographySpan>
              </SidebarMenuGroupHeader>
              <SidebarMenuGroupContent>
                <SidebarMenuLink href="#">
                  <TypographySpan>Emails</TypographySpan>
                </SidebarMenuLink>
                <SidebarMenuLink href="#">
                  <TypographySpan>Notifications</TypographySpan>
                </SidebarMenuLink>
                <SidebarMenuLink href="#">
                  <TypographySpan>Profile</TypographySpan>
                </SidebarMenuLink>
              </SidebarMenuGroupContent>
            </SidebarMenuGroup>
          </SidebarMenu>

          <SidebarMenu>
            <SidebarMenuGroup>
              <SidebarMenuGroupHeader>
                <TypographySpan>Administration</TypographySpan>
              </SidebarMenuGroupHeader>
              <SidebarMenuGroupContent>
                <SidebarMenuLink href="#">
                  <SidebarMenuItemIcon>
                    <Building2Icon />
                  </SidebarMenuItemIcon>
                  <TypographySpan>Customers</TypographySpan>
                </SidebarMenuLink>
                <SidebarMenuLink href="#">
                  <SidebarMenuItemIcon>
                    <ShieldIcon />
                  </SidebarMenuItemIcon>
                  <TypographySpan>Roles</TypographySpan>
                </SidebarMenuLink>
                <SidebarMenuLink href="#" active>
                  <SidebarMenuItemIcon>
                    <UsersIcon />
                  </SidebarMenuItemIcon>
                  <TypographySpan>Users</TypographySpan>
                </SidebarMenuLink>
              </SidebarMenuGroupContent>
            </SidebarMenuGroup>
            <SidebarMenuGroup>
              <SidebarMenuGroupHeader>
                <TypographySpan>Me</TypographySpan>
              </SidebarMenuGroupHeader>
              <SidebarMenuGroupContent>
                <SidebarMenuLink href="#">
                  <SidebarMenuItemIcon>
                    <MailIcon />
                  </SidebarMenuItemIcon>
                  <TypographySpan>Emails</TypographySpan>
                </SidebarMenuLink>
                <SidebarMenuLink href="#">
                  <SidebarMenuItemIcon>
                    <BellIcon />
                  </SidebarMenuItemIcon>
                  <TypographySpan>Notifications</TypographySpan>
                </SidebarMenuLink>
                <SidebarMenuLink href="#">
                  <SidebarMenuItemIcon>
                    <CircleUserIcon />
                  </SidebarMenuItemIcon>
                  <TypographySpan>Profile</TypographySpan>
                </SidebarMenuLink>
              </SidebarMenuGroupContent>
            </SidebarMenuGroup>
          </SidebarMenu>

          <SidebarMenu>
            <SidebarMenuGroup>
              <SidebarMenuGroupHeader>
                <SidebarMenuItemIcon>
                  <ShieldHalfIcon />
                </SidebarMenuItemIcon>
                <TypographySpan>Administration</TypographySpan>
              </SidebarMenuGroupHeader>
              <SidebarMenuGroupContent>
                <SidebarMenuLink href="#">
                  <TypographySpan>Customers</TypographySpan>
                </SidebarMenuLink>
                <SidebarMenuLink href="#">
                  <TypographySpan>Roles</TypographySpan>
                </SidebarMenuLink>
                <SidebarMenuLink active>
                  <TypographySpan>Users</TypographySpan>
                </SidebarMenuLink>
              </SidebarMenuGroupContent>
            </SidebarMenuGroup>
            <SidebarMenuGroup>
              <SidebarMenuGroupHeader>
                <SidebarMenuItemIcon>
                  <CircleUserIcon />
                </SidebarMenuItemIcon>
                <TypographySpan>Me</TypographySpan>
              </SidebarMenuGroupHeader>
              <SidebarMenuGroupContent>
                <SidebarMenuLink href="#">
                  <TypographySpan>Emails</TypographySpan>
                </SidebarMenuLink>
                <SidebarMenuLink href="#">
                  <TypographySpan>Notifications</TypographySpan>
                </SidebarMenuLink>
                <SidebarMenuLink href="#">
                  <TypographySpan>Profile</TypographySpan>
                </SidebarMenuLink>
              </SidebarMenuGroupContent>
            </SidebarMenuGroup>
          </SidebarMenu>

          <SidebarMenu>
            <SidebarMenuGroup>
              <SidebarMenuGroupHeader>
                <SidebarMenuItemIcon>
                  <ShieldHalfIcon />
                </SidebarMenuItemIcon>
                <TypographySpan>Administration</TypographySpan>
              </SidebarMenuGroupHeader>
              <SidebarMenuGroupContent>
                <SidebarMenuLink href="#">
                  <TypographySpan>Customers</TypographySpan>
                </SidebarMenuLink>
                <SidebarMenuLink href="#">
                  <TypographySpan>Roles</TypographySpan>
                </SidebarMenuLink>
                <SidebarMenuLink active>
                  <TypographySpan>Users</TypographySpan>
                </SidebarMenuLink>
              </SidebarMenuGroupContent>
            </SidebarMenuGroup>
            <SidebarMenuGroup>
              <SidebarMenuGroupHeader>
                <SidebarMenuItemIcon>
                  <CircleUserIcon />
                </SidebarMenuItemIcon>
                <TypographySpan>Me</TypographySpan>
              </SidebarMenuGroupHeader>
              <SidebarMenuGroupContent>
                <SidebarMenuLink href="#">
                  <TypographySpan>Emails</TypographySpan>
                </SidebarMenuLink>
                <SidebarMenuLink href="#">
                  <TypographySpan>Notifications</TypographySpan>
                </SidebarMenuLink>
                <SidebarMenuLink href="#">
                  <TypographySpan>Profile</TypographySpan>
                </SidebarMenuLink>
              </SidebarMenuGroupContent>
            </SidebarMenuGroup>
          </SidebarMenu>
        </div>

        <div className="flex flex-row gap-20">
          <SidebarMenu>
            <SidebarMenuLink href="#">
              <TypographySpan>Customers</TypographySpan>
            </SidebarMenuLink>
            <SidebarMenuLink href="#">
              <TypographySpan>Roles</TypographySpan>
            </SidebarMenuLink>
            <SidebarMenuLink active>
              <TypographySpan>Users</TypographySpan>
            </SidebarMenuLink>
            <SidebarMenuLink href="#">
              <TypographySpan>Emails</TypographySpan>
            </SidebarMenuLink>
            <SidebarMenuLink href="#">
              <TypographySpan>Notifications</TypographySpan>
            </SidebarMenuLink>
            <SidebarMenuLink href="#">
              <TypographySpan>Profile</TypographySpan>
            </SidebarMenuLink>
          </SidebarMenu>

          <SidebarMenu>
            <SidebarMenuLink href="#">
              <SidebarMenuItemIcon>
                <Building2Icon />
              </SidebarMenuItemIcon>
              <TypographySpan>Customers</TypographySpan>
            </SidebarMenuLink>
            <SidebarMenuLink href="#">
              <SidebarMenuItemIcon>
                <ShieldIcon />
              </SidebarMenuItemIcon>
              <TypographySpan>Roles</TypographySpan>
            </SidebarMenuLink>
            <SidebarMenuLink active>
              <SidebarMenuItemIcon>
                <UsersIcon />
              </SidebarMenuItemIcon>
              <TypographySpan>Users</TypographySpan>
            </SidebarMenuLink>
            <SidebarMenuLink href="#">
              <SidebarMenuItemIcon>
                <MailIcon />
              </SidebarMenuItemIcon>
              <TypographySpan>Emails</TypographySpan>
            </SidebarMenuLink>
            <SidebarMenuLink href="#">
              <SidebarMenuItemIcon>
                <BellIcon />
              </SidebarMenuItemIcon>
              <TypographySpan>Notifications</TypographySpan>
            </SidebarMenuLink>
            <SidebarMenuLink href="#">
              <SidebarMenuItemIcon>
                <CircleUserIcon />
              </SidebarMenuItemIcon>
              <TypographySpan>Profile</TypographySpan>
            </SidebarMenuLink>
          </SidebarMenu>
        </div>
      </div>
    );
  },
};

export const _Skeleton: Story = {
  args: {},
  render: () => {
    return (
      <SkeletonProvider show>
        <div className="flex flex-col gap-10">
          <div className="flex flex-row gap-20">
            <SidebarMenu>
              <SidebarMenuGroup>
                <SidebarMenuGroupHeader>
                  <TypographySpan>Administration</TypographySpan>
                </SidebarMenuGroupHeader>
                <SidebarMenuGroupContent>
                  <SidebarMenuLink href="#">
                    <TypographySpan>Customers</TypographySpan>
                  </SidebarMenuLink>
                  <SidebarMenuLink href="#">
                    <TypographySpan>Roles</TypographySpan>
                  </SidebarMenuLink>
                  <SidebarMenuLink href="#" active>
                    <TypographySpan>Users</TypographySpan>
                  </SidebarMenuLink>
                </SidebarMenuGroupContent>
              </SidebarMenuGroup>
              <SidebarMenuGroup>
                <SidebarMenuGroupHeader>
                  <TypographySpan>Me</TypographySpan>
                </SidebarMenuGroupHeader>
                <SidebarMenuGroupContent>
                  <SidebarMenuLink href="#">
                    <TypographySpan>Emails</TypographySpan>
                  </SidebarMenuLink>
                  <SidebarMenuLink href="#">
                    <TypographySpan>Notifications</TypographySpan>
                  </SidebarMenuLink>
                  <SidebarMenuLink href="#">
                    <TypographySpan>Profile</TypographySpan>
                  </SidebarMenuLink>
                </SidebarMenuGroupContent>
              </SidebarMenuGroup>
            </SidebarMenu>

            <SidebarMenu>
              <SidebarMenuGroup>
                <SidebarMenuGroupHeader>
                  <TypographySpan>Administration</TypographySpan>
                </SidebarMenuGroupHeader>
                <SidebarMenuGroupContent>
                  <SidebarMenuLink href="#">
                    <SidebarMenuItemIcon>
                      <Building2Icon />
                    </SidebarMenuItemIcon>
                    <TypographySpan>Customers</TypographySpan>
                  </SidebarMenuLink>
                  <SidebarMenuLink href="#">
                    <SidebarMenuItemIcon>
                      <ShieldIcon />
                    </SidebarMenuItemIcon>
                    <TypographySpan>Roles</TypographySpan>
                  </SidebarMenuLink>
                  <SidebarMenuLink href="#" active>
                    <SidebarMenuItemIcon>
                      <UsersIcon />
                    </SidebarMenuItemIcon>
                    <TypographySpan>Users</TypographySpan>
                  </SidebarMenuLink>
                </SidebarMenuGroupContent>
              </SidebarMenuGroup>
              <SidebarMenuGroup>
                <SidebarMenuGroupHeader>
                  <TypographySpan>Me</TypographySpan>
                </SidebarMenuGroupHeader>
                <SidebarMenuGroupContent>
                  <SidebarMenuLink href="#">
                    <SidebarMenuItemIcon>
                      <MailIcon />
                    </SidebarMenuItemIcon>
                    <TypographySpan>Emails</TypographySpan>
                  </SidebarMenuLink>
                  <SidebarMenuLink href="#">
                    <SidebarMenuItemIcon>
                      <BellIcon />
                    </SidebarMenuItemIcon>
                    <TypographySpan>Notifications</TypographySpan>
                  </SidebarMenuLink>
                  <SidebarMenuLink href="#">
                    <SidebarMenuItemIcon>
                      <CircleUserIcon />
                    </SidebarMenuItemIcon>
                    <TypographySpan>Profile</TypographySpan>
                  </SidebarMenuLink>
                </SidebarMenuGroupContent>
              </SidebarMenuGroup>
            </SidebarMenu>

            <SidebarMenu>
              <SidebarMenuGroup>
                <SidebarMenuGroupHeader>
                  <SidebarMenuItemIcon>
                    <ShieldHalfIcon />
                  </SidebarMenuItemIcon>
                  <TypographySpan>Administration</TypographySpan>
                </SidebarMenuGroupHeader>
                <SidebarMenuGroupContent>
                  <SidebarMenuLink href="#">
                    <TypographySpan>Customers</TypographySpan>
                  </SidebarMenuLink>
                  <SidebarMenuLink href="#">
                    <TypographySpan>Roles</TypographySpan>
                  </SidebarMenuLink>
                  <SidebarMenuLink active>
                    <TypographySpan>Users</TypographySpan>
                  </SidebarMenuLink>
                </SidebarMenuGroupContent>
              </SidebarMenuGroup>
              <SidebarMenuGroup>
                <SidebarMenuGroupHeader>
                  <SidebarMenuItemIcon>
                    <CircleUserIcon />
                  </SidebarMenuItemIcon>
                  <TypographySpan>Me</TypographySpan>
                </SidebarMenuGroupHeader>
                <SidebarMenuGroupContent>
                  <SidebarMenuLink href="#">
                    <TypographySpan>Emails</TypographySpan>
                  </SidebarMenuLink>
                  <SidebarMenuLink href="#">
                    <TypographySpan>Notifications</TypographySpan>
                  </SidebarMenuLink>
                  <SidebarMenuLink href="#">
                    <TypographySpan>Profile</TypographySpan>
                  </SidebarMenuLink>
                </SidebarMenuGroupContent>
              </SidebarMenuGroup>
            </SidebarMenu>

            <SidebarMenu>
              <SidebarMenuGroup>
                <SidebarMenuGroupHeader>
                  <SidebarMenuItemIcon>
                    <ShieldHalfIcon />
                  </SidebarMenuItemIcon>
                  <TypographySpan>Administration</TypographySpan>
                </SidebarMenuGroupHeader>
                <SidebarMenuGroupContent>
                  <SidebarMenuLink href="#">
                    <TypographySpan>Customers</TypographySpan>
                  </SidebarMenuLink>
                  <SidebarMenuLink href="#">
                    <TypographySpan>Roles</TypographySpan>
                  </SidebarMenuLink>
                  <SidebarMenuLink active>
                    <TypographySpan>Users</TypographySpan>
                  </SidebarMenuLink>
                </SidebarMenuGroupContent>
              </SidebarMenuGroup>
              <SidebarMenuGroup>
                <SidebarMenuGroupHeader>
                  <SidebarMenuItemIcon>
                    <CircleUserIcon />
                  </SidebarMenuItemIcon>
                  <TypographySpan>Me</TypographySpan>
                </SidebarMenuGroupHeader>
                <SidebarMenuGroupContent>
                  <SidebarMenuLink href="#">
                    <TypographySpan>Emails</TypographySpan>
                  </SidebarMenuLink>
                  <SidebarMenuLink href="#">
                    <TypographySpan>Notifications</TypographySpan>
                  </SidebarMenuLink>
                  <SidebarMenuLink href="#">
                    <TypographySpan>Profile</TypographySpan>
                  </SidebarMenuLink>
                </SidebarMenuGroupContent>
              </SidebarMenuGroup>
            </SidebarMenu>
          </div>

          <div className="flex flex-row gap-20">
            <SidebarMenu>
              <SidebarMenuLink href="#">
                <TypographySpan>Customers</TypographySpan>
              </SidebarMenuLink>
              <SidebarMenuLink href="#">
                <TypographySpan>Roles</TypographySpan>
              </SidebarMenuLink>
              <SidebarMenuLink active>
                <TypographySpan>Users</TypographySpan>
              </SidebarMenuLink>
              <SidebarMenuLink href="#">
                <TypographySpan>Emails</TypographySpan>
              </SidebarMenuLink>
              <SidebarMenuLink href="#">
                <TypographySpan>Notifications</TypographySpan>
              </SidebarMenuLink>
              <SidebarMenuLink href="#">
                <TypographySpan>Profile</TypographySpan>
              </SidebarMenuLink>
            </SidebarMenu>

            <SidebarMenu>
              <SidebarMenuLink href="#">
                <SidebarMenuItemIcon>
                  <Building2Icon />
                </SidebarMenuItemIcon>
                <TypographySpan>Customers</TypographySpan>
              </SidebarMenuLink>
              <SidebarMenuLink href="#">
                <SidebarMenuItemIcon>
                  <ShieldIcon />
                </SidebarMenuItemIcon>
                <TypographySpan>Roles</TypographySpan>
              </SidebarMenuLink>
              <SidebarMenuLink active>
                <SidebarMenuItemIcon>
                  <UsersIcon />
                </SidebarMenuItemIcon>
                <TypographySpan>Users</TypographySpan>
              </SidebarMenuLink>
              <SidebarMenuLink href="#">
                <SidebarMenuItemIcon>
                  <MailIcon />
                </SidebarMenuItemIcon>
                <TypographySpan>Emails</TypographySpan>
              </SidebarMenuLink>
              <SidebarMenuLink href="#">
                <SidebarMenuItemIcon>
                  <BellIcon />
                </SidebarMenuItemIcon>
                <TypographySpan>Notifications</TypographySpan>
              </SidebarMenuLink>
              <SidebarMenuLink href="#">
                <SidebarMenuItemIcon>
                  <CircleUserIcon />
                </SidebarMenuItemIcon>
                <TypographySpan>Profile</TypographySpan>
              </SidebarMenuLink>
            </SidebarMenu>
          </div>
        </div>
      </SkeletonProvider>
    );
  },
};
