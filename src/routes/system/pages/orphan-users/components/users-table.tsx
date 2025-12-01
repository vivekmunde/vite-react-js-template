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
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { DataTestId, DataTestIdRoot } from '@/components/ui/data-test-id';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
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
import { TypographyDiv, TypographySpan } from '@/components/ui/typography';
import { ChevronsUpDownIcon } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router';
import { useOrphanUsersQuery } from '../hooks/use-orphan-users-query';
import { DeleteUser } from './delete-user';

const UsersTable = () => {
  const state = useOrphanUsersQuery();
  const { loading, data } = state;

  return (
    <DataTestIdRoot value="users">
      <Flex direction={{ default: 'vertical' }} gap="normal">
        <Flex
          direction={{ default: 'horizontal' }}
          justifyContent={{ default: 'between' }}
          gap="normal"
        >
          <Flex direction={{ default: 'horizontal' }} gap="normal">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button>
                  <Translation value="common/orphan" />
                  <ChevronsUpDownIcon />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem asChild>
                  <Link to="/system/users">
                    <TypographyDiv>
                      <Translation value="common/system" />
                    </TypographyDiv>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/system/orphan-users">
                    <TypographyDiv>
                      <Translation value="common/orphan" />
                    </TypographyDiv>
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <SearchParamsInput className="w-96" prefix="users" />
          </Flex>
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

                          <DataTestId value="actions">
                            <TableTd sticky="right">
                              <DeleteUser user={user} />
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
