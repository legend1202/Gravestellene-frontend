import { lazy, Suspense } from "react";
import { Outlet } from "react-router-dom";

import { AuthGuard } from "src/auth/guard";
import DashboardLayout from "src/layouts/dashboard";

import { LoadingScreen } from "src/components/loading-screen";

const OrderApprovePage = lazy(() =>
  import("src/pages/fellesraad/order/approve")
);

// ----------------------------------------------------------------------

export const orderRoutes = [
  {
    path: "order",
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
      { element: <OrderApprovePage />, index: true },
      { path: "approve", element: <OrderApprovePage /> },
      //   { path: ":id", element: <GraveyardDetailsPage /> },
      //   { path: "create", element: <GraveyardCreateView /> },
      //   { path: ":id/edit", element: <GraveyardEditPage /> },
    ],
  },
];
