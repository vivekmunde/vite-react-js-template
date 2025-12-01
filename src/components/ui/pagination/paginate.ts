import type { TPage, TPagination, TPaginationArgs } from './types';

const paginate = <T>(data: T[], args: TPaginationArgs): TPagination<T> => {
  let page = args.page - 1;
  const size = args.size ?? 5;
  const pageNumbers = Array.from({ length: Math.ceil(data.length / size) }).map(
    (_, index) => index
  );
  const numberOfPages =
    args.numberOfPages ?? (pageNumbers.length > 0 ? pageNumbers.length : 5);

  const pages: TPage[] = [];
  const lastPageNumber = pageNumbers[pageNumbers.length - 1] ?? 0;
  const pagesStartIndex = Math.max(
    0,
    page - Math.floor((numberOfPages ?? 5) / 2)
  );

  Array.from({ length: numberOfPages }).forEach((_, index) => {
    const nextPageNumber = pagesStartIndex + index;
    if (nextPageNumber <= lastPageNumber) {
      pages.push({ page: nextPageNumber, type: 'page' });
    } else {
      const previousPageNumber =
        pagesStartIndex - (pagesStartIndex + index - lastPageNumber);
      if (previousPageNumber >= 0) {
        pages.splice(0, 0, {
          page: previousPageNumber,
          type: 'page',
        });
      }
    }
  });
  if (pages.length > 0 && pages[0].page - 1 >= 0) {
    pages.splice(0, 0, {
      page: pages[0].page - 1,
      type: 'more',
    });
  }
  if (pages.length > 0 && pages[pages.length - 1].page + 1 <= lastPageNumber) {
    pages.push({
      page: pages[pages.length - 1].page + 1,
      type: 'more',
    });
  }

  let startIndex = page * size;
  if (startIndex >= data.length) {
    page = pageNumbers[pageNumbers.length - 1] ?? 0;
    startIndex = page * size;
  }
  const items: T[] = data.slice(startIndex, startIndex + size);

  const hasPrev = page > 0;
  const hasNext = page < pageNumbers.length - 1;

  return {
    page: page + 1,
    size,
    pages: pages.map(it => ({ ...it, page: it.page + 1 })),
    numberOfPages,
    total: data.length,
    hasNext,
    hasPrev,
    items,
  };
};

export { paginate };
