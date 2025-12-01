# API Layer

## Connection Provider

`ConnectionProvider` wraps the app and provides:

- Base API URL (includes language prefix)
- Request/response hooks (`onBefore`, `onAfter`)
- SWR configuration

## Core Hooks

### `useFetch`

HTTP methods: `get`, `post`, `put`, `patch`, `delete`

- Generic type support for request/response data
- Validation error handling
- Custom error codes

### `useQuery`

SWR-based data fetching with:

- Automatic caching
- Revalidation
- Loading/error states

### `useMutate`

Mutation operations with:

- Optimistic updates
- Cache invalidation
- Error handling

### `useFetcher`

Low-level fetch wrapper with:

- Request queuing
- Cancellation support
- Timeout configuration

## Response Types

- `TFetchResponse<TData>`: Standardized response wrapper
- `TResponseBody`: `data`, `error`, `validationErrors`
- `TValidationError`: Field-level validation errors
- `TError<TErrorCode>`: Error with code and message

## API Interfaces

Type definitions in `src/api-interfaces/` organized by:

- `auth/`: Authentication endpoints
- `me/`: User profile endpoints
- `system/`: System-level endpoints
- `[organizationId]/`: Organization-scoped endpoints
