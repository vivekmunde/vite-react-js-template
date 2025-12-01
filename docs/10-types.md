# Type Definitions

## Core Types

### RBAC

- `TPermission`: Union of permission strings
- Defined in `src/types/rbac.ts`

### Theme

- `TTheme`: `'light' | 'dark'`
- Defined in `src/types/theme.ts`

### Language

- `TLanguage`: Language codes
- Defined in `src/types/language.ts`

## API Types

Located in `src/api/types.ts`:

- `TFetchResponse<TData>`: Fetch response wrapper
- `TResponseBody`: API response structure
- `TValidationError`: Field validation errors
- `TError<TErrorCode>`: Error object
- `TState`: Request state (loading, data, error)
- `TModelCollection`: Paginated collection

## API Interfaces

Type-safe interfaces in `src/api-interfaces/`:

- Request/response types per endpoint
- Organized by feature (auth, me, system, organizations)
