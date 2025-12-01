import type { TFetchConfig } from './types';
import { useFetcher } from './use-fetcher';

/**
 * A hook to handle fetch requests with support for request queuing and cancellation.
 * Provides methods for GET, POST, PUT, PATCH, and DELETE requests.
 * @returns {object} An object containing fetch methods for various HTTP verbs.
 */
const useFetch = () => {
  const fetcher = useFetcher();

  return {
    /**
     * Performs a fetch request using the configured fetcher.
     */
    fetch: fetcher,

    /**
     * GET request helper method.
     * @template TResponseData - The expected response data type.
     * @param {string | URL} url - The endpoint to send the request to.
     * @param {RequestInit} [options] - Fetch options excluding method and body.
     * @param {TFetchConfig} [config] - Optional timeout and key-based config.
     * @returns {Promise<TFetchResponse<TResponseData | undefined>>} The fetch response.
     */
    get: async <
      TResponseData,
      TValidationErrorField extends string = string,
      TErrorCode extends string = string,
    >(
      url: string | URL,
      options?: Omit<RequestInit, 'method' | 'body'>,
      config?: TFetchConfig
    ) => {
      const derivedOptions: RequestInit = {
        ...options,
        method: 'GET',
      };
      return await fetcher<TResponseData, TValidationErrorField, TErrorCode>(
        url,
        derivedOptions,
        config
      );
    },

    /**
     * POST request helper method.
     * @template TRequestData - The request data type.
     * @template TResponseData - The response data type.
     * @param {string | URL} url - The endpoint to send the request to.
     * @param {TRequestData} requestData - The data to be sent in the request body.
     * @param {RequestInit} [options] - Fetch options excluding method and body.
     * @param {TFetchConfig} [config] - Optional timeout and key-based config.
     * @returns {Promise<TFetchResponse<TResponseData | undefined>>} The fetch response.
     */
    post: async <
      TRequestData,
      TResponseData,
      TValidationErrorField extends string = string,
      TErrorCode extends string = string,
    >(
      url: string | URL,
      requestData: TRequestData,
      options?: Omit<RequestInit, 'method' | 'body'>,
      config?: TFetchConfig
    ) => {
      const derivedOptions: RequestInit = {
        ...options,
        method: 'POST',
        body: requestData ? JSON.stringify(requestData) : undefined,
      };
      return await fetcher<TResponseData, TValidationErrorField, TErrorCode>(
        url,
        derivedOptions,
        config
      );
    },

    /**
     * PUT request helper method.
     * @template TRequestData - The request data type.
     * @template TResponseData - The response data type.
     * @param {string | URL} url - The endpoint to send the request to.
     * @param {TRequestData} requestData - The data to be sent in the request body.
     * @param {RequestInit} [options] - Fetch options excluding method and body.
     * @param {TFetchConfig} [config] - Optional timeout and key-based config.
     * @returns {Promise<TFetchResponse<TResponseData | undefined>>} The fetch response.
     */
    put: async <
      TRequestData,
      TResponseData,
      TValidationErrorField extends string = string,
      TErrorCode extends string = string,
    >(
      url: string | URL,
      requestData: TRequestData,
      options?: Omit<RequestInit, 'method' | 'body'>,
      config?: TFetchConfig
    ) => {
      const derivedOptions: RequestInit = {
        ...options,
        method: 'PUT',
        body: requestData ? JSON.stringify(requestData) : undefined,
      };
      return await fetcher<TResponseData, TValidationErrorField, TErrorCode>(
        url,
        derivedOptions,
        config
      );
    },

    /**
     * PATCH request helper method.
     * @template TRequestData - The request data type.
     * @template TResponseData - The response data type.
     * @param {string | URL} url - The endpoint to send the request to.
     * @param {TRequestData} requestData - The data to be sent in the request body.
     * @param {RequestInit} [options] - Fetch options excluding method and body.
     * @param {TFetchConfig} [config] - Optional timeout and key-based config.
     * @returns {Promise<TFetchResponse<TResponseData | undefined>>} The fetch response.
     */
    patch: async <
      TRequestData,
      TResponseData,
      TValidationErrorField extends string = string,
      TErrorCode extends string = string,
    >(
      url: string | URL,
      requestData: TRequestData,
      options?: Omit<RequestInit, 'method' | 'body'>,
      config?: TFetchConfig
    ) => {
      const derivedOptions: RequestInit = {
        ...options,
        method: 'PATCH',
        body: requestData ? JSON.stringify(requestData) : undefined,
      };
      return await fetcher<TResponseData, TValidationErrorField, TErrorCode>(
        url,
        derivedOptions,
        config
      );
    },

    /**
     * DELETE request helper method.
     * @template TRequestData - The request data type.
     * @template TResponseData - The response data type.
     * @param {string | URL} url - The endpoint to send the request to.
     * @param {TRequestData} requestData - The data to be sent in the request body.
     * @param {RequestInit} [options] - Fetch options excluding method and body.
     * @param {TFetchConfig} [config] - Optional timeout and key-based config.
     * @returns {Promise<TFetchResponse<TResponseData | undefined>>} The fetch response.
     */
    delete: async <
      TRequestData,
      TResponseData,
      TValidationErrorField extends string = string,
      TErrorCode extends string = string,
    >(
      url: string | URL,
      requestData: TRequestData,
      options?: Omit<RequestInit, 'method' | 'body'>,
      config?: TFetchConfig
    ) => {
      const derivedOptions: RequestInit = {
        ...options,
        method: 'DELETE',
        body: requestData ? JSON.stringify(requestData) : undefined,
      };
      return await fetcher<TResponseData, TValidationErrorField, TErrorCode>(
        url,
        derivedOptions,
        config
      );
    },
  };
};

export { useFetch };
