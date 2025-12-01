import { SystemRBAC } from '@/components/rbac/system-rbac';
import { Translation } from '@/components/translation';
import { DataTestId } from '@/components/ui/data-test-id';
import {
  SidebarMenu,
  SidebarMenuGroup,
  SidebarMenuGroupContent,
  SidebarMenuGroupHeader,
  SidebarMenuItem,
} from '@/components/ui/sidebar-menu';
import { TypographySpan } from '@/components/ui/typography';
import {
  Building2Icon,
  MonitorXIcon,
  ServerCrashIcon,
  ShieldIcon,
  UsersIcon,
} from 'lucide-react';
import React from 'react';
import { Link, useLocation } from 'react-router';

const Menu: React.FC = () => {
  const pathname = useLocation();
  const isActive = (paths: string[]) =>
    paths.some(p => pathname.pathname.startsWith(p));

  return (
    <SidebarMenu>
      <SystemRBAC
        permissions={['READ_ORGANIZATION', 'READ_ROLE', 'READ_USER']}
        operator="OR"
      >
        <DataTestId value="administration">
          <SidebarMenuGroup>
            <SidebarMenuGroupHeader>
              <TypographySpan>
                <Translation value="common/administration" />
              </TypographySpan>
            </SidebarMenuGroupHeader>
            <SidebarMenuGroupContent>
              <SystemRBAC permissions={['READ_ORGANIZATION']}>
                <DataTestId value="organizations">
                  <SidebarMenuItem
                    asChild
                    active={isActive(['/system/organizations'])}
                  >
                    <Link to="/system/organizations">
                      <Building2Icon />
                      <TypographySpan>
                        <Translation
                          value="common/organization"
                          options={{ count: 2 }}
                        />
                      </TypographySpan>
                    </Link>
                  </SidebarMenuItem>
                </DataTestId>
              </SystemRBAC>

              <SystemRBAC permissions={['READ_ROLE']}>
                <DataTestId value="roles">
                  <SidebarMenuItem asChild active={isActive(['/system/roles'])}>
                    <Link to="/system/roles">
                      <ShieldIcon />
                      <TypographySpan>
                        <Translation
                          value="common/role"
                          options={{ count: 2 }}
                        />
                      </TypographySpan>
                    </Link>
                  </SidebarMenuItem>
                </DataTestId>
              </SystemRBAC>

              <SystemRBAC permissions={['READ_USER']}>
                <DataTestId value="users">
                  <SidebarMenuItem asChild active={isActive(['/system/users'])}>
                    <Link to="/system/users">
                      <UsersIcon />
                      <TypographySpan>
                        <Translation
                          value="common/user"
                          options={{ count: 2 }}
                        />
                      </TypographySpan>
                    </Link>
                  </SidebarMenuItem>
                </DataTestId>
              </SystemRBAC>
            </SidebarMenuGroupContent>
          </SidebarMenuGroup>
        </DataTestId>
      </SystemRBAC>

      <SystemRBAC permissions={['READ_ERROR']}>
        <DataTestId value="errors">
          <SidebarMenuGroup>
            <SidebarMenuGroupHeader>
              <TypographySpan>
                <Translation value="common/error" options={{ count: 2 }} />
              </TypographySpan>
            </SidebarMenuGroupHeader>
            <SidebarMenuGroupContent>
              <DataTestId value="api">
                <SidebarMenuItem
                  asChild
                  active={isActive(['/system/errors/api'])}
                >
                  <Link to="/system/errors/api">
                    <ServerCrashIcon />
                    <TypographySpan>
                      <Translation value="common/api" />
                    </TypographySpan>
                  </Link>
                </SidebarMenuItem>
              </DataTestId>

              <DataTestId value="ui">
                <SidebarMenuItem
                  asChild
                  active={isActive(['/system/errors/ui'])}
                >
                  <Link to="/system/errors/ui">
                    <MonitorXIcon />
                    <TypographySpan>
                      <Translation value="common/ui" />
                    </TypographySpan>
                  </Link>
                </SidebarMenuItem>
              </DataTestId>
            </SidebarMenuGroupContent>
          </SidebarMenuGroup>
        </DataTestId>
      </SystemRBAC>
    </SidebarMenu>
  );
};

export { Menu };
