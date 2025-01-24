import ExceptLayout from '@components/except/exceptLayout/ExceptLayout';
import RedirectionPage from '@pages/RedirectionPage/RedirectionPage';
import { lazy, Suspense } from 'react';
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
import App from 'src/App';
import PrivateRoute from 'src/router/PrivateRoute';

const HomePage = lazy(() => import('@pages/homePage/HomePage'));
const SearchPage = lazy(() => import('@pages/searchPage/SearchPage'));
const ErrorPage = lazy(() => import('@pages/ErrorPage'));
const FilterPage = lazy(() => import('@pages/filterPage/FilterPage'));
const MyPage = lazy(() => import('@pages/myPage/MyPage'));
const SearchResultPage = lazy(() => import('@pages/searchResultPage/SearchResultPage'));
const OnboardingPage = lazy(() => import('@pages/onboardingPage/OnboardingPage'));
const WelcomePage = lazy(() => import('@pages/welcomePage/WelcomePage'));
const WishListPage = lazy(() => import('@pages/wishList/WishListPage'));
const LoginPage = lazy(() => import('@pages/loginPage/LoginPage'));
const DetailPage = lazy(() => import('@pages/templeDetailPage/TempleDetailPage'));
const LargeMap = lazy(() => import('@components/templeDetail/naverMap/largeMap/LargeMap'));
const DetailPhoto = lazy(() => import('@pages/templeDetailPage/templePhoto/TemplePhotoPage'));
const DetailBlog = lazy(() => import('@pages/templeDetailPage/blogReview/BlogReviewPage'));
const CurationPage = lazy(() => import('@pages/CurationPage/CurationPage'));
const ModalLoginPage = lazy(() => import('@pages/loginPage/ModalLoginPage'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<ExceptLayout type="loading" />}>
            <HomePage />
          </Suspense>
        ),
      },
      {
        path: 'search',
        element: <SearchPage />,
      },
      {
        path: 'searchResult',
        element: (
          <Suspense fallback={<ExceptLayout type="loading" />}>
            <SearchResultPage />
          </Suspense>
        ),
      },
      {
        path: 'filter',
        element: <FilterPage />,
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
            <Suspense fallback={<ExceptLayout type="loading" />}>
              <WishListPage />
            </Suspense>
          </PrivateRoute>
        ),
      },
      {
        path: 'login',
        element: <LoginPage />,
      },
      {
        path: 'auth',
        element: <RedirectionPage />,
      },
      {
        path: 'onboarding',
        element: (
          <Suspense fallback={<ExceptLayout type="loading" />}>
            <OnboardingPage />
          </Suspense>
        ),
      },
      {
        path: 'welcome',
        element: <WelcomePage />,
      },
      {
        path: 'detail/:templestayId',
        element: (
          <Suspense fallback={<ExceptLayout type="loading" />}>
            <DetailPage />
          </Suspense>
        ),
      },
      {
        path: 'detail/:templestayId/photo',
        element: (
          <Suspense fallback={<ExceptLayout type="loading" />}>
            <DetailPhoto />
          </Suspense>
        ),
      },
      {
        path: '/detail/:templestayId/blog',
        element: (
          <Suspense fallback={<ExceptLayout type="loading" />}>
            <DetailBlog />
          </Suspense>
        ),
      },
      {
        path: '/detail/:templestayId/map',
        element: (
          <Suspense fallback={<ExceptLayout type="loading" />}>
            <LargeMap />
          </Suspense>
        ),
      },
      {
        path: 'curation/:index',
        element: (
          <Suspense fallback={<ExceptLayout type="loading" />}>
            <CurationPage />
          </Suspense>
        ),
      },
      {
        path: 'loginStart',
        element: <ModalLoginPage />,
      },
    ],
  },
  {
    path: '*',
    element: <Navigate to="/" replace />,
  },
]);

const Router = () => <RouterProvider router={router} />;

export default Router;
