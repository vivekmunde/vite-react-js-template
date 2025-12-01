import { ErrorBoundary } from '@/components/error-boundary';
import { LogoSvg } from '@/components/logo-svg';
import { DataTestIdRoot } from '@/components/ui/data-test-id';
import { Flex } from '@/components/ui/flex';
import {
  Layout,
  LayoutContent,
  LayoutSidebar,
  LayoutSidebarBody,
  LayoutSidebarFooter,
  LayoutSidebarHeader,
} from '@/components/ui/layout';
import { TypographyHeading } from '@/components/ui/typography';
import { useLoggedInOrganization } from '@/hooks/use-logged-in-organization';
import React from 'react';
import { Outlet } from 'react-router';
import { Me } from './components/me';
import { Menu } from './components/menu';
import { SwitchOrganization } from './components/switch-organization';
import { SystemMenu } from './components/switch-view';

const OrganizationPagesLayout: React.FC = () => {
  const { data: organization } = useLoggedInOrganization();

  return (
    <DataTestIdRoot value="organization">
      <Layout widths={['240px', '1fr']}>
        <LayoutSidebar side="left">
          <LayoutSidebarHeader sticky>
            <Flex
              direction={{ default: 'horizontal' }}
              justifyContent={{ default: 'between' }}
              alignItems={{ default: 'center' }}
              gap="lg"
            >
              <LogoSvg className="h-10" />
              <SystemMenu />
            </Flex>
          </LayoutSidebarHeader>
          <LayoutSidebarHeader>
            <Flex
              direction={{ default: 'horizontal' }}
              justifyContent={{ default: 'between' }}
              alignItems={{ default: 'center' }}
              gap="lg"
            >
              <TypographyHeading as="h4">
                {organization?.name}
              </TypographyHeading>
              <SwitchOrganization />
            </Flex>
          </LayoutSidebarHeader>
          <LayoutSidebarBody>
            <Menu />
          </LayoutSidebarBody>
          <LayoutSidebarFooter sticky>
            <Me />
          </LayoutSidebarFooter>
        </LayoutSidebar>
        <LayoutContent>
          <ErrorBoundary>
            <Outlet />
          </ErrorBoundary>
        </LayoutContent>
      </Layout>
    </DataTestIdRoot>
  );
};

export { OrganizationPagesLayout };
