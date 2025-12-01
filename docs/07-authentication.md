# Authentication

## Flow

1. Login page (`/authentication/login`)
2. Email verification (`/authentication/verify-email`)
3. OTP verification (`/authentication/verify-otp`)
4. Session management via `use-user-login-session`
5. Logout (`/authentication/logout`)

## Components

- `Authentication`: Wraps app, manages auth state
- `LoginPage`: Login form
- `VerifyEmailPage`: Email verification
- `VerifyOTPPage`: OTP input
- `LogoutPage`: Session termination

## Session

- Stored in localStorage
- Auto-refresh on activity
- Reset via `reset-login-session`

## Guards

- `Authentication` component redirects unauthenticated users
- Protected routes require valid session
