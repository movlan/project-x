import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react';

import './index.css';
import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
import ErrorPage from './error-page';
import LoggedOut from './pages/LoggedOut/LoggedOut';
import Profile from './pages/Profile';
const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <ErrorPage />,
    children: [],
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/logout',
    element: <LoggedOut />,
  },
  {
    path: '/profile',
    element: <Profile />,
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Auth0Provider
      domain="movlan.us.auth0.com"
      clientId="25QARK1xlfGgiqh9pNouuDH2xz737tlM"
      authorizationParams={{
        redirect_uri: window.location.origin,
        audience: 'https://blog.bahram.dev',
        scope: 'read:users',
      }}
    >
      <RouterProvider router={router} />
    </Auth0Provider>
  </StrictMode>,
);
