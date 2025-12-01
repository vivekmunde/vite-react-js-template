import { useState } from 'react';
import type { TMutateConfig, TState } from './types';
import { useFetch } from './use-fetch';

/**
 * Type definition for TOnMutate, representing a function for making HTTP mutation requests (e.g., POST, PUT).
 *
 * Generics:
 * - TRequestData: Type of data sent in the request.
 * - TResponseData: Type expected for the response data.
 * - TValidationErrorField: Type for validation error fields, constrained to string.
 * - TErrorCode: Type for error codes, constrained to string.
 *
 * Parameters:
 * - url: String representing the endpoint URL.
 * - requestData: Data sent with the request.
 * - options: Optional RequestInit object without "method" or "body" properties, for configuring the request.
 *
 * Returns a Promise with a response state.
 */
export type TOnMutate<
  TRequestData,
  TResponseData,
  TValidationErrorField extends string = string,
  TErrorCode extends string = string,
> = (
  url: string,
  requestData: TRequestData,
  options?: Omit<RequestInit, 'method' | 'body'> | undefined,
  config?: TMutateConfig
) => Promise<TState<TResponseData, TValidationErrorField, TErrorCode>>;

/**
 * A hook `useMutate` for handling mutation requests (e.g., POST, PUT, PATCH, DELETE).
 *
 * Returns:
 * - `state`: Current state of the request (TState).
 * - An object with methods (post, patch, put, delete) for making specific HTTP mutation requests.
 */
const useMutate = <
  TRequestData,
  TResponseData,
  TValidationErrorField extends string = string,
  TErrorCode extends string = string,
>(): [
  TState<TResponseData, TValidationErrorField, TErrorCode>,
  {
    post: TOnMutate<
      TRequestData,
      TResponseData,
      TValidationErrorField,
      TErrorCode
    >;
    patch: TOnMutate<
      TRequestData,
      TResponseData,
      TValidationErrorField,
      TErrorCode
    >;
    put: TOnMutate<
      TRequestData,
      TResponseData,
      TValidationErrorField,
      TErrorCode
    >;
    delete: TOnMutate<
      TRequestData,
      TResponseData,
      TValidationErrorField,
      TErrorCode
    >;
  },
] => {
  const [state, setState] = useState<
    TState<TResponseData, TValidationErrorField, TErrorCode>
  >({
    loading: false,
    validating: false,
    data: undefined,
    error: undefined,
    validationErrors: undefined,
    status: undefined,
    statusCode: undefined,
    statusText: undefined,
  });

  const fetcher = useFetch();

  /**
   * Higher-order function `mutator` for handling mutation requests.
   *
   * Accepts:
   * - method: The HTTP method for the request (e.g., POST, PATCH, PUT, DELETE).
   *
   * Returns:
   * - A function that performs the actual mutation request and updates the state.
   */
  const mutator =
    (method: 'POST' | 'PATCH' | 'PUT' | 'DELETE') =>
    async (
      url: string,
      requestData: TRequestData,
      options?: Omit<RequestInit, 'method' | 'body'> | undefined,
      config?: TMutateConfig
    ): Promise<TState<TResponseData, TValidationErrorField, TErrorCode>> => {
      if (!state.loading) {
        setState({
          loading: true,
          validating: false,
          data: undefined,
          error: undefined,
          validationErrors: undefined,
          status: undefined,
          statusCode: undefined,
          statusText: undefined,
        });

        const fn =
          method === 'POST'
            ? fetcher.post
            : method === 'PATCH'
              ? fetcher.patch
              : method === 'PUT'
                ? fetcher.put
                : method === 'DELETE'
                  ? fetcher.delete
                  : fetcher.post;

        const response = await fn<
          TRequestData,
          TResponseData,
          TValidationErrorField,
          TErrorCode
        >(url, requestData, options, { timeout: config?.timeout });

        const updatedState: TState<
          TResponseData,
          TValidationErrorField,
          TErrorCode
        > = {
          loading: false,
          validating: false,
          data: response.data?.data,
          error: response.data?.error,
          validationErrors: response.data?.validationErrors,
          status: response.ok ? 'success' : 'error',
          statusCode: response.status,
          statusText: response.statusText,
        };

        setState(updatedState);

        return updatedState;
      } else {
        return state;
      }
    };

  return [
    state,
    {
      post: mutator('POST'),
      patch: mutator('PATCH'),
      put: mutator('PUT'),
      delete: mutator('DELETE'),
    },
  ];
};

export { useMutate };
