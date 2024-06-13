import { lazy, Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import DashboardLayout from 'src/layouts/dashboard';

export const IndexPage = lazy(() => import('src/pages/app'));
export const BlogPage = lazy(() => import('src/pages/blog'));
export const UserPage = lazy(() => import('src/pages/user'));

// ----------------------------------------------------------------------

const MainRoutes = {
  element: (
    <DashboardLayout>
      <Suspense>
        <Outlet />
      </Suspense>
    </DashboardLayout>
  ),
  children: [
    // { element: <IndexPage />, index: true },
    { path: 'dashboard', element: <IndexPage /> },
    { path: 'user', element: <UserPage /> },
  ],
};

export default MainRoutes;
