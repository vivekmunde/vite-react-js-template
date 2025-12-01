import { useSearchParams as useSearchParamsRouter } from 'react-router';

const getPrefixedKey = (key: string, prefix?: string) => {
  return prefix ? prefix + key.slice(0, 1).toUpperCase() + key.slice(1) : key;
};

const getKeyWithoutPrefix = (key: string, prefix?: string) => {
  if (!prefix) {
    return key;
  }

  const keyWithoutPrefix = key.slice(prefix.length);

  return keyWithoutPrefix.slice(0, 1).toLowerCase() + keyWithoutPrefix.slice(1);
};

const useSearchParams = <T extends Record<string, string>>(
  defaultInit?: T,
  prefix?: string
): [T, (params: Partial<T>) => void] => {
  const [searchParamsRouter, setSearchParamsRouter] = useSearchParamsRouter(
    Object.keys(defaultInit ?? {}).reduce(
      (acc, key) => {
        const value = defaultInit?.[key as keyof T];
        acc[getPrefixedKey(key, prefix)] = value ?? '';
        return acc;
      },
      {} as Record<string, string>
    )
  );

  const searchParams: T = {} as T;

  for (const [key, value] of searchParamsRouter.entries()) {
    searchParams[getKeyWithoutPrefix(key, prefix) as keyof T] = value as any; // eslint-disable-line @typescript-eslint/no-explicit-any
  }

  const setPrefixedSearchParams = (params: Partial<T>) => {
    for (const key of Object.keys(params)) {
      const value = params[key as keyof T];

      const prefixedKey = getPrefixedKey(key, prefix);

      if (value) {
        searchParamsRouter.set(prefixedKey, value);
      } else {
        searchParamsRouter.delete(prefixedKey);
      }
    }

    setSearchParamsRouter(searchParamsRouter);
  };

  return [searchParams, setPrefixedSearchParams] as const;
};

export { useSearchParams };
