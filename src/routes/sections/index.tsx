import { Navigate, useRoutes } from "react-router-dom";

import MainLayout from "src/layouts/main";

import { authRoutes } from "./auth";
// import { adminRoutes } from "./admin";
// import { companyRoutes } from "./company";
import { HomePage, mainRoutes } from "./main";
import { dashboardRoutes } from "./dashboard";

// ----------------------------------------------------------------------

export default function Router() {
  return useRoutes([
    // SET INDEX PAGE WITH HOME PAGE
    {
      path: "/",
      element: (
        <MainLayout>
          <HomePage />
        </MainLayout>
      ),
    },

    // Auth routes
    ...authRoutes,

    // // ADMIN routes
    // ...adminRoutes,

    // // Fellerrad routes
    // ...fellerradRoutes,

    // // Company routes
    // ...companyRoutes,

    // // Customer Routes
    // ...customerRoutes,

    // Dashboard routes
    ...dashboardRoutes,

    // Main routes
    ...mainRoutes,

    // No match 404
    { path: "*", element: <Navigate to="/404" replace /> },
  ]);
}
