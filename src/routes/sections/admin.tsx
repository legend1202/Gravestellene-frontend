import { lazy, Suspense } from "react";
import { Outlet } from "react-router-dom";

import { AuthGuard } from "src/auth/guard";
import DashboardLayout from "src/layouts/dashboard";

import { LoadingScreen } from "src/components/loading-screen";

const AdminUserList = lazy(() => import("src/pages/admin/user/list"));

// ----------------------------------------------------------------------

export const adminRoutes = [
  {
    path: "admin",
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
      { element: <AdminUserList />, index: true },
      { path: "userlist", element: <AdminUserList /> },
      //   { path: ":id", element: <GraveyardDetailsPage /> },
      //   { path: "create", element: <GraveyardCreateView /> },
      //   { path: ":id/edit", element: <GraveyardEditPage /> },
    ],
  },
];
