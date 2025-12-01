import { useCallback } from 'react';
import useSWR, { type SWRConfiguration, useSWRConfig } from 'swr';
import type { TFetchResponse, TQueryConfig, TState } from './types';
import { useFetcher } from './use-fetcher';

/**
 * A React hook for performing data fetching with SWR and managing API request states.
 *
 * @template TResponseData - The expected response data type.
 * @template TValidationErrorField - Type of validation error field names.
 * @template TErrorCode - Type of error codes.
 *
 * @param {string | URL} url - The request URL.
 * @param {SWRConfiguration<TFetchResponse<TResponseData, TValidationErrorField, TErrorCode>, Error>} [swrConfig]
 *        - Optional SWR configuration for caching and revalidation.
 * @param {RequestInit} [fetchOptions] - Optional fetch options such as method, headers, etc.
 * @param {TQueryConfig} [fetchConfig] - Optional fetch configuration, including timeouts and keys.
 *
 * @returns {TState<TResponseData, TValidationErrorField, TErrorCode> & { onRevalidate: () => void }}
 *          The state of the API request, including loading status, response data, errors, validation errors,
 *          and a function to revalidate the query.
 */
const useQuery = <
  TResponseData,
  TValidationErrorField extends string = string,
  TErrorCode extends string = string,
>(
  url?: string | URL,
  swrConfig?: SWRConfiguration<
    TFetchResponse<
      TResponseData | undefined,
      TValidationErrorField,
      TErrorCode
    >,
    Error
  >,
  fetchOptions?: RequestInit,
  fetchConfig?: TQueryConfig
): TState<TResponseData, TValidationErrorField, TErrorCode> & {
  onRevalidate: () => void;
} => {
  const fetcher = useCallback(useFetcher(), []);
  const swrKey = fetchConfig?.key ?? url?.toString() ?? null;
  const { mutate } = useSWRConfig();

  const {
    isLoading,
    isValidating,
    data: response,
    error,
  } = useSWR<
    TFetchResponse<
      TResponseData | undefined,
      TValidationErrorField,
      TErrorCode
    >,
    Error
  >(
    swrKey,
    () =>
      fetcher<TResponseData, TValidationErrorField, TErrorCode>(
        url ?? '',
        fetchOptions,
        fetchConfig
      ),
    swrConfig
  );

  const onRevalidate = () => mutate(swrKey);

  const status =
    response?.ok === undefined ? undefined : response?.ok ? 'success' : 'error';
  const data = response?.data?.data ?? undefined;

  return {
    loading: isLoading,
    validating: isValidating,
    data,
    error: response?.data?.error
      ? response?.data?.error
      : error
        ? { code: 'ERROR' as TErrorCode, message: error.toString() }
        : undefined,
    validationErrors: response?.data?.validationErrors,
    status,
    statusCode: response?.status,
    statusText: response?.statusText,
    onRevalidate,
  };
};

export { useQuery };
