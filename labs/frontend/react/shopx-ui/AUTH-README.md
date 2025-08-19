# Authentication System Documentation

## Overview
This document outlines the authentication system implemented in the ShopX e-commerce application. The system provides secure user authentication with protected routes, session persistence, and role-based navigation.

## Features

### 1. Authentication Context (`AuthContext`)
- Manages user authentication state
- Handles login/logout functionality
- Persists session using `localStorage`
- Provides user information throughout the application

### 2. Login Page (`/login`)
- Email/password authentication form
- Form validation
- Error handling
- Remember me functionality
- Test credentials for demo purposes

### 3. Protected Routes
- `/products` - Requires authentication
- `/cart` - Requires authentication
- Unauthenticated users are redirected to login
- Original destination is remembered and restored after login

### 4. Navigation
- Dynamic header based on authentication state
- Login/Logout buttons
- Protected route access control

## Implementation Details

### Authentication Flow
1. User enters credentials and submits the login form
2. Credentials are sent to the authentication API with the required API key
3. On success, the JWT token is stored in `localStorage`
4. The authentication state is updated throughout the app
5. Protected routes become accessible
6. User can log out, which clears the session

### API Integration
- **Base URL**: `https://reqres.in/api`
- **Login Endpoint**: `POST /login`
- **Required Headers**:
  ```
  x-api-key: reqres-free-v1
  Content-Type: application/json
  ```
- **Request Body**:
  ```json
  {
    "email": "eve.holt@reqres.in",
    "password": "cityslicka"
  }
  ```
- **Response**:
  ```json
  {
    "token": "QpwL5tke4Pnpja7X4"
  }
  ```

## Test Credentials
For development and testing, you can use these credentials:
- **Email**: `eve.holt@reqres.in`
- **Password**: `cityslicka`

## Components

### AuthProvider
Wraps the application and provides authentication context to all child components.

### useAuth Hook
Custom hook to access authentication state and methods:
```typescript
const { 
  user,        // Current user object or null
  login,       // Login function (email, password) => Promise<void>
  logout,      // Logout function () => void
  loading,     // Loading state boolean
  error        // Error message string or null
} = useAuth();
```

### ProtectedRoute Component
Higher-order component that protects routes from unauthenticated access:
```typescript
<Route
  path="/protected"
  element={
    <ProtectedRoute>
      <ProtectedComponent />
    </ProtectedRoute>
  }
/>
```

## State Management
- User session is persisted in `localStorage` under the key `shopx_auth`
- The app state is kept in sync with the persisted session
- Loading and error states are managed for better UX

## Security Considerations
- JWT tokens are stored in `localStorage`
- API key is included in request headers
- Sensitive operations require authentication
- Protected routes prevent unauthorized access

## Error Handling
- Invalid credentials
- Network errors
- Session expiration
- Protected route access attempts

## Dependencies
- `react-router-dom` - For routing and navigation
- `axios` - For HTTP requests
- `react-icons` - For UI icons

## Usage Examples

### Checking Authentication Status
```typescript
const { user } = useAuth();

if (user) {
  // User is authenticated
} else {
  // User is not authenticated
}
```

### Making Authenticated Requests
```typescript
const { user } = useAuth();

const fetchData = async () => {
  try {
    const response = await axios.get('/api/protected', {
      headers: {
        'Authorization': `Bearer ${user?.token}`
      }
    });
    // Handle response
  } catch (error) {
    // Handle error
  }
};
```

## Future Improvements
- Password reset functionality
- User registration
- Role-based access control
- Refresh token implementation
- Session timeout
- Two-factor authentication
