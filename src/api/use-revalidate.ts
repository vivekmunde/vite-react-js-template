import { useSWRConfig } from 'swr';

const useRevalidate = () => {
  const { mutate } = useSWRConfig();
  return mutate;
};

export { useRevalidate };
