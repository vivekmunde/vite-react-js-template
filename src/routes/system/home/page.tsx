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
import { Screen, ScreenContent } from '@/components/ui/screen';
import { TypographyDiv, TypographySpan } from '@/components/ui/typography';
import { useLoggedInUser } from '@/hooks/use-logged-in-user';
import { ArrowRightLeftIcon } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router';
import { Menu } from './components/menu';

const HomePage: React.FC = () => {
  const { data: user } = useLoggedInUser();

  return (
    <DataTestIdRoot value="system">
      <DataTestId value="home">
        <Layout>
          <LayoutContent>
            <LayoutContentHeader className="border-b">
              <LayoutContainer size="md">
                <Flex
                  direction={{ default: 'horizontal' }}
                  justifyContent={{ default: 'between' }}
                  gap="lg"
                >
                  <LogoSvg className="h-10" />
                  <DataTestId value="menu">
                    <Flex
                      direction={{ default: 'horizontal' }}
                      justifyContent={{ default: 'between' }}
                      alignItems={{ default: 'center' }}
                      gap="sm"
                    >
                      <DataTestId value="system">
                        <TypographyDiv className="font-bold text-xl px-3 h-10 rounded-md bg-muted flex flex-row items-center">
                          <Translation value="common/system" />
                        </TypographyDiv>
                      </DataTestId>
                      <DataTestId value="switch-view">
                        <Button asChild variant="secondary" className="h-10">
                          <Link to="/switch-view">
                            <ArrowRightLeftIcon />
                          </Link>
                        </Button>
                      </DataTestId>
                      <DataTestId value="me">
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
                  </DataTestId>
                </Flex>
              </LayoutContainer>
            </LayoutContentHeader>
            <LayoutContentBody>
              <LayoutContainer size="md">
                <DataTestIdRoot value="system">
                  <DataTestId value="home">
                    <Screen>
                      <ScreenContent className="px-0 py-6">
                        <ErrorBoundary>
                          <Menu />
                        </ErrorBoundary>
                      </ScreenContent>
                    </Screen>
                  </DataTestId>
                </DataTestIdRoot>
              </LayoutContainer>
            </LayoutContentBody>
          </LayoutContent>
        </Layout>
      </DataTestId>
    </DataTestIdRoot>
  );
};

export { HomePage };
