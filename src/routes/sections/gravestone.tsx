import { lazy, Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { AuthGuard } from 'src/auth/guard';
import DashboardLayout from 'src/layouts/dashboard';

import { LoadingScreen } from 'src/components/loading-screen';

// PRODUCT
const ProductDetailsPage = lazy(() => import('src/pages/dashboard/gravestone/details'));
const GravestoneListPage = lazy(() => import('src/pages/dashboard/gravestone/list'));
const ProductEditPage = lazy(() => import('src/pages/dashboard/gravestone/edit'));

const GravestoneCreatePage = lazy(() => import('src/pages/dashboard/gravestone/new'));

// ----------------------------------------------------------------------

export const gravestoneRoutes = [
  {
    path: 'gravestone',
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
      { element: <GravestoneListPage />, index: true },
      { path: 'list', element: <GravestoneListPage /> },
      { path: ':id', element: <ProductDetailsPage /> },
      { path: 'create', element: <GravestoneCreatePage /> },
      { path: ':id/edit', element: <ProductEditPage /> },
    ],
  },
];
