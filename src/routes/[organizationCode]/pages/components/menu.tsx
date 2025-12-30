import { OrganizationRBAC } from '@/components/rbac/organization-rbac';
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
import { ShieldIcon, UsersIcon } from 'lucide-react';
import React from 'react';
import { Link, useLocation, useParams } from 'react-router';

const Menu: React.FC = () => {
  const { organizationCode } = useParams();
  const pathname = useLocation();
  const isActive = (paths: string[]) =>
    paths.some(p => pathname.pathname.startsWith(p));

  return (
    <SidebarMenu>
      <OrganizationRBAC
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
              <OrganizationRBAC permissions={['READ_ROLE']}>
                <DataTestId value="roles">
                  <SidebarMenuItem
                    asChild
                    active={isActive([`/${organizationCode}/roles`])}
                  >
                    <Link to={`/${organizationCode}/roles`}>
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
              </OrganizationRBAC>

              <OrganizationRBAC permissions={['READ_USER']}>
                <DataTestId value="users">
                  <SidebarMenuItem
                    asChild
                    active={isActive([`/${organizationCode}/users`])}
                  >
                    <Link to={`/${organizationCode}/users`}>
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
              </OrganizationRBAC>
            </SidebarMenuGroupContent>
          </SidebarMenuGroup>
        </DataTestId>
      </OrganizationRBAC>
    </SidebarMenu>
  );
};

export { Menu };
