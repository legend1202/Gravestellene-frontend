import { lazy, Suspense } from "react";
import { Outlet } from "react-router-dom";

import { AuthGuard } from "src/auth/guard";
import DashboardLayout from "src/layouts/dashboard";

import { LoadingScreen } from "src/components/loading-screen";

// PRODUCT
// const ProductDetailsPage = lazy(() =>
//   import("src/pages/dashboard/product/details")
// );
// const ProductListPage = lazy(() => import("src/pages/dashboard/product/list"));
const GraveyardEditPage = lazy(() =>
  import("src/pages/fellesraad/graveyard/edit")
);

const GraveyardCreateView = lazy(() =>
  import("src/pages/fellesraad/graveyard/create")
);
const GraveyardList = lazy(() => import("src/pages/fellesraad/graveyard/list"));
const GraveyardDetailsPage = lazy(() =>
  import("src/pages/fellesraad/graveyard/details")
);

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
      { element: <GraveyardList />, index: true },
      { path: "list", element: <GraveyardList /> },
      { path: ":id", element: <GraveyardDetailsPage /> },
      { path: "create", element: <GraveyardCreateView /> },
      { path: ":id/edit", element: <GraveyardEditPage /> },
    ],
  },
];
