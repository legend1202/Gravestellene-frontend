import { lazy, Suspense } from "react";
import { Outlet } from "react-router-dom";

import { AuthGuard } from "src/auth/guard";
import DashboardLayout from "src/layouts/dashboard";

import { LoadingScreen } from "src/components/loading-screen";

// ----------------------------------------------------------------------

// OVERVIEW
const IndexPage = lazy(() => import("src/pages/dashboard/app"));
const OverviewEcommercePage = lazy(() =>
  import("src/pages/dashboard/ecommerce")
);
const OverviewAnalyticsPage = lazy(() =>
  import("src/pages/dashboard/analytics")
);
const OverviewBankingPage = lazy(() => import("src/pages/dashboard/banking"));
const OverviewBookingPage = lazy(() => import("src/pages/dashboard/booking"));

// ----------------------------------------------------------------------

export const companyRoutes = [
  {
    path: "company",
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
      { element: <IndexPage />, index: true },
      { path: "landingpage", element: <OverviewEcommercePage /> },
      { path: "services", element: <OverviewAnalyticsPage /> },
      { path: "orderedservices", element: <OverviewBankingPage /> },
      { path: "graveyard", element: <OverviewBookingPage /> },
    ],
  },
];
