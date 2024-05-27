import { lazy, Suspense } from "react";
import { Outlet } from "react-router-dom";

import { AuthGuard } from "src/auth/guard";
import DashboardLayout from "src/layouts/dashboard";

import { LoadingScreen } from "src/components/loading-screen";
// const ProductCheckoutPage = lazy(() => import("src/pages/product/checkout"));
const ServiceOrderPage = lazy(() => import("src/pages/client/service-order"));
// ----------------------------------------------------------------------

export const customerRoutes = [
  {
    path: "customer",
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
      { element: <ServiceOrderPage />, index: true },
      { path: "serviceorder/:id/:graveyardId", element: <ServiceOrderPage /> },
      // { path: "contact-us", element: <ContactPage /> },
      // { path: "faqs", element: <FaqsPage /> },
      // {
      //   path: "product",
      //   children: [
      //     { element: <ProductListPage />, index: true },
      //     { path: "list", element: <ProductListPage /> },
      //     { path: ":id", element: <ProductDetailsPage /> },
      //     { path: "checkout", element: <ProductCheckoutPage /> },
      //   ],
      // },
    ],
  },
];
