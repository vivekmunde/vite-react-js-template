import type { TState } from './types';

const hasData = <T>(state: TState<T>) => {
  const { data, status } = state;

  if (status === 'success') {
    return data !== undefined && data !== null;
  }

  return false;
};

const isEmpty = <T>(state: TState<T>) => {
  const { data, status } = state;

  if (status === 'success') {
    return data === undefined || data === null;
  }

  return false;
};

const isError = <T>(state: TState<T>) => {
  const { status } = state;

  return status === 'error';
};

export { hasData, isEmpty, isError };
