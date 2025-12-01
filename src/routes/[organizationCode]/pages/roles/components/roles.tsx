import { isEmpty, isError, isNoMatch } from '@/api/model-collection-response';
import { SearchParamsPager } from '@/components/search-params/pager';
import { SearchParamsInput } from '@/components/search-params/search-input';
import { Empty } from '@/components/status-messages/empty';
import { NoMatch } from '@/components/status-messages/no-match';
import { PageLoadError } from '@/components/status-messages/page-load-error';
import { Translation } from '@/components/translation';
import { ButtonGroup } from '@/components/ui/button-group';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { DataTestId, DataTestIdRoot } from '@/components/ui/data-test-id';
import { Flex } from '@/components/ui/flex';
import { Icon } from '@/components/ui/icon';
import { SkeletonProvider } from '@/components/ui/skeleton';
import { TypographyDiv, TypographyParagraph } from '@/components/ui/typography';
import { CheckCircleIcon } from 'lucide-react';
import React from 'react';
import { useRolesQuery } from '../hooks/use-roles-query';
import { CreateRole } from './create-role';
import { DeleteRole } from './delete-role';
import { UpdateRole } from './update-role';

const Roles: React.FC = () => {
  const state = useRolesQuery();
  const { loading, data } = state;

  return (
    <DataTestIdRoot value="roles">
      <Flex direction={{ default: 'vertical' }} gap="normal">
        <Flex
          direction={{ default: 'horizontal' }}
          justifyContent={{ default: 'between' }}
          gap="normal"
        >
          <SearchParamsInput prefix="roles" />
          <CreateRole />
        </Flex>
        <SkeletonProvider show={loading}>
          {(
            data?.items ?? [
              {
                id: '1',
                name: '........................',
                description:
                  '..............................................................................',
                permissionKeys: ['READ_ORGANIZATION', 'READ_ROLE', 'READ_USER'],
              },
              {
                id: '2',
                name: '........................',
                description:
                  '..............................................................................',
                permissionKeys: ['READ_ORGANIZATION', 'READ_ROLE', 'READ_USER'],
              },
              {
                id: '3',
                name: '........................',
                description:
                  '..............................................................................',
                permissionKeys: ['READ_ORGANIZATION', 'READ_ROLE', 'READ_USER'],
              },
            ]
          ).map(role => {
            return (
              <React.Fragment key={role.id}>
                <Card>
                  <CardHeader className="border-b">
                    <Flex
                      direction={{ default: 'vertical' }}
                      justifyContent={{ default: 'start' }}
                      gap="none"
                    >
                      <Flex
                        direction={{ default: 'horizontal' }}
                        justifyContent={{ default: 'between' }}
                        alignItems={{ default: 'center' }}
                        gap="normal"
                      >
                        <CardTitle>{role.name}</CardTitle>
                        <ButtonGroup gap="none">
                          <UpdateRole role={role} />
                          <DeleteRole role={role} />
                        </ButtonGroup>
                      </Flex>
                      <CardDescription>{role.description}</CardDescription>
                    </Flex>
                  </CardHeader>
                  {role.permissionKeys.map(permission => {
                    return (
                      <React.Fragment key={permission}>
                        <CardContent className="border-b last:border-b-0 border-dashed py-3">
                          <DataTestId value="permission">
                            <DataTestId value={permission}>
                              <div>
                                <Flex
                                  direction={{ default: 'horizontal' }}
                                  alignItems={{ default: 'center' }}
                                  gap="sm"
                                >
                                  <Icon>
                                    <CheckCircleIcon className="size-5 mt-1" />
                                  </Icon>
                                  <TypographyDiv className="font-semibold">
                                    <Translation
                                      value={`permission/${permission}.title`}
                                    />
                                  </TypographyDiv>
                                </Flex>
                                <TypographyParagraph className="pl-8 text-muted-foreground">
                                  <Translation
                                    value={`permission/${permission}.description`}
                                  />
                                </TypographyParagraph>
                              </div>
                            </DataTestId>
                          </DataTestId>
                        </CardContent>
                      </React.Fragment>
                    );
                  })}
                </Card>
              </React.Fragment>
            );
          })}

          {isEmpty(state) && <Empty />}

          {isNoMatch(state) && <NoMatch />}

          {isError(state) && <PageLoadError />}

          <SearchParamsPager prefix="roles" total={data?.total ?? 0} />
        </SkeletonProvider>
      </Flex>
    </DataTestIdRoot>
  );
};

export { Roles };
