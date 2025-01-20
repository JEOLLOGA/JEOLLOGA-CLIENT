import ExceptLayout from '@components/except/exceptLayout/ExceptLayout';
import LoginPage from '@pages/loginPage/LoginPage';

import { lazy, Suspense } from 'react';
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
import App from 'src/App';
import PrivateRoute from 'src/router/PrivateRoute';

const HomePage = lazy(() => import('@pages/HomePage'));
const SearchPage = lazy(() => import('@pages/searchPage/SearchPage'));
const ErrorPage = lazy(() => import('@pages/ErrorPage'));
const MyPage = lazy(() => import('@pages/myPage/MyPage'));
const WishListPage = lazy(() => import('@pages/wishList/WishListPage'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'search',
        element: <SearchPage />,
      },
      {
        path: 'myPage',
        element: (
          <PrivateRoute redirectPath="/login" state={{ type: 'my' }}>
            <MyPage />
          </PrivateRoute>
        ),
      },
      {
        path: 'wishList',
        element: (
          <PrivateRoute redirectPath="/login" state={{ type: 'wish' }}>
            <WishPage />
          </PrivateRoute>
        ),
      },
      {
        path: 'login',
        element: <LoginPage />,
      },
    ],
  },
  {
    path: '*',
    element: <Navigate to="/" replace />,
  },
]);

const Router = () => (
  <Suspense fallback={<ExceptLayout type="loading" />}>
    <RouterProvider router={router} />
  </Suspense>
);

export default Router;
