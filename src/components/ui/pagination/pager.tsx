import { Flex } from '../flex';
import { useShowSkeleton } from '../skeleton/hooks';
import {
  Pagination,
  PaginationEllipsis,
  PaginationNext,
  PaginationPage,
  PaginationPageRange,
  PaginationPrevious,
} from './pagination';
import type { TPage } from './types';

export type TPagerProps = {
  page: number;
  size: number;
  pages: TPage[];
  numberOfPages: number;
  total: number;
  hasNext: boolean;
  hasPrev: boolean;
  onChange?: (page: number) => void;
};

const Pager: React.FC<TPagerProps> = ({
  page,
  size,
  pages,
  total,
  hasNext,
  hasPrev,
  onChange,
}) => {
  const showSkeleton = useShowSkeleton();

  const onPageChange = (pageNumber: number) => {
    if (onChange) {
      onChange(pageNumber);
    }
  };

  return showSkeleton || total > 0 ? (
    <Pagination className="max-w-fit">
      <Flex direction={{ default: 'horizontal' }} gap="sm">
        <PaginationPageRange page={page} size={size} total={total} />
        <PaginationPrevious
          disabled={!hasPrev}
          onClick={() => {
            onPageChange(page - 1);
          }}
        />
        {pages.map(it => {
          if (it.type === 'more') {
            return (
              <PaginationEllipsis
                key={it.page}
                onClick={() => {
                  onPageChange(it.page);
                }}
              />
            );
          }
          return (
            <PaginationPage
              key={it.page}
              active={it.page === page}
              onClick={() => {
                if (it.page !== page) {
                  onPageChange(it.page);
                }
              }}
            >
              <span>{it.page} </span>
            </PaginationPage>
          );
        })}
        <PaginationNext
          disabled={!hasNext}
          onClick={() => {
            onPageChange(page + 1);
          }}
        />
      </Flex>
    </Pagination>
  ) : null;
};

export { Pager };
