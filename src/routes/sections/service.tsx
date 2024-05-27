import { lazy, Suspense } from "react";
import { Outlet } from "react-router-dom";

import { AuthGuard } from "src/auth/guard";
import DashboardLayout from "src/layouts/dashboard";
import ServiceEditPage from "src/pages/company/service/edit";

import { LoadingScreen } from "src/components/loading-screen";

const ServiceCreatePage = lazy(() =>
  import("src/pages/company/service/create")
);

const ServiceOrderPage = lazy(() =>
  import("src/pages/company/service/order")
);

const ServiceListPage = lazy(() => import("src/pages/company/service/list"));

const ServiceRequestPage = lazy(() =>
  import("src/pages/company/service/request")
);

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
      { path: "approve", element: <ServiceListPage /> },
      { path: "create", element: <ServiceCreatePage /> },
      { path: "order", element: <ServiceOrderPage /> },
      { path: "list", element: <ServiceListPage /> },
      { path: "request", element: <ServiceRequestPage /> },
      { path: "detail", element: <ServiceDetailsPage /> },
      //   { path: ":id", element: <GraveyardDetailsPage /> },
      //   { path: "create", element: <GraveyardCreateView /> },
      { path: ":id/edit", element: <ServiceEditPage /> },
    ],
  },
];
