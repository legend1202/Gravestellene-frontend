import { lazy, Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { AuthGuard } from 'src/auth/guard';
import DashboardLayout from 'src/layouts/dashboard';

import { LoadingScreen } from 'src/components/loading-screen';

// PRODUCT
const ProductDetailsPage = lazy(() => import('src/pages/dashboard/gravestone/details'));
const ProductListPage = lazy(() => import('src/pages/dashboard/gravestone/list'));
const ProductEditPage = lazy(() => import('src/pages/dashboard/gravestone/edit'));

const GraveyardCreateView = lazy(() => import('src/pages/fellesraad/graveyard/create'));

// ----------------------------------------------------------------------

export const graveyardRoutes = [
  {
    path: 'graveyard',
    element: (
      <AuthGuard>
        <DashboardLayout>
          <Suspense fallback={<LoadingScreen />}>
            <Outlet />
          </Suspense>
        </DashboardLayout>
      </AuthGuard>
    ),
    children: [
      { element: <ProductListPage />, index: true },
      { path: 'list', element: <ProductListPage /> },
      { path: ':id', element: <ProductDetailsPage /> },
      { path: 'create', element: <GraveyardCreateView /> },
      { path: ':id/edit', element: <ProductEditPage /> },
    ],
  },
];
