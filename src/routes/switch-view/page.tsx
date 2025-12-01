import { ErrorBoundary } from '@/components/error-boundary';
import { LogoSvg } from '@/components/logo-svg';
import { SystemRBAC } from '@/components/rbac/system-rbac';
import { Button } from '@/components/ui/button';
import { DataTestId, DataTestIdRoot } from '@/components/ui/data-test-id';
import { Flex } from '@/components/ui/flex';
import { If } from '@/components/ui/if';
import {
  Layout,
  LayoutContainer,
  LayoutContent,
  LayoutContentBody,
  LayoutContentHeader,
} from '@/components/ui/layout';
import { Screen, ScreenContent } from '@/components/ui/screen';
import { TypographySpan } from '@/components/ui/typography';
import { useLoggedInUser } from '@/hooks/use-logged-in-user';
import React from 'react';
import { Link } from 'react-router';
import { OrganizationsMenu } from './components/organizations-menu';
import { SystemMenu } from './components/system-menu';

const SwitchViewPage: React.FC = () => {
  const { data: user } = useLoggedInUser();

  return (
    <DataTestIdRoot value="switch-view">
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
                    <Link to="/me">
                      <TypographySpan className="uppercase">
                        {(user?.name ?? user?.email)
                          ?.split(' ')
                          .map(name => name.charAt(0))
                          .join('')}
                      </TypographySpan>
                    </Link>
                  </Button>
                </DataTestId>
              </Flex>
            </LayoutContainer>
          </LayoutContentHeader>
          <LayoutContentBody>
            <LayoutContainer size="sm">
              <DataTestIdRoot value="switch-view">
                <Screen>
                  <ScreenContent className="px-0 pt-8 pb-6">
                    <ErrorBoundary>
                      <Flex direction={{ default: 'vertical' }} gap="lg">
                        <If condition={user?.category === 'SYSTEM'}>
                          <If.True>
                            <SystemRBAC
                              permissions={[
                                'READ_ANALYTICS',
                                'READ_ERROR',
                                'READ_ORGANIZATION',
                                'READ_ROLE',
                                'READ_USER',
                              ]}
                              operator="OR"
                            >
                              <SystemMenu />
                            </SystemRBAC>
                          </If.True>
                        </If>
                        <OrganizationsMenu />
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

export { SwitchViewPage };
