import {
  hasModels,
  isEmpty,
  isError,
  isNoMatch,
} from '@/api/model-collection-response';
import { SearchParamsPager } from '@/components/search-params/pager';
import { SearchParamsInput } from '@/components/search-params/search-input';
import { SearchParamsTableThSortButton } from '@/components/search-params/table';
import { Empty } from '@/components/status-messages/empty';
import { NoMatch } from '@/components/status-messages/no-match';
import { PageLoadError } from '@/components/status-messages/page-load-error';
import { Translation } from '@/components/translation';
import { Badge } from '@/components/ui/badge';
import { ButtonGroup } from '@/components/ui/button-group';
import { Card } from '@/components/ui/card';
import { DataTestId, DataTestIdRoot } from '@/components/ui/data-test-id';
import { Flex } from '@/components/ui/flex';
import { Repeat } from '@/components/ui/repeat';
import { SkeletonProvider } from '@/components/ui/skeleton';
import {
  Table,
  TableBody,
  TableHeader,
  TableTd,
  TableTh,
  TableThActions,
  TableThContent,
  TableTr,
} from '@/components/ui/table';
import { TypographySpan } from '@/components/ui/typography';
import React from 'react';
import { useOrganizationUsersQuery } from '../hooks/use-organization-users-query';
import { CreateUser } from './create-user';
import { RevokeUserAccess } from './revoke-user-access';
import { UpdateUser } from './update-user';

const UsersTable = () => {
  const state = useOrganizationUsersQuery();
  const { loading, data } = state;

  return (
    <DataTestIdRoot value="users">
      <Flex direction={{ default: 'vertical' }} gap="normal">
        <Flex
          direction={{ default: 'horizontal' }}
          justifyContent={{ default: 'between' }}
          gap="normal"
        >
          <SearchParamsInput className="w-96" prefix="users" />
          <CreateUser />
        </Flex>
        <SkeletonProvider show={loading}>
          <Card>
            <Table className="text-nowrap">
              <TableHeader>
                <TableTr>
                  <DataTestId value="name">
                    <TableTh sticky="left">
                      <TableThContent>
                        <TypographySpan>
                          <Translation value="common/name" />
                        </TypographySpan>
                        <TableThActions>
                          <SearchParamsTableThSortButton
                            name="name"
                            prefix="users"
                          />
                        </TableThActions>
                      </TableThContent>
                    </TableTh>
                  </DataTestId>

                  <DataTestId value="email">
                    <TableTh>
                      <TableThContent>
                        <TypographySpan>
                          <Translation value="common/email" />
                        </TypographySpan>
                        <TableThActions>
                          <SearchParamsTableThSortButton
                            name="email"
                            prefix="users"
                          />
                        </TableThActions>
                      </TableThContent>
                    </TableTh>
                  </DataTestId>

                  <DataTestId value="roles">
                    <TableTh>
                      <Translation value="common/role" options={{ count: 2 }} />
                    </TableTh>
                  </DataTestId>

                  <TableTh sticky="right" className="w-1" />
                </TableTr>
              </TableHeader>

              <TableBody>
                {loading && (
                  <Repeat length={15}>
                    <TableTr>
                      <DataTestId value="name">
                        <TableTd sticky="left">
                          <TypographySpan>..................</TypographySpan>
                        </TableTd>
                      </DataTestId>

                      <DataTestId value="email">
                        <TableTd>
                          <TypographySpan>
                            ....................................
                          </TypographySpan>
                        </TableTd>
                      </DataTestId>

                      <DataTestId value="roles">
                        <TableTd>
                          <Flex direction={{ default: 'horizontal' }} gap="sm">
                            <TypographySpan>..........</TypographySpan>
                            <TypographySpan>..........</TypographySpan>
                            <TypographySpan>..........</TypographySpan>
                          </Flex>
                        </TableTd>
                      </DataTestId>

                      <TableTd sticky="right" />
                    </TableTr>
                  </Repeat>
                )}

                {hasModels(state) &&
                  data?.items?.map(user => (
                    <React.Fragment key={user.id}>
                      <DataTestId value={user.email}>
                        <TableTr>
                          <DataTestId value="name">
                            <TableTd sticky="left">
                              <TypographySpan>{user.name}</TypographySpan>
                            </TableTd>
                          </DataTestId>

                          <DataTestId value="email">
                            <TableTd>
                              <TypographySpan>{user.email}</TypographySpan>
                            </TableTd>
                          </DataTestId>

                          <DataTestId value="roles">
                            <TableTd>
                              <Flex
                                direction={{ default: 'horizontal' }}
                                gap="sm"
                              >
                                {user.roles?.map(role => (
                                  <Badge key={role.id} variant="secondary">
                                    {role.name}
                                  </Badge>
                                ))}
                              </Flex>
                            </TableTd>
                          </DataTestId>

                          <DataTestId value="actions">
                            <TableTd sticky="right">
                              <ButtonGroup
                                justifyContent={{ default: 'end' }}
                                gap="none"
                              >
                                <UpdateUser user={user} />
                                <RevokeUserAccess user={user} />
                              </ButtonGroup>
                            </TableTd>
                          </DataTestId>
                        </TableTr>
                      </DataTestId>
                    </React.Fragment>
                  ))}

                {isEmpty(state) && (
                  <TableTr>
                    <TableTd colSpan={5}>
                      <Empty />
                    </TableTd>
                  </TableTr>
                )}

                {isNoMatch(state) && (
                  <TableTr>
                    <TableTd colSpan={5}>
                      <NoMatch />
                    </TableTd>
                  </TableTr>
                )}

                {isError(state) && (
                  <TableTr>
                    <TableTd colSpan={5}>
                      <PageLoadError />
                    </TableTd>
                  </TableTr>
                )}
              </TableBody>
            </Table>
          </Card>
          <SearchParamsPager prefix="orgs" total={data?.total ?? 0} />
        </SkeletonProvider>
      </Flex>
    </DataTestIdRoot>
  );
};

export { UsersTable };
