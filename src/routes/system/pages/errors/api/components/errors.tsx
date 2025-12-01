import { isEmpty, isError, isNoMatch } from '@/api/model-collection-response';
import { SearchParamsPager } from '@/components/search-params/pager';
import { SearchParamsInput } from '@/components/search-params/search-input';
import { Empty } from '@/components/status-messages/empty';
import { NoMatch } from '@/components/status-messages/no-match';
import { PageLoadError } from '@/components/status-messages/page-load-error';
import { Translation } from '@/components/translation';
import { Card, CardContent } from '@/components/ui/card';
import { DataTestId, DataTestIdRoot } from '@/components/ui/data-test-id';
import {
  Details,
  DetailsItem,
  DetailsItemLabel,
  DetailsItemValue,
} from '@/components/ui/details';
import { Flex } from '@/components/ui/flex';
import { SkeletonProvider } from '@/components/ui/skeleton';
import { format } from 'date-fns';
import React from 'react';
import { PreText } from '../../components/pre-text';
import { useApiErrorsQuery } from '../hooks/use-errors-users-query';

const Errors: React.FC = () => {
  const state = useApiErrorsQuery();
  const { loading, data } = state;

  return (
    <DataTestIdRoot value="errors">
      <DataTestId value="api">
        <Flex direction={{ default: 'vertical' }} gap="normal">
          <SearchParamsInput prefix="errors" />
          <SkeletonProvider show={loading}>
            {(
              data?.items ?? [
                {
                  id: '1',
                  userId: '1',
                  url: 'https://example.com',
                  createdAt: new Date(),
                  error: {
                    statusCode: 500,
                    message:
                      '.................................................',
                    stack:
                      '.....................................................................................................................................................................................................................................................',
                  },
                },
                {
                  id: '2',
                  userId: '2',
                  url: 'https://example.com',
                  createdAt: new Date(),
                  error: {
                    statusCode: 500,
                    message:
                      '.................................................',
                    stack:
                      '.....................................................................................................................................................................................................................................................',
                  },
                },
                {
                  id: '3',
                  userId: '3',
                  url: 'https://example.com',
                  createdAt: new Date(),
                  error: {
                    statusCode: 500,
                    message:
                      '.................................................',
                    stack:
                      '.....................................................................................................................................................................................................................................................',
                  },
                },
              ]
            ).map(apiError => (
              <React.Fragment key={apiError.id}>
                <Card>
                  <CardContent>
                    <Details
                      columns={{ default: 2 }}
                      orientation="vertical"
                      gap="default"
                    >
                      <DataTestId value="user-id">
                        <DetailsItem>
                          <DetailsItemLabel>
                            <Translation value="common/userId" />
                          </DetailsItemLabel>
                          <DetailsItemValue>{apiError.userId}</DetailsItemValue>
                        </DetailsItem>
                      </DataTestId>

                      <DataTestId value="created-at">
                        <DetailsItem>
                          <DetailsItemLabel className="capitalize">
                            <Translation value="common/createdAt" />
                          </DetailsItemLabel>
                          <DetailsItemValue>
                            {format(apiError.createdAt, 'dd MMM yyyy HH:mm:ss')}
                          </DetailsItemValue>
                        </DetailsItem>
                      </DataTestId>

                      <DataTestId value="url">
                        <DetailsItem colSpan={2}>
                          <DetailsItemLabel>
                            <Translation value="common/url" />
                          </DetailsItemLabel>
                          <DetailsItemValue>{apiError.url}</DetailsItemValue>
                        </DetailsItem>
                      </DataTestId>

                      <DataTestId value="request">
                        <DetailsItem colSpan={2} gap="lg">
                          <DetailsItemLabel>
                            <Translation value="common/request" />
                          </DetailsItemLabel>
                          <DetailsItemValue>
                            <PreText value={JSON.stringify(apiError.request)} />
                          </DetailsItemValue>
                        </DetailsItem>
                      </DataTestId>

                      <DataTestId value="status-code">
                        <DetailsItem colSpan={2} gap="lg">
                          <DetailsItemLabel>
                            <Translation value="common/statusCode" />
                          </DetailsItemLabel>
                          <DetailsItemValue>
                            {apiError.error.statusCode ?? '-'}
                          </DetailsItemValue>
                        </DetailsItem>
                      </DataTestId>

                      <DataTestId value="error-name">
                        <DetailsItem colSpan={2} gap="lg">
                          <DetailsItemLabel>
                            <Translation value="common/name" />
                          </DetailsItemLabel>
                          <DetailsItemValue>
                            <PreText value={apiError.error.message} />
                          </DetailsItemValue>
                        </DetailsItem>
                      </DataTestId>

                      <DataTestId value="error-stack">
                        <DetailsItem colSpan={2} gap="lg">
                          <DetailsItemLabel>
                            <Translation value="common/stack" />
                          </DetailsItemLabel>
                          <DetailsItemValue>
                            <PreText value={apiError.error.stack} />
                          </DetailsItemValue>
                        </DetailsItem>
                      </DataTestId>
                    </Details>
                  </CardContent>
                </Card>
              </React.Fragment>
            ))}

            {isEmpty(state) && <Empty />}

            {isNoMatch(state) && <NoMatch />}

            {isError(state) && <PageLoadError />}

            <SearchParamsPager prefix="errors" total={data?.total ?? 0} />
          </SkeletonProvider>
        </Flex>
      </DataTestId>
    </DataTestIdRoot>
  );
};

export { Errors };
