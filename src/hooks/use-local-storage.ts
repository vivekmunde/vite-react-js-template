import { createPublication, publish, subscribe } from 'pusu';
import { useEffect, useState } from 'react';

const localStoragePublication = createPublication<unknown>({
  name: 'localStorage',
});

const getLocalStorageKey = (key: string) => {
  return `q-${key}`;
};

const getLocalStorageItem = <T>(key: string, initialValue?: T) => {
  const item = localStorage.getItem(getLocalStorageKey(key));
  return item
    ? ((typeof item === 'string' ? item : JSON.parse(item)) as T)
    : (initialValue ?? undefined);
};

const setLocalStorageItem = <T>(key: string, value: T) => {
  localStorage.setItem(
    getLocalStorageKey(key),
    typeof value === 'string' ? value : JSON.stringify(value)
  );
};

const useLocalStorage = <T>(
  key: string,
  initialValue?: T
): [T | undefined, (value: T | undefined) => void] => {
  const [value, setValue] = useState<T | undefined>(() =>
    getLocalStorageItem(key, initialValue)
  );

  const setItem = (value: T | undefined) => {
    setValue(value);
    setLocalStorageItem(key, value);
  };

  useEffect(() => {
    const unsubscribe = subscribe(localStoragePublication, changedValue => {
      setItem(changedValue as T | undefined);
    });

    return () => unsubscribe();
  }, []);

  return [
    value,
    (value: T | undefined) => {
      publish(localStoragePublication, value);
    },
  ];
};

export { useLocalStorage };
