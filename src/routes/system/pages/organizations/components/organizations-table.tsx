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
import { sortPermissions } from '@/utils/sort-permissions';
import { CheckCircleIcon } from 'lucide-react';
import React from 'react';
import { useOrganizationsQuery } from '../hooks/use-organizations-query';
import { CreateOrganization } from './create-organization';
import { DeleteOrganization } from './delete-organization';
import { UpdateOrganization } from './update-organization';

const OrganizationsTable = () => {
  const state = useOrganizationsQuery();
  const { loading, data } = state;

  return (
    <DataTestIdRoot value="organizations">
      <Flex direction={{ default: 'vertical' }} gap="normal">
        <Flex
          direction={{ default: 'horizontal' }}
          justifyContent={{ default: 'between' }}
          gap="normal"
        >
          <SearchParamsInput className="w-96" prefix="orgs" />
          <CreateOrganization />
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
                            prefix="orgs"
                          />
                        </TableThActions>
                      </TableThContent>
                    </TableTh>
                  </DataTestId>

                  <DataTestId value="code">
                    <TableTh>
                      <TableThContent>
                        <TypographySpan>
                          <Translation value="common/code" />
                        </TypographySpan>
                        <TableThActions>
                          <SearchParamsTableThSortButton
                            name="code"
                            prefix="orgs"
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
                            prefix="orgs"
                          />
                        </TableThActions>
                      </TableThContent>
                    </TableTh>
                  </DataTestId>

                  <DataTestId value="permissions">
                    <TableTh>
                      <Translation
                        value="common/permission"
                        options={{ count: 2 }}
                      />
                    </TableTh>
                  </DataTestId>

                  <TableTh sticky="right" />
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

                      <DataTestId value="code">
                        <TableTd>
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

                      <DataTestId value="permissions">
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
                  data?.items?.map(organization => (
                    <React.Fragment key={organization.id}>
                      <DataTestId value={organization.code}>
                        <TableTr>
                          <DataTestId value="name">
                            <TableTd sticky="left">
                              <TypographySpan>
                                {organization.name}
                              </TypographySpan>
                            </TableTd>
                          </DataTestId>

                          <DataTestId value="code">
                            <TableTd className="uppercase">
                              <TypographySpan>
                                {organization.code}
                              </TypographySpan>
                            </TableTd>
                          </DataTestId>

                          <DataTestId value="email">
                            <TableTd>
                              <TypographySpan>
                                {organization.email}
                              </TypographySpan>
                            </TableTd>
                          </DataTestId>

                          <DataTestId value="permissions">
                            <TableTd>
                              <Flex
                                direction={{ default: 'horizontal' }}
                                gap="sm"
                              >
                                {sortPermissions(
                                  organization.permissionKeys
                                ).map(permission => (
                                  <Badge key={permission} variant="secondary">
                                    <CheckCircleIcon />
                                    <Translation
                                      value={`permission/${permission}.title`}
                                    />
                                  </Badge>
                                ))}
                              </Flex>
                            </TableTd>
                          </DataTestId>

                          <DataTestId value="actions">
                            <TableTd sticky="right">
                              <ButtonGroup gap="none">
                                <UpdateOrganization
                                  organization={organization}
                                />
                                <DeleteOrganization
                                  organization={organization}
                                />
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

export { OrganizationsTable };
