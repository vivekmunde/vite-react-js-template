import {
  Pager,
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationNext,
  PaginationPage,
  PaginationPageRange,
  PaginationPrevious,
  StatefulPaginationProvider,
  StatelessPaginationProvider,
} from '@/components/ui/pagination';
import { usePaginate } from '@/components/ui/pagination/use-paginate';
import { SkeletonProvider } from '@/components/ui/skeleton';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';

const data = Array.from({ length: 100 }).map((_, index) => index);

const meta = {
  title: 'Components/UI/Pagination',
  component: Pagination,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['default', 'sm'],
    },
  },
} satisfies Meta<typeof Pagination>;

export default meta;
type Story = StoryObj<typeof meta>;

export const _Story: Story = {
  args: {
    size: 'default',
  },
  render: props => {
    return (
      <Pagination {...props}>
        <PaginationContent>
          <PaginationPageRange page={1} size={5} total={100} />
          <PaginationItem>
            <PaginationPrevious />
          </PaginationItem>
          <PaginationItem>
            <PaginationPage active>1</PaginationPage>
          </PaginationItem>
          <PaginationItem>
            <PaginationPage>2</PaginationPage>
          </PaginationItem>
          <PaginationItem>
            <PaginationPage>3</PaginationPage>
          </PaginationItem>
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem>
            <PaginationNext />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    );
  },
};

export const Skeleton: Story = {
  args: {
    size: 'default',
  },
  render: props => {
    return (
      <SkeletonProvider show>
        <Pagination {...props}>
          <PaginationContent>
            <PaginationPageRange page={1} size={5} total={100} />
            <PaginationItem>
              <PaginationPrevious />
            </PaginationItem>
            <PaginationItem>
              <PaginationPage active>1</PaginationPage>
            </PaginationItem>
            <PaginationItem>
              <PaginationPage>2</PaginationPage>
            </PaginationItem>
            <PaginationItem>
              <PaginationPage>3</PaginationPage>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationNext />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </SkeletonProvider>
    );
  },
};

export const _UsePagination: Story = {
  render: props => {
    const [{ page, pages, size, total, hasNext, hasPrev }, paginate] =
      usePaginate(data, {
        page: 1,
        size: 5,
        numberOfPages: 5,
      });

    return (
      <Pagination {...props}>
        <PaginationContent>
          <PaginationPageRange page={page} size={size} total={total} />
          <PaginationPrevious
            disabled={!hasPrev}
            onClick={() => {
              paginate.onChange({ page: page - 1 });
            }}
          />
          {pages.map(it => {
            if (it.type === 'more') {
              return (
                <PaginationEllipsis
                  key={it.page}
                  onClick={() => {
                    paginate.onChange({ page: it.page });
                  }}
                />
              );
            }
            return (
              <PaginationPage
                key={it.page}
                active={it.page === page}
                onClick={() => {
                  paginate.onChange({ page: it.page });
                }}
              >
                <span>{it.page}</span>
              </PaginationPage>
            );
          })}
          <PaginationNext
            disabled={!hasNext}
            onClick={() => {
              paginate.onChange({ page: page + 1 });
            }}
          />
        </PaginationContent>
      </Pagination>
    );
  },
};

export const _StatefulPaginationProvider: Story = {
  render: props => {
    return (
      <StatefulPaginationProvider
        data={data}
        page={1}
        size={10}
        numberOfPages={5}
      >
        {({ page, pages, size, total, hasNext, hasPrev }, paginate) => (
          <Pagination {...props}>
            <PaginationContent>
              <PaginationPageRange page={page} size={size} total={total} />
              <PaginationPrevious
                disabled={!hasPrev}
                onClick={() => {
                  paginate.onChange({ page: page - 1 });
                }}
              />
              {pages.map(it => {
                if (it.type === 'more') {
                  return (
                    <PaginationEllipsis
                      key={it.page}
                      onClick={() => {
                        paginate.onChange({ page: it.page });
                      }}
                    />
                  );
                }
                return (
                  <PaginationPage
                    key={it.page}
                    active={it.page === page}
                    onClick={() => {
                      paginate.onChange({ page: it.page });
                    }}
                  >
                    <span>{it.page}</span>
                  </PaginationPage>
                );
              })}
              <PaginationNext
                disabled={!hasNext}
                onClick={() => {
                  paginate.onChange({ page: page + 1 });
                }}
              />
            </PaginationContent>
          </Pagination>
        )}
      </StatefulPaginationProvider>
    );
  },
};

export const _StatelessPaginationProvider: Story = {
  render: props => {
    const [currentPage, setPage] = useState(1);

    return (
      <StatelessPaginationProvider
        data={data}
        page={currentPage}
        size={10}
        numberOfPages={5}
      >
        {({ page, pages, size, total, hasNext, hasPrev }) => (
          <Pagination {...props}>
            <PaginationContent>
              <PaginationPageRange page={page} size={size} total={total} />
              <PaginationPrevious
                disabled={!hasPrev}
                onClick={() => {
                  setPage(page - 1);
                }}
              />
              {pages.map(it => {
                if (it.type === 'more') {
                  return (
                    <PaginationEllipsis
                      key={it.page}
                      onClick={() => {
                        setPage(it.page);
                      }}
                    />
                  );
                }
                return (
                  <PaginationPage
                    key={it.page}
                    active={it.page === page}
                    onClick={() => {
                      setPage(it.page);
                    }}
                  >
                    <span>{it.page}</span>
                  </PaginationPage>
                );
              })}
              <PaginationNext
                disabled={!hasNext}
                onClick={() => {
                  setPage(page + 1);
                }}
              />
            </PaginationContent>
          </Pagination>
        )}
      </StatelessPaginationProvider>
    );
  },
};

export const _Pager: Story = {
  render: () => {
    return (
      <StatefulPaginationProvider
        data={data}
        page={1}
        size={10}
        numberOfPages={5}
      >
        {(
          { page, pages, size, total, hasNext, hasPrev, numberOfPages },
          paginate
        ) => (
          <Pager
            page={page}
            size={size}
            pages={pages}
            numberOfPages={numberOfPages}
            total={total}
            hasNext={hasNext}
            hasPrev={hasPrev}
            onChange={page => {
              paginate.onChange({ page });
            }}
          />
        )}
      </StatefulPaginationProvider>
    );
  },
};

export const _PagerSkeleton: Story = {
  render: () => {
    return (
      <SkeletonProvider show>
        <StatefulPaginationProvider
          data={data}
          page={1}
          size={10}
          numberOfPages={5}
        >
          {(
            { page, pages, size, total, hasNext, hasPrev, numberOfPages },
            paginate
          ) => (
            <Pager
              page={page}
              size={size}
              pages={pages}
              numberOfPages={numberOfPages}
              total={total}
              hasNext={hasNext}
              hasPrev={hasPrev}
              onChange={page => {
                paginate.onChange({ page });
              }}
            />
          )}
        </StatefulPaginationProvider>
      </SkeletonProvider>
    );
  },
};
