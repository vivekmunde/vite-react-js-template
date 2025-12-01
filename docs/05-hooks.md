# Custom Hooks

## API Hooks

- `useFetch`: HTTP request methods
- `useQuery`: SWR data fetching
- `useMutate`: Mutation operations
- `useRevalidate`: Cache revalidation
- `useApiErrorHandler`: Centralized error handling

## Auth & User

- `useLoggedInUser`: Current user data
- `useLoggedInOrganization`: Active organization
- `useMyOrganizations`: User's organizations list
- `useMyOrganizationPermissions`: Organization permissions
- `useMySystemPermissions`: System permissions
- `useMySystemRoles`: System roles

## RBAC

- `useIsOrganizationUserAuthorized`: Organization permission check
- `useIsSystemUserAuthorized`: System permission check

## UI State

- `useLanguage`: Current language
- `useTheme`: Theme mode (light/dark)
- `useIsOnline`: Network status
- `useSearchParams`: URL search params management
- `useLocalStorage`: LocalStorage wrapper
