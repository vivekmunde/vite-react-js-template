/**
 * Represents field-level validation errors.
 *
 * @template TValidationErrorField - Keys representing the names of fields with validation errors.
 */
export type TValidationError<TValidationErrorField extends string = string> =
  Partial<
    Record<TValidationErrorField, string> & {
      /** Optional general validation messages not tied to a specific field. */
      messages?: string[];
    }
  >;

/**
 * Represents a generic error object.
 *
 * @template TErrorCode - Type of error code.
 */
export type TError<TErrorCode> = {
  /** A machine-readable error code. */
  code: TErrorCode;
  /** A human-readable error message. */
  message: string;
};

/**
 * Standardized structure for API response bodies.
 *
 * @template TResponseData - Type of the successful response data.
 * @template TValidationErrorField - Type of keys for field-level validation errors.
 * @template TErrorCode - Type of possible error codes.
 */
export type TResponseBody<
  TResponseData,
  TValidationErrorField extends string,
  TErrorCode,
> = {
  /** Actual data returned from the API, if the request was successful. */
  data?: TResponseData;
  /** List of general errors returned by the API. */
  error?: TError<TErrorCode>;
  /** Field-specific validation errors. */
  validationErrors?: TValidationError<TValidationErrorField>;
};

/**
 * Response type for fetch requests.
 *
 * @template TData - The expected data type.
 * @template TValidationErrorField - Type of validation error field names.
 * @template TErrorCode - Type of error codes.
 */
export type TFetchResponse<
  TData,
  TValidationErrorField extends string = string,
  TErrorCode extends string = string,
> = {
  /** Response body containing the requested data, general errors, or validation errors. */
  data: TResponseBody<TData, TValidationErrorField, TErrorCode> | undefined;
  /** Indicates whether the request was successful (true) or failed (false). */
  ok: boolean;
  /** HTTP status code returned from the request. */
  status: number;
  /** HTTP status text returned from the request. */
  statusText: string;
};

/**
 * Configuration options for the connection, including request timeouts.
 */
export type TConnectionConfig = {
  /** Optional timeout in milliseconds for requests. */
  timeout?: number;
};

/**
 * Configuration for fetch requests.
 */
export type TFetchConfig = {
  /** Optional timeout in milliseconds for the request. */
  timeout?: number;
};

/**
 * Configuration for query requests.
 */
export type TQueryConfig = {
  /** Optional timeout in milliseconds for the request. */
  timeout?: number;
  /** Unique key used for caching or identification. */
  key?: string;
};

/**
 * Configuration for mutation requests.
 */
export type TMutateConfig = {
  /** Optional timeout in milliseconds for the request. */
  timeout?: number;
};

/**
 * Arguments passed to the onBeforeFetch callback.
 */
export type TOnBeforeFetchArgs = {
  /** The request URL. */
  url: string | URL;
  /** Optional request configuration options. */
  options?: RequestInit;
  /** Optional fetch configuration. */
  config?: TFetchConfig;
};

/**
 * Hook function executed before a fetch request.
 *
 * @param args - The fetch request details before execution.
 */
export type TOnBeforeFetch = (args: TOnBeforeFetchArgs) => void;

/**
 * Arguments passed to the onAfterFetch callback.
 */
export type TOnAfterFetchArgs = {
  /** The request URL. */
  url: string | URL;
  /** The fetch response, if available. */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  response?: TFetchResponse<any, string, string>;
  /** Response headers, if available. */
  headers?: Headers;
};

/**
 * Hook function executed after a fetch request.
 *
 * @param args - The fetch response details after execution.
 */
export type TOnAfterFetch = (args: TOnAfterFetchArgs) => void;

/**
 * Context type for managing API connections.
 */
export type TConnectionContext = {
  /** The base API URL for requests. */
  url: string;
  /** Optional headers to include with requests. */
  headers?: HeadersInit;
  /** Optional default configuration settings for the connection. */
  config?: TConnectionConfig;
  /** Callback function executed before a request. */
  onBefore?: TOnBeforeFetch;
  /** Callback function executed after a request. */
  onAfter?: TOnAfterFetch;
};

/**
 * Possible status values for an API request.
 */
export type TStatus = 'success' | 'error';

/**
 * State representation for API responses.
 *
 * @template TResponseData - The expected response data type.
 * @template TValidationErrorField - Type of validation error field names.
 * @template TErrorCode - Type of error codes.
 */
export type TState<
  TResponseData,
  TValidationErrorField extends string = string,
  TErrorCode extends string = string,
> = {
  /** Indicates if the request is currently loading. */
  loading: boolean;
  /** Indicates if the request is being validated. */
  validating: boolean;
  /** The data received from the request, if available. */
  data: TResponseData | undefined;
  /** Array of errors, if any occurred. */
  error: TError<TErrorCode> | undefined;
  /** Object containing validation errors, if any occurred. */
  validationErrors: TValidationError<TValidationErrorField> | undefined;
  /** The status of the request (`success` or `error`). */
  status: TStatus | undefined;
  /** HTTP status code of the response. */
  statusCode: number | undefined;
  /** HTTP status text of the response. */
  statusText: string | undefined;
};

/**
 * Represents the standard and custom search parameters for querying a model collection.
 *
 * @template TSearchParams - Additional custom search/filter parameters.
 */
export type TModelCollectionSearchParams<TSearchParams> = {
  /** Page number for pagination (0-indexed or 1-indexed depending on backend convention). */
  page?: number;
  /** Number of items to retrieve per page. */
  size?: number;
  /** Field name to sort by. */
  sortBy?: string;
  /** Sort order: ascending or descending. */
  sortOrder?: 'asc' | 'desc';
  /** General search query string. */
  search?: string;
} & TSearchParams;

/**
 * Generic representation of a paginated model collection with optional search parameters.
 *
 * @template TModel - The model type of the individual items.
 * @template TSearchParams - Additional search parameters (optional).
 */
export type TModelCollection<
  TModel,
  TSearchParams = {
    page?: number;
    size?: number;
    sortBy?: string;
    sortOrder?: 'asc' | 'desc';
    search?: string;
  },
> = {
  /** Array of model items returned in the current page. */
  items?: TModel[];
  /** Total number of items available across all pages. */
  total?: number;
} & TModelCollectionSearchParams<TSearchParams>;
