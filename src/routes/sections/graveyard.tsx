import { lazy, Suspense } from "react";
import { Outlet } from "react-router-dom";

import { AuthGuard } from "src/auth/guard";
import DashboardLayout from "src/layouts/dashboard";

import { LoadingScreen } from "src/components/loading-screen";
import ProductListPage from "src/pages/fellesraad/list";
import ProductCreatePage from "src/pages/fellesraad/new";

// ----------------------------------------------------------------------

// OVERVIEW
const IndexPage = lazy(() => import("src/pages/dashboard/app"));
const OverviewAnalyticsPage = lazy(() =>
  import("src/pages/dashboard/analytics")
);
const OverviewBankingPage = lazy(() => import("src/pages/dashboard/banking"));
const OverviewBookingPage = lazy(() => import("src/pages/dashboard/booking"));
const OverviewFilePage = lazy(() => import("src/pages/dashboard/file"));

const ProfileCreateView = lazy(() => import("src/pages/fellesraad/profile"));
// ----------------------------------------------------------------------

export const graveyardRoutes = [
  {
    path: "graveyard",
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
      { path: "new", element: <ProductCreatePage /> },
      { path: "profile", element: <ProfileCreateView /> },
      { path: "analytics", element: <OverviewAnalyticsPage /> },
      { path: "banking", element: <OverviewBankingPage /> },
      { path: "booking", element: <OverviewBookingPage /> },
      { path: "file", element: <OverviewFilePage /> },
    ],
  },
];
