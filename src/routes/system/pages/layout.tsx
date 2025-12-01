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
import React from 'react';
import { Outlet } from 'react-router';
import { Me } from './components/me';
import { Menu } from './components/menu';
import { SwitchView } from './components/switch-view';

const SystemPagesLayout: React.FC = () => {
  return (
    <DataTestIdRoot value="system">
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
              <SwitchView />
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

export { SystemPagesLayout };
