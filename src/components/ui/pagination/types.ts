export type TPaginationArgs = {
  page: number;
  size?: number;
  numberOfPages?: number;
};

export type TPage = { page: number; type: 'page' | 'more' };

export type TPagination<T> = {
  page: number;
  size: number;
  pages: TPage[];
  numberOfPages: number;
  total: number;
  hasNext: boolean;
  hasPrev: boolean;
  items: T[];
};
