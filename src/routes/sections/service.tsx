import { lazy, Suspense } from "react";
import { Outlet } from "react-router-dom";

import { AuthGuard } from "src/auth/guard";
import DashboardLayout from "src/layouts/dashboard";
import ServiceEditPage from "src/pages/company/service/edit";

import { LoadingScreen } from "src/components/loading-screen";

const ServiceListApprove = lazy(() =>
  import("src/pages/fellesraad/service/approve")
);

const ServiceCreatePage = lazy(() =>
  import("src/pages/company/service/create")
);

const ServiceRequestPage = lazy(() =>
  import("src/pages/company/service/order")
);

const ServiceListPage = lazy(() => import("src/pages/company/service/list"));

const ServiceDetailsPage = lazy(() =>
  import("src/pages/company/service/detail")
);

// ----------------------------------------------------------------------

export const serviceRoutes = [
  {
    path: "service",
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
      { element: <ServiceCreatePage />, index: true },
      { path: "approve", element: <ServiceListApprove /> },
      { path: "create", element: <ServiceCreatePage /> },
      { path: "order", element: <ServiceRequestPage /> },
      { path: "list", element: <ServiceListPage /> },
      { path: "detail", element: <ServiceDetailsPage /> },
      //   { path: ":id", element: <GraveyardDetailsPage /> },
      //   { path: "create", element: <GraveyardCreateView /> },
      { path: ":id/edit", element: <ServiceEditPage /> },
    ],
  },
];
