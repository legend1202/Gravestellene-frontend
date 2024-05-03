import { lazy, Suspense } from "react";
import { Outlet } from "react-router-dom";

import { AdminGuard } from "src/auth/guard";
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

export const adminRoutes = [
  {
    path: "admin",
    element: (
      <AdminGuard>
        <DashboardLayout>
          <Suspense fallback={<LoadingScreen />}>
            <Outlet />
          </Suspense>
        </DashboardLayout>
      </AdminGuard>
    ),
    children: [
      { element: <IndexPage />, index: true },
      { path: "userrolemng", element: <OverviewEcommercePage /> },
      { path: "graveyardmng", element: <OverviewAnalyticsPage /> },
      { path: "servicemng", element: <OverviewBankingPage /> },
      { path: "userinfosend", element: <OverviewBookingPage /> },
      //   { path: "file", element: <OverviewFilePage /> },
      //   {
      //     path: "user",
      //     children: [
      //       { element: <UserProfilePage />, index: true },
      //       { path: "profile", element: <UserProfilePage /> },
      //       { path: "cards", element: <UserCardsPage /> },
      //       { path: "list", element: <UserListPage /> },
      //       { path: "new", element: <UserCreatePage /> },
      //       { path: ":id/edit", element: <UserEditPage /> },
      //       { path: "account", element: <UserAccountPage /> },
      //     ],
      //   },
      //   {
      //     path: "product",
      //     children: [
      //       { element: <ProductListPage />, index: true },
      //       { path: "list", element: <ProductListPage /> },
      //       { path: ":id", element: <ProductDetailsPage /> },
      //       { path: "new", element: <ProductCreatePage /> },
      //       { path: ":id/edit", element: <ProductEditPage /> },
      //     ],
      //   },
      //   {
      //     path: "order",
      //     children: [
      //       { element: <OrderListPage />, index: true },
      //       { path: "list", element: <OrderListPage /> },
      //       { path: ":id", element: <OrderDetailsPage /> },
      //     ],
      //   },
      //   {
      //     path: "invoice",
      //     children: [
      //       { element: <InvoiceListPage />, index: true },
      //       { path: "list", element: <InvoiceListPage /> },
      //       { path: ":id", element: <InvoiceDetailsPage /> },
      //       { path: ":id/edit", element: <InvoiceEditPage /> },
      //       { path: "new", element: <InvoiceCreatePage /> },
      //     ],
      //   },
      //   {
      //     path: "post",
      //     children: [
      //       { element: <BlogPostsPage />, index: true },
      //       { path: "list", element: <BlogPostsPage /> },
      //       { path: ":title", element: <BlogPostPage /> },
      //       { path: ":title/edit", element: <BlogEditPostPage /> },
      //       { path: "new", element: <BlogNewPostPage /> },
      //     ],
      //   },
      //   {
      //     path: "job",
      //     children: [
      //       { element: <JobListPage />, index: true },
      //       { path: "list", element: <JobListPage /> },
      //       { path: ":id", element: <JobDetailsPage /> },
      //       { path: "new", element: <JobCreatePage /> },
      //       { path: ":id/edit", element: <JobEditPage /> },
      //     ],
      //   },
      //   {
      //     path: "tour",
      //     children: [
      //       { element: <TourListPage />, index: true },
      //       { path: "list", element: <TourListPage /> },
      //       { path: ":id", element: <TourDetailsPage /> },
      //       { path: "new", element: <TourCreatePage /> },
      //       { path: ":id/edit", element: <TourEditPage /> },
      //     ],
      //   },
      //   { path: "file-manager", element: <FileManagerPage /> },
      //   { path: "mail", element: <MailPage /> },
      //   { path: "chat", element: <ChatPage /> },
      //   { path: "calendar", element: <CalendarPage /> },
      //   { path: "kanban", element: <KanbanPage /> },
      //   { path: "permission", element: <PermissionDeniedPage /> },
      //   { path: "blank", element: <BlankPage /> },
    ],
  },
];
