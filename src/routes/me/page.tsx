import { ErrorBoundary } from '@/components/error-boundary';
import { LogoSvg } from '@/components/logo-svg';
import { Translation } from '@/components/translation';
import { Button } from '@/components/ui/button';
import { DataTestId, DataTestIdRoot } from '@/components/ui/data-test-id';
import { Flex } from '@/components/ui/flex';
import {
  Layout,
  LayoutContainer,
  LayoutContent,
  LayoutContentBody,
  LayoutContentHeader,
} from '@/components/ui/layout';
import {
  Screen,
  ScreenContent,
  ScreenHeader,
  ScreenTitle,
} from '@/components/ui/screen';
import { HomeIcon } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router';
import { Logout } from './components/logout';
import { Preferences } from './components/preferences';
import { MyProfile } from './components/profile';

const MePage: React.FC = () => {
  return (
    <DataTestIdRoot value="me">
      <Layout>
        <LayoutContent>
          <LayoutContentHeader className="border-b">
            <LayoutContainer size="sm">
              <Flex
                direction={{ default: 'horizontal' }}
                justifyContent={{ default: 'between' }}
                gap="lg"
              >
                <LogoSvg className="h-10" />
                <DataTestId value="menu">
                  <Button asChild variant="secondary" className="h-10">
                    <Link to="/switch-view">
                      <HomeIcon />
                    </Link>
                  </Button>
                </DataTestId>
              </Flex>
            </LayoutContainer>
          </LayoutContentHeader>
          <LayoutContentBody>
            <LayoutContainer size="sm">
              <DataTestIdRoot value="me">
                <Screen>
                  <ScreenHeader className="px-0">
                    <ScreenTitle>
                      <Translation value="common/me" />
                    </ScreenTitle>
                  </ScreenHeader>
                  <ScreenContent className="px-0">
                    <ErrorBoundary>
                      <Flex direction={{ default: 'vertical' }} gap="lg">
                        <MyProfile />
                        <Preferences />
                        <Logout />
                      </Flex>
                    </ErrorBoundary>
                  </ScreenContent>
                </Screen>
              </DataTestIdRoot>
            </LayoutContainer>
          </LayoutContentBody>
        </LayoutContent>
      </Layout>
    </DataTestIdRoot>
  );
};

export { MePage };
