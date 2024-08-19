import { lazy, Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import MainLayout from 'src/layouts/main';

import { SplashScreen } from 'src/components/loading-screen';

// ----------------------------------------------------------------------

export const HomePage = lazy(() => import('src/pages/home'));
const SplashGraveyardPage = lazy(() => import('src/pages/fellesraad/graveyard/splash-list'));
const SplashGraveyardDetailsViewPage = lazy(
  () => import('src/pages/fellesraad/graveyard/splash-details')
);

// ----------------------------------------------------------------------

export const mainRoutes = [
  {
    element: (
      <MainLayout>
        <Suspense fallback={<SplashScreen />}>
          <Outlet />
        </Suspense>
      </MainLayout>
    ),
    children: [
      { path: '/', element: <HomePage /> },
      {
        path: 'splash-graveyard',
        children: [
          { element: <SplashGraveyardPage />, index: true },
          { path: ':id', element: <SplashGraveyardDetailsViewPage /> },
        ],
      },
    ],
  },
];
