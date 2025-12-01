import { isEmpty, isError, isNoMatch } from '@/api/model-collection-response';
import { SearchParamsPager } from '@/components/search-params/pager';
import { SearchParamsInput } from '@/components/search-params/search-input';
import { Empty } from '@/components/status-messages/empty';
import { NoMatch } from '@/components/status-messages/no-match';
import { PageLoadError } from '@/components/status-messages/page-load-error';
import { Badge } from '@/components/ui/badge';
import { ButtonGroup } from '@/components/ui/button-group';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { DataTestIdRoot } from '@/components/ui/data-test-id';
import { Flex } from '@/components/ui/flex';
import { SkeletonProvider } from '@/components/ui/skeleton';
import { TypographyParagraph } from '@/components/ui/typography';
import React from 'react';
import { useProjectsQuery } from '../hooks/use-projects-query';
import { CreateProject } from './create-project';
import { DeleteProject } from './delete-project';
import { UpdateProject } from './update-project';

const Projects: React.FC = () => {
  const state = useProjectsQuery();
  const { loading, data } = state;

  return (
    <DataTestIdRoot value="projects">
      <Flex direction={{ default: 'vertical' }} gap="normal">
        <Flex
          direction={{ default: 'horizontal' }}
          justifyContent={{ default: 'between' }}
          gap="normal"
        >
          <SearchParamsInput prefix="projects" />
          <CreateProject />
        </Flex>
        <SkeletonProvider show={loading}>
          {(
            data?.items ?? [
              {
                id: '1',
                name: '........................',
                description:
                  '..............................................................................',
                documentNumberPrefix: '.....',
              },
              {
                id: '2',
                name: '........................',
                description:
                  '..............................................................................',
                documentNumberPrefix: '.....',
              },
              {
                id: '3',
                name: '........................',
                description:
                  '..............................................................................',
                documentNumberPrefix: '.....',
              },
            ]
          ).map(project => {
            return (
              <React.Fragment key={project.id}>
                <Card>
                  <CardHeader
                    className={
                      project.description && project.description.length > 0
                        ? 'border-b'
                        : undefined
                    }
                  >
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
                        <CardTitle className="min-w-[200px]">
                          {project.name}
                        </CardTitle>
                        <ButtonGroup gap="none">
                          <UpdateProject project={project} />
                          <DeleteProject project={project} />
                        </ButtonGroup>
                      </Flex>
                      <Badge>{project.documentNumberPrefix}</Badge>
                    </Flex>
                  </CardHeader>
                  {project.description && project.description.length > 0 && (
                    <CardContent>
                      <TypographyParagraph className="whitespace-pre-wrap">
                        {project.description}
                      </TypographyParagraph>
                    </CardContent>
                  )}
                </Card>
              </React.Fragment>
            );
          })}

          {isEmpty(state) && <Empty />}

          {isNoMatch(state) && <NoMatch />}

          {isError(state) && <PageLoadError />}

          <SearchParamsPager prefix="projects" total={data?.total ?? 0} />
        </SkeletonProvider>
      </Flex>
    </DataTestIdRoot>
  );
};

export { Projects };
