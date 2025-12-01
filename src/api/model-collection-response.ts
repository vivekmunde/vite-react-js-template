import type { TModelCollection, TState } from './types';

const hasModels = <T>(state: TState<TModelCollection<T>>) => {
  const { data, status } = state;

  if (status === 'success') {
    return data && data.items && data.items.length > 0;
  }

  return false;
};

const isEmpty = <T>(state: TState<TModelCollection<T>>) => {
  const { data, status } = state;

  if (status === 'success') {
    return data && data.items && data.items.length === 0 && !data.search;
  }

  return false;
};

const isNoMatch = <T>(state: TState<TModelCollection<T>>) => {
  const { data, status } = state;

  if (status === 'success') {
    return (
      data &&
      data.items &&
      data.items.length === 0 &&
      data.search &&
      data.search.length > 0
    );
  }

  return false;
};

const isError = <T>(state: TState<TModelCollection<T>>) => {
  const { status } = state;

  return status === 'error';
};

export { hasModels, isEmpty, isError, isNoMatch };
