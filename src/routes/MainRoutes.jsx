import { lazy, Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import DashboardLayout from '../layouts/dashboard';

export const IndexPage = lazy(() => import('../pages/app'));
export const BlogPage = lazy(() => import('../pages/blog'));
export const UserPage = lazy(() => import('../pages/user'));
export const CompanyPage = lazy(() => import('../pages/company'));

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
    { path: 'company', element: <CompanyPage />}
  ],
};

export default MainRoutes;
