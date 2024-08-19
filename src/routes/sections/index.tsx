import { Navigate, useRoutes } from 'react-router-dom';

import { authRoutes } from './auth';
import { mainRoutes } from './main';
import { adminRoutes } from './admin';
import { orderRoutes } from './order';
import { serviceRoutes } from './service';
import { customerRoutes } from './customer';
import { dashboardRoutes } from './dashboard';
import { graveyardRoutes } from './graveyard';
import { gravestoneRoutes } from './gravestone';

// ----------------------------------------------------------------------

export default function Router() {
  return useRoutes([
    // SET INDEX PAGE WITH HOME PAGE

    // Auth routes
    ...authRoutes,

    // ADMIN routes
    ...adminRoutes,

    // Fellerrad routes
    ...graveyardRoutes,

    ...gravestoneRoutes,

    ...serviceRoutes,

    ...orderRoutes,

    // // Company routes
    // ...companyRoutes,

    // // Customer Routes
    ...customerRoutes,

    // Dashboard routes
    ...dashboardRoutes,

    // Main routes
    ...mainRoutes,

    // No match 404
    { path: '*', element: <Navigate to="/404" replace /> },
  ]);
}
