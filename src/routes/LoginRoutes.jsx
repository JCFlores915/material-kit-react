import { lazy } from 'react';
import { Outlet } from 'react-router-dom';

export const IndexPage = lazy(() => import('../pages/app'));
export const BlogPage = lazy(() => import('../pages/blog'));
export const UserPage = lazy(() => import('../pages/user'));
export const LoginPage = lazy(() => import('../pages/login'));
export const ProductsPage = lazy(() => import('../pages/products'));
export const Page404 = lazy(() => import('../pages/page-not-found'));

// ----------------------------------------------------------------------

const LoginRouter = {
  element: <Outlet />,
  children: [
    { element: <LoginPage />, path: '/' },
    { element: <LoginPage />, path: '*' },
    { element: <LoginPage />, path: 'login' },
  ],
};

export default LoginRouter;
